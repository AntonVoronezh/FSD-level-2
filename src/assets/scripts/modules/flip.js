export default function flipCard() {

    const button = document.querySelectorAll(".portfolio__block-more");
    const flipper = document.querySelectorAll(".flipper");
    const mainPage = document.querySelectorAll(".portfolio__block-index");

    button.forEach((elem,i) => {

        elem.addEventListener('click', function() {

            flipper[i].classList.toggle('flip-active');
    
        });

    });

    mainPage.forEach((elem,i) => {

        elem.addEventListener('click', function() {

            flipper[i].classList.toggle('flip-active');
    
        });

    });
}