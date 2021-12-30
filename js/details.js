const main = document.querySelector('main');

const queryString = location.search

const params = new URLSearchParams(queryString);

const id = params.get("id")


insertHTML()

function insertHTML () {
        main.innerHTML = htmlNewsDetails(findArticle(id));
}