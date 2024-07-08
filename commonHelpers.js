import{i as m,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();document.querySelector(".img-list");function f(e){return Number(e.length)===0&&m.show({title:"Sorry, there are no images matching your search query. Please try again!"}),e.map(({webformatURL:s,largeImageURL:c,tags:n,likes:t,views:r,comments:i,downloads:p})=>`
        <li class="container-list">
            <a class="gallery-link" href="${c}">
            <img class="img-list" src="${s}" alt="${n}">
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
    `).join("")}let o="";function h(e){return o=e.currentTarget.value.trim(),o}const y="44770113-cb4279c01992ac20f8c79d080";function l(){return fetch(`https://pixabay.com/api/?key=${y}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}l().then(e=>e).catch(e=>console.log("error",e));const a=document.querySelector(".js-list"),u=document.querySelector(".input-text"),g=document.querySelector(".input-button"),b=document.querySelector(".gallery");u.addEventListener("input",h);g.addEventListener("click",L);function L(){a.innerHTML="",o!==""&&(l(),l().then(e=>S(e.hits)).catch(e=>console.log("error",e)),u.value="")}function S(e){a.insertAdjacentHTML("beforeend",f(e))}b.addEventListener("click",w);function w(){new d(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map
