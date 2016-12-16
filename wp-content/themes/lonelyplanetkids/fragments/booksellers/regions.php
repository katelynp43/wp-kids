<?php
	$regions = carbon_get_the_post_meta( 'crb_regions', 'complex' );

	if ( ! $regions ) {
		return;
	}
?>

<div class="tabs-alt">
	<div class="tabs-head">
		<nav class="tabs-nav">
			<ul>
				<?php foreach ( $regions as $i => $region ): ?>
					<?php $tab_id = $i + 1; ?>

					<li class="<?php echo $tab_id === 1 ? 'current' : '' ?>">
						<a href="#tab<?php echo $tab_id; ?>">
							<span>
								<?php echo wp_get_attachment_image( $region['image'], 'region-icon' ); ?>
							</span>

							<strong><?php echo esc_html( $region['name'] ); ?></strong>
						</a>
					</li>
				<?php endforeach ?>
			</ul>
		</nav><!-- /.tabs-nav -->
	</div><!-- /.tabs-head -->

	<div class="tabs-body">
		<?php foreach ( $regions as $i => $region ): ?>
			<?php $tab_id = $i + 1; ?>

			<div class="tab <?php echo $tab_id === 1 ? 'current' : '' ?>" id="tab<?php echo $tab_id; ?>">
				<?php crb_render_gform( $region['form'], true ); ?>
			</div><!-- /.tab -->
		<?php endforeach ?>
	</div><!-- /.tabs-body -->
</div><!-- /.tabsalt- -->