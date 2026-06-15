import{a as f,S as u,i as n}from"./assets/vendor-CIF6YjI2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="46393082-6436aef7da0980f5048308d07",d="https://pixabay.com/api/",y=async(i,s)=>{const o=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15});return(await f.get(`${d}?${o}`)).data},l=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader");document.querySelector(".js-load-more-button");const h=new u(".gallery-link",{captionsData:"alt",captionDelay:250}),L=i=>{const s=i.map(({largeImageURL:o,webformatURL:r,tags:e,likes:t,views:a,comments:m,downloads:p})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${o}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${e}"
              />
            </a>

            <ul class="img-info-list">
              <li class="img-info-item">
                <p class="info-type">Likes</p>
                <p class="img-info">${t}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Views</p>
                <p class="img-info">${a}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Comments</p>
                <p class="img-info">${m}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Downloads</p>
                <p class="img-info">${p}</p>
              </li>
            </ul>
          </li>
        `).join("");l.insertAdjacentHTML("beforeend",s),h.refresh()},S=()=>{l.innerHTML=""},b=()=>{c.classList.add("is-active")},w=()=>{c.classList.remove("is-active")},$={form:document.querySelector(".js-form")};function P(i){i.preventDefault();const{target:s}=i,o=s.elements["search-text"].value.trim();if(!o){n.warning({message:"Search field cannot be empty. Please enter a keyword.",position:"topRight"});return}S(),b(),y(o).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}).catch(r=>{n.error({message:r.message||"Failed to load images!",position:"topRight"})}).finally(()=>{w(),s.reset()})}$.form.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
