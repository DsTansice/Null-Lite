var body=$response.body.replace(/"uvip":"0"/g,'"uvip":"1"').replace(/totime":"\d{4}/g,'totime":"2029').replace(/nickname":"\\u666e\\u901a\\u7528\\u6237"/g,'nickname":"墨鱼手记"').replace(/uhead":"[^"]+"/g,'uhead":"http://dbapi.ganbuguo.com//uploads/file/20200914/3f8c5019e2bc056a7b226623205126f3.jpg"');$done({body:body});