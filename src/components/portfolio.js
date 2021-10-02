import React from 'react';
import whatsapp from '../image/whatsapp.jpg'
import insta from '../image/insta.jpg'
import pt from '../image/pt.png'
function Portfolio(){
    return(
        <section class="portfolio" id="portfolio">

            <h1 class="heading"> <span> my </span> portfolio </h1>

            <div class="box-container">

                <div class="box">
                    <img src={whatsapp} alt=""/>
                    <h3> Whatsapp Bulk Message Send </h3>
                    <div class="icons">
                        <a href="https://github.com/rizwan183/Scraping_Project/blob/main/whatsapp.py" class="fas fa-link"></a>
                        <a href="https://github.com/rizwan183/Scraping_Project/blob/main/whatsapp.py" class="fas fa-share"></a>
                        <a href="#" class="fas fa-search"></a>
                    </div>
                </div>

                <div class="box">
                    <img src={insta} alt=""/>
                    <h3> Instagram Follower Scrapper </h3>
                    <div class="icons">
                        <a  href="https://github.com/rizwan183/Scraping_Project/blob/main/Instagram.py" class="fas fa-link"></a>
                        <a  href="https://github.com/rizwan183/Scraping_Project/blob/main/Instagram.py"  class="fas fa-share"></a>
                        <a href="#" class="fas fa-search"></a>
                    </div>
                </div>

                <div class="box">
                    <img src={pt} alt=""/>
                    <h3> Responsive Portfolio</h3>
                    <div class="icons">
                        <a href="/" class="fas fa-link"></a>
                        <a href="/" class="fas fa-share"></a>
                        <a href="#" class="fas fa-search"></a>
                    </div>
                </div>

            </div>
    </section>
    )
}
export default Portfolio;