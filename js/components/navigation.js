const mainLogo = document.querySelector('.header-logo');
const footer = document.querySelector('footer');

mainLogo.addEventListener("click", function() {
    loadLogo()
})

//Footer html is inserted by JS to make it easier to change the content

footer.innerHTML = `<div>
                        <p>E-post: bdksenter2020@gmail.com</p>
                        <p>Telefon: 00000000</p>
                        </div>
                        <div class="social-media">
                        <h3>Følg oss på sosiale medier!</h3>
                        <div>
                            <a href=""><img src="icons/instagram.png" alt="" class="instagram"></a>
                            <a href=""><img src="icons/facebook.png" alt="" class="instagram"></a>
                        </div>   
                        </div>
                        <div>
                        <p>Bayyinah dialog og kultursenter. Organisasjonsnummer 925 000 507. Copyright 2022.</p>
                        </div>
                        <div>
                        <p>Nettsiden er utviklet av Marius Solheim</p>
                        <p>E-post: masteesol@gmail.com</p>
                    </div>`;