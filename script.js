const right_bg = document.querySelector(".ri-arrow-right-s-line");
const hedar_bg2 = document.querySelector(".hedar-bg2");
const hedar_bg = document.querySelector(".hedar-bg");
const left_bg = document.querySelector(".ri-arrow-left-s-line");

right_bg.addEventListener("click",function() {
    hedar_bg2.style.transform = "translatex(0)";
    hedar_bg.style.transform = "translatex(-100%)";
})
left_bg.addEventListener("click",function(){
    hedar_bg2.style.transform = "translatex(100%)";
    hedar_bg.style.transform = "translatex(0)";
})


const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

const sleed1 = document.querySelector(".sleed1");
const sleed2 = document.querySelector(".sleed2");
const sleed3 = document.querySelector(".sleed3");

two.addEventListener("click",function() {
    sleed2.style.transform = "translatex(0)";
    sleed1.style.transform = "translatex(-100%)";
    sleed3.style.transform = "translatex(130%)";
})
three.addEventListener("click",function() {
    sleed2.style.transform = "translatex(-130%)";
    sleed3.style.transform = "translatex(0)";
    sleed1.style.transform = "translatex(-130%)";
})
one.addEventListener("click",function() {
    sleed1.style.transform = "translatex(0)";
    sleed3.style.transform = "translatex(130%)";
    sleed2.style.transform = "translatex(130%)";
})


const menu = document.querySelector(".ri-menu-2-line");
const close1 = document.querySelector(".ri-close-fill");
const menu_ul = document.querySelector(".media-ul");

menu.addEventListener("click",function() {
    menu_ul.style.transform = "translatex(0)";
})
close1.addEventListener("click",function() {
    menu_ul.style.transform = "translatex(-100%)";
})  