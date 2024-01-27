$(document).ready(() => {
    ['click', 'focus-within'].forEach((event) => {
        $('.input').on(event, function () {
            const input = $(this).find('input');

            if (input) {
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

            $(this).val('');
        }
    });

    $('.button-filter').on('click', function () {
        if ($(this).hasClass('active')) {
            $('.form-filter').css({
                'max-height': 0,
                overflow: 'hidden'
            });

            $(this).removeClass('active');
            $(this).find('.material-symbols-outlined').text('tune');
        } else {
            $('.form-filter').css({
                'max-height': '1000px',
                overflow: 'visible'
            });

            $(this).addClass('active');
            $(this).find('.material-symbols-outlined').text('close');
        }
    });

    $('.select').on('click', function () {
        const dropdown = $(this).find('.dropdown-list');

        if (dropdown.css('max-height') === '0px') {
            dropdown.css('max-height', '1000px');
        } else {
            dropdown.css('max-height', 0);
        }
    });

    $('.dropdown-list .item').on('click', function () {
        const selectContainer = $(this).parents('.select');
        const select = selectContainer.find('select');
        const dropdown = $(this).parent();
        const label = selectContainer.find('label[aria-hidden]');

        select.val($(this).data('value'));
        label.text($(this).text());
    });
});
