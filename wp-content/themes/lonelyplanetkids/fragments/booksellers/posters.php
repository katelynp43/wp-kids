<?php
	$posters = carbon_get_the_post_meta( 'crb_posters', 'complex' );

	if ( ! $posters ) {
		return;
	}
?>

<section class="section-boxes">
	<div class="shell shell-small">
		<?php if ( $title = carbon_get_the_post_meta( 'crb_posters_title' ) ): ?>
			<h3><?php echo esc_html( $title ); ?></h3>
		<?php endif ?>

		<ul class="boxes">
			<?php foreach ( $posters as $poster ): ?>
				<?php
					$is_file = $poster['_type'] === '_file';
					$link    = $is_file ? wp_get_attachment_url( $poster['file'] ) : $poster['link'];
				?>
				<li class="box">
					<a href="<?php echo esc_url( $link ); ?>" class="box-link" <?php echo $is_file ? 'download="' . esc_attr( $poster['title'] ) . '"' : '' ?>></a>

					<div class="box-image">
						<?php echo wp_get_attachment_image( $poster['image'], 'box' ); ?>
					</div><!-- /.box-image -->

					<div class="box-content">
						<p>
							<em><?php echo isset($poster['type']) ? esc_html( $poster['type'] ) : ''; ?></em>
						</p>

						<h3><?php echo esc_html( $poster['title'] ); ?></h3>
					</div><!-- /.box-content -->

					<footer class="box-foot">
						<?php if ( $is_file ): ?>
							<span><?php _e( 'Download', 'crb' ); ?></span>
						<?php endif ?>
					</footer><!-- /.box-foot -->
				</li><!-- /.box -->
			<?php endforeach ?>
		</ul><!-- /.boxes -->
	</div><!-- /.shell shell-small -->
</section><!-- /.section-boxes -->