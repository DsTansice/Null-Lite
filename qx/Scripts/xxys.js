const path1="1/ucp/index",path2="2init",path3="/vod/reqplay/",path4="getGlobalData";let obj=JSON.parse($response.body);-1!=$request.url.indexOf(path1)&&(obj.data.uinfo.down_daily_remainders="678",obj.data.uinfo.play_daily_remainders="876",obj.data.uinfo.curr_group="5",obj.data.user.isvip="1",obj.data.user.goldcoin="666"),-1!=$request.url.indexOf(path2)&&(obj.data.user.isvip="1",obj.data.user.goldcoin="999"),$request.url.indexOf(path3),-1!=$request.url.indexOf(path4)&&(delete obj.data.popuptext_iOS,delete obj.data.iOS_adgroups,delete obj.data.Android_adgroups,delete obj.data.sdkrows_iOS,delete obj.data.sdkrows_Android,obj.data.app_launch_times_adshow=-1),$done({body:JSON.stringify(obj)});