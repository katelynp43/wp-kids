<?php
$slider = carbon_get_the_post_meta( 'crb_slider', 'complex' );

if ( ! $slider ) {
	return;
}

if ( count($slider) === 1 ){
	crb_render_fragment( 'slider/single', array( 'slider' => $slider ) );
} else {
	crb_render_fragment( 'slider/loop', array( 'slider' => $slider ) );
}
