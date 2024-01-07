$(function () {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        // autoplay: true,
        // fade: true,
    });
});

$(function () {
    $('.horizontal-slider').slick({
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 3, // Number of slides to scroll
        arrows: false, // Loop slides
        dots: true, // Show navigation dots
    });
});