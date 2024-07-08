import{S as p,i as m}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="44770113-cb4279c01992ac20f8c79d080";function f(i){return fetch(`https://pixabay.com/api/?key=${d}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const y=document.querySelector(".gallery");function g(i){const r=i.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:o,comments:a,downloads:u})=>`
        <li class="container-list">
            <a class="gallery-link" href="${l}">
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
                    <p class="number-downloads">${u}</p>
                </li>
            </ul>
        </img>
        </a>
    </li>
    `).join("");y.insertAdjacentHTML("beforeend",r)}const h=document.querySelector(".form"),b=document.querySelector(".gallery"),n=document.querySelector(".loading");let w=new p(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});n.style.display="none";h.addEventListener("submit",L);let c="";n.style.display="visibility";function L(i){i.preventDefault(),n.style.display="visibility";const r=i.target;c=r.elements.input.value.trim(),c!==""&&(f(c).then(s=>{Number(s.hits.length)===0?m.show({title:"Sorry, there are no images matching your search query. Please try again!"}):(b.innerHTML="",g(s.hits),w.refresh())}).catch(s=>console.log("error",s)),r.reset(),n.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
