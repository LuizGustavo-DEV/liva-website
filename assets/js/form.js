$(document).ready(() => {
    $('#phone').mask('(00) 00000-0000');
    
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
            $(this).find('.material-symbols-outlined').text('expand_less');
        } else {
            $(this).find('.material-symbols-outlined').text('expand_more');
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

    let sending = false;
    
    $('#message-form').on('submit', function (event) {
        event.preventDefault();

        if (sending) {
            return;
        }

        sending = true;

        const sendButton = $(this).find('send-button');
        
        sendButton.text('Enviando Mensagem...').addClass('sending');

        $('.error').remove();
        
        const phoneValidator = new RegExp('^\\(([0-9]{2})\\) [0-9]{5}-[0-9]{4}$');
        const emailValidator = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
        const errorMessage = '<span class="error">*por favor, preencha corretamente</span>';

        const inputs = [
            $('#name'),
            $('#phone'),
            $('#email')
        ];

        let fail = false;
        
        inputs.forEach((input) => {
            input.parent().removeClass('fail');

            if (input.val().trim() === '') {
                $(errorMessage).insertAfter(input.parent());
                input.parent().addClass('fail');

                fail = true;
            }
        });
        
        if (fail) {
            sending = false;

            sendButton.text('Enviar Mensagem').removeClass('sending');
            
            return;
        }
        
        if (!phoneValidator.test($('#phone').val())) {
            $(errorMessage).insertAfter($('#phone').parent());
            $('#phone').parent().addClass('fail');

            sending = false;

            sendButton.text('Enviar Mensagem').removeClass('sending');
            
            return;
        } else {
            $('#phone').parent().addClass('success');
        }

        if (!emailValidator.test($('#email').val())) {
            $(errorMessage).inserAfter($('#email').parent());
            $('#phone').parent().addClass('fail');

            sending = false;

            sendButton.text('Enviar Mensagem').removeClass('sending');

            return;
        } else {
            $('#email').parent().addClass('success');
        }

        if ($('#message').val().trim() === '') {
            $('<span class="error">*por favor, escreva uma mensagem</span>').insertAfter($('#message').parent());

            sending = false;
            
            sendButton.text('Enviar Mensagem').removeClass('sending');

            return;
        }

        $('#message').val('');

        sendButton.text('Mensagem Enviada').removeClass('sending');
        
        openModal();

        setTimeout(() => {
            closeModal();
            sending = false;
        }, 5000);
    });

    $(document).on('keydown', function (event) {
        if ((event.key === 27 || event.key === 13) && $('.modal').prop('open')) {
            closeModal();
        }
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.modal')) {
            closeModal();
        }
    });
    
    function openModal() {
        document.querySelector('dialog').showModal();
    }

    function closeModal() {
        document.querySelector('dialog').close();

    }
});
