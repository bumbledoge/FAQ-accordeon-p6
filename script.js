let question1 = document.getElementById("aq1");
let answer1 = document.getElementsByClassName("a1")[0];
let active1 = 0;

let question2 = document.getElementById("aq2");
let answer2 = document.getElementsByClassName("a2")[0];
let active2 = 0;

let question3 = document.getElementById("aq3");
let answer3 = document.getElementsByClassName("a3")[0];
let active3 = 0;

let question4 = document.getElementById("aq4");
let answer4 = document.getElementsByClassName("a4")[0];
let active4 = 0;

let question5 = document.getElementById("aq5");
let answer5 = document.getElementsByClassName("a5")[0];
let active5 = 0;


let lastQ = question1;
let lastA = answer1;
let lastPrg = document.getElementsByClassName('qst1')[0];
let lastClass = '1';


question1.addEventListener('click', ()=> {
    resetLast();
    updateLast(1);

    if(active1 === 1) {
        resetLast();
        active1 = 0;
    }
    else{
        updateCurrent(1);
        active1 = 1;
    }
})
question2.addEventListener('click', ()=> {
    resetLast();
    updateLast(2);
    if(active2 === 1) {
        resetLast();
        active2 = 0;
    }
    else{
        updateCurrent(2);
        active2 = 1;
    }
})
question3.addEventListener('click', ()=> {
    resetLast();
    updateLast(3);

    if(active3 === 1) {
        resetLast();
        active3 = 0;
    }
    else{
        updateCurrent(3);
        active3 = 1;
    }
})
question4.addEventListener('click', ()=> {
    resetLast();
    updateLast(4);

    if(active4 === 1) {
        resetLast();
        active4 = 0;
    }
    else{
        updateCurrent(4);
        active4 = 1;
    }
})
question5.addEventListener('click', ()=> {

    resetLast();
    updateLast(5);

    if(active5 === 1) {
        resetLast();
        active5 = 0;
    }
    else{
        updateCurrent(5);
        active5 = 1;
    }
})



function resetLast (nr) {
    lastA.style.opacity = 0;
    lastQ.style.height = 13 + 'px';
    document.getElementsByClassName('qst' + lastClass)[0].style.fontWeight = 400;
}
function updateLast(nr) {
    switch (nr) {
        case 1:
            lastQ = question1;
            lastA = answer1;
            lastClass = 1;
            break;
        case 2:
            lastQ = question2;
            lastA = answer2;
            lastClass = 2;
            break;
        case 3:
            lastQ = question3;
            lastA = answer3;
            lastClass = 3;
            break;
        case 4:
            lastQ = question4;
            lastA = answer4;            
            lastClass = 4;
            break;
        case 5:
            lastQ = question5;
            lastA = answer5;
            lastClass = 5;
            break;
    }
    lastPrg = document.getElementsByClassName('qst' + nr)[0].style.fontWeight;
}
function updateCurrent(nr) {
    switch (nr) {
        case 1:
            answer1.style.opacity = 1;
            question1.style.height = 50 + 'px';
            break;
        case 2:
            answer2.style.opacity = 1;
            question2.style.height = 50 + 'px';
            break;
        case 3:
            answer3.style.opacity = 1;
            question3.style.height = 50 + 'px';
            break;
        case 4:
            answer4.style.opacity = 1;
            question4.style.height = 50 + 'px';
            break;
        case 5:
            answer5.style.opacity = 1;
            question5.style.height = 50 + 'px';
            break;
    }
    document.getElementsByClassName('qst' + nr)[0].style.fontWeight = 700;
}