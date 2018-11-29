function parallax(){
var scrolled = $(window).scrollTop();
$('.header_carousel_image_container').css({'transform':'translate(0px,'+scrolled /18+'%'});
};

$(window).scroll(function(e){
    parallax();
});

$(".gallery_header_button").hover(function(){
	$(this)
		.css("transform", "scale: 1.2")
});