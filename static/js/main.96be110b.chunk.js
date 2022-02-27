/*! For license information please see main.96be110b.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,n){},110:function(e,t,n){e.exports={usersAvatars:"user_usersAvatars__3ElzM"}},121:function(e,t,n){},122:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(49),i=n.n(a),c=(n(121),n(3)),o=n(4),u=n(9),l=n(10),j=(n(122),n(25)),d=n.n(j),b=n(15),p=n(0),h=n(8),O=Object(h.b)((function(e){return{friends:e.sidebarContent.friends}}))((function(e){var t=Object(p.jsx)("img",{width:"25px",src:"https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small/man-avatar-character-isolated-icon-free-vector.jpg",alt:"boy"}),n=e.friends.map((function(e){return Object(p.jsxs)("div",{children:[t,e.name]},e.id)}));return Object(p.jsx)("div",{className:"friends_body",children:n})})),f=function(){return Object(p.jsx)("div",{className:d.a.nav,children:Object(p.jsxs)("div",{className:d.a.navContainer,children:[Object(p.jsxs)("div",{className:d.a.allItems,children:[Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/profile",activeClassName:d.a.active,children:"Profile"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/dialogs",activeClassName:d.a.active,children:"Messages"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/users",activeClassName:d.a.active,children:"Users"})})]}),Object(p.jsxs)("div",{className:d.a.friendsNav,children:[Object(p.jsx)("div",{children:"Friends"}),Object(p.jsx)(O,{})]})]})})},m=n(12),g=n(2),x=n(20),v=n(106),y=n.n(v),E=n.p+"static/media/200w.4e03e26f.webp",S=function(e){return Object(p.jsx)("div",{className:"loadingSpinner",children:Object(p.jsx)("img",{src:E})})},C=function(e){var t=Object(r.useState)(e.status),n=Object(x.a)(t,2),s=n[0],a=n[1],i=Object(r.useState)(!1),c=Object(x.a)(i,2),o=c[0],u=c[1];Object(r.useEffect)((function(){a(e.status)}),[e.status]);return Object(p.jsx)(p.Fragment,{children:!0===o?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("input",{onChange:function(e){a(e.currentTarget.value)},autoFocus:!0,onBlur:function(){u(!1),e.updateStatus(s)},value:s})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("span",{onDoubleClick:function(){u(!0)},children:e.status||"No status"})})})},P=function(e){var t=e.contactTitle,n=e.contactValue;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("b",{children:[t,":"]})," ",n]})},k=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:e.isOwner?Object(p.jsx)("button",{onClick:function(){e.setEditMode(!0)},children:"Edit"}):""}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job:"})," ",e.profileUser.lookingForAJob?"yes":"no"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("b",{children:"Contacts:"})}),Object.keys(e.profileUser.contacts).map((function(t){return Object(p.jsx)(P,{contactTitle:t,contactValue:e.profileUser.contacts[t]},t)}))]})]})},U=n(24),w=function(e){var t=Object(U.d)({initialValues:{lookingForJob:""},onSubmit:function(e){alert(JSON.stringify(e))}});return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",children:"Save"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"lookingForJob:",children:Object(p.jsx)("b",{children:"Looking for a job:"})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{id:"lookingForJob",name:"lookingForJob",type:"checkbox",onChange:t.handleChange,value:t.values.lookingForJob})})]})]})},T=s.a.memo((function(e){var t=Object(r.useState)(!1),n=Object(x.a)(t,2),s=n[0],a=n[1];return e.profileUser?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:y.a.description,children:[Object(p.jsx)("div",{children:e.profileUser.fullName}),Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e.profileUser.photos.small?e.profileUser.photos.small:""}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Status:"})," ",Object(p.jsx)(C,{status:e.status,updateStatus:e.updateStatus})]}),s?Object(p.jsx)(w,{profileUser:e.profileUser}):Object(p.jsx)(k,{isOwner:e.isOwner,profileUser:e.profileUser,editmode:s,setEditMode:a})]})]})}):Object(p.jsx)(S,{})})),_=n(6),R=n.n(_),N=n(16),A=n(11),I=n(248),D=n(109),F=n.n(D).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"a1254a8c-0530-4921-8e26-69272bb1af33"}}),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return F.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},L=function(e){return F.delete("follow/".concat(e)).then((function(e){return e.data}))},H=function(e){return F.post("follow/".concat(e)).then((function(e){return e.data}))},M=function(e){return console.warn("Obsolete method. Please use profileAPI object"),B.getProfile(e)},B={getProfile:function(e){return F.get("profile/"+e)},getStatus:function(e){return F.get("profile/status/"+e)},updateStatus:function(e){return F.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),F.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},G=function(){return F.get("auth/me").then((function(e){return e.data}))},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return F.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},W=function(){return F.delete("auth/login").then((function(e){return e.data}))},J={myPostsData:[{id:Object(I.a)(),likes:2,post:"Hello!"},{id:Object(I.a)(),likes:7,post:"What your name?"},{id:Object(I.a)(),likes:5,post:"Go! Go! Go!"},{id:Object(I.a)(),likes:4,post:"Hi"}],profileUser:{userId:0,lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""},photos:{small:"",large:""}},status:""},Z=function(e){return{type:"PROFILE-REDUCER/SET_STATUS",status:e}},q=function(e){return{type:"PROFILE-REDUCER/GET-CONTACTS",contacts:e}},K=function(e){return{type:"PROFILE-REDUCER/SAVE-PHOTO",file:e}},Y=n(68),Q=n.n(Y),X=n(69),$=n.n(X),ee=function(e){return Object(p.jsxs)("div",{className:$.a.content,children:[Object(p.jsx)("div",{className:$.a.item,children:Object(p.jsx)("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",alt:""})}),Object(p.jsx)("div",{children:e.message}),Object(p.jsxs)("div",{children:["Like ",e.likes]})]})},te=function(e){var t=Object(U.d)({initialValues:{textarea:""},validate:function(e){console.log(e.textarea.length);var t={};return e.textarea?e.textarea.length>140&&(t.textarea="No more than 140 symbols"):t.textarea="You can enter a message",t},onSubmit:function(t){e.clickCallback(t.textarea)}});return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("label",{htmlFor:"textarea",children:"Add post"}),Object(p.jsx)("div",{children:Object(p.jsx)("textarea",{id:"textarea",name:"textarea",onChange:t.handleChange,value:t.values.textarea,onBlur:t.handleBlur})}),t.errors.textarea?Object(p.jsx)("div",{style:{color:"green"},children:t.errors.textarea}):Object(p.jsx)("div",{}),Object(p.jsx)("button",{type:"submit",children:"Add post"})]})},ne=s.a.memo((function(e){var t=e.profile.myPostsData.map((function(e){return Object(p.jsx)(ee,{message:e.post,likes:e.likes})})).reverse();return Object(p.jsxs)("div",{className:Q.a.posts,children:[Object(p.jsx)(te,{clickCallback:function(t){e.newPost(t)}}),Object(p.jsx)("div",{className:Q.a.post,children:t})]})})),re=n(14),se=n(116),ae=["isAuth"],ie=function(e){return{isAuth:e.authorization.isAuthorized}};function ce(e){return Object(h.b)(ie)((function(t){var n=t.isAuth,r=Object(se.a)(t,ae);return n?Object(p.jsx)(e,Object(g.a)({},r)):Object(p.jsx)(m.a,{to:"/login"})}))}var oe=Object(re.compose)(Object(h.b)((function(e){return{profile:e.profile}}),(function(e){return{newPost:function(t){e({type:"PROFILE-REDUCER/NEW-STATE-POST",text:t})}}})),ce)(ne),ue=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(T,{isOwner:e.isOwner,contacts:e.contacts,profileUser:e.profileUser,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto}),Object(p.jsx)(oe,{})]})},le=function(e){return e.profile.profileUser},je=function(e){return e.profile.status},de=function(e){return e.authorization.id},be=function(e){return e.authorization.isAuthorized},pe=function(e){return e.profile.profileUser.contacts},he=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.myUserId)||this.props.history.push("/login"),this.props.getProfileThunkCreator(e),this.props.getStatusThunkCreator(e),this.props.getContactsThunkCreator(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(ue,Object(g.a)(Object(g.a)({},this.props),{},{savePhoto:this.props.savePhotoTC,isOwner:!this.props.match.params.userId,profileUser:this.props.profileUser,status:this.props.status,contacts:this.props.contacts,updateStatus:this.props.updateStatusThunkCreator}))})}}]),n}(r.Component),Oe=Object(re.compose)(Object(h.b)((function(e){return{profileUser:le(e),status:je(e),myUserId:de(e),isAuthorized:be(e),contacts:pe(e)}}),{getProfileThunkCreator:function(e){return function(){var t=Object(N.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:r=t.sent,n({type:"PROFILE-REDUCER/SET_PROFILE_USER",profileUser:r.data}),n(q(r.data.contacts));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatusThunkCreator:function(e){return function(){var t=Object(N.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.getStatus(e);case 2:if(!(r=t.sent).data){t.next=7;break}n(Z(r.data)),t.next=8;break;case 7:return t.abrupt("return","");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusThunkCreator:function(e){return function(){var t=Object(N.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(Z(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getContactsThunkCreator:function(e){return function(){var t=Object(N.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.getProfile(e);case 2:(r=t.sent).data&&n(q(r.data.contacts));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhotoTC:function(e){return function(){var t=Object(N.a)(R.a.mark((function t(n){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.savePhoto(e);case 2:(r=t.sent).data&&n(K(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),m.g)(he),fe="DIALOGS-REDUCER/NEW-DIALOGS-POST",me={dialogsData:[{id:Object(I.a)(),name:"Ivan",sex:"boy"},{id:Object(I.a)(),name:"Petr",sex:"boy"},{id:Object(I.a)(),name:"Masha",sex:"girl"},{id:Object(I.a)(),name:"Vasya",sex:"boy"},{id:Object(I.a)(),name:"Klava",sex:"girl"},{id:Object(I.a)(),name:"Timur",sex:"boy"}],messageData:[{id:Object(I.a)(),message:"Hey"},{id:Object(I.a)(),message:"How are you?"},{id:Object(I.a)(),message:"Have a nice day!"},{id:Object(I.a)(),message:"AAAAAAAAAA"},{id:Object(I.a)(),message:"Hi"},{id:Object(I.a)(),message:"Hi"}]},ge=n(28),xe=n.n(ge),ve=function(e){var t="/dialogs/"+e.id,n=Object(p.jsx)("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small/man-avatar-character-isolated-icon-free-vector.jpg",alt:"boy"}),r=Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTea6mpJZODj13Lvutndl6PgvULvVC3tPcreM4doidd7vHImnTOeK0HkfZIrFGeHuN_aJc&usqp=CAU",alt:"girl"});return Object(p.jsx)("div",{className:xe.a.dialog,children:Object(p.jsxs)(b.b,{to:t,activeClassName:xe.a.active,children:["boy"===e.sex?n:"girl"===e.sex?r:void 0,e.name]})})},ye=function(e){return Object(p.jsx)("div",{className:xe.a.message,children:e.text})},Ee=Object(re.compose)(Object(h.b)((function(e){return{dialogs:e.dialogs}}),(function(e){return{addDialog:function(t){e({type:fe,text:t})}}})),ce)((function(e){var t=e.dialogs.dialogsData.map((function(e){return Object(p.jsx)(ve,{name:e.name,id:e.id,sex:e.sex},e.id)})),n=e.dialogs.messageData.map((function(e){return Object(p.jsx)(ye,{text:e.message},e.id)}));return Object(p.jsxs)("div",{className:xe.a.dialogs,children:[Object(p.jsx)("div",{className:xe.a.dialogs_items,children:t}),Object(p.jsx)("div",{className:xe.a.all_messages,children:n}),Object(p.jsx)(te,{clickCallback:function(t){e.addDialog(t)}})]})})),Se="USERS_REDUCER/FOLLOW",Ce="USERS_REDUCER/UNFOLLOW",Pe="USERS_REDUCER/SET-USERS",ke="USERS_REDUCER/SET-CURRENT-PAGE",Ue="USERS_REDUCER/SET-TOTAL-USERS-COUNT",we="USERS_REDUCER/SPINNER-LOADER-FETCHING",Te="USERS_REDUCER/FOLLOWING-IN-PROGRESS",_e={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Re=function(e){return{type:Pe,users:e}},Ne=function(e){return{type:ke,page:e}},Ae=function(e){return{type:we,isFetching:e}},Ie=function(e,t){return{type:Te,isFetching:e,id:t}},De=n(70),Fe=n.n(De),ze=s.a.memo((function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);Math.ceil(t/e.portionSize);var a=Object(r.useState)(1),i=Object(x.a)(a,2),c=i[0],o=i[1],u=(c-1)*e.portionSize+1,l=c*e.portionSize;return Object(p.jsxs)("div",{className:Fe.a.paginatorWrapper,children:[c>1&&Object(p.jsx)("button",{style:{color:"red"},onClick:function(){o(1)},children:"START"}),c>1&&Object(p.jsx)("button",{style:{margin:"0 5px 0 5px"},onClick:function(){o(c-1)},children:"PREV"}),n.filter((function(e){return e>=u&&e<=l})).map((function(t){return Object(p.jsx)("span",{onClick:function(n){return e.onChangePage(t)},className:e.currentPage===t?Fe.a.selectedPage:"",style:{border:"1px solid black",margin:"2px"},children:t},t)})),c<t/e.portionSize&&Object(p.jsx)("button",{style:{margin:"0 5px 0 5px"},onClick:function(){o(c+1)},children:"NEXT"}),c<t/e.portionSize&&Object(p.jsx)("button",{style:{color:"red"},onClick:function(){o(t/e.portionSize)},children:"END"})]})})),Le=n(110),He=n.n(Le),Me=n.p+"static/media/avatar_girl.49d85a96.png",Be=s.a.memo((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/profile/"+e.user.id,children:Object(p.jsx)("img",{src:null!==e.user.photos.small?e.user.photos.small:Me,className:He.a.usersAvatars})})}),Object(p.jsx)("div",{children:!0===e.user.followed?Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollowUsersThunk(e.user.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.followUsersThunk(e.user.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:e.user.name}),Object(p.jsx)("div",{children:null!==e.user.status?Object(p.jsxs)("span",{children:["Status: ",e.user.status]}):Object(p.jsx)("span",{})})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"props.user.location.city"}),Object(p.jsx)("div",{children:"props.user.location.country"})]})]})})),Ge=s.a.memo((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ze,{pageSize:e.pageSize,totalItemsCount:e.totalItemsCount,onChangePage:e.onChangePage,currentPage:e.currentPage,portionSize:10}),e.users.map((function(t){return Object(p.jsx)(Be,{user:t,followingInProgress:e.followingInProgress,followUsersThunk:e.followUsersThunk,totalItemsCount:e.totalItemsCount,pageSize:e.pageSize,unfollowUsersThunk:e.unfollowUsersThunk,currentPage:e.currentPage,onChangePage:e.onChangePage},t.id)}))]})})),Ve=function(e){return e.usersPage.users},We=function(e){return e.usersPage.pageSize},Je=function(e){return e.usersPage.totalUsersCount},Ze=function(e){return e.usersPage.currentPage},qe=function(e){return e.usersPage.isFetching},Ke=function(e){return e.usersPage.followingInProgress},Ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"onChangePage",value:function(e){this.props.getUsersThunk(e,this.props.pageSize)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(S,{}):null,Object(p.jsx)(Ge,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,onChangePage:this.onChangePage.bind(this),currentPage:this.props.currentPage,users:this.props.users,followingInProgress:this.props.followingInProgress,followUsersThunk:this.props.followUsersThunk,unfollowUsersThunk:this.props.unfollowUsersThunk})]})}}]),n}(s.a.Component),Qe=Object(re.compose)(Object(h.b)((function(e){return{users:Ve(e),pageSize:We(e),totalItemsCount:Je(e),currentPage:Ze(e),isFetching:qe(e),followingInProgress:Ke(e)}}),{getUsersThunk:function(e,t){return function(){var n=Object(N.a)(R.a.mark((function n(r){var s;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Ae(!0)),r(Ne(e)),n.next=4,z(e,t);case 4:s=n.sent,r(Ae(!1)),r(Re(s.items)),r((a=s.totalCount,{type:Ue,totalCount:a}));case 8:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},changePageThunk:function(e,t){return function(){var n=Object(N.a)(R.a.mark((function n(r){var s;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Ne(e)),r(Ae(!0)),n.next=4,z(t);case 4:s=n.sent,r(Ae(!1)),r(Re(s.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followUsersThunk:function(e){return function(){var t=Object(N.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Ie(!0,e)),t.next=3,H(e);case 3:0===t.sent.resultCode&&n({type:Se,id:e}),n(Ie(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowUsersThunk:function(e){return function(){var t=Object(N.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Ie(!0,e)),t.next=3,L(e);case 3:0===t.sent.resultCode&&n({type:Ce,id:e}),n(Ie(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Ye),Xe=n(55),$e={id:"",email:"",login:"",isAuthorized:!1,serverError:null},et=function(e,t,n,r){return{type:"AUTHORIZATION/SET_AUTH_USER_DATA",payload:{id:e,email:t,login:n,isAuthorized:r}}},tt=function(){return function(){var e=Object(N.a)(R.a.mark((function e(t){var n,r,s,a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.email,i=r.login,t(et(s,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},nt=s.a.memo((function(){var e=Object(h.d)((function(e){return e.authorization.isAuthorized})),t=Object(h.d)((function(e){return e.authorization.serverError})),n=Object(h.c)();return e?Object(p.jsx)(m.a,{to:"/"}):Object(p.jsx)("div",{children:Object(p.jsx)(U.c,{initialValues:{email:"",password:"",rememberMe:!1},validationSchema:Xe.a({email:Xe.b().email("Enter valid email address").required("Email required"),password:Xe.b().min(4,"Password must be 4 characters but less 20").max(20,"Password must be 4 characters but less 20").required("Password required")}),onSubmit:function(e){var t,r,s;n((t=e.email,r=e.password,s=e.rememberMe,function(){var e=Object(N.a)(R.a.mark((function e(n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t,r,s);case 2:0===(a=e.sent).resultCode?n(tt()):a.messages.length&&n({type:"AUTHORIZATION/SET-SERVER-ERROR",error:a.messages[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("label",{htmlFor:"email",children:"Email Address"})}),Object(p.jsx)("div",{children:Object(p.jsx)(U.b,{name:"email",type:"email"})}),Object(p.jsx)("div",{style:{color:"red"},children:Object(p.jsx)(U.a,{name:"email"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("label",{htmlFor:"password",children:"Your Password"})}),Object(p.jsx)("div",{children:Object(p.jsx)(U.b,{name:"password",type:"password"})}),Object(p.jsx)("div",{style:{color:"red"},children:Object(p.jsx)(U.a,{name:"password"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("label",{htmlFor:"rememberMe",children:"Remember Me"})}),Object(p.jsx)("div",{children:Object(p.jsx)(U.b,{name:"rememberMe",type:"checkbox"})})]}),Object(p.jsx)("div",{style:{height:"15px",marginBottom:"10px",color:"red"},children:t&&t}),Object(p.jsx)("button",{type:"submit",children:"Login"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Use for email: esh8284@gmail.com"}),Object(p.jsx)("div",{children:"Use for pass: hellO28415again"})]})]})}})})})),rt=function(){return Object(p.jsx)("h1",{children:"404: PAGE NOT FOUND"})},st=n(42),at=n.n(st),it=function(e){var t=Object(h.c)();return Object(p.jsx)("div",{className:at.a.headerContainer,children:Object(p.jsxs)("div",{className:at.a.headerBody,children:[Object(p.jsx)("div",{className:at.a.logo,children:"Social network"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:e.isAuthorized&&e.login}),Object(p.jsx)("div",{onClick:function(){return t(function(){var e=Object(N.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:0===e.sent.resultCode&&t(et("","","",!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:at.a.loginBlock,children:e.isAuthorized?Object(p.jsx)("span",{children:"Logout"}):Object(p.jsx)(b.b,{to:"/login",children:"Login"})})]})]})})},ct=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(it,Object(g.a)(Object(g.a)({},this.props),{},{login:this.props.login,isAuthorized:this.props.isAuthorized}))})}}]),n}(s.a.Component),ot=Object(re.compose)(Object(h.b)((function(e){return{login:e.authorization.login,isAuthorized:e.authorization.isAuthorized}})))(ct),ut={initialized:!1},lt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppTC()}},{key:"render",value:function(){return console.log(this.props.initialized),this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)("div",{className:"app-header",children:Object(p.jsx)(ot,{})}),Object(p.jsxs)("div",{className:"app-container",children:[Object(p.jsx)("div",{className:"app-navbar",children:Object(p.jsx)(f,{})}),Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsxs)(m.d,{children:[Object(p.jsx)(m.b,{path:"/profile",render:function(){return Object(p.jsx)(Oe,{})}}),Object(p.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(Oe,{})}}),Object(p.jsx)(m.b,{path:"/profile/:userId?",render:function(){return Object(p.jsx)(Oe,{})}}),Object(p.jsx)(m.b,{path:"/dialogs",render:function(){return Object(p.jsx)(Ee,{})}}),Object(p.jsx)(m.b,{path:"/users",render:function(){return Object(p.jsx)(Qe,{})}}),Object(p.jsx)(m.b,{path:"/login",render:function(){return Object(p.jsx)(nt,{})}}),Object(p.jsx)(m.b,{path:"/404",render:function(){return Object(p.jsx)(rt,{})}}),Object(p.jsx)(m.a,{from:"*",to:"/404"})]})})]})]}):Object(p.jsx)(S,{})}}]),n}(s.a.Component),jt=Object(re.compose)(Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppTC:function(){return function(e){var t=e(tt());Promise.all([t]).then((function(){return e({type:"APP/SET-INITIALIZED"})}))}}}),m.g)(lt),dt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,249)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))},bt={friends:[{id:Object(I.a)(),name:"Kolya",sex:"boy"},{id:Object(I.a)(),name:"Ilya",sex:"boy"},{id:Object(I.a)(),name:"Anya",sex:"girl"}]},pt=n(115),ht=n(114),Ot=Object(re.combineReducers)({dialogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;if(t.type===fe){var n={id:Object(I.a)(),message:t.text};return Object(g.a)(Object(g.a)({},e),{},{messageData:[].concat(Object(A.a)(e.messageData),[n])})}return e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE-REDUCER/NEW-STATE-POST":var n={id:Object(I.a)(),likes:6,post:t.text};return Object(g.a)(Object(g.a)({},e),{},{myPostsData:[].concat(Object(A.a)(e.myPostsData),[n])});case"PROFILE-REDUCER/SET_PROFILE_USER":return Object(g.a)(Object(g.a)({},e),{},{profileUser:t.profileUser});case"PROFILE-REDUCER/SET_STATUS":return Object(g.a)(Object(g.a)({},e),{},{status:t.status});case"PROFILE-REDUCER/GET-CONTACTS":return Object(g.a)(Object(g.a)({},e),{},{profileUser:Object(g.a)(Object(g.a)({},e.profileUser),{},{contacts:t.contacts})});case"PROFILE-REDUCER/SAVE-PHOTO":return Object(g.a)(Object(g.a)({},e),{},{profileUser:Object(g.a)(Object(g.a)({},e.profileUser),{},{photos:t.file})});default:return e}},sidebarContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case Ue:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalCount});case ke:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.page});case Se:return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case Ce:return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});case Pe:return Object(g.a)(Object(g.a)({},e),{},{users:Object(A.a)(t.users)});case Te:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});default:return e}},authorization:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHORIZATION/SET_AUTH_USER_DATA":return Object(g.a)(Object(g.a)({},e),t.payload);case"AUTHORIZATION/SET-SERVER-ERROR":return Object(g.a)(Object(g.a)({},e),{},{serverError:t.error});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;return"APP/SET-INITIALIZED"===t.type?Object(g.a)(Object(g.a)({},e),{},{initialized:!0}):e}}),ft=Object(re.createStore)(Ot,Object(ht.composeWithDevTools)(Object(re.applyMiddleware)(pt.a)));i.a.render(Object(p.jsx)(h.a,{store:ft,children:Object(p.jsx)(b.a,{children:Object(p.jsx)(jt,{})})}),document.getElementById("root")),dt()},25:function(e,t,n){e.exports={nav:"Navbar_nav__3xBF9",navContainer:"Navbar_navContainer__12Dmt",allItems:"Navbar_allItems__1lrdh",friendsNav:"Navbar_friendsNav__32Q2f",item:"Navbar_item__3AN-g",active:"Navbar_active__1HbNQ"}},28:function(e,t,n){e.exports={dialogs_items:"Dialogs_dialogs_items__23Eo4",active:"Dialogs_active__35SEF",dialog:"Dialogs_dialog__2SpMW",all_messages:"Dialogs_all_messages__14o2x",dialogs:"Dialogs_dialogs__2WV1c"}},42:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__1qmrE",headerBody:"Header_headerBody__3logS",loginBlock:"Header_loginBlock__yY8WD",logo:"Header_logo__2jBO4"}},68:function(e,t,n){e.exports={posts:"MyPosts_posts__11eh9",post:"MyPosts_post__1DUNt"}},69:function(e,t,n){e.exports={item:"Post_item__3wagf"}},70:function(e,t,n){e.exports={paginatorWrapper:"Paginator_paginatorWrapper__z2bLO",selectedPage:"Paginator_selectedPage__1Vi-H"}}},[[247,1,2]]]);
//# sourceMappingURL=main.96be110b.chunk.js.map