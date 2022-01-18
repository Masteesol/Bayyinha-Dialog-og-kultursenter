const main = document.querySelector('main');

insertHTML()

async function insertHTML () {
    const newArray = await arrayFromAPI()
    for await (const item of newArray) {
        const html = `<div class="arkiv-card">
                    <a href="details.html?id=${item.id}"><h2>${item.title}</h2></a>
                    <p>Dato publisert: ${item.datePublished}</p>   
                </div>`;
                main.innerHTML += html;
        }
    }