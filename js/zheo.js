document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("site-name");let o=n&&n.offsetWidth;const i=document.querySelector("#menus .menus_items");let a=i&&i.offsetWidth;const s=document.querySelector("#search-button");let c=s&&s.offsetWidth;function m(){var e=GLOBAL_CONFIG.highlight;if(e){var t=e.highlightCopy,n=e.highlightLang,o=GLOBAL_CONFIG_SITE.isHighlightShrink;const l=e.highlightHeightLimit,d=t||n||void 0!==o;var i="highlighjs"===e.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if((d||l)&&i.length){const r="prismjs"===e.plugin;let a="",s="";const u=!0===o?"closed":"",m=(void 0!==o&&(a=`<i class="fas fa-angle-down expand ${u}"></i>`),t&&(s='<div class="copy-notice"></div><i class="fas fa-copy copy-button"></i>'),e=>{var t=e.parentNode,n=(t.classList.add("copy-true"),window.getSelection()),o=document.createRange(),o=(r?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o),n.toString(),e.lastChild);if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const i=o.previousElementSibling;i.innerText=GLOBAL_CONFIG.copy.success,i.style.opacity=1,setTimeout(()=>{i.style.opacity=0},700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):o.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport;n.removeAllRanges(),t.classList.remove("copy-true")}),f=e=>{var t=[...e.parentNode.children].slice(1);e.firstChild.classList.toggle("closed"),btf.isHidden(t[t.length-1])?t.forEach(e=>{e.style.display="block"}):t.forEach(e=>{e.style.display="none"})},h=function(e){e=e.target.classList;e.contains("expand")?f(this):e.contains("copy-button")&&m(this)},g=function(){this.classList.toggle("expand-done")};function c(e,t,n){var o,i=document.createDocumentFragment();d&&((o=document.createElement("div")).className="highlight-tools "+u,o.innerHTML=a+e+s,o.addEventListener("click",h),i.appendChild(o)),l&&t.offsetHeight>l+30&&((e=document.createElement("div")).className="code-expand-btn",e.innerHTML='<i class="fas fa-angle-double-down"></i>',e.addEventListener("click",g),i.appendChild(e)),"hl"===n?t.insertBefore(i,t.firstChild):t.parentNode.insertBefore(i,t)}n?r?i.forEach(function(e){var t=`<div class="code-lang">${e.getAttribute("data-language")?e.getAttribute("data-language"):"Code"}</div>`;btf.wrap(e,"figure","","highlight"),c(t,e)}):i.forEach(function(e){let t=e.getAttribute("class").split(" ")[1];c(`<div class="code-lang">${t="plain"!==t&&void 0!==t?t:"Code"}</div>`,e,"hl")}):r?i.forEach(function(e){btf.wrap(e,"figure","","highlight"),c("",e)}):i.forEach(function(e){c("",e,"hl")})}}}const f=(e=!1)=>{e&&(o=n&&n.offsetWidth,a=i&&i.offsetWidth,c=s&&s.offsetWidth);e=document.getElementById("nav");let t;(t=window.innerWidth<768||o+a+c>e.offsetWidth-120)?e.classList.add("hide-menu"):e.classList.remove("hide-menu")};let l=!1;function h(){const s=document.getElementById("rightside"),c=window.innerHeight+0;if(console.log("滚动处理运行"),document.body.scrollHeight<=c)s.style.cssText="opacity: 1; transform: translateX(-38px)";else{let i=0,a=!0;const l=document.getElementById("page-header");document.getElementById("guli_top");const d=document.getElementById("cookies-window"),r="function"==typeof chatBtnHide,u="function"==typeof chatBtnShow;window.addEventListener("scroll",btf.throttle(function(e){var t,n,o=window.scrollY||document.documentElement.scrollTop;n=(t=o)>i,i=t,0<o?(n?(l.classList.contains("nav-visible")&&l.classList.remove("nav-visible"),u&&!0===a&&(chatBtnHide(),a=!1)):(l.classList.contains("nav-visible")||l.classList.add("nav-visible"),r&&!1===a&&(chatBtnShow(),a=!0)),l.classList.add("nav-fixed"),d.classList.add("cw-hide"),"0"===window.getComputedStyle(s).getPropertyValue("opacity")&&(s.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===o&&l.classList.remove("nav-fixed","nav-visible"),s.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=c&&(s.style.cssText="opacity: 1; transform: translateX(-38px)")},200))}}function g(){const e=document.getElementById("card-toc"),s=e.getElementsByClassName("toc-content")[0],c=s.querySelectorAll(".toc-link"),i=document.getElementById("article-container"),t=(window.tocScrollFn=function(){return btf.throttle(function(){var e=window.scrollY||document.documentElement.scrollTop;t(e),o(e)},100)()},window.addEventListener("scroll",tocScrollFn),function(e){var t=i.clientHeight,n=document.documentElement.clientHeight,o=i.offsetTop,t=n<t?t-n:document.documentElement.scrollHeight-n,n=Math.round(100*((e-o)/t)),e=100<n?100:n<=0?0:n;s.setAttribute("progress-percentage",e)}),l=GLOBAL_CONFIG.isanchor,n={open:()=>{e.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},close:()=>{e.style.animation="toc-close .2s",setTimeout(()=>{e.style.cssText="opacity:''; animation: ''; right: ''"},100)}},d=(document.getElementById("mobile-toc-button").addEventListener("click",()=>{"0"===window.getComputedStyle(e).getPropertyValue("opacity")?n.open():n.close()}),s.addEventListener("click",e=>{e.preventDefault();e=e.target.classList.contains("toc-link")?e.target:e.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&n.close()}),i.querySelectorAll("h1,h2,h3,h4,h5,h6"));let r="";const o=function(n){if(0===c.length||0===n)return!1;let o="",i="";var e,t;if(d.forEach(function(e,t){n>btf.getEleTop(e)-80&&(o="#"+encodeURI(e.getAttribute("id")),i=t)}),r!==i)if(l&&(e=o,window.history.replaceState)&&e!==window.location.hash&&(e=e||location.pathname,t=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:t},t,e)),""===o)s.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),r=i;else{r=i,s.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")});const a=c[i];a.classList.add("active"),setTimeout(()=>{var e,t;e=(e=a).getBoundingClientRect().top,t=s.scrollTop,e>document.documentElement.clientHeight-100&&(s.scrollTop=t+150),e<100&&(s.scrollTop=t-150)},0);let e=a.parentNode;for(;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}function p(e){e.forEach(e=>{var t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}const y=()=>{const i="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img,.bber-content-img > img"):[],a=0<i.length,s=document.querySelectorAll("#article-container .justified-gallery"),c=0<s.length;(c||a)&&btf.isJqueryLoad(()=>{if(c){var e=s;const n=$(e);(e=n.find("img")).unwrap(),e.length&&e.each(function(e,t){$(t).attr("data-lazy-src")&&$(t).attr("src",$(t).attr("data-lazy-src")),$(t).wrap("<div></div>")}),l?btf.initJustifiedGallery(n):($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.justifiedGallery.css}">`),$.getScript(""+GLOBAL_CONFIG.source.justifiedGallery.js,function(){btf.initJustifiedGallery(n)}),l=!0)}if(a){var t=i;const o=e=>{e.each(function(e,t){var t=$(t),n=t.attr("data-lazy-src")||t.attr("src"),o=n+"_1600w",i=t.attr("alt")||"";-1!=n.indexOf("!blogimg")?t.wrap(`<a href="${n}" data-fancybox="images" data-caption="${i}" class="fancybox" data-srcset="${o} 1600w"></a>`):t.wrap(`<a href="${n}" data-fancybox="images" data-caption="${i}" class="fancybox" data-srcset="${n} 1600w"></a>`)}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})};void 0===$.fancybox?($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.fancybox.css}">`),$.getScript(""+GLOBAL_CONFIG.source.fancybox.js,function(){o($(t))})):o($(t))}})},t={switchReadMode:()=>{const t=document.body,n=(t.classList.add("read-mode"),document.createElement("button"));n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},switchDarkMode:()=>{"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night,!1,2e3)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day,!1,2e3)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(()=>window.disqusReset(),200)},showOrHideBtn:()=>{document.getElementById("rightside-config-hide").classList.toggle("show")},scrollToTop:()=>{btf.scrollToDest(0,500)},hideAsideBtn:()=>{var e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},adjustFontSize:e=>{var t=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size"));let n="";if(e){if(20<=t)return;n=t+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||f(!0)}else{if(t<=10)return;n=t-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&f(!0)}saveToLocal.set("global-font-size",n,2)}},L=(document.getElementById("rightside").addEventListener("click",function(e){switch(e.target.id||e.target.parentNode.id){case"go-up":t.scrollToTop();break;case"rightside_config":t.showOrHideBtn();break;case"readmode":t.switchReadMode();break;case"darkmode":t.switchDarkMode();break;case"hide-aside-btn":t.hideAsideBtn();break;case"font-plus":t.adjustFontSize(!0);break;case"font-minus":t.adjustFontSize()}}),{clickFnOfTabs:function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){var t=this.parentNode;if(!t.classList.contains("active")){var n=t.parentNode.nextElementSibling,o=btf.siblings(t,".active")[0];o&&o.classList.remove("active"),t.classList.add("active");const i=this.getAttribute("data-href").replace("#","");[...n.children].forEach(e=>{e.id===i?e.classList.add("active"):e.classList.remove("active")});o=n.querySelectorAll(`#${i} .justified-gallery`);0<o.length&&btf.initJustifiedGallery(o)}})})},backToTop:()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})}});if(window.refreshFn=function(){var e,t,n,o,i;f(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&g(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(n=GLOBAL_CONFIG.noticeOutdate,(o=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=n.limitDay)&&((t=document.createElement("div")).className="post-outdate-notice",t.textContent=n.messagePrev+" "+o+" "+n.messageNext,o=document.getElementById("article-container"),"top"===n.position?o.insertBefore(t,o.firstChild):o.appendChild(t)),GLOBAL_CONFIG.relativeDate.post&&p(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&p(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(n=document.getElementById("runtimeshow"))&&(o=n.getAttribute("data-publishDate"),n.innerText=btf.diffDate(o)+" "+GLOBAL_CONFIG.runtime),(t=document.getElementById("last-push-date"))&&(e=t.getAttribute("data-lastPushDate"),t.innerText=btf.diffDate(e,!0)),(e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();this.classList.toggle("expand");e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})}));{const c=document.getElementById("toggle-menu"),l=document.getElementById("sidebar-menus"),d=document.getElementById("menu-mask"),r=document.body;function a(){r.style.overflow="",r.style.paddingRight="",btf.fadeOut(d,.5),l.classList.remove("open")}c.addEventListener("click",function(){btf.sidebarPaddingR(),r.style.overflow="hidden",btf.fadeIn(d,.5),l.classList.add("open")}),d.addEventListener("click",e=>{l.classList.contains("open")&&a()}),window.addEventListener("resize",e=>{btf.isHidden(c)&&l.classList.contains("open")&&a()})}if(GLOBAL_CONFIG_SITE.isHome&&(i=document.getElementById("scroll-down"))&&i.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),m(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){var t,n=e.parentNode;n.parentNode.classList.contains("justified-gallery")||((t=document.createElement("div")).className="img-alt is-center",t.textContent=e.getAttribute("alt"),n.insertBefore(t,e.nextSibling))}),y(),"mediumZoom"===GLOBAL_CONFIG.lightbox){const u=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));u.on("open",e=>{var t="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";u.update({background:t})})}h(),(i=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&i.forEach(e=>{btf.wrap(e,"div","","table-wrap")}),(s=document.querySelectorAll("#article-container .hide-button")).length&&s.forEach(function(e){e.addEventListener("click",function(e){var t=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<t.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(t.querySelectorAll(".justified-gallery"))})}),L.clickFnOfTabs(),L.backToTop();{let e=!1;var s=document.querySelector("#comment-switch > .switch-btn");s&&s.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())})}},refreshFn(),window.addEventListener("resize",f),window.addEventListener("orientationchange",()=>{setTimeout(f(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide");var e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})}),window.addEventListener("touchmove",function(e){document.querySelectorAll("#nav .menus_item_child").forEach(e=>{btf.isHidden(e)||(e.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright){const d=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{e.preventDefault();let t;var n=window.getSelection(0).toString();return t=n.length>d.limitCount?n+"\n\n\n"+d.languages.author+"\n"+d.languages.link+window.location.href+"\n"+d.languages.source+"\n"+d.languages.info:n,(e.clipboardData?e:window).clipboardData.setData("text",t)}}});