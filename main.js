(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-11",headers:{authorization:"1db3da4a-efad-4feb-9989-c96ba7482af2","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("HTTP error! Status: ".concat(e.status))}function n(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}function r(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}var o=document.querySelector("#card-template").content;function c(e,t,n,r,o,c){var a=e.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__delete-button"),u=a.querySelector(".card__like-button"),l=a.querySelector(".card__image"),s=a.querySelector(".card__like-number"),d=t._id;return l.src=t.link,l.alt=t.name,a.querySelector(".card__title").textContent=t.name,t.owner._id===c?i.addEventListener("click",(function(e){return n(e,d)})):i.style.display="none",t.likes.some((function(e){return e._id===c}))&&u.classList.add("card__like-button_is-active"),s.textContent=t.likes.length,u.addEventListener("click",(function(e){r(e,d,s)})),l.addEventListener("click",(function(){o(t.name,t.link)})),t.owner._id===c?i.addEventListener("click",(function(e){return n(e,d)})):i.setAttribute("hidden",!0),a}function a(n,r){var o;(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function i(e,t,o){(e.target.classList.contains("card__like-button_is-active")?r:n)(t).then((function(t){e.target.classList.toggle("card__like-button_is-active"),o.textContent=t.likes.length})).catch((function(e){console.log(e)}))}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",s),e.addEventListener("mousedown",d)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s),e.removeEventListener("mousedown",d)}function s(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&l(t)}}function d(e){e.target===e.currentTarget&&l(e.currentTarget)}var f=function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},_=document.querySelector(".places__list"),h=document.querySelector(".profile__edit-button"),S=document.querySelector(".popup_type_edit"),b=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_new-card"),g=document.forms["edit-profile"],q=g.elements.name,C=g.elements.description,L=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),A=g.querySelector(".popup__button"),w=document.forms["new-place"],x=w.elements["place-name"],T=w.elements.link,U=w.querySelector(".popup__button"),j=document.querySelector(".popup_type_avatar"),O=document.querySelector(".profile__image"),P=document.forms["new-avatar"],B=P.elements.link,D=P.querySelector(".popup__button"),I=document.querySelector(".profile__image_cover"),M=document.querySelector('form[name="edit-profile"]'),N=document.querySelector(".popup_type_image"),H=N.querySelector(".popup__image"),J=N.querySelector(".popup__caption"),V=document.querySelectorAll(".popup__close");function z(e,t){u(N),H.src=t,H.alt=e,J.textContent=e}function $(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=Array.from(e.querySelectorAll(t.errorClass)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){f(e,n,t)})),r.forEach((function(e){e.textContent=""})),p(n,o,t)}function F(e,t){t.textContent=e?"Сохранение...":"Сохранить"}Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0],l=r[1];k.textContent=l.about,L.textContent=l.name,O.style="background-image: url('".concat(l.avatar,"')"),v=l._id,u.forEach((function(e){_.append(c(o,e,a,i,z,v))}))})).catch((function(e){console.error("Error in server! Status: ".concat(e))})),g.addEventListener("submit",(function(n){var r,o;n.preventDefault(),F(!0,A),(r=q.value,o=C.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){L.textContent=e.name,k.textContent=e.about,l(S)})).catch((function(e){console.log("Error in edit profile! Status: ".concat(e))})).finally((function(){F(!1,A)}))})),w.addEventListener("submit",(function(n){var r,u;n.preventDefault(),F(!0,U),(r=x.value,u=T.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:u})}).then(t)).then((function(e){var t=c(o,e,a,i,z,v);_.prepend(t),$(w,y),l(E),w.reset()})).catch((function(e){console.log("Error in new place! Status: ".concat(e))})).finally((function(){F(!1,U)}))})),P.addEventListener("submit",(function(n){var r;n.preventDefault(),F(!0,D),(r=B.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){O.style.backgroundImage="url('".concat(e.avatar,"')"),l(j)})).catch((function(e){console.log("Error in edit avatar! Status: ".concat(e))})).finally((function(){F(!1,D)}))})),h.addEventListener("click",(function(){$(g,y),q.value=L.textContent,C.value=k.textContent,$(g,y),u(S)})),b.addEventListener("click",(function(){$(w,y),u(E)})),I.addEventListener("click",(function(){$(M,y),u(j),P.reset()})),V.forEach((function(e){e.addEventListener("click",(function(){l(e.closest(".popup"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),p(n,r,t)}))}))}(t,e)}))}(y)})();