(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=(n(16),n(10)),o=n(2),u=n(3),l=n(5),d=n(4),b=(n(17),n(9)),h=n(6),j=n(20),m=n(0),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=Object(j.a)(),t.numberInputID=Object(j.a)(),t.handleInputChnage=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(h.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(b.a)({id:Object(j.a)()},t.state)),t.reset()},t}return Object(u.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(m.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(m.jsx)("input",{value:this.state.name,id:this.nameInputId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChnage})]}),Object(m.jsxs)("label",{htmlFor:this.numberInputID,children:["Number",Object(m.jsx)("input",{value:this.state.number,id:this.numberInputID,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputChnage})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:t.props.contacts},t.handleClick=function(e){t.props.onClick(e)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.contacts;return Object(m.jsx)("ul",{children:e.map((function(e){return Object(m.jsxs)("li",{children:[e.name," ",e.number,Object(m.jsx)("button",{onClick:function(){return t.handleClick(e.id)},type:"button",children:"delete"})]},e.id)}))})}}]),n}(a.Component);f.defaultProps={contacts:[]};var O=f,v=function(t){var e=t.value,n=t.handler,a=Object(j.a)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{htmlFor:a}),Object(m.jsx)("input",{id:a,type:"text",value:e,onChange:n})]})},C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.fomrSubmitHandler=function(e){var n=e.name.toLowerCase(),a=t.state.contacts.find((function(t){return t.name.toLowerCase()===n}));a?alert("".concat(a.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.handleFilter=function(e){t.setState({filter:e.currentTarget.value})},t.handleClickDelete=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.value,a=this.state.filter.toLowerCase(),r=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h3",{children:"Phonebook"}),Object(m.jsx)(p,{onSubmit:this.fomrSubmitHandler}),Object(m.jsx)("h3",{children:"Contacts"}),Object(m.jsx)("p",{children:"filter via name"}),Object(m.jsx)(v,{value:n,handler:this.handleFilter}),Object(m.jsx)(O,{contacts:r,onClick:this.handleClickDelete})]})}}]),n}(a.Component);C.defaultProps={contacts:[]};var x=C;i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9f8c79e4.chunk.js.map