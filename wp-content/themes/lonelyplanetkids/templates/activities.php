<?php
/*
Template Name: Activities
*/
?>

<?php get_header(); ?>

<?php the_post(); ?>

<?php crb_render_fragment( 'slider/index' ); ?>

<section class="section-boxes">
	<div class="shell shell-small">
		<h3><?php the_title(); ?></h3>

		<?php
			$activities = new WP_Query( array(
				'posts_per_page' => -1,
				'post_type'      => 'crb_activity',
			) );
		?>

		<?php if ( $activities->have_posts() ): ?>
			<ul class="boxes">
				<?php while ( $activities->have_posts() ): $activities->the_post(); ?>
					<?php $download_file = carbon_get_the_post_meta('crb_activity_download_file'); ?>

					<li class="box">
						<a href="<?php echo wp_get_attachment_url( $download_file ); ?>" download="<?php the_title(); ?>" class="box-link"></a>

						<div class="box-image">
							<?php the_post_thumbnail( 'box' ); ?>
						</div><!-- /.box-image -->

						<div class="box-content">
							<?php if ( $categories = get_the_terms( get_the_ID(), 'crb_activity_category' ) ): ?>
								<p>
									<em>
										<?php echo implode(', ', wp_list_pluck( $categories, 'name' ) ) ?>
									</em>
								</p>
							<?php endif ?>

							<h3><?php the_title(); ?></h3>

							<?php the_content(); ?>
						</div><!-- /.box-content -->

						<footer class="box-foot">
							<span><?php _e( 'Download', 'crb' ); ?></span>
						</footer><!-- /.box-foot -->
					</li><!-- /.box -->
				<?php endwhile ?>
			</ul><!-- /.boxes -->

			<?php wp_reset_postdata(); ?>
		<?php endif ?>
	</div><!-- /.shell shell-small -->
</section><!-- /.section-boxes -->

<?php get_footer(); ?>