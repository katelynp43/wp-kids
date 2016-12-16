<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta http-equiv="Content-Type" content="<?php bloginfo( 'html_type' ); ?>; charset=<?php bloginfo( 'charset' ); ?>" />

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="wrapper">
		<header class="header">
			<div class="shell-fluid">
				<a href="#" class="btn-menu">
					<?php _e( 'Menu', 'crb' ); ?>
				</a>

				<div class="header-bar">
					<div class="header-content">
						<a href="<?php echo home_url( '/' ); ?>" class="logo"><?php bloginfo( 'name' ); ?></a>

						<?php
							wp_nav_menu( array(
								'theme_location'  => 'main-menu',
								'container'       => 'nav',
								'container_class' => 'nav',
								'fallback_cb'     => false,
							) );
						?>
					</div><!-- /.header-content -->

					<?php crb_render_fragment( 'header/socials' ); ?>
				</div><!-- /.header-bar -->
			</div><!-- /.shell-fluid -->
		</header><!-- /.header -->
