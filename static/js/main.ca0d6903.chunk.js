(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),l=(t(9),t(3)),s=t(1),c=function(e){var n=Object(s.useState)(""),t=Object(l.a)(n,2),a=t[0],r=t[1],c=Object(s.useState)(!1),o=Object(l.a)(c,2),i=o[0],u=o[1],d=e(a);return{enteredValue:a,hasError:!d&&i,valueIsValid:d,valueReset:function(){r(""),u(!1)},onBlurHandler:function(){u(!0)},onChangeValueHandler:function(e){r(e.target.value),u(!0)}}},o=t(0),i=function(e){var n=function(e){return""!==e.trim()},t=c(n),a=t.enteredValue,r=t.hasError,l=t.valueIsValid,s=t.valueReset,i=t.onBlurHandler,u=t.onChangeValueHandler,d=c(n),m=d.enteredValue,j=d.hasError,b=d.valueIsValid,h=d.valueReset,v=d.onBlurHandler,p=d.onChangeValueHandler,x=c((function(e){return e.match(/\S+@\S+\.\S+/)})),O=x.enteredValue,f=x.hasError,N=x.valueIsValid,V=x.valueReset,g=x.onBlurHandler,C=x.onChangeValueHandler,y=!1;l&&b&&N&&(y=!0);return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y&&(s(),h(),V())},children:[Object(o.jsxs)("div",{className:"control-group",children:[Object(o.jsxs)("div",{className:r?"form-control invalid":"form-control",children:[Object(o.jsx)("label",{htmlFor:"f-name",children:"First Name"}),Object(o.jsx)("input",{type:"text",id:"f-name",value:a,onChange:u,onBlur:i}),r&&Object(o.jsx)("p",{className:"error-text",children:"First Name Can't be empty"})]}),Object(o.jsxs)("div",{className:j?"form-control invalid":"form-control",children:[Object(o.jsx)("label",{htmlFor:"s-name",children:"Last Name"}),Object(o.jsx)("input",{type:"text",id:"s-name",value:m,onChange:p,onBlur:v}),j&&Object(o.jsx)("p",{className:"error-text",children:"Last Name Can't be empty"})]})]}),Object(o.jsxs)("div",{className:f?"form-control invalid":"form-control",children:[Object(o.jsx)("label",{htmlFor:"email",children:"E-mail Address"}),Object(o.jsx)("input",{type:"email",id:"email",value:O,onChange:C,onBlur:g}),f&&Object(o.jsx)("p",{className:"error-text",children:"Wrong E-mail"})]}),Object(o.jsx)("div",{className:"form-actions",children:Object(o.jsx)("button",{disabled:!y,children:"Submit"})})]})};var u=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(i,{})})};r.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.ca0d6903.chunk.js.map