"use strict"
var Markdown
Markdown="object"==typeof exports&&"function"==typeof require?exports:{},function(){function e(e){return e}function t(e){return!1}function n(){}function r(){}n.prototype={chain:function(t,n){var r=this[t]
if(!r)throw new Error("unknown hook "+t)
this[t]=r===e?n:function(e){var t=Array.prototype.slice.call(arguments,0)
return t[0]=r.apply(null,t),n.apply(null,t)}},set:function(e,t){if(!this[e])throw new Error("unknown hook "+e)
this[e]=t},addNoop:function(t){this[t]=e},addFalse:function(e){this[e]=t}},Markdown.HookCollection=n,r.prototype={set:function(e,t){this["s_"+e]=t},get:function(e){return this["s_"+e]}},Markdown.Converter=function(t){function u(e){return e=e.replace(/^[ ]{0,3}\[([^\[\]]+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(\n+)/gm,function(e,t,n,r,u,a,o){return t=t.toLowerCase(),D.set(t,$(n)),u?r+o:(a&&K.set(t,a.replace(/"/g,"&quot;")),"")})}function a(e){return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,i),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,i),e=e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,i),e=e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,i),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,i)}function o(e){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(N.push(e)-1)+"K\n\n"}function i(e,t){return o(t)}function c(e,t,n){e=q.preBlockGamut(e,U),e=m(e)
return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,"<hr />\n"),e=e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,"<hr />\n"),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,"<hr />\n"),e=b(e),e=w(e),e=C(e),e=q.postBlockGamut(e,U),e=a(e),e=E(e,t,n)}function l(e){return e=q.preSpanGamut(e),e=T(e),e=s(e),e=S(e),e=p(e),e=f(e),e=_(e),e=e.replace(/~P/g,"://"),e=$(e),e=P(e),e=e.replace(/\n/g,"<br>\n"),e=q.postSpanGamut(e)}function s(e){return e=e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,function(e){var t=e.replace(/(.)<\/?code>(?=.)/g,"$1`")
return t=A(t,"!"==e.charAt(1)?"\\`*_/":"\\`*_")})}function f(e){return-1===e.indexOf("[")?e:(e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,d),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,d),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,d))}function d(e,t,n,r,u,a,o,i){void 0==i&&(i="")
var c=t,l=n.replace(/:\/\//g,"~P"),s=r.toLowerCase(),f=u,d=i
if(""==f)if(""==s&&(s=l.toLowerCase().replace(/ ?\n/g," ")),f="#"+s,void 0!=D.get(s))f=D.get(s),void 0!=K.get(s)&&(d=K.get(s))
else{if(!(c.search(/\(\s*\)$/m)>-1))return c
f=""}f=B(f)
var p='<a href="'+f+'"'
return""!=d&&(d=g(d),d=A(d,"*_"),p+=' title="'+d+'"'),p+=">"+l+"</a>"}function p(e){return-1===e.indexOf("![")?e:(e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,h),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,h))}function g(e){return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function h(e,t,n,r,u,a,o,i){var c=t,l=n,s=r.toLowerCase(),f=u,d=i
if(d||(d=""),""==f){if(""==s&&(s=l.toLowerCase().replace(/ ?\n/g," ")),f="#"+s,void 0==D.get(s))return c
f=D.get(s),void 0!=K.get(s)&&(d=K.get(s))}l=A(g(l),"*_[]()"),f=A(f,"*_")
var p='<img src="'+f+'" alt="'+l+'"'
return d=g(d),d=A(d,"*_"),p+=' title="'+d+'"',p+=" />"}function m(e){return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(e,t){return"<h2>"+l(t)+"</h2>\n\n"}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(e,t){return"<h3>"+l(t)+"</h3>\n\n"}),e=e.replace(/^(\#{1,5})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(e,t,n){var r=t.length+1
return"<h"+r+">"+l(n)+"</h"+r+">\n\n"})}function b(e,t){e+="~0"
var n=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm
return O?e=e.replace(n,function(e,n,r){var u,a=n,o=r.search(/[*+-]/g)>-1?"ul":"ol"
"ol"===o&&(u=parseInt(r,10))
var i=v(a,o,t)
i=i.replace(/\s+$/,"")
var c="<"+o
return u&&1!==u&&(c+=' start="'+u+'"'),i=c+">"+i+"</"+o+">\n"}):(n=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(n,function(e,t,n,r){var u,a=t,o=n,i=r.search(/[*+-]/g)>-1?"ul":"ol"
"ol"===i&&(u=parseInt(r,10))
var c=v(o,i),l="<"+i
return u&&1!==u&&(l+=' start="'+u+'"'),c=a+l+">\n"+c+"</"+i+">\n"})),e=e.replace(/~0/,"")}function v(e,t,n){O++,e=e.replace(/\n{2,}$/,"\n"),e+="~0"
var r=G[t],u=new RegExp("(^[ \\t]*)("+r+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+r+")[ \\t]+))","gm"),a=!1
return e=e.replace(u,function(e,t,n,r){var u=r,o=/\n\n$/.test(u),i=o||u.search(/\n{2,}/)>-1,l=i||a
return u=c(R(u),!0,!l),a=o,"<li>"+u+"</li>\n"}),e=e.replace(/~0/g,""),O--,e}function w(e){return e+="~0",e=e.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(e,t,n){var r=t,u=n
return r=k(R(r)),r=I(r),r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,""),"\n\n"+(r="<pre><code>"+r+"\n</code></pre>")+"\n\n"+u}),e=e.replace(/~0/,"")}function T(e){return e=e.replace(/(^|[^\\`])(`+)(?!`)([^\r]*?[^`])\2(?!`)/gm,function(e,t,n,r,u){var a=r
return a=a.replace(/^([ \t]*)/g,""),a=a.replace(/[ \t]*$/g,""),a=k(a),a=a.replace(/:\/\//g,"~P"),t+"<code>"+a+"</code>"})}function k(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=A(e,"*_{}[]\\",!1)}function y(e){return-1===e.indexOf("*")&&-1===e.indexOf("_")?e:(e=M(e),e=e.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)\2(?=\S)([^\r]*?\S)\2\2(?!\2)(?=[\W_]|$)/g,"$1<strong>$3</strong>"),e=e.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)(?=\S)((?:(?!\2)[^\r])*?\S)\2(?!\2)(?=[\W_]|$)/g,"$1<em>$3</em>"),z(e))}function x(e){return-1===e.indexOf("*")&&-1===e.indexOf("_")?e:(e=M(e),e=e.replace(/(?=[^\r][*_]|[*_])(^|(?=\W__|(?!\*)[\W_]\*\*|\w\*\*\w)[^\r])(\*\*|__)(?!\2)(?=\S)((?:|[^\r]*?(?!\2)[^\r])(?=\S_|\w|\S\*\*(?:[\W_]|$)).)(?=__(?:\W|$)|\*\*(?:[^*]|$))\2/g,"$1<strong>$3</strong>"),e=e.replace(/(?=[^\r][*_]|[*_])(^|(?=\W_|(?!\*)(?:[\W_]\*|\D\*(?=\w)\D))[^\r])(\*|_)(?!\2\2\2)(?=\S)((?:(?!\2)[^\r])*?(?=[^\s_]_|(?=\w)\D\*\D|[^\s*]\*(?:[\W_]|$)).)(?=_(?:\W|$)|\*(?:[^*]|$))\2/g,"$1<em>$3</em>"),z(e))}function C(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,t){var n=t
return n=n.replace(/^[ \t]*>[ \t]?/gm,"~0"),n=n.replace(/~0/g,""),n=n.replace(/^[ \t]+$/gm,""),n=c(n),n=n.replace(/(^|\n)/g,"$1  "),n=n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,t){var n=t
return n=n.replace(/^  /gm,"~0"),n=n.replace(/~0/g,"")}),o("<blockquote>\n"+n+"\n</blockquote>")})}function E(e,t,n){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"")
for(var r=e.split(/\n{2,}/g),u=[],a=/~K(\d+)K/,o=r.length,i=0;i<o;i++){var c=r[i]
a.test(c)?u.push(c):/\S/.test(c)&&(c=l(c),c=c.replace(/^([ \t]*)/g,n?"":"<p>"),n||(c+="</p>"),u.push(c))}if(!t){o=u.length
for(var i=0;i<o;i++)for(var s=!0;s;)s=!1,u[i]=u[i].replace(/~K(\d+)K/g,function(e,t){return s=!0,N[t]})}return u.join("\n\n")}function $(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;")}function S(e){return e=e.replace(/\\(\\)/g,W),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,W)}function L(e,t,n,r){if(t)return e
if(")"!==r.charAt(r.length-1))return"<"+n+r+">"
for(var u=r.match(/[()]/g),a=0,o=0;o<u.length;o++)"("===u[o]?a<=0?a=1:a++:a--
var i=""
if(a<0){var c=new RegExp("\\){1,"+-a+"}$")
r=r.replace(c,function(e){return i=e,""})}if(i){var l=r.charAt(r.length-1)
X.test(l)||(i=l+i,r=r.substr(0,r.length-1))}return"<"+n+r+">"+i}function _(e){e=e.replace(Z,L)
var t=function(e,t){return'<a href="'+B(t)+'">'+q.plainLinkText(t)+"</a>"}
return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,t)}function H(e){return e=e.replace(/~E(\d+)E/g,function(e,t){var n=parseInt(t)
return String.fromCharCode(n)})}function R(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}function I(e){if(!/\t/.test(e))return e
var t,n=["    ","   ","  "," "],r=0
return e.replace(/[\n\t]/g,function(e,u){return"\n"===e?(r=u+1,e):(t=(u-r)%4,r=u+1,n[t])})}function B(e){return e=g(e),e=A(e,"*_:()[]")}function A(e,t,n){var r="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])"
n&&(r="\\\\"+r)
var u=new RegExp(r,"g")
return e=e.replace(u,W)}function W(e,t){return"~E"+t.charCodeAt(0)+"E"}var q=this.hooks=new n
q.addNoop("plainLinkText"),q.addNoop("preConversion"),q.addNoop("postNormalization"),q.addNoop("preBlockGamut"),q.addNoop("postBlockGamut"),q.addNoop("preSpanGamut"),q.addNoop("postSpanGamut"),q.addNoop("postConversion")
var D,K,N,O
t=t||{}
var M=e,z=e
t.nonAsciiLetters&&function(){var e="Q".charCodeAt(0),t="A".charCodeAt(0),n="Z".charCodeAt(0),r="a".charCodeAt(0)-n-1
M=function(u){return u.replace(/[Q\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u0660-\u0669\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07c0-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0966-\u096f\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09e6-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0ae6-\u0aef\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b66-\u0b6f\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0be6-\u0bef\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c66-\u0c6f\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0ce6-\u0cef\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d66-\u0d6f\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edd\u0f00\u0f20-\u0f29\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f-\u1049\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u1090-\u1099\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1946-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u19d0-\u19d9\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b50-\u1b59\u1b83-\u1ba0\u1bae-\u1bb9\u1c00-\u1c23\u1c40-\u1c49\u1c4d-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u2094\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183-\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3006\u3031-\u3035\u303b-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua62b\ua640-\ua65f\ua662-\ua66e\ua67f-\ua697\ua717-\ua71f\ua722-\ua788\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8d0-\ua8d9\ua900-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa50-\uaa59\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/g,function(u){for(var a,o=u.charCodeAt(0),i="";o>0;)a=o%51+t,a>=e&&a++,a>n&&(a+=r),i=String.fromCharCode(a)+i,o=o/51|0
return"Q"+i+"Q"})},z=function(u){return u.replace(/Q([A-PR-Za-z]{1,3})Q/g,function(u,a){for(var o,i=0,c=0;c<a.length;c++)o=a.charCodeAt(c),o>n&&(o-=r),o>e&&o--,o-=t,i=51*i+o
return String.fromCharCode(i)})}}()
var P=t.asteriskIntraWordEmphasis?x:y
this.makeHtml=function(e){if(D)throw new Error("Recursive call to converter.makeHtml")
return D=new r,K=new r,N=[],O=0,e=q.preConversion(e),e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),e="\n\n"+e+"\n\n",e=I(e),e=e.replace(/^[ \t]+$/gm,""),e=q.postNormalization(e),e=a(e),e=u(e),e=c(e),e=H(e),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),e=q.postConversion(e),N=K=D=null,e}
var U=function(e){return c(e)},G={ol:"\\d+[.]",ul:"[*+-]"},Z=new RegExp('(="|<)?\\b(https?|ftp)(://[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]*[-A-Z0-9+&@#/%=~_|[\\])])(?=$|\\W)',"gi"),X=new RegExp("[-A-Z0-9+&@#/%=~_|[\\])]","i")}}(),function(){function e(){}function t(e){this.buttonBar=f.getElementById("wmd-button-bar"+e),this.preview=f.getElementById("wmd-preview"+e),this.input=f.getElementById("wmd-input"+e)}function n(e,t){var n,u,a,o=this,i=[],l=0,s="none",f=function(e,t){s!=e&&(s=e,t||p()),h.isIE&&"moving"==s?a=null:u=setTimeout(d,1)},d=function(e){a=new r(t,e),u=void 0}
this.setCommandMode=function(){s="command",p(),u=setTimeout(d,0)},this.canUndo=function(){return l>1},this.canRedo=function(){return!!i[l+1]},this.undo=function(){o.canUndo()&&(n?(n.restore(),n=null):(i[l]=new r(t),i[--l].restore(),e&&e())),s="none",t.input.focus(),d()},this.redo=function(){o.canRedo()&&(i[++l].restore(),e&&e()),s="none",t.input.focus(),d()}
var p=function(){var u=a||new r(t)
return!!u&&("moving"==s?void(n||(n=u)):(n&&(i[l-1].text!=n.text&&(i[l++]=n),n=null),i[l++]=u,i[l+1]=null,void(e&&e())))},g=function(e){var t=!1
if((e.ctrlKey||e.metaKey)&&!e.altKey){var n=e.charCode||e.keyCode
switch(String.fromCharCode(n).toLowerCase()){case"y":o.redo(),t=!0
break
case"z":e.shiftKey?o.redo():o.undo(),t=!0}}if(t)return e.preventDefault&&e.preventDefault(),void(window.event&&(window.event.returnValue=!1))},m=function(e){if(!e.ctrlKey&&!e.metaKey){var t=e.keyCode
t>=33&&t<=40||t>=63232&&t<=63235?f("moving"):8==t||46==t||127==t?f("deleting"):13==t?f("newlines"):27==t?f("escape"):(t<16||t>20)&&91!=t&&f("typing")}},b=function(){c.addEvent(t.input,"keypress",function(e){!e.ctrlKey&&!e.metaKey||e.altKey||89!=e.keyCode&&90!=e.keyCode||e.preventDefault()})
var e=function(){(h.isIE||a&&a.text!=t.input.value)&&void 0==u&&(s="paste",p(),d())}
c.addEvent(t.input,"keydown",g),c.addEvent(t.input,"keydown",m),c.addEvent(t.input,"mousedown",function(){f("moving")}),t.input.onpaste=e,t.input.ondrop=e}
!function(){b(),d(!0),p()}()}function r(t,n){var r=this,u=t.input
this.init=function(){c.isVisible(u)&&(!n&&f.activeElement&&f.activeElement!==u||(this.setInputAreaSelectionStartEnd(),this.scrollTop=u.scrollTop,(!this.text&&u.selectionStart||0===u.selectionStart)&&(this.text=u.value)))},this.setInputAreaSelection=function(){if(c.isVisible(u))if(void 0===u.selectionStart||h.isOpera){if(f.selection){if(f.activeElement&&f.activeElement!==u)return
u.focus()
var e=u.createTextRange()
e.moveStart("character",-u.value.length),e.moveEnd("character",-u.value.length),e.moveEnd("character",r.end),e.moveStart("character",r.start),e.select()}}else u.focus(),u.selectionStart=r.start,u.selectionEnd=r.end,u.scrollTop=r.scrollTop},this.setInputAreaSelectionStartEnd=function(){if(t.ieCachedRange||!u.selectionStart&&0!==u.selectionStart){if(f.selection){r.text=c.fixEolChars(u.value)
var e=t.ieCachedRange||f.selection.createRange(),n=c.fixEolChars(e.text),a=""+n+""
e.text=a
var o=c.fixEolChars(u.value)
e.moveStart("character",-a.length),e.text=n,r.start=o.indexOf(""),r.end=o.lastIndexOf("")-"".length
var i=r.text.length-c.fixEolChars(u.value).length
if(i){for(e.moveStart("character",-n.length);i--;)n+="\n",r.end+=1
e.text=n}t.ieCachedRange&&(r.scrollTop=t.ieCachedScrollTop),t.ieCachedRange=null,this.setInputAreaSelection()}}else r.start=u.selectionStart,r.end=u.selectionEnd},this.restore=function(){void 0!=r.text&&r.text!=u.value&&(u.value=r.text),this.setInputAreaSelection(),u.scrollTop=r.scrollTop},this.getChunks=function(){var t=new e
return t.before=c.fixEolChars(r.text.substring(0,r.start)),t.startTag="",t.selection=c.fixEolChars(r.text.substring(r.start,r.end)),t.endTag="",t.after=c.fixEolChars(r.text.substring(r.end)),t.scrollTop=r.scrollTop,t},this.setChunks=function(e){e.before=e.before+e.startTag,e.after=e.endTag+e.after,this.start=e.before.length,this.end=e.before.length+e.selection.length,this.text=e.before+e.selection+e.after,this.scrollTop=e.scrollTop},this.init()}function u(e,t,n){var r,u,a,o=function(e,t){c.addEvent(e,"input",t),e.onpaste=t,e.ondrop=t,c.addEvent(e,"keypress",t),c.addEvent(e,"keydown",t)},i=function(){var e=0
return window.innerHeight?e=window.pageYOffset:f.documentElement&&f.documentElement.scrollTop?e=f.documentElement.scrollTop:f.body&&(e=f.body.scrollTop),e},s=function(){if(t.preview){var n=t.input.value
if(!n||n!=a){a=n
var r=(new Date).getTime()
n=e.makeHtml(n)
var o=(new Date).getTime()
u=o-r,k(n)}}},d=function(){r&&(clearTimeout(r),r=void 0)
var e=0
e=u,e>3e3&&(e=3e3),r=setTimeout(s,e)},p=function(e){return e.scrollHeight<=e.clientHeight?1:e.scrollTop/(e.scrollHeight-e.clientHeight)},g=function(){t.preview&&(t.preview.scrollTop=(t.preview.scrollHeight-t.preview.clientHeight)*p(t.preview))}
this.refresh=function(e){e?(a="",s()):d()},this.processingTime=function(){return u}
var m,b=!0,v=function(e){var n=t.preview,r=n.parentNode,u=n.nextSibling
r.removeChild(n),n.innerHTML=e,u?r.insertBefore(n,u):r.appendChild(n)},w=function(e){t.preview.innerHTML=e},T=function(e){if(m)return m(e)
try{w(e),m=w}catch(t){m=v,m(e)}},k=function(e){var r=l.getTop(t.input)-i()
if(t.preview&&(T(e),n()),g(),b)return void(b=!1)
var u=l.getTop(t.input)-i()
h.isIE?setTimeout(function(){window.scrollBy(0,u-r)},0):window.scrollBy(0,u-r)}
!function(){o(t.input,d),s(),t.preview&&(t.preview.scrollTop=0)}()}function a(e,t,n,u,a,o,i){function l(e){if(m.focus(),e.textOp){n&&n.setCommandMode()
var a=new r(t)
if(!a)return
var o=a.getChunks(),i=function(){m.focus(),o&&a.setChunks(o),a.restore(),u.refresh()}
e.textOp(o,i)||i()}e.execute&&e.execute(n)}function s(e,n){var r=e.getElementsByTagName("span")[0]
n?(r.style.backgroundPosition=e.XShift+" 0px",e.onmouseover=function(){r.style.backgroundPosition=this.XShift+" -40px"},e.onmouseout=function(){r.style.backgroundPosition=this.XShift+" 0px"},h.isIE&&(e.onmousedown=function(){f.activeElement&&f.activeElement!==t.input||(t.ieCachedRange=document.selection.createRange(),t.ieCachedScrollTop=t.input.scrollTop)}),e.isHelp||(e.onclick=function(){return this.onmouseout&&this.onmouseout(),l(this),!1})):(r.style.backgroundPosition=e.XShift+" -20px",e.onmouseover=e.onmouseout=e.onclick=function(){})}function d(e){return"string"==typeof e&&(e=a[e]),function(){e.apply(a,arguments)}}function g(){n&&(s(b.undo,n.canUndo()),s(b.redo,n.canRedo()))}var m=t.input,b={}
!function(){var n=t.buttonBar,r=document.createElement("ul")
r.id="wmd-button-row"+e,r.className="wmd-button-row",r=n.appendChild(r)
var u=0,a=function(t,n,a,o){var i=document.createElement("li")
i.className="wmd-button",i.style.left=u+"px",u+=25
var c=document.createElement("span")
return i.id=t+e,i.appendChild(c),i.title=n,i.XShift=a,o&&(i.textOp=o),s(i,!0),r.appendChild(i),i},c=function(t){var n=document.createElement("li")
n.className="wmd-spacer wmd-spacer"+t,n.id="wmd-spacer"+t+e,r.appendChild(n),u+=25}
b.bold=a("wmd-bold-button",i("bold"),"0px",d("doBold")),b.italic=a("wmd-italic-button",i("italic"),"-20px",d("doItalic")),c(1),b.link=a("wmd-link-button",i("link"),"-40px",d(function(e,t){return this.doLinkOrImage(e,t,!1)})),b.quote=a("wmd-quote-button",i("quote"),"-60px",d("doBlockquote")),b.code=a("wmd-code-button",i("code"),"-80px",d("doCode")),b.image=a("wmd-image-button",i("image"),"-100px",d(function(e,t){return this.doLinkOrImage(e,t,!0)})),c(2),b.olist=a("wmd-olist-button",i("olist"),"-120px",d(function(e,t){this.doList(e,t,!0)})),b.ulist=a("wmd-ulist-button",i("ulist"),"-140px",d(function(e,t){this.doList(e,t,!1)})),b.heading=a("wmd-heading-button",i("heading"),"-160px",d("doHeading")),b.hr=a("wmd-hr-button",i("hr"),"-180px",d("doHorizontalRule")),c(3),b.undo=a("wmd-undo-button",i("undo"),"-200px",null),b.undo.execute=function(e){e&&e.undo()}
var l=i(/win/.test(p.platform.toLowerCase())?"redo":"redomac")
if(b.redo=a("wmd-redo-button",l,"-220px",null),b.redo.execute=function(e){e&&e.redo()},o){var f=document.createElement("li"),h=document.createElement("span")
f.appendChild(h),f.className="wmd-button wmd-help-button",f.id="wmd-help-button"+e,f.XShift="-240px",f.isHelp=!0,f.style.right="0px",f.title=i("help"),f.onclick=o.handler,s(f,!0),r.appendChild(f),b.help=f}g()}()
var v="keydown"
h.isOpera&&(v="keypress"),c.addEvent(m,v,function(e){if((e.ctrlKey||e.metaKey)&&!e.altKey&&!e.shiftKey){var t=e.charCode||e.keyCode
switch(String.fromCharCode(t).toLowerCase()){case"b":l(b.bold)
break
case"i":l(b.italic)
break
case"l":l(b.link)
break
case"q":l(b.quote)
break
case"k":l(b.code)
break
case"g":l(b.image)
break
case"o":l(b.olist)
break
case"u":l(b.ulist)
break
case"h":l(b.heading)
break
case"r":l(b.hr)
break
case"y":l(b.redo)
break
case"z":l(e.shiftKey?b.redo:b.undo)
break
default:return}e.preventDefault&&e.preventDefault(),window.event&&(window.event.returnValue=!1)}}),c.addEvent(m,"keyup",function(e){if(e.shiftKey&&!e.ctrlKey&&!e.metaKey){if(13===(e.charCode||e.keyCode)){var t={}
t.textOp=d("doAutoindent"),l(t)}}}),h.isIE&&c.addEvent(m,"keydown",function(e){if(27===e.keyCode)return!1}),this.setUndoRedoButtonStates=g}function o(e,t,n){this.hooks=e,this.getString=t,this.converter=n}function i(e){return e.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,function(e,t,n){var r=!1
return t=t.replace(/%(?:[\da-fA-F]{2})|\?|\+|[^\w\d-.\/[\]]/g,function(e){if(3===e.length&&"%"==e.charAt(0))return e.toUpperCase()
switch(e){case"?":return r=!0,"?"
case"+":if(r)return"%20"}return encodeURI(e)}),n&&(n=n.trim?n.trim():n.replace(/^\s*/,"").replace(/\s*$/,""),n=n.replace(/"/g,"quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),n?t+' "'+n+'"':t})}var c={},l={},s={},f=window.document,d=window.RegExp,p=window.navigator,g={lineLength:72},h={isIE:/msie/.test(p.userAgent.toLowerCase()),isIE_5or6:/msie 6/.test(p.userAgent.toLowerCase())||/msie 5/.test(p.userAgent.toLowerCase()),isOpera:/opera/.test(p.userAgent.toLowerCase())},m={bold:"Strong <strong> Ctrl+B",boldexample:"strong text",italic:"Emphasis <em> Ctrl+I",italicexample:"emphasized text",link:"Hyperlink <a> Ctrl+L",linkdescription:"enter link description here",linkdialog:'<h3 style="margin-top:0">Enter the web address.</h3>',quote:"Blockquote <blockquote> Ctrl+Q",quoteexample:"Blockquote",code:"Code Sample <pre><code> Ctrl+K",codeexample:"enter code here",image:"Image <img> Ctrl+G",imagedescription:"",imagedialog:'<h3 style="margin-top:0">'+(image_upload_enabled?"Upload an image or enter its URL.":"Enter the image URL.")+"</h3>",olist:"Numbered List <ol> Ctrl+O",ulist:"Bulleted List <ul> Ctrl+U",litem:"List item",heading:"Heading <h1>/<h2> Ctrl+H",headingexample:"Heading",hr:"Horizontal Rule <hr> Ctrl+R",undo:"Undo - Ctrl+Z",redo:"Redo - Ctrl+Y",redomac:"Redo - Ctrl+Shift+Z",help:"Markdown Editing Help"}
Markdown.Editor=function(e,r,i){i=i||{},"function"==typeof i.handler&&(i={helpButton:i}),i.strings=i.strings||{},i.helpButton&&(i.strings.help=i.strings.help||i.helpButton.title)
var c=function(e){return i.strings[e]||m[e]}
r=r||""
var l=this.hooks=new Markdown.HookCollection
l.addNoop("onPreviewRefresh"),l.addNoop("postBlockquoteCreation"),l.addFalse("insertImageDialog"),this.getConverter=function(){return e}
var s,d=this
this.run=function(){if(!s){s=new t(r)
var p,g,h=new o(l,c,e),m=new u(e,s,function(){l.onPreviewRefresh()});/\?noundo/.test(f.location.href)||(p=new n(function(){m.refresh(),g&&g.setUndoRedoButtonStates()},s),this.textOperation=function(e){p.setCommandMode(),e(),d.refreshPreview()}),g=new a(r,s,p,m,h,i.helpButton,c),g.setUndoRedoButtonStates();(d.refreshPreview=function(){m.refresh(!0)})()}}},e.prototype.findTags=function(e,t){var n,r=this
e&&(n=c.extendRegExp(e,"","$"),this.before=this.before.replace(n,function(e){return r.startTag=r.startTag+e,""}),n=c.extendRegExp(e,"^",""),this.selection=this.selection.replace(n,function(e){return r.startTag=r.startTag+e,""})),t&&(n=c.extendRegExp(t,"","$"),this.selection=this.selection.replace(n,function(e){return r.endTag=e+r.endTag,""}),n=c.extendRegExp(t,"^",""),this.after=this.after.replace(n,function(e){return r.endTag=e+r.endTag,""}))},e.prototype.trimWhitespace=function(e){var t,n,r=this
e?t=n="":(t=function(e){return r.before+=e,""},n=function(e){return r.after=e+r.after,""}),this.selection=this.selection.replace(/^(\s*)/,t).replace(/(\s*)$/,n)},e.prototype.skipLines=function(e,t,n){void 0===e&&(e=1),void 0===t&&(t=1),e++,t++
var r,u
if(navigator.userAgent.match(/Chrome/)&&"X".match(/()./),this.selection=this.selection.replace(/(^\n*)/,""),this.startTag=this.startTag+d.$1,this.selection=this.selection.replace(/(\n*$)/,""),this.endTag=this.endTag+d.$1,this.startTag=this.startTag.replace(/(^\n*)/,""),this.before=this.before+d.$1,this.endTag=this.endTag.replace(/(\n*$)/,""),this.after=this.after+d.$1,this.before){for(r=u="";e--;)r+="\\n?",u+="\n"
n&&(r="\\n*"),this.before=this.before.replace(new d(r+"$",""),u)}if(this.after){for(r=u="";t--;)r+="\\n?",u+="\n"
n&&(r="\\n*"),this.after=this.after.replace(new d(r,""),u)}},c.isVisible=function(e){return window.getComputedStyle?"none"!==window.getComputedStyle(e,null).getPropertyValue("display"):e.currentStyle?"none"!==e.currentStyle.display:void 0},c.addEvent=function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)},c.removeEvent=function(e,t,n){e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n,!1)},c.fixEolChars=function(e){return e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n")},c.extendRegExp=function(e,t,n){null!==t&&void 0!==t||(t=""),null!==n&&void 0!==n||(n="")
var r,u=e.toString()
return u=u.replace(/\/([gim]*)$/,function(e,t){return r=t,""}),u=u.replace(/(^\/|\/$)/g,""),u=t+u+n,new d(u,r)},l.getTop=function(e,t){var n=e.offsetTop
if(!t)for(;e=e.offsetParent;)n+=e.offsetTop
return n},l.getHeight=function(e){return e.offsetHeight||e.scrollHeight},l.getWidth=function(e){return e.offsetWidth||e.scrollWidth},l.getPageSize=function(){var e,t,n,r
return self.innerHeight&&self.scrollMaxY?(e=f.body.scrollWidth,t=self.innerHeight+self.scrollMaxY):f.body.scrollHeight>f.body.offsetHeight?(e=f.body.scrollWidth,t=f.body.scrollHeight):(e=f.body.offsetWidth,t=f.body.offsetHeight),self.innerHeight?(n=self.innerWidth,r=self.innerHeight):f.documentElement&&f.documentElement.clientHeight?(n=f.documentElement.clientWidth,r=f.documentElement.clientHeight):f.body&&(n=f.body.clientWidth,r=f.body.clientHeight),[Math.max(e,n),Math.max(t,r),n,r]},s.createBackground=function(){var e=f.createElement("div"),t=e.style
e.className="wmd-prompt-background",t.position="absolute",t.top="0",t.zIndex="1000",h.isIE?t.filter="alpha(opacity=50)":t.opacity="0.5"
var n=l.getPageSize()
return t.height=n[1]+"px",h.isIE?(t.left=f.documentElement.scrollLeft,t.width=f.documentElement.clientWidth):(t.left="0",t.width="100%"),f.body.appendChild(e),e},s.prompt=function(e,t,n,r){var u,a,o,i,s
void 0===t&&(t="")
var d=function(e){if(27===(e.charCode||e.keyCode))return e.stopPropagation&&e.stopPropagation(),p(!0),!1},p=function(e,t){c.removeEvent(f.body,"keyup",d)
var l=a.value
if(e)l=null
else{if(r&&i.files[0]&&!s)return s=!0,void $.ajax({url:image_upload_path,type:"POST",data:new FormData(t),contentType:!1,cache:!1,processData:!1,success:function(e){s=!1,o.innerHTML=e.error,e.error||(l=e.url,u.parentNode.removeChild(u),n(l))},error:function(e){s=!1,o.innerHTML("There was an error processing your request.")}})
l=l.replace(/^http:\/\/(https?|ftp):\/\//,"$1://"),/^(?:https?|ftp):\/\//.test(l)||(l="http://"+l)}return u.parentNode.removeChild(u),n(l),!1},g=function(){u=f.createElement("div"),u.className="wmd-prompt-dialog",u.style.padding="10px;",u.style.position="fixed",u.style.width="400px",u.style.zIndex="1001"
var n=f.createElement("div")
n.innerHTML=e,n.style.padding="5px",u.appendChild(n)
var s=f.createElement("form"),g=s.style
s.onsubmit=function(){return p(!1)},g.padding="0",g.margin="0",g.cssFloat="left",g.width="100%",g.textAlign="center",g.position="relative",u.appendChild(s),r&&(i=f.createElement("input"),i.type="file",i.name="image",i.accept="image/x-png,image/gif,image/jpeg",g=i.style,g.display="block",g.width="80%",g.marginLeft=g.marginRight="auto",s.appendChild(i),o=f.createElement("p"),g=o.style,g.clear="both",g.color="red",s.appendChild(o)),a=f.createElement("input"),a.type="text",a.value=t,g=a.style,g.display="block",g.width="80%",g.marginLeft=g.marginRight="auto",s.appendChild(a)
var m=f.createElement("input")
m.type="button",m.onclick=function(){return p(!1,s)},m.value="OK",g=m.style,g.margin="10px",g.display="inline",g.width="7em"
var b=f.createElement("input")
b.type="button",b.onclick=function(){return p(!0)},b.value="Cancel",g=b.style,g.margin="10px",g.display="inline",g.width="7em",s.appendChild(m),s.appendChild(b),c.addEvent(f.body,"keyup",d),u.style.top="50%",u.style.left="50%",u.style.display="block",h.isIE_5or6&&(u.style.position="absolute",u.style.top=f.documentElement.scrollTop+200+"px",u.style.left="50%"),f.body.appendChild(u),u.style.marginTop=-l.getHeight(u)/2+"px",u.style.marginLeft=-l.getWidth(u)/2+"px"}
setTimeout(function(){g()
var e=t.length
if(void 0!==a.selectionStart)a.selectionStart=0,a.selectionEnd=e
else if(a.createTextRange){var n=a.createTextRange()
n.collapse(!1),n.moveStart("character",-e),n.moveEnd("character",e),n.select()}a.focus()},0)}
var b=o.prototype
b.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)",b.unwrap=function(e){var t=new d("([^\\n])\\n(?!(\\n|"+this.prefixes+"))","g")
e.selection=e.selection.replace(t,"$1 $2")},b.wrap=function(e,t){this.unwrap(e)
var n=new d("(.{1,"+t+"})( +|$\\n?)","gm"),r=this
e.selection=e.selection.replace(n,function(e,t){return new d("^"+r.prefixes,"").test(e)?e:t+"\n"}),e.selection=e.selection.replace(/\s+$/,"")},b.doBold=function(e,t){return this.doBorI(e,t,2,this.getString("boldexample"))},b.doItalic=function(e,t){return this.doBorI(e,t,1,this.getString("italicexample"))},b.doBorI=function(e,t,n,r){e.trimWhitespace(),e.selection=e.selection.replace(/\n{2,}/g,"\n")
var u=/(\**$)/.exec(e.before)[0],a=/(^\**)/.exec(e.after)[0],o=Math.min(u.length,a.length)
if(o>=n&&(2!=o||1!=n))e.before=e.before.replace(d("[*]{"+n+"}$",""),""),e.after=e.after.replace(d("^[*]{"+n+"}",""),"")
else if(!e.selection&&a){e.after=e.after.replace(/^([*_]*)/,""),e.before=e.before.replace(/(\s?)$/,"")
var i=d.$1
e.before=e.before+a+i}else{e.selection||a||(e.selection=r)
var c=n<=1?"*":"**"
e.before=e.before+c,e.after=c+e.after}},b.stripLinkDefs=function(e,t){return e=e.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,function(e,n,r,u,a){return t[n]=e.replace(/\s*$/,""),u?(t[n]=e.replace(/["(](.+?)[")]$/,""),u+a):""})},b.addLinkDef=function(e,t){var n=0,r={}
e.before=this.stripLinkDefs(e.before,r),e.selection=this.stripLinkDefs(e.selection,r),e.after=this.stripLinkDefs(e.after,r)
for(var u="",a=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,o=e.before+e.selection+e.after,i=this.converter.makeHtml(o),c="http://this-is-a-real-link.biz/";-1!=i.indexOf(c);)c+="nicetry/"
var l="\n\n",s=0,f=o.replace(a,function e(t,n,r,u,o,i,f){s+=f,l+=" ["+s+"]: "+c+s+"/unicorn\n",s+=n.length,r=r.replace(a,e),s-=n.length
var d=n+r+u+s+i
return s-=f,d})
i=this.converter.makeHtml(f+l)
var d=function(e){return-1!==i.indexOf(c+e+"/unicorn")},p=function(e){n++,e=e.replace(/^[ ]{0,3}\[(\d+)\]:/,"  ["+n+"]:"),u+="\n"+e},g=function(e,t,u,o,i,c,l){return d(s+l)?(s+=l+t.length,u=u.replace(a,g),s-=l+t.length,r[i]?(p(r[i]),t+u+o+n+c):e):e},h=e.before.length
e.before=e.before.replace(a,g),s+=h,h=e.selection.length,t?p(t):e.selection=e.selection.replace(a,g),s+=h
var m=n
return e.after=e.after.replace(a,g),e.after&&(e.after=e.after.replace(/\n*$/,"")),e.after||(e.selection=e.selection.replace(/\n*$/,"")),e.after+="\n\n"+u,m},b.doLinkOrImage=function(e,t,n){e.trimWhitespace(),e.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/)
var r
if(!(e.endTag.length>1&&e.startTag.length>0)){if(e.selection=e.startTag+e.selection+e.endTag,e.startTag=e.endTag="",/\n\n/.test(e.selection))return void this.addLinkDef(e,null)
var u=this,a=function(a){if(r.parentNode.removeChild(r),null!==a){e.selection=(" "+e.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g,"$1\\").substr(1)
var o=" [999]: "+i(a),c=u.addLinkDef(e,o)
e.startTag=n?"![":"[",e.endTag="]["+c+"]",e.selection||(e.selection=n?u.getString("imagedescription"):u.getString("linkdescription"))}t()}
return r=s.createBackground(),n?this.hooks.insertImageDialog(a)||s.prompt(this.getString("imagedialog"),"https://",a,image_upload_enabled):s.prompt(this.getString("linkdialog"),"https://",a),!0}e.startTag=e.startTag.replace(/!?\[/,""),e.endTag="",this.addLinkDef(e,null)},b.doAutoindent=function(e,t){var n=this,r=!1
e.before=e.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n"),e.before=e.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n"),e.before=e.before.replace(/(\n|^)[ \t]+\n$/,"\n\n"),e.selection||/^[ \t]*(?:\n|$)/.test(e.after)||(e.after=e.after.replace(/^[^\n]*/,function(t){return e.selection=t,""}),r=!0),/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(e.before)&&n.doList&&n.doList(e),/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(e.before)&&n.doBlockquote&&n.doBlockquote(e),/(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before)&&n.doCode&&n.doCode(e),r&&(e.after=e.selection+e.after,e.selection="")},b.doBlockquote=function(e,t){e.selection=e.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(t,n,r,u){return e.before+=n,e.after=u+e.after,r}),e.before=e.before.replace(/(>[ \t]*)$/,function(t,n){return e.selection=n+e.selection,""}),e.selection=e.selection.replace(/^(\s|>)+$/,""),e.selection=e.selection||this.getString("quoteexample")
var n,r="",u=""
if(e.before){for(var a=e.before.replace(/\n$/,"").split("\n"),o=!1,i=0;i<a.length;i++){var c=!1
n=a[i],o=o&&n.length>0,/^>/.test(n)?(c=!0,!o&&n.length>1&&(o=!0)):c=!!/^[ \t]*$/.test(n)||o,c?r+=n+"\n":(u+=r+n,r="\n")}/(^|\n)>/.test(r)||(u+=r,r="")}e.startTag=r,e.before=u,e.after&&(e.after=e.after.replace(/^\n?/,"\n")),e.after=e.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(t){return e.endTag=t,""})
var l=function(t){var n=t?"> ":""
e.startTag&&(e.startTag=e.startTag.replace(/\n((>|\s)*)\n$/,function(e,t){return"\n"+t.replace(/^[ ]{0,3}>?[ \t]*$/gm,n)+"\n"})),e.endTag&&(e.endTag=e.endTag.replace(/^\n((>|\s)*)\n/,function(e,t){return"\n"+t.replace(/^[ ]{0,3}>?[ \t]*$/gm,n)+"\n"}))};/^(?![ ]{0,3}>)/m.test(e.selection)?(this.wrap(e,g.lineLength-2),e.selection=e.selection.replace(/^/gm,"> "),l(!0),e.skipLines()):(e.selection=e.selection.replace(/^[ ]{0,3}> ?/gm,""),this.unwrap(e),l(!1),!/^(\n|^)[ ]{0,3}>/.test(e.selection)&&e.startTag&&(e.startTag=e.startTag.replace(/\n{0,2}$/,"\n\n")),!/(\n|^)[ ]{0,3}>.*$/.test(e.selection)&&e.endTag&&(e.endTag=e.endTag.replace(/^\n{0,2}/,"\n\n"))),e.selection=this.hooks.postBlockquoteCreation(e.selection),/\n/.test(e.selection)||(e.selection=e.selection.replace(/^(> *)/,function(t,n){return e.startTag+=n,""}))},b.doCode=function(e,t){var n=/\S[ ]*$/.test(e.before)
if(!/^[ ]*\S/.test(e.after)&&!n||/\n/.test(e.selection)){e.before=e.before.replace(/[ ]{4}$/,function(t){return e.selection=t+e.selection,""})
var r=1,u=1;/(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before)&&(r=0),/^\n(\t|[ ]{4,})/.test(e.after)&&(u=0),e.skipLines(r,u),e.selection?/^[ ]{0,3}\S/m.test(e.selection)?/\n/.test(e.selection)?e.selection=e.selection.replace(/^/gm,"    "):e.before+="    ":e.selection=e.selection.replace(/^(?:[ ]{4}|[ ]{0,3}\t)/gm,""):(e.startTag="    ",e.selection=this.getString("codeexample"))}else e.trimWhitespace(),e.findTags(/`/,/`/),e.startTag||e.endTag?e.endTag&&!e.startTag?(e.before+=e.endTag,e.endTag=""):e.startTag=e.endTag="":(e.startTag=e.endTag="`",e.selection||(e.selection=this.getString("codeexample")))},b.doList=function(e,t,n){var r=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,u="-",a=1,o=function(){var e
return n?(e=" "+a+". ",a++):e=" "+u+" ",e},i=function(e){return void 0===n&&(n=/^\s*\d/.test(e)),e=e.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(e){return o()})}
if(e.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null),!e.before||/\n$/.test(e.before)||/^\n/.test(e.startTag)||(e.before+=e.startTag,e.startTag=""),e.startTag){var c=/\d+[.]/.test(e.startTag)
if(e.startTag="",e.selection=e.selection.replace(/\n[ ]{4}/g,"\n"),this.unwrap(e),e.skipLines(),c&&(e.after=e.after.replace(r,i)),n==c)return}var l=1
e.before=e.before.replace(/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,function(e){return/^\s*([*+-])/.test(e)&&(u=d.$1),l=/[^\n]\n\n[^\n]/.test(e)?1:0,i(e)}),e.selection||(e.selection=this.getString("litem"))
var s=o(),f=1
e.after=e.after.replace(r,function(e){return f=/[^\n]\n\n[^\n]/.test(e)?1:0,i(e)}),e.trimWhitespace(!0),e.skipLines(l,f,!0),e.startTag=s
var p=s.replace(/./g," ")
this.wrap(e,g.lineLength-p.length),e.selection=e.selection.replace(/\n/g,"\n"+p)},b.doHeading=function(e,t){if(e.selection=e.selection.replace(/\s+/g," "),e.selection=e.selection.replace(/(^\s+|\s+$)/g,""),!e.selection)return e.startTag="## ",e.selection=this.getString("headingexample"),void(e.endTag=" ##")
var n=0
e.findTags(/#+[ ]*/,/[ ]*#+/),/#+/.test(e.startTag)&&(n=d.lastMatch.length),e.startTag=e.endTag="",e.findTags(null,/\s?(-+|=+)/),/=+/.test(e.endTag)&&(n=1),/-+/.test(e.endTag)&&(n=2),e.startTag=e.endTag="",e.skipLines(1,1)
var r=0==n?2:n-1
if(r>0){var u=r>=2?"-":"=",a=e.selection.length
for(a>g.lineLength&&(a=g.lineLength),e.endTag="\n";a--;)e.endTag+=u}},b.doHorizontalRule=function(e,t){e.startTag="----------\n",e.selection="",e.skipLines(2,1,!0)}}(),function(){function e(e){return e.replace(/<[^>]*>?/gi,t)}function t(e){return e.match(a)||e.match(o)||e.match(i)?e:""}function n(e){if(""==e)return""
var t=/<\/?\w+[^>]*(\s|$|>)/g,n=e.toLowerCase().match(t),r=(n||[]).length
if(0==r)return e
for(var u,a,o,i="<p><img><br><li><hr>",c=[],l=[],s=!1,f=0;f<r;f++)if(u=n[f].replace(/<\/?(\w+).*/,"$1"),!(c[f]||i.search("<"+u+">")>-1)){if(a=n[f],o=-1,!/^<\//.test(a))for(var d=f+1;d<r;d++)if(!c[d]&&n[d]=="</"+u+">"){o=d
break}-1==o?s=l[f]=!0:c[o]=!0}if(!s)return e
var f=0
return e=e.replace(t,function(e){var t=l[f]?"":e
return f++,t})}var r,u
"object"==typeof exports&&"function"==typeof require?(r=exports,u=require("./Markdown.Converter").Converter):(r=window.Markdown,u=r.Converter),r.getSanitizingConverter=function(){var t=new u
return t.hooks.chain("postConversion",e),t.hooks.chain("postConversion",n),t}
var a=/^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol(?: start="\d+")?|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,o=/^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)*[\]$]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,i=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)*[\]$]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i}()
