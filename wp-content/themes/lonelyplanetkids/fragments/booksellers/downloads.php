<?php
	$downloads = carbon_get_the_post_meta( 'crb_downloads', 'complex' );

	if ( ! $downloads ) {
		return;
	}

	$title = carbon_get_the_post_meta( 'crb_downloads_title');
	$text = carbon_get_the_post_meta( 'crb_downloads_text');
	$image = carbon_get_the_post_meta( 'crb_downloads_image');
?>

<section class="section-catalogue">
	<div class="shell shell-small">
		<?php echo wp_get_attachment_image( $image, 'downloads', null, array( 'class' => 'alignleft' ) ); ?>

		<?php if ( $title ): ?>
			<h4><?php echo esc_html( $title ); ?></h4>
		<?php endif ?>

		<?php echo wpautop( $text ); ?>

		<div class="form-calatogue">
			<div class="form-row">
				<label class="form-label" for="chooser">Download</label>
				<div class="form-controls">
					<select name="field-catalogue" id="field-catalogue" class="select redirect-on-change">
						<option value=""></option>
						<?php foreach ($downloads as $download): ?>
							<?php
								$file      = get_attached_file( $download['file'] );
								$file_size = crb_get_formatted_file_size( $file, 1 );
							?>
							<option value="<?php echo wp_get_attachment_url( $download['file'] ); ?>">
								<?php echo esc_html( $download['label'] ); ?>
								<?php echo '(' . $file_size . ')'; ?>
							</option>
						<?php endforeach ?>
					</select>
				</div><!-- /.form-controls -->
			</div><!-- /.form-row -->
		</div><!-- /.form-calatogue -->
	</div><!-- /.shell shell-small -->
</section><!-- /.section-catalogue -->