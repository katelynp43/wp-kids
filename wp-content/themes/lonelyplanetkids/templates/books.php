<?php
/*
Template Name: Books
*/

$selected_age = isset( $_GET['age'] ) ? get_term_by( 'name', $_GET['age'], 'crb_age' ) : null;
?>

<?php get_header(); ?>

<?php crb_render_fragment( 'slider/index' ); ?>

<div class="tabs">
	<div class="tabs-head">
		<div class="shell shell-small">
			<div class="breadcrumbs">
				<h5><?php _e( 'Kids books', 'crb' ); ?></h5>

				<span> / </span>

				<span>
					<?php if ($selected_age): ?>
						<?php echo esc_html( $selected_age->name ); ?>
					<?php else: ?>
						<?php _e( 'All books', 'crb' ); ?>
					<?php endif ?>
				</span>
			</div><!-- /.breadcrumbs -->

			<?php $ages = get_terms( array(
				'taxonomy'   => 'crb_age',
				'hide_empty' => true,
			) ); ?>

			<?php if ( $ages ): ?>
				<nav class="tabs-nav">
					<ul>
						<li class="<?php echo $selected_age ? '' : 'current' ?>">
							<a href="<?php the_permalink(); ?>"><?php _e( 'All Books', 'crb' ); ?></a>
						</li>

						<?php foreach ( $ages as $age ): ?>
							<?php $current = $selected_age ? $selected_age->term_id === $age->term_id : false; ?>

							<li class="<?php echo $current ? 'current' : ''; ?>">
								<a href="<?php echo add_query_arg( 'age', urlencode_deep( $age->name ) ); ?>">
									<?php echo esc_html( $age->name ); ?>
								</a>
							</li>
						<?php endforeach ?>
					</ul>
				</nav><!-- /.tabs-nav -->
			<?php endif ?>
		</div><!-- /.shell -->
	</div><!-- /.tabs-head -->

	<div class="tabs-body">
		<div class="shell shell-small">
			<div class="tab">
				<?php
					$query_args = array(
						'posts_per_page' => -1,
						'post_type'      => 'crb_book',
					);

					if ($selected_age) {
						$query_args['tax_query'] = array(
							array(
								'taxonomy' => 'crb_age',
								'terms'    => $selected_age->term_id,
							),
						);
					}

					$books = new WP_Query( $query_args );

					crb_render_fragment( 'books/loop', array(
						'query' => $books,
					) );
				?>
			</div><!-- /.tab -->
		</div><!-- /.shell -->
	</div><!-- /.tabs-body -->
</div><!-- /.tabs -->

<?php get_footer(); ?>