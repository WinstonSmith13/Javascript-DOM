window.onload = () => {


    /* On simplifie le nom de l'objet document */
    let d = document;


    let bgCookie = Cookies.get("bgCookie");
    let encartsBgCookie = Cookies.get("encartsBgCookie");
    let titlesCookie = Cookies.get("titlesCookie");
    let textsCookie = Cookies.get("textsCookie");

    /* Cookie body */
    d.body.style.backgroundColor = bgCookie;
    d.querySelector('#bg-color').value = bgCookie;

    /* Cookie Encarts */
    d.querySelectorAll(".text-bg-dark").forEach(encart => {
        encart.style.setProperty('background-color', encartsBgCookie, 'important');
    });

    d.querySelector('#encarts-color').value = encartsBgCookie;

    /* Cookie Titles */
    d.querySelectorAll("h3,h4,h5,h6").forEach(element => {
        element.style.color = titlesCookie;
    });

    d.querySelector('#titles-color').value = titlesCookie;

    /* Cookie Textes */
    d.querySelectorAll("p,li,small,span").forEach(element => {
        element.style.color = textsCookie;
    });

    d.querySelector('#texts-color').value = textsCookie;


    /* date du copyleft */
    const da = new Date();
    let year = da.getFullYear();
    d.querySelector('#copyleft').innerHTML += year;

    /* Gestion du retour en haut de page */
    d.querySelector('#to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* Change la couleur de fond de page */
    let changeBgColor = (color) => {
        d.body.style.backgroundColor = color;
    };

    /* Change la couleur des encarts sélectionnés */
    let changeEncartsColor = (selector, color) => {
        d.querySelectorAll(selector).forEach(encart => {
            encart.style.setProperty('background-color', color, 'important');
        });
    };

    /* Change la couleur d'éléments (titres ou textes) du dom */
    let changeElementsColor = (selector, color) => {
        d.querySelectorAll(selector).forEach(element => {
            element.style.color = color;
        });
    };

    /* On déclare une variable pour stocker la couleur de fond */
    let bgColor = "";

    /* On déclare une variable pour stocker la couleur de fond des encarts */
    let encartsBgColor = '';
    /* On déclare une variable pour stocker le selecteur des encarts */
    let encartsSelector = '.text-bg-dark';

    /* On déclare une variable pour stocker la couleur des titres */
    let titlesColor = '';
    /* On déclare une variable pour stocker le selecteur des titres */
    let titlesSelector = 'h3,h4,h5,h6';

    /* On déclare une variable pour stocker la couleur des textes */
    let textsColor = '';
    /* On déclare une variable pour stocker le selecteur des textes */
    let textsSelector = 'p,li,small,span';

    /* Gestionnaire d'événement pour le changement de la couleur de fond de page */
    d.querySelector('#bg-color').addEventListener('input', (e) => {

        bgColor = e.target.value;
        changeBgColor(bgColor);

        Cookies.set("bgCookie", bgColor);

    });

    /* Gestionnaire d'événement pour le changement de la couleur des encarts */
    d.querySelector('#encarts-color').addEventListener('input', (e) => {
        encartsBgColor = e.target.value;
        changeEncartsColor(encartsSelector, encartsBgColor);

        Cookies.set("encartsBgCookie", encartsBgColor);

    });

    /* Gestionnaire d'événement pour le changement de la couleur des titres */
    d.querySelector('#titles-color').addEventListener('input', (e) => {
        titlesColor = e.target.value;
        changeElementsColor(titlesSelector, titlesColor);

        Cookies.set("titlesCookie", titlesColor);
    });

    /* Gestionnaire d'événement pour le changement de la couleur des textes */
    d.querySelector('#texts-color').addEventListener('input', (e) => {
        textsColor = e.target.value;
        changeElementsColor(textsSelector, textsColor);

        Cookies.set("textsCookie", textsColor);

    });

    /* Initialise toutes les couleurs */
    d.querySelector('#resetColors').addEventListener('dblclick', () => {

        bgColor = '#ffffff';
        changeBgColor(bgColor);
        d.querySelector('#bg-color').value = bgColor;

        encartsBgColor = '#212529';
        changeEncartsColor(encartsSelector, encartsBgColor);
        d.querySelector('#encarts-color').value = encartsBgColor;

        titlesColor = '#212529';
        changeElementsColor(titlesSelector, titlesColor);
        d.querySelector('#titles-color').value = titlesColor;

        textsColor = '#212529';
        changeElementsColor(textsSelector, textsColor);
        d.querySelector('#texts-color').value = textsColor;

    });

}