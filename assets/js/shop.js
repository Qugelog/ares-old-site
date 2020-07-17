$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#shopform').validate({
            rules: {
                account: {
                    required: true,
                    minlength: 3,
                },
                sum: {
                    required: true,
                    min: 10,
                    digits: true
                },    
            },
            messages: {
                account: {
                    required: "<div style='color: red;'>Пожалуйста, заполните это поле!</div>",
                    minlength: "<div style='color: red;'>Минимальная длина никнейма: 3 символа!</div>"
                },  
                sum: {
                    required: "<div style='color: red;'>Пожалуйста, заполните это поле!</div>",
                    min: "<div style='color: red;'>Минимальная сумма пополнения: 10 рублей</div>",
                    digits: "<div style='color: red;'>Введите целое число!</div>"
                }
            },
        });
    });
        
 })(jQuery);
});