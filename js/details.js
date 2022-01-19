const main = document.querySelector('main');

const queryString = location.search

const params = new URLSearchParams(queryString);

const id = params.get("id")

const directURL = "https://www.cmsma1mariussolheim.one/wp-json/wp/v2/posts/"
const mediaURL = "https://www.cmsma1mariussolheim.one/wp-json/wp/v2/media/"

async function objectFromAPI() {
        try {
            const JSON = await getApi(directURL + id)
                return newObject(JSON)

        } catch(error) {
            console.log(`Error message is: ${error}`);
        }
    }

insertHTML()

async function insertHTML () {
        const fullArticle = await objectFromAPI()
        //console.log("test details", fullArticle);
        main.innerHTML = htmlNewsDetails(fullArticle);
        if(fullArticle.videos.length > 0) {
                for await (const item of fullArticle.videos) {
                        main.innerHTML += `<article class="text-container" id="video-text">
                                                <h4>${item.heading}</h4>
                                                <p>${item.text}</p>
                                                </article>`;
                        main.innerHTML += createVideoHTML(item)
                };
            
        }
      
        if(fullArticle.imageReel.length > 0) {
                main.append(imageReelHTML(fullArticle))
        }
}

let currentPos = 1;

function imageReelHTML (fullArticle) {
        //console.log("imagereel full", fullArticle);
        const mainContainer = document.createElement("div");
        const reelContainer = document.createElement("div");
        mainContainer.classList.add("main-reel-container")
        reelContainer.classList.add("image-reel-container")
        mainContainer.innerHTML += `<h3>Bildeserie</h3>
                                        <i>Sveip for flere bilder</i>`;

        let counter = 1;

        fullArticle.imageReel.forEach(function(item) {
                reelContainer.innerHTML += `<div class="image-reel-content" id="image${counter}">
                                                                <div>
                                                                                <img src="${item.source}">
                                                                </div> 
                                                                <p>Bilde: ${item.description}</p>
                                                        </div>`;
                                        counter++;
        })
        mainContainer.append(reelContainer)
        const buttonsContainer = document.createElement("span");
        const buttonOne = document.createElement("button")
        const buttonTwo = document.createElement("button")
        buttonOne.setAttribute("id", "slide-left");
        buttonTwo.setAttribute("id", "slide-right")
        buttonOne.addEventListener("click", function() {
                if(currentPos > 1) {
                        currentPos--;
                        const previousImage = document.querySelector(`#image${currentPos}`);
                        previousImage.scrollIntoView({behavior: "auto"})
                }
        })

        buttonTwo.addEventListener("click", function() {
                if(currentPos < fullArticle.imageReel.length) {
                        currentPos++;
                        const nextImage = document.querySelector(`#image${currentPos}`);
                        nextImage.scrollIntoView({behavior: "auto"})
                }
        })

        buttonsContainer.append(buttonOne, buttonTwo)
        mainContainer.append(buttonsContainer);                       
      return mainContainer;
}



function createVideoHTML (video) {
    return `<div class="video-container"> <video width="320" height="240" controls>
                <source src="${video.source}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="text-container">${video.description}</p>
            </div>`;
}


async function newObject(post) {
        const newImage = await getMainImage(post._links["wp:featuredmedia"][0].href)
        
        const arrayOfVideos = await findHTMLNodeInString(post.content.rendered, "video")
        const arrayOfImages = await findHTMLNodeInString(post.content.rendered, "image")
        const fullText = await findHTMLNodeInString(post.content.rendered, "text")

        //console.log("array of images", arrayOfImages);
        const newObject =  {   
            id: String(post.id),
            title: post.title.rendered,
            image: newImage.source,
            imageDescription: newImage.caption,
            imageReel: arrayOfImages,
            videos: arrayOfVideos,
            datePublished: reformatDate(post.date),
            fullText: fullText.join("<br><br>")
           
        }
        //console.log(newObject);
        return await newObject;
    }
    
async function findHTMLNodeInString(string, nodeClassName) {
    
        const typeOfElement = nodeClassName;
        let arrayOfNodes = []

        //console.log("Array of Nodes before", arrayOfNodes);
        let contentHTML = document.createElement("div")
        contentHTML.innerHTML = `${string}`;
        const contentHTMLNodes = contentHTML.childNodes
        //console.log("content of nodes",contentHTMLNodes);
    
        async function findImageFromWP(className) {
                let array = []
            for await (const item of contentHTMLNodes) {
                if(item.className && item.className.includes(className) ) {
                const imageID = item.childNodes[0].className.split("-")[2]
                //example "wp-image-110" we want 110 as the id
                const fullImageObject = await fetch(mediaURL+imageID)
                const JSON = await fullImageObject.json()
                const newObject = {
                        description: JSON.caption.rendered,
                        source: item.firstChild.src,
                        text: ""
                                }
                        array.push(newObject) 
                        }
                        
                } 
                //console.log("array", array);
                return array
        }
        async function findVideoFromWP(urlName, caption) {
                const mediaLibrary = await fetch(mediaURL)
                const JSON = await mediaLibrary.json()
                //console.log("JSON MEDIA",JSON);
                //console.log("Passed URL",urlName);
                //We want the videofilename without the file extention
        
                let object
                for await (const item of JSON) {
                        if(item.guid.rendered === urlName) {
                                let convertToHTML = document.createElement("div")
                                convertToHTML.innerHTML = `${item.description.rendered}`;
                                const contentHTMLNodes = convertToHTML.childNodes
                                //console.log("MEDIANODES", contentHTMLNodes);
                                let heading = item.caption.rendered;
                                heading = heading.substring(3, heading.length-5)
                                
                                object = {
                                        heading: heading,
                                        description: caption,
                                        source: urlName,
                                        text: `<p>${contentHTMLNodes.item(contentHTMLNodes.length-2).firstChild.data}</p>` 
                                }
                        }
                } return object
        }

        switch (typeOfElement) {
            case "video": 
                let hasVideo = false
                contentHTMLNodes.forEach(function(item) {
                     if(item.className && item.className.includes("wp-block-video")) {
                                hasVideo = true;
                        }
                })
                if(hasVideo) {
                        for await (const item of contentHTMLNodes) {
                                if(item.className && item.className.includes("wp-block-video")) {
                                        const url = item.firstChild.src
                                        const caption = item.innerText;
                                        const newObject = await findVideoFromWP(url, caption)
                                        arrayOfNodes.push(newObject) 
                                }
                        }
                }   
                break;
            case "image":
                //checkForMedia("wp-block-image")
                let hasImages = false
                contentHTMLNodes.forEach(function(item) {
                     if(item.className && item.className.includes("wp-block-image")) {
                                hasImages = true;
                        }
                })
                if(hasImages) {
                        arrayOfNodes.push(await findImageFromWP("wp-block-image"))
                        arrayOfNodes = arrayOfNodes[0]
                } 
                break;
            case "text": 
                contentHTMLNodes.forEach(function(item) {
                    if(item.tagName === "P" ) {
                        arrayOfNodes.push(item.textContent)
                    }
            })
            break;
        }
        return arrayOfNodes
    }