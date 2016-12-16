<?php
/**
 * Plugin Name: Carbon Search Engine Visibility
 * Description: A tiny plugin that reminds us to enable search engine visibility for production websites.
 * Version: 1.1
 * Requires at least: 3.8
 * Tested up to: 4.5.3
 */

class Carbon_Search_Engine_Visibility {

	/**
	 * Constructor.
	 *
	 * Initializes and hooks our search engine visibility observers.
	 */
	public function __construct() {
		// do nothing if the `blog_public` option is enabled
		if (get_option('blog_public')) {
			return;
		}

		// don't bother displaying warnings in development instances
		if ( $this->is_development_environment() ) {
			return;
		}

		add_action('init', array( $this, 'init' ) );
	}

	/**
	 * Initialize the plugin functionality.
	 * Will not bother users who lack the manage_options capability.
	 */
	public function init() {
		// bail for non-logged in users
		if (!is_user_logged_in()) {
			return;
		}

		// bail if the notice is currently hidden
		$current_user = wp_get_current_user();
		$disabled_until = get_user_meta($current_user->ID, '_carbon_seo_notice_disable', 1);

		if ( $disabled_until && $disabled_until > time() ) {
			return;
		}

		if (is_admin()) {
			add_action( 'current_screen', array( $this, 'setup_admin_notice' ) );

			// handle the "hide notice" action
			add_action( 'wp_ajax_hide_carbon_seo_notice', array( $this, 'hide_notice' ) );
		}

		// enqueue scripts & styles in admin & frontend
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );

		// add a custom item in the admin bar
		add_action( 'wp_before_admin_bar_render', array( $this, 'setup_admin_bar' ) );
	}

	/**
	 * Setup the administration notice.
	 */
	function setup_admin_notice( $current_screen ) {
		// Hide the warning on "Settings > Reading" screen
		if ( $current_screen->base === 'options-reading' ) {
			return;
		}

		// display the admin notice
		add_action( 'admin_notices', array( $this, 'render_notice' ) );
	}

	/**
	 * Render the administration notice.
	 * 
	 * Uses core WordPress functionality for:
	 * - error styles - coming from .error
	 * - dismissable functionality - coming from .notice.is-dismissable
	 */
	public function render_notice() {
		$link_url  = esc_url( admin_url( 'options-reading.php' ) );
		$link = '<a href="' . $link_url . '">' . __('Reading Settings', 'crb') . '</a>';
		$option_label = __('Search Engine Visibility');
		?>
		<div class="notice error is-dismissible carbon-seo-notice">
			<p>
				<?php if (current_user_can('manage_options')): ?>
					<strong><?php _e("You're blocking search engines from indexing this site.", 'crb'); ?></strong> 
					<?php printf( __('To fix this, go to %1$s and uncheck the box for <strong>%2$s</strong>.', 'crb'), $link, $option_label ); ?>
				<?php else: ?>
					<strong><?php _e('Search engines are blocked. ', 'crb'); ?></strong><?php _e('Please notify the site administrator.', 'crb'); ?>
				<?php endif; ?>
			</p>
		</div>
		<?php
	}

	/**
	 * Enqueue scripts & styles.
	 * Also used for localizing scripts.
	 */
	public function enqueue() {
		$url = plugin_dir_url(__FILE__) . basename(__FILE__, '.php') . '/';

		wp_enqueue_style('carbon-search-engine-visibility-main', $url . 'main.css');
		wp_enqueue_script('carbon-search-engine-visibility-main', $url . 'main.js', array('jquery'));

		$data = array(
			'notice_text' => __('Remind me in 2 weeks.'),
		);
		$data = apply_filters('carbon_seo_notice_data', $data);
		wp_localize_script('carbon-search-engine-visibility-main', 'Carbon_SEO_l11n', $data);
	}

	/**
	 * Actually hides the notice for the specified period.
	 * Period, but can be changed with the carbon_seo_notice_hidden_for filter.
	 */
	public function hide_notice() {
		$lifetime = 60 * 60 * 24 * 14; // 2 weeks
		$lifetime = apply_filters('carbon_seo_notice_hidden_for', $lifetime);

		$current_user = wp_get_current_user();
		update_user_meta($current_user->ID, '_carbon_seo_notice_disable', time() + $lifetime);
	}

	/**
	 * Create the admin bar menu warning item.
	 */
	public function setup_admin_bar() {
		global $wp_admin_bar;

		$wp_admin_bar->add_node(array(
			'id' => 'carbon-seo-notice',
			'title' => __("Search engines are blocked", 'crb'),
			'href' => admin_url( 'options-reading.php' ),
			'parent' => 'top-secondary'
		));
	}

	/**
	 * Check if the project is in a development environment.
	 *
	 * @return boolean
	 */
	protected function is_development_environment() {
		$http_host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';
		$is_dev_host = $http_host === 'localhost' || $http_host === 'wpbox7.net' || preg_match('~\.int$~i', $http_host);

		return apply_filters('carbon_seo_notice_is_development_environment', $is_dev_host);
	}
	
}

new Carbon_Search_Engine_Visibility();