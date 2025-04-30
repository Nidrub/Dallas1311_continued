$(document).ready(function() {

    //a
    $('a').mouseover(function () {
        $(this).css('color', 'red');
    });
    $('a').mouseout(function () {
        $(this).css('color', '#71af95');
    });
    //img
    $('#image').hover(
        function () {
            $(this).css({
                'border': '2px solid #71af95',
                'box-shadow': '0 0 100px #71af95'
            });
        },
        function () {
            $(this).css({
                'border': '',
                'box-shadow': ''
            });
        }
    );

});