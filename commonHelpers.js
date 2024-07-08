import{S as u,i as p}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="44770113-cb4279c01992ac20f8c79d080";function f(i){return fetch(`https://pixabay.com/api/?key=${m}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const d=document.querySelector(".js-list");function h(i){const r=i.map(({webformatURL:s,largeImageURL:c,tags:e,likes:t,views:o,comments:a,downloads:l})=>`
        <li class="container-list">
            <a class="gallery-link" href="${c}">
            <img class="img-list" src="${s}" alt="${e}">
            <ul class="container-cart">
                <li class="list-cart">
                    <p class="likes-cart">Likes</p>
                    <p class="number-likes">${t}</p>
                </li>
                <li class="list-cart">
                    <p class="views-cart">Views</p>
                    <p class="number-views">${o}</p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart">comments</p>
                    <p class="number-comments">${a}</p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart">downloads</p>
                    <p class="number-downloads">${l}</p>
                </li>
            </ul>
        </img>
        </a>
    </li>
    `).join("");d.insertAdjacentHTML("beforeend",r)}const y=document.querySelector(".form");document.querySelector(".gallery");new u(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});y.addEventListener("submit",g);let n="";function g(i){i.preventDefault();const r=i.target;n=r.elements.input.value.trim(),n!==""&&(f(n).then(s=>{Number(s.hits.length)===0?p.show({title:"Sorry, there are no images matching your search query. Please try again!"}):h(s.hits)}).catch(s=>console.log("error",s)),r.reset())}
//# sourceMappingURL=commonHelpers.js.map
