import React from 'react'
// import '../js/index.js'
import RouterFun from './router'
window.onload = function(){ 
        let menu = document.querySelector('#menu-bars');
        let header = document.querySelector('header');

        menu.onclick = () =>{
            menu.classList.toggle('fa-times');
            header.classList.toggle('active');
        }

        window.onscroll = () =>{
            menu.classList.remove('fa-times');
            header.classList.remove('active');
        }

    

       
};


function Header(){
    
    return(
        <div>
            <div id="menu-bars" class="fas fa-bars"></div>
            <header>
                <a href="/home" class="logo"> <span>Rizwan</span> Ansari </a>
                    <nav class="navbar">
                        <a href="/home">home</a>
                        <a href="/about">about</a>
                        <a href="/services">service</a>
                        <a href="/experience">experience</a>
                        <a href="/portfolio">portfolio</a>
                        <a href="/contact">contact</a>
                    </nav>
                <div class="follow">
                    <a href="https://www.facebook.com/rizwan.ansari.1422409/" class="fab fa-facebook-f"></a>
                    <a href="https://instagram.com/rizwan.ansari.183" class="fab fa-instagram"></a>
                    <a href="https://www.linkedin.com/in/mohammad-rizwan-ansari-6a4a04137/" class="fab fa-linkedin"></a>
                </div>
            </header>
            <RouterFun/>
            <footer class="footer"> created by <span> Rizwan Ansari </span> | all rights reserved! </footer>
        </div>
    );
    
}
export default Header;