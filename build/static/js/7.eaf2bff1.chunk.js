(this["webpackJsonpportal-fare"]=this["webpackJsonpportal-fare"]||[]).push([[7],{104:function(e,t,a){"use strict";a.r(t);var l=a(4),n=a(5),c=a(7),r=a(6),s=a(0),o=a.n(s),m=a(28),i=a(3),E=a(27),u=a(16),d=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onLogOut=function(t){t.preventDefault(),e.props.logOut(e.props.history)},e}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"",style:{width:"20vw"}},o.a.createElement("div",{className:"pt-2 ",style:{height:"130vh",backgroundColor:"#047AA9"}},o.a.createElement("h2",{className:" text-center"},o.a.createElement(u.b,{className:" text-white",style:{textDecoration:"none"},to:"/admindash/"},"ADMIN PANEL")," "),o.a.createElement("div",{className:"accordion mt-5 ml-0 pt-2 d-flex justify-content-start",style:{height:"100vh"},id:"accordionExample"},o.a.createElement("ul",{style:{listStyle:"none",marginLeft:"-15px"}},o.a.createElement("li",null,o.a.createElement("div",{className:" mb-5 border-bottom"},o.a.createElement("h2",{className:"mb-2 mt-2 h3"},o.a.createElement("button",{className:"container text-white ",style:{backgroundColor:"transparent",border:"none",outline:"none"},type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"User")),o.a.createElement("div",{id:"collapseOne",className:"collapse  ","aria-labelledby":"headingOne","data-parent":"#accordionExample"},o.a.createElement("ul",{className:"",style:{listStyle:"none"}},o.a.createElement("li",{className:""},o.a.createElement(u.b,{className:"text-white mb-2",to:"/admindash/createuser"},"CREATE A NEW USER")," "),o.a.createElement("li",{className:"text-white mb-2"},"MODIFY A USER"),o.a.createElement("li",{className:"text-white mb-2"},"DELETE A USER"),o.a.createElement("li",{className:"text-white mb-2"},"VIEW ACTIONS OF A USER"),o.a.createElement("li",{className:"text-white mb-2"},"VIEW USERS"))))),o.a.createElement("li",null,o.a.createElement("div",{className:" border-bottom"},o.a.createElement("h2",{className:"mb-2 mt-5 h3 "},o.a.createElement("button",{className:"container text-white ",style:{backgroundColor:"transparent",border:"none",outline:"none"},type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"TRAVEL AGENT")),o.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionExample"},o.a.createElement("ul",{className:"",style:{listStyle:"none"}},o.a.createElement("li",{className:""},o.a.createElement(u.b,{className:"text-white mb-2",to:"/admindash/createagent"},"CREATE AN AGENT")," "),o.a.createElement("li",{className:"text-white mb-2"},"MODIFY AN AGENT"),o.a.createElement("li",{className:"text-white mb-2"},"DELETE AN AGENT"),o.a.createElement("li",{className:"text-white mb-2"},"APPROVE / REJECT GROUP"),o.a.createElement("li",{className:"text-white mb-2"},"VIEW DEALS OF AGENTS"),o.a.createElement("li",{className:"text-white mb-2"},"VIEW SUBSCRIPTIONS"),o.a.createElement("li",{className:"text-white mb-2"},"VIEW DEMANDS"),o.a.createElement("li",{className:"text-white mb-2"},"VIEW AGENTS"))))),o.a.createElement("li",null,o.a.createElement("div",{className:" border-bottom"},o.a.createElement("h2",{className:"mb-2 mt-5 h3"},o.a.createElement("button",{className:"container text-white ",style:{backgroundColor:"transparent",border:"none",outline:"none"},type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"OTHERS")),o.a.createElement("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordionExample"},o.a.createElement("ul",{className:"",style:{listStyle:"none"}},o.a.createElement("li",{className:"text-white mb-2"},"FIND A GROUP"))))),o.a.createElement("li",{className:"d-flex justify-content-center mt-3 "}," ",o.a.createElement("button",{className:" btn btn-link text-white mb-2",onClick:this.onLogOut},"LOGOUT"))))))}}]),a}(s.Component),h=Object(m.b)((function(e){return{auth:e.Auth}}),{logOut:E.d})(Object(i.f)(d)),b=o.a.lazy((function(){return a.e(0).then(a.bind(null,101))})),p=o.a.lazy((function(){return a.e(8).then(a.bind(null,102))})),N=o.a.lazy((function(){return Promise.resolve().then(a.bind(null,39))})),y=o.a.lazy((function(){return a.e(6).then(a.bind(null,103))})),O=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return"admin"!==this.props.auth.user.type&&this.props.history.push("/"),o.a.createElement("div",{className:"",style:{height:"100vh"}},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-3"},o.a.createElement(h,null)),o.a.createElement("div",{className:"col-9"},o.a.createElement(s.Suspense,{fallback:o.a.createElement(N,null)},o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/admindash/",exact:!0,component:p}),o.a.createElement(i.a,{path:"/admindash/createuser",component:b}),o.a.createElement(i.a,{path:"/admindash/createagent",component:y}))))))}}]),a}(s.Component);t.default=Object(m.b)((function(e){return{auth:e.Auth}}),{logOut:E.d})(Object(i.f)(O))}}]);
//# sourceMappingURL=7.eaf2bff1.chunk.js.map