//Jquery
$(document).ready(function(){
    //hide the botanic class
    $('.botanic').hide();
    //hide method to the imgdiv class
    $('.imgdiv').hide();


    //h1 and h2
    $('h1,h2').mouseover(function(){
        $(this).css('color','red');
    });
    $('h1,h2').mouseout(function(){
       $(this).css('color','black');
    });

    //flower methond
    $('.flower').click(function(){
        $('.botanic').hide();
        $(this).children('.botanic').show();
    });
    //hover event for the .pic
    $('.pic').hover(
        function(evt) {
            var flowerId = $(this).attr('title');
            var imgDivId = '#' + flowerId;

            var x = evt.pageX;
            var y = evt.pageY;

            $(imgDivId).css({
                top: y + 'px',
                left: x + 150 + 'px'
            }).show();
        },
        function(){
            var flowerId = $(this).attr('title');
            var imgDivId = '#' + flowerId;

            $(imgDivId).hide();
        });

    $(document).keypress(function(e) {
        var keyPressed = String.fromCharCode(e.which).toLowerCase();
        window.location = "#" + keyPressed;
    });


});