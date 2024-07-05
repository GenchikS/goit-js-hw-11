// import {createMarcup} from "./js/render-functions";
// import { userSourse } from "./js/pixabay-api";

const list = document.querySelector(".list");
const inputText = document.querySelector(".input-text");
const inputButton = document.querySelector(".input-button");


inputText.addEventListener(`input`, handleSubmit);

let inputTextUser = "";
let userPhotoAll = [];

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
                        .then((value) => list.insertAdjacentHTML("beforeend", createMarcup(value.hits)))
                        .catch((error) => console.log("error", error))
   }
}


const API_KEY = `44770113-cb4279c01992ac20f8c79d080`;

function userSourse() {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputTextUser}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}

userSourse().then((response) =>response)
    .catch((rejected) => console.log("error", rejected))
              

if()

function createMarcup(arr){
    return arr.map(
        ({}) =>`
        <li class="container-list">
        <img class="img-list" src="" alt="">
            <ul class="container-cart">
                <li class="list-cart">
                    <p class="likes-cart"></p>
                    <p class="number-likes"></p>
                </li>
                <li class="list-cart">
                    <p class="views-cart"></p>
                    <p class="number-views"></p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart"></p>
                    <p class="number-comments"></p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart"></p>
                    <p class="number-downloads"></p>
                </li>
            </ul>
        </img>
    </li>
    `).join(``);
}


// list.insertAdjacentHTML("beforeend", createMarcup(userPhotoAll));  //  створення скелету розмітки








