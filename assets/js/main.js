const moon = document.getElementById('moon');

moon.addEventListener('click', nightToDay, false);


function nightToDay(){
    moon.removeAttribute("class", "moon");
    moon.setAttribute("class", "sun");
    

}