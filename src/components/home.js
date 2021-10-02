import React from 'react'
import Riz from '../image/riz.JPG'
function Home(){
    return(
        <section class="home" id="home" >
            <div class="image">
                <img src={Riz} alt=""/>
            </div>
            <div class="content">
                <span class="hi"> hi there... </span>
                <h3> I am <span> Rizwan Ansari </span> </h3>
                <p class="info"> I am a Full Stack Developer </p>
                <p class="text"> Experienced Python Developer with a demonstrated history of working in the internet industry. Skilled in Python,Django,React Js,Flask,Kafka,GraphQl,RestAPI, Matplotlib, Amazon Dynamodb, and Amazon Web Services (AWS). Strong engineering professional Post Graduated from National Institute of Technology Raipur. </p>
                <a href="/about" class="btn">About Me</a>
            </div>

            

        </section>
    )
};
export default Home;
