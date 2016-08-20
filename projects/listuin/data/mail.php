<div id="show-mail" class="bg-trans popup-container hide-popup">
    <div class="centar acc-pop mail-popup" id="form">
        <i class="fa fa-times" id="close"></i>
        <h3 class="mail-title">Send us a message</h3>
<?php
    if ($_GET["success"] == 1) {
        echo '<div class="form-messages success">Thank you! Your message has been sent.</div>';
    }
    if ($_GET["success"] == -1) {
        echo '<div class="form-messages error">Oops something went wrong. Please try again!</div>';
    }
?>
        
        <form id="email"  method="post" action="mailer.php" >
                <input type="text" placeholder="title" class="inputs ext-input" id="e-title" >
                <div id="title-error">&nbsp;</div>
                <input type="text" placeholder="mail" class="inputs ext-input" id="e-email" >
                <div id="email-error">&nbsp;</div>
                <textarea class="mail-text" id="e-text" placeholder="text"></textarea>
                <div id="text-error">&nbsp;</div>
                <input type="submit" value="Send" class="btn green" id="send-mail">
            </form>
    </div>
</div> 