(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"171d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{},[t._l(t.projects,(function(e,s){return a("q-card",{key:s,staticClass:"col-12 q-ma-md",staticStyle:{width:"450px"}},[a("q-card-section",{staticClass:"text-h6 bg-primary text-white q-py-sm"},[a("div",[t._v(" "+t._s(e.name)+" ")])]),a("q-card-section",[t._v("\n        Total documents: "+t._s(e.num_of_docs)+"\n      ")]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:""},on:{click:function(a){return t.$router.push({name:"project",params:{id:e.id}})}}},[t._v(" View Detail ")])],1)],1)})),t.loaded&&0===t.projects.length?a("q-card",{staticClass:"text-h5"},[t._v("\n      You have no assigned projects to curate yet.\n    ")]):t._e(),t.loaded?t._e():a("q-card",{staticClass:"text-h5"},[t._v("\n      Loading project list\n    ")])],2)])},n=[],c={name:"projectList",data(){return{projects:[],loaded:!1}},mounted(){this.$emit("mode",null),this.fetchProjects()},methods:{fetchProjects(){this.$axios.get("/api/projects/").then((t=>{this.projects=t.data.results,this.loaded=!0}))}}},o=c,r=a("2877"),i=a("9989"),d=a("f09f"),l=a("a370"),p=a("4b7e"),u=a("9c40"),h=a("eebe"),m=a.n(h),f=Object(r["a"])(o,s,n,!1,null,"a5b77e06",null);e["default"]=f.exports;m()(f,"components",{QPage:i["a"],QCard:d["a"],QCardSection:l["a"],QCardActions:p["a"],QBtn:u["a"]})}}]);