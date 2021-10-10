import React from 'react'
import '../css/form1.css'
function Form()
{
    return(
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 b-height">
                    <div class="row b-wrapper"> 
                        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 b-min-height">
                            <div class="b-logo swift_left">
                                <a href = "https://www.youtube.com/channel/UCg-bMxpjvoQVxVs69iyqGuQ" target = "_blank"><img src="images/Logo.png" alt="Programming Guide Logo" title="Programming Guide Logo" class="img-fluid"/></a>
                            </div>
                            <div class="b-title text-center">
                                <h1 class="user_title">Welcome Friend</h1>
                                <p class="user_subTitle">To keep Connected with us please <br/> login with your personal info.</p>
                                <button type="button" class="swift sign_in">Sign In</button>
                            </div>
                        </div>
                        
                        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                            <div class="b-logo swift_right">
                                <a href = "https://www.youtube.com/channel/UCg-bMxpjvoQVxVs69iyqGuQ" target = "_blank"><img src="images/Logo.png" alt="Programming Guide Logo" title="Programming Guide Logo" class="img-fluid"/></a>
                            </div>
                            <div class="b-form text-center">
                                <div class="b-form-title">
                                    <h1 class="form_title">Create Account</h1>
                                    <p>
                                        <span><a href="https://www.facebook.com/help.programmingguide" target = "_blank"><i class="fab fa-facebook-f"></i></a></span>
                                        <span><a href="https://twitter.com/HelpProgrammin0" target = "_blank"><i class="fab fa-twitter"></i></a></span>
                                        <span><a href="https://www.instagram.com/help.programmingguide" target = "_blank"><i class="fab fa-instagram"></i></a></span>
                                    </p>
                                    <p class="b-subtext">or use your email for registration</p>
                                </div>
                                <form method="post" action="">
                                    <div class="form-group username">
                                        <input class="form-control" type="text" name="" placeholder="Name"/>
                                        <i class="fas fa-user b-font"></i>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="email" name="" placeholder="Email"/>
                                        <i class="fas fa-envelope b-font"></i>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="password" name="" placeholder="Password"/>
                                        <i class="fas fa-unlock-alt b-font"></i>
                                    </div>
                                    <div class="form-group">
                                        <span class="b-forgot">Forgot your password?</span>
                                    </div>
                                    <button type="button" class="sign_up">Sign Up</button>
                                </form>
                            </div>
                        </div> 
        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;