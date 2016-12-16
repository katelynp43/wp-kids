<?php
	$videos = carbon_get_the_post_meta('crb_videos', 'complex');

	if ( ! $videos ) {
		return;
	}
?>

<section class="section-feature">
	<div class="shell shell-small">
		<?php if ( $title = carbon_get_the_post_meta('crb_videos_title') ): ?>
			<header class="section-head">
				<h3><?php echo esc_html( $title ) ?></h3>
			</header><!-- /.section-head -->
		<?php endif ?>

		<div class="section-body">
			<ul class="videos">
				<?php foreach ( $videos as $i => $video ): ?>
					<?php $video_id = $i + 1; ?>

					<li class="video">
						<a href="#video<?php echo $video_id; ?>" class="video-link">
							<span class="video-image">
								<?php echo wp_get_attachment_image( $video['image'], 'home-video' ); ?>
							</span>

							<span class="video-caption">
								<?php echo esc_html( $video['title'] ); ?>
							</span>
						</a>

						<div class="video-popup mfp-hide" id="video<?php echo $video_id; ?>">
							<?php echo create_embedcode( $video['video_link'], 500, 280 ); ?>

							<?php if ( $video['text'] ): ?>
								<h2><?php echo esc_html( $video['text'] ); ?></h2>
							<?php endif ?>

							<?php if ( $video['button_text'] && $video['button_link'] ): ?>
								<a href="<?php echo esc_url( $video['button_link'] ); ?>" class="btn btn-blue">
									<?php echo $video['button_text']; ?>
								</a>
							<?php endif ?>
						</div><!-- /.video-popup -->
					</li><!-- /.video -->
				<?php endforeach ?>
			</ul><!-- /.videos -->
		</div><!-- /.section-body -->
	</div><!-- /.shell shell-small -->
</section><!-- /.section-feature -->