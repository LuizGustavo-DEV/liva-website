$(document).ready(() => {
    $('.menu').on('click', function () {
        const mobileMenu = $('.mobile-menu');

        if (mobileMenu.hasClass('active')) {
            $('.menu').find('.material-symbols-outlined').text('menu');
            $('.mobile-menu').removeClass('active');
        } else {
            $('.menu').find('.material-symbols-outlined').text('close');
            $('.mobile-menu').addClass('active');
        }
    });
});
