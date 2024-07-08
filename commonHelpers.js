import{i as u}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();document.querySelector(".img-list");function p(e){return console.log("arr",e),Number(e.length)===0&&u.show({title:"Sorry, there are no images matching your search query. Please try again!"}),e.map(({webformatURL:s,tags:n,likes:o,views:t,comments:r,downloads:i})=>`
        <li class="container-list">
            <img class="img-list" src="${s}" alt="${n}">
            <ul class="container-cart">
                <li class="list-cart">
                    <p class="likes-cart">Likes</p>
                    <p class="number-likes">${o}</p>
                </li>
                <li class="list-cart">
                    <p class="views-cart">Views</p>
                    <p class="number-views">${t}</p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart">comments</p>
                    <p class="number-comments">${r}</p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart">downloads</p>
                    <p class="number-downloads">${i}</p>
                </li>
            </ul>
        </img>
    </li>
    `).join("")}let c="";function m(e){return c=e.currentTarget.value.trim(),c}const d="44770113-cb4279c01992ac20f8c79d080";function l(){return fetch(`https://pixabay.com/api/?key=${d}&q=${c}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}l().then(e=>e).catch(e=>console.log("error",e));const f=document.querySelector(".js-list"),a=document.querySelector(".input-text"),h=document.querySelector(".input-button");a.addEventListener("input",m);h.addEventListener("click",g);function g(){c!==""&&(l(),l().then(e=>y(e.hits)).catch(e=>console.log("error",e)),a.value="")}function y(e){f.insertAdjacentHTML("beforeend",p(e))}
//# sourceMappingURL=commonHelpers.js.map
