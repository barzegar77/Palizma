import * as index from "./index.js"

// variabels page login...
const formLogin = document.querySelector('#form-login')
const btnLogin = document.querySelector('#btn-login')
const emailPhone = document.querySelector('#emailPhone')
let valid = {
    _emailOrPhone: false,
}

const formValidation = Reflect.construct(index.FormEvaluation, [])

emailPhone.addEventListener('input', (e) => {
    formValidation.emailOPhone(e.target.value, e.target.classList[0], valid)
    let resultCheckValid = formValidation.checkValidData(valid)
    if(resultCheckValid!==false)
        btnLogin.classList.add('active')
    else
        btnLogin.classList.remove('active')
    
})

//formLogin.addEventListener('submit', (e) => {
//    e.preventDefault()
//    let resultCheckValid = formValidation.checkValidData(valid)
//    if (resultCheckValid !== false) {
//        formValidation.emailOPhone(emailPhone.value, emailPhone.classList[0], valid)
//        formValidation.redirectToApprovedForm(() => {
//            const formLogin = document.querySelector('#form-login')
//            const resendCode = document.querySelector('#resend-code')
//            const enterCode = document.querySelector('#enterCode')
//            const btnLogin = document.querySelector('#btn-login')
//            const back = document.querySelector('#back')
//            back.innerHTML = `Did you enter the email incorrectly? <a id="Back-link">Back Log in</a>`
//            const BackLink = document.querySelector('#Back-link')
//            let valid = {
//                _code: false,
//            }
//            enterCode.addEventListener('input', (e) => {
//                formValidation.emailCode(e.target.value, e.target.classList[0], valid)
//                let resultCheckValid = formValidation.checkValidData(valid)
//                if (resultCheckValid !== false) 
//                    btnLogin.classList.add('active')
//                 else 
//                    btnLogin.classList.remove('active')
                
//            })
//            BackLink.addEventListener('click',(e)=>{
//                e.preventDefault()
//                window.location.href = "../public/login.html"
//            })
//            resendCode.addEventListener('click', (e) => {
//                e.target.classList.add('active')
//                setTimeout(() => {
//                    e.target.classList.remove('active')
//                }, 2000)
//            })
//            formLogin.addEventListener('submit', (e) => {
//                e.preventDefault()
//                alert('ok finam')
//            })
//        })
//    }else{
//        formValidation.emailOPhone(emailPhone.value, emailPhone.classList[0], valid)
//        btnLogin.classList.remove('active')
//    }
//})