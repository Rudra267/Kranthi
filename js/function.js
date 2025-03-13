(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		setHeaderHeight();
		$(".preloader").fadeOut(600);
	});
	
	/* Sticky Header */
	$window.on('resize', function(){
		setHeaderHeight();
	});

	function setHeaderHeight(){
		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
	}	
	
	$(window).on("scroll", function() {
		var fromTop = $(window).scrollTop();
		setHeaderHeight();
		var headerHeight = $('header .header-sticky').outerHeight()
		$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 300));
		$("header .header-sticky").toggleClass("active", (fromTop > 600));
	});

	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});
	
	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Hero Slider Layout 1 JS */
	const hero_slider_layout1 = new Swiper('.hero-slider-layout1 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 6000,
		},
		navigation: {
			nextEl: '.hero-button-next',
			prevEl: '.hero-button-prev',
		},
	});

	/* Hero Slider Layout 2 JS */
	const hero_slider_layout2 = new Swiper('.hero-slider-layout2 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 6000,
		},
		navigation: {
			nextEl: '.hero-button-next',
			prevEl: '.hero-button-prev',
		},
	});

	/* Hero Slider Layout 3 JS */
	const hero_slider_layout3 = new Swiper('.hero-slider-layout3 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 6000,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	/* Project Layout 2 Slider JS */
	const project_layout2_slider = new Swiper('.project-layout2-slider .swiper', {
		slidesPerView : 1,
		speed: 2500,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 0,
		},
		allowTouchMove: false,
  		disableOnInteraction: true,
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1440: {
				slidesPerView: 5,
			}
		}
	});

	/* Project Layout 3 JS */
	const project_layout3_carousel = new Swiper('.project-layout3-slider .swiper', {
		slidesPerView : 1,
		speed: 4500,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 0,
		},
		allowTouchMove: false,
  		disableOnInteraction: true,
		  breakpoints: {
			768: {
			  slidesPerView: 2,
			}
		}
	});


	/* Testimonial 2 Carousel JS */
	const testimonial_carousel2 = new Swiper('.testimonial-slider2 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 8000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,

			},
			991: {
			  slidesPerView: 3,
			}
		}
	});

	/* Testimonial 3 Carousel JS */
	const testimonial_carousel3 = new Swiper('.testimoinal-layout3-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 8000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			991: {
			  slidesPerView: 2,
			}
		}
	});

	/* Testimonial Carousel JS */
	const testimonial_carousel = new Swiper('.testimonial-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 500000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,

			},
			991: {
			  slidesPerView: 3,
			}
		}
	});

	/* Services Carousel JS */
	const service_carousel = new Swiper('.services-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3
			}
		}
	});

	/* Services Layout 2 JS */
	const service_layout2_carousel = new Swiper('.services-layout2-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3
			}
		}
	});

	/* Services Layout 3 JS */
	const service_layout3_carousel = new Swiper('.services-layout3-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3
			}
		}
	});

	/* Zoom screenshot */
	$('.project-gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Popup Video */
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	/* Animated skills Bars */
	$('.our-skills').waypoint(function() {
		$('.skillbar').each(function() {
			$(this).find('.count-bar').animate({
			  width:$(this).attr('data-percent')
			},2000);
		});
	},{
		offset: '50%'
	});

	/* Init Counter */
	$('.counter').counterUp({ delay: 5, time: 2000 });

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime').length) {
		const animatedElements = document.querySelectorAll(".text-anime");

		animatedElements.forEach((element) => {
		let staggerAmount = 0.05;
		let translateXValue = 20;
		let translateYValue = false;
		let onScrollValue = 1;
		let delayValue = 0.5;
		let easeType = "power2.out";

		if (element.getAttribute("data-stagger")) {
			staggerAmount = element.getAttribute("data-stagger");
		}

		if (element.getAttribute("data-translateX")) {
			translateXValue = element.getAttribute("data-translateX");
		}

		if (element.getAttribute("data-translateY")) {
			translateYValue = element.getAttribute("data-translateY");
		}

		if (element.getAttribute("data-on-scroll")) {
			onScrollValue = element.getAttribute("data-on-scroll");
		}

		if (element.getAttribute("data-delay")) {
			delayValue = element.getAttribute("data-delay");
		}

		if (element.getAttribute("data-ease")) {
			easeType = element.getAttribute("data-ease");
		}

		if (onScrollValue == 1) {
			if (translateXValue > 0 && !translateYValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
			}

			if (translateYValue > 0 && !translateXValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
			gsap.from(splitText.chars, {
				duration: 1,
				delay: delayValue,
				y: translateYValue,
				autoAlpha: 0,
				ease: easeType,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
			}

			if (translateXValue && translateYValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
			gsap.from(splitText.chars, {
				duration: 3,
				delay: delayValue,
				y: translateYValue,
				x: translateXValue,
				autoAlpha: 0,
				ease: easeType,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
			}

			if (!translateXValue && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: 50,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			}
			} else {
				if (translateXValue > 0 && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					ease: easeType,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}

				if (translateYValue > 0 && !translateXValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					y: translateYValue,
					autoAlpha: 0,
					ease: easeType,
					stagger: staggerAmount,
				});
				}

				if (translateXValue && translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					y: translateYValue,
					x: translateXValue,
					ease: easeType,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}

				if (!translateXValue && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					ease: easeType,
					x: 50,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}
			}
		});
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* About Carousel JS */
	const about_carousel = new Swiper('.about-carousel .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.about-button-next',
			prevEl: '.about-button-prev',
		},
	});

	/* Contact form validation */
	var $contactform=$("#contactForm");
	if($contactform.length){
		$contactform.validator({focus: false}).on("submit", function (event) {
			if (!event.isDefaultPrevented()) {
				event.preventDefault();
				submitForm();
			}
		});

		function submitForm(){
			/* Initiate Variables With Form Content*/
			var name = $("#name").val();
			var email = $("#email").val();
			var phone = $("#phone").val();
			var subject = $("#subject").val();
			var message = $("#msg").val();

			$.ajax({
				type: "POST",
				url: "form-process.php",
				data: "name=" + name + "&email=" + email + "&phone=" + phone + "&subject=" + subject + "&message=" + message,
				success : function(text){
					if (text == "success"){
						formSuccess();
					} else {
						submitMSG(false,text);
					}
				}
			});
		}

		function formSuccess(){
			$contactform[0].reset();
			submitMSG(true, "Message Sent Successfully!")
		}

		function submitMSG(valid, msg){
			if(valid){
				var msgClasses = "h3 text-success";
			} else {
				var msgClasses = "h3 text-danger";
			}
			$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
	}
	/* Contact form validation end */


	/* Solar form validation */
	var $solarform=$("#solarForm");

	if($solarform.length){
		$solarform.validator({focus: false}).on("submit", function (event) {
			if (!event.isDefaultPrevented()) {
				event.preventDefault();
				solarsubmitForm();
			}
		});

		function solarsubmitForm(){
			/* Initiate Variables With Form Content*/
			var name = $("#name").val();
			var email = $("#email").val();
			var phone = $("#phone").val();
			var bill = $("#bill").val();
			var capacity = $("#capacity").val();

			$.ajax({
				type: "POST",
				url: "solar-form-process.php",
				data: "name=" + name + "&email=" + email + "&phone=" + phone + "&bill=" + bill + "&capacity=" + capacity,
				success : function(text){
					if (text == "success"){
						solarformSuccess();
					} else {
						solarsubmitMSG(false,text);
					}
				}
			});
		}

		function solarformSuccess(){
			$solarform[0].reset();
			solarsubmitMSG(true, "Message Sent Successfully!")
		}

		function solarsubmitMSG(valid, msg){
			if(valid){
				var msgClasses = "h3 text-success";
			} else {
				var msgClasses = "h3 text-danger";
			}
			$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
	}
	/* Solar form validation end */

	/* Animated Wow Js */	
	new WOW().init();
})(jQuery);


// ............Product1 Dynamic Content.............
// Initialize Smooth Scrollbar
function changeContent1(content) {
	const prodContent = document.getElementById("prod-content");
	switch (content) {
	  case "content1":
		prodContent.innerHTML ='<!-- Project Content Start --><div class="product-content"><div class="product-feature-image wow fadeInUp" data-wow-delay="0.25s"><figure class="image-anime"><img id="prod1-img" src="images/product1.jpg" alt=""></figure></div><div id="prod1-cont" class="product-entry lh-sm"><h2>Flat Plate Collector Solar Water Heating System with MS (Mild Steel) Tank</h2><p>Our Flat Plate Collector (FPC) Solar Water Heating System with an MS (Mild Steel) tank is an efficient and reliable solution for heating water using solar energy. This system is designed to cater to the hot water needs of residential, commercial, and industrial setups while minimizing energy consumption and reducing carbon footprints. Available in both pressurized and non-pressurized configurations, it offers flexibility to meet varying requirements.</p><h2>Why Choose Flat Plate Collectors?</h2><p>Flat plate collectors are the most time-tested and widely used solar collectors. They consist of a durable absorber plate that captures solar energy and transfers it to the water circulating through embedded pipes. Their robust design ensures efficient heating even under challenging environmental conditions.</p><div class="faq-box"><h1 class="text-anime">Features and Benefits</h1><div class="faq-accordion"><div class="accordion" id="faq_accordion"><div class="accordion-item"><h2 class="accordion-header" id="heading1"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">1. Pressurized System</button></h2><div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faq_accordion"><div class="accordion-body"><p>The pressurized configuration of the MS tank is specifically designed for areas with consistent and high water pressure. This system ensures:</p><h3>Durability:</h3><p>The MS tank is coated with corrosion-resistant material to withstand water pressure and prevent rusting, ensuring longevity.</p><h3>Performance:</h3><p>Designed to maintain efficiency even under high-pressure conditions, making it ideal for high-rise buildings and areas with water booster pumps.</p><h3>Convenience:</h3><p>Provides consistent water flow for showers and taps, ensuring a seamless user experience.</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="heading2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">2. Non-Pressurized System</button></h2><div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faq_accordion"><div class="accordion-body"><p>The non-pressurized configuration is a cost-effective option for areas with low water pressure or gravity-fed systems. Key advantages include:</p><h3>Affordability:</h3><p>A budget-friendly solution that delivers reliable performance without compromising on quality.</p><h3>Low Maintenance:</h3><p>Simplistic design minimizes operational complexity and maintenance costs.</p><h3>Energy Efficiency:</h3><p>Utilizes solar energy effectively to heat water, reducing dependency on conventional energy sources.</p></div></div></div></div></div></div><div class="why-choose-us-layout3 rounded-5 p-3"><div class="container"><div class="row align-items-center section-title-row"><div class="col-lg-6"><div class="section-title"><h3 class="wow fadeInUp">Why MS Tanks?</h3></div></div><div class="col-lg-6"><div class="section-description wow fadeInUp" data-wow-delay="0.2s"><p>Mild Steel (MS) tanks are a robust and economical choice for solar water heating systems. They are:</p></div></div></div><div class="row"><div class="col-lg-4 col-md-6"><div class="why-choose-item3 wow fadeInUp" data-wow-delay="0.4s"><div class="icon-box"><img src="images/icon-why3-1.svg" alt=""></div><h3>Strong and Durable</h3><p>MS tanks are designed to withstand mechanical stress and external impacts, ensuring long-term performance.</p></div></div><div class="col-lg-4 col-md-6"><div class="why-choose-item3 wow fadeInUp" data-wow-delay="0.6s"><div class="icon-box"><img src="images/icon-why3-2.svg" alt=""></div><h3>Efficient Insulation</h3><p>High-quality insulation minimizes heat loss, retaining hot water temperatures for extended periods.</p></div></div><div class="col-lg-4 col-md-6"><div class="why-choose-item3 wow fadeInUp" data-wow-delay="0.8s"><div class="icon-box"><img src="images/icon-why3-3.svg" alt=""></div><h3>Customizable:</h3><p>Available in various capacities, starting from 100 LPD, to cater to different usage needs.</p></div></div></div></div></div><div class="product-cont5 mt-5 rounded-5"><div class="container p-4 mt-5"><div class="row"><div class="col-sm-12"><h2 class="mb-4">Applications</h2><hr><h3 class="wow fadeInUp">The FPC system with an MS tank is suitable for:</h3><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt="" /><div class="ps-4"><h5 class="d-inline">Residential Homes:</h5><p class="m-0">Efficiently meets the hot water needs of households for bathing, washing, and cleaning.</p></div></div><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt="" /><div class="ps-4"><h5 class="d-inline">Commercial Establishments:</h5><p class="m-0">Ideal for hotels, hospitals, and educational institutions requiring large volumes of hot water.</p></div></div><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt="" /><div class="ps-4"><h5 class="d-inline">Industrial Use:</h5><p class="m-0">Can be utilized for processes that demand heated water in manufacturing and processing units.</p></div></div></div></div></div></div><h2>Eco-Friendly and Cost-Effective Solution</h2><p>Investing in a Flat Plate Collector with an MS tank not only reduces electricity bills but also contributes to a greener planet. By harnessing renewable solar energy, this system helps decrease greenhouse gas emissions and reliance on fossil fuels.</p></div></div>';
		break;
	  case "content2":
		prodContent.innerHTML =
		  '<!-- Project Content Start --><div class="product-content"><div class="product-feature-image wow fadeInUp" data-wow-delay="0.25s"><figure class="image-anime"><img id="prod1-img" src="images/product1.jpg" alt=""></figure></div><div id="prod1-cont" class="product-entry lh-sm"><h2>Flat Plate Collector Solar Water Heating System with SS (Stainless Steel) Tank</h2><p>Our Flat Plate Collector (FPC) Solar Water Heating System with an SS (Stainless Steel) tank offers a premium and highly durable solution for heating water using solar energy. Designed for both residential and commercial applications, this system is available in pressurized and non-pressurized configurations, providing flexibility to suit various user needs. It combines advanced technology, superior materials, and energy efficiency to deliver reliable and sustainable performance.</p><h2>Why Choose Flat Plate Collectors?</h2><p>Flat plate collectors are a proven and efficient method for harnessing solar energy to heat water. They consist of a metal absorber plate with embedded pipes, transferring heat to the water circulating through the system. These collectors are durable, low-maintenance, and perform efficiently in various climatic conditions.</p><div class="faq-box"><h1 class="text-anime">Features and Benefits</h1><div class="faq-accordion"><div class="accordion" id="faq_accordion"><div class="accordion-item"><h2 class="accordion-header" id="heading1"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">1. Pressurized System</button></h2><div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faq_accordion"><div class="accordion-body"><p>The pressurized configuration is designed for areas with stable and high water pressure, offering:</p><h3>Rust Resistance:</h3><p>Stainless steel tanks are highly resistant to corrosion, ensuring long-lasting performance even in areas with hard or saline water.</p><h3>Consistent Water Flow:</h3><p>Delivers steady water pressure for showers, taps, and appliances, ideal for high-rise buildings or setups with booster pumps.</p><h3>Durability and Strength:</h3><p>Built to withstand pressure variations, making it perfect for large-scale applications.</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="heading2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">2. Non-Pressurized System</button></h2><div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faq_accordion"><div class="accordion-body"><p>The non-pressurized configuration is a cost-effective option suitable for gravity-fed systems or low-pressure areas. Key benefits include:</p><h3>Cost-Effective Performance:</h3><p>Offers high efficiency at an affordable price without compromising on quality.</p><h3>Minimal Maintenance:</h3><p>Simplistic design with stainless steel ensures low maintenance and long service life.</p><h3>Reliable Hot Water Supply:</h3><p>Effectively heats water using solar energy, catering to daily household and commercial needs.</p></div></div></div></div></div></div><div class="why-choose-us-layout3 rounded-5 p-3"><div class="container"><div class="row align-items-center section-title-row"><div class="col-lg-6"><div class="section-title"><h3 class="wow fadeInUp">Why SS Tanks?</h3></div></div><div class="col-lg-6"><div class="section-description wow fadeInUp" data-wow-delay="0.2s"><p>Stainless Steel (SS) tanks are the ideal choice for solar water heating systems due to their unparalleled quality and performance:</p></div></div></div><div class="row"><div class="col-lg-4 col-md-6"><div class="why-choose-item3 wow fadeInUp" data-wow-delay="0.4s"><div class="icon-box"><img src="images/icon-why3-1.svg" alt=""></div><h3>Corrosion-Free:</h3><p>Stainless steel naturally resists rust, ensuring water purity and tank durability.</p></div></div><div class="col-lg-4 col-md-6"><div class="why-choose-item3 wow fadeInUp" data-wow-delay="0.6s"><div class="icon-box"><img src="images/icon-why3-2.svg" alt=""></div><h3>High Thermal Efficiency:</h3><p>Superior insulation minimizes heat loss, keeping water hot for extended periods.</p></div></div><div class="col-lg-4 col-md-6"><div class="why-choose-item3 wow fadeInUp" data-wow-delay="0.8s"><div class="icon-box"><img src="images/icon-why3-3.svg" alt=""></div><h3>Lightweight and Strong:</h3><p>Combines lightweight construction with exceptional strength, making installation easy and hassle-free.</p></div></div></div></div></div><div class="product-cont5 mt-5 rounded-5"><div class="container p-4 mt-5"><div class="row"><div class="col-sm-12"><h2 class="mb-4">Applications</h2><hr><h3 class="wow fadeInUp">The FPC system with an SS tank is suitable for:</h3><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt=""><div class="ps-4"><h5 class="d-inline">Residential Homes:</h5><p class="m-0">Provides a steady supply of hot water for bathing, cleaning, and washing.</p></div></div><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt=""><div class="ps-4"><h5 class="d-inline">Commercial Spaces:</h5><p class="m-0">Perfect for hotels, hospitals, and hostels with high hot water demand.</p></div></div><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt=""><div class="ps-4"><h5 class="d-inline">Industrial Use:</h5><p class="m-0">Effective for processes requiring hot water in factories, laundries, or workshops.</p></div></div></div></div></div></div><h2>Eco-Friendly and Cost-Effective Solution</h2><p>This solar water heating system leverages renewable solar energy, significantly reducing electricity consumption and utility bills. By transitioning to this sustainable solution, users contribute to lowering greenhouse gas emissions and promoting a greener future.</p></div></div>';
		break;
	  case "content3":
		prodContent.innerHTML ='<!-- Project Content Start --><div class="product-content"><div class="product-feature-image wow fadeInUp" data-wow-delay="0.25s"><figure class="image-anime"><img id="prod1-img" src="images/product1.jpg" alt=""></figure></div><div id="prod1-cont" class="product-entry lh-sm"><h2>Flat Plate Collector Solar Water Heating System with Copper Tank</h2><p>The Flat Plate Collector (FPC) Solar Water Heating System with a copper tank is a high-performance, durable, and energy-efficient solution for heating water using solar energy. Designed to cater to both pressurized and non-pressurized systems, this advanced system is suitable for residential, commercial, and industrial applications. Its superior heat conductivity and corrosion resistance make it one of the most reliable choices for long-term use.</p><h2>Why Copper Tanks?</h2><p>Copper tanks stand out as the premium choice for solar water heating due to their exceptional properties:</p><h5 class="d-inline">Superior Heat Conductivity:</h5><p>Copper’s excellent thermal conductivity ensures faster and more efficient water heating.</p><h5 class="d-inline">Corrosion Resistance:</h5><p>Copper is naturally resistant to corrosion, making it ideal for hard or saline water conditions.</p><h5 class="d-inline">Antimicrobial Properties:</h5><p>Copper inhibits bacterial growth, ensuring hygienic and safe hot water supply.</p><h5 class="d-inline">Durability:</h5><p>Copper tanks are robust and have a longer lifespan compared to other materials, offering excellent value for money.</p><h2>Features and Benefits</h2><div class="faq-box"><h1 class="text-anime">Features and Benefits</h1><div class="faq-accordion"><div class="accordion" id="faq_accordion"><div class="accordion-item"><h2 class="accordion-header" id="heading1"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">1. Pressurized System</button></h2><div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faq_accordion"><div class="accordion-body"><p>The pressurized system is engineered to operate seamlessly in areas with consistent water pressure, providing:</p><h3>Efficient Heating:</h3><p>Delivers quick and consistent hot water, even under high-pressure conditions.</p><h3>Long-Lasting Performance:</h3><p>Copper’s durability ensures minimal wear and tear, even with continuous use.</p><h3>Ideal for High-Pressure Environments:</h3><p>Suited for high-rise buildings and setups with booster pumps.</p><h3>Hygienic Water Supply:</h3><p>Ensures clean and safe water, thanks to copper’s antimicrobial properties.</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="heading2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">2. Non-Pressurized System</button></h2><div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faq_accordion"><div class="accordion-body"><p>The non-pressurized system is an economical and efficient choice for areas with low water pressure or gravity-fed systems. Key advantages include:</p><h3>Affordable Solution:</h3><p>Provides reliable hot water without the need for high-pressure mechanisms.</p><h3>Low Maintenance:</h3><p>The durable copper tank requires minimal upkeep, reducing long-term costs.</p><h3>Eco-Friendly Heating:</h3><p>Uses solar energy efficiently, minimizing reliance on traditional energy sources.</p></div></div></div></div></div></div><h2>Why Choose Our Copper Tank System?</h2><p>Advanced technology combined with premium-quality copper tanks.<br><br>Available in capacities starting from 100 LPD to meet varied demands.<br><br>Designed to endure diverse climatic conditions while maintaining optimal performance.</p><h2>Applications</h2><p>The Flat Plate Collector with Copper Tank is highly versatile and suitable for various applications, including:</p><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt="" /><div class="ps-4"><h5 class="d-inline">Residential Homes:</h5><p class="m-0">Efficiently meets the hot water needs of households for bathing, washing, and cleaning.</p></div></div><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt="" /><div class="ps-4"><h5 class="d-inline">Commercial Establishments:</h5><p class="m-0">Ideal for hotels, hospitals, and educational institutions requiring large volumes of hot water.</p></div></div><div class="div p-2 d-flex align-items-center justify-content-center"><img src="./images/icons/check-mark.png" alt="" /><div class="ps-4"><h5 class="d-inline">Industrial Use:</h5><p class="m-0">Can be utilized for processes that demand heated water in manufacturing and processing units.</p></div></div><h2>Eco-Friendly and Energy-Saving</h2><p>Harnessing solar energy, this system reduces dependence on conventional energy sources, significantly cutting down electricity bills and carbon emissions. It is an eco-friendly alternative to traditional water heating methods, promoting sustainable living.</p></div></div>';
		break;
	  case "content4":
		prodContent.innerHTML =
		  '<h2>Evacuated Tube Collector with MS (Mild Steel) Tank</h2><p>The Evacuated Tube Collector (ETC) Solar Water Heating System with an MS (Mild Steel) tank offers a cost-effective and highly efficient solution for harnessing solar energy to heat water. Designed for non-pressurized configurations, this system is perfect for areas with low water pressure or gravity-fed systems. The MS tank is durable and corrosion-resistant, ensuring long-term reliability while meeting the hot water needs of residential and commercial applications.</p><h2>Why Choose Evacuated Tube Collectors?</h2><p>Evacuated tube collectors are designed for maximum efficiency and long-lasting performance. They feature advanced vacuum tube technology, consisting of double-walled borosilicate glass with a vacuum between the layers, providing exceptional insulation. Key advantages include:<br><h5 class="d-inline">High Thermal Efficiency: </h5>Minimal heat loss ensures optimal performance, even in colder climates or low-light conditions.<br><br><h5 class="d-inline">Durability:</h5>Constructed with premium materials, the collectors can withstand extreme weather conditions.<br><br><h5 class="d-inline">Cost-Effectiveness: </h5>Offers an affordable and energy-efficient alternative to traditional water heating systems.</p><h2>Features and Benefits</h2><p><h5 class="d-inline">Vacuum Insulation:</h5>The advanced vacuum tube design prevents heat loss, ensuring consistent water heating.<br><br><h5 class="d-inline">Durable MS Tank:</h5>The mild steel tank is treated with anti-corrosive coatings for enhanced longevity and performance.<br><br><h5 class="d-inline">Wide Range of Capacities:</h5>Available in configurations starting from 100 LPD, catering to a variety of water heating needs.<br><br><h5 class="d-inline">Non-Pressurized System:</h5>Specifically designed for gravity-fed systems, making it ideal for low-pressure applications.</p><h2>Why MS Tanks?</h2><p>Mild Steel (MS) tanks are a practical and economical choice for ETC systems due to their:<br><h5 class="d-inline">Strength and Affordability:</h5>Combines durability with cost-efficiency, making it an excellent investment.<br><br><h5 class="d-inline">Effective Insulation:</h5>High-quality insulation helps retain heat for long durations, minimizing energy loss.<br><br><h5 class="d-inline">Corrosion Resistance:</h5>Treated with anti-corrosive layers to prevent rust and ensure a longer lifespan.</p><h2>Applications</h2>The Evacuated Tube Collector with MS Tank is highly versatile and suitable for various applications, including:<p><h5 class="d-inline">Residential Use:</h5> Provides hot water for daily household activities such as bathing, washing, and cleaning.<br><br><h5 class="d-inline">Commercial Applications:</h5> Ideal for small hotels, lodges, and businesses with moderate hot water demand.<br><br><h5 class="d-inline">Industrial Needs:</h5> Suitable for small-scale manufacturing processes or industries requiring heated water.</p><h2>Eco-Friendly and Sustainable Solution</h2><p>By investing in the ETC system with an MS tank, users contribute to a more sustainable future by utilizing renewable solar energy. This system reduces reliance on fossil fuels, lowers electricity bills, and decreases greenhouse gas emissions, helping to promote a greener planet.</p>';
		break;
	  case "content5":
		prodContent.innerHTML =
		  '<h2>Evacuated Tube Collector with SS (Stainless Steel) Tank</h2><p>The Evacuated Tube Collector (ETC) Solar Water Heating System with an SS (Stainless Steel) tank offers exceptional durability and performance. This system is designed for non-pressurized configurations, making it ideal for residential, commercial, and industrial applications where water pressure may not be consistent. The SS tank is known for its resistance to corrosion and long-term reliability, ensuring a sustainable solution for heating water using solar energy.</p><h2>Why Choose Evacuated Tube Collectors?</h2><p>Evacuated tube collectors are designed for maximum efficiency and long-lasting performance. They feature vacuum tube technology, consisting of double-walled borosilicate glass with a vacuum between the layers, providing exceptional insulation. Key advantages include:<br><h5 class="d-inline">High Thermal Efficiency: </h5>Minimal heat loss ensures optimal performance, even in colder climates or low-light conditions.<br><br><h5 class="d-inline">Durability:</h5>Constructed with high-quality materials, the collectors can withstand extreme weather and environmental conditions.<br><br><h5 class="d-inline">Cost-Effectiveness: </h5>Provides an affordable and energy-efficient alternative to conventional water heating systems.</p><h2>Features and Benefits</h2><p><h5 class="d-inline">Vacuum Insulation:</h5> The advanced vacuum tube design prevents heat loss, ensuring consistent and efficient water heating.<br><br><h5 class="d-inline">Corrosion-Resistant SS Tank:</h5> The stainless steel tank resists rust and corrosion, ensuring longevity and reliability in various environmental conditions.<br><br><h5 class="d-inline">Wide Range of Capacities:</h5> Available in configurations starting from 100 LPD, suitable for different water heating requirements.<br><br><h5 class="d-inline">Non-Pressurized System:</h5> Specifically designed for gravity-fed water systems, making it perfect for low-pressure applications.</p><h2>Why SS Tanks?</h2><p>Stainless Steel (SS) tanks offer superior quality and durability for solar water heating systems due to their:<br><h5 class="d-inline">Corrosion Resistance:</h5> Stainless steel naturally resists rust, ensuring the tanks long-term reliability and water purity.<br><br><h5 class="d-inline">High Thermal Efficiency:</h5> SS tanks provide excellent insulation, helping retain heat for longer durations.<br><br><h5 class="d-inline">Strength and Durability:</h5> The SS tank is highly durable and resistant to mechanical stress, ensuring a long service life.</p><h2>Applications</h2>The Evacuated Tube Collector with SS Tank is highly versatile and suitable for various applications, including:<p><h5 class="d-inline">Residential Use:</h5> Provides hot water for daily tasks such as bathing, washing, and cleaning.<br><br><h5 class="d-inline">Commercial Applications:</h5> Perfect for hotels, hospitals, and educational institutions that require reliable hot water supply.<br><br><h5 class="d-inline">Industrial Needs:</h5> Ideal for industries requiring heated water for manufacturing or cleaning processes.</p><h2>Eco-Friendly and Sustainable Solution</h2><p>Investing in the ETC system with an SS tank supports environmental sustainability by utilizing renewable solar energy. This reduces reliance on conventional energy sources, cuts electricity bills, and lowers greenhouse gas emissions, contributing to a greener planet.</p>';
		break;
		prodContent.innerHTML =
		  '<h2>Evacuated Tube Collector with Copper Tank</h2><p>The Evacuated Tube Collector (ETC) Solar Water Heating System with a Copper tank provides an advanced and high-performance solution for harnessing solar energy to heat water. Designed for non-pressurized configurations, this system is ideal for low-water-pressure areas or gravity-fed systems. With the superior thermal conductivity of copper and a durable construction, it ensures high-efficiency performance and longevity, making it an ideal choice for residential, commercial, and industrial applications.</p><h2>Why Choose Evacuated Tube Collectors?</h2><p>Evacuated tube collectors offer excellent efficiency and performance due to their cutting-edge vacuum tube technology. These collectors consist of double-walled borosilicate glass with a vacuum between the layers, providing top-tier insulation. Key advantages include:<br><h5 class="d-inline">High Thermal Efficiency: </h5>Minimal heat loss ensures efficient performance, even in low-light or cold weather conditions.<br><br><h5 class="d-inline">Durability:</h5>Made from premium materials, the collectors are capable of enduring extreme weather conditions.<br><br><h5 class="d-inline">Energy Efficiency: </h5>Uses solar energy effectively, reducing reliance on traditional energy sources.</p><h2>Features and Benefits</h2><p><h5 class="d-inline">Vacuum Insulation:</h5>The advanced vacuum tube technology ensures minimal heat loss, guaranteeing consistent water heating.<br><br><h5 class="d-inline">Copper Tank:</h5>The copper tank is known for its superior heat conductivity, ensuring faster and more efficient heating of water.<br><br><h5 class="d-inline">Corrosion Resistance:</h5>Copper naturally resists corrosion, making it perfect for hard or saline water, and ensuring long-lasting durability.<br><br><h5 class="d-inline">Antimicrobial Properties:</h5>The copper tank helps inhibit bacterial growth, ensuring clean and hygienic water for everyday use.</p><h2>Why Copper Tanks?</h2><p>Copper tanks are considered one of the most effective materials for solar water heating systems due to their outstanding characteristics:<br><h5 class="d-inline">Superior Heat Conductivity:</h5> Copper’s high thermal conductivity ensures faster and more efficient water heating.<br><br><h5 class="d-inline">Corrosion-Free:</h5> Copper naturally resists rust and corrosion, making it perfect for areas with harsh or saline water.<br><br><h5 class="d-inline">Antimicrobial Properties:</h5> Copper inhibits bacterial growth, ensuring hygienic and clean hot water.<br><br><h5 class="d-inline">Long Lifespan:</h5> Copper is a durable material, ensuring that the tank will last longer than other materials, providing excellent value for money.</p><h2>Applications</h2>The Evacuated Tube Collector with Copper Tank is highly versatile and suitable for a range of applications, including:<p><h5 class="d-inline">Residential Use:</h5> Supplies hot water for everyday household needs such as bathing, cleaning, and washing.<br><br><h5 class="d-inline">Commercial Applications:</h5> Ideal for hotels, restaurants, and small businesses that require large volumes of hot water.<br><br><h5 class="d-inline">Industrial Applications:</h5> Suitable for industries or factories requiring heated water for processes such as cleaning, manufacturing, or food processing.</p><h2>Eco-Friendly and Sustainable Solution</h2><p>The Evacuated Tube Collector with a Copper Tank is an environmentally-friendly choice that leverages renewable solar energy. This system helps reduce electricity bills, decrease dependence on fossil fuels, and significantly lowers greenhouse gas emissions, contributing to a cleaner and greener planet.</p>';
		break;
	  default:
		contentImage.src = "";
		contentHead.innerHTML = "";
		contentArea.innerHTML = "";
	}
  }
  

// .........................Product 2...............................
function changeContent2(content) {
	const prodImg = document.getElementById("prod2-img");
	const prodContent = document.getElementById("prod2-cont");
	switch (content) {
	  case "content1":
		prodImg.src = "./images/product1.jpg";
		prodContent.innerHTML =
		  '<h2>Hot Dip Galvanized Poles: The Ultimate Choice for Solar Security Fencing</h2><p>When it comes to solar security fencing, nothing beats the strength, durability, and reliability of Hot Dip Galvanized Poles. Designed to endure the harshest environments, these poles, available in T-Angle and Square Tube designs, offer unparalleled protection for your solar installations. Coated with a thick layer of zinc, they’re engineered to resist corrosion, extending their lifespan and ensuring long-term performance.</p><h3>Built for Tough Conditions</h3><p>Hot Dip Galvanized Poles are built to withstand extreme weather conditions, from torrential rain to blazing sun. The secret lies in the galvanization process, which immerses the poles in molten zinc, creating a robust and protective coating that shields them from rust and corrosion. This makes them the perfect choice for outdoor security fencing and solar installations.</p><h4>The Key to Their Durability</h4><p>Why are these poles so reliable? Here’s what makes them stand out:</p><h5 class="d-inline">Corrosion Resistance:</h5> Zinc coating prevents rust, ensuring the poles remain structurally sound for years, even in salty or humid environments.<br><br><h5 class="d-inline">Extended Lifespan:</h5> Thanks to galvanization, the poles maintain their strength and appearance for decades, providing a long-term, cost-effective security solution.<br><br><h5 class="d-inline">Strength Under Pressure:</h5> With T-Angle and square tube designs, these poles offer exceptional load-bearing capacity and can withstand heavy environmental stress.<br><br><h3>Where to Use Hot Dip Galvanized Poles</h3><p>These versatile poles can be used in a wide range of security applications. Here are just a few places where they provide unmatched support:</p><h4>Solar Security Fencing</h4><p>Designed specifically for solar panel installations, these poles offer a durable and corrosion-resistant framework that will keep your solar security fences standing strong through the years.</p><h4>Industrial and Commercial Applications</h4><p>Whether you need to secure warehouses, factories, or other commercial properties, these poles offer the strength and stability required for high-traffic, high-security environments.</p><h4>Agricultural and Rural Settings</h4><p>For farms and rural properties, these poles provide a reliable, low-maintenance solution that ensures your land is securely fenced without constant upkeep.</p><h3>Eco-Friendly Benefits for a Sustainable Future</h3><p>Using Hot Dip Galvanized Poles not only enhances the security of your property but also supports sustainability. The galvanization process minimizes resource usage, and the longevity of the poles reduces the need for frequent replacements. By choosing these poles, youre making a long-term investment in both your security and the environment.</p><h3>Why Hot Dip Galvanized Poles Are the Smart Choice</h3><p>Hot Dip Galvanized Poles combine strength, durability, and sustainability, making them the go-to solution for solar fencing and beyond. Their long-lasting performance, resistance to corrosion, and low maintenance requirements make them the ideal choice for a wide range of security applications. Protect your investment today with Hot Dip Galvanized Poles, and enjoy peace of mind knowing your property is safeguarded by the best in the industry.</p>';
		break;
	  case "content2":
		prodImg.src = "./images/product2.jpg";
		prodContent.innerHTML =
		  '<h2>Powder Coated Poles (T-Angle/Square Tubes): Strength, Durability, and Aesthetics</h2><p>Powder Coated Poles (T-Angle/Square Tubes) for Solar Security Fencing offer a high-performance solution that blends durability, visual appeal, and weather resistance. These poles are coated with a layer of premium-quality powder coating, which ensures superior protection against corrosion, wear, and harsh environmental factors. The result is a smooth, uniform finish that provides long-lasting durability while enhancing the appearance of your security fencing. Whether for residential, commercial, or industrial applications, these poles offer both security and style.</p><h3>Engineered for Performance and Appearance</h3><p>The powder coating process involves applying a dry powder that is cured under heat to form a tough, resilient finish. This advanced method offers significant advantages over traditional galvanization:</p><h5 class="d-inline">Enhanced Corrosion Resistance:</h5> The powder-coated finish forms a protective barrier that guards against rust and corrosion, making these poles perfect for coastal, humid, or extreme weather environments.<br><br><h5 class="d-inline">Aesthetic Appeal:</h5> The sleek, smooth finish provides a refined and modern look, making these poles ideal for areas where aesthetics matter, such as residential or commercial properties.<br><br><h5 class="d-inline">Increased Durability:</h5> Powder coating adds an extra layer of protection, preventing scratches, chips, and fading, ensuring that your poles retain their visual integrity over time.<br><br><h3>Key Advantages of Powder Coated Poles</h3><h5 class="d-inline">Advanced Powder Coating Process:</h5> The powder coating technique creates a tough, smooth surface that resists weathering, providing long-term performance.<br><br><h5 class="d-inline">Corrosion and Weather Resistance:</h5> Powder coated poles are highly resistant to environmental stressors such as rain, wind, and UV rays, maintaining their structural integrity in challenging conditions.<br><br><h5 class="d-inline">Customizable Color Options:</h5> The versatility of powder coating allows for various color finishes, so poles can seamlessly match the aesthetic requirements of any property.<br><br><h5 class="d-inline">Low Maintenance:</h5> Thanks to their high resistance to corrosion and rust, these poles require minimal upkeep, offering long-term savings on maintenance and replacements.<br><br><h5 class="d-inline">Strength and Stability:</h5> The T-Angle and square tube designs provide mechanical strength and stability, ensuring that these poles can withstand high winds and other environmental challenges.<br><br><h3>Ideal Applications for Powder Coated Poles</h3><p>Powder Coated Poles are perfect for a wide range of security applications, offering both protection and aesthetic value. Some of the most common uses include:</p><h5 class="d-inline">Solar Security Fencing:</h5> These poles provide a strong, protective framework around solar panel installations and other valuable assets, ensuring lasting security.<br><br><h5 class="d-inline">Commercial and Industrial Fencing:</h5> Ideal for securing commercial properties, factories, and warehouses, these poles combine strength with visual appeal to create a reliable and attractive security solution.<br><br><h5 class="d-inline">Residential Fencing:</h5> For homes and private properties, powder coated poles offer a stylish and durable fencing solution, providing security while blending seamlessly into the surroundings.<br><br><h3>Sustainability at Its Core</h3><p>The powder coating process is an environmentally friendly option, as it generates fewer volatile organic compounds (VOCs) compared to traditional painting methods. Additionally, the longevity of these poles reduces the need for frequent replacements, making them a sustainable choice for long-term security. By opting for powder coated poles, youre investing in both the durability and sustainability of your fencing solution while contributing to a greener environment.</p>';
		break;
	  default:
		contentImage.src = "";
		contentHead.innerHTML = "";
		contentArea.innerHTML = "";
	}
  }

//   ......product3.....................
function changeContent3(content) {
	const prodImg = document.getElementById("prod3-img");
	const prodContent = document.getElementById("prod3-cont");
	switch (content) {
	  case "content1":
		prodImg.src = "./images/product1.jpg";
		prodContent.innerHTML =
		  '<h1>Solar On-Grid Systems - Starting from 1kW</h1><h2>What is an On-Grid Solar System?</h2><p>An on-grid solar system, also known as a grid-tied solar system, connects directly to your local electricity grid. Unlike off-grid systems, which operate independently, on-grid systems generate electricity using solar panels and feed any excess energy back into the grid. This setup helps reduce electricity bills and allows you to benefit from net metering programs, where you get credited for the energy supplied to the grid.</p><h2>Why Choose a 1kW On-Grid Solar System?</h2><p>A 1kW on-grid solar system is ideal for small homes, apartments, or office spaces with relatively low electricity consumption. Starting at 1 kilowatt, it’s a great entry-level system for those wanting to embrace solar energy and reduce their reliance on the grid.</p><h5 class="d-inline">Cost-Effective:</h5> A smaller system means lower upfront costs compared to larger setups. You can start small and scale up as your energy needs grow.<br><br><h5 class="d-inline">Lower Electricity Bills:</h5> By harnessing the suns power, you can significantly cut down on electricity consumption from the grid, leading to lower monthly bills.<br><br><h5 class="d-inline">Environmentally Friendly:</h5> Solar energy is clean and renewable, helping to reduce your carbon footprint and support a more sustainable environment.<br><br><h5 class="d-inline">Net Metering:</h5> In many areas, surplus energy generated by your solar system is sent back to the grid, earning you credits on your electricity bill.<br><h2>Key Components of a 1kW On-Grid Solar System</h2><p>A 1kW on-grid solar system typically consists of the following key components:</p><h5 class="d-inline">Solar Panels:</h5> The core of the system, solar panels capture sunlight and convert it into electricity. A 1kW system typically requires about 3-4 solar panels, depending on their efficiency.<br><br><h5 class="d-inline">Inverter:</h5> The inverter converts the DC (Direct Current) electricity generated by the panels into AC (Alternating Current), which is used by most appliances.<br><br><h5 class="d-inline">Mounting Structure:</h5> Solar panels are mounted on the roof or another location with optimal sunlight exposure. The mounting structure ensures proper orientation and stability.<br><br><h5 class="d-inline">Grid Connection:</h5> The on-grid system connects to your local electricity grid, allowing excess power to be fed back to the grid while ensuring you receive power when solar generation is insufficient, such as at night.<br><h2>Benefits of Installing a 1kW On-Grid Solar System</h2><h5 class="d-inline">Reduced Carbon Footprint:</h5> Solar energy is clean and helps reduce reliance on fossil fuels, lowering greenhouse gas emissions.<br><br><h5 class="d-inline">Low Maintenance:</h5> On-grid systems require minimal maintenance, with only periodic cleaning and occasional checks to ensure optimal performance.<br><br><h5 class="d-inline">Scalability:</h5> Starting with a 1kW system doesn’t limit you. If your energy needs grow, you can easily add more solar panels to increase your capacity.<br><br><h5 class="d-inline">Government Incentives:</h5> Many governments offer incentives or rebates for installing solar systems, making it more affordable.<br><h2>How Much Energy Can a 1kW Solar System Generate?</h2><p>A 1kW solar system typically generates about 4 to 5 kWh of electricity per day, depending on location, weather conditions, and time of year. This is enough to power basic household appliances like lights, fans, and small electronics. If your energy needs are higher, you may consider scaling up the system.</p><h2>Ideal Applications for a 1kW Solar On-Grid System</h2><h5 class="d-inline">Small Homes or Apartments:</h5> Great for small homes or apartments with low electricity usage, like a single-person household or compact living space.<br><br><h5 class="d-inline">Offices and Small Businesses:</h5> Ideal for small office spaces or businesses looking to reduce their electricity costs.<br><br><h5 class="d-inline">Remote Locations:</h5> Even in areas with limited access to the grid, a small on-grid solar system can provide reliable power while feeding excess energy back into the local grid.<br><h2>Conclusion</h2><p>A 1kW solar on-grid system is a cost-effective and efficient way to start your journey into solar energy. It offers lower upfront costs, reduces electricity bills, and helps create a more sustainable environment. By making the switch to solar, you not only save money but also contribute to a greener, cleaner planet.</p>';
		break;
	  default:
		contentImage.src = "";
		contentHead.innerHTML = "";
		contentArea.innerHTML = "";
	}
  }


  
// .........................Product 4...............................
function changeContent4(content) {
	const prodImg = document.getElementById("prod4-img");
	const prodContent = document.getElementById("prod4-cont");
	switch (content) {
	  case "content1":
		prodImg.src = "./images/product1.jpg";
		prodContent.innerHTML =
		  '<h2>Transforming Public Lighting with Solar Power</h2><p>Say goodbye to hefty electricity bills and hello to clean, renewable energy! Our Solar Street Lights offer a revolutionary way to light up streets, parks, and public spaces, all powered by the sun. These lights not only reduce your reliance on the grid but also help save money, reduce maintenance, and lower your environmental impact. Whether youre in a busy city or a quiet rural area, our solar lights provide reliable, eco-friendly illumination that benefits everyone.</p><h2>Why Solar Street Lights Are the Future</h2><p>Making the switch to solar-powered street lighting is a smart move for both your wallet and the planet. Here’s why:</p><h5 class="d-inline">Energy Independence:</h5> Solar street lights use sunlight to power themselves, so you don’t need to worry about ongoing electricity costs or grid dependence.<br><br><h5 class="d-inline">Eco-Friendly & Sustainable:</h5> Solar energy is clean and renewable, meaning these lights help reduce pollution and carbon emissions, making them a fantastic eco-friendly alternative to traditional lighting.<br><br><h5 class="d-inline">Low Maintenance Costs:</h5> Thanks to their durable design and simple setup, these solar lights require very little upkeep, saving you money in the long run.<br><br><h5 class="d-inline">Automatic, Hassle-Free Operation:</h5> With an intelligent control system, these lights turn on at dusk and off at dawn without any manual effort, making them incredibly convenient.<br><br><h2>What Makes Our Solar Street Lights Stand Out</h2><p>Our solar street lights are designed with cutting-edge technology to deliver the highest performance and longest lifespan. Here’s what you can expect:</p><h5 class="d-inline">Top-Quality Solar Panels:</h5> Our high-efficiency solar panels capture sunlight and convert it into energy, ensuring your lights stay bright throughout the night—rain or shine.<br><br><h5 class="d-inline">Long-Lasting LED Lights:</h5> We use energy-efficient LEDs that provide clear, bright illumination while using minimal power, which helps to extend the lifespan of the entire lighting system.<br><br><h5 class="d-inline">Durable, Reliable Batteries:</h5> Equipped with powerful batteries, our lights store excess solar energy, ensuring they run smoothly all night, even on cloudy days.<br><br><h5 class="d-inline">Built to Endure All Weather:</h5> Crafted from weather-resistant materials, these lights are built to stand up to harsh conditions like rain, snow, or extreme temperatures.<br><br><h5 class="d-inline">Smart Light Control:</h5> Integrated with advanced sensors, our lights automatically adjust their brightness based on the surrounding environment, ensuring optimal energy use and lighting performance.<br><br><h2>Why Choose Our Solar Street Lights?</h2><p>When you choose our solar street lights, you re investing in a smarter, more sustainable lighting solution. Here’s why they’re the best choice for your needs:</p><h5 class="d-inline">Affordable & Reliable:</h5> Solar lights eliminate expensive electricity bills and provide reliable illumination every night, offering long-term savings.<br><br><h5 class="d-inline">Effortless Installation:</h5> With no need for digging trenches or complicated wiring, installation is quick, simple, and cost-effective.<br><br><h5 class="d-inline">Smart Monitoring Features:</h5> Keep an eye on the performance of your lights with real-time monitoring and diagnostics, ensuring everything runs smoothly.<br><br><h5 class="d-inline">Eco-Conscious Design:</h5> By reducing your carbon footprint and promoting energy conservation, our solar street lights are the perfect choice for anyone looking to contribute to a greener world.<br><br><h2>Where Can You Use Solar Street Lights?</h2><p>Solar street lights are perfect for a variety of settings. Whether it’s urban areas or remote locations, they offer a versatile, sustainable lighting solution for:</p><h5 class="d-inline">Urban Streets and Roads:</h5> Ideal for city streets, highways, and residential roads, these lights enhance safety and visibility for both drivers and pedestrians.<br><br><h5 class="d-inline">Parks and Public Spaces:</h5> Perfect for lighting parks, gardens, and recreational areas, solar lights ensure a safe, inviting environment for visitors after dark.<br><br><h5 class="d-inline">Commercial & Industrial Areas:</h5> Solar street lights are ideal for parking lots, shopping malls, and business areas, improving visibility and safety for customers and employees.<br><br><h5 class="d-inline">Remote Locations:</h5> For areas without reliable access to grid power, solar street lights offer an efficient solution for off-grid or rural communities.<br><br><h2>Light the Way to a Sustainable Future</h2><p>By switching to solar street lights, you re not just reducing energy costs you re also making a positive impact on the planet. These lights help lower carbon emissions, reduce energy consumption, and provide a brighter, more sustainable future for communities around the world. Whether you re upgrading urban infrastructure or lighting up a rural town, solar street lights are a smart, sustainable choice for today and tomorrow.</p>';
		break;
	  case "content2":
		prodImg.src = "./images/product2.jpg";
		prodContent.innerHTML =
		  '<h2>Transforming Traffic Safety with Solar Energy</h2><p>Our Solar Traffic Blinkers are a game-changer for road safety! Powered by the sun, these blinkers provide clear, visible signals to drivers, enhancing traffic flow and safety. Whether you’re in a bustling city or a remote rural area, these solar-powered devices are designed to operate seamlessly, reduce energy consumption, and cut down on maintenance costs. With solar blinkers, you get reliability, sustainability, and long-term savings, all while contributing to a greener world.</p><h2>Why Solar Traffic Blinkers Are the Future</h2><p>Switching to solar traffic blinkers is a smart move that brings benefits for both traffic management and the environment. Here’s why:</p><h5 class="d-inline">Energy Efficient:</h5> These blinkers run entirely on renewable solar energy, meaning you don’t need to rely on the grid or worry about ongoing electricity costs.<br><br><h5 class="d-inline">Eco-Friendly & Sustainable:</h5> By using the sun’s power, solar blinkers reduce reliance on fossil fuels, helping to decrease carbon emissions and promote sustainability.<br><br><h5 class="d-inline">Low Maintenance Costs:</h5> Designed for durability and efficiency, solar traffic blinkers need minimal upkeep, reducing maintenance and operational costs significantly.<br><br><h5 class="d-inline">Automatic, Hassle-Free Operation:</h5> Equipped with sensors, these blinkers operate automatically, providing consistent and reliable traffic signals day and night, with no manual effort required.<br><br><h2>What Makes Our Solar Traffic Blinkers Stand Out</h2><p>Our solar traffic blinkers are designed with advanced technology to ensure high performance, durability, and cost-effectiveness. Here s what you can expect:</p><h5 class="d-inline">High-Performance Solar Panels:</h5> The efficient solar panels capture sunlight, ensuring the blinkers are powered and operational throughout the day and night, regardless of weather conditions.<br><br><h5 class="d-inline">Bright LED Lighting:</h5> Equipped with energy-efficient LED lights, our solar traffic blinkers offer maximum visibility, ensuring the signals are clear even in low-light conditions or adverse weather.<br><br><h5 class="d-inline">Durable & Weather-Resistant:</h5> Built with tough, weather-resistant materials, these blinkers withstand all kinds of environmental conditions, from heavy rain to extreme temperatures.<br><br><h5 class="d-inline">Smart Day-Night Sensor:</h5> Our solar traffic blinkers feature an automatic sensor that adjusts the brightness of the lights based on ambient light, optimizing energy use at all times of the day.<br><br><h5 class="d-inline">Long Battery Life:</h5> These blinkers are equipped with high-capacity batteries that ensure continuous operation, even during cloudy days or at night when solar power isn’t available.<br><br><h2>Why Choose Our Solar Traffic Blinkers?</h2><p>When you choose our solar traffic blinkers, you’re opting for a smart, sustainable solution that enhances traffic safety. Here’s why they’re the best choice:</p><h5 class="d-inline">Affordable & Reliable:</h5> Say goodbye to costly electricity bills! Solar traffic blinkers run on free solar energy, providing reliable, long-term traffic control at an affordable cost.<br><br><h5 class="d-inline">Easy Installation:</h5> With no need for extensive wiring or digging, solar traffic blinkers are easy to install, making them suitable for both urban and remote locations.<br><br><h5 class="d-inline">Real-Time Monitoring:</h5> With built-in monitoring features, you can check the status of your solar traffic blinkers in real-time, ensuring they are always functioning optimally.<br><br><h5 class="d-inline">Eco-Friendly Design:</h5> These blinkers help reduce your carbon footprint and contribute to a greener environment, making them a perfect choice for eco-conscious communities.<br><br><h2>Where Can You Use Solar Traffic Blinkers?</h2><p>Solar traffic blinkers are versatile and can be used in various traffic settings, such as:</p><h5 class="d-inline">Road Intersections:</h5> Perfect for signaling drivers about approaching junctions and reducing accidents in busy intersections.<br><br><h5 class="d-inline">Highways & Expressways:</h5> Solar blinkers are ideal for alerting drivers to changes in road conditions, speed limits, or sharp curves on highways.<br><br><h5 class="d-inline">Construction Zones:</h5> Provides clear signals in construction zones, ensuring the safety of workers and drivers.<br><br><h5 class="d-inline">Remote Areas:</h5> In rural or off-grid locations, solar traffic blinkers provide a reliable and cost-effective solution where there’s no access to electricity.<br><br><h2>Leading the Way to a Greener Future</h2><p>By adopting solar traffic blinkers, you re not only improving road safety but also making an important contribution to environmental sustainability. These energy-efficient devices help reduce carbon emissions, lower operational costs, and promote the use of renewable energy. Whether for busy city streets or remote rural roads, solar traffic blinkers are a forward-thinking, eco-friendly solution for today’s traffic management needs.</p>';
		break;
		case "content3":
		prodImg.src = "./images/product2.jpg";
		prodContent.innerHTML =
		  '<h2>3. Illuminate Your Outdoors with Solar Garden Lights</h2><p>Enhance the beauty and safety of your outdoor spaces with our Solar Garden Lights. These lights are perfect for illuminating pathways, gardens, and yard features, adding a touch of elegance to your landscape while saving on energy costs. Whether you want to highlight your gardens charm or improve nighttime safety, solar garden lights offer a stylish and sustainable solution.</p><h2>Why Solar Garden Lights Are the Perfect Choice</h2><p>Switching to solar garden lights is not just about saving on energy it s a way to beautify your outdoor spaces and support a greener future. Here’s why they’re the ideal choice for any garden:</p><h5 class="d-inline">Aesthetic Appeal:</h5> Available in various designs, solar garden lights effortlessly complement any outdoor setting, from modern gardens to traditional landscapes.<br><br><h5 class="d-inline">Automatic Functionality:</h5> These lights automatically turn on at dusk and off at dawn, providing hassle-free operation.<br><br><h5 class="d-inline">Easy Installation:</h5> No wiring needed! Simply place them where you want and let the sun do the rest.<br><br><h5 class="d-inline">Eco-Friendly:</h5> Powered by solar energy, these lights offer a sustainable, renewable way to illuminate your outdoor spaces.<br><br><h2>What Makes Our Solar Garden Lights Stand Out</h2><p>Our solar garden lights combine beauty, efficiency, and reliability. Here’s what you can expect:</p><h5 class="d-inline">Variety of Designs:</h5> Choose from a wide range of styles to match your garden’s aesthetic, from classic lanterns to modern sculptures.<br><br><h5 class="d-inline">Long-Lasting LED Lights:</h5> Featuring energy-efficient LEDs, these lights provide bright, lasting illumination with minimal energy use.<br><br><h5 class="d-inline">Durable Construction:</h5> Built with weather-resistant materials, our solar garden lights withstand outdoor conditions, ensuring reliable performance year-round.<br><br><h5 class="d-inline">Low Maintenance:</h5> With no wiring and fewer moving parts, these lights are easy to maintain, saving you both time and money.<br><br><h2>Why Choose Our Solar Garden Lights?</h2><p>When you choose our solar garden lights, you are not just enhancing your garden, you are making an eco-conscious choice. Here is why they are the best:</p><h5 class="d-inline">Energy Efficient & Cost-Effective:</h5> With no electricity bills, solar garden lights offer an affordable and long-lasting solution for your outdoor lighting needs.<br><br><h5 class="d-inline">Hassle-Free Installation:</h5> Simply place them where you need light, and let the sun power them—no wiring, no hassle.<br><br><h5 class="d-inline">Eco-Conscious Design:</h5> Solar garden lights reduce your carbon footprint and contribute to a cleaner, greener planet.<br><br><h5 class="d-inline">Versatile Use:</h5> Perfect for any outdoor space, from gardens to patios, pathways, and even decorative accents.<br><br><h2>Where Can You Use Solar Garden Lights?</h2><p>Solar garden lights are versatile and can be used in various outdoor settings, such as:</p><h5 class="d-inline">Garden Pathways:</h5> Light up walkways or driveways with soft, ambient lighting, enhancing both safety and beauty.<br><br><h5 class="d-inline">Outdoor Living Spaces:</h5> Perfect for illuminating decks, patios, and other outdoor areas, providing a cozy atmosphere for gatherings and relaxation.<br><br><h5 class="d-inline">Decorative Lighting:</h5> Use these lights to highlight plants, trees, or water features in your garden, adding a magical glow at night.<br><br><h2>4. Enhance Your Property with Solar Security Lights</h2><p>Boost your property’s security with our solar-powered security lights. Featuring motion sensors, these lights automatically turn on when movement is detected, ensuring your home or business stays well-lit and secure at all times.</p><h2>Why Solar Security Lights Are a Smart Investment</h2><p>Installing solar-powered security lights is an easy way to enhance the safety of your property without the need for expensive wiring or ongoing electricity costs:</p><h5 class="d-inline">Motion Detection:</h5> Automatically activates when motion is detected, ensuring your property is illuminated and safe.<br><br><h5 class="d-inline">Bright LED Lighting:</h5> High-intensity LEDs provide powerful and clear illumination for maximum security.<br><br><h5 class="d-inline">Durable and Reliable:</h5> Built to withstand harsh weather conditions, these lights are made to last and perform in any environment.<br><br><h5 class="d-inline">Low Maintenance:</h5> With no need for wiring or regular upkeep, these solar lights are easy to maintain and operate efficiently.<br><br><h2>Where Can You Use Solar Security Lights?</h2><p>Solar security lights can be installed in various locations around your property, offering enhanced safety and visibility:</p><h5 class="d-inline">Perimeter Fencing:</h5> Ideal for illuminating your property’s boundary, these lights help deter intruders and improve security.<br><br><h5 class="d-inline">Driveways and Entrances:</h5> Provide bright, reliable lighting for entrances to your home or business for added safety.<br><br><h5 class="d-inline">Commercial Use:</h5> Perfect for businesses, warehouses, or industrial areas requiring high-security lighting to protect property and assets.<br><br><h2>5. Reliable Illumination with Solar Flood Lights</h2><p>Solar flood lights offer powerful illumination for large outdoor areas such as sports fields, parking lots, and construction sites. These lights are fully powered by the sun, providing a cost-effective, energy-efficient solution for extensive lighting needs.</p><h2>Why Solar Flood Lights Are the Ultimate Lighting Solution</h2><p>Solar flood lights are a highly effective and eco-friendly option for illuminating large areas:</p><h5 class="d-inline">High-Powered Illumination:</h5> Provides intense, wide-area light, ideal for large outdoor spaces where extensive coverage is needed.<br><br><h5 class="d-inline">Automatic Operation:</h5> The lights automatically turn on at dusk and off at dawn without the need for manual operation.<br><br><h5 class="d-inline">Rugged and Weatherproof:</h5> Designed to endure the elements, these floodlights are built to perform reliably in any weather conditions.<br><br><h2>Where Can You Use Solar Flood Lights?</h2><p>These versatile lights are perfect for a variety of large outdoor spaces:</p><h5 class="d-inline">Sports Fields:</h5> Ideal for outdoor sporting events and arenas where bright, consistent lighting is essential.<br><br><h5 class="d-inline">Parking Lots:</h5> Provides secure, cost-effective lighting for large parking areas, ensuring safety at night.<br><br><h5 class="d-inline">Construction Sites:</h5> Perfect for keeping construction sites safe and visible with reliable illumination during night work hours.<br><br><h2>6. Illuminate Your Outdoor Posts with Solar Post Lights</h2><p>Solar post lights are an excellent way to add ambient lighting to posts, fences, and pillars around your home. They are easy to install and provide a stylish and sustainable lighting option for various outdoor settings.</p><h2>Why Solar Post Lights Are a Great Addition</h2><p>Solar post lights are a simple and effective way to light up your outdoor spaces while saving on energy costs:</p><h5 class="d-inline">Variety of Styles:</h5> Available in multiple designs, solar post lights can complement your property’s décor while adding a touch of elegance.<br><br><h5 class="d-inline">Easy Installation:</h5> No complicated wiring is required. Simply mount these lights on posts or columns for instant illumination.<br><br><h5 class="d-inline">Sustainable Lighting:</h5> Powered by solar energy, these lights offer an eco-friendly and cost-effective lighting solution.<br><br><h2>Where Can You Use Solar Post Lights?</h2><p>Perfect for lighting up outdoor features, our solar post lights can be used in:</p><h5 class="d-inline">Gateposts and Fences:</h5> Light up gates, fence lines, and entrance pillars for both beauty and security.<br><br><h5 class="d-inline">Decks and Patios:</h5> Illuminate your outdoor entertaining spaces, adding warmth and charm to your backyard.<br><br><h5 class="d-inline">Walkways and Paths:</h5> Provide soft, subtle lighting along paths, driveways, or garden borders.<br><br><h2>7. Choose Solar Deck Lights for a Cozy Ambiance</h2><p>Solar deck lights are an ideal solution for illuminating decks and patios. These lights create a welcoming atmosphere while being energy-efficient and easy to install.</p><h2>Why Solar Deck Lights Are Essential</h2><p>Solar deck lights not only enhance the beauty of your outdoor spaces, but they also save on energy costs and maintenance:</p><h5 class="d-inline">LED Efficiency:</h5> Equipped with long-lasting LED lights, solar deck lights offer<h2>Why Choose Solar Lighting?</h2><p>Solar lighting systems offer a range of benefits that make them an excellent choice for various applications:<br><h5 class="d-inline">Energy Efficiency:</h5> Solar lights use renewable energy from the sun, reducing reliance on electricity and saving on energy costs.<br><br><h5 class="d-inline">Cost Savings:</h5> With no electricity bills, solar lights provide long-term savings and require little maintenance.<br><br><h5 class="d-inline">Eco-Friendly:</h5> Solar lights are powered by clean, renewable energy, helping reduce your carbon footprint.<br><br><h5 class="d-inline">Low Maintenance:</h5> With fewer parts to maintain and no wiring required, solar lights are easy to maintain and highly reliable.</p><h2>Applications of Solar Lighting</h2><p>Solar lighting can be used in many different settings, providing versatile, energy-efficient illumination:<br><h5 class="d-inline">Residential Use:</h5> Perfect for street lighting, garden lights, or security lighting around the home.<br><br><h5 class="d-inline">Business Use:</h5> Ideal for lighting parking lots, security purposes, or as decorative outdoor lighting for businesses.<br><br><h5 class="d-inline">Public Areas:</h5> Solar lights are perfect for public spaces like parks, streets, and playgrounds, where energy-efficient solutions are needed.<br><br><h5 class="d-inline">Remote Locations:</h5> Solar lighting is a great choice for off-grid areas or during power outages where traditional electrical sources may not be available.</p><h2>Eco-Friendly and Cost-Effective Solution</h2><p>By investing in solar lighting, you are choosing an environmentally responsible and cost-effective solution. These systems not only save you money on energy bills but also contribute to a greener planet by reducing carbon emissions and promoting the use of renewable energy sources.</p>';
		break;
	  default:
		contentImage.src = "";
		contentHead.innerHTML = "";
		contentArea.innerHTML = "";
	}
  }
