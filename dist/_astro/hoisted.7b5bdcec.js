import"./hoisted.ffe11c2e.js";const t=document.getElementById("dictionary-modal"),s=document.getElementById("modal-content"),c=document.getElementById("modal-title"),l=document.getElementById("modal-definition"),d=document.getElementById("modal-example"),m=document.getElementById("modal-close"),r=document.querySelectorAll("[data-modal-trigger]");function y(e,o,n){c.textContent=e,l.textContent=o,n?(d.textContent=`Example: ${n}`,d.classList.remove("hidden")):(d.textContent="",d.classList.add("hidden")),t.classList.remove("hidden"),requestAnimationFrame(()=>{t.classList.remove("opacity-0"),s.classList.remove("scale-95","opacity-0")})}function a(){t.classList.add("opacity-0"),s.classList.add("scale-95","opacity-0"),setTimeout(()=>{t.classList.add("hidden")},300)}r.forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.term,n=e.dataset.definition,i=e.dataset.example;y(o,n,i)})});m.addEventListener("click",a);t.addEventListener("click",e=>{e.target===t&&a()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!t.classList.contains("hidden")&&a()});
