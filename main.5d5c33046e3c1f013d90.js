(()=>{"use strict";window.addEventListener("DOMContentLoaded",(function(){(function(){var e=document.querySelector(".select"),t=e.querySelector(".select__button"),n=e.querySelector(".options");t.addEventListener("click",(function(){t.classList.contains("select__button_active")?c():s()})),n.addEventListener("click",(function(t){var n=t.target;if(n&&n.classList.contains("options__item")){var s=n.innerText;e.querySelector(".select__title").innerText=s,c()}}));var s=function(){t.classList.add("select__button_active"),n.classList.add("options_show"),e.classList.add("select_active")},c=function(){t.classList.remove("select__button_active"),n.classList.remove("options_show"),e.classList.remove("select_active")}})(),function(){var e=document.querySelector(".range"),t=document.querySelector(".range__value");e.addEventListener("input",(function(e){t.textContent="".concat(e.target.value,"%")}))}(),function(){var e=document.querySelector(".hamburger"),t=document.querySelector(".hamburger__line"),n=document.querySelector(".menu"),s=document.body,c=document.querySelector(".overlay");e.addEventListener("click",(function(){e.classList.contains("hamburger_open")?r():o()})),c.addEventListener("click",(function(){r()}));var o=function(){e.classList.add("hamburger_open"),t.classList.add("hamburger__line_hide"),n.classList.add("menu_hamburger_open"),s.classList.add("body_scroll_none"),c.classList.add("overlay_show")},r=function(){e.classList.remove("hamburger_open"),t.classList.remove("hamburger__line_hide"),n.classList.remove("menu_hamburger_open"),s.classList.remove("body_scroll_none"),c.classList.remove("overlay_show")}}()}))})();