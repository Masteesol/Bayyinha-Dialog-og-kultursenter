const main = document.querySelector('main');

async function newArrayObject(post) {
    const newImage = await getMainImage(post._links["wp:featuredmedia"][0].href)

    const newObject =  {   
        id: String(post.id),
        title: post.title.rendered,
        image: newImage.source,
        imageDescription: newImage.caption,
        datePublished: reformatDate(post.date),
    }
    //console.log(newObject);
    return await newObject;
}

async function insertHTML () {
    const newArray = await arrayFromAPI()
    //console.log("newArray = ", newArray);
    for await (const item of newArray) {
        main.innerHTML += htmlNewsFeed(item);
    }
}

insertHTML()

