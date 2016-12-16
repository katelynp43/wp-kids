<div class="slider">
	<div class="slider-clip">
		<ul class="slides">
			<?php foreach ( $slider as $slide ): ?>
				<?php
					$image_src = wp_get_attachment_image_src( $slide['image'], 'slider' );
					$image_url = $image_src[0];
				?>

				<li class="slide" style="background-image: url(<?php echo $image_url; ?>)">
					<div class="slide-content">
						<div class="shell">
							<?php crb_render_fragment( 'slider/content', array( 'slide' => $slide ) ); ?>
						</div><!-- /.shell -->
					</div><!-- /.slide-content -->
				</li><!-- /.slide -->
			<?php endforeach ?>
		</ul><!-- /.slides -->
	</div><!-- /.slider-clip -->
</div><!-- /.slider -->