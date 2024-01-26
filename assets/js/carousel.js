$(document).ready(() => {
    $('.carousel-list').slick({
        infinite: true,
        prevArrow: $('.carousel-button.prev'),
        nextArrow: $('.carousel-button.next'),
        speed: 750,
        mobileFirst: true
    });
});
