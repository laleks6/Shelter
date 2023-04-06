console.log("Моя оценка 100 баллов\nЕсли есть недочеты, то пишите в дискорд (@laleks#0503), либо в проверочном чате RS")
const burgerIcon = document.querySelector(".burger__icon");
const burgerMenu = document.querySelector(".header__nav");
const blackout = document.querySelector(".burger__blackout");
const navList = document.querySelector(".nav__list");



burgerIcon.addEventListener('click', () => {
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
        document.body.classList.toggle('body__block')
    }

})
navList.addEventListener('click', (el) => {
    console.log(el.target)
    if(el.target.classList == "item_link") {
        burgerIcon.classList.toggle("burger--active")
        burgerMenu.classList.toggle("burger__menu--active")
        blackout.classList.toggle("burger__blackout--active")
        document.body.classList.toggle('body__block')
    }

})



