var btn= document.getElementById('btnNav');
var content=document.getElementById('menuContent');
btn.addEventListener('click',()=>{
    content.classList.toggle('is-active');
})