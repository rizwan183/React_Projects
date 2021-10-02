import React from 'react';
function Contact(){
    return(
        <section class="contact" id="contact">

                <h1 class="heading"> contact <span> me </span> </h1>

                <div class="icons-container">

                    <div class="icons">
                        <i class="fas fa-envelope"></i>
                        <h3>my email</h3>
                        <p>rizwan118143@gmail.com</p>
                        <p>r.ansari12996@gmail.com</p>
                    </div>

                    <div class="icons">
                        <i class="fas fa-phone"></i>
                        <h3>my number</h3>
                        <p>+91-8318829181</p>
                        <p>+91-7392881996</p>
                    </div>

                    <div class="icons">
                        <i class="fas fa-map-marker-alt"></i>
                        <h3>my address</h3>
                        <p>Vill Chakdeeha Post Bharatganj Dist Prayagraj UP India 212104</p>
                    </div>

                </div>

                <div class="row">

                    <form action="">

                        <input type="text" placeholder="name" class="box" required/>
                        <input type="email" placeholder="email" class="box" required/>
                        <input type="number" placeholder="number" class="box" required/>

                        <textarea name="" placeholder="message" id="" cols="30" rows="10 required"></textarea>

                        <input type="submit" class="btn" value="send message" required/>

                    </form>

                    <iframe class="map" src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=chak%20musahi+(rizwan)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowfullscreen="" loading="lazy"></iframe>

                </div>


            </section>
    )
}
export default Contact;