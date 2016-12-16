<?php if ( have_posts() ) : ?>
	<div class="main">
		<div class="shell">
			<section class="section-articles">
				<ol class="articles">
					<?php while ( have_posts() ) : the_post(); ?>
						<li <?php post_class( 'article' ) ?>>
							<?php if ( has_post_thumbnail() ): ?>
								<p>
									<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'blog-post-thumbnail' ); ?></a>
								</p>
							<?php else: ?>
								<?php crb_render_fragment( 'post/video' ); ?>
							<?php endif ?>

							<h4>
								<a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
							</h4>

							<?php the_excerpt(); ?>

							<?php crb_render_fragment( 'post/meta' ); ?>
						</li><!-- /.article -->
					<?php endwhile; ?>
				</ol><!-- /.articles -->
			</section><!-- /.section-articles -->
		</div><!-- /.shell -->
	</div><!-- /.main -->

				<?php
				carbon_pagination( 'posts', array(
					'prev_html' => '<a href="{URL}" class="paging-prev">' . esc_html__( 'PREVIOUS', 'crb' ) . '</a>',
					'next_html' => '<a href="{URL}" class="paging-next">' . esc_html__( 'NEXT', 'crb' ) . '</a>',
				) );
				?>
<?php else : ?>
	<ol class="articles">
		<li class="article">
			<p>
				<?php
				if ( is_category() ) { // If this is a category archive
					printf( __( "Sorry, but there aren't any posts in the %s category yet.", 'crb' ), single_cat_title( '', false ) );
				} else if ( is_date() ) { // If this is a date archive
					_e( "Sorry, but there aren't any posts with this date.", 'crb' );
				} else if ( is_author() ) { // If this is a category archive
					$userdata = get_user_by( 'id', get_queried_object_id() );
					printf( __( "Sorry, but there aren't any posts by %s yet.", 'crb' ), $userdata->display_name );
				} else if ( is_search() ) { // If this is a search
					_e( 'No posts found. Try a different search?', 'crb' );
				} else {
					printf( __( 'Please check the URL for proper spelling and capitalization.<br />If you\'re having trouble locating a destination, try visiting the <a href="%1$s">home page</a>.', 'crb' ), home_url( '/' ) );
				}
				?>
			</p>
		</li><!-- /.article -->
	</ol><!-- /.articles -->
<?php endif; ?>