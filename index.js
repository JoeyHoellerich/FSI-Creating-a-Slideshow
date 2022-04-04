const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

//Tun on buttons
function turnOnBtn(){
    document.querySelectorAll(".side-bar").forEach(item => item.style.backgroundColor = "rgba(0, 0, 0, 0.65)");
    document.querySelectorAll(".side-bar").forEach(item => item.style.color = "white");
}

function turnOffBtn(){
    document.querySelectorAll(".side-bar").forEach(item => item.style.backgroundColor = "rgba(0, 0, 0, 0)");
    document.querySelectorAll(".side-bar").forEach(item => item.style.color = "rgba(0, 0, 0, 0)");
}
document.querySelector("body").addEventListener("mouseover", turnOnBtn);
document.querySelector("body").addEventListener("mouseleave", turnOffBtn);


let currentImgNum = 0;

// main image
let currentImg = document.querySelector("img");

//previous button
let previousBtn = document.querySelector(".previous");

// next button
let nextBtn = document.querySelector(".next");

// start with image 0
document.querySelector("img").src = images[0];

function nextImg(){
    if (currentImgNum == (images.length - 1)){
        currentImgNum = 0;
    }
    else{
        currentImgNum++
    }
    currentImg.src = images[currentImgNum];
}

function previousImg(){
    if (currentImgNum == 0){
        currentImgNum = (images.length - 1);
    }
    else{
        currentImgNum--
    }
    currentImg.src = images[currentImgNum];
}

nextBtn.addEventListener("click", nextImg);
previousBtn.addEventListener("click", previousImg);
