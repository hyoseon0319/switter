(this.webpackJsonpswitter=this.webpackJsonpswitter||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(34),s=n.n(r),i=n(8),o=n(22),u=n(6),l=n(9),j=n.n(l),b=n(16),d=n(24);n(43),n(56),n(57);d.a.initializeApp({apiKey:"AIzaSyAb2PTMB8HDIncO0DAue1Y5FsFUuJCiG4w",authDomain:"switter-f3ffb.firebaseapp.com",projectId:"switter-f3ffb",storageBucket:"switter-f3ffb.appspot.com",messagingSenderId:"426443309215",appId:"1:426443309215:web:a5b1218191e69c07bca2aa",measurementId:"G-ZHHJJRB7D2"});var p=d.a,f=d.a.auth(),O=d.a.firestore(),h=d.a.storage(),m=n(1);var x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],h=Object(a.useState)(""),x=Object(i.a)(h,2),g=x[0],v=(x[1],function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)}),w=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:v,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:v,className:"authInput"}),Object(m.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Log In"}),g&&Object(m.jsx)("span",{className:"authError",children:g})]}),Object(m.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"Sign in.":"Create Account"})]})},g=n(12),v=n(23),w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.name),"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=5,f.signInWithPopup(a);case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(g.a,{icon:v.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(g.a,{icon:v.a})]})]})]})},y=n(37),N=n(19),S=function(e){var t=e.sweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("Are you sure you want to delete this sweet?"),console.log(n),!n){e.next=7;break}return e.next=5,O.doc("sweets/".concat(t.id)).delete();case 5:return e.next=7,h.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return o((function(e){return!e}))},v=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t,d),e.next=4,O.doc("sweets/".concat(t.id)).update({text:d});case 4:o(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"sweet",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:v,className:"container sweetEdit",children:[Object(m.jsx)("input",{type:"text",placeholder:"Edit your sweet",value:d,required:!0,onChange:function(e){var t=e.target.value;p(t)}}),Object(m.jsx)("input",{type:"submit",value:"Update Sweet",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl}),n&&Object(m.jsxs)("div",{class:"sweet__actions",children:[Object(m.jsx)("span",{onClick:f,children:Object(m.jsx)(g.a,{icon:N.d})}),Object(m.jsx)("span",{onClick:x,children:Object(m.jsx)(g.a,{icon:N.a})})]})]})})},k=n(35),I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(k.v4)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,O.collection("sweets").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(g.a,{icon:N.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(g.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){O.collection("sweets").onSnapshot((function(e){console.log(e.docs);var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{userObj:t}),Object(m.jsx)("div",{children:r.map((function(e){return Object(m.jsx)(S,{sweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj,n=e.refreshUser,c=Object(u.g)(),r=Object(a.useState)(t.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("sweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===o){e.next=5;break}return e.next=4,t.updateProfile({displayName:o});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:o,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return console.log(t),Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(g.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},B=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(m.jsxs)(o.a,{children:[t&&Object(m.jsx)(F,{userObj:n}),Object(m.jsx)(u.d,{children:t?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(u.b,{exact:!0,path:"/",children:Object(m.jsx)(C,{userObj:n})}),Object(m.jsx)(u.b,{exact:!0,path:"/profile",children:Object(m.jsx)(A,{userObj:n,refreshUser:a})}),Object(m.jsx)(u.a,{from:"*",to:"/"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/",children:Object(m.jsx)(w,{})}),Object(m.jsx)(u.a,{from:"*",to:"/"})]})})]})};var U=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=(s[0],s[1],Object(a.useState)(null)),u=Object(i.a)(o,2),l=u[0],j=u[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){j(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(B,{refreshUser:function(){var e=f.currentUser;console.log(f.currentUser),j({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(l),userObj:l}):"Initializing..."})};n(54);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.fe46b221.chunk.js.map