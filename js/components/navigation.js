const mainLogo = document.querySelector('.header-logo');
const footer = document.querySelector('footer');

mainLogo.addEventListener("click", function() {
    loadLogo()
})

//Footer html is inserted by JS to make it easier to change the content

footer.innerHTML = `<div class="contact-info">
                        <p>E-post: bdksenter2020@gmail.com</p>
                        <p>Telefon: 484 29 079</p>
                    </div>
                        <div class="social-media">
                            <h3>Følg oss på sosiale medier!</h3>
                            <div>
                                <a href="https://instagram.com/bdksenter20"><img src="icons/instagram.png" alt="instagram-link" class="instagram"></a>
                                <a href="https://www.facebook.com/BDKsenter20"><img src="icons/facebook.png" alt="facebook-link" class="instagram"></a>
                            </div>   
                        </div>
                        <div class="org-details">
                            <p>Bayyinah dialog og kultursenter. </p><p>Organisasjonsnummer 925 000 507. </p><p>Copyright 2022.</p>
                        </div>
                        <div class="footer-utvikler">
                            <p>Nettsiden er utviklet av Marius Solheim</p>
                            <p>E-post: masteesol@gmail.com</p>
                        </div>`;