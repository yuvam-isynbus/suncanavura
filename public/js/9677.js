(self.webpackChunk=self.webpackChunk||[]).push([[9677],{9677:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var o=a(5166),s={class:"overflow-y-scroll",style:{"max-height":"80vh"}},n={class:"py-3"},l={class:"text-lg leading-6 font-medium text-gray-900"},r={class:"border-t border-gray-200 py-5 sm:p-0"},c={class:"sm:divide-y sm:divide-gray-200"},i={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},d=(0,o.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Ime izvrštelja",-1),m={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},p={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},u=(0,o.createVNode)("dt",{class:"text-sm font-medium text-gray-500"}," Email izvrštelja ",-1),y={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},v={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},g=(0,o.createVNode)("dt",{class:"text-sm font-medium text-gray-500"}," Vrijeme izvršenja ",-1),k={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},f={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},h=(0,o.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Podaci",-1),w={key:0,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},x={key:0},N={key:1,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},V=(0,o.createVNode)("p",{class:"font-semibold pb-2"},"Stari podaci",-1),b={key:0},B=(0,o.createVNode)("p",{class:"font-semibold py-2"},"Novi podaci",-1),_={key:0},S={key:2,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},D={key:0},C={key:3,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},j={class:"mt-2"},z={class:"mt-2"},$={key:4,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},E={key:0},L={class:"mt-2"},M=(0,o.createVNode)("p",{class:"font-semibold pb-2 mt-4"},"Stari iznos",-1),T={class:""},Z=(0,o.createVNode)("p",{class:"mt-2 font-semibold py-2"},"Novi iznos",-1),A={class:""};var F=a(8509);const O={birth_date:"Datum rođenja",program:"Program",sponsor_id:"Sponzor",destination_id:"Destinacija",id_number:"Broj dokumenta",id_start_date:"Datum izdavanja",id_end_date:"Datum isteka",country:"Država",city:"Grad",skype:["Skype","Kontakt za hitni slučaj"],postal_code:"Poštanski broj",street_address:"Adresa stanovanja",home_number:"Kućni broj",university:"Fakultet",university_program:"Program",university_year:"Godina studija",university_course:"Smjer",university_start_date:["Početak studija","Datum odlaska"],university_end_date:["Završetak studija","Datum povratka"],languages:"Strani jezik",health:"Zdravlje"},P={emits:["close"],components:{DialogModal:F.Z},props:{showModal:Boolean,event:Object},data:function(){return{data:null,createApplication:O}},watch:{event:function(e){this.data=e.data}},methods:{closeModal:function(){this.$emit("close")},fileName:function(e){if(!e)return"";var t=e.indexOf("_");return e.slice(t+1)}},render:function(e,t,a,F,O,P){var I=(0,o.resolveComponent)("dialog-modal");return(0,o.openBlock)(),(0,o.createBlock)(I,{show:a.showModal,onClose:t[1]||(t[1]=function(t){return e.$emit("close")})},{content:(0,o.withCtx)((function(){return[(0,o.createVNode)("div",s,[(0,o.createVNode)("div",n,[(0,o.createVNode)("h3",l,(0,o.toDisplayString)(a.event.event_name),1)]),(0,o.createVNode)("div",r,[(0,o.createVNode)("dl",c,[(0,o.createVNode)("div",i,[d,(0,o.createVNode)("dd",m,(0,o.toDisplayString)(a.event.user_name),1)]),(0,o.createVNode)("div",p,[u,(0,o.createVNode)("dd",y,(0,o.toDisplayString)(a.event.user_email),1)]),(0,o.createVNode)("div",v,[g,(0,o.createVNode)("dd",k,(0,o.toDisplayString)(a.event.created_at_full),1)]),(0,o.createVNode)("div",f,[h,"green"==a.event.color?((0,o.openBlock)(),(0,o.createBlock)("dd",w,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(O.createApplication,(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("p",null,[O.data?((0,o.openBlock)(),(0,o.createBlock)("span",x,(0,o.toDisplayString)(e)+": "+(0,o.toDisplayString)(O.data[t]),1)):(0,o.createCommentVNode)("",!0)])})),256))])):"gray"==a.event.color?((0,o.openBlock)(),(0,o.createBlock)("dd",N,[V,((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(O.createApplication,(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("p",null,[O.data.old[t]?((0,o.openBlock)(),(0,o.createBlock)("span",b,(0,o.toDisplayString)(e)+": "+(0,o.toDisplayString)(O.data.old[t]),1)):(0,o.createCommentVNode)("",!0)])})),256)),B,((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(O.createApplication,(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("p",null,[O.data.new[t]?((0,o.openBlock)(),(0,o.createBlock)("span",_,(0,o.toDisplayString)(e)+": "+(0,o.toDisplayString)(O.data.new[t]),1)):(0,o.createCommentVNode)("",!0)])})),256))])):"rose"==a.event.color?((0,o.openBlock)(),(0,o.createBlock)("dd",S,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(O.data,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("p",null,[O.data?((0,o.openBlock)(),(0,o.createBlock)("span",D,(0,o.toDisplayString)(P.fileName(e)),1)):(0,o.createCommentVNode)("",!0)])})),256))])):"blue"==a.event.color?((0,o.openBlock)(),(0,o.createBlock)("dd",C,[(0,o.createVNode)("p",null,"Datum: "+(0,o.toDisplayString)(O.data.payment_date),1),(0,o.createVNode)("p",j,"Tip: "+(0,o.toDisplayString)(O.data.type),1),(0,o.createVNode)("p",z,"Iznos: "+(0,o.toDisplayString)(O.data.amount)+" kn",1)])):"yellow"==a.event.color?((0,o.openBlock)(),(0,o.createBlock)("dd",$,[O.data.payment_date?((0,o.openBlock)(),(0,o.createBlock)("p",E,"Datum: "+(0,o.toDisplayString)(O.data.payment_date),1)):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("p",L,"Tip: "+(0,o.toDisplayString)(O.data.type),1),M,(0,o.createVNode)("p",T,(0,o.toDisplayString)(O.data.old_amount)+" kn",1),Z,(0,o.createVNode)("p",A,(0,o.toDisplayString)(O.data.new_amount)+" kn",1)])):(0,o.createCommentVNode)("",!0)])])])])]})),_:1},8,["show"])}},I=P},8509:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(5166),s={class:"sm:flex sm:items-start"},n={class:"w-full mt-3 text-center sm:mt-0 sm:ml-6 sm:mr-8 sm:text-left"},l={class:"mt-5 sm:ml-12 sm:pl-4 sm:flex"};const r={emits:["close"],components:{ModalNew:a(9359).Z},props:{show:{default:!1},closeable:{default:!0},big:{default:!1}},methods:{close:function(){this.$emit("close")}},render:function(e,t,a,r,c,i){var d=(0,o.resolveComponent)("modal-new");return(0,o.openBlock)(),(0,o.createBlock)(d,{show:a.show,big:a.big,closeable:a.closeable,onClose:i.close},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)("div",s,[(0,o.renderSlot)(e.$slots,"icon"),(0,o.createVNode)("div",n,[(0,o.renderSlot)(e.$slots,"content")])]),(0,o.createVNode)("div",l,[(0,o.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","big","closeable","onClose"])}},c=r},9359:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var o=a(5166),s={class:"fixed z-10 inset-0 overflow-y-auto"},n={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},l=(0,o.createVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),r=(0,o.createVNode)("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),c={key:0,class:"hidden sm:block absolute top-0 right-0 pt-4 pr-4"},i=(0,o.createVNode)("span",{class:"sr-only"},"Close",-1),d=(0,o.createVNode)("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1);const m={emits:["close"],props:{show:{default:!1},closeable:{default:!0},closeIcon:{default:!0},big:{default:!1}},methods:{close:function(){this.closeable&&this.$emit("close")},closeOnEscape:function(e){"Escape"===e.key&&this.show&&this.close()}},watch:{show:function(e){e?(this.$nextTick((function(){var e,t;return(null===(e=document.querySelector("input"))||void 0===e?void 0:e.focus())||(null===(t=document.querySelector("textarea"))||void 0===t?void 0:t.focus())})),document.body.style.overflow="hidden"):document.body.style.overflow=null}},created:function(){document.addEventListener("keydown",this.closeOnEscape)},unmounted:function(){document.removeEventListener("keydown",this.closeOnEscape)},render:function(e,t,a,m,p,u){return(0,o.openBlock)(),(0,o.createBlock)(o.Teleport,{to:"body"},[(0,o.createVNode)(o.Transition,{"leave-active-class":"duration-200"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createVNode)("div",s,[(0,o.createVNode)("div",n,[(0,o.createVNode)(o.Transition,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createVNode)("div",{class:"fixed inset-0 transition-opacity",onClick:t[1]||(t[1]=function(){return u.close&&u.close.apply(u,arguments)}),"aria-hidden":"true"},[l],512),[[o.vShow,a.show]])]})),_:1}),r,(0,o.createVNode)(o.Transition,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createVNode)("div",{class:[a.big?"sm:max-w-5xl":"sm:max-w-lg","inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"],role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},[a.closeIcon?((0,o.openBlock)(),(0,o.createBlock)("div",c,[(0,o.createVNode)("button",{type:"button",onClick:t[2]||(t[2]=function(){return u.close&&u.close.apply(u,arguments)}),class:"bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[i,d])])):(0,o.createCommentVNode)("",!0),(0,o.renderSlot)(e.$slots,"default")],2),[[o.vShow,a.show]])]})),_:3})])],512),[[o.vShow,a.show]])]})),_:1})])}},p=m}}]);