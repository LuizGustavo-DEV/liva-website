$(document).ready(() => {
    let active = false;

    $('.menu').on('click', function () {
        if (active) {
            active = false;

            $('.menu').find('span').removeClass('close-menu').addClass('gg-menu');
            $('.mobile-menu').removeClass('active');
        } else {
            active = true;

            $('.menu').find('span').removeClass('gg-menu').addClass('close-menu');
            $('.mobile-menu').addClass('active');
        }
    });
});
