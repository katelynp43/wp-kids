<?php
	$sections = carbon_get_the_post_meta( 'crb_about_sections', 'complex' );

	if ( ! $sections ) {
		return;
	}
?>

<?php foreach ( $sections as $i => $section ): ?>
	<?php $is_even = $i % 2 === 0; ?>

	<section class="section-about <?php echo $is_even ? 'section-about-gray' : '' ?>">
		<div class="shell shell-small">
			<div class="section-image">
				<?php echo wp_get_attachment_image( $section['image'], 'sections' ); ?>
			</div><!-- /.section-image -->

			<div class="section-content">
				<?php echo apply_filters( 'the_content', $section['text'] ); ?>
			</div><!-- /.section-content -->
		</div><!-- /.shell shell-small -->
	</section><!-- /.section-about section-about-gray -->
<?php endforeach ?>