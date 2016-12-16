<?php

use Carbon_Fields\Widget\Widget;
use Carbon_Fields\Field\Field;

/**
 * Register the new widget classes here so that they show up in the widget list.
 */
function crb_register_widgets() {
	register_widget( 'CrbThemeWidgetRichText' );
	register_widget( 'CrbThemeWidgetMenus' );
	register_widget( 'CrbThemeWidgetTwitterFeed' );
	register_widget( 'CrbThemeWidgetRecentTweets' );
	register_widget( 'CrbThemeWidgetLatestPosts' );
}
add_action( 'widgets_init', 'crb_register_widgets' );

/**
 * Displays a block with a title and WYSIWYG rich text content
 */
class CrbThemeWidgetRichText extends Widget {
	function __construct() {
		$this->setup(
			__( 'Rich Text', 'crb' ),
			__( 'Displays a block with title and WYSIWYG content.', 'crb' ),
			array(
				Field::make( 'text', 'title', __( 'Title', 'crb' ) ),
				Field::make( 'rich_text', 'content', __( 'Content', 'crb' ) ),
			)
		);
	}

	function front_end( $args, $instance ) {
		if ( $instance['title'] ) {
			$title = apply_filters( 'widget_title', $instance['title'], $instance, $this->id_base );

			echo $args['before_title'] . $title . $args['after_title'];
		}

		echo apply_filters( 'the_content', $instance['content'] );
	}
}

/**
 * Displays two menus
 */
class CrbThemeWidgetMenus extends Widget {
	function __construct() {
		$this->setup(
			__( 'Footer Menus', 'crb' ),
			__( 'Displays two menus. This widget should be used in the Footer sidebar only.', 'crb' ),
			array(
				Field::make( 'select', 'left_menu' )
					->set_options('crb_get_menus'),
				Field::make( 'select', 'right_menu' )
					->set_options('crb_get_menus'),
				Field::make( 'rich_text', 'text' ),
			)
		);
	}

	function front_end( $args, $instance ) {
		$left_menu  = wp_get_nav_menu_object( $instance['left_menu'] );
		$right_menu = wp_get_nav_menu_object( $instance['right_menu'] );

		if ( $instance['left_menu'] || $instance['text'] ): ?>
			<div class="inner-col">
				<?php if ( $left_menu ): ?>
					<?php echo $args['before_title'] . esc_html( $left_menu->name ) . $args['after_title']; ?>

					<?php wp_nav_menu( array(
						'menu' => $left_menu,
						'container' => false,
					) ); ?>
				<?php endif ?>

				<?php if ( $instance['text'] ): ?>
					<div class="copyright">
						<?php echo apply_filters( 'the_content', $instance['text'] ); ?>
					</div><!-- /.copyright -->
				<?php endif ?>
			</div>
		<?php endif ?>

		<div class="inner-col">
			<?php if ( $right_menu ): ?>
				<h6><?php echo esc_html( $right_menu->name ) ?></h6>

				<?php wp_nav_menu( array(
					'menu' => $right_menu,
					'container' => false,
				) ); ?>
			<?php endif ?>
		</div>

		<?php
	}
}
/**
 * Displays a Twitter feed
 */
class CrbThemeWidgetTwitterFeed extends Widget {
	function __construct() {
		$this->setup(
			__( 'Twitter Feed', 'crb' ),
			__( 'Displays a Twitter feed.', 'crb' ),
			array(
				Field::make( 'text', 'title' ),
				Field::make( 'text', 'twitter_username' )
					->set_required(true),
				Field::make( 'text', 'number' )
					->set_default_value(2)
					->set_required(true),
				Field::make( 'text', 'twitter_link' ),
				Field::make( 'text', 'facebook_link' ),
			)
		);
	}

	function front_end( $args, $instance ) {
		$number  = intval($instance['number']) ? $instance['number'] : 2;
		$socials = array( 'twitter', 'facebook' );
		$social_links = array();

		foreach ($socials as $name) {
			if ( $link = $instance[$name . '_link'] ) {
				$social_links[$name] = $link;
			}
		}

		?>
		<div class="twitter-feed">
			<?php if ( $title = apply_filters( 'widget_title', $instance['title'], $instance, $this->id_base ) ): ?>
				<?php echo $args['before_title'] ?>
					<i class="ico-twitter-white"></i>
					<?php echo $title ?>
				<?php echo $args['after_title'] ?>
			<?php endif ?>

			<a class='twitter-timeline' data-chrome='nofooter transparent noheader noborders' data-link-color='#288AD6' data-theme='dark' data-tweet-limit='<?php echo intval($number); ?>' data-widget-id="497742546039078912" height='300' href='https://twitter.com/<?php echo esc_html($instance['twitter_username']); ?>'>Tweets by @<?php echo esc_html($instance['twitter_username']); ?></a>
			<script>
			  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
			</script>
		</div><!-- /.twitter-feed -->

		<?php if ( $social_links ): ?>
			<div class="socials-footer">
				<ul>
					<?php foreach ($social_links as $name => $link): ?>
						<li>
							<a href="<?php echo esc_url($link) ?>" target="_blank" class="btn btn-white-large">
								<i class="ico-<?php echo $name ?>"></i>

								<?php echo __( 'Follow us on', 'crb' ) . ' ' . ucfirst($name) ?>
							</a>
						</li>
					<?php endforeach ?>
				</ul>
			</div><!-- /.socials-footer -->
		<?php endif;
	}
}

/*
	* Displays a Recent Tweets
*/

class CrbThemeWidgetRecentTweets extends Widget {
	function __construct() {
		$this->setup(
			__( 'Recent Tweets', 'crb' ),
			__( 'Displays a Recent Tweets.', 'crb' ),
			array(
				Field::make( 'text', 'title', __( 'Title', 'crb' ) ),
				Field::make( 'text', 'username', __( 'Twitter Username', 'crb' ) )->set_required(true),
				Field::make( 'number', 'number', __( 'Number', 'crb' ) ),
				Field::make( 'text', 'twitter_text', __( 'Twitter Text', 'crb' ) )->set_width(50)->set_required(true),
				Field::make( 'text', 'twitter_link', __( 'Twitter Link', 'crb' ) )->set_width(50)->set_required(true),
				Field::make( 'text', 'facebook_text', __( 'Facebook Text', 'crb' ) )->set_width(50)->set_required(true),
				Field::make( 'text', 'facebook_link', __( 'Facebook Link', 'crb' ) )->set_width(50)->set_required(true),
			)
		);
	}

	function front_end( $args, $instance ) {
		if ( $instance['title'] ) {
			$title = apply_filters( 'widget_title', $instance['title'], $instance, $this->id_base );

			echo $args['before_title'] . $title . $args['after_title'];
		}

		if ( ! $instance ) {
			return;
		}
		if ( $instance['username'] ) {
			$twitter_helper = new TwitterHelper( $instance['username'] );	
		}

		$number_tweets = 0;

		if ( ! $instance[ 'number' ] ) {
			$number = 4;
		} else {
			$number = $instance[ 'number' ];
		}
		$tweets = TwitterHelper::get_tweets( $instance['username'], $number, true );
		?>

		<ul>
			<?php 
			foreach ( $tweets as $tweet ) {
				$content = $tweet->text;
				$content_without_links = preg_replace( '/\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i', '', $content );
				$entities = $tweet->entities;
				$urls = $entities->urls; 
				$users = $tweet->user;
				$date = $tweet->created_at;

				if ( isset( $tweet->retweeted_status ) ) {
					$tweet->image = $tweet->retweeted_status->user->profile_image_url;
				} else {
					$tweet->image = str_replace( 'normal', 'bigger', $tweet->user->profile_image_url );
				}
				?>
				<li>
					<img src="<?php echo $tweet->image; ?>" class="alignleft">
					
					<h5>
						<a href="<?php echo 'https://twitter.com/' . $users->screen_name; ?>" target='_blank'>
							<?php echo $instance['username']; ?>
						</a>
					</h5>

					<p><?php echo $content_without_links; ?></p>

					<p>
						<?php if ( $urls ):
							foreach ( $urls as $url ):
								if ( $url->expanded_url ): ?>
									<strong>
										<a href="<?php echo $url->expanded_url; ?>" target="_blank">
											<?php echo $url->expanded_url; ?>
										</a>
									</strong>
								<?php endif; ?>
							<?php endforeach ?>
						<?php endif ?>
							
						<small>
							<a href="<?php echo 'https://twitter.com/' . $users->screen_name . '/status/' . $tweet->id_str; ?>" target='_blank'><?php echo crb_get_elapsed_time( $date ); ?>
							</a>
						</small>
					</p>
				</li>
			<?php 
			} 
 			?>
		</ul>
		
		<?php if ( $instance['twitter_text'] && $instance['twitter_link'] ): ?>
			<h4>
				<a href="<?php echo esc_url( $instance['twitter_link'] ); ?>" class="btn btn-light-blue" target='_blank'><?php echo esc_html( $instance['twitter_text'] ); ?></a>
			</h4>
		<?php endif ?>

		<?php if ( $instance['facebook_text'] && $instance['facebook_link'] ): ?>
			<h4>
				<a href="<?php echo esc_url( $instance['facebook_link'] ); ?>" class="btn btn-light-blue" target='_blank'><?php echo esc_html( $instance['facebook_text'] ); ?></a>
			</h4>
		<?php endif;
	}
}

/**
	* Displays Recent Posts with thumbnails
*/

class CrbThemeWidgetLatestPosts extends Widget {
	function __construct() {
		$this->setup(
			__( 'Latest Posts', 'crb' ),
			__( 'Displays a Latest Posts.', 'crb' ),
			array(
				Field::make( 'text', 'title', __( 'Title', 'crb' ) ),
				Field::make( 'number', 'number_posts', __( 'Number', 'crb' ) )
			)
		);
	}

	function front_end( $args, $instance ) {
		if ( $instance['title'] ) {
			$title = apply_filters( 'widget_title', $instance['title'], $instance, $this->id_base );

			echo $args['before_title'] . $title . $args['after_title'];
		}

		$number = 0;
		if ( ! $instance[ 'number_posts' ] ) {
			$number = 4;
		} else {
			$number = $instance[ 'number_posts' ];
		}

		$recent_posts = new WP_Query( apply_filters( 'widget_posts_args', array( 'posts_per_page' => $number ) ) );

		if ( $recent_posts->have_posts() ) : ?>
			<ul>
				<?php while ( $recent_posts->have_posts() ) : $recent_posts->the_post(); ?>
					<li>
						<?php if ( has_post_thumbnail() ): ?>
							<a href="<?php the_permalink(); ?>">
								<?php the_post_thumbnail( 'post-widget-thumbnail', array( 'class' => 'alignleft' ) ); ?>
							</a>
						<?php endif ?>
						
						<h5>
							<a href="<?php the_permalink(); ?>"><?php echo the_title(); ?></a>
						</h5>
					</li>
				<?php endwhile; ?>
			</ul>
		<?php endif;
		
		wp_reset_postdata();
	}
}