const main = document.querySelector('main');

const queryString = location.search

const params = new URLSearchParams(queryString);

const id = params.get("id")

const fullArticle = findArticle(id)

insertHTML()

function insertHTML () {
        main.innerHTML = htmlNewsDetails(fullArticle);
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
                        previousImage.scrollIntoView({behavior: "smooth"})
                        console.log(currentPos)
                }
        })
        buttonRight.addEventListener("click", function() {
                if(currentPos < fullArticle.imageReel.length) {
                        currentPos++;
                        const nextImage = document.querySelector(`#image${currentPos}`);
                        nextImage.scrollIntoView({behavior: "smooth"})
                        console.log(currentPos)
                }
        })
}



/*
function hideOrRevealBtn (id, action) {
        const tempBtn = document.querySelector(`${id}`)
        if (action == "hide") {
            tempBtn.style.backgroundImage = "none";
            tempBtn.style.cursor = "auto"
        }
        else {
            tempBtn.removeAttribute("style")
        }
    }
    
    hideOrRevealBtn("#button-left", "hide")
    
    mainContainer.addEventListener("click", function(e){
        const targetID = e.target.id
        const scrollToObj = document.querySelector(".portfolio-images");
        
        if(targetID.includes("right")){
            if (currentPos >= portfolioImages.length) {
                currentPos = portfolioImages.length;
            } else {
                currentPos += 1;
                hideOrRevealBtn("#button-left", "reveal")
                const scrollToElm = document.querySelector("#pos-"+ currentPos.toString());
                scrollToElm.scrollIntoView({behavior: "smooth"})
                if(currentPos === portfolioImages.length) {
                   hideOrRevealBtn("#button-right", "hide")
                    }
                }
            }
        if(targetID.includes("left")){
            if (currentPos <= 1) {
                currentPos = 1;
            } else {
                currentPos -= 1;
                hideOrRevealBtn("#button-right", "reveal")
                const scrollToElm = document.querySelector("#pos-"+currentPos.toString());
                scrollToElm.scrollIntoView({behavior: "smooth"})
                if(currentPos === 1) {
                    scrollToObj.scrollTo(0, {behavior: "smooth"})
                    hideOrRevealBtn("#button-left", "hide")
                    }
                }
            }*/