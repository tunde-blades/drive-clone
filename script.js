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
let i1 = document.querySelector('.i1');

let q2 = document.querySelector('.q2');
let a2 = document.querySelector('.a2');
let i2 = document.querySelector('.i2');

let q3 = document.querySelector('.q3');
let a3 = document.querySelector('.a3');
let i3 = document.querySelector('.i3');

let q4 = document.querySelector('.q4');
let a4 = document.querySelector('.a4');
let i4 = document.querySelector('.i4');

let q5 = document.querySelector('.q5');
let a5 = document.querySelector('.a5');
let i5 = document.querySelector('.i5');




q1.addEventListener('click', ()=>{

    if (a1.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        i1.style.rotate = '0deg'
        i2.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i5.style.rotate = '0deg'
        
    } else {
        a1.style.display = 'block';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        i1.style.rotate = '180deg'
        i2.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i5.style.rotate = '0deg'
    }



})

q2.addEventListener('click', ()=>{
    if (a2.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        i1.style.rotate = '0deg'
        i2.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i5.style.rotate = '0deg'
        
    } else {
        a2.style.display = 'block';
        a1.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        i2.style.rotate = '180deg'
        i1.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i5.style.rotate = '0deg'
    }

})

q3.addEventListener('click', ()=>{

    if (a3.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        i1.style.rotate = '0deg'
        i2.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i5.style.rotate = '0deg'
        
    } else {
        a3.style.display = 'block';
        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        i3.style.rotate = '180deg'
        i2.style.rotate = '0deg'
        i1.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i5.style.rotate = '0deg'

    }

})

q4.addEventListener('click', ()=>{
    if (a4.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        i1.style.rotate = '0deg'
        i2.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i5.style.rotate = '0deg'
        
    } else {
        a4.style.display = 'block';
        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a3.style.display = 'none';
        i4.style.rotate = '180deg'
        i2.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i1.style.rotate = '0deg'
        i5.style.rotate = '0deg'
    }

})

q5.addEventListener('click', ()=>{
    if (a5.style.display == 'block') {

        a1.style.display = 'none';
        a2.style.display = 'none';
        a5.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        i1.style.rotate = '0deg'
        i2.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i5.style.rotate = '0deg'
        
    } else {
        a5.style.display = 'block';
        a2.style.display = 'none';
        a1.style.display = 'none';
        a4.style.display = 'none';
        a3.style.display = 'none';
        i5.style.rotate = '180deg'
        i2.style.rotate = '0deg'
        i3.style.rotate = '0deg'
        i4.style.rotate = '0deg'
        i1.style.rotate = '0deg'
    }

})
    
