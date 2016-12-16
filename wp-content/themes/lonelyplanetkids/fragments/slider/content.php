<?php if ( $slide['title'] ): ?>
	<h1><?php echo esc_html( $slide['title'] ) ?></h1>
<?php endif ?>

<?php echo wpautop( $slide['text'] ); ?>

<?php if ( $slide['button_text'] && $slide['button_link'] ): ?>
	<a href="<?php echo esc_url( $slide['button_link'] ); ?>" class="btn btn-white">
		<?php echo esc_html( $slide['button_text'] ); ?>
	</a>
<?php endif ?>