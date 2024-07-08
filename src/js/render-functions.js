const jsList = document.querySelector(".js-list");

function renderMarcup(arr) {
    // console.log("arr", arr)  //  перевірка масиву

    const marcup =  arr.map(
        ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
        <li class="container-list">
            <a class="gallery-link" href="${largeImageURL}">
            <img class="img-list" src="${webformatURL}" alt="${tags}">
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
        </a>
    </li>
    `).join(``)

    jsList.insertAdjacentHTML("beforeend", marcup);  //  ф-ція виклику створення скелету розмітки
}






// ------  EXPORT  ------
export {renderMarcup};

