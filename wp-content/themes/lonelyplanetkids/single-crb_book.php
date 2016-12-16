<?php get_header(); ?>

<?php
	$books_page = crb_get_page_by_template('templates/books.php');
	$previews   = carbon_get_the_post_meta('crb_book_preview', 'complex');
	the_post();
?>

<section class="section-book-single">
	<header class="section-head">
		<div class="shell shell-small">
			<div class="breadcrumbs">
				<h5><?php _e( 'Kids books', 'crb' ); ?></h5>

				<span> / </span>

				<?php if ( $books_page ): ?>
					<a href="<?php echo get_permalink( $books_page ); ?>"><?php _e( 'All books', 'crb' ); ?></a>
					<span> / </span>
				<?php endif ?>

				<span><?php the_title(); ?></span>
			</div><!-- /.breadcrumbs -->

			<?php if ( $books_page ): ?>
				<div class="section-head-actions">
					<a href="<?php echo get_permalink( $books_page ); ?>" class="btn btn-lightgray"><?php _e( 'Back to books', 'crb' ); ?></a>
				</div><!-- /.section-head-actions -->
			<?php endif ?>
		</div><!-- /.shell shell-small -->
	</header><!-- /.section-head -->

	<div class="product">
		<div class="shell shell-small">
			<header class="product-head">
				<div class="product-head-aside">
					<h4><?php the_title(); ?></h4>

					<?php if ( $prices = carbon_get_the_post_meta( 'crb_book_prices', 'complex' ) ): ?>
						<ul>
							<?php foreach ($prices as $p): ?>
								<li>
									<strong><?php echo esc_html( $p['currency_code'] ); ?>:</strong>
									<?php echo esc_html( $p['price'] ); ?>
								</li>
							<?php endforeach ?>
						</ul>
					<?php endif ?>

				</div><!-- /.product-head-aside -->

				<?php crb_render_fragment( 'share', array(
					'link'    => get_the_permalink(),
					'message' => __('Check out this fun and engaging book from Lonely Planet Kids') . ' - ' . get_the_title() . ' ' . get_the_permalink(),
				) ); ?>
			</header><!-- /.product-head -->

			<div class="product-body">
				<div class="product-image">
					<?php if ( $previews ): ?>
						<a href="#section-review-book" class="product-preview"><?php _e( 'Preview Book', 'crb' ); ?></a>
					<?php endif ?>

					<?php the_post_thumbnail( 'book' ); ?>

					<?php if ( $purchase_link = carbon_get_the_post_meta( 'crb_book_purchase_link' ) ): ?>
						<a href="<?php echo esc_url( $purchase_link ); ?>" target="_blank" class="btn btn-block btn-blue"><?php _e( 'Buy now', 'crb' ); ?></a>
					<?php endif ?>
				</div><!-- /.product-image -->

				<div class="product-content">
					<?php if ( $post->post_content ): ?>
						<h5><?php _e( 'BOOK DESCRIPTION', 'crb' ); ?></h5>
						<?php the_content(); ?>
					<?php endif ?>

					<?php if ( $video = carbon_get_the_post_meta( 'crb_book_video' ) ): ?>
						<div class="product-video">
							<?php echo create_embedcode( $video, 350, 200 ); ?>
						</div>
					<?php endif ?>

					<?php if ( $information = carbon_get_the_post_meta('crb_book_information') ): ?>
						<h5><?php _e( 'BOOK INFORMATION', 'crb' ); ?></h5>

						<div class="product-info">

							<?php echo apply_filters( 'the_content', $information ); ?>

							<?php if ( $available_on = carbon_get_the_post_meta('crb_book_available_on') ): ?>
								<div class="product-ebook">
									<p><?php echo esc_html( $available_on ); ?></p>
								</div><!-- /.product-ebook -->
							<?php endif ?>
						</div>
					<?php endif ?>
				</div><!-- /.product-content -->
			</div><!-- /.product-body -->
		</div><!-- /.shell shell-small -->
	</div><!-- /.product -->
</section><!-- /. section-book-single -->

<?php if ( $previews ): ?>
	<section class="section-gray" id="section-review-book">
		<div class="shell shell-small">
			<h3><?php _e( 'Preview book', 'crb' ); ?></h3>

			<div id="flipbook">
				<?php foreach ( $previews as $i => $preview): ?>
					<div class="<?php echo $i ? '' : 'hard'; ?>">
						<?php echo wp_get_attachment_image( $preview['image'], 'book-preview' ); ?>
					</div>
				<?php endforeach ?>
			</div>
		</div><!-- /.shell shell-small -->
	</section><!-- /.section-gray -->
<?php endif ?>

<?php
	$query_args = array(
		'posts_per_page' => 4,
		'post_type'      => 'crb_book',
		'post__not_in'   => array( get_the_ID() ),
	);

	$book_ages = wp_get_post_terms( get_the_ID(), 'crb_age', array( 'fields' => 'ids' ) );

	if ($book_ages) {
		$query_args['tax_query'] = array(
			array(
				'taxonomy' => 'crb_age',
				'terms'    => $book_ages,
			),
		);
	}

	$related_books = new WP_Query( $query_args );
?>

<?php if ( $related_books->have_posts() ): ?>
	<section class="section-products-alt">
		<div class="shell shell-small">
			<h4><?php _e( 'You might also like:', 'crb' ); ?></h4>

			<?php crb_render_fragment( 'books/loop', array(
				'query' => $related_books,
			) ); ?>
		</div><!-- /.shell shell-small -->
	</section><!-- /.section-products-alt -->
<?php endif ?>

<section class="section-gray section-gray-centered">
	<a href="#" class="btn-top">Top</a>
</section><!-- /.section-gray -->

<?php get_footer(); ?>