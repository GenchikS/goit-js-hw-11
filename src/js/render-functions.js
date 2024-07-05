// import { userSourse } from "./pixabay-api";

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

let inputTextUser = "";

function handleSubmit(event) {
  inputTextUser = (event.currentTarget.value).trim();
  // console.log("inputTextUser", inputTextUser)  //  перевірка введеного аргументу
    return inputTextUser;
}



// ------  EXPORT  ------
export { inputTextUser, createMarcup, handleSubmit};
