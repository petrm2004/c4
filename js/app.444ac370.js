(function(t){function e(e){for(var r,s,i=e[0],d=e[1],c=e[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,i=1;i<o.length;i++){var d=o[i];0!==n[d]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},n={app:0},a=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/c4/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("64a9"),n=o.n(r);n.a},"39a3":function(t,e,o){"use strict";var r=o("b1e7"),n=o.n(r);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d"),o("f9e3");var r=o("5f5b"),n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],i=(o("034f"),o("2877")),d={},c=Object(i["a"])(d,a,s,!1,null,null,null),u=c.exports,l=o("8c4f"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",[t._v("Todos")]),t._m(0),o("table",[t._m(1),o("tbody",t._l(t.todos,(function(e,r){return o("tr",{key:r},[o("td",[t._v(t._s(e.uid))]),o("td",[t._v(t._s(e.description))]),o("td",[e.is_completed?o("span",[t._v("Выполнено")]):o("span",[t._v("Не выполнено")])])])})),0)])])},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v("\n    Бутстрап подключен и работает\n    "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Uid")]),o("th",[t._v("Описание")]),o("th",[t._v("Выполнена?")])])])}],f=o("bc3a"),b=o.n(f),h="http://localhost:5000/api/tasks/",v={data:function(){return{todos:[]}},methods:{getTodos:function(){var t=this;b.a.get(h).then((function(e){t.todos=e.data.tasks}))}},created:function(){this.getTodos()}},_=v,g=Object(i["a"])(_,p,m,!1,null,"fce6164a",null),T=g.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"col-sm-10"},[o("h1",[t._v("Задачи")]),t.showConfirmation?o("confirmation",{attrs:{message:t.confirmationMessage}}):t._e(),o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-modal",modifiers:{"todo-modal":!0}}],staticClass:"btn btn-success btn-sm align-left d-block",attrs:{type:"button",id:"task-add"}},[t._v("\n      Добавить задачу\n    ")]),o("table",{staticClass:"table table-dark table-stripped table-hover"},[t._m(0),o("tbody",t._l(t.todos,(function(e,r){return o("tr",{key:r},[o("td",{staticClass:"todo-uid"},[t._v(t._s(e.uid))]),o("td",[t._v(t._s(e.description))]),o("td",[e.is_completed?o("span",[t._v("Выполнено")]):o("span",[t._v("Не выполнено")])]),o("td",[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-update-modal",modifiers:{"todo-update-modal":!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(o){return t.updateTodo(e)}}},[t._v("\n              Обновить\n            ")]),t._v("\n             \n            "),o("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(o){return t.deleteTodo(e)}}},[t._v("\n              X\n            ")])])])])})),0)])],1),o("b-modal",{ref:"addTodoModal",attrs:{id:"todo-modal",title:"Добавить задачу","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[o("b-form-group",{attrs:{id:"form-description-group",label:"Описание:","label-for":"form-description-input"}},[o("b-form-input",{attrs:{id:"form-description-input",type:"text",required:"",placeholder:"Завести задачу"},model:{value:t.addTodoForm.description,callback:function(e){t.$set(t.addTodoForm,"description",e)},expression:"addTodoForm.description"}})],1),o("b-form-group",{attrs:{id:"form-complete-group"}},[o("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.addTodoForm.is_completed,callback:function(e){t.$set(t.addTodoForm,"is_completed",e)},expression:"addTodoForm.is_completed"}},[o("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Добавить")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1),o("b-modal",{ref:"updateTodoModal",attrs:{id:"todo-update-modal",title:"Update","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onUpdateSubmit,reset:t.onUpdateReset}},[o("b-form-group",{attrs:{id:"form-update-description-group",label:"Описание:","label-for":"form-update-description-input"}},[o("b-form-input",{attrs:{id:"form-update-description-input",type:"text",required:""},model:{value:t.updateTodoForm.description,callback:function(e){t.$set(t.updateTodoForm,"description",e)},expression:"updateTodoForm.description"}})],1),o("b-form-group",{attrs:{id:"form-update-complete-group"}},[o("b-form-checkbox-group",{attrs:{id:"form-update-checks"},model:{value:t.updateTodoForm.is_completed,callback:function(e){t.$set(t.updateTodoForm,"is_completed",e)},expression:"updateTodoForm.is_completed"}},[o("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),o("b-button-group",[o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Обновить")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1)],1)],1)},F=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",{staticClass:"thead-light"},[o("tr",[o("th",[t._v("Uid")]),o("th",[t._v("Описание")]),o("th",[t._v("Выполнена?")]),o("th")])])}],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-alert",{attrs:{variant:"success",show:""}},[t._v(t._s(t.message))])],1)},w=[],C={name:"Confirmation",props:["message"]},x=C,$=Object(i["a"])(x,k,w,!1,null,"7ce40278",null),O=$.exports,M="http://localhost:5000/api/tasks/",j={name:"Todo",data:function(){return{todos:[],addTodoForm:{description:"",is_completed:[]},updateTodoForm:{uid:0,description:"",is_completed:[]},confirmationMessage:"",showConfirmation:!1}},components:{confirmation:O},methods:{getTodos:function(){var t=this;b.a.get(M).then((function(e){t.todos=e.data.tasks}))},resetForm:function(){console.log("resetForm"),this.addTodoForm.description="",this.addTodoForm.is_completed=[],this.updateTodoForm.description="",this.updateTodoForm.is_completed=[]},onSubmit:function(t){var e=this;console.log("onSubmit"),t.preventDefault(),this.$refs.addTodoModal.hide();var o={description:this.addTodoForm.description,is_completed:this.addTodoForm.is_completed[0]};b.a.post(M,o).then((function(){e.getTodos(),e.message='Задача "'.concat(o.description,'" добавлена'),e.showConfirmation=!0})),this.resetForm()},onUpdateSubmit:function(t){var e=this;t.preventDefault(),this.$refs.updateTodoModal.hide();var o={description:this.updateTodoForm.description,is_completed:this.updateTodoForm.is_completed[0]},r=M+this.updateTodoForm.uid;b.a.put(r,o).then((function(){e.getTodos(),e.confirmationMessage="Задача обновлена",e.showConfirmation=!0}))},onUpdateReset:function(t){t.preventDefault(),this.$refs.updateTodoModal.hide(),this.resetForm()},onReset:function(t){console.log("onReset"),t.preventDefault(),this.$refs.addTodoModal.hide(),this.resetForm()},updateTodo:function(t){this.updateTodoForm=t},deleteTodo:function(t){var e=this,o=M+t.uid;b.a.delete(o).then((function(){e.getTodos(),e.confirmationMessage="Задача удалена из списка",e.showConfirmation=!0}))}},created:function(){this.getTodos()}},S=j,E=(o("39a3"),Object(i["a"])(S,y,F,!1,null,null,null)),P=E.exports;n["default"].use(l["a"]);var U=new l["a"]({mode:"history",base:"/c4/",routes:[{path:"/fetch",name:"fetch",component:T},{path:"/todos",name:"todos",component:P}]});n["default"].use(r["a"]),n["default"].config.productionTip=!1,new n["default"]({router:U,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,o){},b1e7:function(t,e,o){}});
//# sourceMappingURL=app.444ac370.js.map