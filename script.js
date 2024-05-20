import dataCards from "./data__pets.json" assert { type: "json" };

/*burger menu*/
const burgerIcon = document.querySelector(".burger__icon");
const burgerMenu = document.querySelector(".header__nav");
const blackout = document.querySelector(".burger__blackout");
const navList = document.querySelector(".nav__list");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("burger--active");
  burgerMenu.classList.toggle("burger__menu--active");
  blackout.classList.toggle("burger__blackout--active");
  document.body.classList.toggle("body__block");
});
blackout.addEventListener("click", () => {
  if (burgerIcon.classList.contains("burger--active")) {
    burgerIcon.classList.toggle("burger--active");
    burgerMenu.classList.toggle("burger__menu--active");
    blackout.classList.toggle("burger__blackout--active");
    document.body.classList.toggle("body__block");
  }
});
navList.addEventListener("click", (el) => {
  console.log(el.target);

  if (
    el.target.classList == "item_link" &&
    burgerIcon.classList.contains("burger--active")
  ) {
    burgerIcon.classList.toggle("burger--active");
    burgerMenu.classList.toggle("burger__menu--active");
    blackout.classList.toggle("burger__blackout--active");
    document.body.classList.toggle("body__block");
  }
});

/*-----------------------------*/

/*popup*/

const popUp = () => {
  let id;
  const popUp = document.querySelector(".block_pop_up");
  const pets = document.querySelector(".pets");
  const m = document.querySelector("main");
  const closedIcon = document.querySelector(".icon__closed__pop_up");
  const blackoutPopUp = document.querySelector(".pop__up__blackout");
  const cardsPopup = document.querySelectorAll(".pets_cards");
  const imgPopUp = document.querySelector(".img__pop__up");
  const namePopUp = document.querySelector(".name__pop__up");
  const breedPopUp = document.querySelector(".breed__pop__up");
  const infoPopUp = document.querySelector(".info__pop__up");
  const strong = document.querySelectorAll(".strong");
  const info__span = document.querySelectorAll(".info__span");

  const creatPopUp = () => {
    console.log(+id);
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
  };
  cardsPopup.forEach((el) => {
    el.addEventListener("click", (elem) => {
      //console.log(elem.target.parentNode.id)

      id = +elem.target.parentNode.id;
      popUp.classList.add("pop__Up--active");
      creatPopUp();
      blackoutPopUp.classList.toggle("blackout--active");
      document.body.classList.toggle("position__fixes");
      //   console.log(window.scrollY + "scropl");
    });
  });
  blackoutPopUp.addEventListener("click", () => {
    if (popUp.classList.contains("pop__Up--active")) {
      popUp.classList.remove("pop__Up--active");
      blackoutPopUp.classList.toggle("blackout--active");
      document.body.classList.toggle("position__fixes");
    }
  });
  closedIcon.addEventListener("click", () => {
    popUp.classList.remove("pop__Up--active");
    blackoutPopUp.classList.toggle("blackout--active");
    document.body.classList.toggle("position__fixes");
  });
};
popUp();

/*-----------------------------*/

/*slider*/
const blockSlider = () => {
  const sliderBlockForWindowWight = (quantity) => {
    //console.log(dataCards[7]);
    const slider = document.querySelector(".slider");
    const arrowLeft = document.querySelector(".arrow--left");
    const arrowRight = document.querySelector(".arrow--right");
    const cardsMain = document.querySelectorAll(".slider > .main");
    const cardsMainImg = document.querySelectorAll(".main__img");
    const cardsMainName = document.querySelectorAll(".main__name");

    let count = 0;
    let arrPastSet = [];
    let bonusArrParseSet = [];
    let arr = [];
    let result;

    //функция из массива arr отсекает одинаковые значения с масссивом arrPastSet, далее пермешивает их в рандомном порядке
    const creatRandomId = (quantity) => {
      arr = [0, 1, 2, 3, 4, 5, 6, 7]
        .filter((el) => !arrPastSet.includes(`${el}`) === true)
        .sort(() => Math.random() - 0.5);
      if (quantity === 3) {
        arr = arr.slice(1, -1);
        console.log(quantity + " quanti random 3");
      } else if (quantity === 2) {
        arr = arr.slice(0, 2);
        console.log(quantity + " quanti random 2");
      } else if (quantity === 1) {
        arr = arr.slice(0, 1);
        console.log(quantity + " quanti random 3");
      }

      result = arr.map((el) => arr.push(el));
      result = arr;
      console.log(`Созданный рандом ${result}`);
      return arr;
    };

    //функция которая сохроняет id видимых блоков в массиве

    const saveIdMainBlock = () => {
      for (let i = 0; i < quantity; i++) {
        arrPastSet.push(cardsMain[i].id);
      }

      arrPastSet.map((el) => arrPastSet.push(el));

      console.log(
        `Только созданный бонусный Past массив - ${bonusArrParseSet}`
      );
      console.log(`Только созданный бонусный Past массив - ${arrPastSet}`);

      return arrPastSet;
    };

    const changePastId = (quantity) => {
      console.log(`Начальный count - ${count}`);
      if (count < 2 && slider.classList.contains("addPastCards")) {
        console.log(`1-ое условие изменения id`);
      } else if (count > 1 && slider.classList.contains("addPastCards")) {
        console.log(`2-ое условие изменения id`);
        count = 0;
      } else if (count < 2) {
        console.log(`3-ое условие изменения id`);
        bonusArrParseSet = [];
        arrPastSet = [];
        arr = [];
        saveIdMainBlock();
        creatRandomId(quantity);
      } else if (count > 1) {
        console.log(`4-ое условие изменения id`);

        bonusArrParseSet = [];
        arrPastSet = [];
        arr = [];
        count = 0;
        saveIdMainBlock();
        creatRandomId(quantity);
      }

      console.log(`Финальный count - ${count}`);
      console.log(`Бонусный Past массив - ${bonusArrParseSet}`);
      console.log(`Главный Past массив - ${arrPastSet}`);

      return arrPastSet;
    };
    changePastId(quantity);
    // создает по 3 новых блока до и после основных

    const creatCards = (quantity) => {
      console.log("создание реплекантов " + quantity);
      for (let i = 0; i < quantity; i++) {
        let divCardaPrepend = document.createElement("div");
        let imgCardaPrepend = document.createElement("img");
        let spanCardaPrepend = document.createElement("span");
        let buttonCardaPrepend = document.createElement("button");
        let divCardaAppend = document.createElement("div");
        let imgCardaAppend = document.createElement("img");
        let spanCardaAppend = document.createElement("span");
        let buttonCardaAppend = document.createElement("button");

        //befor main pack cards
        slider.prepend(divCardaPrepend);
        divCardaPrepend.classList.add(
          "pets_cards",
          "curso--pointer",
          "cards__left",
          "card__replicant"
        );

        if (quantity === 3) {
          divCardaPrepend.id = `${arr[2 - i]}`;
        } else if (quantity === 2) {
          divCardaPrepend.id = `${arr[1 - i]}`;
        } else if (quantity === 1) {
          divCardaPrepend.id = `${arr[i]}`;
        }

        divCardaPrepend.append(imgCardaPrepend);
        imgCardaPrepend.classList.add("puppe__person__img", "img__replicant");
        divCardaPrepend.append(spanCardaPrepend);
        spanCardaPrepend.classList.add("name__puppe", "name__replicant");
        divCardaPrepend.append(buttonCardaPrepend);
        buttonCardaPrepend.classList.add(
          "btn__cards",
          "button",
          "curso--pointer",
          "btn__replicant"
        );

        //after main pack cards
        slider.appendChild(divCardaAppend);
        divCardaAppend.classList.add(
          "pets_cards",
          "curso--pointer",
          "cards__right",
          "card__replicant"
        );
        divCardaAppend.id = `${arr[i]}`;
        divCardaAppend.append(imgCardaAppend);
        imgCardaAppend.classList.add("puppe__person__img", "img__replicant");
        divCardaAppend.append(spanCardaAppend);
        spanCardaAppend.classList.add("name__puppe", "name__replicant");
        divCardaAppend.append(buttonCardaAppend);
        buttonCardaAppend.classList.add(
          "btn__cards",
          "button",
          "curso--pointer",
          "btn__replicant"
        );
      }
    };
    creatCards(quantity);

    const cardsRight = document.getElementsByClassName("cards__right");
    const cardsReplicant = document.getElementsByClassName("card__replicant");
    const cheingReplicantImg =
      document.getElementsByClassName("img__replicant");
    const cheingReplicantName =
      document.getElementsByClassName("name__replicant");
    const cheingReplicantBtn =
      document.getElementsByClassName("btn__replicant");

    //заполняет контентом новый блок карточек при переключении(создает только в ту сторону в которую следует слайдер)
    const fillContentSecondBlockCards = () => {
      console.log("Начало заполнения бокового контента");
      if (slider.classList.contains("addPastCards")) {
        console.log(
          "Начало заполнения бокового контента выбран путь addPastCards"
        );
        console.log(
          `Проверка PAST массива для бокового контента - ${arrPastSet}`
        );
        console.log(
          `Проверка бонусного массива для бокового контента - ${bonusArrParseSet}`
        );
        for (let i = 0; i < cardsReplicant.length; i++) {
          console.log(dataCards[+arrPastSet[i]]["img"] + "проверкана ошибку 2");

          cheingReplicantImg[i].src = dataCards[+arrPastSet[i]]["img"];
          cheingReplicantName[i].textContent =
            dataCards[+arrPastSet[i]]["name"];
          cheingReplicantBtn[i].innerHTML = "Learn more";
          cardsReplicant[i].id = +arrPastSet[i];
        }
      } else {
        console.log("Начало заполнения бокового контента выбран путь Orige");
        console.log(
          `Проверка PAST массива для бокового контента - ${arrPastSet}`
        );
        console.log(
          `Проверка бонусного массива для бокового контента - ${bonusArrParseSet}`
        );
        for (let i = 0; i < cardsReplicant.length; i++) {
          cheingReplicantImg[i].src = dataCards[+arr[i]]["img"];
          cheingReplicantName[i].textContent = dataCards[+arr[i]]["name"];
          cheingReplicantBtn[i].innerHTML = "Learn more";
          cardsReplicant[i].id = +arr[i];
        }
      }
    };
    fillContentSecondBlockCards();

    //после конца анимации меняет заменяет элементы карточки main  на новые
    const replacementCards = (quantity) => {
      console.log("Начало заполнения главного контента", quantity);

      if (slider.classList.contains("addPastCards")) {
        console.log(
          "Начало заполнения главного контента выбран путь addPastCards"
        );
        console.log(
          `Проверка PAST массива для гланого контента - ${arrPastSet}`
        );
        console.log(
          `Проверка бонусного массива для гланого контента - ${bonusArrParseSet}`
        );
        for (let i = 0; i < quantity; i++) {
          cardsMainImg[i].src = `${dataCards[arrPastSet[i]]["img"]}`;
          cardsMainName[i].textContent = `${dataCards[arrPastSet[i]]["name"]}`;
          cardsMain[i].id = arrPastSet[i];
        }

        slider.classList.remove("addPastCards");
        slider.classList.add("beforePastCards");
      } else {
        console.log("Начало заполнения главного контента выбран путь Orige");
        console.log(
          `Проверка PAST массива для гланого контента - ${arrPastSet}`
        );
        console.log(
          `Проверка бонусного массива для гланого контента - ${bonusArrParseSet}`
        );
        for (let i = 0; i < quantity; i++) {
          cardsMainImg[i].src = `${dataCards[arr[i]]["img"]}`;
          cardsMainName[i].textContent = `${dataCards[arr[i]]["name"]}`;
          cardsMain[i].id = arr[i];
        }
      }
    };

    //слайд влево
    const moveLeft = () => {
      count++;

      if (slider.classList.contains("right")) {
        slider.classList.add("addPastCards");
        fillContentSecondBlockCards();
        changePastId(quantity);
      } else {
        slider.classList.remove("beforePastCards");
        changePastId();
        fillContentSecondBlockCards();
      }

      slider.classList.add("left");
      slider.classList.remove("right");
      slider.classList.add("transition--left");
      slider.classList.remove("transition--right");
      arrowLeft.removeEventListener("click", moveLeft);
      arrowRight.removeEventListener("click", moveRight);
    };

    arrowLeft.addEventListener("click", moveLeft);

    //слайд вправо
    const moveRight = () => {
      count++;
      if (slider.classList.contains("left")) {
        slider.classList.add("addPastCards");
        fillContentSecondBlockCards();
        changePastId(quantity);
      } else {
        slider.classList.remove("beforePastCards");
        changePastId(quantity);
        fillContentSecondBlockCards();
      }

      slider.classList.add("right");
      slider.classList.remove("left");
      slider.classList.add("transition--right");
      slider.classList.remove("transition--left");
      arrowLeft.removeEventListener("click", moveLeft);
      arrowRight.removeEventListener("click", moveRight);
      arrowRight.removeEventListener("click", moveRight);
    };

    arrowRight.addEventListener("click", moveRight);

    // после аканчания анимации этот эвент производит определеные действия
    slider.addEventListener("animationend", (animationEvent) => {
      console.log(count + "  enda animaton");
      console.log(arrPastSet + "проверка бонусного массива");
      console.log(arrPastSet + "проверка  PAst массива");
      replacementCards(quantity);
      if (animationEvent.animationName === "move--left") {
        slider.classList.remove("transition--left");
        arrowRight.addEventListener("click", moveRight);
        arrowLeft.addEventListener("click", moveLeft);
      } else if (animationEvent.animationName === "move--right") {
        slider.classList.remove("transition--right");
        arrowRight.addEventListener("click", moveRight);
        arrowLeft.addEventListener("click", moveLeft);
      }
    });
  };

  //адаптив слайдера
  const choiceQuantityCards = () => {
    let quantity;
    if (window.innerWidth > 1249) {
      console.log(window.innerWidth);
      quantity = 3;
      sliderBlockForWindowWight(quantity);
    } else if (window.innerWidth < 1151 && window.innerWidth > 650) {
      console.log(window.innerWidth);
      quantity = 2;
      sliderBlockForWindowWight(quantity);
    } else if (window.innerWidth < 651) {
      console.log(window.innerWidth);
      quantity = 1;
      sliderBlockForWindowWight(quantity);
    }
  };

  /*window.addEventListener('resize', function() {
        clearTimeout(false);
        timeout = setTimeout(choiceQuantityCards, 250);
        console.log("Размер окна изменен");
      });*/
  choiceQuantityCards();

  /*-----------------------------*/
};
blockSlider();
