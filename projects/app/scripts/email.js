
// send email
$('#email-form').on('submit', function(e){
    //e.preventDefault();
    
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

        // send data
        $.ajax({
            type: 'POST',
            url: 'email.php',
            data: "name=" + name + "&email=" + email + "&subject=" + subject + "&text=" + text,
            success: function(response) {
                if ( response == "success" ) {
                    // poslano
                    alert('poslano');
                }else {
                    // error
                    alert('error');
                }
            }
        });
        
    }else { return false; } 
});