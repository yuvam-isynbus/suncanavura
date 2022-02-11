(self.webpackChunk=self.webpackChunk||[]).push([[813],{4405:(e,t,o)=>{"use strict";function r(e,t){var o=t.emit;return{updateValue:function(t){var r=t.target.value;"checkbox"===t.target.type&&(r=t.target.checked),"radio"===t.target.type&&(r=e.value),o("update:modelValue",r)}}}o.d(t,{Z:()=>r})},9300:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var r=1;function n(){return{getID:function(){return++r}}}},9126:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166),n={class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm\n    font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none\n    focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"};const s={render:function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("button",n,[(0,r.renderSlot)(e.$slots,"default")])}},a=s},6389:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166);const n={props:{id:{type:[String,Number],required:!0}},render:function(e,t,o,n,s,a){return(0,r.openBlock)(),(0,r.createBlock)("p",{"aria-live":"assertive",class:"mt-2 text-sm text-red-600",id:o.id},[(0,r.renderSlot)(e.$slots,"default")],8,["id"])}},s=n},1223:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var r=o(5166);function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var l={class:"mt-1 relative rounded-md shadow-sm"},c={key:0,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},i=(0,r.createVNode)("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1);var d=o(4405),u=o(9300);const m={emits:["update:modelValue"],components:{BaseErrorMessage:o(6389).Z},props:{label:{type:String,default:""},mask:{type:[String,Object],required:!0},placeholder:{type:String,default:""},error:{type:String,default:""},modelValue:{type:[String,Number],default:""}},setup:function(e,t){return{updateValue:(0,d.Z)(e,t).updateValue,uuid:(0,u.Z)().getID()}},render:function(e,t,o,n,a,d){var u=(0,r.resolveComponent)("BaseErrorMessage"),m=(0,r.resolveDirective)("maska");return(0,r.openBlock)(),(0,r.createBlock)(r.Fragment,null,[o.label?((0,r.openBlock)(),(0,r.createBlock)("label",{key:0,for:n.uuid,class:"block text-sm font-medium text-gray-700"},(0,r.toDisplayString)(o.label),9,["for"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",l,[(0,r.withDirectives)((0,r.createVNode)("input",(0,r.mergeProps)({class:"block w-full pr-10 shadow-sm focus:ring-indigo-400 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md placeholder-gray-400"},s(s({},e.$attrs),{},{onInput:n.updateValue}),{id:n.uuid,value:o.modelValue,placeholder:o.placeholder,"aria-describedby":o.error?"".concat(n.uuid,"-error"):null,"aria-invalid":!!o.error,class:o.error?"border-red-300 text-red-900 placeholder-red-300":""}),null,16,["id","value","placeholder","aria-describedby","aria-invalid"]),[[m,o.mask]]),o.error?((0,r.openBlock)(),(0,r.createBlock)("div",c,[i])):(0,r.createCommentVNode)("",!0)]),o.error?((0,r.openBlock)(),(0,r.createBlock)(u,{key:1,id:"".concat(n.uuid,"-error")},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(o.error),1)]})),_:1},8,["id"])):(0,r.createCommentVNode)("",!0)],64)}},f=m},813:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>u});var r=o(5166),n=(0,r.createVNode)("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 sm:mx-0 sm:h-10 sm:w-10"},[(0,r.createVNode)("svg",{class:"h-6 w-6 text-rose-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"})])],-1),s=(0,r.createVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900",id:"modal-headline"}," Unesite iznos ",-1),a={class:"mt-4"};var l=o(8509),c=o(1223),i=o(9126);const d={emits:["close"],components:{DialogModal:l.Z,MaskInput:c.Z,BaseButton:i.Z},props:{showModal:Boolean,errors:Object,uuid:String},data:function(){return{amount:"",error:!1}},methods:{formatAmount:function(e){return e=(e=e.replace(/\./g,"")).replace(/\,/g,"")}},render:function(e,t,o,l,c,i){var d=(0,r.resolveComponent)("mask-input"),u=(0,r.resolveComponent)("dialog-modal");return(0,r.openBlock)(),(0,r.createBlock)(u,{show:o.showModal,onClose:t[3]||(t[3]=function(t){return e.$emit("close")})},{icon:(0,r.withCtx)((function(){return[n]})),content:(0,r.withCtx)((function(){var e;return[(0,r.createVNode)("div",null,[s,(0,r.createVNode)("div",a,[(0,r.createVNode)(d,{modelValue:c.amount,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.amount=e}),error:null===(e=o.errors)||void 0===e?void 0:e.amount,mask:{mask:["#,##","##,##","###,##","#.###,##","####,##","##.###,##","###.###,##"]},placeholder:"0,00",type:"text",autocomplete:"off"},null,8,["modelValue","error","mask"])])])]})),footer:(0,r.withCtx)((function(){return[(0,r.createVNode)("a",{href:e.route("user.application.pay.payment",{amount:i.formatAmount(c.amount)}),class:"inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"}," Plati ",8,["href"]),(0,r.createVNode)("button",{onClick:t[2]||(t[2]=function(t){return e.$emit("close")}),type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Odustani ")]})),_:1},8,["show"])}},u=d},8509:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var r=o(5166),n={class:"sm:flex sm:items-start"},s={class:"w-full mt-3 text-center sm:mt-0 sm:ml-6 sm:mr-8 sm:text-left"},a={class:"mt-5 sm:ml-12 sm:pl-4 sm:flex"};const l={emits:["close"],components:{ModalNew:o(2535).Z},props:{show:{default:!1},closeable:{default:!0},big:{default:!1}},methods:{close:function(){this.$emit("close")}},render:function(e,t,o,l,c,i){var d=(0,r.resolveComponent)("modal-new");return(0,r.openBlock)(),(0,r.createBlock)(d,{show:o.show,big:o.big,closeable:o.closeable,onClose:i.close},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",n,[(0,r.renderSlot)(e.$slots,"icon"),(0,r.createVNode)("div",s,[(0,r.renderSlot)(e.$slots,"content")])]),(0,r.createVNode)("div",a,[(0,r.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","big","closeable","onClose"])}},c=l},2535:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var r=o(5166),n={class:"fixed z-10 inset-0 overflow-y-auto"},s={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},a=(0,r.createVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),l=(0,r.createVNode)("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),c={key:0,class:"hidden sm:block absolute top-0 right-0 pt-4 pr-4"},i=(0,r.createVNode)("span",{class:"sr-only"},"Close",-1),d=(0,r.createVNode)("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1);const u={emits:["close"],props:{show:{default:!1},closeable:{default:!0},closeIcon:{default:!0},big:{default:!1}},methods:{close:function(){this.closeable&&this.$emit("close")},closeOnEscape:function(e){"Escape"===e.key&&this.show&&this.close()}},watch:{show:function(e){e?(this.$nextTick((function(){var e,t;return(null===(e=document.querySelector("input"))||void 0===e?void 0:e.focus())||(null===(t=document.querySelector("textarea"))||void 0===t?void 0:t.focus())})),document.body.style.overflow="hidden"):document.body.style.overflow=null}},created:function(){document.addEventListener("keydown",this.closeOnEscape)},unmounted:function(){document.removeEventListener("keydown",this.closeOnEscape)},render:function(e,t,o,u,m,f){return(0,r.openBlock)(),(0,r.createBlock)(r.Teleport,{to:"body"},[(0,r.createVNode)(r.Transition,{"leave-active-class":"duration-200"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createVNode)("div",n,[(0,r.createVNode)("div",s,[(0,r.createVNode)(r.Transition,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createVNode)("div",{class:"fixed inset-0 transition-opacity",onClick:t[1]||(t[1]=function(){return f.close&&f.close.apply(f,arguments)}),"aria-hidden":"true"},[a],512),[[r.vShow,o.show]])]})),_:1}),l,(0,r.createVNode)(r.Transition,{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createVNode)("div",{class:[[o.big?"sm:max-w-4xl":"sm:max-w-lg"],"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"],role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},[o.closeIcon?((0,r.openBlock)(),(0,r.createBlock)("div",c,[(0,r.createVNode)("button",{type:"button",onClick:t[2]||(t[2]=function(){return f.close&&f.close.apply(f,arguments)}),class:"bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[i,d])])):(0,r.createCommentVNode)("",!0),(0,r.renderSlot)(e.$slots,"default")],2),[[r.vShow,o.show]])]})),_:3})])],512),[[r.vShow,o.show]])]})),_:1})])}},m=u}}]);