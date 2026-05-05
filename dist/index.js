"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=u(function(k,v){
var D=require('@stdlib/stats-strided-distances-dcosine-similarity/dist').ndarray;function j(r,e,i,n,a,t,s){return r<=0?NaN:1-D(r,e,i,n,a,t,s)}v.exports=j
});var y=u(function(w,d){
var q=require('@stdlib/strided-base-stride2offset/dist'),l=o();function R(r,e,i,n,a){var t=q(r,i),s=q(r,a);return l(r,e,i,t,n,a,s)}d.exports=R
});var x=u(function(z,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=y(),E=o();_(f,"ndarray",E);p.exports=f
});var O=require("path").join,S=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=x(),c,m=S(O(__dirname,"./native.js"));b(m)?c=g:c=m;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
