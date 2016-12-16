;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		appendNav();
		tab();
		animationIntro();
		book();
		scrollIntroButton();

		//back to top
		$('.btn-top').on('click', function(e) {
			var topOffset = 0;

			$('body, html').animate({
				scrollTop: topOffset
				}, 600);
			e.preventDefault();
		});

		$('.btn-menu').on('click', function (event) {
			$(this).toggleClass('active');

			$('.nav').toggleClass('visible');
			$('.wrapper').toggleClass('swipe');

			event.preventDefault();
		});

		$('.slider .slides').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			responsive: [
			  {
				breakpoint: 1279,
					settings: {
					  arrows: false
					}
				}
			]
		});

		$('.slider-tablet .slides').slick({
			dots: true,
			arrows:false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			fade: true,
			cssEase: 'linear',
			asNavFor: '.list-slides'

		});

		$('.list-slides').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.slider-tablet .slides',
		  vertical: true,
		  focusOnSelect: true
		});

		$('.main-alt .widget_quiz ul').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1
		});

		$('.members .member').magnificPopup({
			delegate: '.link-popup',
			type: 'inline'
		});

		$('.videos .video').magnificPopup({
			delegate: '.video-link',
			type: 'inline'
		});

		$('select.redirect-on-change').on('change', function(e) {
			var link = $(this).val();

			if ( link ) {
				window.open(link, '_blank');
			}

			e.preventDefault();
		});
	});

	$win.on('resize', function () {
		appendNav();
	});

	$win.on('load', function () {
		$(".member .member-content").equalizeHeight();
	});

	function appendNav() {
		if ($win.width() < 768) {
			$('.nav-primary .menu-primary').appendTo('.nav')
		} else {
			$(' .menu-primary').appendTo('.nav-bar .nav-primary')
		}
	}

	function tab(){
		// This class will be added to active tab link
		// and the content container
		var activeTabClass = 'current';

		$('.tabs-alt .tabs-nav a').on('click', function(event) {
			var $tabLink = $(this);
			var $targetTab = $($tabLink.attr('href'));

			$tabLink
				.parent() // go up to the <li> element
				.add($targetTab)
				.addClass(activeTabClass)
					.siblings()
					.removeClass(activeTabClass);

			event.preventDefault();
		});
	}

	//Equalize height
	$.fn.equalizeHeight = function() {
		var maxHeight = 0, itemHeight;

		for (var i = 0; i < this.length; i++) {
			itemHeight = $(this[i]).height();
			if (maxHeight < itemHeight) {
				maxHeight = itemHeight;
			}
		}

		return this.height(maxHeight);
	}

	function animationIntro (e) {

		function u(e) {
			return "http://assets.staticlp.com/kids/header/" + e
		}

		function a(e) {
			var t = [],
				e = typeof e != "object" ? [e] : e;
			for (var n = 0; n < e.length; n++) t[n] = new Image, t[n].src = e[n]
		}

		function f(e) {
			var t = [],
				e = typeof e != "object" ? [e] : e;
			for (var n = 0; n < e.length; n++) t[n] = document.createElement("audio"), "src" in t[n] ? t[n].autoPlay = !1 : (t[n] = document.createElement("bgsound"), t[n].volume = -1e4), t[n].src = e[n], document.body.appendChild(t[n])
		}

		function l(e, t, n, i) {
			n = typeof n != "undefined" ? n : !1, i = typeof i != "undefined" ? i : !1, e.mp3 ? (e.mp3.muted = r, e.mp3.pause(), e.mp3.currentTime = 0, n ? e.mp3.paused ? e.mp3.play() : e.mp3.pause() : e.mp3.play()) : (e.mp3 = new Audio(t), e.mp3.muted = r, e.mp3.play())
		}

		function c() {
			l(i, u("dance.mp3", !1));
			var t = $("#spaceship"),
				n = new TimelineMax({
					repeat: 12,
					yoyo: !0,
					onComplete: p
				});
			n.add(TweenLite.to(t, .3, {
				top: "-=20px",
				left: "+=10px",
				rotation: -5,
				ease: Back.easeIn
			})), n.add(TweenLite.to(t, .3, {
				top: "+=20px",
				left: "+=10px",
				rotation: 5,
				ease: Back.easeOut
			}))
		}

		function h() {
			var t = $("#spaceship");
			t.addClass("animate")
		}

		function p() {
			var t = $("#spaceship");
			t.removeClass("animate")
		}

		function d() {
			var e = {};
			l(e, u("burp.mp3"))
		}

		function v() {
			var t = {};
			l(t, u("rock-short.mp3"));
			var n = $("#statue");
			n.addClass("rock")
		}

		function m() {
			var t = {};
			setTimeout(function() {
				l(t, u("slurp.mp3"))
			}, 1);
			var n = $("#bird"),
				r = $("#icecream"),
				i = new TimelineMax({
					repeat: 0,
					ease: Expo.easeIn
				});
			r.addClass("tongue"), n.addClass("shocked"), i.add(TweenLite.to(r, 1.2, {
				rotation: -30
			})), setTimeout(function() {
				r.removeClass("tongue")
			}, 1e3)
		}

		function g() {
			var t = {};
			l(t, u("cow.mp3"));
			var n = $("#cow"),
				r = $("#temple"),
				i = new TimelineMax({
					repeat: 0,
					ease: Expo.easeIn
				}),
				s = new TimelineMax({
					repeat: 2.8,
					yoyo: !0,
					delay: 3
				});
			i.add(TweenLite.to(n, 2.7, {
				top: "+=1px",
				rotation: -5
			})), i.add(TweenLite.to(n, .12, {
				top: "-=10px",
				left: "+=190px",
				width: "30px"
			})), i.add(TweenLite.to(n, .02, {
				opacity: "0"
			})), s.add(TweenLite.to(r, .05, {
				left: "-=10px",
				top: "-=10px",
				rotation: 5
			}))
		}

		function y() {
			var t = {};
			l(t, u("launch.mp3"));
			var n = $("#tower"),
				r = $("#tower-smoke .background-img"),
				i = new TimelineMax({
					repeat: -1,
					yoyo: !0
				});
			tlLaunch = new TimelineMax({
				repeat: 0,
				ease: Expo.easeIn
			}), tlSmoke = new TimelineMax({
				repeat: 0,
				ease: Expo.easeIn
			}), i.add(TweenLite.to(n, .01, {
				left: "-=2px"
			})), tlLaunch.add(TweenLite.to(n, 4.6, {
				top: "-=50px"
			})), tlLaunch.add(TweenLite.to(n, .3, {
				top: "-400px"
			})), tlSmoke.add(TweenLite.to(r, 2.6, {
				opacity: .7,
				width: "75%",
				marginTop: "-=50px"
			})), tlSmoke.add(TweenLite.to(r, 2, {
				opacity: 1
			})), tlSmoke.add(TweenLite.to(r, 1, {
				opacity: 0,
				width: "100%"
			}))
		}

		function b() {
			var t = $("#tiger"),
				n = {};
			l(n, u("meow.mp3")), setTimeout(function() {
				t.addClass("drinking")
			}, 100), setTimeout(function() {
				t.removeClass("drinking")
			}, 2e3)
		}

		function w() {
			var t = $("#worm"),
				n = {};
			l(n, u("whistle.mp3")), setTimeout(function() {
				t.addClass("animate")
			}, 100), setTimeout(function() {
				t.removeClass("animate")
			}, 2e3)
		}

		function E() {
			l(planeMusic = {}, u("swoosh.mp3"));
			var t = $("#plane"),
				n = new TimelineMax({
					repeat: 0,
					ease: Expo.easeIn
				});
			n.add(TweenLite.to(t, .2, {
				left: "2000px",
				top: "-100px"
			}))
		}

		function S() {
			l(fishMusic = {}, u("bubbles.mp3"));
			var t = $("#fish"),
				n = new TimelineMax({
					repeat: 0,
					ease: Expo.easeIn
				});
			n.add(TweenLite.to(t, 1, {
				left: "-=5px"
			})), n.add(TweenLite.to(t, .2, {
				left: "300px"
			}))
		}

		function x() {
			setTimeout(function() {
				l(monkeyMusic = {}, u("boing.mp3"))
			}, 100);
			var t = $("#monkey"),
				n = $("#boat"),
				r = new TimelineMax({
					repeat: 1,
					ease: Strong.easeOut,
					delay: 0,
					yoyo: !0
				}),
				i = new TimelineMax({
					repeat: 0,
					ease: Strong.easeOut,
					delay: .15,
					yoyo: !1
				}),
				s = new TimelineMax({
					repeat: 1,
					ease: Expo.easeIn,
					delay: 0,
					yoyo: !0
				});
			r.add(TweenLite.to(t, .1, {
				top: "+=5px",
				left: "-=2px",
				rotation: "+=2"
			})), r.add(TweenLite.to(t, .5, {
				top: "-=120px",
				left: "+=45px",
				rotation: "-=5"
			})), i.add(TweenLite.to(t, 1, {
				rotation: "-=360"
			})), s.add(TweenLite.to(n, .1, {
				rotation: "-=2"
			})), s.add(TweenLite.to(n, .5, {
				rotation: "+=30"
			}))
		}

		function T() {
			l(shuttleMusic = {}, u("whee.mp3"));
			var t = $("#shuttle"),
				n = $("#parachuter"),
				r = new TimelineMax({
					repeat: 0,
					ease: Expo.easeInOut,
					delay: .2
				});
			setTimeout(function() {
				t.addClass("open")
			}, 100), setTimeout(function() {
				t.removeClass("open")
			}, 1e3), r.add(TweenLite.to(n, .01, {
				opacity: "0"
			})), r.add(TweenLite.to(n, .1, {
				top: "69px",
				rotation: 0
			})), r.add(TweenLite.to(n, .01, {
				opacity: "1"
			})), r.add(TweenLite.to(n, 2.25, {
				top: "+=180px",
				rotation: 720
			}))
		}

		function N() {
			var r = $("#globe"),
				i = new TimelineMax({
					repeat: 0,
					ease: Expo.easeIn
				});
			tlGlobeOut = new TimelineMax({
				repeat: 0,
				ease: Expo.easeIn
			}), n < 6 ? (l(globeMusic = {}, u("grinding.mp3")), i.add(TweenLite.to(r, 3.74, {
				rotation: "+=" + t
			}))) : (i.add(TweenLite.to(r, 1, {
				left: "+=2000"
			})), l(this, u("swoosh.mp3"))), t += t, n++
		}

		function C() {
			var t = $("#bus");
			l(busMusic = {}, u("horn.mp3")), setTimeout(function() {
				t.addClass("animate")
			}, 100), setTimeout(function() {
				t.removeClass("animate")
			}, 300), setTimeout(function() {
				t.addClass("animate")
			}, 500), setTimeout(function() {
				t.removeClass("animate")
			}, 700)
		}

		function k() {
			l(this, u("boost.mp3"));
			var t = $("#balloon"),
				n = new TimelineMax({
					repeat: 0,
					ease: Expo.easeOut
				});
			setTimeout(function() {
				t.addClass("fire")
			}, 500), setTimeout(function() {
				t.removeClass("fire")
			}, 1e3), n.add(TweenLite.to(t, .5, {
				top: "-=1px"
			})), n.add(TweenLite.to(t, .5, {
				top: "-=20px"
			})), n.add(TweenLite.to(t, 5, {
				top: "+=21px"
			}))
		}

		function L() {
			function t() {
				$("#flash").hide()
			}
			l(flashMusic = {}, u("flash.mp3"));
			var n = $("#flash"),
				r = $(".animation-wrapper");
			tlFlash = new TimelineMax({
				repeat: 0,
				ease: Expo.easeOut,
				onComplete: t
			}), n.show(), r.addClass("blur"), setTimeout(function() {
				$(".animation-wrapper").removeClass("blur")
			}, 2e3), tlFlash.add(TweenLite.to(n, .02, {
				opacity: 1
			})), tlFlash.add(TweenLite.to(n, 3, {
				opacity: 0
			}))
		}

		function A() {
			console.log("Starting dancer spin"), l(dancerMusic = {}, u("bells.mp3"));
			var t = $("#dancer");
			t.toggleClass("animate")
		}

		function O(e) {
			r === !0 ? (r = !1, e.removeClass("muted")) : (r = !0, e.addClass("muted"))
		}
		window.console || (window.console = {}, window.console.log = function() {});
		var t = 75,
			n = 0,
			r = !1,
			i = {},
			s = [u("bells.mp3"), u("boing.mp3"), u("boost.mp3"), u("bubbles.mp3"), u("burp.mp3"), u("cow.mp3"), u("dance.mp3"), u("flash.mp3"), u("grinding.mp3"), u("horn.mp3"), u("launch.mp3"), u("meow.mp3"), u("slurp.mp3"), u("swoosh.mp3"), u("rock-short.mp3"), u("swoosh.mp3"), u("whee.mp3"), u("whistle.mp3")],
			o = [u("astro.png"), u("balloon-fire.png"), u("bird-shocked.png"), u("bus-lights.png"), u("burger-open.png"), u("icecream-tongue.png"), u("shuttle-open.png"), u("smoke.png"), u("statue-rock.png"), u("tiger-high.png"), u("worm.png")];
		$(document).ready(function() {
			a(o), f(s), $("#spaceship").click(function() {
				c(), h()
			}), $("#tower").click(function() {
				y(), $("#tower").unbind("click")
			}), $("#burger").mouseenter(function() {
				d()
			}), $("#fish").click(function() {
				S()
			}), $("#balloon").click(function() {
				k()
			}), $("#statue").click(function() {
				v()
			}), $("#camera").click(function() {
				L()
			}), $("#tiger").click(function() {
				b()
			}), $("#dancer").click(function() {
				A()
			}), $("#plane").click(function() {
				E()
			}), $("#shuttle").click(function() {
				T()
			}), $("#bus").click(function() {
				C()
			}), $("#cow").click(function() {
				g(), $("#cow").unbind("click")
			}), $("#temple").click(function() {
				g(), $("#temple").unbind("click")
			}), $("#monkey, #boat").click(function() {
				x()
			}), $("#orange").click(function() {
				w()
			}), $("#globe").click(function() {
				N()
			}), $("#bird").click(function() {
				m()
			}), $("#volume").click(function() {
				O($(this))
			})
		})

	}

	function book () {
		var t = {
			ratio: 1.38,
			init: function(t) {
				var n = this;
				document.addEventListener && (this.el = document.getElementById(t), this.resize(), this.plugins(), window.addEventListener("resize", function(t) {
					var r = n.resize();
					$(n.el).turn("size", r.width, r.height)
				}))
			},
			resize: function() {
				this.el.style.width = "", this.el.style.height = "";
				var e = this.el.clientWidth,
					t = Math.round(e / this.ratio),
					n = Math.round(document.body.clientHeight * .9);
				return t > n && (t = n, e = Math.round(t * this.ratio)), this.el.style.width = e + "px", this.el.style.height = t + "px", {
					width: e,
					height: t
				}
			},
			plugins: function() {
				$(this.el).turn({
					gradients: !1,
					acceleration: !0,
					page: 2
				})
			}
		};
		$("#flipbook").length && t.init("flipbook")
	}

	function scrollIntroButton() {
		$('.product-preview').on('click', function(e) {
			var $this = $(this);
			var parent = $this.parent();
			var href = $this.attr('href');

			var topOffset;

			topOffset = $('#section-review-book' + href ).offset().top + 22;
			topOffset = topOffset;

			$('body, html').animate({
				scrollTop: topOffset
				}, 700);
				e.preventDefault();
		});
	}

	$(function() {
        $( '.btn-reverse' ).text( 'Sign up' );
        $( '.sailthru-widget-label' ).hide();
        $( 'label[for="custom_country"]' ).hide();
        $( 'label[for="custom_first_name"]' ).hide();
        $( '.footer .sailthru_form_input' ).first().before( '<p>Subscribe to our newsletter and receive a 25% discount on your next Lonely Planet Kids purchase.</p>' );
        $( '.sailthru_form .success' ).text( "Thank you for subscribing, you'll soon receive an email confirming your subscription." );
         $( '.section-page .input-group-btn' ).after( '<div class="privacy-policy"><a href="http://www.lonelyplanet.com/legal/privacy-policy/">View our privacy policy here.</a></div>' );
    });

    $(document).ready(function(){ 
 		$( '.sailthru-add-subscriber-form' ).find( 'input[name="custom_first_name"]' ).each(function(){
      		if( ! $( this ).val() ) { 
     			$( this ).attr( 'placeholder', 'Your first name' );
  			}
  		});

  		$( '.sailthru-add-subscriber-form' ).find( 'input[name="email"]' ).each(function(){
      		if( ! $( this ).val() ) { 
     			$( this ).attr( 'placeholder', 'your@email.com' );
  			}
  		});

  		$( 'select[name="custom_country"]' ).find( 'option:first-child' ).before( '<option value="">Select Country</option>' );

        $( 'select[name="custom_country"] option' ).each(function() {
  			if ($(this).text() === 'Select Country' ) {
  				$(this).attr( 'selected', 'selected' );
  			}
		});
	});
})(jQuery, window, document);