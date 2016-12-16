<?php

function crb_import_books() {
	$data = file_get_contents( dirname( __FILE__ ) . '/data/books.json' );
	$books = array_reverse( json_decode( $data ) );

	foreach ($books as $book) {
		$post_exists = get_page_by_title( $book->title, null, 'crb_book' );

		if ($post_exists) {
			echo 'Skipping ' . $book->title . "\n";
			continue;
		}

		$post_id = wp_insert_post( array(
			'post_type' => 'crb_book',
			'post_status' => 'publish',
			'post_content' => $book->description,
			'post_title' => $book->title,
		) );

		foreach ($book->prices as $i => $price_parts) {
			foreach ($price_parts as $key => $value) {
				update_post_meta( $post_id, '_crb_book_prices_-_' . $key . '_' . $i , $value );
			}
		}

		foreach ($book->imgs as $i => $image_url) {
			$attachment_id = crb_import_attachment_from_url( $post_id, $image_url );
			update_post_meta( $post_id, '_crb_book_preview_-_image_' . $i, $attachment_id );
		}

		$attachment_id = crb_import_attachment_from_url( $post_id, 'http:' . $book->preview_img );

		update_post_meta( $post_id, '_thumbnail_id', $attachment_id );
		update_post_meta( $post_id, '_crb_book_purchase_link', $book->buy_url );
		update_post_meta( $post_id, '_crb_book_information', $book->meta_data );

		if ($book->video) {
			update_post_meta( $post_id, '_crb_book_video', $book->video );
		}

		if ($book->ebook_text) {
			update_post_meta( $post_id, '_crb_book_available_on', $book->ebook_text );
		}

		echo 'Imported ' . $book->title . "\n";

		sleep(5);
	}

	exit('done');
}

function crb_import_activities() {
	$data = file_get_contents( dirname( __FILE__ ) . '/data/activities.json' );
	$activities = array_reverse( json_decode( $data ) );

	foreach ($activities as $activity) {
		$post_exists = get_page_by_title( $activity->title, null, 'crb_activity' );

		if ($post_exists) {
			echo 'Skipping ' . $activity->title . "\n";
			continue;
		}

		$post_id = wp_insert_post( array(
			'post_type' => 'crb_activity',
			'post_status' => 'publish',
			'post_content' => $activity->description,
			'post_title' => $activity->title,
		) );

		$thumbnail_id = crb_import_attachment_from_url( $post_id, $activity->image );

		if (!$thumbnail_id) {
			throw new Exception("Thumbnail not imported");
		}

		update_post_meta( $post_id, '_thumbnail_id', $thumbnail_id );

		$attachment_id = crb_import_attachment_from_url( $post_id, $activity->file );

		if (!$attachment_id) {
			throw new Exception("File not imported");
		}

		update_post_meta( $post_id, '_crb_activity_download_file', $attachment_id );

		echo 'Imported ' . $activity->title . "\n";

		sleep(5);
	}

	exit('done');
}

function crb_import_attachment_from_url( $post_id, $url ) {
	if( !class_exists( 'WP_Http' ) )
	  include_once( ABSPATH . WPINC. '/class-http.php' );

	$photo = new WP_Http();
	$photo = $photo->request( $url, array( 'timeout' => 60 ) );

	if ( is_a($photo, 'WP_Error') ) {
		return false;
	}

	if( $photo['response']['code'] != 200 )
		return false;

	$fileinfo = pathinfo($url);
	$attachment = wp_upload_bits( $fileinfo['basename'], null, $photo['body'], date("Y-m", strtotime( $photo['headers']['last-modified'] ) ) );
	if( !empty( $attachment['error'] ) )
		return false;

	$filename = $attachment['file'];

	$filetype = wp_check_filetype( basename( $attachment['file'] ), null );

	// Get the path to the upload directory.
	$wp_upload_dir = wp_upload_dir();

	$postinfo = array(
		'guid'           => $wp_upload_dir['url'] . '/' . basename( $filename ),
		'post_mime_type' => $filetype['type'],
		'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $filename ) ),
		'post_content'   => '',
		'post_status'    => 'inherit'
	);

	$attach_id = wp_insert_attachment( $postinfo, $filename, $post_id );

	if( !function_exists( 'wp_generate_attachment_data' ) )
		require_once(ABSPATH . "wp-admin" . '/includes/image.php');

	$attach_data = wp_generate_attachment_metadata( $attach_id, $filename );
	wp_update_attachment_metadata( $attach_id,  $attach_data );

	return $attach_id;
}