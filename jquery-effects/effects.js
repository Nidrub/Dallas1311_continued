//start of the jquery
$(document).ready(function() {
    //hide newsSignup
    $('#newsSignup').hide();
    //on click event
    $('#signuplink').click(function(e) {
        e.preventDefault();
        $('#newsSignup').slideToggle();

        var $span = $('#openclose');
        if ($span.text() === '+') {
            $span.text('-');
        } else {
            $span.text('+');
        }

        $('#rose').animate({
            right: '100px',
            opacity: 1
        }, 1500, 'swing');
    });

})