let body=$response.body;for(delete(body=JSON.parse(body)).data.bannerTop,i=0;i<body.data.sections.length;i++)2717==body.data.sections[i].id&&delete body.data.sections[i];body=JSON.stringify(body),$done({body:body});