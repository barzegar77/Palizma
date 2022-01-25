import * as index from "./index.js"
import { } from "./nav.js"
/* Extract the function of converting arrays to fragmented arrays */
const boxssArray = index.itemsPerChunk(10, index.turistInfo)
/* start functions */
const nextPageBoxss = (btnArray, boxssArray, AllButton) => {
    const button = btnArray.next().value
    const arrayBox = boxssArray.next().value
    controlButton(button, btnsArratToggleBoxss,AllButton)
    controlBoxArray(arrayBox)
}
const prevPageBoxss = (btnArray, boxssArray, AllButton) => {
    const button = btnArray.next('prev').value
    const arrayBox = boxssArray.next('prev').value
    controlButton(button, btnsArratToggleBoxss,AllButton)
    controlBoxArray(arrayBox)
}
const controlButton = (button, btnsArratToggleBoxss,rowe) => {
    const offsetLeft = button.offsetLeft
    const wrapperBtnsEl = document.querySelector('.wrapper-btns')
    wrapperBtnsEl.style.right = `${offsetLeft}px`
    btnsArratToggleBoxss.forEach(button => button.classList.remove('active'))
    button.classList.add('active')
}
const controlBoxArray = (arrayBox) => {
    const wrapperBoxsTuristy = document.querySelector('.wrapper-boxs-turisty')
    wrapperBoxsTuristy.innerHTML=""
    arrayBox.forEach(data => {
        wrapperBoxsTuristy.innerHTML+=`
        <div class="box-turisty animate__animated  animate__flipInX">
        <h4 class="place">${data.place}</h4>
        <span class="date">${data.date}</span>
        <small class="place-address">${data.Location}</small>
        <div class="wrapper-img">
          <img src="${data.img}" alt="${data.Location}">
        </div>
        <div class="caption-box">
          <div class="wrapper-caption">
            <span>total price</span>
            <h5 class="price" id="price">${data.price} $</h5>
          </div>
          <button class="see-place">See</button>
        </div>
      </div>
        `
    })
}
const searchBoxss = (arr,{location,date}) => {
 let resultSearch =  arr.flat().filter(item=>{
    if(item.place.toLowerCase().includes(location.toLowerCase()) && item.date.toLowerCase().includes(date.toLowerCase())){
      return item
    }
  })
  console.log(resultSearch);
  controlBoxArray(resultSearch)
}
/* end functions */
/* Select wrapper element change pages boxss */
const wrapper = document.querySelector('.wrapper-number-boxs .wrapper-btns')
/* An array of buttons (one button is created for each page) */
const btnsArratToggleBoxss = []
boxssArray.forEach((num, index) => {
    // (one button is created for each page)
    const btn = document.createElement('button')
    btn.textContent = index + 1
    btn.id = `page_${index + 1}`
    btn.setAttribute('data-index', index)
    wrapper.appendChild(btn)
    btnsArratToggleBoxss.push(btn)
})
// select btn prev and next pages boxss
const nextBtn = document.querySelector('#next-page')
const prevBtn = document.querySelector('#prev-page')
/* We navigate the item array of buttons using the function generator with the next function and new boxes enter the page  and Array boxss*/
const nextingBtns = index.changeArrayItem(btnsArratToggleBoxss)
const nextBoxssArray = index.changeArrayItem(boxssArray)
nextBtn.addEventListener('click', () => nextPageBoxss(nextingBtns, nextBoxssArray, btnsArratToggleBoxss))
prevBtn.addEventListener('click', () => prevPageBoxss(nextingBtns, nextBoxssArray, btnsArratToggleBoxss))
/* fillter boxs */
const inputLocation = document.querySelector('#input-location')
const inputTime = document.querySelector('#many-days')
const selectDate = document.querySelector('#select-date')
const btnSearch = document.querySelector('.btn-search-header')

btnSearch.addEventListener('click',()=>{
  const dataSearch = {
    location : inputLocation.value,
    date : selectDate.value,
  }
  searchBoxss(boxssArray,dataSearch)
  
})