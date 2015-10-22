// Feedback form object and its events handlers
// 

$(document).ready(function(){

    // Feedback Form object - contains main methods to work with form:
    // Feedback.show(), 
    // Feedback.fclose(), 
    // Feedback.validate(), 
    // Feedback.fsend()
    // ========================================================================
    var Feedback = {

        // Show form method
        //---------------------------------------------------------------------
        show: function() {
            // find current top scroll position
            var topW = $(window).scrollTop();   
            $("nav").hide();
            $(".fadeScreen").css({"display": "block", "top": topW});
            $("body").css({overflow: 'hidden'});
            var fHeight = $(window).height()/2 - $("#feedbackForm").height()/2;
            $("#feedbackForm").css({"display": "block", "top": topW+fHeight});

            // Mask for phone input field
            // Using jquery.maskedinput plugin
            $("#phone").mask("+380(99)999-99-99"); 
        },

        // Close form method
        //---------------------------------------------------------------------
        fclose: function() {
            $("nav").show();
            $(".fadeScreen").css({"display": "none"});
            $("body").css({overflow: 'auto'});
            $("#feedbackForm").css({"display": "none"});
            $("#fio").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#message").val("");
        },

        // Send form data to the server
        //---------------------------------------------------------------------
        fsend: function(){
            var formData = $("#feedbackForm").serialize();
            $.ajax({
                type: "post",
                url: "/../site1/forms/feedback.php",
                data: formData,
                // dataType: "text",
                success: function(data){
                    alert(data);
                    if (data.indexOf("Спасибо!")!==-1){
                        Feedback.fclose()
                    }
                },
                error: function(xhr, str){
                    alert("Ошибка отправки формы: \n"+xhr.responseCode);
                }
            });
        },

        // Validate form method
        //---------------------------------------------------------------------
        validate: function() {
            var err = [],
                str = $("#fio").val(),
                regE;

        // Check FIO field
        //
            if (!str) {
                err.push("Поле ФИО не заполнено");
            } else if (str.length > 100) {
                err.push("Поле ФИО превышает допустимое количество в 100 символов");
            } else {
                regE = /^[а-яёa-z ]+$/gi;
                if (str.search(regE)==-1) {
                    err.push("Поле ФИО заполнено некорректно");
                }
            }

        // Check EMAIL field
        //
            str = $("#email").val();
            if (!str) {
                err.push("Поле email не заполнено");
            } else if (str.length > 100) {
                err.push("Поле Email превышает допустимое количество в 100 символов");
            } else {
                regE = /.+@.+\..+/;
                if (!str.match(regE)) {
                    err.push("Поле email заполнено некорректно");
                }
            }

        // Check PHONE field
        //
            str = $("#phone").val();
            if (!str) {
                err.push("Поле Телефон не заполнено");
            } else if (str.length > 20) {
                err.push("Поле Телефон превышает допустимое количество в 20 символов");
            } else {
                regE = /\+380\(\d{2}\)\d{3}\-\d{2}\-\d{2}/;
                if (!str.match(regE)) {
                    err.push("Поле Телефон заполнено некорректно");
                }
            }

        // Check MESSAGE field
        //
            if ($("#message").val().length > 1000) {
                err.push("Поле Сообщение превышает допустимое количество в 1000 символов");
            }

            return err;
        }

    }; // end Feedback object -----------


    // Handlers for feedback form
    // ========================================================================

    // Leave Feedback button clicked
    // ------------------------------------------------------------------------
    $(".leaveFeedback").click(function(){
        Feedback.show();
    });

    // Send button pressed
    // ------------------------------------------------------------------------
    $("#send").click(function(e){
        e.preventDefault();
        var err=Feedback.validate();
        if (err.length) {
        // Validation returned errors
            var eMsg="Форма заполнена некорректно:\n\r";
            for (var i=0; i<err.length; i++) {
                eMsg += i + 1 + ". " + err[i] + ".\n";
            }
            eMsg += "\rИсправьте, пожалуйста, эти ошибки и отправьте форму еще раз.";
            alert(eMsg);
        } else {
        // Send form to the server
            Feedback.fsend();
        }
    }); // end of Send button handler

    // Escape button is clicked
    // ------------------------------------------------------------------------
    $("#escape").on("click", function(e){
        e.preventDefault();
        Feedback.fclose();
    });

    // Black screen behind Feedback Form is clicked
    // ------------------------------------------------------------------------
    $(".fadeScreen").on("click", function(e){
        if (e.target == $(this)[0]) {
            Feedback.fclose();
        }
    });

    // Esc key is pressed
    // ------------------------------------------------------------------------
    $(document).on("keydown", function(e){
        if (e.keyCode === 27){
            Feedback.fclose();
        }
    });

});