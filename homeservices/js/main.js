$(function() {

    // Добавляем маску для поля с номера телефона
    $('.phone').mask('+7 (999) 999-99-99');

    // Проверяет отмечен ли чекбокс согласия
    // с обработкой персональных данных
    $('.check').on('click', function() {
        var $form = $(this).closest('.contactForm'),
            $button = $form.find('.button');
        if (this.checked) {
            $button.attr('disabled', false);
        } else {
            $button.attr('disabled', true);
        }
    });

    // Отправляет данные из формы на сервер и получает ответ
    $('.contactForm').on('submit', function(event) {

        event.preventDefault();

        var $form = $(this),
            $button = $form.find('.button'),
            $answer = $form.find('.answer'),
            $loader = $form.find('.loader');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: $form.serialize(),
            beforeSend: function() {
                $answer.empty();
                $button.attr('disabled', true).css('margin-bottom', '20px');
                $loader.fadeIn();
            },
            success: function(result) {
                $loader.fadeOut(300, function() {
                    $answer.text(result);
                });
                $form.find('.field').val('');
                $button.attr('disabled', false);
            },
            error: function() {
                $loader.fadeOut(300, function() {
                    $answer.text('Произошла ошибка! Попробуйте позже.');
                });
                $button.attr('disabled', false);
            }
        });

    });

});