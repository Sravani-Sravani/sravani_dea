$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000
    });
    animateSlider();
	if($('.carousel').attr('data-slider') == 'HOME')
    setInterval(moveSlider, 5000);
});

function moveSlider(){
    $('.carousel-control-next').trigger('click');
    animateSlider();
}

function animateSlider(){
    $('.trans-overlay').css({"left":"2000px"}).animate({"left":"0px"}, 1000);
    $('.left-overlay').css({"left":"200px"}).animate({"left":"0px"}, 2000);
    $('.carousel-caption').css({"margin-left":"-300px"}).animate({"margin-left":"0px"}, 2200);
}

// News & Events
 $('.scroller').owlCarousel({
    loop:true,
    dots:false,
	nav:true,
	responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


$('.quicklink_scroller').owlCarousel({
    loop:true,
	  responsiveClass:true,
	  autoplay:true,  
	  dots:false,  
	  nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

$(function () {
			$("#search-menu").removeClass("toggled");

			$("#search-icon").click(function (e) {
				e.stopPropagation();
				$("#search-menu").toggleClass("toggled");
				$("#popup-search").focus();
			});

			$("#search-menu input").click(function (e) {
				e.stopPropagation();
			});

			$("#search-menu, body").click(function () {
				$("#search-menu").removeClass("toggled");
			});
		});

//Feedback Form
$(document).ready(function() {
    $('.comment').hide();
    $('.otp').hide();
});

$('#sendotp').click(function(){
    $('.otpmessage').show();
    $('.otp').show();
    $('#sendotp').addClass('d-none');
    $('#submitotp').removeClass('d-none');
});

$('#submitotp').click(function(){
    $('.otp').hide();
    $('.comment').show();
    $('.otpmessage').hide();
    $('#submitotp').addClass('d-none');
    $('#submitform').removeClass('d-none');
});

//TAB TO  ACCORDION
$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});
