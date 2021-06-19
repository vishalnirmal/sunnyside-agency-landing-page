const menu = document.querySelector(".menu");
const menu_button = document.querySelector(".menu-button");

menu_button.addEventListener('click', ()=>{
    if (menu.classList.contains("show")){
        menu.classList.remove("show");
    }
    else{
        menu.classList.add("show");
    }
});