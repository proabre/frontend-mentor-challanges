

let menu_btn=document.getElementById('menu');
let close_btn=document.getElementById('close-btn');
let nav=document.getElementById('nav');
let container=document.getElementById('container');



menu_btn.addEventListener('click',function(){

    nav.style.display='block';
 });

close_btn.addEventListener('click',(e)=>{

    nav.style.display='none';

});
