const ApprovedForm = () => `
<main class="main ">
<div class="container-fluid login">
    <div class="row">
        <div class="col-12 col-lg-6 wrapper-login">
            <nav>
                <div class="bg-brand"></div>
                <h5>Palizma</h5>                   
            </nav>
            <div class="wrapper-login-main">
                <div class="top-login">
                    <h4 class="title">Verify Your Email</h4>
                    <p class="sub-title">We've sent a verification code to your email. Please enter the code.</p>
                </div>
                <form action="#" id="form-login" data-form="approved-form">
                    <fieldset>
                        <legend>or use one of these options</legend>
                    </fieldset>
                    <div class="wrapper-form">
                        <div class="wrapper-title-input">
                            <label for="enterCode" class="end-log">verification code</label>
                            <div class="wrapper-resend">
                                <p>Resend</p>
                                <svg class=""   id="resend-code" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 11C21 16.52 16.52 21 11 21C5.48 21 2.11 15.44 2.11 15.44M2.11 15.44H6.63M2.11 15.44V20.44M1 11C1 5.48 5.44 1 11 1C17.67 1 21 6.56 21 6.56M21 6.56V1.56M21 6.56H16.56" stroke="#E86915" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                               
                            </div>
                        </div>
                        <br>
                        <input type="text" id="enterCode" name="enterCode" class="email-phone" placeholder="Enter verification code.">
                    </div>
                    <div class="wrapper-form-two">
                        <button id="btn-login"> <h5>Log in</h5></button>
                        <div class="wrapper-buttom-form">
                            <p id="back"></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-12 col-lg-6 wrapper-carecator">
            <div class="wrapper-top">
                <img src="../src/image/Vector-top-right.png"  class="Vector-top-righ">
                <img src="../src/image/Vector-top-location.png" class="Vector-top-location">
                <div class="wrapper-arrow-Curved">
                    <img src="../src/image/Vector-top-Curved-arrow.png" alt="" class="Vector-top-Curved-arrow">
                   <img src="../src/image/Vector-top-Arrows-curved.png" alt="" class="Vector-top-Arrows-curved">
                </div>
                <img src="../src/image/Vector-top-center.png" class="Vector-top-center">
                <img src="../src/image/Vector-top-left.png" class="Vector-top-left">
                <img src="../src/image/Vector-top-left-bottom.png" class="Vector-top-left-bottom">
                <img src="../src/image/Vector-bottom-center.png" class="Vector-bottom-center">
                <img src="../src/image/Vector-top-location.png" alt="" class="Vector-bottom-center-location">
                <img src="../src/image/Vector-buttom-right-1.png" class="Vector-buttom-right-1">
                <img src="../src/image/Vector-buttom-right-2.png" class="Vector-buttom-right-2">
                <img src="../src/image/Vector-buttom-right-3.png" class="Vector-buttom-right-3">
                <img src="../src/image/Vector-buttom-right-4.png" class="Vector-buttom-right-4">
                <img src="../src/image/Vector-buttom-right-5.png" class="Vector-buttom-right-5">
                <img src="../src/image/Vector-buttom-right-6.png" class="Vector-buttom-right-7">
                <img src="../src/image/Vector-top-location.png" class="Vector-center-right-location-right">
                <img src="../src/image/Vector-top-location.png" class="Vector-center-left-location-right">
                <img src="../src/image/person-turist-Arman.png" class="person-turist-Arman">
            </div>
            <div class="wrapper-center"> 
                <img src="../src/image/Vector-center-left.png" class="Vector-center-left-bottom">
                <img src="../src/image/Vector-center-left-location.png" class="Vector-center-left-location">
                <img src="../src/image/Vector-center-right-location.png" class="Vector-center-right-curved">
            </div>
        </div>
    </div>
</div>`
export default ApprovedForm