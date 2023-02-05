const $=new Env("📍 Apple Location Services v2.11.1-request"),URL=new URLs,DataBase={Location:{Settings:{Switch:!0,PEP:{GCC:"US"},Services:{Dispatcher:"AUTO",Directions:"AUTO",Traffic:"AUTO",Tiles:"AUTO"},Geo_manifest:{Dynamic:{Config:{Country_code:{iOS:"CN",iPadOS:"CN",watchOS:"US",macOS:"CN"}}}},Config:{Announcements:{"Environment:":{iOS:"prod-cn",iPadOS:"prod-cn",watchOS:"prod",macOS:"prod-cn"}},Defaults:{LagunaBeach:!0,DrivingMultiWaypointRoutesEnabled:!0,GEOAddressCorrection:!0,LookupMaxParametersCount:!0,LocalitiesAndLandmarks:!0,PedestrianAR:!0,"6694982d2b14e95815e44e970235e230":!0,OpticalHeading:!0,UseCLPedestrianMapMatchedLocations:!0,WiFiQualityNetworkDisabled:!1,WiFiQualityTileDisabled:!1}}}},Weather:{Settings:{Switch:!0,NextHour:{Switch:!0},AQI:{Switch:!0,Mode:"WAQI Public",Location:"Station",Auth:null,Scale:"EPA_NowCast.2204"},Map:{AQI:!1}},Configs:{Availability:["currentWeather","forecastDaily","forecastHourly","history","weatherChange","forecastNextHour","severeWeather","airQuality"],Pollutants:{co:"CO",no:"NO",no2:"NO2",so2:"SO2",o3:"OZONE",nox:"NOX",pm25:"PM2.5",pm10:"PM10",other:"OTHER"}}},Siri:{Settings:{Switch:!0,CountryCode:"SG",Domains:["web","itunes","app_store","movies","restaurants","maps"],Functions:["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],Safari_Smart_History:!0}},TV:{Settings:{Switch:!0,"Third-Party":!0,Configs:{CountryCode:"AUTO",Tabs:["WatchNow","Originals","Movies","TV","Sports","Kids","Library","Search"]},View:{CountryCode:["SG","TW"]},WatchNow:{CountryCode:"AUTO"},Channels:{CountryCode:"AUTO"},Originals:{CountryCode:"TW"},Movies:{CountryCode:"AUTO"},TV:{CountryCode:"AUTO"},Sports:{CountryCode:"US"},Kids:{CountryCode:"US"},Persons:{CountryCode:"SG"},Search:{CountryCode:"TW"},Others:{CountryCode:"AUTO"}},Configs:{Locale:{AU:"en-AU",CA:"en-CA",GB:"en-GB",KR:"ko-KR",HK:"yue-Hant",JP:"ja-JP",MO:"zh-Hant",TW:"zh-Hant",US:"en-US",SG:"zh-Hans"},Tabs:{zh:{WatchNow:"立即观看",Originals:"原创内容",Movies:"电影",TV:"电视节目",Store:"商店",Sports:"体育节目",Kids:"儿童",Library:"资料库",Search:"搜索"},"zh-Hans":{WatchNow:"立即观看",Originals:"原创内容",Movies:"电影",TV:"电视节目",Store:"商店",Sports:"体育节目",Kids:"儿童",Library:"资料库",Search:"搜索"},"zh-Hant":{WatchNow:"立即觀看",Originals:"原創內容",Movies:"電影",TV:"電視節目",Store:"商店",Sports:"體育節目",Kids:"兒童",Library:"資料庫",Search:"蒐索"},en:{WatchNow:"Watch Now",Originals:"Originals",Movies:"Movies",TV:"TV Shows",Store:"Store",Sports:"Sports",Kids:"Kids",Library:"Library",Search:"Search"}}}},News:{Settings:{Switch:!0,CountryCode:"US",newsPlusUser:"AUTO"}},Default:{Settings:{Switch:!0},Configs:{Storefront:{AF:"143610",AL:"143575",AO:"143564",AI:"143538",AG:"143540",AR:"143505",AM:"143524",AU:"143460",AT:"143445",AZ:"143568",BA:"143612",BS:"143539",BH:"143559",BB:"143541",BD:"143490",BY:"143565",BE:"143446",BZ:"143555",BJ:"143576",BM:"143542",BT:"143577",BO:"143556",BW:"143525",BR:"143503",VG:"143543",BN:"143560",BG:"143526",BF:"143578",CA:"143455",CI:"143527",CM:"143574",CV:"143580",KY:"143544",TD:"143581",CL:"143483",CN:"143465",CO:"143501",CG:"143582",CR:"143495",HR:"143494",CY:"143557",CZ:"143489",DK:"143458",DM:"143545",DO:"143508",DZ:"143563",EC:"143509",EG:"143516",SV:"143506",EE:"143518",FJ:"143583",FI:"143447",FR:"143442",GM:"143584",DE:"143443",GH:"143573",GR:"143448",GD:"143546",GT:"143504",GW:"143585",GY:"143553",HN:"143510",HK:"143463",HU:"143482",IS:"143558",IN:"143467",ID:"143476",IE:"143449",IL:"143491",IT:"143450",JM:"143511",JP:"143462",JO:"143528",KH:"143579",KR:"143466",KZ:"143517",KE:"143529",KW:"143493",KG:"143586",LA:"143587",LV:"143519",LB:"143497",LR:"143588",LT:"143520",LI:"143522",LU:"143451",MO:"143515",MK:"143530",MG:"143531",MW:"143589",MY:"143473",MV:"143488",ML:"143532",MT:"143521",MR:"143590",MU:"143533",MX:"143468",FM:"143591",MD:"143523",MN:"143592",MS:"143547",MZ:"143593",NA:"143594",NP:"143484",NL:"143452",NZ:"143461",NI:"143512",NE:"143534",NG:"143561",NO:"143457",OM:"143562",PK:"143477",PW:"143595",PA:"143485",PG:"143597",PY:"143513",PE:"143507",PH:"143474",PL:"143478",PT:"143453",QA:"143498",RO:"143487",RU:"143469",ST:"143598",SA:"143479",SN:"143535",SC:"143599",SL:"143600",SG:"143464",SK:"143496",SI:"143499",SB:"143601",ZA:"143472",KP:"143466",ES:"143454",LK:"143486",KN:"143548",LC:"143549",VC:"143550",SR:"143554",SZ:"143602",SE:"143456",CH:"143459",TW:"143470",TJ:"143603",TZ:"143572",TH:"143475",TT:"143551",TN:"143536",TR:"143480",TM:"143604",TC:"143552",AE:"143481",UG:"143537",UA:"143492",GB:"143444",US:"143441",UY:"143514",UZ:"143566",VE:"143502",VN:"143471",YE:"143571",ZW:"143605",CD:"143613",GA:"143614",GF:"143615",IQ:"143617",XK:"143624",LY:"143567",ME:"143619",MA:"143620",MM:"143570",NR:"143606",RW:"143621",RS:"143500",TO:"143608",VU:"143609",ZM:"143622"}}}};for(const[a,b]of Object.entries($request.headers))delete $request.headers[a],$request.headers[a.toLowerCase()]=b;async function getENV(e,t,s){var e=$.getjson(e,s),i={};if("undefined"!=typeof $argument&&Boolean($argument)){var a,n=Object.fromEntries($argument.split("&").map(e=>e.split("=")));for(a in n)!function(e,i,a){i.split(".").reduce((e,t,s)=>e[t]=i.split(".").length===++s?a:e[t]||{},e)}(i,a,n[a])}let r={...s?.Default?.Settings,...s?.[t]?.Settings,...e?.[t]?.Settings,...i},o={...s?.Default?.Configs,...s?.[t]?.Configs,...e?.[t]?.Configs},h=e?.[t]?.Caches||void 0;return{Settings:r,Caches:h="string"==typeof h?JSON.parse(h):h,Configs:o}}async function setENV(e,t,s){$.log(`⚠ ${$.name}, Set Environment Variables`,"");var{Settings:i,Caches:e={}}=await getENV(e,t,s);if(i.Switch=JSON.parse(i.Switch),i?.Config?.Defaults)for(var a in i.Config.Defaults)i.Config.Defaults[a]=JSON.parse(i.Config.Defaults[a]);return $.log(`🎉 ${$.name}, Set Environment Variables`,"Settings: "+typeof i,"Settings内容: "+JSON.stringify(i),""),{Settings:i,Caches:e}}async function setETag(e,t){return $.log(`⚠ ${$.name}, Set ETag`,`caches.${e}.ETag = `+t?.[e]?.ETag,""),$request?.headers?.["if-none-match"]!==t?.[e]?.ETag&&((t=t)[e]={ETag:$request?.headers?.["if-none-match"]},$.setjson(t,"@iRingo.Location.Caches"),$request.headers["if-none-match"]=`"${$request.headers["if-none-match"].replace(/\"/g,"")}_"`),$.log(`🎉 ${$.name}, Set ETag`,"if-none-match = "+$request?.headers?.["if-none-match"],"")}function Env(n,e){class s{constructor(e){this.env=e}send(e,t="GET"){e="string"==typeof e?{url:e}:e;let s=this.get;return"POST"===t&&(s=this.post),new Promise((i,a)=>{s.call(this,e,(e,t,s)=>{e?a(e):i(t)})})}get(e){return this.send.call(this.env,e)}post(e){return this.send.call(this.env,e,"POST")}}return new class{constructor(e,t){this.name=e,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,t),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}isStash(){return"undefined"!=typeof $environment&&$environment["stash-version"]}toObj(e,t=null){try{return JSON.parse(e)}catch{return t}}toStr(e,t=null){try{return JSON.stringify(e)}catch{return t}}getjson(e,t){let s=t;if(this.getdata(e))try{s=JSON.parse(this.getdata(e))}catch{}return s}setjson(e,t){try{return this.setdata(JSON.stringify(e),t)}catch{return!1}}getScript(e){return new Promise(i=>{this.get({url:e},(e,t,s)=>i(s))})}runScript(n,r){return new Promise(i=>{let e=this.getdata("@chavy_boxjs_userCfgs.httpapi");e=e&&e.replace(/\n/g,"").trim();var t=(t=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+t:20,[s,a]=(t=r&&r.timeout?r.timeout:t,e.split("@"));this.post({url:`http://${a}/v1/scripting/evaluate`,body:{script_text:n,mock_type:"cron",timeout:t},headers:{"X-Key":s,Accept:"*/*"}},(e,t,s)=>i(s))}).catch(e=>this.logErr(e))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var e=this.path.resolve(this.dataFile),t=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(e),i=!s&&this.fs.existsSync(t);if(!s&&!i)return{};i=s?e:t;try{return JSON.parse(this.fs.readFileSync(i))}catch(e){return{}}}writedata(){var e,t,s,i,a;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),e=this.path.resolve(this.dataFile),t=this.path.resolve(process.cwd(),this.dataFile),i=!(s=this.fs.existsSync(e))&&this.fs.existsSync(t),a=JSON.stringify(this.data),!s&&i?this.fs.writeFileSync(t,a):this.fs.writeFileSync(e,a))}lodash_get(e,t,s){let i=e;for(const e of t.replace(/\[(\d+)\]/g,".$1").split("."))if(i=Object(i)[e],void 0===i)return s;return i}lodash_set(e,i,t){return Object(e)!==e||((i=Array.isArray(i)?i:i.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((e,t,s)=>Object(e[t])===e[t]?e[t]:e[t]=Math.abs(i[s+1])>>0==+i[s+1]?[]:{},e)[i[i.length-1]]=t),e}getdata(e){let t=this.getval(e);if(/^@/.test(e)){var[,s,i]=/^@(.*?)\.(.*?)$/.exec(e),s=s?this.getval(s):"";if(s)try{const e=JSON.parse(s);t=e?this.lodash_get(e,i,""):t}catch(e){t=""}}return t}setdata(e,t){let s=!1;if(/^@/.test(t)){var[,i,a]=/^@(.*?)\.(.*?)$/.exec(t),n=this.getval(i),n=i?"null"===n?null:n||"{}":"{}";try{const t=JSON.parse(n);this.lodash_set(t,a,e),s=this.setval(JSON.stringify(t),i)}catch(t){n={};this.lodash_set(n,a,e),s=this.setval(JSON.stringify(n),i)}}else s=this.setval(e,t);return s}getval(e){return this.isSurge()||this.isLoon()?$persistentStore.read(e):this.isQuanX()?$prefs.valueForKey(e):this.isNode()?(this.data=this.loaddata(),this.data[e]):this.data&&this.data[e]||null}setval(e,t){return this.isSurge()||this.isLoon()?$persistentStore.write(e,t):this.isQuanX()?$prefs.setValueForKey(e,t):this.isNode()?(this.data=this.loaddata(),this.data[t]=e,this.writedata(),!0):this.data&&this.data[t]||null}initGotEnv(e){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,e&&(e.headers=e.headers||{},void 0===e.headers.Cookie)&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar)}get(e,r=()=>{}){if(e.headers&&(delete e.headers["Content-Type"],delete e.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(e.headers=e.headers||{},Object.assign(e.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(e,(e,t,s)=>{!e&&t&&(t.body=s,t.statusCode=t.status||t.statusCode,t.status=t.statusCode),r(e,t,s)});else if(this.isQuanX())this.isNeedRewrite&&(e.opts=e.opts||{},Object.assign(e.opts,{hints:!1})),$task.fetch(e).then(e=>{var{statusCode:e,statusCode:t,headers:s,body:i}=e;r(null,{status:e,statusCode:t,headers:s,body:i},i)},e=>r(e&&e.error||"UndefinedError"));else if(this.isNode()){let n=require("iconv-lite");this.initGotEnv(e),this.got(e).on("redirect",(e,t)=>{try{var s;e.headers["set-cookie"]&&((s=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),t.cookieJar=this.ckjar)}catch(e){this.logErr(e)}}).then(e=>{var{statusCode:e,statusCode:t,headers:s,rawBody:i}=e,a=n.decode(i,this.encoding);r(null,{status:e,statusCode:t,headers:s,rawBody:i,body:a},a)},e=>{var{message:e,response:t}=e;r(e,t,t&&n.decode(t.rawBody,this.encoding))})}}post(e,r=()=>{}){var t=e.method?e.method.toLocaleLowerCase():"post";if(e.body&&e.headers&&!e.headers["Content-Type"]&&(e.headers["Content-Type"]="application/x-www-form-urlencoded"),e.headers&&delete e.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(e.headers=e.headers||{},Object.assign(e.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[t](e,(e,t,s)=>{!e&&t&&(t.body=s,t.statusCode=t.status||t.statusCode,t.status=t.statusCode),r(e,t,s)});else if(this.isQuanX())e.method=t,this.isNeedRewrite&&(e.opts=e.opts||{},Object.assign(e.opts,{hints:!1})),$task.fetch(e).then(e=>{var{statusCode:e,statusCode:t,headers:s,body:i}=e;r(null,{status:e,statusCode:t,headers:s,body:i},i)},e=>r(e&&e.error||"UndefinedError"));else if(this.isNode()){let n=require("iconv-lite");this.initGotEnv(e);const{url:s,...i}=e;this.got[t](s,i).then(e=>{var{statusCode:e,statusCode:t,headers:s,rawBody:i}=e,a=n.decode(i,this.encoding);r(null,{status:e,statusCode:t,headers:s,rawBody:i,body:a},a)},e=>{var{message:e,response:t}=e;r(e,t,t&&n.decode(t.rawBody,this.encoding))})}}time(e,t=null){var s,t=t?new Date(t):new Date,i={"M+":t.getMonth()+1,"d+":t.getDate(),"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));return e}msg(e=n,t="",s="",i){var a=e=>{return e&&("string"==typeof e?this.isLoon()?e:this.isQuanX()?{"open-url":e}:this.isSurge()?{url:e}:void 0:"object"==typeof e?this.isLoon()?{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]}:this.isQuanX()?{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl,"update-pasteboard":e["update-pasteboard"]||e.updatePasteboard}:this.isSurge()?{url:e.url||e.openUrl||e["open-url"]}:void 0:void 0)};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,t,s,a(i)):this.isQuanX()&&$notify(e,t,s,a(i))),this.isMuteLog||((a=["","==============📣系统通知📣=============="]).push(e),t&&a.push(t),s&&a.push(s),console.log(a.join("\n")),this.logs=this.logs.concat(a))}log(...e){0<e.length&&(this.logs=[...this.logs,...e]),console.log(e.join(this.logSeparator))}logErr(e,t){!this.isSurge()&&!this.isQuanX()&&!this.isLoon()?this.log("",`❗️${this.name}, 错误!`,e.stack):this.log("",`❗️${this.name}, 错误!`,e)}wait(t){return new Promise(e=>setTimeout(e,t))}done(e={}){var t=((new Date).getTime()-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${t} 秒`),this.log(),this.isSurge()||this.isQuanX()||this.isLoon()?$done(e):this.isNode()&&process.exit(1)}}(n,e)}function URLs(e){return new class{constructor(e=[]){this.name="URL v1.0.0",this.opts=e,this.json={url:{scheme:"",host:"",path:""},params:{}}}parse(e){e=e.match(/(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/)?.groups??null;return e?.params&&(e.params=Object.fromEntries(e.params.split("&").map(e=>e.split("=")))),e}stringify(e=this.json){return e?.params?e.scheme+"://"+e.host+"/"+e.path+"?"+Object.entries(e.params).map(e=>e.join("=")).join("&"):e.scheme+"://"+e.host+"/"+e.path}}(e)}(async()=>{var{Settings:e,Caches:t}=await setENV("iRingo","Location",DataBase);if(e.Switch){var s=URL.parse($request.url);switch($.log(s.path),s.path){case"pep/gcc":break;case"config/defaults":await setETag("Defaults",t);break;case"config/announcements":switch(s.params.os){case"ios":s.params.environment=e?.Config?.Announcements?.Environment?.iOS??e?.Config?.Announcements?.Environment?.default??"prod-cn";break;case"ipados":s.params.environment=e?.Config?.Announcements?.Environment?.iPadOS??e?.Config?.Announcements?.Environment?.default??"prod-cn";break;case"watchos":s.params.environment=e?.Config?.Announcements?.Environment?.watchOS??e?.Config?.Announcements?.Environment?.default??"prod";break;case"macos":s.params.environment=e?.Config?.Announcements?.Environment?.macOS??e?.Config?.Announcements?.Environment?.default??"prod-cn";break;default:s.params.environment=e?.Config?.Announcements?.Environment??e?.Config?.Announcements?.Environment?.default??"prod-cn"}await setETag("Announcements",t);break;case"geo_manifest/dynamic/config":switch(s.params.os){case"ios":s.params.country_code=e?.Geo_manifest?.Dynamic?.Config?.Country_code?.iOS??e?.Geo_manifest?.Dynamic?.Config?.Country_code?.default??"CN";break;case"ipados":s.params.country_code=e?.Geo_manifest?.Dynamic?.Config?.Country_code?.iPadOS??e?.Geo_manifest?.Dynamic?.Config?.Country_code?.default??"CN";break;case"watchos":s.params.country_code=e?.Geo_manifest?.Dynamic?.Config?.Country_code?.watchOS??e?.Geo_manifest?.Dynamic?.Config?.Country_code?.default??"US";break;case"macos":s.params.country_code=e?.Geo_manifest?.Dynamic?.Config?.Country_code?.macOS??e?.Geo_manifest?.Dynamic?.Config?.Country_code?.default??"CN";break;default:s.params.country_code=e?.Geo_manifest?.Dynamic?.Config?.Country_code??e?.Geo_manifest?.Dynamic?.Config?.Country_code?.default??"CN"}await setETag("Dynamic",t);break;case"dispatcher.arpc":case"dispatcher":switch(e?.Services?.Dispatcher){case"AUTO":default:break;case"CN":s.host="dispatcher.is.autonavi.com",s.path="dispatcher";break;case"XX":s.host="gsp-ssl.ls.apple.com",s.path="dispatcher.arpc"}break;case"directions.arpc":case"direction":switch(e?.Services?.Directions){case"AUTO":default:break;case"CN":s.host="direction2.is.autonavi.com",s.path="direction";break;case"XX":s.host="gsp-ssl.ls.apple.com",s.path="directions.arpc"}break;case"traffic":switch(e?.Services?.Traffic){case"AUTO":default:break;case"CN":s.host="gspe12-cn-ssl.ls.apple.com";break;case"XX":s.host="gspe12-ssl.ls.apple.com"}break;case"tile.vf":case"tiles":switch(e?.Services?.Tiles){case"AUTO":default:break;case"CN":s.host="gspe19-cn-ssl.ls.apple.com",s.path="tiles";break;case"XX":s.host="gspe19-ssl.ls.apple.com",s.path="tile.vf"}}$request?.headers?.host&&($request.headers.host=s.host),$request.url=URL.stringify(s)}})().catch(e=>$.logErr(e)).finally(()=>{$.isQuanX()?$.done({url:$request.url,headers:$request.headers}):$.done($request)});