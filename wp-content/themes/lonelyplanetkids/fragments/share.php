<div class="socials">
	<ul>
		<li>
			<?php _e( 'Share This', 'crb' ) ?>
		</li>

		<li>
			<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode_deep( $link ); ?>" target="_blank">
				<img src="<?php bloginfo('template_directory'); ?>/images/soc1.png" alt="">
			</a>
		</li>

		<li>
			<a href="https://twitter.com/home?status=<?php echo urlencode_deep( isset( $message ) ? $message : $link ); ?>" target="_blank">
				<img src="<?php bloginfo('template_directory'); ?>/images/soc2.png" alt="">
			</a>
		</li>

		<li>
			<a href="https://plus.google.com/share?url=<?php echo urlencode_deep( $link ); ?>" target="_blank">
				<img src="<?php bloginfo('template_directory'); ?>/images/soc3.png" alt="">
			</a>
		</li>

		<li>
			<a href="http://www.stumbleupon.com/submit?url=<?php echo urlencode_deep( $link ); ?>" target="_blank">
				<img src="<?php bloginfo('template_directory'); ?>/images/soc4.png" alt="">
			</a>
		</li>
	</ul>
</div><!-- /.socials -->