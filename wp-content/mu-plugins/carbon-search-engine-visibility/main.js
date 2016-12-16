jQuery(function($) {

	setTimeout(function() {

		var $notice = $('.carbon-seo-notice');
		if ($notice.length) {
			// reveal the notice
			$notice.show();

			// setup title attribute for our dismissal button
			$notice.find('.notice-dismiss').attr('title', Carbon_SEO_l11n.notice_text);

			// dismissal process
			$notice.on('click', '.notice-dismiss', function() {
				// hiding notice
				$.post(ajaxurl, {
					'action': 'hide_carbon_seo_notice'
				});

				// hiding admin bar item
				$('#wp-admin-bar-carbon-seo-notice').fadeOut("fast", function() {
					$(this).remove();
				});
			});
		}

	}, 200);

});