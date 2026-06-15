import{a as M,S as P,i as c}from"./assets/vendor-CIF6YjI2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const B="46393082-6436aef7da0980f5048308d07",q="https://pixabay.com/api/",m=async(t,o)=>{const i=new URLSearchParams({key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15});return(await M.get(`${q}?${i}`)).data},u=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),p=document.querySelector(".js-load-more-button"),$=new P(".gallery-link",{captionsData:"alt",captionDelay:250}),f=t=>{const o=t.map(({largeImageURL:i,webformatURL:r,tags:e,likes:s,views:n,comments:w,downloads:v})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${i}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${e}"
              />
            </a>

            <ul class="img-info-list">
              <li class="img-info-item">
                <p class="info-type">Likes</p>
                <p class="img-info">${s}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Views</p>
                <p class="img-info">${n}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Comments</p>
                <p class="img-info">${w}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Downloads</p>
                <p class="img-info">${v}</p>
              </li>
            </ul>
          </li>
        `).join("");u.insertAdjacentHTML("beforeend",o),$.refresh()},R=()=>{u.innerHTML=""},g=()=>{p.classList.add("is-active")},y=()=>{p.classList.remove("is-active")},h=()=>{d.classList.add("is-active")},L=()=>{d.classList.remove("is-active")},S={form:document.querySelector(".js-form"),loadMoreButton:document.querySelector(".js-load-more-button")};let l="",a=1;const b=15;async function j(t){t.preventDefault();const{target:o}=t,i=o.elements["search-text"].value.trim();if(!i){c.warning({message:"Search field cannot be empty. Please enter a keyword.",position:"topRight"});return}l=i,a=1,R(),y(),h();try{const r=await m(l,a);if(r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(r.hits);const e=Math.ceil(r.totalHits/b);a<e&&g()}catch(r){c.error({message:r.message||"Failed to load images!",position:"topRight"})}finally{L(),o.reset()}}async function O(){a+=1,y(),h();try{const t=await m(l,a);f(t.hits),x();const o=Math.ceil(t.totalHits/b);if(a>=o){c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}g()}catch(t){c.error({message:t.message||"Failed to load images!",position:"topRight"})}finally{L()}}function x(){const t=document.querySelector(".gallery-item");if(!t)return;const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}S.form.addEventListener("submit",j);S.loadMoreButton.addEventListener("click",O);
//# sourceMappingURL=index.js.map
