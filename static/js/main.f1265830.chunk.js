(this["webpackJsonpmaterial-color-swatch"]=this["webpackJsonpmaterial-color-swatch"]||[]).push([[0],{46:function(e,a,t){e.exports=t(63)},51:function(e,a,t){},52:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),r=t.n(c),o=(t(51),t(16)),m=t(81),i=t(83),s=t(84),u=t(85),d=t(35),E=t.n(d),h=t(36),p=t.n(h),f=(t(52),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{className:"headbar",position:"fixed",elevation:0},l.a.createElement(i.a,{className:"toolbar"},l.a.createElement("div",{className:"logo-area"},l.a.createElement(E.a,{className:"logoIcon"}),l.a.createElement(s.a,{className:"logoHeadbar"},"Material Color Swatch")),l.a.createElement("div",null,l.a.createElement(u.a,{size:"large",className:"button",onClick:function(){window.open("https://chinmaydabke.com","_blank")},startIcon:l.a.createElement(p.a,null)},l.a.createElement("span",{className:"button-text"},"by "),l.a.createElement("span",{className:"button-text-author"},"CD"))))))}),v=t(65),b=t(93),x=t(86),g=t(87),N=t(37),C=t.n(N),k=(t(58),function(e){var a=e.inputCallback,t=Object(n.useState)(""),c=Object(o.a)(t,2),r=c[0],m=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-component"},l.a.createElement(v.a,{className:"text-field"},l.a.createElement("div",{className:"prefix-area"},l.a.createElement(s.a,{className:"prefix-text"},"#")),l.a.createElement(b.a,{className:"input-base",placeholder:"Enter Hex Value",inputProps:{"aria-label":"search google maps"},onChange:function(e){m(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(m(e.target.value),a(r))}}),l.a.createElement(x.a,{orientation:"vertical"}),l.a.createElement("div",{className:"search-button-area"},l.a.createElement(g.a,{color:"primary","aria-label":"directions",className:"search-button",onClick:function(){return a(r)}},l.a.createElement(C.a,null))))))}),w=t(90),y=t(91),I=t(88),F=t(89),O=t(38),S=t.n(O),$=t(92);t(59);var j=function(e){var a=e.item,t=l.a.useState(!1),n=Object(o.a)(t,2),c=n[0],r=n[1],m=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,a,t,n){return a+a+t+t+n+n}));var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}(a.hex),i="rgb("+m.r+", "+m.g+", "+m.b+")",d=function(e,a){"clickaway"!==a&&r(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{className:"palette-block-component"},l.a.createElement(F.a,null,l.a.createElement("div",{className:"value-text-container"},l.a.createElement(s.a,{className:"value-text"},a.value))),l.a.createElement(F.a,{className:"palette-block",style:{backgroundColor:a.hex}}),l.a.createElement(F.a,null,l.a.createElement("div",{className:"hex-text-container"},l.a.createElement(u.a,{className:"hex-text-button",onClick:function(){var e=document.createElement("textarea");e.value=a.hex,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),r(!0)}},l.a.createElement(s.a,{className:"hash-text"},"#"),l.a.createElement(s.a,{className:"hex-text"},a.hex.slice(1))))),l.a.createElement(F.a,null,l.a.createElement("div",{className:"hex-text-container"},l.a.createElement(u.a,{className:"hex-text-button",onClick:function(){var e=document.createElement("textarea");e.value=i,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),r(!0)}},l.a.createElement(s.a,{className:"rgb-text"},i))))),l.a.createElement($.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:c,autoHideDuration:2e3,onClose:d,message:"Copied to Clipboard!",action:l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{size:"small","aria-label":"close",color:"inherit",onClick:d},l.a.createElement(S.a,{fontSize:"small"})))}))};t(60);function M(e,a,t){return"#"+((1<<24)+(e<<16)+(a<<8)+t).toString(16).slice(1)}var z=function(e){for(var a=[],t=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,a,t,n){return a+a+t+t+n+n}));var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}(e.hex),n=t.r,c=t.g,r=t.b,o=[.05],m=1;m<10;m++)o.push(.1*m);for(var i=0;i<o.length;i++){var s=.5-o[i],u=Math.round(1e3*o[i]),d=M(n+Math.round((s<0?n:255-n)*s),c+Math.round((s<0?c:255-c)*s),r+Math.round((s<0?r:255-r)*s));a.push({value:u,hex:d})}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"palette-component"},l.a.createElement(w.a,null,l.a.createElement(y.a,null,a.map((function(e){return l.a.createElement(j,{item:e,key:e.value+e.hex})}))))))},D=(t(61),function(e){var a,t=e.hex,n=new RegExp(/^([0-9A-Fa-f]{2})+$/);return a=t.length<1?l.a.createElement("p",null):n.test(t)&&t.length<=6?l.a.createElement(z,{hex:t}):l.a.createElement("p",null,t," is not a valid value"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"swatch-component"},a))}),H=(t(62),function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app-root"},l.a.createElement(f,null),l.a.createElement("div",{className:"content-root"},l.a.createElement(k,{inputCallback:c}),l.a.createElement(D,{hex:t}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(H,{key:"app"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.f1265830.chunk.js.map