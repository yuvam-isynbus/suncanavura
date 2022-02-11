(self.webpackChunk=self.webpackChunk||[]).push([[4796],{8183:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var a=t(5166),s={class:"mt-6 sm:mt-2 2xl:mt-5"},o={class:"px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl border-b"},n={class:"-mb-px flex space-x-8","aria-label":"Tabs"};const l=[{url:"profile/data",label:"Podaci",iconName:"home",routeName:route("user.profile.data")},{url:"profile/password",label:"Lozinka",iconName:"users",routeName:route("user.profile.password")}],u=[{url:"messages/received_messages",label:"Primljene",iconName:"home",routeName:route("messages.received_messages.index")},{url:"messages/sent_messages",label:"Poslane",iconName:"users",routeName:route("messages.sent_messages.index")},{url:"messages/mass_messages",label:"Grupne poruke",iconName:"users",routeName:route("messages.mass_messages.index")}],c={props:{title:String,url:String,menu:String},computed:{menuItems:function(){switch(this.menu){case"profile":return l;case"message":return u;case"menu":return userMenuItems}}},render:function(e,r,t,l,u,c){var i=(0,a.resolveComponent)("inertia-link");return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)("div",s,[(0,a.createVNode)("div",o,[(0,a.createVNode)("nav",n,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(c.menuItems,(function(e){return(0,a.openBlock)(),(0,a.createBlock)(i,{key:e.url,href:e.routeName,class:["whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",t.url==e.url?"border-pink-500 text-gray-900 ":"border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700"],"aria-current":"page"},{default:(0,a.withCtx)((function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(e.label),1)]})),_:2},1032,["href","class"])})),128))])])]),(0,a.renderSlot)(e.$slots,"default")],64)}},i=c},4796:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var a=t(5166),s=(0,a.createStaticVNode)('<div class="mt-6 sm:mt-2 2xl:mt-5"><div class="border-b border-gray-200"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><nav class="-mb-px flex space-x-8" aria-label="Tabs"><a href="#" class="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page"> Profile </a><a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"> Calendar </a><a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"> Recognition </a></nav></div></div></div>',1);var o=(0,a.createTextVNode)("Home"),n=(0,a.createTextVNode)("About"),l=(0,a.createTextVNode)("Contact");const u={props:{title:String},watch:{title:{immediate:!0,handler:function(e){document.title=e}}},render:function(e,r,t,s,u,c){var i=(0,a.resolveComponent)("inertia-link");return(0,a.openBlock)(),(0,a.createBlock)("main",null,[(0,a.createVNode)("header",null,[(0,a.createVNode)(i,{href:"/"},{default:(0,a.withCtx)((function(){return[o]})),_:1}),(0,a.createVNode)(i,{href:"/about"},{default:(0,a.withCtx)((function(){return[n]})),_:1}),(0,a.createVNode)(i,{href:"/contact"},{default:(0,a.withCtx)((function(){return[l]})),_:1})]),(0,a.createVNode)("article",null,[(0,a.renderSlot)(e.$slots,"default")])])}},c=u;var i=t(8183);const m={layout:function(e,r){return e(c,{title:"Nested"},(function(){return[e(i.Z,(function(){return[r]}))]}))},props:{user:Object},render:function(e,r,t,o,n,l){return(0,a.openBlock)(),(0,a.createBlock)("div",null,[s,(0,a.createVNode)("p",null,"Hello "+(0,a.toDisplayString)(t.user.name)+", welcome to your first Nested Inertia app!",1)])}},d=m}}]);