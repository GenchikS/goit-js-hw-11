// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const keyPhoto = {
    imgsrc: document.querySelector(".img-list")
}

let i = 0;

function createMarcup(arr) {
    // console.log("arr", arr)  //  перевірка масиву

    if (Number(arr.length) === 0) {  //  умова перевірки на пустий масив
    iziToast.show({   //  підключення бібліотеки iziToast
        title: 'Sorry, there are no images matching your search query. Please try again!',
    }); 
  }

    return arr.map(
        ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
        <li class="container-list">
            <img class="img-list" src="${webformatURL}" alt="${tags}">
            <a class="gallery-link" href="${largeImageURL}">
            <ul class="container-cart">
                <li class="list-cart">
                    <p class="likes-cart">Likes</p>
                    <p class="number-likes">${likes}</p>
                </li>
                <li class="list-cart">
                    <p class="views-cart">Views</p>
                    <p class="number-views">${views}</p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart">comments</p>
                    <p class="number-comments">${comments}</p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart">downloads</p>
                    <p class="number-downloads">${downloads}</p>
                </li>
            </ul>
        </img>
    </li>
    `).join(``)
}


let inputTextUser = "";

function handleSubmit(event) {
  inputTextUser = (event.currentTarget.value).trim();
  // console.log("inputTextUser", inputTextUser)  //  перевірка введеного аргументу
    return inputTextUser;
}



// ------  EXPORT  ------
export { inputTextUser, createMarcup, handleSubmit };

