import * as index from "./index.js"

// variabels page sign up...
const formLogin = document.querySelector('#form-signUp')
const fullName = document.querySelector('#fullName')
const emailPhone = document.querySelector('#emailPhone')
const btnRegister = document.querySelector('#btn-register')
const formValidation = Reflect.construct(index.FormEvaluation, [])
let valid = {
    _emailOrPhone: false,
    _fullName: false,
}

emailPhone.addEventListener('input', (e) => {
    formValidation.emailOPhone(e.target.value, e.target.classList[0], valid)
    let resultCheckValid = formValidation.checkValidData(valid)
    if (resultCheckValid !== false) {
        btnRegister.classList.add('active')
    } else {
        btnRegister.classList.remove('active')
    }
})
fullName.addEventListener('input', (e) => {
    formValidation.fullName(e.target.value, e.target.classList[0], valid)
    let resultCheckValid = formValidation.checkValidData(valid)
    if (resultCheckValid !== false) 
        btnRegister.classList.add('active')
     else 
        btnRegister.classList.remove('active')
    
})
//formLogin.addEventListener("submit", (e) => {
//    e.preventDefault()
//    let valid = {
//        _emailOrPhone: false,
//        _fullName: false,
//    }
//    formValidation.emailOPhone(emailPhone.value, emailPhone.classList[0], valid)
//    formValidation.fullName(fullName.value, fullName.classList[0], valid)
//    let resultCheckValid = formValidation.checkValidData(valid)
    //if (resultCheckValid !== false) {
    //    formValidation.redirectToApprovedForm(() => {
    //        const formLogin = document.querySelector('#form-login')
    //        const resendCode = document.querySelector('#resend-code')
    //        const enterCode = document.querySelector('#enterCode')
    //        const btnLogin = document.querySelector('#btn-login')
    //        const back = document.querySelector('#back')
    //        back.innerHTML = `Did you enter the email incorrectly? <a id="Back-link">Back  Register</a>`
    //        const BackLink = document.querySelector('#Back-link')
    //        let valid = {
    //            _code: false,
    //        }
    //        resendCode.addEventListener('click', (e) => {
    //            e.target.classList.add('active')
    //            setTimeout(() => {
    //                e.target.classList.remove('active')
    //            }, 2000)
    //        })
    //        BackLink.addEventListener('click',(e)=>{
    //            e.preventDefault()
    //            window.location.href = "../public/sign-up.html"
    //        })
    //        enterCode.addEventListener('input', (e) => {
    //            formValidation.emailCode(e.target.value, e.target.classList[0], valid)
    //            let resultCheckValid = formValidation.checkValidData(valid)
    //            if (resultCheckValid !== false) 
    //                btnLogin.classList.add('active')
    //             else 
    //                btnLogin.classList.remove('active')
                
    //        })
    //        formLogin.addEventListener('submit', (e) => {
    //            e.preventDefault()
    //            alert('ok finam')
    //        })
    //    })
    //} else {
    //    alert('نوچ')
    //}
//})

