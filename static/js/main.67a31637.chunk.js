(this.webpackJsonpgitline=this.webpackJsonpgitline||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),i=a.n(c),l=(a(39),a(2)),s=(a(40),a(41),a(15)),o=a.n(s),m=a(26),u=a(27),_=a.n(u),d=(a(127),a(28));function E(e){var t=e.repo,a=e.login,c=e.closeReadme,i=Object(n.useState)(!1),s=Object(l.a)(i,2),u=s[0],E=s[1],p=Object(n.useState)(),f=Object(l.a)(p,2),g=f[0],v=f[1],b=Object(n.useState)(""),h=Object(l.a)(b,2),N=h[0],y=h[1],O=Object(n.useCallback)(function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),n="https://api.github.com/repos/".concat(t,"/").concat(a,"/readme"),e.next=4,fetch(n).then((function(e){return e.json()}));case 4:if(r=e.sent,!(c=r.download_url)){e.next=12;break}return e.next=9,fetch(c).then((function(e){return e.text()}));case 9:i=e.sent,e.next=13;break;case 12:i="## This repository has no README.md";case 13:y(i),E(!1);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),[]);return Object(n.useEffect)((function(){t&&a&&O(a,t).catch(v)}),[t,a,O]),g?r.a.createElement("pre",null,JSON.stringify(g,null,2)):u?r.a.createElement("p",{className:"readmeLoader"},"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"repoModal__content"},r.a.createElement(d.a,{onClick:c,className:"repoModal__content__closeIcon"}),r.a.createElement(_.a,{source:N})))}function p(e){var t=e.repoName,a=e.date,c=e.description,i=e.login,s=Object(n.useState)(!1),o=Object(l.a)(s,2),m=o[0],u=o[1],_=new Date(a),d=function(){u(!1),document.body.style.overflow=""};return r.a.createElement("div",{className:"timeline__item"},r.a.createElement("div",{className:"timeline__item__content",onClick:function(){u(!0),document.body.style.overflow="hidden"}},r.a.createElement("span",{className:"timeline__item__content__time"},_.toLocaleDateString(navigator.language,{month:"long",day:"numeric",year:"numeric"})),r.a.createElement("h3",{className:"timeline__item__content__title"},t),r.a.createElement("p",{className:"timeline__item__content__description"},c||"No discription written")),m?r.a.createElement("div",{className:"repoModal",onClick:function(e){"repoModal"===e.target.className&&d()}},r.a.createElement(E,{login:i,repo:t,closeReadme:d})):null)}function f(e){var t=e.uri,a=e.renderSuccess,c=e.laodingFallback,i=void 0===c?r.a.createElement("p",null,"loading..."):c,s=e.renderError,o=void 0===s?function(e){return r.a.createElement("pre",null,JSON.stringify(e,null,2))}:s,m=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(),s=Object(l.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)(),_=Object(l.a)(u,2),d=_[0],E=_[1];return Object(n.useEffect)((function(){c(!0),fetch(e).then((function(e){return e.json()})).then((function(e){return m(e)})).then((function(){return c(!1)})).catch((function(e){return E(e)}))}),[e]),{loading:r,data:o,error:d}}(t),u=m.loading,_=m.data,d=m.error;return u?i:d?o(d):_?a({data:_}):void 0}function g(e){var t=e.login;return t?r.a.createElement(f,{uri:"https://api.github.com/users/".concat(t,"/repos?sort=created"),renderSuccess:function(e){var a=e.data;return r.a.createElement("div",{className:"timeline"},r.a.createElement("h1",{className:"timeline__heading"},"Repositories"),Array.isArray(a)&&a.map((function(e){return r.a.createElement(p,{key:e.id,repoName:e.name,date:e.created_at,description:e.description,login:t})})))}}):r.a.createElement("h3",{className:"timelineLanding"},"Historians take events and place them on a timeline. This shows the chronology of a span of time. By doing this, the relationship between events can be seen. Patterns can emerge that might not be seen without the timeline.")}a(128);var v=a(29),b=a.n(v);a(129);function h(e){var t=e.imgUrl,a=e.children,n=e.isImageBig,c=void 0!==n&&n;return r.a.createElement("div",{className:"twoColumnLayout"},r.a.createElement("div",{className:c?"twoColumnLayout__imageContainerSmall":"twoColumnLayout__imageContainerBig"},r.a.createElement("img",{src:t,alt:"landing"})),r.a.createElement("div",{className:"twoColumnLayout__content"},a))}var N=a(30),y=a.n(N),O=a(31),j=a.n(O),k=a(32),w=a.n(k),S=a(5),D=a(9);a(136);function L(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h2",{className:"loading__heading"},"Loading..."))}a(137);function C(e){var t,a=Object(n.useState)(!1),c=Object(l.a)(a,2),i=c[0],s=c[1];return r.a.createElement("div",{className:"tooltip",onMouseEnter:function(){t=setTimeout((function(){s(!0)}),e.delay||400)},onMouseLeave:function(){clearTimeout(t),s(!1)}},e.children,i&&r.a.createElement("div",{className:"tooltip__tip ".concat(e.direction||"top")},e.content))}function x(e){var t=e.login;return t?r.a.createElement(f,{uri:"https://api.github.com/users/".concat(t),laodingFallback:r.a.createElement(L,null),renderSuccess:function(e){var t=e.data;return r.a.createElement(h,{imgUrl:j.a,isImageBig:!0},r.a.createElement("section",{className:"userDetails"},r.a.createElement("div",{className:"userDetails__card"},r.a.createElement("div",{className:"userDetails__card__heading"},r.a.createElement("div",{style:{position:"relative"},className:"container"},r.a.createElement("h3",null,"User Profile"),r.a.createElement(S.b,null,r.a.createElement(S.a,{variant:1,right:"0px",top:"-50%",delayMS:1e3}),r.a.createElement(S.a,{variant:0,right:"0px",top:"50%",delayMS:300}),r.a.createElement(S.a,{variant:2,left:"40%",top:"-50%",delayMS:500}),r.a.createElement(S.a,{variant:3,left:"0",top:"-50%"}),r.a.createElement(S.a,{variant:2,left:"0",top:"50%"}))),r.a.createElement("img",{src:w.a,alt:"avatar illustration"})),r.a.createElement("div",{className:"userDetails__card__imageContainer"},r.a.createElement("div",{className:"userDetails__card__imageContainer__image"},r.a.createElement("img",{src:t.avatar_url,alt:"".concat(t.login," avatar")}))),r.a.createElement("div",{className:"userDetails__card__content"},r.a.createElement("div",{style:{marginBottom:"7px"}},r.a.createElement("p",{className:"userDetails__card__content__name"},t.name),t.bio?t.bio.length>60?r.a.createElement(C,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"BIO"),r.a.createElement("p",null,t.bio)),direction:"right",delay:"300"},r.a.createElement("p",null,t.bio.substring(0,60)+"...")):r.a.createElement("p",null,t.bio):null),r.a.createElement("p",{className:"userDetails__card__content__username"},r.a.createElement("span",{className:"userDetails__card__content__key"},"Username:"," "),t.login),r.a.createElement("p",{className:"userDetails__card__content__followers"},r.a.createElement("span",{className:"userDetails__card__content__key"},"Followers:"," "),t.followers),r.a.createElement("p",{className:"userDetails__card__content__publicRepos"},r.a.createElement("span",{className:"userDetails__card__content__key"},"Public Repositories:"," "),t.public_repos),r.a.createElement("div",{className:"userDetails__card__content__links"},r.a.createElement("div",{className:"userDetails__card__content__links__link"},r.a.createElement("a",{href:t.html_url},r.a.createElement(C,{content:"GitHub",direction:"bottom"},r.a.createElement(D.a,{className:"userDetails__card__content__links__link__icon"})))),t.twitter_username&&r.a.createElement("div",{className:"userDetails__card__content__links__link"},r.a.createElement("a",{href:"https://twitter.com/".concat(t.twitter_username)},r.a.createElement(C,{content:"Twitter",direction:"bottom"},r.a.createElement(D.b,{className:"userDetails__card__content__links__link__icon"})))))))))}}):r.a.createElement(h,{imgUrl:y.a},r.a.createElement("h2",{className:"twoColumnLayout__content__heading"},"Nothing to show"),r.a.createElement("div",{className:"twoColumnLayout__content__subHeading"},r.a.createElement("h4",null,"Start searching for profiles"),r.a.createElement("img",{src:b.a,alt:"search gif",className:"twoColumnLayout__content__subHeading__gif"})))}a(138);var U=a(33),M=a.n(U);function A(e){var t=e.login,a=e.setLogin,c=e.setPrevUser,i=Object(n.useRef)(t),s=function(e){var t=Object(n.useState)(e),a=Object(l.a)(t,2),r=a[0],c=a[1];return[{value:r,onChange:function(e){return c(e.target.value)}},function(){return c("")}]}(t),o=Object(l.a)(s,2),m=o[0],u=o[1];return Object(n.useEffect)((function(){c(i.current),i.current=t}),[t,c]),r.a.createElement("form",{className:"searchForm"},r.a.createElement("div",{className:"searchForm__input"},r.a.createElement("img",{src:M.a,alt:"search icon"}),r.a.createElement("input",Object.assign({},m,{type:"text",placeholder:"Enter Github Username",required:!0}))),r.a.createElement("button",{className:"searchForm__button",type:"submit",onClick:function(e){e.preventDefault(),a(m.value),u()},disabled:!m.value},"SEARCH"))}a(139);function F(e){var t=e.login,a=e.setLogin,n=e.setPrevUser;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar__brand"},"GitLine"),r.a.createElement(A,{login:t,setLogin:a,setPrevUser:n}))}a(140);function P(e){var t=e.prevUser,a=e.setLogin;return r.a.createElement("p",{className:"prevUser"},"Previously Searched User:"," ",r.a.createElement("button",{className:"prevUser__button",onClick:function(){a(t)}},t," "))}var R=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),o=s[0],m=s[1];return r.a.createElement("div",{className:"pink"},r.a.createElement(F,{login:a,setLogin:c,setPrevUser:m}),r.a.createElement(P,{prevUser:o,setLogin:c}),r.a.createElement(x,{login:a}),r.a.createElement(g,{login:a}))};i.a.render(r.a.createElement(R,null),document.getElementById("root"))},29:function(e,t,a){e.exports=a.p+"static/media/animat-search.64c18dfd.gif"},30:function(e,t,a){e.exports=a.p+"static/media/Asset 1.bd8706f6.svg"},31:function(e,t,a){e.exports=a.p+"static/media/Asset 150.b0334a33.png"},32:function(e,t,a){e.exports=a.p+"static/media/Asset 17.76ec9258.svg"},33:function(e,t,a){e.exports=a.p+"static/media/Asset 100.a20e89d4.svg"},34:function(e,t,a){e.exports=a(141)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){}},[[34,1,2]]]);
//# sourceMappingURL=main.67a31637.chunk.js.map