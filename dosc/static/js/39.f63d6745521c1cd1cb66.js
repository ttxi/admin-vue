webpackJsonp([39],{"9lSe":function(t,e,i){"use strict";function l(t){return i.i(o.a)({url:"/api/admin/gdbTopicLocus/queryTopicLocusList",method:"post",params:t})}function n(t){return i.i(o.a)({url:"/api/admin/gdbTopicLocus/getlocusBySub",method:"post",params:t})}function a(t){return i.i(o.a)({url:"/api/admin/gdbTopicLocus/saveTopicLocus",method:"post",headers:{"Content-type":"application/json"},data:t})}function s(t){return i.i(o.a)({url:"/api/admin/gdbTopicLocus/deleteTopicLocus",method:"delete",headers:{"Content-type":"application/json"},data:t})}function r(t){return i.i(o.a)({url:"/api/admin/gdbTopicLocus/updateTopicLocus",method:"put",headers:{"Content-type":"application/json"},data:t})}e.a=l,e.e=n,e.b=a,e.d=s,e.c=r;var o=i("Vo7i")},bN35:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("Dd8w"),n=i.n(l),a=i("9lSe"),s=i("NYxO");e.default={props:["num"],data:function(){return{rules:{rsid:[{required:!0,message:"请输入内容",trigger:"blur"}],geneLocus:[{required:!0,message:"请输入内容",trigger:"blur"}],pharmgkbV:[{required:!0,message:"请输入内容",trigger:"blur"}]},loading:!1,id:void 0,nameid:{},setAdmin:{},form:{geneId:"",rsid:"",geneLocus:"",pharmgkbV:""},edit:{},updataform:{},topic:null,list:null,listAll:{},listSelect:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},listQueryAll:{},sexOptions:["男","女"],dialogFormVisible:!1,dialogStatus:"",userManager_btn_edit:!1,userManager_btn_del:!1,userManager_btn_add:!1,textMap:{update:"编辑",create:"创建"},tableKey:0,text:"请在右上角选择基因查看数据",editOpen:!1}},created:function(){this.getList(this.num),this.userManager_btn_edit=this.elements["userManager:btn_edit"],this.userManager_btn_del=this.elements["userManager:btn_del"],this.userManager_btn_add=this.elements["userManager:btn_add"]},computed:n()({},i.i(s.b)(["elements"])),watch:{num:function(t){this.form.geneId="",this.listQuery.geneId="",this.list=null,this.text="请在右上角选择基因查看数据",this.getList(t),this.listAll=t}},methods:{getList:function(t){var e=this;if(this.listAll=t,this.listQuery.subTopicId=t.id,!this.listQuery.geneId)return!1;this.listLoading=!0,i.i(a.a)(this.listQuery).then(function(t){e.list=t.data.rows,e.total=t.data.total,e.total||(e.text="暂无数据"),e.listLoading=!1})},handleFilter:function(){var t=this;this.listLoading=!0;for(var e in this.listQueryAll)this.listQueryAll[e]?this.listQuery[e]=this.listQueryAll[e]:delete this.listQuery[e];i.i(a.a)(this.listQuery).then(function(e){t.list=e.data.data.rows,t.total=e.data.data.total,t.listLoading=!1})},handleCreate:function(t){var e=this;if(this.form.subTopicId=this.listAll.id,!this.form.geneId)return void alert("请在右上角选择基因进行添加");this.$refs[t].validate(function(t){if(!t)return!1;i.i(a.b)(e.form).then(function(){e.getList(e.listAll),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3}),e.form.rsid="",e.form.geneLocus="",e.form.pharmgkbV=""})})},handleUpdate:function(t){this.dialogStatus="update",this.editOpen=!0,this.form.subTopicId=this.listAll.id,this.form.rsid=t.rsid,this.form.geneLocus=t.geneLocus,this.form.pharmgkbV=t.pharmgkbV,this.edit.id=t.id},update:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.edit.geneLocus=e.form.geneLocus,i.i(a.c)(e.edit).then(function(){e.getList(e.listAll),e.handle(),e.$notify({title:"成功",message:"编辑成功",type:"success",duration:2e3})})})},handle:function(){this.editOpen=!1,this.dialogStatus="",this.form.rsid="",this.form.geneLocus="",this.form.pharmgkbV=""},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.i(a.d)({id:t.id}).then(function(){e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),e.getList(e.listAll)})})},cancel:function(t){this.dialogFormVisible=!1,this.$refs[t].resetFields()},change:function(t){var e=this;t&&(this.loading=!0,i.i(a.e)({subTopicId:this.listAll.id}).then(function(t){"200"===t.code&&(e.listSelect=t.data,e.loading=!1)}))},optionChange:function(t){this.listQuery.geneId=t,this.getList(this.listAll),this.handle()}}}},dCai:function(t,e,i){var l=i("VU/8")(i("bN35"),i("xg24"),null,null,null);t.exports=l.exports},xg24:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticStyle:{"margin-bottom":"10px",display:"flex"}},[i("div",[t._v("\n      主课题 "),i("el-input",{staticStyle:{width:"140px","margin-right":"50px"},attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.listAll.mainTopicName,callback:function(e){t.listAll.mainTopicName=e},expression:"listAll.mainTopicName"}})],1),t._v(" "),i("div",[t._v("\n      子课题 "),i("el-input",{staticStyle:{width:"140px","margin-right":"50px"},attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.listAll.subTopicName,callback:function(e){t.listAll.subTopicName=e},expression:"listAll.subTopicName"}})],1),t._v(" "),i("div",[t._v("\n      药物/病种 "),i("el-input",{staticStyle:{width:"140px","margin-right":"50px"},attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.listAll.medicine,callback:function(e){t.listAll.medicine=e},expression:"listAll.medicine"}})],1),t._v(" "),i("div",[i("el-form",{ref:"form",staticStyle:{display:"flex"},attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"基因选择",prop:"geneId"}},[i("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择",loading:t.loading},on:{"visible-change":t.change,change:t.optionChange},model:{value:t.form.geneId,callback:function(e){t.form.geneId=e},expression:"form.geneId"}},t._l(t.listSelect,function(t){return i("el-option",{key:t.id,attrs:{label:t.gene,value:t.id}})}))],1)],1)],1)]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:t.tableKey,attrs:{data:t.list,border:"",fit:"","empty-text":t.text,"highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"序号",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"200",align:"center",label:"RSID"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.rsid))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"位点"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.geneLocus))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"PharmGkb循证等级"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.pharmgkbV))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.crtTime))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"修改时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.updTime))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(i){t.handleUpdate(e.row)}}},[t._v("编辑\n        ")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){t.handleDelete(e.row)}}},[t._v("删除\n        ")])]}}])})],1),t._v(" "),i("div",{staticStyle:{display:"flex"}},[i("el-form",{ref:"form",staticStyle:{display:"flex","margin-top":"10px"},attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"RSID",prop:"rsid"}},[i("el-input",{staticStyle:{width:"160px","margin-right":"30px"},attrs:{disabled:t.editOpen,placeholder:"请输入内容"},model:{value:t.form.rsid,callback:function(e){t.form.rsid=e},expression:"form.rsid"}})],1),t._v(" "),i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"位点",width:"100px;",prop:"geneLocus"}},[i("el-input",{staticStyle:{width:"160px","margin-right":"30px"},attrs:{placeholder:"请输入内容"},model:{value:t.form.geneLocus,callback:function(e){t.form.geneLocus=e},expression:"form.geneLocus"}})],1),t._v(" "),i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"PharmGkb循证等级",width:"100px;",prop:"pharmgkbV"}},[i("el-input",{staticStyle:{width:"160px"},attrs:{disabled:t.editOpen,placeholder:"请输入内容"},model:{value:t.form.pharmgkbV,callback:function(e){t.form.pharmgkbV=e},expression:"form.pharmgkbV"}})],1)],1),t._v(" "),i("div",["update"!==t.dialogStatus?i("el-button",{staticStyle:{"margin-left":"50px","margin-top":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:function(e){t.handleCreate("form")}}},[t._v("添加")]):i("el-button",{staticStyle:{"margin-left":"50px","margin-top":"10px"},attrs:{type:"success",icon:"edit"},on:{click:function(e){t.update("form")}}},[t._v("编辑")]),t._v(" "),"update"===t.dialogStatus?i("el-button",{staticStyle:{"margin-left":"50px","margin-top":"10px"},attrs:{type:"success",plain:""},on:{click:t.handle}},[t._v("取消编辑")]):t._e()],1)],1)],1)},staticRenderFns:[]}}});