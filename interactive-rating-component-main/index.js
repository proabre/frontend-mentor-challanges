let submi=document.getElementById('submit-btn');
let thankyou=document.getElementById('thank');
let home=document.querySelector('.home');

submi.addEventListener('click',(e)=>{

    thankyou.style.display="block";
    home.style.display='none';
    
});
