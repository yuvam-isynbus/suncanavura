(self.webpackChunk=self.webpackChunk||[]).push([[6999,9203],{9203:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var u=n(5166);const l={emits:["update:modelValue"],props:{modelValue:String},render:function(e,t,n,l,o,a){return(0,u.openBlock)(),(0,u.createBlock)("input",{type:"text",value:n.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["value"])}},o=l},6999:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var u=n(5166),l={class:"mt-4 font-semibold text-green-500"};const o={components:{PInput:n(9203).default},props:{modelValue:String},data:function(){return{name:this.modelValue}},methods:{},render:function(e,t,n,o,a,r){var d=(0,u.resolveComponent)("p-input");return(0,u.openBlock)(),(0,u.createBlock)("div",null,[(0,u.createVNode)(d,{modelValue:a.name,"onUpdate:modelValue":[t[1]||(t[1]=function(e){return a.name=e}),t[2]||(t[2]=function(t){return e.$emit("update:modelValue",t)})]},null,8,["modelValue"]),(0,u.createVNode)("p",l,"PInput: "+(0,u.toDisplayString)(a.name),1)])}},a=o}}]);