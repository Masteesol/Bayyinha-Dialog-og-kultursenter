const nyheter = [
    {   
        id: "news1",
        title: `Integreringsarbeid i regi av frivillige organisasjoner <br>
        <strong>– Ett skritt nærmere drømmejobben</strong>`,
        image: "images/nyheter/news_29.12.21.png",
        imageDescription: "fra seminaret",
        datePublished: "15.12.21",
        fullText: `Bayyinah har søkt tilskudd fra Oslo kommune for å 
        gjennomføre dette prosjektet: øke kunnskap om det norske samfunnet 
        og styrket kvalifisering for arbeid eller utdanning blant innvandrer. 
        I samarbeid med Norsom TV, har vi produsert tre serier hvor vi har filmet 
        personer fra forskjellige bakgrunn. Filmene har blitt lagt ut på Facebook og 
        Instagram sidene.<br><br> Bayyinah har avsluttet med et seminar som ble holdt den 
        22.12-21. Vi har invitert foredragsholdere som holdte to innlegg for publikum 
        om hvordan arbeidsmarkedet i Norge fungerer og hvordan kan man lykkes i det. `
    },
    {   
        id: "news2",
        title: `Vi har søkt tilskudd til svømming for barnehage barn.`,
        image: "images/nyheter/news_28.12.21.png",
        imageDescription: "signert dokument",
        datePublished: "16.12.21",
        fullText: `Vi har søkt tilskudd til svømming for barnehage barn og dette har vi fått innvilget. 
        Dette skal gjennomføres i 2021 fra og med januar. I håp om at alt ting som planlagt og at 
        dette skal ikke hindre barna i å få opplæring i svømming. Denne støtten har vi fått 
        sponset av fylkesmann i Oslo og Viken. Mer oppdatering kommer etter gjennomføring av 
        aktiviteten `,
    }
];


/* Template for new entry to array of objects
    {   
        id: "",
        title: ``,
        image: "images/nyheter/...",
        datePublished: "",
        fullText: ``
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