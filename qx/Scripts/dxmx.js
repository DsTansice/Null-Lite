function re(){var e=$response.body;if(arguments[0].includes("@")){var r=arguments[0].split("@"),p=arguments[1].split("@");for(i=0;i<r.length;i++)var s=new RegExp(r[i],"g"),e=e.replace(s,p[i])}else{s=new RegExp(arguments[0],"g");e=e.replace(s,arguments[1])}$done(e)}re('"free":\\w+@"vip":\\w+@"expires":\\d+@"isVip":\\w+','"free":true@"vip":ture@"expires":9999999999000@"isVip":true');