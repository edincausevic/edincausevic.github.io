
// send email
$('#email-form').on('submit', function(e){
    e.preventDefault();
    
    var check = true;
    // check for inputs
    function checkForm(el, msg, err) {

        var input = $(el);
        var error = $(err);
        
        if ( input.val().length === 0 ) {
            error.html(msg);
            input.select();
            check = false;
        }else { error.html('&nbsp;'); }
    }
    checkForm('#name', 'Bitte geben Sie einen Namen', '#name-error');
    checkForm('#email', 'Bitte geben Sie eine E-Mail', '#email-error');
    checkForm('#subject', 'Bitte geben Sie einen Betreff', '#subject-error');
    checkForm('textarea', 'Textbox ist leer', '#text-error');
    
    // stop the form
    if ( check === true ) {
        // store data from inputs
        var name = $('#name').val(),
            email = $('#email').val(),
            subject = $('#subject').val(),
            text = $('textarea').val();
        
        function emptyInput() {
            $('#name').val("");
            $('#email').val("");
            $('#subject').val("");
            $('textarea').val("");
        }

        // send data
        $.ajax({
            type: 'POST',
            url: 'email.php',
            data: { name: name, email: email, subject: subject, text: text },
            success: function(response) {
                if ( response == "success" ) {
                    emptyInput();
                    makeMsg('Vielen Dank! Ihre Nachricht wurde gesendet.', '#80bd34');
                }else {
                    emptyInput();
                    makeMsg('Hoppla! Etwas ist schief gelaufen. Bitte versuche es erneut!', '#fa4641');
                }
            }
        });
        
    }else { return false; } 
});

// make msg after mail is send    
function makeMsg( msg, color ) {

    var message = '<div class="mail-msg">' +msg+ '</div>';
    $('#email-message').html( message );
    $('.mail-msg').css('color', color);
    $('.mail-msg').fadeIn(300);
    setTimeout(function(){$('.mail-msg').html('&nbsp;');},2000);
}    
