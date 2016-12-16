<?php
	$title = carbon_get_the_post_meta( 'crb_game_title' );
	$text  = carbon_get_the_post_meta( 'crb_game_text' );

	if ( !$title && !$text ) {
		return;
	}

	$image            = carbon_get_the_post_meta( 'crb_game_image' );
	$button_text      = carbon_get_the_post_meta( 'crb_game_button_text' );
	$button_link      = carbon_get_the_post_meta( 'crb_game_button_link' );
	$download_text    = carbon_get_the_post_meta( 'crb_game_download_text' );
	$download_options = carbon_get_the_post_meta( 'crb_game_download_options', 'complex' );
?>

<section class="section-feature">
	<div class="shell shell-small">
		<div class="section-aside">
			<h1><?php echo esc_html( $title ); ?></h1>

			<?php echo wpautop( $text ); ?>

			<div class="section-actions">
				<?php if ( $button_text && $button_link ): ?>
					<a href="<?php echo esc_url( $button_link ); ?>" class="btn btn-blue"><?php echo esc_html( $button_text ); ?></a>
				<?php endif ?>

				<?php if ( $download_text && $download_options ): ?>
					<div class="form-calatogue form-calatogue-alt">
						<div class="form-row">
							<label class="form-label" for="chooser"><?php echo esc_html( $download_text ); ?></label>

							<div class="form-controls">
								<select id="field-download" class="select redirect-on-change">
									<option></option>
									<?php foreach ( $download_options as $option ): ?>
										<option value="<?php echo esc_url( $option['link'] ); ?>">
											<?php echo esc_html( $option['label'] ); ?>
										</option>
									<?php endforeach ?>
								</select>
							</div><!-- /.form-controls -->
						</div><!-- /.form-row -->
					</div><!-- /.form-calatogue -->
				<?php endif ?>
			</div><!-- /.section-actions -->
		</div><!-- /.section-aside -->

		<?php if ( $image ): ?>
			<div class="section-image">
				<?php echo wp_get_attachment_image( $image, 'home-game' ); ?>
			</div><!-- /.section-image -->
		<?php endif ?>
	</div><!-- /.shell shell-small -->
</section><!-- /.section-feature -->