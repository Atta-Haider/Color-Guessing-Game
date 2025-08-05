var lol1 = false;
var t;
var right_color;
let hard = document.querySelector(".hard");
let easy = document.querySelector(".easy");
let boxes = document.querySelectorAll(".square");
let color_showing = document.querySelector(".color_showing");
let new_color = document.querySelector(".newcolor");
let result = document.querySelector(".result");
let blue = document.querySelector(".blue");
new_color.addEventListener("click", ()=>{
    hard.classList.toggle("hideit");
    easy.classList.toggle("hideit");
    result.classList.add("hideit");
    blue.style.backgroundColor =  '#2c8e99';
    
    right_color = color_showing.innerHTML = makecolor();
    
    color_showing.innerHTML = makecolor();
    if(lol1 == false){
        result.classList.add("hideit");
        
        for(let i= 0 ; i<3 ; i++){
            for(let i= 0 ; i<3 ; i++){
                setTimeout(() => {
                    boxes[i].classList.remove("hidden");
        
                }, 1000);
            }
            color_showing.innerHTML = makecolor();
            let red = Math.floor(1 * Math.random() * 255);
            let green = Math.floor(Math.floor(1 * Math.random() * 255));
            let blue = Math.floor(1 * Math.random() * 255);
            boxes[i].style.backgroundColor = `rgb(${red} , ${green} , ${blue})`
        }
        let random = Math.floor(Math.floor(1 * Math.random() * 3));
        boxes[random].style.backgroundColor = right_color;
    }
    if(lol1 == true){
        
        result.classList.add("hideit");
        for(let i= 0 ; i<6 ; i++){
            setTimeout(() => {
                boxes[i].classList.remove("hidden");
            }, 1000);
        }
        for(let i= 0 ; i<6 ; i++){
            color_showing.innerHTML = makecolor();
            let red = Math.floor(1 * Math.random() * 255);
            let green = Math.floor(Math.floor(1 * Math.random() * 255));
            let blue = Math.floor(1 * Math.random() * 255);
            boxes[i].style.backgroundColor = `rgb(${red} , ${green} , ${blue})`
        }
        let random = Math.floor(Math.floor(1 * Math.random() * 5));
        boxes[random].style.backgroundColor = right_color;

    }
})
hard.addEventListener("click" , ()=>{
    new_color.classList.remove("hideit");
    hard.classList.add("selected");
    easy.classList.remove("selected");
    lol1 = true;
})
easy.addEventListener("click" , ()=>{
    new_color.classList.remove("hideit");
    hard.classList.remove("selected");
    easy.classList.add("selected");
    lol1 = false;
    for(let i= 3 ; i<6 ; i++){
        setTimeout(() => {
            boxes[i].classList.add("hidden");
        }, 1000);
    }
})
function hidebox(n){
    console.log(n , "is clicked");
    boxes[n].classList.add("hideit");
    t = boxes[n].style.backgroundColor;
    if(t == right_color){
        hard.classList.toggle("hideit");
        easy.classList.toggle("hideit");
        result.classList.remove("hideit");
        result.innerHTML = `You Guessed Correct !`;
        blue.style.backgroundColor = t;
        for(let i= 0 ; i<6 ; i++){
            boxes[i].style.backgroundColor = right_color;
            boxes[i].classList.remove("hideit")
        }
    }
}
function makecolor(){
    let red = Math.floor(1 * Math.random() * 255);
    let green = Math.floor(Math.floor(1 * Math.random() * 255));
    let blue = Math.floor(1 * Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}