$(document).ready(function() {
     
    $('#owl-carousel-first').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
});

$('#owl-carousel-blog').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    items:4,
});

$('#owl-carousel-partner').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    items:8,
});

window.onload = function () {
    $('.overlay_site').fadeOut('fast');
}

$(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
        $('#scroll_top').fadeIn("fast");
    } else {
        $('#scroll_top').fadeOut("fast");
    }
});

$('#scroll_top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});
});