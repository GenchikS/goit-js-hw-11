import SimpleLightbox from "simplelightbox";
// console.log(SimpleLightbox)  //  перевірка підключення бібліотеки
import "simplelightbox/dist/simple-lightbox.min.css";

import {inputTextUser, createMarcup, handleSubmit} from "./js/render-functions";
import { userSourse } from "./js/pixabay-api";


const jsList = document.querySelector(".js-list");
const inputText = document.querySelector(".input-text");
const inputButton = document.querySelector(".input-button");
const containerList = document.querySelector(".container-list");

inputText.addEventListener(`input`, handleSubmit);

let userPhotoAll = [];


inputButton.addEventListener(`click`, buttonClick);

function buttonClick() {
  jsList.innerHTML = "";
  if (inputTextUser === "") {
  return
  } else {
      userSourse(inputTextUser);
      // console.log("inputTextUser", typeof (inputTextUser))  //   перевірка обробленного аргументу
      userPhotoAll =
          userSourse(inputTextUser)
                                .then((value) => listCreateMarcup(value.hits))  // передача агрументу value.hits ф-ції виклику створення скелету розмітки
                                .catch((error) => console.log("error", error));
                                
          //  console.log("userPhotoAll", userPhotoAll)  //  отримано промис
        inputText.value = "";
  }
}


function listCreateMarcup(user) {
  jsList.insertAdjacentHTML("beforeend", createMarcup(user));  //  ф-ція виклику створення скелету розмітки
}


 const onGalleryElementsClick = event => {
    event.preventDefault();

   const lightbox = new SimpleLightbox('.container-list a',
     {
       captionDelay: 250,
       captionsData: 'alt',
       captionPosition: 'bottom',
       animationSpeed: 250
     });
}










