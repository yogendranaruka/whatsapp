
let searchicon = document.querySelector(".fa-search")
let backicon = document.querySelector(".fa-arrow-left")

searchicon.addEventListener("click", () => {
    backicon.style.display = "block";
    searchicon.style.display = "none";
    backicon.style.color = "#04AA6D";
    backicon.style.fontSize = "120%";
})

backicon.addEventListener("click", () => {
    searchicon.style.display = "block";
    backicon.style.display = "none";
})

let icon1 = document.querySelector("#ee51d023-7db6-4950-baf7-c34874b80976")
let status1 = document.querySelector(".status")
let body = document.body;
icon1.addEventListener("click", () => {
        status1.style.display = "block"
})

status1.addEventListener("click", () => {
    status1.style.display = "none"
})

let show = document.querySelector(".show")
let icon3 = document.querySelector("#yes")

icon3.addEventListener("click", () => {
    if (show.style.display === "none") {
        show.style.display = "block";
    }else{
        show.style.display = "none";
    }
})
show.addEventListener("mouseleave", () => {
        show.style.display = "none";
})


let right = document.querySelector(".right")
let currphoto = document.querySelector(".currphoto")

currphoto.addEventListener("click",()=>{
    right.style.display = "block"
})

right.addEventListener("click",()=>{
    right.style.display = "none"
})


let box1 = document.querySelector("#one")
let box2 = document.querySelector("#two")
let box3 = document.querySelector("#three")
let box4 = document.querySelector("#four")
let box5 = document.querySelector("#five")
let box6 = document.querySelector("#six")
let box7 = document.querySelector("#seven")

let chat = document.querySelector(".chat")
let chat2 = document.querySelector(".chat2")
let chat3 = document.querySelector(".chat3")
let chat4 = document.querySelector(".chat4")
let chat5 = document.querySelector(".chat5")
let chat6 = document.querySelector(".chat6")
let chat7 = document.querySelector(".chat7")

box1.addEventListener("click",()=>{
    chat.style.display = "block"
})
box2.addEventListener("click",()=>{
    chat2.style.display = "block"
})
box3.addEventListener("click",()=>{
    chat3.style.display = "block"
})
box4.addEventListener("click",()=>{
    chat4.style.display = "block"
})
box5.addEventListener("click",()=>{
    chat5.style.display = "block"
})
box6.addEventListener("click",()=>{
    chat6.style.display = "block"
})
box7.addEventListener("click",()=>{
    chat7.style.display = "block"
})


let rightdots = document.querySelector(".rightdots")
let show2 = document.querySelector(".show2")
rightdots.addEventListener("click",()=>{
    if(show2.style.display == "none"){
        show2.style.display = "block";
    }else{
        show2.style.display = "none";
    }
})

show2.addEventListener("mouseleave",()=>{
    show2.style.display = "none"
})

let boxes = document.querySelectorAll(".boxes")
let footer = document.querySelector(".footer")

for(let box of boxes){
    box.addEventListener("click",()=>{
        footer.style.display = "block"
    })
}

