import React from 'react'
import '../css/form2.css'
function Form2(){
    return(
       <div className="body">
        <div id="login-box">
            <div class="left">
                <h1>Sign up</h1>
                
                <input type="text" name="username" placeholder="Username" required/>
                <input type="text" name="email" placeholder="E-mail" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <input type="password" name="password2" placeholder="Retype password" required/>
                
                <input type="submit" name="signup_submit" value="Sign Up" />
            </div>
            <div class="or">OR</div>
            <div class="right">
                {/* <span class="loginwith">Sign in with<br />social network</span>   */}
                <button class="social-signin facebook">Log in with facebook</button>
                <button class="social-signin twitter">Log in with Twitter</button>
                <button class="social-signin google">Log in with Google+</button>
            </div>
            
        </div>
        </div> 
    )
}
export default Form2;