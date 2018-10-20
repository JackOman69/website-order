function checkParams() {
    var name = $('#input-name').val();
    var email = $('#input-email').val();
    var textarea = $('#textarea').val();
     
    if(name.length != 0 && email.length != 0 && textarea.length != 0) {
        $('#myBtn').removeAttr('disabled');
    } else {
        $('#myBtn').attr('disabled', 'disabled');
    }
}