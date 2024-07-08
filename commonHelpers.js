import{i as m}from"./assets/vendor-8e8cd629.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();document.querySelector(".img-list");function d(e){return Number(e.length)===0&&m.show({title:"Sorry, there are no images matching your search query. Please try again!"}),e.map(({webformatURL:s,largeImageURL:o,tags:c,likes:t,views:r,comments:i,downloads:p})=>`
        <li class="container-list">
            <img class="img-list" src="${s}" alt="${c}">
            <a class="gallery-link" href="${o}">
            <ul class="container-cart">
                <li class="list-cart">
                    <p class="likes-cart">Likes</p>
                    <p class="number-likes">${t}</p>
                </li>
                <li class="list-cart">
                    <p class="views-cart">Views</p>
                    <p class="number-views">${r}</p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart">comments</p>
                    <p class="number-comments">${i}</p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart">downloads</p>
                    <p class="number-downloads">${p}</p>
                </li>
            </ul>
        </img>
    </li>
    `).join("")}let n="";function f(e){return n=e.currentTarget.value.trim(),n}const h="44770113-cb4279c01992ac20f8c79d080";function l(){return fetch(`https://pixabay.com/api/?key=${h}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}l().then(e=>e).catch(e=>console.log("error",e));const a=document.querySelector(".js-list"),u=document.querySelector(".input-text"),y=document.querySelector(".input-button");document.querySelector(".container-list");u.addEventListener("input",f);y.addEventListener("click",g);function g(){a.innerHTML="",n!==""&&(l(),l().then(e=>b(e.hits)).catch(e=>console.log("error",e)),u.value="")}function b(e){a.insertAdjacentHTML("beforeend",d(e))}
//# sourceMappingURL=commonHelpers.js.map
