let menuBtn = document.querySelector('#menu-btn'); 
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');   
};

const listItem = [
    {
        title: "System Integration",
        describe:"Process of linking different computing system, software, and hardware into a unified and coordinated system",
        image: "./image/integ.png",
    }
]