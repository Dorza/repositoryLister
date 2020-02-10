(this.webpackJsonprepositoryLister=this.webpackJsonprepositoryLister||[]).push([[0],{38:function(e,t,a){e.exports=a(71)},43:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),l=(a(43),a(73)),o=function(e){return Object(l.a)(new Date(e),"do MMM y")},i=a(33),u=a.n(i),m=function(e){var t=e.text,a=e.size,n=e.styledAs,c=e.onClick,s=e.className,l=u()({"c-btn":!0,"c-btn--primary":"primary"===n,"c-btn--secondary":"secondary"===n,"c-btn--tertiary":"tertiary"===n,"c-btn--small":"small"===a});return r.a.createElement("button",{type:"button",className:"".concat(l," ").concat(s),onClick:c},t)};m.defaultProps={styledAs:"primary",size:"normal",className:""};var p=m,d=function(e){var t=e.type,a=e.onChange;return r.a.createElement("input",Object.assign({type:t,onChange:a},e))},f=function(e){var t=e.text;return r.a.createElement("p",{className:"c-spinner"},t)};f.defaultProps={text:"Loading..."};var h=f,b=function(e){var t=e.btnText,a=e.defaultValue,n=e.onClick,c=e.onChange,s=e.classNames;return r.a.createElement("form",{className:"c-search ".concat(s)},r.a.createElement(d,{className:"c-search__input",type:"text",onChange:c,value:a}),r.a.createElement(p,{type:"submit",text:t,onClick:n}))};b.defaultProps={classNames:""};var _=b,E=function(e){var t=e.handlePrev,a=e.handleNext;return r.a.createElement("div",{class:"c-pagination"},r.a.createElement(p,{size:"small",className:"c-pagination__btn c-pagination__btn--prev",onClick:t,text:"Previous"}),r.a.createElement(p,{size:"small",className:"c-pagination__btn c-pagination__btn--next",onClick:a,text:"Next"}))},v=function(e){var t=e.userRepos,a=e.handlePrev,c=e.handleNext;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"u-title-spacing"},"Found repositories"),r.a.createElement(E,{handlePrev:a,handleNext:c}),r.a.createElement("div",{className:"c-panel-wrapper"},t.map((function(e){return r.a.createElement("div",{className:"c-panel",key:e.id},r.a.createElement("h2",{className:"c-panel__header"},e.name),r.a.createElement("ul",{className:"c-panel__items"},r.a.createElement("li",{className:"c-panel__item c-panel__item--description",title:"Description"},null===e.description?"No description found":e.description),r.a.createElement("li",{className:"c-panel__item c-panel__item--stars",title:"Stars"},e.stars),r.a.createElement("li",{className:"c-panel__item c-panel__item--created",title:"Created"},o(e.created)),r.a.createElement("li",{className:"c-panel__item c-panel__item--updated",title:"Last updated"},o(e.updated)),r.a.createElement("li",{className:"c-panel__item c-panel__item--branch",title:"Default branch"},e.defaultBranch),r.a.createElement("li",{className:"c-panel__item c-panel__item--view",title:"View repo on GitHub"},r.a.createElement("a",{className:"c-btn c-btn--secondary c-btn--small",href:e.url,target:"_blank",rel:"noopener noreferrer"},"View repo"))))}))))},g=function(e){var t=e.orgRepos,a="c-panel";return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"u-title-spacing"},"Found Organisations"),r.a.createElement("div",{className:"".concat(a,"-wrapper")},t.map((function(e){return r.a.createElement("div",{className:"".concat(a),key:e.id},r.a.createElement("h2",{className:"".concat(a,"__header")},r.a.createElement("img",{className:"".concat(a,"__avatar"),src:e.avatar,alt:"".concat(e.name," repository avatar"),width:"20px"}),e.name),r.a.createElement("ul",{className:"".concat(a,"__items")},r.a.createElement("li",{className:"".concat(a,"__item ").concat(a,"__item--view")},r.a.createElement("a",{className:"c-btn c-btn--secondary c-btn--small",href:e.url,target:"_blank",rel:"noopener noreferrer"},"View repo"))))}))))},N=a(13),y=function(){return r.a.createElement("header",{className:"c-nav-bar"},r.a.createElement("nav",null,r.a.createElement(N.b,{className:"c-nav-bar__link",to:"/repositories"},"Repositories"),r.a.createElement(N.b,{className:"c-nav-bar__link",to:"/organisations"},"Organisations")))},x=a(10),w=a.n(x),O=a(15),j=a(8),k=a(36),C=a.n(k),P={get:function(e){if(!e)throw new Error("an api url is required");return C.a.create({baseURL:"https://api.github.com"}).request({method:"get",url:e})}},S=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},T=a(12),R=function(){var e=Object(n.useState)("Wesbos"),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),l=Object(j.a)(s,2),o=l[0],i=l[1],u=Object(n.useState)(!1),m=Object(j.a)(u,2),p=m[0],d=m[1],f=Object(n.useState)(1),b=Object(j.a)(f,2),E=b[0],g=b[1],N="",y=Object(T.useToasts)().addToast,x=function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/users/".concat(a,"/repos?page=1&per_page=10&page=").concat(t),e.next=3,P.get(n).then((function(e){var t=e.data.map((function(e){return{id:e.id,name:e.name,created:e.created_at,updated:e.updated_at,defaultBranch:e.default_branch,description:e.description,stars:e.stargazers_count,url:e.svn_url}}));i(t)})).catch((function(e){d(!1),404===e.response.status?(N="Sorry no repositories for that user could be found, please try another username",console.error(e.response)):N="An error occurred while retrieving data, please try again",y(N,{appearance:"error",autoDismiss:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(0);case 2:d(!0),x(E),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"u-title-spacing"},"User repositories"),r.a.createElement(_,{btnText:"Get Repos",defaultValue:a,onClick:k,onChange:function(e){return c(e.target.value)}}),p&&r.a.createElement(h,null),o&&r.a.createElement(v,{userRepos:o,handlePrev:function(){var e=E-1===0?1:E-1;g(e),x(e)},handleNext:function(){var e=E+1;g(e),x(e)}}))},F=function(){var e=Object(n.useState)("Wesbos"),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),l=Object(j.a)(s,2),o=l[0],i=l[1],u=Object(n.useState)(!1),m=Object(j.a)(u,2),p=m[0],d=m[1],f="",b=Object(T.useToasts)().addToast,E=function(){var e=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/users/".concat(a,"/orgs"),d(!0),e.next=4,S(0);case 4:return e.next=7,P.get(t).then((function(e){var t=e.data.map((function(e){return{id:e.id,name:e.login,avatar:e.avatar_url,url:e.url}}));t.length>0?i(t):b(f="Found 0 organisations this user is associated with",{appearance:"info",autoDismiss:!1}),d(!1)})).catch((function(e){d(!1),404===e.response.status?(f="Sorry no organisations for that user could be found, please try another username",console.error(e.response)):f="An error occurred while retrieving data, please try again",b(f,{appearance:"error",autoDismiss:!1})}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"u-title-spacing"},"User organisations"),r.a.createElement(_,{btnText:"Get Repos",defaultValue:a,onClick:E,onChange:function(e){return c(e.target.value)}}),p&&r.a.createElement(h,null),o&&r.a.createElement(g,{orgRepos:o}))},D=a(9);var V=document.getElementById("root");s.a.render(r.a.createElement((function(){return r.a.createElement(T.ToastProvider,{placement:"bottom-right"},r.a.createElement(N.a,null,r.a.createElement(y,null),r.a.createElement("div",{className:"c-container"},r.a.createElement("main",null,r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/",exact:!0,component:R}),r.a.createElement(D.a,{path:"/repositories",component:R}),r.a.createElement(D.a,{path:"/organisations",component:F}))))))}),null),V)}},[[38,1,2]]]);
//# sourceMappingURL=main.d37ef32d.chunk.js.map