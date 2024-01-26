$(document).ready(() => {
    ['click', 'focus-within'].forEach((event) => {
        $('.input').on(event, function () {
            const input = $(this).find('input');

            if (input) {
                input.css('display', 'block');

                $(this).find('label').css('color', 'var(--subtext-clr)');

                input.css('max-height', '1000px').focus();
            }
        });
    });

    $('input').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).siblings('label').css('color', 'var(--main-clr)');

            $(this).css({
                'max-height': 0
            });

            let inputTransition = $(this).css('transition').split(' ')[1];
            inputTransition = inputTransition.replace('s', '') * 1000;

            setTimeout(() => {
                $(this).css('display', 'none');
            }, inputTransition);
            
            $(this).val('');
        }
    });
});
