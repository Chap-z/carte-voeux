new WOW().init();

const moon = document.getElementById('moon');
const body = document.getElementById('wrap-body');


moon.addEventListener('click', nightToDay, false);


function nightToDay(){
    
    moon.removeAttribute("class", "moon");
    moon.setAttribute("class", "sun");

    body.removeAttribute("class", "background-night");
    body.setAttribute("class", "background-sun");

}