import * as index from "./index.js"
import {} from "./nav.js"
/* variabels */
// variabels header...
// fillter header start variabels...
const sugect = document.getElementById('sugect-fillter-header')
const wrapperSugect = document.querySelector('.wrapper-fillter-header')
const arrowShowSugect = document.querySelectorAll('.text-header svg')
const SearchLogoButtonFilter = document.querySelector('.Search-logo-button')
/* comment start */
const wrapperMainComments = document.querySelector('.wrapper-main-comments')
const startComment = document.querySelector('#start-comment')
const centerComment = document.querySelector('#center-comment')
const endComment = document.querySelector('#end-comment')
const buttonsControlComment = ['start-comment', 'center-comment', 'end-comment']
/* comment end */
// inputs 
const inputLocation = document.querySelector('.input-location')
const inputDate = document.querySelector('.input-Date')
// data for sugect inputs filter

// fillter header end variabels...

/* Filter incoming data from the user to offer based on the amount of input to the user */
const filrerInputHeader = (value, object) => {
    let resultSearch = object.filter(loc => {
        return value != null ? loc.toLocaleLowerCase().includes(value.toLocaleLowerCase()) : []
    })
    return resultSearch
}
const DisplayDataFilterHeader = (array, input) => {
    sugect.innerHTML = " "
    for (const text of array) {
        const li = document.createElement('li')
        li.textContent = text
        sugect.appendChild(li)
        li.addEventListener('click', (e) => {
            input.value = e.target.textContent
        })

    }
}
const inputLocationFunction = (e) => {
    const resultSearch = filrerInputHeader(e.data, index.sugectData.location.array)
    if (resultSearch.length !== 0) {
        sugect.classList.replace('hide', 'show')
        sugect.classList.replace('dateTypeing', 'locationTypeing')
        wrapperSugect.classList.replace('dateTypeing', 'locationTypeing')
        // Display data to the user
        DisplayDataFilterHeader(resultSearch, index.sugectData.location.displayInput)
        document.querySelector('.arrow-date').classList.add('active')
        document.querySelector('.arrow-Location').classList.remove('active')
    } else {
        sugect.classList.replace('show', 'hide')
    }
}
const inputDateFunction = (e) => {
    const resultSearch = filrerInputHeader(e.data, index.sugectData.date.array)
    if (resultSearch.length !== 0) {
        // Suggested box settings for the user
        sugect.classList.replace('hide', 'show')
        sugect.classList.replace('locationTypeing', 'dateTypeing')
        wrapperSugect.classList.replace('locationTypeing', 'dateTypeing')
        // Display data to the user
        DisplayDataFilterHeader(resultSearch, index.sugectData.date.displayInput)
        document.querySelector('.arrow-date').classList.remove('active')
        document.querySelector('.arrow-Location').classList.add('active')
    } else {
        sugect.classList.replace('show', 'hide')
    }
}
const functionControlDotsComment = (target, arraySpan, dataComment, Side) => {
    if (Side == "next") {
        wrapperMainComments.innerHTML = `
    <div class="wrapper-comments animate__animated animate__lightSpeedInRight">
    <p class="text-comment">“ ${dataComment.value.text} “</p>
    <p class="Comment-sender"><span>By</span> ${dataComment.value.name}</p>
    <span class="title-sender"> ${dataComment.value.NickName}</span>
    </div>
    `
    centerComment.className = "dot animate__animated animate__lightSpeedInRight active"
    }else if(Side == "prev"){
        wrapperMainComments.innerHTML = `
        <div class="wrapper-comments animate__animated animate__lightSpeedInLeft">
            <p class="text-comment">“ ${dataComment.value.text} “</p>
            <p class="Comment-sender"><span>By</span> ${dataComment.value.name}</p>
            <span class="title-sender"> ${dataComment.value.NickName}</span>
        </div>
        `
        centerComment.className = "dot animate__animated animate__lightSpeedInLeft active"
    }

}
/* header events */
inputLocation.addEventListener('input', (e) => {
    inputLocationFunction(e)
})
SearchLogoButtonFilter.addEventListener('click',()=>{
    sugect.classList.replace('show', 'hide')
    document.querySelector('.arrow-date').classList.remove('active')
    document.querySelector('.arrow-Location').classList.remove('active')
})
inputDate.addEventListener('input', (e) => {
    inputDateFunction(e)
})
/* Click on the arrow and open sugect */
Array.from(arrowShowSugect).forEach(SVG => {
    SVG.addEventListener('click', (e) => {
        if (Array.from(e.target.classList).includes("arrow-date")) {
            SVG.classList.toggle('active')
            inputLocationFunction(inputLocation)
        }
        if (Array.from(e.target.classList).includes("arrow-Location")) {
            inputDateFunction(inputDate)
            SVG.classList.toggle('active')
        }
    })
})
/* start create comments */
let Go = index.changeArrayItem(index.dataComment)
startComment.addEventListener('click', (e) => {
    functionControlDotsComment(e.target, buttonsControlComment, Go.next(),'prev')
})
endComment.addEventListener('click', (e) => {
    functionControlDotsComment(e.target, buttonsControlComment, Go.next('prev'),'next')
})
 




// let res = result[Symbol.iterator]()
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());