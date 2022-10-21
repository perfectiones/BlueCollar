// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const offer__block = document.querySelectorAll(".offer__button");
const offer__info = document.querySelectorAll(".section__info");

const headerFixed = document.querySelector(".header-nav__fixed");


window.addEventListener("scroll", function () {
    const pixel = window.pageYOffset;
    if (pixel > 122) {
        headerFixed.classList.remove("hide");
    }
    else{
        headerFixed.classList.add("hide"); 
    }
})

for (let i = 0; i< offer__block.length; i++) {

    offer__block[i].addEventListener("click",function () {
        offer__block.forEach(el => {
            el.classList.remove("active")
        });
        offer__info.forEach(el => {
            el.classList.add("hide")
        });
        offer__block[i].classList.add('active');
        offer__info[i].classList.remove("hide");
    }) 

}
 


