import {inputTextUser, createMarcup, handleSubmit} from "./js/render-functions";
import { userSourse } from "./js/pixabay-api";

const list = document.querySelector(".list");
const inputText = document.querySelector(".input-text");
const inputButton = document.querySelector(".input-button");


inputText.addEventListener(`input`, handleSubmit);

let userPhotoAll = [];


inputButton.addEventListener(`click`, buttonClick);

function buttonClick() {
  if (inputTextUser === "") {
  return
  } else {
      userSourse(inputTextUser);
    //   console.log("inputTextUser", typeof (inputTextUser))  //   перевірка обробленного аргументу
      userPhotoAll =
          userSourse(inputTextUser)
                                .then((value) => listCreateMarcup(value.hits))  // передача агрументу value.hits ф-ції виклику створення скелету розмітки
                                .catch((error) => console.log("error", error));
                                
        //    console.log("userPhotoAll", userPhotoAll)  //  отримано промис
        inputText.value = "";
    }
}

function listCreateMarcup(user) {
    list.insertAdjacentHTML("beforeend", createMarcup(user));  //  ф-ція виклику створення скелету розмітки
}










