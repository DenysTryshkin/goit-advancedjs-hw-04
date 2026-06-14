import{a as p,S as u,i as n}from"./assets/vendor-CIF6YjI2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g=o=>{const s=new URLSearchParams({key:"46393082-6436aef7da0980f5048308d07",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get(`https://pixabay.com/api/?${s}`).then(i=>i.data)},l=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),d=new u(".gallery-link",{captionsData:"alt",captionDelay:250}),y=o=>{const s=o.map(({largeImageURL:i,webformatURL:r,tags:e,likes:t,views:a,comments:m,downloads:f})=>`
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
                <p class="img-info">${f}</p>
              </li>
            </ul>
          </li>
        `).join("");l.insertAdjacentHTML("beforeend",s),d.refresh()},h=()=>{l.innerHTML=""},L=()=>{c.classList.add("is-active")},S=()=>{c.classList.remove("is-active")},b={form:document.querySelector(".js-form")};function w(o){o.preventDefault();const{target:s}=o,i=s.elements["search-text"].value.trim();if(!i){n.warning({message:"Search field cannot be empty. Please enter a keyword.",position:"topRight"});return}h(),L(),g(i).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits)}).catch(r=>{n.error({message:r.message||"Failed to load images!",position:"topRight"})}).finally(()=>{S(),s.reset()})}b.form.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
