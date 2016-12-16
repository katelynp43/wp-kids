<?php
	$slider = carbon_get_the_post_meta( 'crb_app_slider', 'complex' );

	if ( ! $slider ) {
		return;
	}
?>

<section class="section-slider-tablet">
	<div class="shell shell-small">
		<div class="slider-tablet" style="background-image: url(<?php bloginfo('template_directory'); ?>/images/slidet-tablet-bg.png)">
			<div class="slider-clip">
				<ul class="slides">
					<?php foreach ( $slider as $slide ): ?>
						<li class="slide">
							<div class="slide-image">
								<?php echo wp_get_attachment_image( $slide['image'], 'app-slider' ); ?>
							</div><!-- /.slide-image -->
						</li><!-- /.slide -->
					<?php endforeach ?>
				</ul><!-- /.slides -->
			</div><!-- /.slider-clip -->
		</div><!-- /.slider-tablet -->

		<div class="section-aside">
			<ul class="list-slides">
				<?php foreach ( $slider as $slide ): ?>
					<li>
						<i class="ico-<?php echo $slide['icon']; ?>"></i>

						<?php echo esc_html( $slide['text'] ); ?>
					</li>
				<?php endforeach ?>
			</ul><!-- /.list-slides -->
		</div><!-- /.section-aside -->
	</div><!-- /.shell shell-small -->
</section><!-- /.section-slider-tablet -->
