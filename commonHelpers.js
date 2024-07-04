(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l="44770113-cb4279c01992ac20f8c79d080";fetch(`https://pixabay.com/api/?key=${l}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()});function n(s){return s.map(({})=>`
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
    `).join("")}const d=[{id:1,model:"Honda",type:"Civic",price:12e3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU"},{id:2,model:"Audi",type:"Q7",price:4e4,img:"https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg"},{id:3,model:"BMW",type:"5 series",price:9e3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU"},{id:4,model:"Honda",type:"Accord",price:2e4,img:"https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg"},{id:5,model:"Volvo",type:"XC60",price:7e3,img:"https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320"}],o=document.querySelector(".list");console.log("list",o);o.insertAdjacentHTML("beforeend",n(d));
//# sourceMappingURL=commonHelpers.js.map
