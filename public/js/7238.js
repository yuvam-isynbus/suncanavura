(self.webpackChunk=self.webpackChunk||[]).push([[7238],{7238:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var n=r(5166),t={class:"bg-gray-400 px-4 py-8 sm:p-4"},a={class:"mb-6 mt-2 flex justify-between items-center"},o={class:"flex justify-between"};const l={metaInfo:{title:"Houses"},mixins:[probable],layout:function(e,s){return e(Layout,[e(Show,{props:{}},[s])])},components:{SendingMessageCard,SearchInput,SendMessage},props:{messages:Array},data:function(){return{replayMessage:null,errors:[],searchRoute:"messages.sent_messages.index"}},methods:{replayClicked:function(e){this.messages.map((function(e){return e.replay=!1})),e.replay=!0},cancel:function(e){e.replay=!1,this.replayMessage=null,this.errors=[]},deleteMessage:function(e){this.$inertia.post(this.route("messages.delete.sent"),{id:e.id},{replace:!1,preserveScroll:!0,preserveState:!0}).then((function(){console.log("message deleted")}))},sendMessage:function(e){var s=this;this.$inertia.post(this.route("messages.users.rooms.sendmessage.store",[e.data.receiver_id,e.data.room_id]),{message:this.replayMessage,redirect:"messages.sent_messages.index",id:e.id}).then((function(){s.$page.errors.message?s.errors=s.$page.errors.message:e.replay=!1}))}},render:function(e,s,r,l,c,i){var u=(0,n.resolveComponent)("search-input"),d=(0,n.resolveComponent)("send-message"),m=(0,n.resolveComponent)("sending-message-card");return(0,n.openBlock)(),(0,n.createBlock)("div",t,[(0,n.createVNode)("div",a,[(0,n.createVNode)(u,{modelValue:e.form.search,"onUpdate:modelValue":s[1]||(s[1]=function(s){return e.form.search=s}),class:"w-full max-w-sm mr-4",onReset:e.reset},null,8,["modelValue","onReset"])]),((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(r.messages,(function(e){return(0,n.openBlock)(),(0,n.createBlock)(m,{key:e.id,message:e},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",o,[(0,n.createVNode)("a",{class:"block mt-2 mb-4 cursor-pointer text-blue-500 hover:text-orange font-semibold",onClick:function(s){return i.replayClicked(e)}},"Send new message",8,["onClick"]),(0,n.createVNode)("a",{class:"block ml-2 mt-2 mb-4 cursor-pointer text-red-600 hover:text-orange font-semibold",onClick:function(s){return i.deleteMessage(e)},"preserve-scroll":""},"Delete",8,["onClick"])]),e.replay?((0,n.openBlock)(),(0,n.createBlock)(d,{key:0,modelValue:c.replayMessage,"onUpdate:modelValue":s[2]||(s[2]=function(e){return c.replayMessage=e}),errors:c.errors,onSendMessage:function(s){return i.sendMessage(e)},onCancel:function(s){return i.cancel(e)}},null,8,["modelValue","errors","onSendMessage","onCancel"])):(0,n.createCommentVNode)("",!0)]})),_:2},1032,["message"])})),128))])}},c=l}}]);