(self.webpackChunk=self.webpackChunk||[]).push([[4667],{4667:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>F});var s=a(5166),r={"aria-labelledby":"applicant-information-title"},o={class:"bg-white shadow sm:rounded-lg"},d={class:"px-4 py-5 sm:px-4 flex justify-between items-center"},i=(0,s.createVNode)("h2",{id:"applicant-information-title",class:"text-lg leading-6 font-medium text-gray-900"}," Podaci o prijavi ",-1),c=(0,s.createTextVNode)(" Izmjeni podatke "),n={class:"border-t border-gray-200 px-4 py-5"},l={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3"},m={class:"sm:col-span-1"},p=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Ime i prezime",-1),x={class:"mt-1 text-sm text-gray-900"},u={class:"sm:col-span-1"},g=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Email adresa",-1),y={class:"mt-1 text-sm text-gray-900"},N={class:"sm:col-span-1"},V=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Datum rođenja",-1),f={class:"mt-1 text-sm text-gray-900"},v={class:"sm:col-span-1"},b=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Država",-1),h={class:"mt-1 text-sm text-gray-900"},D={class:"sm:col-span-1"},k=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Grad",-1),S={class:"mt-1 text-sm text-gray-900"},_={class:"sm:col-span-1"},j=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Adresa",-1),w={class:"mt-1 text-sm text-gray-900"},C={class:"sm:col-span-1"},z=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"}," Broj identifikacijskog dokumenta ",-1),B={class:"mt-1 text-sm text-gray-900"},I={class:"sm:col-span-1"},A=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Datum izdavanja",-1),E={class:"mt-1 text-sm text-gray-900"},G={class:"sm:col-span-1"},O=(0,s.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Datum isteka",-1),P={class:"mt-1 text-sm text-gray-900"},T=(0,s.createVNode)("div",null,null,-1);const q={props:{application:Object},data:function(){return{}},render:function(e,t,a,q,F,H){var J=(0,s.resolveComponent)("inertia-link");return(0,s.openBlock)(),(0,s.createBlock)("section",r,[(0,s.createVNode)("div",o,[(0,s.createVNode)("div",d,[i,(0,s.createVNode)(J,{as:"button",type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:outline-none focus:shadow-outline-rose focus:border-rose-700 active:bg-rose-700 transition duration-150 ease-in-out",href:e.route("user.application.form.edit")},{default:(0,s.withCtx)((function(){return[c]})),_:1},8,["href"])]),(0,s.createVNode)("div",n,[(0,s.createVNode)("dl",l,[(0,s.createVNode)("div",m,[p,(0,s.createVNode)("dd",x,(0,s.toDisplayString)(a.application.user.name),1)]),(0,s.createVNode)("div",u,[g,(0,s.createVNode)("dd",y,(0,s.toDisplayString)(a.application.user.email),1)]),(0,s.createVNode)("div",N,[V,(0,s.createVNode)("dd",f,(0,s.toDisplayString)(a.application.birth_date),1)]),(0,s.createVNode)("div",v,[b,(0,s.createVNode)("dd",h,(0,s.toDisplayString)(a.application.country),1)]),(0,s.createVNode)("div",D,[k,(0,s.createVNode)("dd",S,(0,s.toDisplayString)(a.application.city),1)]),(0,s.createVNode)("div",_,[j,(0,s.createVNode)("dd",w,(0,s.toDisplayString)(a.application.street_address)+" "+(0,s.toDisplayString)(a.application.home_number),1)]),(0,s.createVNode)("div",C,[z,(0,s.createVNode)("dd",B,(0,s.toDisplayString)(a.application.id_number),1)]),(0,s.createVNode)("div",I,[A,(0,s.createVNode)("dd",E,(0,s.toDisplayString)(a.application.id_start_date),1)]),(0,s.createVNode)("div",G,[O,(0,s.createVNode)("dd",P,(0,s.toDisplayString)(a.application.id_end_date),1)])])]),T])])}},F=q}}]);