/*!
 * built in 2016-7-10:18 version 1.0 by luyun
 * 
 */
webpackJsonp([1,2,4,5,6],{53:function(e,t,o){var s,i;s=o(61),i=o(66),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},60:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"FileExplorer",data:function(){return{path:"/",files:[]}},props:{username:{type:String,required:!0},repo:{type:String,required:!0}},computed:{fullRepoUrl:function(){return this.username+"/"+this.repo},sortedFiles:function(){return this.files.slice(0).sort(function(e,t){return e.type!==t.type?"dir"===e.type?-1:1:e.name<t.name?-1:1})}},methods:{getFiles:function(){var e=this;this.$http.get("https://api.github.com/repos/"+this.fullRepoUrl+"/contents"+this.path,function(t){e.files=t})},changePath:function(e){this.path="/"+e,this.getFiles()},goBack:function(){console.log("old-path: ",this.path),console.log("middle-path: ",this.path.split("/").slice(0,-1)),this.path=this.path.split("/").slice(0,-1).join("/"),console.log("new-path: ",this.path),""===this.path&&(this.path="/"),this.getFiles()}},watch:{repo:function(e,t){this.path="/",this.getFiles()}},created:function(){this.username&&this.repo&&this.getFiles()}}},61:function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(68),n=s(i);t["default"]={name:"Github",data:function(){return{fullRepoName:"",username:"",repo:""}},methods:{changeRepo:function(){this.username=this.fullRepoName.split("/").shift(),this.repo=this.fullRepoName.split("/").pop(),console.group("data begin..."),console.log("fullRepoName: ",this.fullRepoName),console.log("username: ",this.username),console.log("repo: ",this.repo),console.groupEnd("data ending...")}},components:{FileExplorer:n["default"]}}},65:function(e,t){e.exports=' <div class=row> <div class="col-md-12 col-sm-12"> <table class="table table-hover"> <thead> <tr> <th>当前路径: {{path}}</th> <th class=text-right> <button class="btn btn-danger btn-xs" @click=goBack() v-if="path !== \'/\'">返&emsp;回</button> </th> </tr> </thead> <tbody> <tr v-for="file in sortedFiles"> <td> <div class=file v-if="file.type === \'file\'"> <span class="octicon octicon-file-text"></span> <a href=javascript:;>{{file.name}}</a> </div> <div class=directory v-if="file.type === \'dir\'"> <span class="octicon octicon-file-directory"></span> <a href=javascript:; @click=changePath(file.path)>{{file.name}}</a> </div> </td> <td class=text-right> <a href={{file.download_url}} download=file v-if="file.type === \'file\'"> <span class="octicon octicon-cloud-download"></span> </a> </td> </tr> </tbody> </table> </div> </div> '},66:function(e,t){e.exports=' <div class=container id=container> <div class=row> <legend> <h2><span class="mega-octicon octicon-mark-github"></span> GitHub文件浏览器</h2> <form id=changeRepoForm @submit.prevent=changeRepo() class=form-inline> <div class=form-group> <label for=fullRepoName>Full Repo Name: </label> <input type=text id=fullRepoName class=form-control placeholder=fengyun v-model=fullRepoName style="width: 300px"> </div> <button type=submit class="btn btn-primary">获&emsp;取</button> </form> <hr> <file-explorer :username=username :repo=repo></file-explorer> </legend> </div> </div> '},68:function(e,t,o){var s,i;s=o(60),i=o(65),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}});