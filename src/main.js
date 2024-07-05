import {createMarcup} from "./js/render-functions";
// import { userSourse } from "./js/pixabay-api";

const list = document.querySelector(".list");
const inputText = document.querySelector(".input-text");
const inputButton = document.querySelector(".input-button");


inputText.addEventListener(`input`, handleSubmit);

let inputTextUser = "";
let userPhotoAll = {};

function handleSubmit(event) {
  inputTextUser = (event.currentTarget.value).trim();
  // console.log("inputTextUser", inputTextUser)  //  перевірка введеного аргументу
  return inputTextUser
}


inputButton.addEventListener(`click`, buttonClick);

function buttonClick() {
  if (inputTextUser === "") {
  return
  } else {
      userSourse(inputTextUser.toString());
    //   console.log("inputTextUser", typeof (inputTextUser))  //   перевірка обробленного аргументу
      userPhotoAll = userSourse(inputTextUser);
    //   console.log("userSourse", userSourse)
      return userPhotoAll
                        .then((value) => console.log(value.hits))
                        .catch((error) => console.log("error", error))
        
      
    }
}


const API_KEY = `44770113-cb4279c01992ac20f8c79d080`;

function userSourse() {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputTextUser}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}

userSourse().then((response) =>response)
    .catch((rejected) => console.log("error", rejected))
              

// console.log("userPhotoAll", userPhotoAll)
// const all = userPhotoAll
//     .then((value) => console.log(value))
//     .catch((error) => console.log("error", error))
// console.log("userSourse", userSourse)
// list.insertAdjacentHTML("beforeend", createMarcup(inputTextUser));  //  створення скелету розмітки








