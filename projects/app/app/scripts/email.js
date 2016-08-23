
// check for inputs
$('#submit').on('click', function(e){
    e.preventDefault();
    
    function checkForm(el, msg, err) {

        var input = $(el);
        var error = $(err);
        
        if ( input.val().length === 0 ) {
            error.html(msg);
            input.select();
        }else { error.html('&nbsp;'); }
    }
    checkForm('#name', 'Bitte geben Sie einen Namen', '#name-error');
    checkForm('#email', 'Bitte geben Sie eine E-Mail', '#email-error');
    checkForm('#subject', 'Bitte geben Sie einen Betreff', '#subject-error');
    checkForm('textarea', 'Textbox ist leer', '#text-error');
    
});