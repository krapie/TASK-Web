(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(20),s=n.n(a),r=(n(26),n(4)),i=(n(27),n(0)),d=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{children:"\u24d2 2021 Kevin.P, All rights reserved."})})},l=n(12),j=(n(29),function(e){var t=e.userInfo;return Object(i.jsx)("nav",{className:"navigation",children:Object(i.jsxs)("ul",{className:"navigation-list",children:[Object(i.jsx)("li",{id:"logo",children:"\u03c0"}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/",children:"\ud560\uc77c"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/preference",children:"\uc124\uc815"})}),Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"navigation-user-info",children:[Object(i.jsx)("img",{className:"navigation-user_picture",src:t.pictureUrl,alt:t.name}),Object(i.jsx)("span",{className:"navigation-user-name",children:t.name})]})})]})})}),u=n(13),h=n(9),p=(n(35),function(e){var t=e.id,n=e.content,c=e.onRemove,o=e.onChange;return Object(i.jsxs)("li",{className:"daydo-item",children:[Object(i.jsx)("input",{type:"text",className:"todo-content",value:n,onChange:function(e){o(e,t)}}),Object(i.jsx)("span",{className:"remove-item",onClick:function(e){e.stopPropagation(),c(t)},children:"\xd7"})]})}),b=(n(36),function(e){var t,n=e.day,c=e.daydoList,o=e.onRemove,a=e.onChange,s=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc77c"][n]+"\uc694\uc77c";return t=c?0===c.length?Object(i.jsxs)("div",{className:"daydo-empty-list",children:[s,"\ub9c8\ub2e4 \ud560 \uc77c\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694!"]}):c.map((function(e){var t=e.id,n=e.content;return Object(i.jsx)(p,{id:t,content:n,onRemove:o,onChange:a},t)})):Object(i.jsx)("p",{children:"\ub85c\ub529\uc911..."}),Object(i.jsx)("ul",{className:"todo-list-wrapper",children:t})}),m=(n(37),function(e){var t=e.value,n=e.onChange,c=e.onCreate,o=e.onKeyPress;return Object(i.jsxs)("div",{className:"daydo-form",children:[Object(i.jsx)("span",{children:"+"}),Object(i.jsx)("input",{type:"text",value:t,onChange:n,onKeyPress:o,placeholder:"\ud560 \uc77c \uc801\uae30"}),Object(i.jsx)("button",{onClick:c,children:"\ucd94\uac00"})]})}),f=(n(38),n(39),function(e){var t=e.day,n=e.onSlide,c=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc77c"][t]+"\uc694\uc77c";return Object(i.jsxs)("div",{className:"daydo-title",children:[Object(i.jsx)("h2",{className:"left",onClick:n,children:"<"}),Object(i.jsx)("h2",{children:c}),Object(i.jsx)("h2",{className:"right",onClick:n,children:">"})]})}),O=function(e){var t=e.idToken,n=e.darkTheme,o=new Date,a=Object(c.useState)([]),s=Object(r.a)(a,2),d=s[0],l=s[1],j=Object(c.useState)([]),p=Object(r.a)(j,2),O=p[0],x=p[1],v=Object(c.useState)(""),g=Object(r.a)(v,2),y=g[0],N=g[1],k=Object(c.useState)(!1),T=Object(r.a)(k,2),S=T[0],w=T[1],C=Object(c.useState)(o.getDay()),D=Object(r.a)(C,2),L=D[0],E=D[1];function P(){N("");var e={token:t,content:y,day:L};fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/daydo",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("\uc0c8 Todo \uc544\uc774\ud15c \uc0dd\uc131\ub428: ",e),x([].concat(Object(h.a)(O),[e]))})),w(!1)}return Object(c.useEffect)((function(){console.log();var e=document.querySelectorAll("input");n?e.forEach((function(e){return e.classList.add("dark")})):e.forEach((function(e){return e.classList.remove("dark")}))})),Object(c.useEffect)((function(){S||fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/daydos",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 \ubaa8\ub4e0 \uc694\uc77c\ubcc4 Daydo \ubaa9\ub85d \uac00\uc838\uc634: ",e),w(!0),l(e)}));var e=d.filter((function(e){return 0===L?7===e.day:e.day===L}));x(e)}),[S,d,L]),Object(i.jsxs)("div",{className:"template-wrapper daydo-list-template-wrapper",children:[Object(i.jsx)("div",{className:"daydo-title-wrapper",children:Object(i.jsx)(f,{day:L,onSlide:function(e){"right"===e.target.className?E(7===L?1:L+1):E(1===L?7:L-1)}})}),Object(i.jsx)("p",{}),Object(i.jsx)("div",{className:"daydo-list-wrapper",children:Object(i.jsx)(b,{day:L,daydoList:O,onRemove:function(e){var t=O.filter((function(t){return t.id!==e}));fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/daydo/".concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc0ad\uc81c\ub428")})),x(t),w(!1)},onChange:function(e,t){var n=O.findIndex((function(e){return e.id===t})),c=O[n];c.content=e.target.value,fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/daydo/".concat(t),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc5c5\ub370\uc774\ud2b8\ub428")}));var o=Object(h.a)(O);o[n]=Object(u.a)({},c),x(o),w(!1)}})}),Object(i.jsx)("div",{className:"daydo-form-wrapper",children:Object(i.jsx)(m,{value:y,onChange:function(e){N(e.target.value)},onCreate:P,onKeyPress:function(e){"Enter"===e.key&&P()}})})]})},x=(n(40),function(e){var t=e.darkTheme,n=e.onToggle;return Object(i.jsxs)("div",{className:"template-wrapper preference-template-wrapper",children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{children:"\uae30\ubcf8 \uc124\uc815"}),Object(i.jsx)("p",{})]}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)("ul",{className:"general",children:Object(i.jsxs)("li",{className:"theme",children:[Object(i.jsx)("span",{className:"text",children:"\ub2e4\ud06c \ubaa8\ub4dc"}),Object(i.jsxs)("label",{className:"switch",children:[Object(i.jsx)("input",{type:"checkbox",checked:t,name:"theme",onChange:n}),Object(i.jsx)("span",{className:"slider round"})]}),Object(i.jsx)("p",{style:{color:"gray",border:"none",width:"100%",marginTop:"5%"},children:"\ubc24\uc5d0\ub294 \ub2e4\ud06c \ubaa8\ub4dc\ub97c \ucf1c\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub824\uc694."})]})})})]})});var v=function(e){var t=e.idToken,n=e.darkTheme,c=e.handleThemeToggle;return Object(i.jsxs)("div",{className:"preference-wrapper",children:[Object(i.jsxs)("div",{className:"component",children:[Object(i.jsx)("h1",{style:{fontSize:"3rem"},children:"\uc124\uc815"}),Object(i.jsx)("p",{children:"\uc694\uc77c\ubcc4 \ud560 \uc77c \uc124\uc815"}),Object(i.jsx)(O,{idToken:t,darkTheme:n}),Object(i.jsxs)("p",{style:{color:"gray"},children:["\uc694\uc77c\ubcc4\ub85c \ud560 \uc77c\uc744 \uc124\uc815\ud558\uba74",Object(i.jsx)("br",{})," \ud574\ub2f9 \uc694\uc77c\uc5d0 \uc790\ub3d9\uc73c\ub85c \ud560 \uc77c\uc774 \uac31\uc2e0\ub429\ub2c8\ub2e4!"]})]}),Object(i.jsx)("div",{className:"component",children:Object(i.jsx)(x,{darkTheme:n,onToggle:c})})]})},g=(n(41),function(e){var t=e.value,n=e.onChange,c=e.onCreate,o=e.onKeyPress;return Object(i.jsxs)("div",{className:"todo-form",children:[Object(i.jsx)("span",{children:"+"}),Object(i.jsx)("input",{type:"text",value:t,onChange:n,onKeyPress:o,placeholder:"\ud560 \uc77c \uc801\uae30"}),Object(i.jsx)("button",{onClick:c,children:"\ucd94\uac00"})]})}),y=(n(42),function(e){var t=e.id,n=e.content,c=e.isDone,o=e.onRemove,a=e.onChange,s=e.onToggle;return Object(i.jsxs)("li",{className:"todo-item",children:[Object(i.jsx)("input",{id:t,type:"checkbox",checked:c,onChange:function(){s(t)}}),Object(i.jsx)("label",{htmlFor:t}),Object(i.jsx)("input",{type:"text",className:"todo-content ".concat(c?"checked":""),value:n,onChange:function(e){a(e,t)}}),Object(i.jsx)("span",{className:"remove-item",onClick:function(e){e.stopPropagation(),o(t)},children:"\xd7"})]})}),N=(n(43),function(e){var t,n=e.todoList,c=e.onRemove,o=e.onChange,a=e.onToggle;return t=0===n.length?Object(i.jsx)("div",{className:"todo-empty-list",children:"\uc0c8 \ud560 \uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694!"}):n.map((function(e){var t=e.id,n=e.content,s=e.isDone;return Object(i.jsx)(y,{id:t,content:n,isDone:s,onRemove:c,onChange:o,onToggle:a},t)})),Object(i.jsx)("ul",{className:"todo-list-wrapper",children:t})}),k=(n(44),function(e){var t=e.idToken,n=e.darkTheme,o=Object(c.useState)([]),a=Object(r.a)(o,2),s=a[0],d=a[1],l=Object(c.useState)(""),j=Object(r.a)(l,2),p=j[0],b=j[1],m=Object(c.useState)(!1),f=Object(r.a)(m,2),O=f[0],x=f[1];function v(){b("");var e={token:t,content:p,isDone:!1};fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/todo",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("\uc0c8 Todo \uc544\uc774\ud15c \uc0dd\uc131\ub428: ",e),d([].concat(Object(h.a)(s),[e]))}))}return Object(c.useEffect)((function(){console.log();var e=document.querySelectorAll("input");n?e.forEach((function(e){return e.classList.add("dark")})):e.forEach((function(e){return e.classList.remove("dark")}))})),Object(c.useEffect)((function(){O||fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/todos",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 Todo \ubaa9\ub85d \uac00\uc838\uc634: ",e),d(e),x(!0)}))}),[O]),Object(i.jsxs)("div",{className:"template-wrapper todo-list-template-wrapper",children:[Object(i.jsxs)("div",{className:"todo-title",children:[Object(i.jsx)("h2",{children:"\ubaa9\ub85d"}),Object(i.jsx)("p",{})]}),Object(i.jsx)("div",{className:"todo-lists-wrapper",children:Object(i.jsx)(N,{todoList:s,onRemove:function(e){var t=s.filter((function(t){return t.id!==e}));fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/todo/".concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc0ad\uc81c\ub428")})),d(t)},onChange:function(e,t){var n=s.findIndex((function(e){return e.id===t})),c=s[n];c.content=e.target.value,fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/todo/".concat(t),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc5c5\ub370\uc774\ud2b8\ub428")}));var o=Object(h.a)(s);o[n]=Object(u.a)({},c),d(o)},onToggle:function(e){var t=s.findIndex((function(t){return t.id===e})),n=s[t];n.isDone=!n.isDone,fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/todo/".concat(e),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc5c5\ub370\uc774\ud2b8\ub428")}));var c=Object(h.a)(s);c[t]=Object(u.a)({},n),d(c)}})}),Object(i.jsx)("div",{className:"todo-form-wrapper",children:Object(i.jsx)(g,{value:p,onChange:function(e){b(e.target.value)},onCreate:v,onKeyPress:function(e){"Enter"===e.key&&v()}})})]})});var T=function(e){var t=e.idToken,n=e.darkTheme,c=e.todayDateHTML;return Object(i.jsxs)("div",{className:"component",children:[Object(i.jsx)("h1",{style:{fontSize:"3rem"},children:"\uc624\ub298 \ud560 \uc77c\uc740?"}),c,Object(i.jsx)(k,{idToken:t,darkTheme:n}),Object(i.jsx)("p",{style:{color:"gray"},children:"\uc694\uc77c\ubcc4\ub85c \ud560 \uc77c\uc774 \uc790\ub3d9\uc73c\ub85c \uac31\uc2e0\ub429\ub2c8\ub2e4!"})]})},S=(n(45),n(2));var w=function(){var e=new Date,t=Object(i.jsxs)("p",{children:["\uc624\ub298\uc740 ",Object(i.jsx)("br",{})," ",e.getMonth()+1,"\uc6d4 ",e.getDate(),"\uc77c ",["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc77c"][e.getDay()],"\uc694\uc77c"]}),n=Object(c.useState)(!1),o=Object(r.a)(n,2),a=o[0],s=o[1];function u(){s(!a)}Object(c.useEffect)((function(){var e=document.querySelector("body"),t=document.querySelector(".navigation"),n=document.querySelector(".footer");a?(e.classList.add("dark"),t.classList.add("dark"),n.classList.add("dark")):(e.classList.remove("dark"),t.classList.remove("dark"),n.classList.remove("dark"))}),[a]);var h=Object(c.useState)(!1),p=Object(r.a)(h,2),b=p[0],m=p[1],f=Object(c.useState)(""),O=Object(r.a)(f,2),x=O[0],g=O[1],y=document.cookie.split("; ").find((function(e){return e.startsWith("idToken")})).split("=")[1];return Object(c.useEffect)((function(){b||(fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/user",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(y)}).then((function(e){return e.json()})).then((function(e){console.log("\uc720\uc800 \uc815\ubcf4 \uac00\uc838\uc634: ",{newUserInfo:e}),g(e)})),m(!0))}),[b]),Object(i.jsx)(l.a,{basename:"/dailydo",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(j,{userInfo:x}),Object(i.jsxs)(S.c,{children:[Object(i.jsx)(S.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(T,{idToken:y,darkTheme:a,todayDateHTML:t})}}),Object(i.jsx)(S.a,{path:"/preference",render:function(){return Object(i.jsx)(v,{idToken:y,darkTheme:a,handleThemeToggle:u})}})]}),Object(i.jsx)(d,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.3ec7bb8d.chunk.js.map