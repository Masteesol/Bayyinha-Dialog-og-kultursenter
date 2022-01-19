const main = document.querySelector('main');
const loader = document.querySelector('.loader');

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

insertHTML()

async function insertHTML () {
    try {
        const newArray = await arrayFromAPI()
    for await (const item of newArray) {
        loader.remove()
        main.innerHTML += htmlNewsFeed(item);
        
    }
    
    } catch(err) {
        console.log(err);
    }
    
}



