const main = document.querySelector('main');

insertHTML()

function insertHTML () {
    for(let i = 0; i < nyheter.length; i++) {
        if (i === 4) {
            break;
        }
        main.innerHTML += htmlNewsFeed(nyheter[i]);
    }
}