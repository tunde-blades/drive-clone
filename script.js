let opennav = document.querySelector('.opennav');
let closenav = document.querySelector('.closenav');

let navcont = document.querySelector('.navcont');

opennav.addEventListener('click',()=>{
    navcont.style.display = 'flex';
    opennav.style.display = 'none';
    closenav.style.display = 'flex';
    console.log('gdtxyfy')
});

closenav.addEventListener('click',()=>{
    navcont.style.display = 'none';
    closenav.style.display = 'none';
    opennav.style.display = 'flex';
    console.log('gdtxyfy')
});


let q1 = document.querySelector('.q1');
let a1 = document.querySelector('.a1');

let q2 = document.querySelector('.q2');
let a2 = document.querySelector('.a2');

let q3 = document.querySelector('.q3');
let a3 = document.querySelector('.a3');

let q4 = document.querySelector('.q4');
let a4 = document.querySelector('.a4');

let q5 = document.querySelector('.q5');
let a5 = document.querySelector('.a5');

q1.addEventListener('click', ()=>{

    if (a1.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        
    } else {
        a1.style.display = 'block';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
    }



})

q2.addEventListener('click', ()=>{
    if (a2.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        
    } else {
        a2.style.display = 'block';
        a1.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
    }

})

q3.addEventListener('click', ()=>{

    if (a3.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        
    } else {
        a3.style.display = 'block';
        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';

    }

})

q4.addEventListener('click', ()=>{
    if (a4.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        
    } else {
        a4.style.display = 'block';
        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a3.style.display = 'none';
    }

})

q5.addEventListener('click', ()=>{
    if (a5.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        
    } else {
        a5.style.display = 'block';
        a2.style.display = 'none';
        a1.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
    }

})
    
