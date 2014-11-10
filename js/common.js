$(document).ready(function() {
	//select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    
	});
	//header
	$('.is-download').on('click', function() {
		$(this).parent('.header__download').find('ul').toggleClass('is-open');
		return false;
	});
	//header
	$('.is-drop').on('click', function() {
		$(this).parent('li').find('.nav__sub').toggleClass('is-open');
		return false;
	});
	//galleries synchronize (ITEM)
	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
	  slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('.artifact__pager .slide').click(function() {
	  var index = $('.artifact__pager').data('cycle.API').getSlideIndex(this);
	  console.log(index);
	  slideshows.cycle('goto', index);
	});
	//level 2 alphabet
	$('.alphabet__list li a').on('click', function() {
		$(this).parents('.alphabet__left').find('.alphabet__list li a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});
	$('.alphabet__link').on('click', function() {
		$(this).parent('.alphabet__center').find('.alphabet__link').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});
	$('.alphabet__button').on('click', function() {
		$(this).parent('.alphabet__right').find('.alphabet__button').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});
	$('.alphabet__item').on('click', function() {
		$(this).parents('.alphabet__bottom').find('.alphabet__item').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});
	//popup
	$('.callback a').on('click', function() {
		$(this).parents('body').find('.overlay, .js-popup, .js-callback').toggleClass('is-open');
		return false;
	});
	$('.request a').on('click', function() {
		$(this).parents('body').find('.overlay, .js-popup, .js-request').toggleClass('is-open');
		return false;
	});
	$('.address a').on('click', function() {
		$(this).parents('body').find('.overlay, .js-popup, .js-map').toggleClass('is-open');
		return false;
	});
	$('.header__login a').on('click', function() {
		$(this).parents('body').find('.overlay, .js-popup, .js-login').toggleClass('is-open');
		return false;
	});
	$('.js-close, .overlay').on('click', function() {
		$(this).parents('body').find('.overlay, .js-popup, .js-popup-style').removeClass('is-open');
		return false;
	});
	//SIDEMENU
	$('.is-open-lvl1').on('click', function() {
		$(this).toggleClass('is-active');
		$(this).parent('li').find('.submenu-lvl1').toggleClass('is-open');
		return false;
	});
	$('.is-open-lvl1_mod').on('click', function() {
		$(this).toggleClass('is-active_mod');
		$(this).parent('li').find('.submenu-lvl1').toggleClass('is-open');
		return false;
	});
	$('.is-open-lvl2').on('click', function() {
		if ($('.is-open-lvl2').hasClass('is-open')) {
			$('.is-open-lvl2').removeClass('is-open');
			$('.submenu-lvl2').removeClass('is-open');
		}
		else {
			$(this).toggleClass('is-open');
			$(this).parent('li').find('.submenu-lvl2').toggleClass('is-open');
		};
		return false;
	});
	$('.is-open-lvl3').on('click', function() {
		if ($('.is-open-lvl3').hasClass('is-open')) {
			$('.is-open-lvl3').removeClass('is-open');
			$('.submenu-lvl3').removeClass('is-open');
		}
		else {
			$(this).toggleClass('is-open');
			$(this).parent('li').find('.submenu-lvl3').toggleClass('is-open');
		};
		return false;
	});
	$('.is-open-lvl4').on('click', function() {
		if ($('.is-open-lvl4').hasClass('is-open')) {
			$('.is-open-lvl4').removeClass('is-open');
			$('.submenu-lvl4').removeClass('is-open');
		}
		else {
			$(this).toggleClass('is-open');
			$(this).parent('li').find('.submenu-lvl4').toggleClass('is-open');
		};
		return false;
	});
	$('.submenu-lvl4 a').on('click', function() {
		$(this).toggleClass('is-active');
		return false;
	});
});