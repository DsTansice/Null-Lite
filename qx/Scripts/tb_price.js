const $tool=new Tool,path1="/amdc/mobileDispatch",path2="/gw/mtop.taobao.detail.getdetail",consoleLog=!1,url=$request.url;if(-1!=url.indexOf(path1))if($tool.isResponse){const $base64=new Base64;let body=$response.body,obj=JSON.parse($base64.decode(body)),dns=obj.dns;if(dns&&0<dns.length){let i=dns.length;for(;i--;){const element=dns[i];let host="trade-acs.m.taobao.com";element.host==host&&(element.ips=[],consoleLog)&&console.log(JSON.stringify(element))}}body=$base64.encode(JSON.stringify(obj)),$done({body:body})}else{let headers=$request.headers,body=$request.body;if(-1!=headers["User-Agent"].indexOf("%E6%89%8B%E6%9C%BA%E6%B7%98%E5%AE%9D")){let json=Qs2Json(body),domain=json.domain.split(" "),i=domain.length;for(;i--;){const block="trade-acs.m.taobao.com",element=domain[i];element==block&&domain.splice(i,1)}json.domain=domain.join(" "),body=Json2Qs(json)}$done({body:body})}if(-1!=url.indexOf(path2)){const body=$response.body;let obj=JSON.parse(body),item=obj.data.item,shareUrl="https://item.taobao.com/item.htm?id="+item.itemId;requestPrice(shareUrl,function(n){if(n)if(obj.data.apiStack){var i=obj.data.apiStack[0],s=JSON.parse(i.value);let e=null,t=null,r=null,o=null;o=(s.global?(e=s.global.data.tradeConsumerProtection,t=s.global.data.consumerProtection,r=s.global.data.trade,s.global.data):(e=s.tradeConsumerProtection,t=s.consumerProtection,r=s.trade,s)).vertical,r&&"true"==r.useWap?($done({body:body}),sendNotify(n,shareUrl)):(o&&o.hasOwnProperty("tmallhkDirectSale")?($done({body:body}),sendNotify(n,shareUrl)):e?e=setTradeConsumerProtection(n,e):t=setConsumerProtection(n,t),i.value=JSON.stringify(s),$done({body:JSON.stringify(obj)}))}else $done({body:body}),sendNotify(n,shareUrl);else $done({body:body})})}function sendNotify(e,t){var r,o,n;1==e.ok&&e.single&&(r=lowerMsgs(e.single)[0],o=priceSummary(e)[1],n=e.PriceRemark.Tip+"（仅供参考）",$tool.notify("","",`〽️历史${r} ${n}
${o}

👉查看详情：http://tool.manmanbuy.com/historyLowest.aspx?url=`+encodeURI(t))),0==e.ok&&0<e.msg.length&&$tool.notify("","","⚠️ "+e.msg)}function setConsumerProtection(e,t){var r,o,n,i=t.serviceProtection.basicService,s=t.items;return 1==e.ok&&e.single&&(o=lowerMsgs(e.single),n=e.PriceRemark.Tip,r=priceSummary(e)[1],o=customItem(o[1],[o[0]+` ${n}（仅供参考）
`+r]),i.services.unshift(o),s.unshift(o)),0==e.ok&&0<e.msg.length&&(n=customItem("暂无历史价格",[e.msg]),i.services.unshift(n),s.unshift(n)),t}function setTradeConsumerProtection(e,t){var r,o,n,i=t.tradeConsumerService.service;return 1==e.ok&&e.single&&(o=lowerMsgs(e.single),n=e.PriceRemark.Tip,r=priceSummary(e)[0],o=customItem(o[1],o[0]+` ${n}（仅供参考）`),n=t.tradeConsumerService.nonService,i.items=i.items.concat(n.items),n.title="价格详情",n.items=r,i.items.unshift(o)),0==e.ok&&0<e.msg.length&&i.items.unshift(customItem("暂无历史价格",e.msg)),t}function lowerMsgs(e){var t=e.lowerPriceyh,e=dateFormat(e.lowerDateyh);return["最低到手价：¥"+String(t)+`（${e}）`,"历史最低¥"+String(t)]}function priceSummary(e){let r=[],o="";var t=e.PriceRemark.ListPriceDetail;return t.pop(),t.concat(historySummary(e.single)).forEach((e,t)=>{"双11价格"==e.Name?e.Name="双十一价格":"618价格"==e.Name?e.Name="六一八价格":"30天最低价"==e.Name&&(e.Name="三十天最低"),o+=`
`+e.Name+getSpace(4)+e.Price+getSpace(4)+e.Date+getSpace(4)+e.Difference;e=""+e.Name+getSpace(4)+e.Price+getSpace(4)+e.Date+getSpace(4)+e.Difference;r.push(customItem(e))}),[r,o]}function historySummary(single){const rexMatch=/\[.*?\]/g,rexExec=/\[(.*),(.*),"(.*)".*\]/;let currentPrice,lowest60,lowest180,lowest360,list=single.jiagequshiyh.match(rexMatch);return list=list.reverse().slice(0,360),list.forEach((item,index)=>{if(0<item.length){const result=rexExec.exec(item),dateUTC=new Date(eval(result[1])),date=dateUTC.format("yyyy-MM-dd");let price=parseFloat(result[2]);0==index&&(currentPrice=price,lowest60={Name:"六十天最低",Price:"¥"+String(price),Date:date,Difference:difference(currentPrice,price),price:price},lowest180={Name:"一百八最低",Price:"¥"+String(price),Date:date,Difference:difference(currentPrice,price),price:price},lowest360={Name:"三百六最低",Price:"¥"+String(price),Date:date,Difference:difference(currentPrice,price),price:price}),index<60&&price<=lowest60.price&&(lowest60.price=price,lowest60.Price="¥"+String(price),lowest60.Date=date,lowest60.Difference=difference(currentPrice,price)),index<180&&price<=lowest180.price&&(lowest180.price=price,lowest180.Price="¥"+String(price),lowest180.Date=date,lowest180.Difference=difference(currentPrice,price)),index<360&&price<=lowest360.price&&(lowest360.price=price,lowest360.Price="¥"+String(price),lowest360.Date=date,lowest360.Difference=difference(currentPrice,price))}}),[lowest60,lowest180,lowest360]}function difference(e,t){e=sub(e,t);return 0==e?"-":(0<e?"↑":"↓")+String(e)}function sub(e,t){return add(e,-Number(t),arguments[2])}function add(e,t){e=e.toString(),t=t.toString();var r=e.split("."),o=t.split("."),r=2==r.length?r[1]:"",o=2==o.length?o[1]:"",r=Math.max(r.length,o.length),o=Math.pow(10,r),o=Number(((e*o+t*o)/o).toFixed(r)),r=arguments[2];return"number"==typeof r?Number(o.toFixed(r)):o}function requestPrice(e,o){e={url:"https://apapia-history.manmanbuy.com/ChromeWidgetServices/WidgetServices.ashx",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 - mmbWebBrowse - ios"},body:"methodName=getHistoryTrend&p_url="+encodeURIComponent(e)};$tool.post(e,function(e,t,r){e?(o(null,null),consoleLog&&console.log("Error:\n"+e)):(o(JSON.parse(r)),consoleLog&&console.log("Data:\n"+r))})}function dateFormat(e){var e=new Date(parseInt(e.replace("/Date(","").replace(")/",""),10)),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0"+e.getDate():e.getDate();return e.getFullYear()+"-"+t+"-"+r}function getSpace(t){let r="";for(let e=0;e<t;e++)r+=" ";return r}function customItem(e,t){return{icon:"https://s2.ax1x.com/2020/02/16/3STeIJ.png",title:e,name:e,desc:t}}function customTradeConsumerProtection(){return{tradeConsumerService:{service:{items:[],icon:"",title:"基础服务"},nonService:{items:[],title:"其他"}},passValue:"all",url:"https://h5.m.taobao.com/app/detailsubpage/consumer/index.js",type:"0"}}function Qs2Json(e){var e=e.substring(e.lastIndexOf("?")+1),o={};return e.replace(/([^?&=]+)=([^?&=]*)/g,function(e,t,r){t=decodeURIComponent(t),r=decodeURIComponent(r),r=String(r);return o[t]=r,e}),o}function Json2Qs(e){var t,r=[];for(t in e)r.push(t+"="+e[t]);return r.join("&")}function Tool(){_node="function"==typeof require?{request:require("request")}:null,_isSurge="undefined"!=typeof $httpClient,_isQuanX="undefined"!=typeof $task,this.isSurge=_isSurge,this.isQuanX=_isQuanX,this.isResponse="undefined"!=typeof $response,this.notify=(e,t,r)=>{_isQuanX&&$notify(e,t,r),_isSurge&&$notification.post(e,t,r),_node&&console.log(JSON.stringify({title:e,subtitle:t,message:r}))},this.write=(e,t)=>_isQuanX?$prefs.setValueForKey(e,t):_isSurge?$persistentStore.write(e,t):void 0,this.read=e=>_isQuanX?$prefs.valueForKey(e):_isSurge?$persistentStore.read(e):void 0,this.get=(e,o)=>{_isQuanX&&((e="string"==typeof e?{url:e}:e).method="GET",$task.fetch(e).then(e=>{o(null,_status(e),e.body)},e=>o(e.error,null,null))),_isSurge&&$httpClient.get(e,(e,t,r)=>{o(e,_status(t),r)}),_node&&_node.request(e,(e,t,r)=>{o(e,_status(t),r)})},this.post=(e,o)=>{_isQuanX&&((e="string"==typeof e?{url:e}:e).method="POST",$task.fetch(e).then(e=>{o(null,_status(e),e.body)},e=>o(e.error,null,null))),_isSurge&&$httpClient.post(e,(e,t,r)=>{o(e,_status(t),r)}),_node&&_node.request.post(e,(e,t,r)=>{o(e,_status(t),r)})},_status=e=>(e&&(e.status?e.statusCode=e.status:e.statusCode&&(e.status=e.statusCode)),e)}function Base64(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",this.encode=function(e){var t,r,o,n,i,s,a="",c=0;for(e=_utf8_encode(e);c<e.length;)o=(t=e.charCodeAt(c++))>>2,n=(3&t)<<4|(t=e.charCodeAt(c++))>>4,i=(15&t)<<2|(r=e.charCodeAt(c++))>>6,s=63&r,isNaN(t)?i=s=64:isNaN(r)&&(s=64),a=a+_keyStr.charAt(o)+_keyStr.charAt(n)+_keyStr.charAt(i)+_keyStr.charAt(s);return a},this.decode=function(e){var t,r,o,n,i,s,a="",c=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<e.length;)o=_keyStr.indexOf(e.charAt(c++)),t=(15&(n=_keyStr.indexOf(e.charAt(c++))))<<4|(i=_keyStr.indexOf(e.charAt(c++)))>>2,r=(3&i)<<6|(s=_keyStr.indexOf(e.charAt(c++))),a+=String.fromCharCode(o<<2|n>>4),64!=i&&(a+=String.fromCharCode(t)),64!=s&&(a+=String.fromCharCode(r));return a=_utf8_decode(a)},_utf8_encode=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):t=127<o&&o<2048?(t+=String.fromCharCode(o>>6|192))+String.fromCharCode(63&o|128):(t=(t+=String.fromCharCode(o>>12|224))+String.fromCharCode(o>>6&63|128))+String.fromCharCode(63&o|128)}return t},_utf8_decode=function(e){var t,r="",o=0;for(c1=c2=0;o<e.length;)(t=e.charCodeAt(o))<128?(r+=String.fromCharCode(t),o++):191<t&&t<224?(c2=e.charCodeAt(o+1),r+=String.fromCharCode((31&t)<<6|63&c2),o+=2):(c2=e.charCodeAt(o+1),c3=e.charCodeAt(o+2),r+=String.fromCharCode((15&t)<<12|(63&c2)<<6|63&c3),o+=3);return r}}Array.prototype.insert=function(e,t){this.splice(e,0,t)},Date.prototype.format=function(e){var t,r,o={"y+":this.getFullYear(),"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};for(t in o)new RegExp("("+t+")").test(e)&&(e="y+"==t?e.replace(RegExp.$1,(""+o[t]).substr(4-RegExp.$1.length)):"S+"==t?(r=1==(r=RegExp.$1.length)?3:r,e.replace(RegExp.$1,("00"+o[t]).substr((""+o[t]).length-1,r))):e.replace(RegExp.$1,1==RegExp.$1.length?o[t]:("00"+o[t]).substr((""+o[t]).length)));return e};