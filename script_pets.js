import dataCards from './data__pets.json' assert { type: "json" }



/*burger menu*/
const burgerIcon = document.querySelector(".burger__icon");
const burgerMenu = document.querySelector(".header__nav");
const blackout = document.querySelector(".burger__blackout");
const navList = document.querySelector(".nav__list");



burgerIcon.addEventListener('click', () => {
    console.log("click burger menu")
    burgerIcon.classList.toggle("burger--active")
    burgerMenu.classList.toggle("burger__menu--active")
    blackout.classList.toggle("burger__blackout--active")
    document.body.classList.toggle('body__block')

})
blackout.addEventListener('click', () => {
    if(burgerIcon.classList.contains("burger--active")) {
        burgerIcon.classList.toggle("burger--active")
        burgerMenu.classList.toggle("burger__menu--active")
        blackout.classList.toggle("burger__blackout--active")
        document.body.classList.remove('body__block')
    }

})
navList.addEventListener('click', (el) => {
    console.log(el.target)
    
    if(el.target.classList == "item_link") {
        burgerIcon.classList.toggle("burger--active")
        burgerMenu.classList.toggle("burger__menu--active")
        blackout.classList.toggle("burger__blackout--active")
        document.body.classList.remove('body__block')
    }

})





/* pagination */

const blockPaginationCards = document.querySelector(".pagination__cards");
const petsCards = document.querySelectorAll(".pets_cards");
const puppePersonImg = document.querySelectorAll(".puppe__person__img");
const namePuppe = document.querySelectorAll(".name__puppe");
const btnFirstPage = document.querySelector(".first__page");
const btnPastPage = document.querySelector(".past__page");
const btnLeftPage = document.querySelectorAll(".sup_left");
const btnRightPage = document.querySelectorAll(".sup_right");
const btnSupCentr = document.querySelector(".sup_centr");
const btnNextPage = document.querySelector(".next__page");
const btnLastPage = document.querySelector(".last__page");
const iconFirstPage = document.querySelector(".btn__icon__first__page");
const iconPastPage = document.querySelector(".btn__icon__past__page");
const iconNextPage = document.querySelector(".btn__icon__next__page");
const iconLastPage = document.querySelector(".btn__icon__last__page");
const TwoArrowFirst = ".///assets///svg///pag-arrow-two-left.svg" 
const ArrowFirst = ".///assets///svg///pag-arrow-one-left.svg" 
const TwoArrowLast = ".///assets///svg///pag-arrow-two-right.svg"
const ArrowLast= ".///assets///svg///pag-arrow-one-right.svg" 



let arr = [] 
let arrFirst = []
let arrMatrix = []
let number = 8
let countPagination = 5
let count = 0

//передаем в матрицу мервым массиво id первой страницы
for(let i = 0; i < number; i++) {
    arrFirst.push(+petsCards[i].id)   
}
arrMatrix.push(arrFirst)

// создаем рандомные массивы и передаем их в матрицу
const creatRundomOneLineMatrix = (number) => {
    for(let i = 0; i < number; i++) {
        arr.push(i)   
    }
    arr.sort(() => Math.random() -0.5)
    arrMatrix.push(arr)
    arr = []
}

// создаем определеное количество массивов в зависимостиот страницы  
const numberOfPages = (countPagination) =>{
    for(let i = 0; i < countPagination; i++) {
        creatRundomOneLineMatrix(number)  
    }
    
    
}
numberOfPages(countPagination)

console.log(arrMatrix )
console.log(arrMatrix[1] + "matrix ----")

// переписывание карточек 
const fillContent = () => {
    if(count < 6 || count > 1) {
        for(let i = 0; i < arrMatrix[count].length; i++) {
            console.log(puppePersonImg[+arrMatrix[count][i]].src)
            console.log(`${dataCards[+arrMatrix[count][i]]["img"]}`)
            puppePersonImg[i].src = dataCards[+arrMatrix[count][i]]["img"]
            namePuppe[i].textContent = dataCards[+arrMatrix[count][i]]["name"];
        }
        btnSupCentr.textContent = `${count+1}`
    }

}
const addActivLeftBtn = () => {
    for (let i = 0; i < 2; i++) {
        btnLeftPage[i].classList.add('btn--active')       
    }
    iconFirstPage.src = TwoArrowLast
    iconPastPage.src = ArrowLast
}
const removeActivLeftBtn = () => {
    for (let i = 0; i < 2; i++) {
        btnLeftPage[i].classList.remove('btn--active')       
    }
    iconFirstPage.src = TwoArrowFirst
    iconPastPage.src = ArrowFirst

}
const removeActiveRightBtn = () => {
    for (let i = 0; i < 2; i++) {
        btnRightPage[i].classList.remove('btn--active')       
    }
    iconLastPage.src = TwoArrowFirst
    iconNextPage.src = ArrowFirst
}
const addActiveRightBtn = () => {
    for (let i = 0; i < 2; i++) {
        btnRightPage[i].classList.add('btn--active')       
    }
    iconLastPage.src = TwoArrowLast
    iconNextPage.src = ArrowLast
}
// переключение на следующую страницу 
const goToTheNextPage = () => {
    count++
    addActiveRightBtn()
    if(count > 5){
        count = 5
        removeActiveRightBtn()
    }
    
    addActivLeftBtn()
    fillContent()
    
}
btnNextPage.addEventListener('click', goToTheNextPage)
const goToTheLastPage = () => {
    count = 5 
    removeActiveRightBtn()
    addActivLeftBtn()
    fillContent()
}
btnLastPage.addEventListener('click', goToTheLastPage)

// переключение на следующую страницу 
const goToThePastPage = () => {
    count--
    if(count < 1){
        count = 0
        removeActivLeftBtn()
    }
    fillContent()
    
}
btnPastPage.addEventListener('click', goToThePastPage)

const goToTheFirstPage = () => {
    count = 0 
    removeActivLeftBtn()
    addActiveRightBtn()
    fillContent()
}
btnFirstPage.addEventListener('click', goToTheFirstPage)

const popUp = () => {
    let id
    const popUp = document.querySelector('.block_pop_up')
    const pets = document.querySelector('.pets')
    const closedIcon = document.querySelector('.icon__closed__pop_up')
    const blackoutPopUp = document.querySelector(".pop__up__blackout");
    const cardsPopup = document.querySelectorAll('.pets_cards')
    const imgPopUp = document.querySelector('.img__pop__up')
    const namePopUp = document.querySelector('.name__pop__up')
    const breedPopUp = document.querySelector('.breed__pop__up')
    const infoPopUp = document.querySelector('.info__pop__up')
    const strong = document.querySelectorAll('.strong')
    const info__span = document.querySelectorAll('.info__span')

    const creatPopUp = () => {
        console.log(id)
        imgPopUp.src = dataCards[id]["img"];
        namePopUp.textContent = dataCards[id]["name"];
        breedPopUp.textContent = `${dataCards[id]["type"]} - ${dataCards[id]["breed"]}`;
        infoPopUp.textContent = dataCards[id]["description"];

        strong[0].textContent = "Age: ";
        strong[1].textContent = "Inoculations: ";
        strong[2].textContent = "Diseases: ";
        strong[3].textContent = "Parasites: "; 
        info__span[0].textContent = dataCards[id]["age"];
        info__span[1].textContent = dataCards[id]["inoculations"];
        info__span[2].textContent = dataCards[id]["diseases"];
        info__span[3].textContent = dataCards[id]["parasites"];  
    }
    cardsPopup.forEach(el => {
        el.addEventListener('click', (elem) =>  {
            console.log(elem.target.parentNoded)
         
            id = +elem.target.parentNode.id
            popUp.classList.add('pop__Up--active')
            creatPopUp()
            blackoutPopUp.classList.toggle("blackout--active")
            document.body.classList.toggle('position__fixes')
            //document.body.classList.toggle("blackout--active")
            //document.body.style.top = `-0px`
            document.body.style.top = `-30%`
            

   
        })
    })
    blackoutPopUp.addEventListener('click', () => {
        if(popUp.classList.contains("pop__Up--active")) {
            popUp.classList.remove('pop__Up--active')
            blackoutPopUp.classList.toggle("blackout--active")
            document.body.classList.toggle('position__fixes')
   
        }
    
    })
    closedIcon.addEventListener('click', () => {
        popUp.classList.remove('pop__Up--active')
        blackoutPopUp.classList.toggle("blackout--active")
        document.body.classList.toggle('position__fixes')
    })
}
popUp()
console.log("Доделаю в течении 2 дней, пишите в дискорд (@laleks#0503), либо в проверочном чате RS")

