/* sugectData data for inputs Heaher Home */
import ApprovedForm from "./components/_Approved-final-form.js"
const sugectData = {
    location: {
        array: ['Nations, NOS', 'Albania, Washegton', 'Belgium, BLI', 'Canada, CAN', 'China , CHN'],
        displayInput: document.querySelector('.input-location'),
    },
    date: {
        array: ['28 May 2021', '30 oct 2020', '10 juon 2015', '4 april 2020', '7 august 2016', '10 march 2013'],
        displayInput: document.querySelector('.input-Date'),
    }
}

/* comment data */
let dataComment = [
    {
        text: `“ I Am A ghejel and dfigbj “`,
        name: 'mohhamad',
        NickName: 'ghejel'
    },
    {
        text: `“ I Am A Trred Is Very Worth It Helps Me A Lot In Finding Interesting
                Tourist Destinations And Of Course “` ,
        name: 'hosen',
        NickName: 'Go fill'
    },
    {
        text: `“ I Am A Traveler Ant In Finding Interesting Tourist
                s Me A Lot In Finding Interesting
                Tourist Destinations And Of Course “` ,
        name: 'arman Jayms',
        NickName: 'Do'
    },
    {
        text: `“ lorenm Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, harum!`,
        name: ' Alan',
        NickName: 'jully'
    },
    {
        text: `“ anonymous Lorem ipsum, dolor sit amet id  father elit. daca, sammer!`,
        name: 'anonymous',
        NickName: 'foun'
    }
]
/* Receiving information from ipa Dritas should be received as a low object (Tourist box information)*/
const turistInfo = [
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-01 oct,2021',
        img: '../src/image/photo place-1.png',
        Location: 'Category /Ocean',
        price: 92.950,
    },
    {
        place: 'Cologne Cathedral (Kölner Dom)',
        date: '24 Aprill-07 May,2022',
        img: '../src/image/photo place-2.png',
        Location: 'Category /Ocean',
        price: 62.950,
    },
    {
        place: 'The Black Forest',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-3.png',
        Location: 'Category /Ocean',
        price: 32.950,
    },
    {
        place: 'Ultimate Fairytale Castle',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-4.png',
        Location: 'Category /Ocean',
        price: 22.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-5.png',
        Location: 'Category /Ocean',
        price: 2.950,
    },
    {
        place: 'Historic Port of Hamburg',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-6.png',
        Location: 'Category /Ocean',
        price: 42.950,
    },
    {
        place: 'The Rhine Valley',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-7.png',
        Location: 'Category /Ocean',
        price: 22.950,
    },
    {
        place: `Berlin 's Museum Island`,
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-8.png',
        Location: 'Category /Ocean',
        price: 32.950,
    },
    {
        place: `Munich's Marienplatz`,
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-9.png',
        Location: 'Category /Ocean',
        price: 52.950,
    },
    {
        place: 'Bamberg and the Bürgerstadt',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-10.png',
        Location: 'Category /Ocean',
        price: 100.950,
    },
    {
        place: ' Zugspitze Massif',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-11.png',
        Location: 'Category /Ocean',
        price: 17.970,
    },
    {
        place: 'The Island of Rügen',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-12.png',
        Location: 'Category /Ocean',
        price: 42.950,
    },
    {
        place: 'Königssee (King s\' Lake)',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-13.png',
        Location: 'Category /Ocean',
        price: 82.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-14.png',
        Location: 'Category /Ocean',
        price: 12.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-15.png',
        Location: 'Category /Ocean',
        price: 7.050,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-16.png',
        Location: 'Category /Ocean',
        price: 4.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-17.png',
        Location: 'Category /Ocean',
        price: 3.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-18.png',
        Location: 'Category /Ocean',
        price: 5.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-19.png',
        Location: 'Category /Ocean',
        price: 4.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-20.png',
        Location: 'Category /Ocean',
        price: 2.950,
    },
    {
        place: ' Zugspitze Massif',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-11.png',
        Location: 'Category /Ocean',
        price: 17.970,
    },
    {
        place: 'The Island of Rügen',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-12.png',
        Location: 'Category /Ocean',
        price: 42.950,
    },
    {
        place: 'Königssee (King s\' Lake)',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-13.png',
        Location: 'Category /Ocean',
        price: 82.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-14.png',
        Location: 'Category /Ocean',
        price: 12.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-15.png',
        Location: 'Category /Ocean',
        price: 7.050,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-16.png',
        Location: 'Category /Ocean',
        price: 4.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-17.png',
        Location: 'Category /Ocean',
        price: 3.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-18.png',
        Location: 'Category /Ocean',
        price: 5.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-19.png',
        Location: 'Category /Ocean',
        price: 4.950,
    },
    {
        place: 'Berlin\'s Brandenburg Gate',
        date: '24 Aprill-02 May,2021',
        img: '../src/image/photo place-20.png',
        Location: 'Category /Ocean',
        price: 2.950,
    },
]
/* We take the array and divide it into twenty parts because we want each page to have only twenty boxes. */
function itemsPerChunk(num, arr) { // items per chunk    
    return arr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / num)
        if (!resultArray[chunkIndex])
            resultArray[chunkIndex] = [] // start a new chunk
        resultArray[chunkIndex].push(item)
        return resultArray
    }, [])
}
/* next and prev array */
function* changeArrayItem(array) {
    let i = 0;
    while (true) {
        const incOrDec = (yield array[i]) === 'prev' ? -1 : 1;
        i = (array.length + i + incOrDec) % array.length;
    }
}
export { dataComment, itemsPerChunk, changeArrayItem, sugectData, turistInfo }



// Filter form inputs
class FormEvaluation {
    constructor() {
        this._regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        this._regexphone = /^(\+98|0)?9\d{9}$/
        this._regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
        this._regexEmailCode = /^[0-9]/
    }
    fullName = (value, error, valid) => {
        if (this._regexName.test(value)) {
            // is valid
            this.errorAndSuccessFlay('success-inp', error)
            valid._fullName = value
        } else {
            this.errorAndSuccessFlay('error-inp', error)
            valid._fullName = false
        }
    }
    emailOPhone = (value, error, valid) => {
        if (this._regexphone.test(value)||this._regexEmail.test(value)) {
            // is valid
            this.errorAndSuccessFlay('success-inp', error)
            valid._emailOrPhone = value
        } else {
            // error
            this.errorAndSuccessFlay('error-inp', error)
            valid._emailOrPhone = false
        }
    }
    errorAndSuccessFlay(className, inputClassList) {
        const input = document.querySelector(`.${inputClassList}`)
        input.classList.add(className)
        setTimeout(() => { input.classList.remove(className) }, 2000)
    }
    emailCode=(value, error, valid)=>{
        if (this._regexName.test(value)||this._regexEmailCode.test(value)) {
            // is valid
            this.errorAndSuccessFlay('success-inp', error)
            valid._code = value
        } else {
            // error
            this.errorAndSuccessFlay('error-inp', error)
            valid._code = false
        }
    }
    redirectToApprovedForm = (command) => {
        const main = document.querySelector('.main')
        setTimeout(() => {
            main.classList.remove('animate__flash')
            main.classList.add('animate__slideInRight')
            main.innerHTML = ApprovedForm()
            command()
        }, 2000)
    }
    checkValidData = (valid) => {
        let result = []
        for (const key in valid) {
            result.push(valid[key])
        }
        if (result.includes(false)) {
            return false
        } else {
            return true
        }
    }
}
export { FormEvaluation }