<?php

$video_link = carbon_get_the_post_meta( 'crb_video_link' );

if ( !$video_link ) {
	return;
}

?>

<p><?php echo create_embedcode($video_link, 647, 328); ?></p>
