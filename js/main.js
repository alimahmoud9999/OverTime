$(document).ready(function () {

    // $('.box-input').on('click',function(){
    //     $(this).removeClass('check'); 
    //     $(this).addClass('check'); 
    //     console.log('hi');
    // });




    // Counter Number .sec4
    $(window).scroll(function () {
        var pT = $('.sec3');
        if (!pT.length) {
            return;
        }
        var pTT = pT.offset().top;
        var hH = $('.sec3').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (pTT + hH - wH)) {
            $(function () {
                $('.counter').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                });
            });
        }
    });
});

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount1").val("" + ui.values[0]);
            $("#amount2").val("" + ui.values[1]);
        }
    });
    $("#amount1").val("" + $("#slider-range").slider("values", 0));
    $("#amount2").val("" + $("#slider-range").slider("values", 1));
});