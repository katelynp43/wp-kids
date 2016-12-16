<div class="sidebar">
	<ul class="widgets">
		<?php
			$sidebar = 'blog-sidebar';

			if ( is_single() && ! in_category( 'kids-zone' ) ) {
				$sidebar = 'single-sidebar';
			} elseif ( is_category( 'kids-zone' ) || ( is_single() && in_category( 'kids-zone' ) ) ) {
				$sidebar = 'kids-zone-sidebar';
			} 
			dynamic_sidebar( $sidebar );
		?>
	</ul><!-- /.widgets -->
</div><!-- /.sidebar -->