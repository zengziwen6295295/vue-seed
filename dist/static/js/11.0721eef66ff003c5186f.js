webpackJsonp([11],{IMRj:function(e,s){},kUaz:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("lC5x"),r=t.n(a),n=t("J0Oq"),o=t.n(n),c={data:function(){return{password:"",newPassword:"",verifyCode:"",countDown:60,sendVertyTxt:"发送验证码",vertyFlag:!0,timer:null,popVaisable:!1}},methods:{changePassword:function(){var e=this;return o()(r.a.mark(function s(){var t,a;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(e.password==e.newPassword){s.next=4;break}return e.$message({message:"新旧密码不一致，请重新输入",type:"error"}),e.newPassword="",s.abrupt("return");case 4:return t=e.newPassword,a=e.verifyCode,s.next=7,e.$ajax("/userCenter/modifyPassword",{newPassword:t,verifyCode:a});case 7:e.password="",e.newPassword="",e.verifyCode="",e.$message({message:"密码修改成功",type:"success"});case 11:case"end":return s.stop()}},s,e)}))()},sendVertyCode:function(){var e=this;return o()(r.a.mark(function s(){var t;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.$store.state.mobile,s.next=3,e.$ajax("/userCenter/sendVerifyCodeBySMS",{loginName:t,action:"MODIFY_PASSWORD"});case 3:e.sendVertyTxt="验证码已发送",e.vertyFlag=!1,e.startCountDown(),e.popVaisable=!0,setTimeout(function(){e.popVaisable=!1},3e3);case 8:case"end":return s.stop()}},s,e)}))()},startCountDown:function(){var e=this;clearInterval(this.timer),this.timer=setInterval(function(){e.sendVertyTxt=e.countDown+"s后重新发送",e.countDown--,e.countDown<-1&&(e.sendVertyTxt="发送验证码",e.vertyFlag=!0,e.countDown=60,clearInterval(e.timer))},1e3)}}},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"codechange-box"},[t("h3",[e._v("密码修改")]),e._v(" "),t("ul",{staticClass:"code-c-ulist"},[t("li",[t("span",{staticClass:"code-c-left"},[e._v("新密码")]),e._v(" "),t("div",{staticClass:"code-c-right"},[t("el-input",{attrs:{size:"small",placeholder:"",type:"password",clearable:""},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}})],1)]),e._v(" "),t("li",[t("span",{staticClass:"code-c-left"},[e._v("确认新密码")]),e._v(" "),t("div",{staticClass:"code-c-right"},[t("el-input",{attrs:{size:"small",type:"password",placeholder:"",clearable:""},model:{value:e.newPassword,callback:function(s){e.newPassword=s},expression:"newPassword"}})],1)]),e._v(" "),t("li",[t("span",{staticClass:"code-c-left"},[e._v("获取验证码")]),e._v(" "),t("div",{staticClass:"code-c-right"},[t("el-popover",{attrs:{placement:"right",width:"200",trigger:"manual",content:"验证码已发送至法人手机号"},model:{value:e.popVaisable,callback:function(s){e.popVaisable=s},expression:"popVaisable"}},[t("el-button",{staticClass:"zb-btn",staticStyle:{width:"100%","text-align":"center","border-radius":"4px"},attrs:{slot:"reference",size:"small",type:"success",disabled:!e.vertyFlag},on:{click:e.sendVertyCode},slot:"reference"},[e._v(e._s(e.sendVertyTxt))])],1)],1)]),e._v(" "),t("li",[t("span",{staticClass:"code-c-left"},[e._v("输入验证码")]),e._v(" "),t("div",{staticClass:"code-c-right",staticStyle:{width:"120px"}},[t("el-input",{attrs:{size:"small",placeholder:"",clearable:""},model:{value:e.verifyCode,callback:function(s){e.verifyCode=s},expression:"verifyCode"}})],1)]),e._v(" "),t("li",[t("span",{staticClass:"code-c-left"}),e._v(" "),t("div",{staticClass:"code-c-right",staticStyle:{width:"120px"}},[t("el-button",{staticClass:"zb-btn",attrs:{type:"success",size:"small",disabled:!(e.password&&e.newPassword&&e.verifyCode)},on:{click:e.changePassword}},[e._v("确 认")])],1)])])])},staticRenderFns:[]};var l=t("C7Lr")(c,i,!1,function(e){t("IMRj")},"data-v-1d3a7cce",null);s.default=l.exports}});