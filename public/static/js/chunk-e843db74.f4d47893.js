(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e843db74"],{"0e8f":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c}));var r=n("b775"),a=function(){return r["a"].get("/company/department")},i=function(e){return r["a"].delete("/company/department/".concat(e))},o=function(e){return r["a"].post("/company/department",e)},s=function(e){return r["a"].get("/company/department/".concat(e))},c=function(e){return Object(r["a"])({url:"/company/department/".concat(e.id),method:"put",data:e})}},"5b9e":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d3b7"),n("159b"),n("14d9");function r(e,t){var n=[];return e.forEach((function(a){if(a.pid===t){var i=r(e,a.id);i.length&&(a.children=i),n.push(a)}})),n}},9439:function(e,t,n){"use strict";n("b884")},b540a:function(e,t,n){},b884:function(e,t,n){},d492:function(e,t,n){"use strict";n("b540a")},e302:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return c}));var r=n("b775"),a=function(){return r["a"].get("/sys/user/simple")};function i(e){return Object(r["a"])({url:"/sys/user",params:e})}function o(e){return Object(r["a"])({url:"/sys/user/".concat(e),method:"delete"})}var s=function(e){return Object(r["a"])({url:"/sys/user",method:"POST",data:e})};function c(e){return Object(r["a"])({url:"/sys/user/batch",method:"post",data:e})}},fb3b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"tree-card",attrs:{shadow:"always","body-style":{padding:"20px"}}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("AddTree",{attrs:{list:e.company,"is-root":!0},on:{command:e.handleCommon}})],1),n("div",{staticClass:"custom-tree-container"},[n("el-tree",{attrs:{data:e.departs,props:e.defaultProps,"default-expand-all":""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return n("AddTree",{attrs:{list:r,"is-root":!1},on:{dropDownDelete:e.handlerDropDownDelete,command:e.handleCommon,detailDepartment:e.handleDetailDepartment}})}}])})],1),n("DiaLog",{ref:"dialog",attrs:{"dialog-visible":e.dialogVisible,list:e.node},on:{"update:dialogVisible":function(t){e.dialogVisible=t},"update:dialog-visible":function(t){e.dialogVisible=t},initGetDepartment:e.initGetDepartment}})],1)],1)},a=[],i=n("c7eb"),o=n("1da1"),s=n("0e8f"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-tree-node"},[n("el-row",{staticStyle:{height:"40px",width:"100%"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",[n("span",[e._v(e._s(e.list.name))])]),n("el-col",{attrs:{span:4}},[n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-col",{staticClass:"manner"},[e._v(e._s(e.list.manager))]),n("el-col",[n("el-dropdown",{on:{command:e.handleCommand}},[n("span",[e._v(" 操作"),n("i",{staticClass:"el-icon-arrow-down"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{disabled:!e.checkPersimmon("add-department"),command:"add"}},[e._v("添加子部门")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑部门")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"del"}},[e._v("删除部门")])],1)],1)],1)],1)],1)],1)],1)},l=[],d={name:"HrsaasAddTree",props:{list:{type:Object,default:function(){return[]}},isRoot:{type:Boolean,default:!1}},methods:{handleCommand:function(e){var t=this;"add"===e?this.$emit("command",this.list):"edit"===e?this.$emit("detailDepartment",this.list):"del"===e&&this.$confirm("确认删除部门吗？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then((function(){return t.$emit("dropDownDelete",t.list)})).then((function(){}))}}},u=d,m=(n("d492"),n("2877")),f=Object(m["a"])(u,c,l,!1,null,"e08cbb0a",null),p=f.exports,b=n("5b9e"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{visible:e.dialogVisible,title:e.form.id?"编辑部门":"新增部门",width:"30%",size:"medium","custom-class":"saveAsDialog"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[n("el-input",{staticStyle:{width:"90%"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"部门编码",prop:"code"}},[n("el-input",{staticStyle:{width:"90%"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),n("el-form-item",{attrs:{label:"部门负责人",prop:"manager"}},[n("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择"},on:{focus:e.changeSelector},model:{value:e.form.manager,callback:function(t){e.$set(e.form,"manager",t)},expression:"form.manager"}},e._l(e.people,(function(e){return n("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),n("el-form-item",{attrs:{label:"部门介绍",prop:"desc"}},[n("el-input",{staticStyle:{width:"90%"},attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{on:{click:e.handleCandle}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1)],1)],1)},v=[],w=n("5530"),g=(n("d3b7"),n("4de4"),n("b0c0"),n("d9e2"),n("e302")),j={name:"HrsaasTreeDialog",props:{dialogVisible:{type:Boolean,default:!1},list:{type:Object,default:function(){}}},data:function(){var e=this,t=null,n=function(){var n=Object(o["a"])(Object(i["a"])().mark((function n(r,a,o){var c,l;return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["e"])();case 2:c=n.sent,l=c.data,t=e.form.id?l.depts.filter((function(t){return t.pid===e.form.pid&&t.id!==e.form.id})).some((function(e){return e.name===a})):l.depts.filter((function(t){return t.pid===e.list.id})).some((function(e){return e.name===a})),t?o(new Error("同级部门下已经有".concat(a,"的部门了"))):o();case 6:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),r=function(){var n=Object(o["a"])(Object(i["a"])().mark((function n(r,a,o){var c,l;return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["e"])();case 2:c=n.sent,l=c.data,t=e.form.id?l.depts.filter((function(t){return t.id!==e.form.id})).some((function(e){return e.code===a})):l.depts.some((function(e){return e.code===a})),t?o(new Error("同级部门下已经有".concat(a,"的编码了"))):o();case 6:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}();return{form:{name:"",code:"",manager:"",desc:""},people:[],rules:{name:[{required:!0,message:"请输入部门名称",trigger:"blur"},{validator:n,trigger:"blur"}],code:[{required:!0,message:"请输入部门编码",trigger:"blur"},{validator:r,trigger:"blur"}],manager:[{required:!0,message:"请选择负责人",trigger:"blur"}],desc:[{required:!0,message:"请输入部门描述",trigger:"blur"}]}}},mounted:function(){},methods:{changeSelector:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var n,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["d"])();case 2:n=t.sent,r=n.data,e.people=r;case 5:case"end":return t.stop()}}),t)})))()},detailDepartment:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function n(){var r,a;return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["c"])(e);case 2:r=n.sent,a=r.data,t.form=a;case 5:case"end":return n.stop()}}),n)})))()},handleCandle:function(){this.$emit("update:dialogVisible",!1),this.form={},this.$refs.form.resetFields()},confirm:function(){var e=this;this.$refs.form.validate(function(){var t=Object(o["a"])(Object(i["a"])().mark((function t(n){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=10;break}if(!e.form.id){t.next=6;break}return t.next=4,Object(s["d"])(e.form);case 4:t.next=8;break;case 6:return t.next=8,Object(s["a"])(Object(w["a"])(Object(w["a"])({},e.form),{},{pid:e.list.id}));case 8:e.$emit("initGetDepartment"),e.handleCandle();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},O=j,x=Object(m["a"])(O,h,v,!1,null,"298abc9c",null),y=x.exports,D={name:"HrsaasIndex",components:{AddTree:p,DiaLog:y},data:function(){return{dialogVisible:!1,defaultProps:{label:"name"},company:{name:"江苏传智播客教育科技股份有限公司",manager:"负责人",id:""},departs:[],node:{}}},created:function(){this.initGetDepartment()},methods:{initGetDepartment:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){var n,r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["e"])();case 2:n=t.sent,r=n.data,e.departs=Object(b["a"])(r.depts,"");case 5:case"end":return t.stop()}}),t)})))()},handlerDropDownDelete:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function n(){return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(s["b"])(e.id);case 3:t.$message.success("删除成功"),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.log(n.t0);case 9:t.initGetDepartment();case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))()},handleCommon:function(e){this.dialogVisible=!0,this.node=e},handleDetailDepartment:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function n(){return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.dialogVisible=!0,t.node=e,t.$refs.dialog.detailDepartment(e.id);case 3:case"end":return n.stop()}}),n)})))()}}},k=D,_=(n("9439"),Object(m["a"])(k,r,a,!1,null,"7e903da8",null));t["default"]=_.exports}}]);