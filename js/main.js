jQuery(document).ready(function($) {

    // Start main slideshow
    // Using bxslider plugin (http://bxslider.com/)
    // ------------------------------------------------------------------------
    var sliderParams = {
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 3,
        slideWidth: 327,
        slideMargin: 1,
        controls: false,
        pause: 2000,
        autoStart: true,
        autoHover: true,
        auto: true,
        adaptiveHeight: true
    };

    var nSlides = $(window).width() > 620 ? 3 : 2;

    $.extend(sliderParams, {
        minSlides: nSlides,
        maxSlides: nSlides,
        moveSlides: nSlides
    });

    var slider = $('.bxslider').bxSlider(sliderParams);

    // Fixed button for 320px view mode
    // ------------------------------------------------------------------------
    $("#fixed-button").hide(); //hide #fixed-button on load
    // Show fixed button on left when scroll 100px down
    // And hide when scroll up again
    // works for element with 'fixed-button' id
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100)
            $("#fixed-button").fadeIn();
        else
            $("#fixed-button").fadeOut();
    });

    
    // Events' HANDLERS
    // ========================================================================

    // Handler for resize window event - to fix slider's behaviour
    // ------------------------------------------------------------------------
    $(window).on('resize', function(){
        var i = ($(window).width() > 620) ? 3 : 2;
        $.extend(sliderParams, {
            minSlides: i,
            maxSlides: i,
            moveSlides: i,
            controls: false,
            auto: true
        });
        slider.reloadSlider(sliderParams);
    });

    // Separate slider's element (image) is chosen
    // after it was chosen - open new slider in popup
    // and start carousel from chosen slide
    // ------------------------------------------------------------------------
    $(".gallery").delegate("li", "click", (function(){
        // find index of chosen image
        // bxslider plugin adds 'li' clones before and after our 'li'
        // if clone was clicked, $(this) is undefined - show first slide in popup
        if ($(this) == undefined)  {
            var i=-1;
        } else {
            i = $(this).index();
        }
        if (i>10 || i==-1) {
            i=2;
        }
        i = ($(window).width() > 620) ? i-3 : i-2;

        var  topW = $(window).scrollTop();

        // Fade screen to prepare for popup window and block scrolling
        $(".fadeScreen").css({"display": "block", "top": topW});
        $(".imgPopup").css({"display": "block", "top": topW});
        $("body").css({overflow: 'hidden'});
        $("nav").hide();

        // Start new slider in a popup window
        $.extend(sliderParams, {
            startSlide: i,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            controls: true,
            auto: false
        });
        var slider1 = $('.bxslider1').bxSlider(sliderParams);

        // Black screen behind slider is clicked
        $(".imgPopup").on("click", function(e){
            if (e.target == $(this)[0]) {
                closePopup();
            }
        });

        // Esc button is pressed
        $(document).on("keydown", function(e){
            if (e.keyCode === 27){
                closePopup();
            }
        });

        // Close popup window
        function closePopup(){
            slider1.destroySlider();
            $("body").css({overflow: 'auto'});
            $(".fadeScreen").css({"display": "none"});
            $(".imgPopup").css({"display": "none"});
            $("nav").show();
            slider.startAuto();
        };
    }));
});


