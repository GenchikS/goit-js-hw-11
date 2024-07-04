
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



// ------  EXPORT  ------
export {createMarcup};
