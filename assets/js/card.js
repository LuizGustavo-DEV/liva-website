$(document).ready(() => {
    $('.card').on('click', function () {
        const cardDetails = $(this).find('.card-details');
        const cardImage = $(this).find('img');

        if (cardDetails.css('max-height') === '0px') {
            cardDetails.css('max-height', '1000px');
            cardImage.css('filter', 'brightness(70%)');
        } else {
            cardDetails.css('max-height', '0px');
            cardImage.css('filter', 'brightness(100%)');
        }
    });
});
