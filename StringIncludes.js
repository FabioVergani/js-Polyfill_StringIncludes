(function(s){'use strict';
 var o=s.prototype,p='includes';
 o[p]||(o[p]=function(a,b){//search,start
  var e=this,i=isNaN(b)?0:b,t=a,l=t.length;
  return (l<1||((i+l)>e.length))?false:-1!==e.indexOf(t,i);
 });
})(String);
