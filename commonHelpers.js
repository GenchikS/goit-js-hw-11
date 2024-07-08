import{S as u,i as p}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="44770113-cb4279c01992ac20f8c79d080";function f(o){return fetch(`https://pixabay.com/api/?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const d=document.querySelector(".gallery");function y(o){const r=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:t,views:i,comments:n,downloads:a})=>`
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
                    <p class="number-views">${i}</p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart">comments</p>
                    <p class="number-comments">${n}</p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart">downloads</p>
                    <p class="number-downloads">${a}</p>
                </li>
            </ul>
        </img>
        </a>
    </li>
    `).join("");d.insertAdjacentHTML("beforeend",r)}const g=document.querySelector(".form"),h=document.querySelector(".gallery");let b=new u(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});g.addEventListener("submit",w);let l="";function w(o){o.preventDefault();const r=o.target;l=r.elements.input.value.trim(),l!==""&&(f(l).then(s=>{Number(s.hits.length)===0?p.show({title:"Sorry, there are no images matching your search query. Please try again!"}):(h.innerHTML="",y(s.hits),b.refresh())}).catch(s=>console.log("error",s)),r.reset())}
//# sourceMappingURL=commonHelpers.js.map
