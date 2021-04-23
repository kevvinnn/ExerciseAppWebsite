(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0dc6":function(t,e,s){"use strict";s("3a65")},"1d75":function(t,e,s){"use strict";s("6514")},"3a65":function(t,e,s){},"49ef":function(t,e,s){"use strict";s("66f0")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("289d"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("MyNav"),s("div",{staticClass:"container"},[s("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar container",attrs:{role:"navigation","aria-label":"main navigation"}},[s("nav",{staticClass:"navbar container",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),s("a",{staticClass:"navbar-burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){e.preventDefault(),t.isActive=!t.isActive}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/myfeed"}},[t._v("MyFeed")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/share"}},[t._v("Share")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/workouts"}},[t._v("Workouts")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/myprofile"}},[t._v("MyProfile")])],1),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("login-badge")],1)])])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-item",attrs:{href:"/"}},[s("i",{staticClass:"fas fa-dumbbell"})])}],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.Session.user?s("div",[t._v(" "+t._s(t.Session.user.handle)+" "),s("a",{on:{click:t.logout}},[t._v(" logout ")])]):s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-light"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/signup"}},[t._v("Sign Up")])],1),s("a",{staticClass:"button is-light",on:{click:t.login}},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/login"}},[t._v("Login")])],1)])])},u=[],p=s("1da1"),d=(s("96cf"),s("aced")),m=s("8c4f"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("figure",[s("img",{staticClass:"center",attrs:{src:"https://icon-library.com/images/exercise-icon/exercise-icon-1.jpg"}})])])}],h={name:"Home",components:{}},C=h,g=(s("cccb"),s("2877")),w=Object(g["a"])(C,v,f,!1,null,null,null),_=w.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"make"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addWorkout(e)}}},[s("h1",[t._v("Create Workout")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newWorkout.type,expression:"newWorkout.type"}],staticClass:"input",attrs:{type:"text",placeholder:"Type"},domProps:{value:t.newWorkout.type},on:{input:function(e){e.target.composing||t.$set(t.newWorkout,"type",e.target.value)}}})]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newWorkout.routine,expression:"newWorkout.routine"}],staticClass:"input",attrs:{type:"text",placeholder:"Routine"},domProps:{value:t.newWorkout.routine},on:{input:function(e){e.target.composing||t.$set(t.newWorkout,"routine",e.target.value)}}})]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newWorkout.frequency,expression:"newWorkout.frequency"}],staticClass:"input",attrs:{type:"text",placeholder:"Frequency"},domProps:{value:t.newWorkout.frequency},on:{input:function(e){e.target.composing||t.$set(t.newWorkout,"frequency",e.target.value)}}})]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newWorkout.image,expression:"newWorkout.image"}],staticClass:"input",attrs:{type:"text",placeholder:"Image"},domProps:{value:t.newWorkout.image},on:{input:function(e){e.target.composing||t.$set(t.newWorkout,"image",e.target.value)}}})]),t._m(0)])])]),s("div",{staticClass:"column"},t._l(t.workouts,(function(e,a){return s("div",{key:a,staticClass:"content"},[s("workout-layout",{attrs:{workout:t.workout}})],1)})),0)])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Make Workout ")])])])}],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:t.workout.image}})])]),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p"),s("p",{attrs:{type:t.workout.type}}),s("p",{attrs:{frequency:t.workout.frequency}}),s("p",{attrs:{routine:t.workout.routine}})])])])])},P=[],x={props:{workout:Object}},$=x,j=Object(g["a"])($,k,P,!1,null,null,null),O=j.exports,E={components:{WorkoutLayout:O},data:function(){return{newWorkout:{workout:{}},workouts:[]}},methods:{addWorkout:function(){this.workouts.unshift(this.newWorkout),this.newWorkout={workout:{}}}}},W=E,S=Object(g["a"])(W,b,y,!1,null,null,null),N=S.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns "},[s("div",{staticClass:"column is-one-quarter"},[s("friend-finder")],1),s("div",{staticClass:"column"},[s("div",{staticClass:"share"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[s("h1",[t._v("Share Progress")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.user.name,expression:"newPost.user.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.newPost.user.name},on:{input:function(e){e.target.composing||t.$set(t.newPost.user,"name",e.target.value)}}})]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.user.username,expression:"newPost.user.username"}],staticClass:"input",attrs:{type:"text",placeholder:"@Username"},domProps:{value:t.newPost.user.username},on:{input:function(e){e.target.composing||t.$set(t.newPost.user,"username",e.target.value)}}})]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.src,expression:"newPost.src"}],staticClass:"input",attrs:{type:"text",placeholder:"Image Source"},domProps:{value:t.newPost.src},on:{input:function(e){e.target.composing||t.$set(t.newPost,"src",e.target.value)}}})]),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPost.caption,expression:"newPost.caption"}],staticClass:"textarea",attrs:{placeholder:"Caption"},domProps:{value:t.newPost.caption},on:{input:function(e){e.target.composing||t.$set(t.newPost,"caption",e.target.value)}}})]),t._m(0)]),t._l(t.posts,(function(t,e){return s("div",{key:e,staticClass:"content-item"},[s("post-layout",{attrs:{post:t}})],1)})),t._l(t.posts2,(function(e,a){return s("div",{key:"A"+a,staticClass:"content-item"},[s("post-layout",{attrs:{post:e},on:{delete:function(e){return t.deletePost(a)}}})],1)}))],2)]),s("div",{attrs:{column:"columns is-one-quarter"}},[s("div",{staticClass:"content-item"},[s("post-layout",{attrs:{post:t.newPost}})],1)])])},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Post ")])])])}],q=(s("a434"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"panel is-link"},[s("p",{staticClass:"panel-heading"},[t._v(" FriendFinder ")]),s("p",{staticClass:"panel-tabs"},[s("a",{staticClass:"is-active"},[t._v("Friends Activity")]),s("a",[t._v("My Friends")]),s("a",[t._v("Suggested Friends")]),s("a",[t._v("Search Friends")])]),s("div",{staticClass:"panel-block"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input is-link",attrs:{type:"text",placeholder:"Search"}}),s("span",{staticClass:"icon is-left"},[s("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])])]),s("a",{staticClass:"panel-block is-active"}),s("a",{staticClass:"panel-block"}),s("a",{staticClass:"panel-block"}),s("a",{staticClass:"panel-block"})])}],M={},A=M,U=Object(g["a"])(A,q,L,!1,null,null,null),D=U.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("button",{staticClass:"delete is-pulled-right",on:{click:function(e){return e.preventDefault(),t.$emit("delete")}}}),s("div",{staticClass:"content"},[s("div",{staticClass:"more-content"},[s("figure",{staticClass:"image is-125x125"},[s("img",{attrs:{src:t.post.src}})])])])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.post.user.alt}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.post.user.name))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.post.user.username))])])]),s("div",{staticClass:"content"},[t._v(" "+t._s(t.post.caption)+" "),s("br"),s("time",{attrs:{datetime:t.post.time}},[t._v(t._s(t.post.time))])])])])},H=[],I={props:{post:Object}},J=I,G=Object(g["a"])(J,T,H,!1,null,null,null),z=G.exports,B=s("5530"),K=(s("d3b7"),"/");function Q(t,e,s){var a,n={authorization:"bearer ".concat(Ut.token)};return a=e?fetch(K+t,{method:null!==s&&void 0!==s?s:"POST",cache:"no-cache",headers:Object(B["a"])(Object(B["a"])({},n),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)}):fetch(K+t,{headers:n}),a.then((function(t){return t.ok?t.json():t.json().then((function(t){throw t}))})).catch((function(t){console.error(t),It(t.msg||t)}))}function V(){return Q("posts")}function X(){return Q("posts/myfeed")}function Y(t){return Q("posts",t)}function Z(t){return Q("posts/"+t,{},"DELETE")}var tt={data:function(){return{newPost:{user:{}},posts:[]}},mounted:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{FriendFinder:D,PostLayout:z},methods:{addPost:function(){this.posts.unshift(this.newPost),this.newPost={user:{}}},deletePost:function(t){this.posts.splice(t,1)}}},et=tt,st=(s("e5c6"),Object(g["a"])(et,F,R,!1,null,null,null)),at=st.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("form",{staticClass:"box"},[s("div",{staticClass:"title"},[t._v(" Account Info ")]),s("div",{staticClass:"user"},[s("h1",[t._v(" First Name: "+t._s(t.firstname))])]),s("div",{staticClass:"user"},[s("h1",[t._v("Last Name: "+t._s(t.lastname))])]),s("div",{staticClass:"user"},[s("h1",[t._v("Username: "+t._s(t.handle))])]),s("div",{staticClass:"user"},[s("h1",[t._v("Following: "+t._s(t.following))])]),s("div",{staticClass:"user"},[s("h1",[t._v("Gender: "+t._s(t.gender))])])])]),s("div",{staticClass:"column "},[s("form",{staticClass:"box"},[t._v(" Account Settings "),s("b-field",[s("b-switch",{attrs:{value:!1}},[t._v(" Private Account ")])],1),t._v(" Language "),t._m(0)],1)])])},rt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select is-normal"},[s("select",[s("option",[t._v("English")]),s("option",[t._v("Spanish")]),s("option",[t._v("French")]),s("option",[t._v("Chinese")]),s("option",[t._v("German")])])])}],it={data:function(){return{firstname:Ut.user.firstname,lastname:Ut.user.lastname,handle:Ut.user.handle,following:Ut.user.following.handle,gender:Ut.user.gender}}},ot=it,lt=(s("1d75"),Object(g["a"])(ot,nt,rt,!1,null,null,null)),ct=lt.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("form",{staticClass:"box"},[s("div",{staticClass:"signup"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Firstname"}})])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Lastname"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"handle",placeholder:"Handle"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password",value:""}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])])]),s("br"),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Sign Up ")])])])])])])])}],dt={},mt=dt,vt=(s("0dc6"),Object(g["a"])(mt,ut,pt,!1,null,null,null)),ft=vt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("div",{staticClass:"login"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.handle,expression:"handle"}],staticClass:"input",attrs:{type:"text",placeholder:"Handle"},domProps:{value:t.handle},on:{input:function(e){e.target.composing||(t.handle=e.target.value)}}}),t._m(0)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(1)])]),t._m(2)])])])])},Ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Login ")])])])}],gt={data:function(){return{handle:null,password:null}},methods:{login:function(){Dt(this.handle,this.password)}}},wt=gt,_t=Object(g["a"])(wt,ht,Ct,!1,null,null,null),bt=_t.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns "},[s("div",{staticClass:"column is-one-quarter"},[s("h1",{staticClass:"title is-1"},[t._v("Users")]),s("table",{staticClass:"table is-bordered is-narrow is-hoverable is-fullwidth"},[t._m(0),t._l(t.users,(function(e){return s("tr",{key:e.handle},[s("td",[t._v(t._s(e.firstname))]),s("td",[t._v(t._s(e.lastname))]),s("td",[t._v(t._s(e.handle))])])}))],2)])])},kt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("First Name")]),s("th",[t._v("Last Name")]),s("th",[t._v("Username")])])}];function Pt(){return Q("users")}var xt=a["a"].extend({data:function(){return{newPost:{user:{}},posts:[]}},mounted:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Pt();case 2:t.users=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{},methods:{}}),$t=xt,jt=(s("49ef"),Object(g["a"])($t,yt,kt,!1,null,null,null)),Ot=jt.exports,Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns "},[s("div",{staticClass:"column is-one-quarter"},[s("friend-finder")],1),s("div",{staticClass:"column"},[s("div",{staticClass:"share"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[s("h1",[t._v("Share Progress")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.user.name,expression:"newPost.user.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.newPost.user.name},on:{input:function(e){e.target.composing||t.$set(t.newPost.user,"name",e.target.value)}}})]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.user.username,expression:"newPost.user.username"}],staticClass:"input",attrs:{type:"text",placeholder:"@Username"},domProps:{value:t.newPost.user.username},on:{input:function(e){e.target.composing||t.$set(t.newPost.user,"username",e.target.value)}}})]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.src,expression:"newPost.src"}],staticClass:"input",attrs:{type:"text",placeholder:"Image Source"},domProps:{value:t.newPost.src},on:{input:function(e){e.target.composing||t.$set(t.newPost,"src",e.target.value)}}})]),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPost.caption,expression:"newPost.caption"}],staticClass:"textarea",attrs:{placeholder:"Caption"},domProps:{value:t.newPost.caption},on:{input:function(e){e.target.composing||t.$set(t.newPost,"caption",e.target.value)}}})]),t._m(0)]),t._l(t.posts,(function(t,e){return s("div",{key:e,staticClass:"content-item"},[s("post-layout",{attrs:{post:t}})],1)})),t._l(t.posts2,(function(e,a){return s("div",{key:"A"+a,staticClass:"content-item"},[s("post-layout",{attrs:{post:e},on:{delete:function(e){return t.deletePost(a)}}})],1)}))],2)]),s("div",{attrs:{column:"columns is-one-quarter"}},[s("div",{staticClass:"content-item"},[s("post-layout",{attrs:{post:t.newPost}})],1)])])},Wt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Post ")])])])}],St={data:function(){return{newPost:{user:Ut.user},posts:[]}},mounted:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{FriendFinder:D,PostLayout:z},methods:{addPost:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Y(t.newPost);case 2:s=e.sent,t.posts.unshift(s),t.newPost={user:Ut.user};case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Z(t);case 2:e.posts.splice(t,1);case 3:case"end":return s.stop()}}),s)})))()}}},Nt=St,Ft=(s("d0a1"),Object(g["a"])(Nt,Et,Wt,!1,null,null,null)),Rt=Ft.exports;a["a"].use(m["a"]);var qt=[{path:"/",name:"Home",component:_},{path:"/share",name:"Share",component:at},{path:"/workouts",name:"Workouts",component:N},{path:"/myprofile",name:"MyProfile",component:ct},{path:"/signup",name:"SignUp",component:ft},{path:"/login",name:"Login",component:bt},{path:"/users",name:"Users",component:Ot},{path:"/myfeed",name:"MyFeed",component:Rt}],Lt=new m["a"]({mode:"history",base:"/",routes:qt});Lt.beforeEach((function(t,e,s){console.log({from:e,to:t}),"/share"!=t.path||Ut.user?s():(Ut.nextRoute=t,s("/login"))}));var Mt=Lt,At={user:null,token:null,nextRoute:null,message:[]},Ut=At;function Dt(t,e){return Tt.apply(this,arguments)}function Tt(){return Tt=Object(p["a"])(regeneratorRuntime.mark((function t(e,s){var a,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Q("users/login",{handle:e,password:s});case 2:n=t.sent,r=n.user,i=n.token,At.user=r,At.token=i,console.log(At.user),d["a"].open({type:"is-success",message:"Welcome ".concat(At.user.firstname)}),Mt.push(null!==(a=At.nextRoute)&&void 0!==a?a:"/share");case 10:case"end":return t.stop()}}),t)}))),Tt.apply(this,arguments)}function Ht(){At.user=null}function It(t){d["a"].open({message:t,queue:!1,type:"is-black"})}var Jt={data:function(){return{Session:Ut}},methods:{login:function(){this.$router.push("Login")},logout:function(){Ht()}}},Gt=Jt,zt=Object(g["a"])(Gt,c,u,!1,null,null,null),Bt=zt.exports,Kt={data:function(){return{isActive:!1}},components:{LoginBadge:Bt}},Qt=Kt,Vt=Object(g["a"])(Qt,o,l,!1,null,null,null),Xt=Vt.exports,Yt={components:{MyNav:Xt}},Zt=Yt,te=(s("5c0b"),Object(g["a"])(Zt,r,i,!1,null,null,null)),ee=te.exports;s("6597"),s("5abe"),s("15f5");a["a"].use(n["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Mt,render:function(t){return t(ee)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"5ced":function(t,e,s){},6514:function(t,e,s){},"66f0":function(t,e,s){},"9c0c":function(t,e,s){},c9ae:function(t,e,s){},cccb:function(t,e,s){"use strict";s("5ced")},d0a1:function(t,e,s){"use strict";s("d340")},d340:function(t,e,s){},e5c6:function(t,e,s){"use strict";s("c9ae")}});
//# sourceMappingURL=app.8900f22d.js.map