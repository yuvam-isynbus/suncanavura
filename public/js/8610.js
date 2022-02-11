(self.webpackChunk=self.webpackChunk||[]).push([[8610],{8610:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>M});var a=o(5166),s={class:"overflow-y-scroll",style:{"max-height":"80vh"}},n={class:"py-3"},l={class:"text-lg leading-6 font-medium text-gray-900"},r={class:"border-t border-gray-200 py-5 sm:p-0"},c={class:"sm:divide-y sm:divide-gray-200"},i={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},d=(0,a.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Ime izvrštelja",-1),m={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},u={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},p=(0,a.createVNode)("dt",{class:"text-sm font-medium text-gray-500"}," Email izvrštelja ",-1),y={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},v={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},g=(0,a.createVNode)("dt",{class:"text-sm font-medium text-gray-500"}," Vrijeme izvršenja ",-1),f={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},k={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},h=(0,a.createVNode)("dt",{class:"text-sm font-medium text-gray-500"},"Podaci",-1),w={key:0,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},x={key:0},N={key:1,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},b=(0,a.createVNode)("p",{class:"font-semibold pb-2"},"Stari podaci",-1),V={key:0},B=(0,a.createVNode)("p",{class:"font-semibold py-2"},"Novi podaci",-1),_={key:0},S={key:2,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},D={key:0},C={key:3,class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},j={class:"mt-2"},$={class:"mt-2"};var z=o(8509);const E={birth_date:"Datum rođenja",program:"Program",sponsor_id:"Sponzor",id_number:"Broj dokumenta",id_start_date:"Datum izdavanja",id_end_date:"Datum isteka",country:"Država",city:"Grad",postal_code:"Poštanski broj",street_address:"Adresa stanovanja",home_number:"Kućni broj",university:"Fakultet",university_program:"Program",university_year:"Godina studija",university_course:"Smjer",university_start_date:"Početak studija",university_end_date:"Završetak studija",languages:"Strani jezik",health:"Zdravlje"},L={emits:["close"],components:{DialogModal:z.Z},props:{showModal:Boolean,event:Object},data:function(){return{data:null,createApplication:E}},watch:{event:function(e){this.data=e.data}},methods:{closeModal:function(){this.$emit("close")},fileName:function(e){if(!e)return"";var t=e.indexOf("_");return e.slice(t+1)}},render:function(e,t,o,z,E,L){var M=(0,a.resolveComponent)("dialog-modal");return(0,a.openBlock)(),(0,a.createBlock)(M,{show:o.showModal,onClose:t[1]||(t[1]=function(t){return e.$emit("close")})},{content:(0,a.withCtx)((function(){return[(0,a.createVNode)("div",s,[(0,a.createVNode)("div",n,[(0,a.createVNode)("h3",l,(0,a.toDisplayString)(o.event.event_name),1)]),(0,a.createVNode)("div",r,[(0,a.createVNode)("dl",c,[(0,a.createVNode)("div",i,[d,(0,a.createVNode)("dd",m,(0,a.toDisplayString)(o.event.user_name),1)]),(0,a.createVNode)("div",u,[p,(0,a.createVNode)("dd",y,(0,a.toDisplayString)(o.event.user_email),1)]),(0,a.createVNode)("div",v,[g,(0,a.createVNode)("dd",f,(0,a.toDisplayString)(o.event.created_at_full),1)]),(0,a.createVNode)("div",k,[h,"green"==o.event.color?((0,a.openBlock)(),(0,a.createBlock)("dd",w,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(E.createApplication,(function(e,t){return(0,a.openBlock)(),(0,a.createBlock)("p",null,[E.data?((0,a.openBlock)(),(0,a.createBlock)("span",x,(0,a.toDisplayString)(e)+": "+(0,a.toDisplayString)(E.data[t]),1)):(0,a.createCommentVNode)("",!0)])})),256))])):"gray"==o.event.color?((0,a.openBlock)(),(0,a.createBlock)("dd",N,[b,((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(E.createApplication,(function(e,t){return(0,a.openBlock)(),(0,a.createBlock)("p",null,[E.data.old[t]?((0,a.openBlock)(),(0,a.createBlock)("span",V,(0,a.toDisplayString)(e)+": "+(0,a.toDisplayString)(E.data.old[t]),1)):(0,a.createCommentVNode)("",!0)])})),256)),B,((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(E.createApplication,(function(e,t){return(0,a.openBlock)(),(0,a.createBlock)("p",null,[E.data.new[t]?((0,a.openBlock)(),(0,a.createBlock)("span",_,(0,a.toDisplayString)(e)+": "+(0,a.toDisplayString)(E.data.new[t]),1)):(0,a.createCommentVNode)("",!0)])})),256))])):"rose"==o.event.color?((0,a.openBlock)(),(0,a.createBlock)("dd",S,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(E.data,(function(e){return(0,a.openBlock)(),(0,a.createBlock)("p",null,[E.data?((0,a.openBlock)(),(0,a.createBlock)("span",D,(0,a.toDisplayString)(L.fileName(e)),1)):(0,a.createCommentVNode)("",!0)])})),256))])):"blue"==o.event.color?((0,a.openBlock)(),(0,a.createBlock)("dd",C,[(0,a.createVNode)("p",null,"Datum: "+(0,a.toDisplayString)(E.data.payment_date),1),(0,a.createVNode)("p",j,"Tip: "+(0,a.toDisplayString)(E.data.type),1),(0,a.createVNode)("p",$,"Iznos: "+(0,a.toDisplayString)(E.data.amount)+" kn",1)])):(0,a.createCommentVNode)("",!0)])])])])]})),_:1},8,["show"])}},M=L},8509:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var a=o(5166),s={class:"sm:flex sm:items-start"},n={class:"w-full mt-3 text-center sm:mt-0 sm:ml-6 sm:mr-8 sm:text-left"},l={class:"mt-5 sm:ml-12 sm:pl-4 sm:flex"};const r={emits:["close"],components:{ModalNew:o(9359).Z},props:{show:{default:!1},closeable:{default:!0},big:{default:!1}},methods:{close:function(){this.$emit("close")}},render:function(e,t,o,r,c,i){var d=(0,a.resolveComponent)("modal-new");return(0,a.openBlock)(),(0,a.createBlock)(d,{show:o.show,big:o.big,closeable:o.closeable,onClose:i.close},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("div",s,[(0,a.renderSlot)(e.$slots,"icon"),(0,a.createVNode)("div",n,[(0,a.renderSlot)(e.$slots,"content")])]),(0,a.createVNode)("div",l,[(0,a.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","big","closeable","onClose"])}},c=r},9359:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var a=o(5166),s={class:"fixed z-10 inset-0 overflow-y-auto"},n={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},l=(0,a.createVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),r=(0,a.createVNode)("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),c={key:0,class:"hidden sm:block absolute top-0 right-0 pt-4 pr-4"},i=(0,a.createVNode)("span",{class:"sr-only"},"Close",-1),d=(0,a.createVNode)("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,a.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1);const m={emits:["close"],props:{show:{default:!1},closeable:{default:!0},closeIcon:{default:!0},big:{default:!1}},methods:{close:function(){this.closeable&&this.$emit("close")},closeOnEscape:function(e){"Escape"===e.key&&this.show&&this.close()}},watch:{show:function(e){e?(this.$nextTick((function(){var e,t;return(null===(e=document.querySelector("input"))||void 0===e?void 0:e.focus())||(null===(t=document.querySelector("textarea"))||void 0===t?void 0:t.focus())})),document.body.style.overflow="hidden"):document.body.style.overflow=null}},created:function(){document.addEventListener("keydown",this.closeOnEscape)},unmounted:function(){document.removeEventListener("keydown",this.closeOnEscape)},render:function(e,t,o,m,u,p){return(0,a.openBlock)(),(0,a.createBlock)(a.Teleport,{to:"body"},[(0,a.createVNode)(a.Transition,{"leave-active-class":"duration-200"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)("div",s,[(0,a.createVNode)("div",n,[(0,a.createVNode)(a.Transition,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)("div",{class:"fixed inset-0 transition-opacity",onClick:t[1]||(t[1]=function(){return p.close&&p.close.apply(p,arguments)}),"aria-hidden":"true"},[l],512),[[a.vShow,o.show]])]})),_:1}),r,(0,a.createVNode)(a.Transition,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,a.withCtx)((function(){return[(0,a.withDirectives)((0,a.createVNode)("div",{class:[o.big?"sm:max-w-5xl":"sm:max-w-lg","inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"],role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},[o.closeIcon?((0,a.openBlock)(),(0,a.createBlock)("div",c,[(0,a.createVNode)("button",{type:"button",onClick:t[2]||(t[2]=function(){return p.close&&p.close.apply(p,arguments)}),class:"bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[i,d])])):(0,a.createCommentVNode)("",!0),(0,a.renderSlot)(e.$slots,"default")],2),[[a.vShow,o.show]])]})),_:3})])],512),[[a.vShow,o.show]])]})),_:1})])}},u=m}}]);