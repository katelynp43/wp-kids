<?php
	if ( !$query->have_posts() ) {
		return;
	}

	add_filter( 'excerpt_length', 'crb_excerpt_length_short', 999 );
?>

<ul class="books">
	<?php while ( $query->have_posts() ): $query->the_post(); ?>
		<li class="book">
			<a href="<?php the_permalink(); ?>" class="book-link"></a>

			<div class="book-inner">
				<div class="book-cover">
					<?php the_post_thumbnail( 'book-thumbnail' ); ?>
				</div><!-- /.book-cover -->

				<?php if ( carbon_get_the_post_meta('crb_new_book') ): ?>
					<span><?php _e( 'NEW', 'crb' ); ?></span>
				<?php endif ?>

				<h5><?php the_title(); ?></h5>

				<?php the_excerpt(); ?>
			</div><!-- /.book-inner -->
		</li><!-- /.book -->
	<?php endwhile ?>
</ul><!-- /.books -->

<?php
	remove_filter( 'excerpt_length', 'crb_excerpt_length_short', 999 );
	wp_reset_postdata();
?>