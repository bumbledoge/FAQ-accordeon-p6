let question1 = document.getElementById("aq1");
let answer1 = document.getElementsByClassName("a1")[0];

let lastQ = question1;
let lastA = answer1;
let lastPrg = document.getElementsByClassName('qst1')[0];
let lastClass = '1';

question1.addEventListener('click', ()=> {
    
    resetLast();
    updateLast(1);
    

    if(answer1.style.opacity == 0) {
        answer1.style.opacity = 1;
        question1.style.height = 50 + 'px';
        document.getElementsByClassName('qst1')[0].style.fontWeight = 700;
    }
})



let question2 = document.getElementById("aq2");
let answer2 = document.getElementsByClassName("a2")[0];

question2.addEventListener('click', ()=> {
    resetLast();
    updateLast(2);
    
    
    if(answer2.style.opacity == 0) {
        answer2.style.opacity = 1;
        question2.style.height = 50 + 'px';
        document.getElementsByClassName('qst2')[0].style.fontWeight = 700;
    }
})
let question3 = document.getElementById("aq3");
let answer3 = document.getElementsByClassName("a3")[0];

question3.addEventListener('click', ()=> {
    resetLast();
    updateLast(3);

    
    if(answer3.style.opacity == 0) {
        answer3.style.opacity = 1;
        question3.style.height = 50 + 'px';
        document.getElementsByClassName('qst3')[0].style.fontWeight = 700;
    }
})
let question4 = document.getElementById("aq4");
let answer4 = document.getElementsByClassName("a4")[0];

question4.addEventListener('click', ()=> {
    resetLast();
    updateLast(4);

    
    if(answer4.style.opacity == 0) {
        answer4.style.opacity = 1;
        question4.style.height = 50 + 'px';
        document.getElementsByClassName('qst4')[0].style.fontWeight = 700;
    }
})
let question5 = document.getElementById("aq5");
let answer5 = document.getElementsByClassName("a5")[0];

question5.addEventListener('click', ()=> {
    resetLast();
    updateLast(5);
    
    if(answer5.style.opacity == 0) {
        answer5.style.opacity = 1;
        question5.style.height = 50 + 'px';
        document.getElementsByClassName('qst5')[0].style.fontWeight = 700;
    }
})



function resetLast () {
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