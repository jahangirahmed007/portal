(this["webpackJsonpportal-fare"]=this["webpackJsonpportal-fare"]||[]).push([[7],{107:function(e,t,a){"use strict";a.r(t);var l=a(4),n=a(5),r=a(7),c=a(6),s=a(0),m=a.n(s),o=a(28),i=a(3),E=a(29),u=a(16),b=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onLogOut=function(t){t.preventDefault(),e.props.logOut(e.props.history)},e}return Object(n.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"",style:{width:"20vw"}},m.a.createElement("div",{className:"pt-2 ",style:{height:"130vh",backgroundColor:"#047AA9"}},m.a.createElement("h2",{className:" text-center"},m.a.createElement(u.b,{className:" text-white",style:{textDecoration:"none"},to:"/admindash/"},"ADMIN PANEL")," "),m.a.createElement("div",{className:"accordion mt-3 ml-0 d-flex justify-content-start",style:{height:"100vh"},id:"accordionExample"},m.a.createElement("ul",{style:{listStyle:"none",marginLeft:"-15px"}},m.a.createElement("li",null,m.a.createElement("div",{className:" mb-2 "},m.a.createElement("h2",{className:"mb-2  h3"},m.a.createElement("button",{className:"container text-white border-top border-left border-right  border-bottom ",style:{backgroundColor:"transparent",border:"none",outline:"none"},type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"User")),m.a.createElement("div",{id:"collapseOne",className:"collapse  ","aria-labelledby":"headingOne","data-parent":"#accordionExample"},m.a.createElement("ul",{className:"",style:{listStyle:"none"}},m.a.createElement("li",{className:""},m.a.createElement(u.b,{className:"text-white mb-2",to:"/admindash/createuser"},"CREATE A NEW USER")," "),m.a.createElement("li",{className:"text-white mb-2"},"VIEW/EDIT ALL USERS"),m.a.createElement("li",{className:"text-white mb-2"},"VIEW ACTIONS OF USERS"))))),m.a.createElement("li",null,m.a.createElement("div",{className:""},m.a.createElement("h2",{className:"mb-2 mt-1 h3 "},m.a.createElement("button",{className:"container text-white border-top  border-bottom ",style:{backgroundColor:"transparent",border:"none",outline:"none"},type:"button"},"AGENTS")),m.a.createElement("ul",{className:"",style:{listStyle:"none"}},m.a.createElement("li",{className:""},m.a.createElement(u.b,{className:"text-white mb-2",to:"/admindash/createagent"},"CREATE AGENTS")," "),m.a.createElement("li",{className:"text-white mb-2"},"VIEW ALL AGENTS"),m.a.createElement("li",{className:"text-white mb-2"},"AGRNTS SUBSCRIPTIONS")))),m.a.createElement("li",null,m.a.createElement("div",{className:""},m.a.createElement("h2",{className:"mb-2 mt-1 h3 "},m.a.createElement("button",{className:"container text-white border-top  border-bottom ",style:{backgroundColor:"transparent",border:"none",outline:"none"},type:"button"},"ACTIONS")),m.a.createElement("ul",{className:"",style:{listStyle:"none"}},m.a.createElement("li",{className:""},m.a.createElement(u.b,{className:"text-white mb-2"},"GROUP/TICKETS")," "),m.a.createElement("li",{className:"text-white mb-2"},"DEMANDS"),m.a.createElement("li",{className:"text-white mb-2"},"REQUIRE NAMES"))))," ",m.a.createElement("li",null,m.a.createElement("div",{className:""},m.a.createElement("h2",{className:"mb-2 mt-1 h3 "},m.a.createElement("button",{className:"container text-white  border-bottom ",style:{backgroundColor:"transparent",border:"none",outline:"none"},type:"button"},"AGENTS")),m.a.createElement("ul",{className:"",style:{listStyle:"none"}},m.a.createElement("li",{className:""},m.a.createElement(u.b,{className:"text-white mb-2",to:"/admindash/createagent"},"CREATE AN AGENT")," "),m.a.createElement("li",{className:"text-white mb-2"},"CREATE AGENTS"),m.a.createElement("li",{className:"text-white mb-2"},"VIEW ALL AGENTS"),m.a.createElement("li",{className:"text-white mb-2"},"AGRNTS SUBSCRIPTIONS")))),m.a.createElement("li",null,m.a.createElement("div",{className:" border-bottom"},m.a.createElement("h2",{className:"mb-2 mt-5 h3"},m.a.createElement("button",{className:"container text-white ",style:{backgroundColor:"transparent",border:"none",outline:"none"},type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"OTHERS")),m.a.createElement("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordionExample"},m.a.createElement("ul",{className:"",style:{listStyle:"none"}},m.a.createElement("li",{className:"text-white mb-2"},"FIND A GROUP"))))),m.a.createElement("li",{className:"d-flex justify-content-center mt-3 "}," ",m.a.createElement("button",{className:" btn btn-link text-white mb-2",onClick:this.onLogOut},"LOGOUT"))))))}}]),a}(s.Component),d=Object(o.b)((function(e){return{auth:e.Auth}}),{logOut:E.d})(Object(i.f)(b)),h=m.a.lazy((function(){return a.e(4).then(a.bind(null,103))})),N=m.a.lazy((function(){return a.e(8).then(a.bind(null,104))})),p=m.a.lazy((function(){return Promise.resolve().then(a.bind(null,40))})),y=m.a.lazy((function(){return a.e(6).then(a.bind(null,105))})),x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return"admin"!==this.props.auth.user.type&&this.props.history.push("/"),m.a.createElement("div",{className:"",style:{height:"100vh"}},m.a.createElement("div",{className:"row no-gutters"},m.a.createElement("div",{className:"col-3"},m.a.createElement(d,null)),m.a.createElement("div",{className:"col-9"},m.a.createElement(s.Suspense,{fallback:m.a.createElement(p,null)},m.a.createElement(i.c,null,m.a.createElement(i.a,{path:"/admindash/",exact:!0,component:N}),m.a.createElement(i.a,{path:"/admindash/createuser",component:h}),m.a.createElement(i.a,{path:"/admindash/createagent",component:y}))))))}}]),a}(s.Component);t.default=Object(o.b)((function(e){return{auth:e.Auth}}),{logOut:E.d})(Object(i.f)(x))}}]);
//# sourceMappingURL=7.3d57fddd.chunk.js.map