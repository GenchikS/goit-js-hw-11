(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function u(e){return e.map(({})=>`
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
    `).join("")}let s="";function p(e){return s=e.currentTarget.value.trim(),s}const d="44770113-cb4279c01992ac20f8c79d080";function i(){return fetch(`https://pixabay.com/api/?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}i().then(e=>e).catch(e=>console.log("error",e));const f=document.querySelector(".list"),l=document.querySelector(".input-text"),m=document.querySelector(".input-button");l.addEventListener("input",p);m.addEventListener("click",h);function h(){s!==""&&(i(),i().then(e=>y(e.hits)).catch(e=>console.log("error",e)),l.value="")}function y(e){f.insertAdjacentHTML("beforeend",u(e))}
//# sourceMappingURL=commonHelpers.js.map
