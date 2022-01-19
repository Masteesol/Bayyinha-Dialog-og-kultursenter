const main = document.querySelector('main');

insertHTML()


async function insertHTML() {
    try {
        const JSON = await getApi(postsURL)

        for await (const item of JSON) {
            console.log(item);
            const html = `<div class="arkiv-card">
                        <a href="details.html?id=${item.id}"><h2>${item.title.rendered}</h2></a>
                        <p>Dato publisert: ${reformatDate(item.date)}</p>   
                    </div>`;
                    main.innerHTML += html;
            }
        
    } catch(error) {
        console.log(`Error message is: ${error}`);
    }
}