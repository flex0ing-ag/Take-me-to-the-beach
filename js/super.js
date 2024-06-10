
const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menus.classList.add("display");
});
closeBtn.addEventListener("click", () => {
    menus.classList.remove("display");
});
//scroll sticky navbar 
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }

});

const countersEl = document.querySelectorAll(".numbers");
countersEl.forEach((counters) => {
    counters.textContent = 0;

    increamentCounter();
    function increamentCounter() {
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");
        const increament = dataCeil / 25;

        currentNum = Math.ceil(currentNum + increament);

        if (currentNum < dataCeil) {
            counters.textContent = currentNum;
            setTimeout(increamentCounter, 70)
        }
        else {
            counters.textContent = dataCeil;
        }
    }
});

const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function () {
        stars.forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        let rating = this.getAttribute('data-value');
        console.log(`User rated: ${rating} stars`);
        // Optionally, send the rating to the server
    });
});

// JavaScript for Yes/No buttons
document.getElementById('yesButton').addEventListener('click', function () {
    document.getElementById('thankYouMessage').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function () {
    document.getElementById('thankYouMessage').style.display = 'block';
});


var icon = document.getElementById("icon");
icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src= "./images/sun.png";
    }
    else{
        icon.src= "./images/moon_dark_mode_night-2-512.jpgoon.png";
    }
}




