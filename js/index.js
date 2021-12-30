const main = document.querySelector('main');

insertHTML()

function insertHTML () {
    nyheter.forEach(function(item) {
        main.innerHTML += htmlNewsFeed(item);
    })
}