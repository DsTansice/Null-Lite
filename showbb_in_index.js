function getbbdata(){var bbsurl=bbShortApiUrl,httpRequest=new XMLHttpRequest;httpRequest.open("GET",bbsurl,!0),httpRequest.send(),httpRequest.onreadystatechange=function(){if(4==httpRequest.readyState&&200==httpRequest.status){var json=httpRequest.responseText,obj=eval("("+json+")");const bbArray=obj.data.map((e=>({date:e.date,content:e.content,from:e.from})));saveToLocal.set("zhheo-bb",JSON.stringify(bbArray),5/1440);const data=saveToLocal.get("zhheo-bb");generateBBHtml(JSON.parse(data))}}}var generateBBHtml=e=>{var t=document.querySelector("#bber-talk"),a="";if(e.length)for(let t=0;t<e.length;t++){a+=`<div class='li-style swiper-slide'>${e[t].content.replace(/(https?:[^:<>"]*\/)([^:<>"]*)(\.((png!thumbnail)|(png)|(jpg)|(webp)|(jpeg)|(gif))(!blogimg)?)/g," [图片] ")}</div>`}else a+='!{_p("aside.card_funds.zero")}';(t=document.querySelector("#bber-talk")).innerHTML=a,window.lazyLoadInstance&&window.lazyLoadInstance.update(),window.pjax&&window.pjax.refresh(t);new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!0}})},bbInit=()=>{if(document.querySelector("#bber-talk")){const e=saveToLocal.get("zhheo-bb");e?generateBBHtml(JSON.parse(e)):getbbdata()}};bbInit(),document.addEventListener("pjax:complete",bbInit);