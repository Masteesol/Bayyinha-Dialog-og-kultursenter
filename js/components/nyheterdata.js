const postsURL = "https://www.cmsma1mariussolheim.one/wp-json/wp/v2/posts"


async function getMainImage(url) {
    try {
        const featuredImage = await fetch(url)
        const JSON = await featuredImage.json();
        const imageObject = {
            source: JSON.source_url,
            caption: JSON.caption.rendered  
        } 
        //console.log(imageObject);
        return imageObject;
    } catch(error) {
        console.log(`Error message is: ${error}`);
    }
    
}

async function arrayFromAPI() {
    try {
        const JSON = await getApi(postsURL)
        let newArray =  JSON.map(function(post) {
            return newArrayObject(post)
        }) 
        return await newArray
        
    } catch(error) {
        console.log(`Error message is: ${error}`);
    }
}



function htmlNewsFeed (articleData) {
    return `<div class="newscard" id=${articleData.id}>
                <a href="details.html?id=${articleData.id}"><h2>${articleData.title}</h2></a>
                <a class="link-container" href="details.html?id=${articleData.id}">
                    <img src=${articleData.image} alt="nyheter image">
                    </a>
                    <div>
                        <span>Dato publisert: ${articleData.datePublished}</span>
                </div>
            </div>`;
}

function htmlNewsDetails(articleData) {
    return `<div class="image-container"><img src=${articleData.image} alt="nyheter bilde"></div>
            <div class="description-container">
                <span>Bilde: ${articleData.imageDescription}</span>
                <span>Dato publisert: ${articleData.datePublished}</span>
            </div>
            <div class="text-container">
                <h1>${articleData.title}</h1>
                <p>${articleData.fullText}</p>
                </div>`;
}

async function findArticle(id) {
    const newArray = await arrayFromAPI()
    for await (const item of newArray) {
        if(item.id === id) {
            return item;
        };
    }
    //return newArray.filter(item => item.id === id)[0];
}

function reformatDate(date) {
    const onlyDate = date.substring(0,10)
    const newDate = onlyDate.split("-");
    return newDate[2] +'.' + newDate[1]+ '.' + newDate[0]

}
