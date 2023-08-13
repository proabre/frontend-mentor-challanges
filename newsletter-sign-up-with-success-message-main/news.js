let form=document.querySelector('form');

let page1=document.querySelector('.container');
let page2=document.querySelector('.success');

let dismis=document.querySelector('.dismis-btn');



form.addEventListener('submit',(e)=>{

    e.preventDefault();
    page1.classList.add('hide');
    page2.classList.remove('hide');
    

    


});

dismis.addEventListener('click',(e)=>{
    page2.classList.add('hide');


})