const main = document.querySelector('main');

const queryString = location.search

const params = new URLSearchParams(queryString);

const id = params.get("id")

const fullArticle = findArticle(id)

insertHTML()

function insertHTML () {
        main.innerHTML = htmlNewsDetails(fullArticle);
        if(fullArticle.videos.length > 0) {
            fullArticle.videos.forEach(function(item) {
                main.innerHTML += `<article class="text-container" id="video-text">${item.text}</article>`;
                main.innerHTML += createVideoHTML(item)
                
                
            })
            
        }
        if(fullArticle.imageReel.length > 0) {
                main.append(imageReelHTML())
        }
}

function imageReelHTML () {
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
                                                         <img src="${item.image}">
                                                </div> 
                                                <p>Bilde: ${item.imageDescription}</p>
                                        </div>`;
                                        counter++;
        })
        mainContainer.append(reelContainer)
        mainContainer.innerHTML += `<span>
                                        <button id="slide-left"></button>
                                        <button id="slide-right"></button>
                                        </span>`;
        return mainContainer;
}

let currentPos = 1;

if(fullArticle.imageReel.length > 0) {
        const buttonLeft = document.querySelector('#slide-left'); 
        const buttonRight = document.querySelector('#slide-right');
        buttonLeft.addEventListener("click", function() {
                if(currentPos > 1) {
                        currentPos--;
                        const previousImage = document.querySelector(`#image${currentPos}`);
                        previousImage.scrollIntoView({behavior: "auto"})
                }
        })
        buttonRight.addEventListener("click", function() {
                if(currentPos < fullArticle.imageReel.length) {
                        currentPos++;
                        const nextImage = document.querySelector(`#image${currentPos}`);
                        nextImage.scrollIntoView({behavior: "auto"})
                }
        })
}

function createVideoHTML (video) {
    return `<div class="video-container"> <video width="320" height="240" controls>
                <source src="${video.source}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="text-container">${video.description}</p>
            </div>`;
}
