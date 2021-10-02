import React from 'react'
import Riz from '../image/riz1.JPG'
function About(){
    return(
        <section class="about" id="about">

                <h1 class="heading"> about <span> me </span> </h1>
                
                <div class="row-1">
                
                    <div class="image">
                        <img src={Riz} alt=""/>
                    </div>
                
                    <div class="content">
                        <h3> my name is Rizwan Ansari </h3><br/>
                        <h2>i am a Full Stack Developer</h2>
                    
                        <div class="box-container">
                            <div class="box">
                                <p> <span> age : </span>  25</p>
                                <p> <span> gender : </span>  male </p>
                                <p> <span> language : </span> hindi, english </p>
                                <p> <span> work : </span> Python Developer developer </p>
                            </div>
                            <div class="box">
                                <p> <span> freelance : </span> available </p>
                                <p> <span> phone : </span> +91392881996 </p>
                                <p> <span> email : </span> r.ansari12996@gmail.com</p>
                                <p> <span> country : </span> india </p>
                            </div>
                        </div>
                        <a href="#" class="btn">download CV</a>
                        <a href="/contact" class="btn">hire me</a>
                    </div>
                
                </div>
                
                <h1 class="heading"> <span> my </span> skills </h1>
                
                <div class="row-2">
                
                    <div class="skills">
                        <div class="progress">
                            <h3> web development <span> 80% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> Python <span> 90% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> Flask <span> 80% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> Django <span> 80% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> HTML  <span> 85% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> CSS<span> 85% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        
                        <div class="progress">
                            <h3> Java Script  <span> 80% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> React JS  <span> 80% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> AWS  <span> 75% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> GraphQL <span> 85% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> RestAPI <span> 85% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> Kafka <span> 70% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                        <div class="progress">
                            <h3> GIT <span> 80% </span> </h3>
                            <div class="bar"> <span></span> </div>
                        </div>
                    </div>
                
                
                </div>
        
        </section>
    )
}
export default About;