(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={title:"Contacts_title__34Twh"}},14:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__3sU0k"}},25:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n.n(r),o=n(11),i=n.n(o),l=n(15),s=n(4),u=n(27),d=n(12),b=n.n(d),j=(n(22),n(3)),f=n.n(j),h=function(t){var e=t.onSubmit,n=t.contacts,c=t.title,o=Object(r.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(r.useState)(""),j=Object(s.a)(d,2),h=j[0],m=j[1],p=function(){if(n.find((function(t){return t.name===l})))return alert("".concat(l," is already in contacts!")),!0};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:f.a.title,children:c}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p()||(e(l,h),u(""),m(""))},className:f.a.container,children:[Object(a.jsxs)("label",{className:f.a.textInput,children:["Name",Object(a.jsx)("input",{type:"text",value:l,name:"name",placeholder:"Rosie Simpson",onChange:function(t){return u(t.currentTarget.value)},className:f.a.formInput})]}),Object(a.jsxs)("label",{className:f.a.textInput,children:["Number",Object(a.jsx)(b.a,{country:"ua",value:h,name:"number",placeholder:"4591256",onChange:m,className:f.a.formInput_phone})]}),Object(a.jsx)("button",{type:"submit",className:f.a.addButton,children:"Add contact"})]})]})},m=n(2),p=n.n(m),O=n(13),v=n.n(O),x=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:v.a.title,children:e}),n]})};x.protoTypes={title:p.a.string.isRequired,children:p.a.node};var _=x,g=n(8),y=n.n(g),I=function(t){var e=t.title,n=t.value,r=t.onChange;return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{className:y.a.textInput,children:[e,Object(a.jsx)("input",{type:"text",value:n,onChange:r,className:y.a.formInput})]})})};I.protoTypes={title:p.a.string.isRequired,value:p.a.string.isRequired,onChange:p.a.string.isRequired};var C=I,w=n(10),k=n(16),N=n(14),S=n.n(N),R=function(t){var e=t.children,n=t.onClick,r=Object(k.a)(t,["children","onClick"]);return Object(a.jsx)("button",Object(w.a)(Object(w.a)({type:"button",className:S.a.IconButton,onClick:n},r),{},{children:e}))};R.defaultProps={onClick:function(){return null},children:null};var P=R;function B(){return(B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function E(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var q=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),T=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function D(t,e){var n=t.title,a=t.titleId,c=E(t,["title","titleId"]);return r.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,q,T)}var J=r.forwardRef(D),H=(n.p,n(9)),M=n.n(H),z=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:M.a.list,children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(a.jsxs)("li",{className:M.a.contact,children:[r,": ",c,Object(a.jsx)(P,{onClick:function(){return n(e)},"aria-label":"Delete contact",children:Object(a.jsx)(J,{width:"30",height:"30"})})]},e)}))})};z.protoTypes={contacts:p.a.arrayOf(p.a.shape({id:p.a.number.isRequired})).isRequired,onDeleteContact:p.a.func.isRequired};var F=z,L=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],Y=function(){var t=Object(r.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:L})),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),d=i[0],b=i[1];Object(r.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{title:"Pnonebook",contacts:n,onSubmit:function(t,e){var a={id:Object(u.a)(),name:t,number:e};c([].concat(Object(l.a)(n),[a]))}}),Object(a.jsxs)(_,{title:"Contacts",children:[Object(a.jsx)(C,{title:"Find contacts by name",value:d,onChange:function(t){b(t.currentTarget.value)}}),Object(a.jsx)(F,{contacts:function(){var t=d.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={title:"Phonebook_title__OJYud",container:"Phonebook_container__Yb216",textInput:"Phonebook_textInput__39_1s",formInput:"Phonebook_formInput__5nfaD",addButton:"Phonebook_addButton__31JzT"}},8:function(t,e,n){t.exports={textInput:"Filter_textInput__34RNH",formInput:"Filter_formInput__dCodg"}},9:function(t,e,n){t.exports={list:"ContactsList_list__2RiYd",contact:"ContactsList_contact__2MNvd"}}},[[25,1,2]]]);
//# sourceMappingURL=main.d35226a5.chunk.js.map