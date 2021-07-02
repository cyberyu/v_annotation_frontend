(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{d556:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex"},[a("div",{staticClass:"row col-12 self-start"},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{label:"My Projects",icon:"home",to:"/"}}),a("q-breadcrumbs-el",{attrs:{label:"Project Summary",icon:"widgets"}})],1)],1),a("div",{staticClass:"flex row fit justify-center flex-center"},[a("q-card",{staticStyle:{"max-width":"450px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v(e._s(e.project.name))]),a("div",{staticClass:"text-capitalize text-grey"},[e._v("\n          "+e._s(e.project.description)+"\n        ")])]),a("q-separator"),a("q-card-section",[a("q-linear-progress",{attrs:{size:"25px",value:e.project.num_of_annotated_docs/e.project.num_of_docs,color:"accent"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:(e.project.num_of_annotated_docs/e.project.num_of_docs*100).toFixed(2)+"% ("+e.project.num_of_annotated_docs+"/"+e.project.num_of_docs+")"}})],1)]),a("div",{staticClass:"flex justify-center"},e._l(e.project.labels,(function(t,o){return a("q-btn",{key:o,staticClass:"q-mr-xs q-my-sm",style:"color: "+t.color,attrs:{outline:"",size:"sm"}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1),e.project.curators?a("div",[e._v("curators: "+e._s(e.project.curators.length))]):e._e(),e.project.vmodels?a("div",[e._v("models: "+e._s(e.project.vmodels.length))]):e._e(),e.project.rules?a("div",[e._v("rules: "+e._s(e.project.rules.length))]):e._e(),e.project.dicts?a("div",[e._v("dictionaries: "+e._s(e.project.dicts.length))]):e._e(),e.project.cmodels?a("div",[e._v("consensus model: "+e._s(e.project.cmodels.length))]):e._e(),e.project.id&&e.canReview?a("div",{staticClass:"flex justify-start q-mt-sm"},[a("q-btn",{staticStyle:{"font-size":"12px"},attrs:{label:"Upload documents",color:"primary"},on:{click:function(t){e.upload=!0}}}),a("q-btn",{staticClass:"q-mx-sm",staticStyle:{"font-size":"12px"},attrs:{label:"Export curation data",color:"primary",loading:e.loading},on:{click:function(t){return e.downloadLabel()}}})],1):e._e(),e.fileInfo?a("div",[a("a",{attrs:{href:"cache/"+e.fileInfo.text}},[e._v("download texts ")]),a("a",{staticClass:"q-mx-sm",attrs:{href:"cache/"+e.fileInfo.label}},[e._v("download labels ")])]):e._e(),a("q-dialog",{model:{value:e.upload,callback:function(t){e.upload=t},expression:"upload"}},[a("q-card",[a("q-card-section",[a("q-uploader",{staticStyle:{"max-width":"300px"},attrs:{url:e.$hostname+"/api/upload/","form-fields":[{name:"project",value:e.project.id},{name:"user",value:e.loggedInUser.id}],flat:"",bordered:"",method:"put"},on:{added:e.uploadFile}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1),a("q-card-actions",{attrs:{align:"right"}},[e.project.id&&e.canReview&&e.project.cmodels.length>0?a("q-btn",{attrs:{flat:"",disable:0===e.project.number_of_docs},on:{click:function(t){return e.$router.push({name:"annotate",params:{project:e.project,consensus:!0}})}}},[e._v("\n          Check Consensus\n        ")]):e._e(),e.project.id&&e.canReview?a("q-btn",{attrs:{flat:"",disable:0===e.project.number_of_docs},on:{click:function(t){return e.$router.push({name:"annotate",params:{project:e.project,review:!0}})}}},[e._v("\n          Review\n        ")]):e._e(),a("q-btn",{attrs:{flat:"",disable:0===e.project.number_of_docs},on:{click:function(t){return e.$router.push({name:"annotate",params:{project:e.project,review:!1}})}}},[e._v("\n          Annotate It\n        ")])],1)],1)],1)])},s=[],r={name:"projectDetail",data(){return{project:{},upload:!1,download:!1,loading:!1,fileInfo:null}},mounted(){const e=this.$route.params.id;this.fetchProject(e)},methods:{fetchProject(e){this.$axios.get(this.$hostname+`/api/projects/${e}/`).then((e=>{this.project=e.data}))},uploadFile(e){console.log(e)},downloadLabel(){this.loading=!0,this.$axios.get(`/api/projects/${this.project.id}/download/`).then((e=>{this.fileInfo=e.data,this.loading=!1}))}},computed:{canReview(){return this.project.admins.includes(this.loggedInUser.id)},loggedInUser(){return this.$store.getters["auth/user"]}}},c=r,n=a("2877"),l=a("9989"),i=a("ead5"),d=a("079e"),p=a("f09f"),u=a("a370"),m=a("eb85"),f=a("6b1d"),_=a("58a81"),j=a("9c40"),h=a("24e8"),v=a("ee89"),b=a("4b7e"),g=a("7f67"),x=a("eebe"),q=a.n(x),w=Object(n["a"])(c,o,s,!1,null,"58d6e266",null);t["default"]=w.exports;q()(w,"components",{QPage:l["a"],QBreadcrumbs:i["a"],QBreadcrumbsEl:d["a"],QCard:p["a"],QCardSection:u["a"],QSeparator:m["a"],QLinearProgress:f["a"],QBadge:_["a"],QBtn:j["a"],QDialog:h["a"],QUploader:v["a"],QCardActions:b["a"]}),q()(w,"directives",{ClosePopup:g["a"]})}}]);