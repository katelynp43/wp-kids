<?php
	$authors = new WP_Query( array(
		'posts_per_page' => -1,
		'post_type'      => 'crb_author',
		'order'          => 'ASC',
	) );

	if ( ! $authors->have_posts() ) {
		return;
	}
?>

<section class="section-about section-about-gray">
	<div class="shell shell-small">
		<?php if ( $title = carbon_get_the_post_meta( 'crb_authors_title' ) ): ?>
			<h4><?php echo esc_html( $title ) ?></h4>
		<?php endif ?>

		<ul class="members">
			<?php while ( $authors->have_posts() ): $authors->the_post(); ?>
				<?php
					$role               = carbon_get_the_post_meta( 'crb_author_role' );
					$books_text         = carbon_get_the_post_meta( 'crb_author_books_text' );
					$book               = carbon_get_the_post_meta( 'crb_author_featured_book' );

					if ($book) {
						$book = $book[0];
					}

					$book_thumbnail     = get_post_thumbnail_id( $book );
					$book_thumbnail_src = wp_get_attachment_image_src( $book_thumbnail, 'book' );
				?>
				<li class="member">
					<a href="#author-<?php the_ID(); ?>" class="link-popup">
						<?php the_post_thumbnail( 'author' ); ?>

						<span class="member-content">
							<?php if ($book_thumbnail_src): ?>
								<span class="member-cover" style="background-image: url(<?php echo $book_thumbnail_src[0] ?>)"></span>
							<?php endif ?>

							<strong><?php the_title() ?>, <?php echo esc_html( $role ) ?></strong>

							<em><?php echo esc_html( $books_text ); ?></em>
						</span>
					</a>

					<div class="popup mfp-hide" id="author-<?php the_ID(); ?>">
						<header class="popup-head">
							<?php the_post_thumbnail( 'author-thumbnail' ); ?>

							<h2><?php the_title() ?></h2>

							<h5><?php echo esc_html( $role ) ?> | <?php echo esc_html( $books_text ); ?></h5>
						</header><!-- /.popup-head -->

						<div class="popup-body">
							<div class="popup-image">
								<?php echo get_the_post_thumbnail( $book, 'book' ); ?>

								<a href="<?php echo get_permalink( $book ); ?>" class="btn btn-blue"><?php _e( 'View book', 'crb' ); ?></a>
							</div><!-- /.popup-image -->

							<div class="popup-entry">
								<?php the_content(); ?>
							</div><!-- /.popup-entry -->
						</div><!-- /.popup-body -->
					</div><!-- /.popup -->
				</li><!-- /.member -->
			<?php endwhile ?>

			<?php wp_reset_postdata(); ?>
		</ul><!-- /.members -->
	</div><!-- /.shell shell-small -->
</section><!-- /.section-members -->
