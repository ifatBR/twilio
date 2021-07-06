(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},54:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/logo.e978e1ee.png"},79:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(19),o=n.n(a),i=n(14),s=(n(42),n(43),n(44),n(12)),u={getRandomInt:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)},makeId:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return e},formattedDate:function(t){return new Date(t).toLocaleDateString("he-IL")}};var l=n(1);function d(t){var e=t.todo,n=t.onToggleCheck,r=t.onRemoveTodo;return Object(l.jsxs)("li",{className:"list-row-layout todo-preview",children:[Object(l.jsx)("button",{className:e.doneAt?"status done":"status undone",onClick:function(){return n(e)}}),Object(l.jsxs)(s.b,{to:"/detail/"+e._id,className:"list-row-info-layout preview-info",children:[Object(l.jsx)("p",{className:e.doneAt?"strike":"",children:e.title}),Object(l.jsx)("p",{children:e.importance}),Object(l.jsx)("p",{children:u.formattedDate(e.createdAt)})]}),Object(l.jsx)("button",{className:"btn warning",onClick:function(){return r(e._id)},children:"X"})]})}function j(t){var e=t.todos,n=t.onToggleCheck,r=t.onRemoveTodo;return Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{className:"clean-list todo-list",children:[Object(l.jsx)("li",{className:"list-row-layout headline",children:Object(l.jsxs)("div",{className:"list-row-info-layout",children:[Object(l.jsx)("h3",{className:"title",children:"Title"}),Object(l.jsx)("h3",{className:"importance",children:"Importance"}),Object(l.jsx)("h3",{className:"date",children:"Date"})]})}),e.map((function(t){return Object(l.jsx)(d,{todo:t,onToggleCheck:n,onRemoveTodo:r},t._id)})),Object(l.jsx)("li",{className:"list-row-layout",children:Object(l.jsx)(s.b,{to:"/edit",className:"btn action",children:"+"})})]})})}var b=n(3),p=(n(54),n(16));function f(t){var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=Object(r.useState)(t),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(r.useEffect)((function(){e(a)}),[a]),[a,function(t){var e=t.target,n=e.name,r="number"===e.type?+e.value:e.value;o(Object(b.a)(Object(b.a)({},a),{},Object(p.a)({},n,r)))}]}({date:"",text:""},t.onChangeFilter),n=Object(i.a)(e,2),c=n[0],a=n[1],o=c.date,s=c.text;return Object(l.jsxs)("form",{className:"todo-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(l.jsx)("label",{htmlFor:"date",children:"Filter by date:"}),Object(l.jsx)("input",{type:"date",name:"date",id:"date",value:o,onChange:a,min:"2021-01-01",max:"2050-12-31"}),Object(l.jsx)("button",{type:"button",className:"btn warning",onClick:function(e){return function(e){e.stopPropagation(),a({target:{name:"date",type:"text",value:""}});var n=Object(b.a)(Object(b.a)({},c),{},{date:""});t.onChangeFilter(n)}(e)},children:"Reset"}),Object(l.jsx)("label",{htmlFor:"text",children:"Search:"}),Object(l.jsx)("input",{type:"text",name:"text",id:"text",value:s,onChange:a})]})}var O=n(13),h=n(2),v=n.n(h),x=n(6),m=n(35),w="/api/",g=n.n(m).a.create({withCredentials:!0}),y=function(t,e){return E(t,"GET",e)},T=function(t,e){return E(t,"POST",e)},k=function(t,e){return E(t,"PUT",e)},D=function(t,e){return E(t,"DELETE",e)};function E(t){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(v.a.mark((function t(e){var n,r,c,a=arguments;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",r=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,g({url:"".concat(w).concat(e),method:n,data:r,params:"GET"===n?r:null});case 5:return c=t.sent,t.abrupt("return",c.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(r)),console.dir(t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}var _={save:function(t){return M.apply(this,arguments)},query:function(t){return S.apply(this,arguments)},remove:function(t){return I.apply(this,arguments)},getById:function(t){return A.apply(this,arguments)},getEmptyTodo:function(){return R.apply(this,arguments)}},C="todo";function S(){return(S=Object(x.a)(v.a.mark((function t(e){var n,r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(null===e||void 0===e?void 0:e.date)?new Date(e.date+" 00:00:00").getTime():"",t.prev=1,r=e?"?date=".concat(n,"&text=").concat(e.text):"",c=y(C+r),t.abrupt("return",c);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function A(){return(A=Object(x.a)(v.a.mark((function t(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y("".concat(C,"/").concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function I(){return(I=Object(x.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",D("".concat(C,"/").concat(e)));case 4:return t.prev=4,t.t0=t.catch(0),t.abrupt("return",t.t0);case 7:case"end":return t.stop()}}),t,null,[[0,4]])})))).apply(this,arguments)}function M(){return(M=Object(x.a)(v.a.mark((function t(e){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=6;break}return t.next=4,k("".concat(C,"/").concat(e._id),e);case 4:return n=t.sent,t.abrupt("return",n);case 6:return t.next=8,T(C,e);case 8:return r=t.sent,t.abrupt("return",r);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function R(){return(R=Object(x.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{title:"",description:"",importance:1,doneAt:null,createdAt:null});case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t){return function(){var e=Object(x.a)(v.a.mark((function e(n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getById(t);case 2:r=e.sent,n({type:"SET_TODO",todo:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function F(t){return function(){var e=Object(x.a)(v.a.mark((function e(n){var r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!t._id,e.next=3,_.save(t);case 3:c=e.sent,n(r?{type:"ADD_TODO",todo:c}:{type:"UPDATE_TODO",updatedTodo:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function U(t){return function(){var e=Object(x.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.remove(t);case 2:n({type:"REMOVE_TODO",todoId:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function q(){return function(){var t=Object(x.a)(v.a.mark((function t(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.getEmptyTodo();case 2:n=t.sent,e({type:"SET_TODO",todo:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function B(){var t=Object(r.useState)(null),e=Object(i.a)(t,2),n=e[0],c=e[1],a=Object(O.c)((function(t){return t.todos})),o=Object(O.b)();Object(r.useEffect)((function(){o(function(t){return function(){var e=Object(x.a)(v.a.mark((function e(n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.query(t);case 2:r=e.sent,n({type:"SET_TODOS",todos:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(n))}),[n]);var s=Object(r.useCallback)((function(t){c(t)}),[]),u=Object(r.useCallback)((function(t){o(function(t){var e=null;return t.doneAt||(e=Date.now()),t=Object(b.a)(Object(b.a)({},t),{},{doneAt:e}),function(){var e=Object(x.a)(v.a.mark((function e(n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.save(t);case 2:r=e.sent,n({type:"UPDATE_TODO",updatedTodo:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t))})),d=Object(r.useCallback)((function(t){o(U(t))}));return Object(l.jsxs)("div",{className:"home-page",children:[Object(l.jsx)("h1",{children:"My todos"}),Object(l.jsx)(f,{onChangeFilter:s}),a&&Object(l.jsx)(j,{todos:a,onToggleCheck:u,onRemoveTodo:d})]})}n(75);var L=n(5);function G(){var t=Object(O.c)((function(t){return t.todo})),e=Object(O.b)(),n=Object(L.f)(),c=Object(L.e)(),a=n.id;Object(r.useEffect)((function(){e(a?P(a):q())}),[n]);var o=function(){c.push("/")},i=Object(r.useCallback)((function(t){e(U(t)),o()}));return t&&Object(l.jsxs)("section",{className:"flex column align-center todo-detail",children:[Object(l.jsx)("button",{className:"btn warning back",onClick:o}),Object(l.jsxs)("div",{className:"todo-layout",children:[Object(l.jsx)("h2",{children:t.title}),Object(l.jsx)("h3",{children:"Description:"}),Object(l.jsx)("p",{children:t.description}),Object(l.jsx)("h3",{children:"Created at:"}),Object(l.jsx)("p",{children:u.formattedDate(t.createdAt)}),Object(l.jsx)("h3",{children:"Importance:"}),Object(l.jsx)("p",{children:t.importance}),Object(l.jsx)("h3",{children:"Status:"}),Object(l.jsx)("p",{children:t.doneAt?"Done":"Undone"}),Object(l.jsxs)("div",{className:"flex space-between",children:[Object(l.jsx)(s.b,{to:"/edit/"+t._id,className:"btn action edit",children:"Edit"}),Object(l.jsx)("button",{className:"btn warning",onClick:function(){return i(t._id)},children:"Delete"})]})]})]})}n(76);function V(){var t=Object(L.e)(),e=Object(O.c)((function(t){return t.todo})),n=Object(O.b)(),c=Object(L.f)().id,a=function(){c?t.push("/detail/"+e._id):t.push("/")};Object(r.useEffect)((function(){n(c?P(c):q())}),[]);var o=function(){var t=Object(x.a)(v.a.mark((function t(e){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=parseInt(Date.now()),e.preventDefault(),c=Object(b.a)(Object(b.a)({},d),{},{createdAt:r}),t.prev=3,t.next=6,n(F(c));case 6:a(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}(),s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=Object(r.useState)(t),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(r.useEffect)((function(){o(t)}),[t]),Object(r.useEffect)((function(){e(a)}),[a]),[a,function(t){var e=t.target,n=e.name,r="number"===e.type?+e.value:e.value;o(Object(b.a)(Object(b.a)({},a),{},Object(p.a)({},n,r)))}]}(e||{title:"",description:"",importance:1,doneAt:"",createdAt:""}),u=Object(i.a)(s,2),d=u[0],j=u[1],f=d.title,h=d.description,m=d.importance;return e&&Object(l.jsxs)("section",{className:"todo-edit",colSpan:"6",children:[Object(l.jsx)("button",{className:"btn warning back",onClick:a}),Object(l.jsxs)("form",{className:"todo-layout todo-edit-form",onSubmit:o,children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{name:"title",type:"text",onChange:j,value:f,required:!0}),Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("textarea",{name:"description",type:"text",onChange:j,value:h,required:!0}),Object(l.jsx)("label",{children:"Importance"}),Object(l.jsx)("input",{name:"importance",type:"number",onChange:j,value:m,min:1,max:3}),Object(l.jsx)("button",{className:"btn action",type:"submit",children:"Save"})]})]})}n(77);function X(){return Object(l.jsxs)("header",{className:"flex justify-start align-center app-header",children:[Object(l.jsx)("img",{src:n(78).default,alt:"logo",className:"logo"}),Object(l.jsx)("h2",{children:"DO"}),Object(l.jsx)("div",{})]})}n(79);var J=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(X,{}),Object(l.jsx)(L.a,{component:V,path:"/edit/:id?"}),Object(l.jsx)(L.a,{component:G,path:"/detail/:id"}),Object(l.jsx)(L.a,{component:B,path:"/",exact:!0})]})})},W=n(21),H=n(36),z=n(37),K={todos:[],todo:null};var Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.b,Y=Object(W.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TODOS":return Object(b.a)(Object(b.a)({},t),{},{todos:e.todos});case"SET_TODO":return Object(b.a)(Object(b.a)({},t),{},{todo:e.todo});case"ADD_TODO":return Object(b.a)(Object(b.a)({},t),{},{todos:[].concat(Object(z.a)(t.todos),[e.todo])});case"REMOVE_TODO":return Object(b.a)(Object(b.a)({},t),{},{todos:t.todos.filter((function(t){return t._id!==e.todoId}))});case"UPDATE_TODO":var n=e.updatedTodo;return Object(b.a)(Object(b.a)({},t),{},{todos:t.todos.map((function(t){return t._id===n._id?n:t}))});default:return t}}),Q(Object(W.a)(H.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O.a,{store:Y,children:Object(l.jsx)(J,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[80,1,2]]]);
//# sourceMappingURL=main.35e5b875.chunk.js.map