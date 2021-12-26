//Hej Thomas det her er elementer, der skal genereres.
const navLinks = [
    {
        idName: 'tekst', 
        text: 'Tekster',
    },
    {
        idName: 'knap',
        text: 'Knapper',
    },
    {
        idName: 'billede',
        text: 'Billede',
    },
    {
        idName: 'modul', 
        text: 'Moduler',
    }
];

//Her får vi fat i elementet, der skal generere ind i.
const navLinksElement = document.getElementById('navLinks');

//Jaaa her har vi et loop Thomas! Den tager sku da lige vores array's objekter.
// og køre igennem dem, indtil der ikke er flere.
navLinks.forEach(function(navElement) {
    
    //Her laver jeg et li element
    const liElement = document.createElement('li');

    //Her laver jeg et a element også
    const aElement = document.createElement('a');
    //den vil jeg gerne have har et ID!
    aElement.setAttribute("id", navElement.idName);
    //og lidt tekst
    aElement.innerText = navElement.text;

    //Så smider vi den bare lige ind i vores Li tag
    liElement.appendChild(aElement);

    //Tadaa Thomas, så skal det bare ind i den rigtige boks.
    navLinksElement.appendChild(liElement);
});

//Nu skal jeg bare gøre så den skifter indholdet, alt efter hvilket af de elementer jeg klikker på!
//stier jeg skal genbruge.
const urlTekst = document.getElementById("tekst")
const urlKnap = document.getElementById("knap")
const urlBillede = document.getElementById("billede")
const urlModul = document.getElementById("modul")

const tekstListe = document.getElementById("tekstliste");
const knapListe = document.getElementById("knapliste");
const billedeListe = document.getElementById("billedeliste");
const modulListe = document.getElementById("modulliste");

//hvis kun forsiden til at starte med
tekstListe.style.display   =  "flex";
knapListe.style.display    =  "none";
billedeListe.style.display =  "none";
modulListe.style.display   =  "none";

urlTekst.classList.add('active');

//Her lytter jeg efter klik på et element
urlTekst.addEventListener("click", function() {

    //give det trykkede på element en class der hedder active, så jeg kan gøre den bold.
    urlTekst.classList.add('active');
    urlKnap.classList.remove('active');
    urlBillede.classList.remove('active');
    urlModul.classList.remove('active');

    //tjekker om den er none, ellers skal den ikke gøre noget.
    if(tekstListe.style.display == "none") {

        tekstListe.style.display   =  "flex";
        knapListe.style.display    =  "none";
        billedeListe.style.display =  "none";
        modulListe.style.display   =  "none";

        //bare så man kan se, hvis man vil kigge at js skifter siderne.
        console.log("Du er nu på Tekster siden");
    } else {
        alert("Hov du er på siden allerede!");
    }
});

// Det samme 3 gange mere, bare til de andre sider.
urlKnap.addEventListener("click", function() {

    urlTekst.classList.remove('active');
    urlKnap.classList.add('active');
    urlBillede.classList.remove('active');
    urlModul.classList.remove('active');


    if(knapListe.style.display == "none") {

        tekstListe.style.display   =  "none";
        knapListe.style.display    =  "flex";
        billedeListe.style.display =  "none";
        modulListe.style.display   =  "none";

        console.log("Du er nu på Knapper siden");
    } else {
        alert("Hov du er på siden allerede!");
    }
});

urlBillede.addEventListener("click", function() {

    urlTekst.classList.remove('active');
    urlKnap.classList.remove('active');
    urlBillede.classList.add('active');
    urlModul.classList.remove('active');

    if(billedeListe.style.display == "none") {

        tekstListe.style.display   =  "none";
        knapListe.style.display    =  "none";
        billedeListe.style.display =  "flex";
        modulListe.style.display   =  "none";

        console.log("Du er nu på Billede siden");
    } else {
        alert("Hov du er på siden allerede!");
    }
});

urlModul.addEventListener("click", function() {

    urlTekst.classList.remove('active');
    urlKnap.classList.remove('active');
    urlBillede.classList.remove('active');
    urlModul.classList.add('active');

    if(modulListe.style.display == "none") {

        tekstListe.style.display   =  "none";
        knapListe.style.display    =  "none";
        billedeListe.style.display =  "none";
        modulListe.style.display   =  "flex";

        console.log("Du er nu på Moduler siden");
    } else {
        alert("Hov du er på siden allerede!");
    }
});