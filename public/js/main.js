console.log('hi ba');
AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();


	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber({
						number: num,
						numberStep: comma_separator_number_step
					}, 7000);
				});

			}

		}, {
			offset: '95%'
		});

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, {
			offset: '95%'
		});
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();

			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});


			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	$('#book_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('#book_time').timepicker();




})(jQuery);

(function () {

	var $$ = function (selector, context) {
		var context = context || document;
		var elements = context.querySelectorAll(selector);
		return [].slice.call(elements);
	};

	function _fncSliderInit($slider, options) {
		var prefix = ".fnc-";

		var $slider = $slider;
		var $slidesCont = $slider.querySelector(prefix + "slider__slides");
		var $slides = $$(prefix + "slide", $slider);
		var $controls = $$(prefix + "nav__control", $slider);
		var $controlsBgs = $$(prefix + "nav__bg", $slider);
		var $progressAS = $$(prefix + "nav__control-progress", $slider);

		var numOfSlides = $slides.length;
		var curSlide = 1;
		var sliding = false;
		var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
		var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

		var autoSlidingActive = false;
		var autoSlidingTO;
		var autoSlidingDelay = 5000; // default autosliding delay value
		var autoSlidingBlocked = false;

		var $activeSlide;
		var $activeControlsBg;
		var $prevControl;

		function setIDs() {
			$slides.forEach(function ($slide, index) {
				$slide.classList.add("fnc-slide-" + (index + 1));
			});

			$controls.forEach(function ($control, index) {
				$control.setAttribute("data-slide", index + 1);
				$control.classList.add("fnc-nav__control-" + (index + 1));
			});

			$controlsBgs.forEach(function ($bg, index) {
				$bg.classList.add("fnc-nav__bg-" + (index + 1));
			});
		};

		setIDs();

		function afterSlidingHandler() {
			$slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
			$slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

			$activeSlide.classList.remove("m--before-sliding");
			$activeControlsBg.classList.remove("m--nav-bg-before");
			$prevControl.classList.remove("m--prev-control");
			$prevControl.classList.add("m--reset-progress");
			var triggerLayout = $prevControl.offsetTop;
			$prevControl.classList.remove("m--reset-progress");

			sliding = false;
			var layoutTrigger = $slider.offsetTop;

			if (autoSlidingActive && !autoSlidingBlocked) {
				setAutoslidingTO();
			}
		};

		function performSliding(slideID) {
			if (sliding) return;
			sliding = true;
			window.clearTimeout(autoSlidingTO);
			curSlide = slideID;

			$prevControl = $slider.querySelector(".m--active-control");
			$prevControl.classList.remove("m--active-control");
			$prevControl.classList.add("m--prev-control");
			$slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

			$activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
			$activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

			$slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
			$slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

			$activeSlide.classList.add("m--before-sliding");
			$activeControlsBg.classList.add("m--nav-bg-before");

			var layoutTrigger = $activeSlide.offsetTop;

			$activeSlide.classList.add("m--active-slide");
			$activeControlsBg.classList.add("m--active-nav-bg");

			setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
		};



		function controlClickHandler() {
			if (sliding) return;
			if (this.classList.contains("m--active-control")) return;
			if (options.blockASafterClick) {
				autoSlidingBlocked = true;
				$slider.classList.add("m--autosliding-blocked");
			}

			var slideID = +this.getAttribute("data-slide");

			performSliding(slideID);
		};

		$controls.forEach(function ($control) {
			$control.addEventListener("click", controlClickHandler);
		});

		function setAutoslidingTO() {
			window.clearTimeout(autoSlidingTO);
			var delay = +options.autoSlidingDelay || autoSlidingDelay;
			curSlide++;
			if (curSlide > numOfSlides) curSlide = 1;

			autoSlidingTO = setTimeout(function () {
				performSliding(curSlide);
			}, delay);
		};

		if (options.autoSliding || +options.autoSlidingDelay > 0) {
			if (options.autoSliding === false) return;

			autoSlidingActive = true;
			setAutoslidingTO();

			$slider.classList.add("m--with-autosliding");
			var triggerLayout = $slider.offsetTop;

			var delay = +options.autoSlidingDelay || autoSlidingDelay;
			delay += slidingDelay + slidingAT;

			$progressAS.forEach(function ($progress) {
				$progress.style.transition = "transform " + (delay / 1000) + "s";
			});
		}

		$slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

	};

	var fncSlider = function (sliderSelector, options) {
		var $sliders = $$(sliderSelector);

		$sliders.forEach(function ($slider) {
			_fncSliderInit($slider, options);
		});
	};

	window.fncSlider = fncSlider;
}());

/* not part of the slider scripts */

/* Slider initialization
options:
autoSliding - boolean
autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
*/
fncSlider(".example-slider", {
	autoSlidingDelay: 4000
});

var $demoCont = document.querySelector(".demo-cont");

[].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function ($btn) {
	$btn.addEventListener("click", function () {
		$demoCont.classList.toggle("credits-active");
	});
});

document.querySelector(".demo-cont__credits-close").addEventListener("click", function () {
	$demoCont.classList.remove("credits-active");
});

document.querySelector(".js-activate-global-blending").addEventListener("click", function () {
	document.querySelector(".example-slider").classList.toggle("m--global-blending-active");
});


const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
	if (e.target.nodeName === "BUTTON") {
		Array.from(buttonsWrapper.children).forEach(item =>
			item.classList.remove("active")
		);
		if (e.target.classList.contains("first")) {
			slides.style.transform = "translateX(-0%)";
			e.target.classList.add("active");
		} else if (e.target.classList.contains("second")) {
			slides.style.transform = "translateX(-33.33333333333333%)";
			e.target.classList.add("active");
		} else if (e.target.classList.contains('third')) {
			slides.style.transform = 'translatex(-66.6666666667%)';
			e.target.classList.add('active');
		}
	}
});