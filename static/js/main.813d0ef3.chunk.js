(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),o=t.n(l),c=(t(47),t(4)),i=t(5),m=t(7),s=t(6),u=(t(48),t(40)),h=t(2),v=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"hElLo wOrlD \ud83d\udc7d"),r.a.createElement("p",null,"Welcome to a site of random things made by me."))}}]),t}(r.a.Component),p=t(39),d=t.n(p),b=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"block",margin:"auto",minHeight:"1px",width:"90%",overflow:"auto"}},r.a.createElement(d.a,{images:this.props.images,enableImageSelection:!1}))}}]),t}(r.a.Component),f=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"DOOOOOODLES"),r.a.createElement("p",null,"wow look at all this ~art~\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfa8"),r.a.createElement(b,{images:[]}))}}]),t}(r.a.Component),E=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Oops"),r.a.createElement("p",null,"This page does not exist!"))}}]),t}(r.a.Component),O=t(17),g=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={menu:!1},n.toggleMenu=n.toggleMenu.bind(Object(O.a)(n)),n}return Object(i.a)(t,[{key:"toggleMenu",value:function(){this.setState({menu:!this.state.menu})}},{key:"render",value:function(){var e=this.state.menu?"show":"";return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/ByMeForMe"},"ByMeForMe"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleMenu},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse "+e,id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"/ByMeForMe"===window.location.pathname?"nav-item active":"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/ByMeForMe"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"/ByMeForMe/doodles"===window.location.pathname?"nav-item active":"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/ByMeForMe/doodles"},"Doodles")),r.a.createElement("li",{className:"/ByMeForMe/food"===window.location.pathname?"nav-item active":"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/ByMeForMe/food"},"Food")),r.a.createElement("li",{className:"/ByMeForMe/current"===window.location.pathname?"nav-item active":"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/ByMeForMe/current"},"Current Events")))))}}]),t}(r.a.Component),y="https://by-me-for-me-backend.herokuapp.com/api/",j=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={pics:[]},n}return Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(y+"myImages").then((function(e){return e.json()})).then((function(a){var t=a._embedded.myImages,n=[];t.forEach((function(e){var a={src:y+e.fullPath,thumbnail:y+e.fullPath,caption:e.description};n.push(a)})),e.setState({pics:n}),console.log(n)})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"FOOOOOD"),r.a.createElement("p",null,"\ud83c\udf74yum\ud83e\udd44"),r.a.createElement(b,{images:this.state.pics}))}}]),t}(r.a.Component),M=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"NOT THE NEWS \xaf\\_(\u30c4)_/\xaf"),r.a.createElement("p",null,"Does this count as a blog?\ud83e\udd14 Let me know in the comments below, kidding no feedback is accepted."))}}]),t}(r.a.Component),k=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/ByMeForMe",component:v,exact:!0}),r.a.createElement(h.a,{path:"/ByMeForMe/doodles",component:f}),r.a.createElement(h.a,{path:"/ByMeForMe/food",component:j}),r.a.createElement(h.a,{path:"/ByMeForMe/current",component:M}),r.a.createElement(h.a,{component:E})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(100);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,a,t){e.exports=t(101)},47:function(e,a,t){},48:function(e,a,t){}},[[42,1,2]]]);
//# sourceMappingURL=main.813d0ef3.chunk.js.map