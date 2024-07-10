import SimpleLightbox from "simplelightbox";
// console.log(SimpleLightbox)  //  перевірка підключення бібліотеки
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import {renderMarcup} from "./js/render-functions";
import { getImages } from "./js/pixabay-api";

const inputForm = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loading = document.querySelector(".loading");

let userPhoto = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

loading.style.display = "none";

inputForm.addEventListener(`submit`, handleSubmit);

let inputText = "";

loading.style.display = "visibility";

function handleSubmit(event) {
  event.preventDefault();
  loading.style.display = "visibility";
  const form = event.target;  //  доступ до форми
  inputText = (form.elements.input.value).trim();  //  отримання значення вводу в форму інпут + прибирання пробілів
  // console.log("eventTarget", inputText)  //  перевірка введеного значення
  if (inputText === "") {
    return
  } else {
    getImages(inputText)
      .then((data) => {
        // console.log("data", data.hits)  //  перевірка отриманого масиву
        if (Number(data.hits.length) === 0) {  //  умова перевірки на пустий масив
          iziToast.show({   //  підключення бібліотеки iziToast
            title: 'Sorry, there are no images matching your search query. Please try again!'
          });
        } else {
          gallery.innerHTML = "";  //  очистка попереднього контенту
          // iziToast.show({   //  підключення бібліотеки iziToast
          //   title: 'Loading images, please wait ... ', timeout: 250, position: 'topCenter'
          // });
          renderMarcup(data.hits)
          userPhoto.refresh();  //  виклик та можливість зміни фото в модальному вікні
        }
       
      })  //  при response звернення іде до ключа hits та викликається ф-ція виклику створення скелету розмітки з отриманим масивом
      .catch((err) => console.log("error", err))
    }
  form.reset();
  loading.style.display = "none";
}













