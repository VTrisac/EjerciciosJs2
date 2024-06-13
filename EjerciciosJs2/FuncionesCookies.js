var validez = 30; // Le damos 30 días de vida a las cookies
 var caduca = new Date(); 
 caduca.setTime(caduca.getTime() + (validez*24*60*60*1000));

function getCookie(name){
 var cname = name + "=";               
 var dc = document.cookie;             
    if (dc.length > 0) {              
     var begin = dc.indexOf(cname);       
     if (begin != -1) {           
       begin += cname.length;       
       var end = dc.indexOf(";", begin);
       if (end == -1) end = dc.length;
          return unescape(dc.substring(begin, end));
       } 
     }
  return null;
}

function setCookie(name, value, expires) 
{
   document.cookie = name + "=" + escape(value) + 
  ((expires == null) ? "" : "; expires=" + expires.toGMTString());
}

