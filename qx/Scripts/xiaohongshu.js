var obj;/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/splash_config/.test($request.url)&&((obj=JSON.parse($response.body)).data.ads_groups.forEach(e=>{e.start_time="2208963661",e.end_time="2209050061",e.ads.forEach(e=>{e.start_time="2208963661",e.end_time="2209050061"})}),$done({body:JSON.stringify(obj)})),/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/homefeed\?/.test($request.url)&&((obj=JSON.parse($response.body)).data=Object.values(obj.data).filter(e=>!e.is_ads),$done({body:JSON.stringify(obj)})),/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/config\?/.test($request.url)&&(delete(obj=JSON.parse($response.body)).data.store,delete obj.data.splash,delete obj.data.loading_img,$done({body:JSON.stringify(obj)}));