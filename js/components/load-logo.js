const body = document.querySelector('body');
const html = document.querySelector('html');

function loadLogo () {
    html.classList.add("load-document")
    body.innerHTML = `<main>
                        <img src="logo/logo\ full.png">
                    </main>`;
    const main = document.querySelector('main');
    body.classList.add("reset-background")
    main.classList.add("load-logo")
    setTimeout(changeLocation, 2000)
}

function changeLocation() {
    location.replace("nyheter.html")
}