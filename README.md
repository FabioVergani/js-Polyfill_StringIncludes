# js-Polyfill_StringIncludes

(function(s){'use strict';
 var o=s.prototype,p='includes';
 o[p]||(o[p]=function(a,b){//search,start
  var e=this,i=isNaN(b)?0:b,t=a,l=t.length;
  return (l<1||((i+l)>e.length))?false:-1!==e.indexOf(t,i);
 });
})(String);

/*
var str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
*/
