/***************** Waypoints ******************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});
/***************** Overlays ******************/
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }

/***************** Owlslider ******************/
    $("#owl-demo").owlCarousel({
	    navigation : true,
	    slideSpeed : 300,
	    paginationSpeed : 400,
	    navigationText : ["",""],
		pagination : false,
		autoPlay : true,
	    singleItem:true     
    });
	$("#text-demo").owlCarousel({
	    navigation : true,
	    slideSpeed : 300,
	    paginationSpeed : 400,
	    navigationText : ["",""],
	    pagination : false,
	    autoPlay : true,
	    singleItem:true
    });

/***************** Meanmenu ******************/
    jQuery(document).ready(function () {
	    jQuery('nav').meanmenu();
	});
});