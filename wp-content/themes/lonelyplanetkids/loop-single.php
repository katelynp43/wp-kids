<?php while ( have_posts() ) : the_post(); ?>
	<article <?php post_class( 'article' ) ?>>
		<header class="article-head">
			<h1><?php the_title(); ?></h1>

			<h5><?php printf(__( 'by %s', 'crb' ), get_the_author() ); ?></h5>
		</header><!-- /.article-head -->

		<div class="article-body">
			<?php
				crb_render_fragment( 'post/video' );
				the_content();
			?>
		</div><!-- /.article-body -->

		<footer class="article-foot">
			<p class="article-foot-single"><?php _e( 'PUBLISHED ', 'crb' ); the_time( 'F Y' ); ?> </p>

			<div class="socials-primary">
				<ul>
					<li>
						<?php _e( 'Share:', 'crb' ); ?>
					</li>

					<li>
						<a href="https://twitter.com/home?status=<?php the_permalink(); ?>" target="_blank">
							<img src="<?php bloginfo('template_directory'); ?>/images/twitter-gray.png" alt="">
						</a>
					</li>

					<li>
						<a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank">
							<img src="<?php bloginfo('template_directory'); ?>/images/facebook-gray.png" alt="">
						</a>
					</li>
				</ul>
			</div><!-- /.socials -->
		</footer><!-- /.article-foot -->
	</article><!-- /.article -->

	<?php
	carbon_pagination( 'post', array(
		'prev_html' => '<a href="{URL}" class="paging-prev">' . esc_html__( 'PREVIOUS', 'crb' ) . '</a>',
		'next_html' => '<a href="{URL}" class="paging-next">' . esc_html__( 'NEXT', 'crb' ) . '</a>',
	) );
	?>
<?php endwhile; ?>