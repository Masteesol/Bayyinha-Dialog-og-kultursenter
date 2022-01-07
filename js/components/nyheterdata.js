const nyheter = [
    {   
        id: "news1",
        title: `Integreringsarbeid i regi av frivillige organisasjoner <br>
        <strong>– Ett skritt nærmere drømmejobben</strong>`,
        image: "images/nyheter/news1_29.12.21/news_29.12.21.png",
        imageDescription: "fra seminaret",
        imageReel: [
            {
                image: "images/nyheter/news1_29.12.21/image_reel/image1.jpg",
                imageDescription: "Muhammed Abdelqadir snakker om jobbmarkedet i Norge"
            },
            {
                image: "images/nyheter/news1_29.12.21/image_reel/image2.jpg",
                imageDescription: "Buffet!"
            }
        ],
        videos: [ {
            source: "images/nyheter/news1_29.12.21/videos/video1.mp4",
            description: "Video: Muhammed Abdelqadir snakker om jobbmarkedet i Norge",
            text: `<h4>Slik fungerer jobbmarkedet i Norge</h4><br><br><p>Mohammed Abdelqadir er topputdannet i Finans fra BI: 
            "Jeg tok kurs fra NAV, for å bygge min CV og søknad, og ikke minst hvordan man bygger nettverk". 
             Se intervjuet for å finne ut mer hvilken steg Mohammed har tatt for å lykkes med drømmejobben.<br>
            <i>Språk: Somali</i></p>`,
        }, {
            source: "images/nyheter/news1_29.12.21/videos/video2.mp4",
            description: "Video: Abdibasid Ali deler med oss sin erfaring, samt råd og tips.",
            text: ``,
        }
            
        ],
        datePublished: "15.12.21",
        fullText: `Bayyinah har søkt tilskudd fra Oslo kommune for å 
        gjennomføre dette prosjektet: øke kunnskap om det norske samfunnet 
        og styrket kvalifisering for arbeid eller utdanning blant innvandrere. 
        I samarbeid med Norsom TV, har vi produsert tre serier hvor vi har filmet 
        personer fra forskjellige bakgrunn. Filmene har blitt lagt ut på Facebook og 
        Instagram sidene.<br><br> Bayyinah har avsluttet med et seminar som ble holdt den 
        22.12-21. Vi har invitert foredragsholdere som holdte to innlegg for publikum 
        om hvordan arbeidsmarkedet i Norge fungerer og hvordan kan man lykkes i det. `
    },
    {   
        id: "news2",
        title: `Vi har søkt tilskudd til svømming for barnehage barn.`,
        image: "images/nyheter/news2_28.12.21/news_28.12.21.png",
        imageDescription: "signert dokument",
        imageReel: [],
        videos: [],
        datePublished: "16.12.21",
        fullText: `Vi har søkt tilskudd til svømming for barnehage barn og dette har vi fått innvilget. 
        Dette skal gjennomføres i 2021 fra og med januar. I håp om at alt ting som planlagt og at 
        dette skal ikke hindre barna i å få opplæring i svømming. Denne støtten har vi fått 
        sponset av fylkesmann i Oslo og Viken. Mer oppdatering kommer etter gjennomføring av 
        aktiviteten `,
    }, 
];


/* Template for new entry to array of objects
    {   
        id: "",
        title: ``,
        image: "images/nyheter/...",
        imageDescription: "",
        imageReel: [],
        videos: [],
        datePublished: "",
        fullText: ``
    }
    imageReel objects: 
        {
        image: "images/nyheter/news1_29.12.21/image_reel/image1.jpg",
        imageDescription: "Muhammed Abdelqadir snakker om jobbmarkedet i Norge"
    }

    }
    videos objects: 
        {
            source: "images/nyheter/news1_29.12.21/videos/video1.mp4",
            description: "",
            text: ``,
        }
*/ 

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

function findArticle(id) {
    return nyheter.filter(item => item.id === id)[0];
}