(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0dc6":function(t,e,s){"use strict";s("3a65")},"1d75":function(t,e,s){"use strict";s("6514")},"3a65":function(t,e,s){},"49ef":function(t,e,s){"use strict";s("66f0")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=s("289d"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("MyNav"),s("div",{staticClass:"container"},[s("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar container",attrs:{role:"navigation","aria-label":"main navigation"}},[s("nav",{staticClass:"navbar container",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),s("a",{staticClass:"navbar-burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){e.preventDefault(),t.isActive=!t.isActive}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/myfeed"}},[t._v("MyFeed")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/share"}},[t._v("Share")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/myprofile"}},[t._v("MyProfile")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/autocomplete"}},[t._v("Autocomplete")]),t.Session.user&&!0===t.Session.user.isAdmin?s("div",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/users"}},[t._v("Users")])],1):t._e()],1),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("login-badge")],1)])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-item",attrs:{href:"/"}},[s("i",{staticClass:"fas fa-dumbbell"})])}],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.Session.user?s("div",[t._v(" "+t._s(t.Session.user.handle)+" "),s("a",{on:{click:t.logout}},[t._v(" logout ")])]):s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-light"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/signup"}},[t._v("Sign Up")])],1),s("a",{staticClass:"button is-light",on:{click:t.login}},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/login"}},[t._v("Login")])],1)])])},u=[],d=s("1da1"),m=(s("96cf"),s("aced")),p=s("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("figure",[s("img",{staticClass:"center",attrs:{src:"https://icon-library.com/images/exercise-icon/exercise-icon-1.jpg"}})])])}],h={name:"Home",components:{}},g=h,_=(s("cccb"),s("2877")),b=Object(_["a"])(g,f,v,!1,null,null,null),C=b.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns "},[s("div",{staticClass:"column is-one-quarter"},[s("carousel-2")],1),s("div",{staticClass:"column"},[s("div",{staticClass:"share"},[s("form",{staticClass:"box"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[s("h1",{staticClass:"title"},[t._v("Share Progress")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.src,expression:"newPost.src"}],staticClass:"input",attrs:{type:"text",placeholder:"Image Source"},domProps:{value:t.newPost.src},on:{input:function(e){e.target.composing||t.$set(t.newPost,"src",e.target.value)}}})]),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPost.caption,expression:"newPost.caption"}],staticClass:"textarea",attrs:{placeholder:"Caption"},domProps:{value:t.newPost.caption},on:{input:function(e){e.target.composing||t.$set(t.newPost,"caption",e.target.value)}}})]),t._m(0)])]),t._l(t.posts,(function(t,e){return s("div",{key:e,staticClass:"content-item"},[s("post-layout",{attrs:{post:t}})],1)})),t._l(t.posts2,(function(e,n){return s("div",{key:"A"+n,staticClass:"content-item"},[s("post-layout",{attrs:{post:e},on:{delete:function(e){return t.deletePost(n)}}})],1)}))],2)]),s("div",{attrs:{column:"columns is-one-quarter"}},[s("div",{staticClass:"content-item"},[s("post-layout",{attrs:{post:t.newPost}})],1)])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Post ")])])])}],x=(s("a434"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-carousel",{attrs:{autoplay:!1,"with-carousel-list":"",indicator:!1,overlay:t.gallery},on:{click:function(e){return t.switchGallery(!0)}},scopedSlots:t._u([{key:"list",fn:function(e){return[s("b-carousel-list",t._b({attrs:{data:t.items,"as-indicator":""},on:{switch:function(t){return e.switch(t,!1)}},model:{value:e.active,callback:function(s){t.$set(e,"active",s)},expression:"props.active"}},"b-carousel-list",t.al,!1))]}},{key:"overlay",fn:function(){return[s("div",{staticClass:"has-text-centered has-text-white"},[t._v(" Hello i'am overlay! ")])]},proxy:!0}])},[t._l(t.items,(function(t,e){return s("b-carousel-item",{key:e},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.image}})])])})),t.gallery?s("span",{staticClass:"modal-close is-large",on:{click:function(e){return t.switchGallery(!1)}}}):t._e()],2)}),k=[],P={data:function(){return{gallery:!1,al:{hasGrayscale:!0,itemsToShow:2,breakpoints:{768:{hasGrayscale:!1,itemsToShow:4},960:{hasGrayscale:!0,itemsToShow:6}}},items:[{title:"Slide 1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkP7PnYoRRpcZU_RecQmD3HXzGCIXMbqPzg&usqp=CAU"},{title:"Slide 2",image:"https://www.alliancehhcare.com/wp-content/uploads/2017/10/senior-man-outside-exercising.jpg"},{title:"Slide 3",image:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/running_at_sunset-1296x728-header.jpg?w=1155&h=1528"},{title:"Slide 4",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ydk1RZDu8kDKoeZKRr2Gnr4SDoeNBwUs5g&usqp=CAU"},{title:"Slide 5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOUTZJ6_-cmhlVT6tJfbcOystNu6_IG5zbg&usqp=CAU"}]}},methods:{switchGallery:function(t){this.gallery=t,t?document.documentElement.classList.add("is-clipped"):document.documentElement.classList.remove("is-clipped")}}},j=P,S=Object(_["a"])(j,x,k,!1,null,null,null),E=S.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("button",{staticClass:"delete is-pulled-right",on:{click:function(e){return e.preventDefault(),t.$emit("delete")}}}),s("div",{staticClass:"content"},[s("div",{staticClass:"more-content"},[s("figure",{staticClass:"image is-125x125"},[s("img",{attrs:{src:t.post.src}})])])])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.post.alt}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.post.user.firstname)+" "+t._s(t.post.user.lastname))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.post.user.handle))])])]),s("div",{staticClass:"content"},[t._v(" "+t._s(t.post.caption)+" "),s("br"),s("time",{attrs:{datetime:t.post.time}},[t._v(t._s(t.post.time))])])])])},$=[],R={props:{post:Object}},N=R,A=Object(_["a"])(N,O,$,!1,null,null,null),G=A.exports,F=s("5530"),T=(s("d3b7"),"/");function L(t,e,s){var n,a={authorization:"bearer ".concat(Bt.token)};return n=e?fetch(T+t,{method:null!==s&&void 0!==s?s:"POST",cache:"no-cache",headers:Object(F["a"])(Object(F["a"])({},a),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)}):fetch(T+t,{headers:a}),n.then((function(t){return t.ok?t.json():t.json().then((function(t){throw t}))})).catch((function(t){console.error(t),Zt(t.msg||t)}))}function U(){return L("posts")}function B(){return L("posts/myfeed")}function D(t){return L("posts",t)}function q(t){return L("posts/"+t,{},"DELETE")}var M={data:function(){return{newPost:{user:Bt.user},posts:[],posts2:[]}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{PostLayout:G,Carousel2:E},methods:{addPost:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D(t.newPost);case 2:s=e.sent,t.posts.unshift(s),t.newPost={user:Bt.user};case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,q(t);case 2:e.posts.splice(t,1);case 3:case"end":return s.stop()}}),s)})))()}}},I=M,H=(s("e5c6"),Object(_["a"])(I,w,y,!1,null,null,null)),z=H.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("form",{staticClass:"box"},[s("div",{staticClass:"title"},[t._v(" Account Info ")]),s("div",{staticClass:"user"},[s("h1",[t._v(" First Name: "+t._s(t.firstname))])]),s("div",{staticClass:"user"},[s("h1",[t._v("Last Name: "+t._s(t.lastname))])]),s("div",{staticClass:"user"},[s("h1",[t._v("Handle: "+t._s(t.handle))])]),t.following?s("div",[s("div",{staticClass:"user"},[s("h1",[t._v("Following: "+t._s(t.following))])])]):s("div",[t._m(0)]),s("div",{staticClass:"user"},[s("h1",[t._v("Gender: "+t._s(t.gender))])])])]),s("div",{staticClass:"column "},[s("form",{staticClass:"box"},[t._v(" Account Settings "),s("b-field",[s("b-switch",{attrs:{value:!1}},[t._v(" Private Account ")])],1),t._v(" Language "),t._m(1)],1)])])},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("h1",[t._v("Following: Nobody Yet!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select is-normal"},[s("select",[s("option",[t._v("English")]),s("option",[t._v("Spanish")]),s("option",[t._v("French")]),s("option",[t._v("Chinese")]),s("option",[t._v("German")])])])}],K={data:function(){return{Session:Bt,firstname:Bt.user.firstname,lastname:Bt.user.lastname,handle:Bt.user.handle,following:Bt.user.following.handle,gender:Bt.user.gender}}},V=K,W=(s("1d75"),Object(_["a"])(V,J,Z,!1,null,null,null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("form",{staticClass:"box",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("div",{staticClass:"signup"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],staticClass:"input",attrs:{type:"text",placeholder:"Firstname"},domProps:{value:t.firstname},on:{input:function(e){e.target.composing||(t.firstname=e.target.value)}}}),t._m(0)])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],staticClass:"input",attrs:{type:"text",placeholder:"Lastname"},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}}),t._m(1)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.handle,expression:"handle"}],staticClass:"input",attrs:{type:"handle",placeholder:"Handle"},domProps:{value:t.handle},on:{input:function(e){e.target.composing||(t.handle=e.target.value)}}}),t._m(2)])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(3)])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticClass:"input",attrs:{type:"text",placeholder:"Gender"},domProps:{value:t.gender},on:{input:function(e){e.target.composing||(t.gender=e.target.value)}}}),t._m(4)])]),s("br"),t._m(5)])])])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Sign Up ")])])])}],tt={data:function(){return{firstname:null,lastname:null,handle:null,password:null,gender:null}},methods:{register:function(){Dt(this.firstname,this.lastname,this.handle,this.password,this.gender)}}},et=tt,st=(s("0dc6"),Object(_["a"])(et,Y,Q,!1,null,null,null)),nt=st.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("div",{staticClass:"login"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.handle,expression:"handle"}],staticClass:"input",attrs:{type:"text",placeholder:"Handle"},domProps:{value:t.handle},on:{input:function(e){e.target.composing||(t.handle=e.target.value)}}}),t._m(0)])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(1)])]),t._m(2),s("div",[s("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.loginFB(e)}}},[t._v(" Login with Facebook ")])])])])])])},it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Login ")])])])}],rt={data:function(){return{handle:null,password:null}},methods:{login:function(){Mt(this.handle,this.password)},loginFB:function(){FB.login((function(t){console.log({response:t}),"connected"===t.status&&Ht(t.authResponse.accessToken)}),{scope:"public_profile,email"})}}},ot=rt,ct=Object(_["a"])(ot,at,it,!1,null,null,null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns "},[s("div",{staticClass:"column"},[s("h1",{staticClass:"title is-1"},[t._v("Users")]),s("table",{staticClass:"table is-bordered is-narrow is-hoverable is-fullwidth"},[t._m(0),t._l(t.users,(function(e){return s("tr",{key:e.handle},[s("td",[t._v(t._s(e.firstname))]),s("td",[t._v(t._s(e.lastname))]),s("td",[t._v(t._s(e.handle))])])}))],2)])])},dt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("First Name")]),s("th",[t._v("Last Name")]),s("th",[t._v("Username")])])}];function mt(){return L("users")}var pt=n["a"].extend({data:function(){return{users:[]}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,mt();case 2:t.users=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),ft=pt,vt=(s("49ef"),Object(_["a"])(ft,ut,dt,!1,null,null,null)),ht=vt.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns "},[s("div",{staticClass:"column is-one-quarter"},[s("carousel")],1),s("div",{staticClass:"column"},[s("div",{staticClass:"share"},[s("form",{staticClass:"box"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[s("h1",{staticClass:"title"},[t._v("Share Progress")]),s("div",{staticClass:"control"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.src,expression:"newPost.src"}],staticClass:"input",attrs:{type:"text",placeholder:"Image Source"},domProps:{value:t.newPost.src},on:{input:function(e){e.target.composing||t.$set(t.newPost,"src",e.target.value)}}})])]),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPost.caption,expression:"newPost.caption"}],staticClass:"textarea",attrs:{placeholder:"Caption"},domProps:{value:t.newPost.caption},on:{input:function(e){e.target.composing||t.$set(t.newPost,"caption",e.target.value)}}})]),t._m(0)])]),t._l(t.posts,(function(t,e){return s("div",{key:e,staticClass:"content-item"},[s("post-layout",{attrs:{post:t}})],1)})),t._l(t.posts2,(function(e,n){return s("div",{key:"A"+n,staticClass:"content-item"},[s("post-layout",{attrs:{post:e},on:{delete:function(e){return t.deletePost(n)}}})],1)}))],2)]),s("div",{attrs:{column:"columns is-one-quarter"}},[s("div",{staticClass:"content-item"},[s("post-layout",{attrs:{post:t.newPost}})],1)])])},_t=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v(" Post ")])])])}],bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-carousel",{attrs:{autoplay:!1,"with-carousel-list":"",indicator:!1,overlay:t.gallery},on:{click:function(e){return t.switchGallery(!0)}},scopedSlots:t._u([{key:"list",fn:function(e){return[s("b-carousel-list",t._b({attrs:{data:t.items,"as-indicator":""},on:{switch:function(t){return e.switch(t,!1)}},model:{value:e.active,callback:function(s){t.$set(e,"active",s)},expression:"props.active"}},"b-carousel-list",t.al,!1))]}},{key:"overlay",fn:function(){return[s("div",{staticClass:"has-text-centered has-text-white"},[t._v(" Hello i'am overlay! ")])]},proxy:!0}])},[t._l(t.items,(function(t,e){return s("b-carousel-item",{key:e},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:t.image}})])])})),t.gallery?s("span",{staticClass:"modal-close is-large",on:{click:function(e){return t.switchGallery(!1)}}}):t._e()],2)},Ct=[],wt={data:function(){return{gallery:!1,al:{hasGrayscale:!0,itemsToShow:2,breakpoints:{768:{hasGrayscale:!1,itemsToShow:4},960:{hasGrayscale:!0,itemsToShow:6}}},items:[{title:"Slide 1",image:"https://www.gannett-cdn.com/presto/2018/09/05/USAT/c95a0f2e-2c7a-48ca-bd5d-6de52229674a-GettyImages-862317986.jpg"},{title:"Slide 2",image:"https://fitness-nation.net/wp-content/uploads/2020/07/The-Benefits-of-Exercising-Outdoors-Fitness-Nation-scaled.jpg"},{title:"Slide 3",image:"https://static-10.sinclairstoryline.com/resources/media/e87328a1-cca8-408f-b0bf-a56df96b2ea2-large16x9_GettyImages912603144.jpg?1546036005283"},{title:"Slide 4",image:"https://static.toiimg.com/thumb/msid-75427509,imgsize-457596,width-800,height-600,resizemode-75/75427509.jpg"},{title:"Slide 5",image:"https://static.scientificamerican.com/sciam/cache/file/FF3E19C0-9BE4-4E31-A8B161FC6F5E3088_source.jpg"}]}},methods:{switchGallery:function(t){this.gallery=t,t?document.documentElement.classList.add("is-clipped"):document.documentElement.classList.remove("is-clipped")}}},yt=wt,xt=Object(_["a"])(yt,bt,Ct,!1,null,null,null),kt=xt.exports,Pt={data:function(){return{newPost:{user:Bt.user},posts:[],posts2:[]}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{PostLayout:G,Carousel:kt},methods:{addPost:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D(t.newPost);case 2:s=e.sent,t.posts.unshift(s),t.newPost={user:Bt.user};case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,q(t);case 2:e.posts.splice(t,1);case 3:case"end":return s.stop()}}),s)})))()}}},jt=Pt,St=(s("d0a1"),Object(_["a"])(jt,gt,_t,!1,null,null,null)),Et=St.exports,Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("p",{staticClass:"content"},[s("b",[t._v("Selected:")]),t._v(" "+t._s(t.selected))]),s("b-field",{attrs:{label:"Users"}},[s("b-autocomplete",{attrs:{rounded:"",data:t.filteredDataArray,placeholder:"Users",icon:"magnify",clearable:""},on:{select:function(e){return t.selected=e}},scopedSlots:t._u([{key:"empty",fn:function(){return[t._v("No results found")]},proxy:!0}]),model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1)],1)},$t=[],Rt=(s("4de4"),s("25f0"),n["a"].extend({data:function(){return{users:[],firstname:"",selected:null}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,mt();case 2:t.users=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{filteredDataArray:function(){var t=this;return this.users.filter((function(e){return e.toString().toLowerCase().indexOf(t.firstname.toLowerCase())>=0}))}}})),Nt=Rt,At=Object(_["a"])(Nt,Ot,$t,!1,null,null,null),Gt=At.exports;n["a"].use(p["a"]);var Ft=[{path:"/",name:"Home",component:C},{path:"/share",name:"Share",component:z},{path:"/myprofile",name:"MyProfile",component:X},{path:"/signup",name:"SignUp",component:nt},{path:"/login",name:"Login",component:lt},{path:"/users",name:"Users",component:ht},{path:"/myfeed",name:"MyFeed",component:Et},{path:"/autocomplete",name:"Autocomplete",component:Gt}],Tt=new p["a"]({mode:"history",base:"/",routes:Ft});Tt.beforeEach((function(t,e,s){console.log({from:e,to:t}),("/share"!=t.path||Bt.user)&&("/myfeed"!=t.path||Bt.user)&&("/myprofile"!=t.path||Bt.user)?s():(Bt.nextRoute=t,s("/login"))}));var Lt=Tt,Ut={user:null,token:null,nextRoute:null,message:[]},Bt=Ut;function Dt(t,e,s,n,a){return qt.apply(this,arguments)}function qt(){return qt=Object(d["a"])(regeneratorRuntime.mark((function t(e,s,n,a,i){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L("users/register",{firstname:e,lastname:s,handle:n,password:a,gender:i});case 2:r=t.sent,o=r.user,Ut.user=o,Mt(n,a);case 6:case"end":return t.stop()}}),t)}))),qt.apply(this,arguments)}function Mt(t,e){return It.apply(this,arguments)}function It(){return It=Object(d["a"])(regeneratorRuntime.mark((function t(e,s){var n,a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L("users/login",{handle:e,password:s});case 2:a=t.sent,i=a.user,r=a.token,Ut.user=i,Ut.token=r,console.log(Ut.user),m["a"].open({type:"is-success",message:"Welcome ".concat(Ut.user.firstname)}),Lt.push(null!==(n=Ut.nextRoute)&&void 0!==n?n:"/share");case 10:case"end":return t.stop()}}),t)}))),It.apply(this,arguments)}function Ht(t){return zt.apply(this,arguments)}function zt(){return zt=Object(d["a"])(regeneratorRuntime.mark((function t(e){var s,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L("users/loginFB",{access_token:e});case 2:n=t.sent,a=n.user,i=n.token,Ut.user=a,Ut.token=i,console.log(Ut.user),m["a"].open({type:"is-success",message:"Welcome ".concat(Ut.user.firstName)}),Lt.push(null!==(s=Ut.nextRoute)&&void 0!==s?s:"/share");case 10:case"end":return t.stop()}}),t)}))),zt.apply(this,arguments)}function Jt(){Ut.user=null}function Zt(t){m["a"].open({message:t,queue:!1,type:"is-black"})}var Kt={data:function(){return{Session:Bt}},methods:{login:function(){this.$router.push("Login")},logout:function(){Jt()}}},Vt=Kt,Wt=Object(_["a"])(Vt,l,u,!1,null,null,null),Xt=Wt.exports,Yt={data:function(){return{isActive:!1,Session:Bt,user:Bt.user,isAdmin:!1}},components:{LoginBadge:Xt}},Qt=Yt,te=Object(_["a"])(Qt,o,c,!1,null,null,null),ee=te.exports,se={components:{MyNav:ee}};window.fbAsyncInit=function(){FB.init({appId:"206553604607100",cookie:!0,xfbml:!0,version:"v10.0"}),FB.AppEvents.logPageView()},function(t,e,s){var n,a=t.getElementsByTagName(e)[0];t.getElementById(s)||(n=t.createElement(e),n.id=s,n.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(n,a))}(document,"script","facebook-jssdk");var ne=se,ae=(s("5c0b"),Object(_["a"])(ne,i,r,!1,null,null,null)),ie=ae.exports;s("6597"),s("5abe"),s("15f5");n["a"].use(a["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Lt,render:function(t){return t(ie)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"5ced":function(t,e,s){},6514:function(t,e,s){},"66f0":function(t,e,s){},"9c0c":function(t,e,s){},c9ae:function(t,e,s){},cccb:function(t,e,s){"use strict";s("5ced")},d0a1:function(t,e,s){"use strict";s("d340")},d340:function(t,e,s){},e5c6:function(t,e,s){"use strict";s("c9ae")}});
//# sourceMappingURL=app.f2df7cc0.js.map