window.addEventListener('load', (event) => {
    $("#cta-general").click(function() {
        $('html, body').animate({
            scrollTop: eval($('#general').offset().top - 74)
        }, 1000);
    });
    $("#cta-finnie").click(function() {
        $('html, body').animate({
            scrollTop: eval($('#finnie').offset().top - 74)
        }, 1000);
    });
    $("#cta-nodes").click(function() {
        $('html, body').animate({
            scrollTop: eval($('#nodes').offset().top - 74)
        }, 1000);
    });
    $("#cta-build").click(function() {
        $('html, body').animate({
            scrollTop: eval($('#build').offset().top - 74)
        }, 1000);
    });
    $("#cta-invest").click(function() {
        $('html, body').animate({
            scrollTop: eval($('#invest').offset().top - 74)
        }, 1000);
    });
    $("#cta-token").click(function() {
        $('html, body').animate({
            scrollTop: eval($('#token').offset().top - 74)
        }, 1000);
    });
    $("#cta-partnerships").click(function() {
        $('html, body').animate({
            scrollTop: eval($('#partnerships').offset().top - 74)
        }, 1000);
    });
});