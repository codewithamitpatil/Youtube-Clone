
const menu = document.querySelector("#menubtn");
const sidebar=document.querySelector(".sidebar_body");

menu.addEventListener('click',function(){

    sidebar.classList.toggle("show_sidebar");
    
});