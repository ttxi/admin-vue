webpackJsonp([40],{AiHY:function(t,e,i){"use strict";function l(t){return i.i(d.a)({url:"/api/admin/gdbTopicMedicine/subMedicineList",method:"post",headers:{"Content-type":"application/json"},data:t})}function s(t){return i.i(d.a)({url:"/api/admin/gdbTopicSub/subGene/"+t,method:"get"})}function n(t){return i.i(d.a)({url:"/api/admin/gdbTopicSub/subGeneRs",method:"post",headers:{"Content-type":"application/json"},data:t})}function a(t){return i.i(d.a)({url:"/api/admin/gdbTopicMedicine/subMedicine",method:"post",headers:{"Content-type":"application/json"},data:t})}function r(t){return i.i(d.a)({url:"/api/admin/gdbTopicMedicine/subMedicine/"+t,method:"delete"})}function o(t){return i.i(d.a)({url:"/api/admin/gdbTopicMedicine/subMedicine",method:"put",headers:{"Content-type":"application/json"},data:t})}e.a=l,e.e=s,e.f=n,e.b=a,e.d=r,e.c=o;var d=i("Vo7i")},IPqJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("Dd8w"),s=i.n(l),n=i("AiHY"),a=i("NYxO");e.default={props:["num"],data:function(){return{rules:{gentype:[{required:!0,message:"请输入内容",trigger:"blur"}],pharmgkbM:[{required:!0,message:"请输入内容",trigger:"blur"}],locusImp:[{required:!0,message:"请输入内容",trigger:"blur"}],sjGeneType:[{required:!0,message:"请输入内容",trigger:"blur"}],sjSuggest:[{required:!0,message:"请输入内容",trigger:"blur"}]},loading:!1,id:void 0,nameid:{},setAdmin:{},form:{gentype:"",pharmgkbM:"",locusImp:"",sjGeneType:"",sjSuggest:""},edit:{},updataform:{},topic:null,list:null,listAll:{},geneSelect:null,spotSelect:null,total:null,listLoading:!1,listQuery:{subTopicId:"",geneId:"",locusId:""},listQueryAll:{},sexOptions:["男","女"],dialogFormVisible:!1,dialogStatus:"",userManager_btn_edit:!1,userManager_btn_del:!1,userManager_btn_add:!1,textMap:{update:"编辑",create:"创建"},tableKey:0,text:"请在右上角选择基因和位点查看数据",SpotText:"先选择基因",editOpen:!1}},created:function(){this.getList(this.num),this.userManager_btn_edit=this.elements["userManager:btn_edit"],this.userManager_btn_del=this.elements["userManager:btn_del"],this.userManager_btn_add=this.elements["userManager:btn_add"]},computed:s()({},i.i(a.b)(["elements"])),watch:{num:function(t){this.listQuery.geneId="",this.listQuery.locusId="",this.form.locusId="",this.list=null,this.text="请在右上角选择基因和位点查看数据",this.getList(t),this.listAll=t}},methods:{getList:function(t){var e=this;if(this.listAll=t,this.listQuery.subTopicId=t.id,!this.listQuery.locusId)return!1;this.listLoading=!0,i.i(n.a)(this.listQuery).then(function(t){"200"===t.code&&(e.list=t.data,e.list.length||(e.text="没有数据")),e.listLoading=!1})},handleFilter:function(){var t=this;this.listLoading=!0;for(var e in this.listQueryAll)this.listQueryAll[e]?this.listQuery[e]=this.listQueryAll[e]:delete this.listQuery[e];i.i(n.a)(this.listQuery).then(function(e){t.list=e.data.data.rows,t.total=e.data.data.total,t.listLoading=!1})},handleCreate:function(t){var e=this;if(this.form.subTopicId=this.listAll.id,!this.form.locusId)return void alert("请在右上角选择位点进行添加");this.$refs[t].validate(function(t){if(!t)return!1;i.i(n.b)(e.form).then(function(){e.getList(e.listAll),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3}),e.empty()})})},handleUpdate:function(t){this.dialogStatus="update",this.form.subTopicId=this.listAll.id,this.form.gentype=t.gentype,this.form.pharmgkbM=t.pharmgkbM,this.form.locusImp=t.locusImp,this.form.sjGeneType=t.sjGeneType,this.form.sjSuggest=t.sjSuggest,this.edit.id=t.id},update:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.edit.gentype=e.form.gentype,e.edit.pharmgkbM=e.form.pharmgkbM,e.edit.locusImp=e.form.locusImp,e.edit.sjGeneType=e.form.sjGeneType,e.edit.sjSuggest=e.form.sjSuggest,i.i(n.c)(e.edit).then(function(){e.getList(e.listAll),e.handle(),e.$notify({title:"成功",message:"编辑成功",type:"success",duration:2e3})})})},handle:function(){this.editOpen=!1,this.dialogStatus="",this.empty()},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.i(n.d)(t.id).then(function(){e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),e.getList(e.listAll)})})},cancel:function(t){this.dialogFormVisible=!1,this.$refs[t].resetFields()},geneChange:function(t){var e=this;t&&(this.loading=!0,i.i(n.e)(this.listAll.id).then(function(t){"200"===t.code&&(e.geneSelect=t.data,e.loading=!1)}))},optionGeneChange:function(t){var e=this;this.listQuery.locusId="",this.form.locusId="",i.i(n.f)({subTopicId:this.listAll.id,geneId:t}).then(function(t){"200"===t.code&&(e.spotSelect=t.data,t.data.length||(e.SpotText="无数据"))}),this.handle()},optionSpotChange:function(){this.form.geneId=this.listQuery.geneId,this.form.locusId=this.listQuery.locusId,this.getList(this.listAll)},empty:function(){this.form.gentype="",this.form.pharmgkbM="",this.form.locusImp="",this.form.sjGeneType="",this.form.sjSuggest=""}}}},hNK2:function(t,e,i){var l=i("VU/8")(i("IPqJ"),i("uuVa"),null,null,null);t.exports=l.exports},uuVa:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticStyle:{"margin-bottom":"10px",display:"flex"}},[i("div",[t._v("\n      主课题 "),i("el-input",{staticStyle:{width:"140px","margin-right":"30px"},attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.listAll.mainTopicName,callback:function(e){t.listAll.mainTopicName=e},expression:"listAll.mainTopicName"}})],1),t._v(" "),i("div",[t._v("\n      子课题 "),i("el-input",{staticStyle:{width:"140px","margin-right":"30px"},attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.listAll.subTopicName,callback:function(e){t.listAll.subTopicName=e},expression:"listAll.subTopicName"}})],1),t._v(" "),i("div",[t._v("\n      药物/病种 "),i("el-input",{staticStyle:{width:"140px","margin-right":"30px"},attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.listAll.medicine,callback:function(e){t.listAll.medicine=e},expression:"listAll.medicine"}})],1),t._v(" "),i("div",[i("el-form",{staticStyle:{display:"flex"},attrs:{model:t.listQuery}},[i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"基因选择"}},[i("el-select",{staticStyle:{width:"140px","margin-right":"30px"},attrs:{placeholder:"请选择",loading:t.loading},on:{"visible-change":t.geneChange,change:t.optionGeneChange},model:{value:t.listQuery.geneId,callback:function(e){t.listQuery.geneId=e},expression:"listQuery.geneId"}},t._l(t.geneSelect,function(t){return i("el-option",{key:t.id,attrs:{label:t.gene,value:t.id}})}))],1)],1)],1),t._v(" "),i("div",[i("el-form",{staticStyle:{display:"flex"},attrs:{model:t.listQuery}},[i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"位点选择"}},[i("el-select",{staticStyle:{width:"140px"},attrs:{"no-data-text":t.SpotText,placeholder:"请选择"},on:{change:t.optionSpotChange},model:{value:t.listQuery.locusId,callback:function(e){t.listQuery.locusId=e},expression:"listQuery.locusId"}},t._l(t.spotSelect,function(t){return i("el-option",{key:t.id,attrs:{label:t.rsid,value:t.id}})}))],1)],1)],1)]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:t.tableKey,attrs:{data:t.list,border:"",fit:"","empty-text":t.text,"highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"序号",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"170",align:"center",label:"基因型"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.gentype))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"170",align:"center",label:"PharmGkb用药建议"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.pharmgkbM))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"三济基因型"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.locusImp))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"三济用药建议(新版)"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.sjGeneType))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"位点结果影响"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.sjSuggest))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("dateformat")(e.row.crtTime)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",align:"center",label:"修改时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("dateformat")(e.row.updTime)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(i){t.handleUpdate(e.row)}}},[t._v("编辑\n        ")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){t.handleDelete(e.row)}}},[t._v("删除\n        ")])]}}])})],1),t._v(" "),i("div",{staticStyle:{display:"flex"}},[i("el-form",{ref:"form",staticStyle:{display:"flex","margin-top":"10px","flex-flow":"row wrap"},attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"基因型",prop:"gentype"}},[i("el-input",{staticStyle:{width:"160px","margin-right":"30px"},attrs:{disabled:t.editOpen,placeholder:"请输入内容"},model:{value:t.form.gentype,callback:function(e){t.form.gentype=e},expression:"form.gentype"}})],1),t._v(" "),i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"PharmGkb用药建议",width:"100px;",prop:"pharmgkbM"}},[i("el-input",{staticStyle:{width:"160px","margin-right":"30px"},attrs:{placeholder:"请输入内容"},model:{value:t.form.pharmgkbM,callback:function(e){t.form.pharmgkbM=e},expression:"form.pharmgkbM"}})],1),t._v(" "),i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"三济基因型",width:"100px;",prop:"locusImp"}},[i("el-input",{staticStyle:{width:"160px","margin-right":"30px"},attrs:{disabled:t.editOpen,placeholder:"请输入内容"},model:{value:t.form.locusImp,callback:function(e){t.form.locusImp=e},expression:"form.locusImp"}})],1),t._v(" "),i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"三济用药建议(新版)",width:"100px;",prop:"sjGeneType"}},[i("el-input",{staticStyle:{width:"160px","margin-right":"30px"},attrs:{disabled:t.editOpen,placeholder:"请输入内容"},model:{value:t.form.sjGeneType,callback:function(e){t.form.sjGeneType=e},expression:"form.sjGeneType"}})],1),t._v(" "),i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"位点结果影响",width:"100px;",prop:"sjSuggest"}},[i("el-input",{staticStyle:{width:"160px"},attrs:{disabled:t.editOpen,placeholder:"请输入内容"},model:{value:t.form.sjSuggest,callback:function(e){t.form.sjSuggest=e},expression:"form.sjSuggest"}})],1),t._v(" "),i("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"",width:"100px;",prop:"pharmgkbV"}},[i("div",["update"!==t.dialogStatus?i("el-button",{staticStyle:{"margin-left":"50px"},attrs:{type:"primary",icon:"edit"},on:{click:function(e){t.handleCreate("form")}}},[t._v("添加")]):i("el-button",{staticStyle:{"margin-left":"50px"},attrs:{type:"success",icon:"edit"},on:{click:function(e){t.update("form")}}},[t._v("编辑")]),t._v(" "),"update"===t.dialogStatus?i("el-button",{staticStyle:{"margin-left":"50px"},attrs:{type:"success",plain:""},on:{click:t.handle}},[t._v("取消编辑")]):t._e()],1)])],1)],1)],1)},staticRenderFns:[]}}});