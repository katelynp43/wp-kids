<?php
	$socials = carbon_get_theme_option( 'crb_socials', 'complex' );

	if ( ! $socials ) {
		return;
	}
?>

<div class="socials">
	<ul>
		<?php if ( $socials_text = carbon_get_theme_option( 'crb_socials_text' ) ): ?>
			<li>
				<?php echo esc_html( $socials_text ); ?>
			</li>
		<?php endif ?>

		<?php foreach ($socials as $social): ?>
			<li>
				<a href="<?php echo esc_url( $social['link'] ) ?>" target="_blank">
					<?php echo wp_get_attachment_image( $social['image'], 'socials' ); ?>
				</a>
			</li>
		<?php endforeach ?>
	</ul>
</div><!-- /.socials -->