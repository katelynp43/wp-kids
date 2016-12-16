<?php
/**
 * Displays the post date/time, author, tags, categories and comments link.
 *
 * Should be called only within The Loop.
 *
 * It will be displayed only for post type "post".
 */

if ( get_post_type() !== 'post' ) {
	return;
}
?>
<footer class="article-foot">
	<ul>
		<li><?php the_category( ', ' ); ?></li>

		<li>
			<a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ), get_the_author_meta( 'user_nicename' ) ); ?>"><?php printf( __( 'by %s', 'crb' ), get_the_author() ); ?>
			</a>
		</li>

		<li><?php the_time( 'd F Y ' ); ?></li>
	</ul>
</footer><!-- /.article-foot -->