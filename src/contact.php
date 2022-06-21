<?php
require("./header.php");
?>
<div class="containercontact">
    <div class="colonne1">
        <h3 class="titrecontact"><span class="highlight">Me contacter</span></h3>
        <p class="pcontact">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, adipisci dolorum ipsam ut amet labore itaque quos corporis, fugit ipsa non magnam veritatis libero architecto accusantium consequatur molestiae veniam. Asperiores!</p>
    </div>
    <div class="colonne2">

        <div class="i">
            <i class="fas fa-user"></i>
            <input type="text" name="name" placeholder="ENTREZ VOTRE NOM">
        </div>
        <div class="i">
            <i class="fas fa-envelope"></i>
            <input type="text" name="email" placeholder="ENTREZ VOTRE EMAIL">
        </div>
        <div class="i">
            <i class="fas fa-check"></i>
            <input type="text" name="subject" placeholder="OBJET">
        </div>
        <div class="i">
            <i class="fas fa-comment-dots"></i>
            <textarea placeholder="ENTREZ VOTRE MESSAGE"></textarea>
        </div>
        <div class="containersubmit">
        <button id="btn">
            <p id="btnText">ENVOYER</p>
            <div class="check-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
        </button>
    </div>
    </div>
							
</div>

<?php
require("./footer.php");
?>