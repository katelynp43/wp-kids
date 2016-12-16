<?php
	$books = get_posts( array(
		'posts_per_page' => 3,
		'post_type'      => 'crb_book',
		'meta_key'       => '_thumbnail_id',
	) );

	if ( ! $books ) {
		return;
	}
?>

<section class="section-feature">
	<div class="shell shell-small">
		<header class="section-head">
			<?php if ( $title = carbon_get_the_post_meta('crb_books_title') ): ?>
				<h3><?php echo esc_html( $title ); ?></h3>
			<?php endif ?>

			<?php
				$button_text = carbon_get_the_post_meta('crb_books_button_text');
				$button_link = carbon_get_the_post_meta('crb_books_button_link');
			?>

			<?php if ( $button_text && $button_link ): ?>
				<a href="<?php echo esc_url( $button_link ); ?>" class="btn btn-blue"><?php echo esc_html( $button_text ); ?></a>
			<?php endif ?>
		</header><!-- /.section-head -->

		<div class="section-body">
			<ul class="features">
				<?php foreach ( $books as $book ): ?>
					<li class="feature">
						<a href="<?php echo get_permalink( $book ); ?>">
							<span class="feature-image">
								<?php echo wp_get_attachment_image( get_post_thumbnail_id( $book ), 'book-thumbnail' ); ?>
							</span>

							<span class="feature-content">
								<strong><?php echo get_the_title( $book ); ?></strong>
							</span>
						</a>
					</li><!-- /.feature -->
				<?php endforeach ?>

				<?php if ( $ads_code = carbon_get_the_post_meta('crb_books_ads_code') ): ?>
					<li class="feature feature-alt">
						<?php echo $ads_code; ?>
					</li><!-- /.feature -->
				<?php endif ?>
			</ul><!-- /.features -->
		</div><!-- /.section-body -->
	</div><!-- /.shell shell-small -->
</section><!-- /.section-feature -->