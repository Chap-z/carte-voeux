new WOW().init();



const moon = document.getElementById('moon');
const body = document.getElementById('wrap-body');
const clouds = document.getElementById('cloud');
const winter = document.getElementById('winter');
var clic = 0;


moon.addEventListener('click', nightToDay, false);


function nightToDay() {



    console.log(clic);

    if (clic == 0) {

        moon.removeAttribute("class", "moon");
        moon.setAttribute("class", "sun");

        body.removeAttribute("class", "background-night");
        body.setAttribute("class", "background-sun");

        winter.style.opacity ="0";


        clic ++;
    } else{
        moon.removeAttribute("class", "sun");
        moon.setAttribute("class", "moon");

        body.removeAttribute("class", "background-sun");
        body.setAttribute("class", "background-night");

        winter.style.opacity ="1";

        clic = 0;
    }
}



