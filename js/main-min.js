!function(e){e(document).ready(function(){!function(){const e=document.querySelector("body"),t=document.querySelector(".burger"),o=document.querySelector(".header__nav"),c=o.querySelectorAll("a");t.addEventListener("click",()=>{let c=t.classList.contains("active");c?(window.scrollY,t.classList.remove("active"),o.classList.remove("active"),e.classList.remove("lock")):(t.classList.add("active"),o.classList.add("active"),e.classList.add("lock"))}),c.forEach(c=>{c.addEventListener("click",()=>{t.classList.contains("active");t.classList.remove("active"),o.classList.remove("active"),e.classList.remove("lock")})})}(),e(document).on("scroll",function(){e(document).scrollTop()>0?e(".header").addClass("fixed"):e(".header").removeClass("fixed")}),e(".approved__list").length&&e(".approved__list").slick({infinite:!0,dots:!1,arrows:!1,autoplay:!0,autoplaySpeed:2e3,slidesToShow:3,slidesToScroll:1,variableWidth:!0});const t=document.querySelectorAll('a[href^="#"]');for(let e of t)e.addEventListener("click",function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(""+o).classList.add("scroll-margin-top"),document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})});const o=document.querySelector(".office"),c=document.querySelector(".partners");function l(e){const t=e.querySelector(".btn__more"),o=e.querySelector(".hiden-zone"),c=o.querySelector("li").offsetHeight;o.style.maxHeight=2*c+10+"px",o.style.overflow="hidden",t.addEventListener("click",function(e){o.style.maxHeight="2000px",t.style.display="none"})}l(o),l(c),Fancybox.bind('[data-fancybox="gallery"]',{Toolbar:{display:{left:["infobar"],middle:[],right:["close"]}}})})}(jQuery);