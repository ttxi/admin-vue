webpackJsonp([61],{bGa4:function(e,t,a){var i=a("VU/8")(a("sdq0"),a("fcLk"),null,null,null);e.exports=i.exports},fcLk:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"rsId"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.handleFilter(t)}},model:{value:e.listQuery.rsId,callback:function(t){e.listQuery.rsId=t},expression:"listQuery.rsId"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200",align:"center",label:"样本信息"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.yhdmId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"110",align:"center",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"110",align:"center",label:"基因结果"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.gbdValue))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"基因报告"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"buttonText",attrs:{href:t.row.resultUrl,target:"_blank"}},[e._v("检测报告")])]}}])})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.listQuery.page=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账户",prop:"username"}},["create"==e.dialogStatus?a("el-input",{attrs:{placeholder:"请输入账户"},model:{value:e.form.username,callback:function(t){e.form.username=t},expression:"form.username"}}):a("el-input",{attrs:{placeholder:"请输入账户",readonly:""},model:{value:e.form.username,callback:function(t){e.form.username=t},expression:"form.username"}})],1),e._v(" "),"create"==e.dialogStatus?a("el-form-item",{attrs:{label:"密码",placeholder:"请输入密码",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.form.password=t},expression:"form.password"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.form.sex=t},expression:"form.sex"}},e._l(e.sexOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容"},model:{value:e.form.description,callback:function(t){e.form.description=t},expression:"form.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(t){e.cancel("form")}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.create("form")}}},[e._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},sdq0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),r=a.n(i),s=a("Vo7i"),n=a("NYxO");t.default={name:"user",data:function(){return{form:{username:void 0,name:void 0,sex:"男",password:void 0,description:void 0},rules:{name:[{required:!0,message:"请输入用户",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],username:[{required:!0,message:"请输入账户",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:20,message:"长度在 5 到 20 个字符",trigger:"blur"}]},list:null,total:null,listLoading:!0,listQuery:{rsId:""},sexOptions:["男","女"],dialogFormVisible:!1,dialogStatus:"",userManager_btn_edit:!1,userManager_btn_del:!1,userManager_btn_add:!1,textMap:{update:"编辑",create:"创建"},tableKey:0}},created:function(){this.getList(),this.userManager_btn_edit=this.elements["userManager:btn_edit"],this.userManager_btn_del=this.elements["userManager:btn_del"],this.userManager_btn_add=this.elements["userManager:btn_add"]},computed:r()({},a.i(n.b)(["elements"])),methods:{getList:function(){var e=this;this.list=null,this.listLoading=!0,console.log(this.listQuery.rsId),a.i(s.a)({url:"/api/admin/gdbDb/queryGdbDbInfo",method:"post",params:this.listQuery}).then(function(t){console.log(t),"200"===t.code&&(e.list=t.data),e.listLoading=!1})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(e){var t=this;getObj(e.id).then(function(e){t.form=e.data,t.dialogFormVisible=!0,t.dialogStatus="update"})},create:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;addObj(t.form).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},cancel:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},update:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.dialogFormVisible=!1,t.form.password=void 0,putObj(t.form.id,t.form).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},resetTemp:function(){this.form={username:void 0,name:void 0,sex:"男",password:void 0,description:void 0}}}}}});