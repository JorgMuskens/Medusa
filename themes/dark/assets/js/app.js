(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{183:function(n,o,e){"use strict";e.r(o);var a=e(6),t=e(2),c=e(15),s=e(50),i=e(51),u=e(53),p=e(14),d=e(10),r=e(1);a.a.config.devtools=!0,a.a.config.performance=!0,a.a.use(t.a),a.a.use(c.a),a.a.use(s.a),a.a.use(i.a),window.components.forEach(function(n){d.c&&console.debug("Registering ".concat(n.name)),a.a.component(n.name,n)}),[r.b,r.c,r.d,r.e,r.f,r.g,r.l,r.n,r.p,r.q,r.s,r.t,r.u,r.v,r.w].forEach(function(n){a.a.component(n.name,n)});var g=new a.a({name:"App",store:u.a,router:p.a,components:{},data:function(){return{globalLoading:!1,pageComponent:!1}},computed:Object.assign(Object(t.d)(["auth","config"]),{}),mounted:function(){if(d.c&&console.log("App Mounted!"),!document.location.pathname.includes("/login")){var n=this.$store;n.dispatch("login",{username:window.username}),n.dispatch("getConfig"),d.c&&console.log("App Loaded!")}}}).$mount("#vue-wrap");o.default=g}},[[183,1,0]]]);
//# sourceMappingURL=app.js.map