import"./hoisted.CsxoUaLs.js";const l=()=>{function t(r,f){r.forEach(d=>{const n=document.querySelector(`aside a[href="#${d.target.id}"]`);d.isIntersecting?(n?.classList.remove("bg-slate-200","dark:bg-slate-800"),n?.classList.add("bg-indigo-600","dark:bg-indigo-700","text-white","font-bold","transition-colors","duration-200")):(n?.classList.add("bg-slate-200","dark:bg-slate-800"),n?.classList.remove("bg-indigo-600","dark:bg-indigo-700","text-white","font-bold","transition-colors","duration-200"));const c=n?.getBoundingClientRect();if(c&&(c.top<0||c.bottom>window.innerHeight)){const i=document.querySelector(".sidebar"),a=i?.getBoundingClientRect();if(!a||!i)return;const b=c.top-a.top-i.clientHeight/2;i.scrollTop+=b}})}const e=document.querySelectorAll("div.prose h1, div.prose h2, div.prose h3, div.prose h4, div.prose h5, div.prose h6"),o={root:null,rootMargin:" 15% 0px 0% 0px ",threshold:1},s=new IntersectionObserver(t,o);e.forEach(r=>{s.observe(r)})};l();document.addEventListener("astro:after-swap",l);const m=document.getElementById("to-top-btn");m.addEventListener("click",()=>{document.documentElement.scrollTo({behavior:"smooth",top:0})});const u=()=>{document.querySelectorAll("pre").forEach(e=>{const o=e.querySelector(".copy-button"),s=e.querySelector(".check-span");o.addEventListener("click",()=>{navigator.clipboard.writeText(e.textContent?.trim()||""),s?.classList.remove("opacity-0"),o?.classList.add("opacity-0"),setTimeout(()=>{s?.classList.add("opacity-0"),o?.classList.remove("opacity-0")},2e3)})})};u();document.addEventListener("astro:after-swap",u);const g=document.getElementById("headlessui-dialog-:Rlb6:"),v=document.getElementById("close-dialog-page");g?.addEventListener("click",function(t){const e=document.querySelector("#toc_content");!e||e.contains(t.target)||p()});v?.addEventListener("click",function(t){p()});const h=document.body;function p(){g?.classList.add("hidden"),h.style.overflow=""}