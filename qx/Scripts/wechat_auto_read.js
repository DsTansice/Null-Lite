var body=$response.body.replace(/<\/script>/,"setTimeout(()=>window.history.back(),5000); <\/script>");$done({body:body});