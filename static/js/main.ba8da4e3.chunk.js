(this["webpackJsonpradaykin-frontend-js"]=this["webpackJsonpradaykin-frontend-js"]||[]).push([[0],{12:function(e,t,a){e.exports={skill:"Skill_skill__qEw_M",aboutSkill:"Skill_aboutSkill__1TbPW",icon:"Skill_icon__3NkXs",title:"Skill_title__2LpJD",description:"Skill_description__2ceM-"}},13:function(e,t,a){e.exports={contactForm:"MessageForm_contactForm__1IvJE",userName:"MessageForm_userName__3Pt1A",userEmail:"MessageForm_userEmail__K0njZ",userMessage:"MessageForm_userMessage__25tNY",buttonSend:"MessageForm_buttonSend__4eLlo"}},20:function(e,t,a){e.exports={skillsBlock:"Skills_skillsBlock__3yKhX",skillsContainer:"Skills_skillsContainer__1OHVf",skills:"Skills_skills__13Yys"}},21:function(e,t,a){e.exports={worksBlock:"Works_worksBlock__3UJ5P",worksContainer:"Works_worksContainer__3EE9D",works:"Works_works__w8BZC"}},27:function(e,t,a){e.exports={header:"Header_header__j8W7F",headerContainer:"Header_headerContainer__2a54i"}},3:function(e,t,a){e.exports={footerContainer:"Footer_footerContainer___xUUt",teleworkContacts:"Footer_teleworkContacts__3QiGc",text:"Footer_text__2rpLi",phone:"Footer_phone__147YZ",numberPhone:"Footer_numberPhone__2Cc5Y",mail:"Footer_mail__3-v0l",socialNetworks:"Footer_socialNetworks__gebvM",iconItem:"Footer_iconItem__1lqTC",messageForm:"Footer_messageForm__3YuLU"}},33:function(e,t,a){e.exports={nav:"Nav_nav__3dfEL"}},37:function(e,t,a){e.exports={button:"Button_button__1U0hR"}},42:function(e,t,a){},43:function(e,t,a){},5:function(e,t,a){e.exports={container:"Container_container__1qkJw"}},62:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(14),r=a.n(c),i=(a(42),a(43),a(27)),o=a.n(i),l=a(33),j=a.n(l),d=a(19),m=a(0);var b=function(){return Object(m.jsxs)("nav",{className:j.a.nav,children:[Object(m.jsx)(d.Link,{to:"skills-ref",smooth:!0,children:"Skills"}),Object(m.jsx)(d.Link,{to:"works-ref",smooth:!0,children:"Works"}),Object(m.jsx)(d.Link,{to:"contacts-ref",smooth:!0,children:"Contacts"})]})},u=a(5),_=a.n(u),x=a(6),h=a.n(x);var O=function(){return Object(m.jsx)("header",{className:o.a.header,children:Object(m.jsx)(h.a,{right:!0,children:Object(m.jsx)("div",{className:"".concat(_.a.container," ").concat(o.a.headerContainer),children:Object(m.jsx)(b,{})})})})},p=a(4),k=a(7),f=a(9),v=a.n(f),g=a(34),N=a.n(g);var S=function(){var e=Object(n.useState)({actualString:"",toggle:!1,allString:"make code."}),t=Object(k.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){if(a.toggle)var e=setInterval((function(){s((function(t){switch(t.actualString){case"":return clearInterval(e),Object(p.a)(Object(p.a)({},t),{},{toggle:!1});default:return Object(p.a)(Object(p.a)({},t),{},{actualString:t.actualString.slice(0,t.actualString.length-1)})}}))}),100);else var t=setInterval((function(){s((function(e){switch(e.actualString){case"":return Object(p.a)(Object(p.a)({},e),{},{actualString:e.actualString+e.allString[0]});case"make code.":return clearInterval(t),Object(p.a)(Object(p.a)({},e),{},{allString:"not war.",toggle:!0});case"not war.":return clearInterval(t),Object(p.a)(Object(p.a)({},e),{},{allString:"make code.",toggle:!0});default:return Object(p.a)(Object(p.a)({},e),{},{actualString:e.actualString+e.allString[e.actualString.length]})}}))}),250)}),[a.toggle]),Object(m.jsx)("div",{className:v.a.mainBlock,children:Object(m.jsx)(h.a,{left:!0,children:Object(m.jsxs)("div",{className:"".concat(_.a.container," ").concat(v.a.mainContainer),children:[Object(m.jsx)(N.a,{className:"Tilt",options:{max:25},children:Object(m.jsx)("div",{className:v.a.photoWrapper,children:Object(m.jsx)("div",{className:v.a.photo})})}),Object(m.jsxs)("div",{className:v.a.text,children:[Object(m.jsx)("h3",{children:"Hi There!"}),Object(m.jsxs)("h1",{children:["I am ",Object(m.jsx)("span",{children:"Roman Radaykin"})]}),Object(m.jsx)("h3",{children:"Frontend Developer"}),Object(m.jsxs)("h3",{className:v.a.typed,children:[a.actualString+"|"," "]})]})]})})})},w=a(20),C=a.n(w),F=a(12),W=a.n(F),y=a(28);a(56);var M=function(e){var t=Object(n.useState)(0),a=Object(k.a)(t,2),s=a[0],c=a[1];Object(n.useEffect)((function(){if(e.start)var t=setInterval((function(){c((function(a){return a<e.maxValue?a+1:(clearInterval(t),a)}))}),20)}),[e.start]);var r=Object(y.b)({pathColor:"rgb(232, 49, 49)",textSize:"30px",textColor:"rgb(232, 49, 49)",trailColor:"white"});return Object(m.jsxs)("div",{className:W.a.skill,children:[Object(m.jsxs)("div",{className:W.a.aboutSkill,children:[Object(m.jsx)("div",{className:W.a.icon,children:Object(m.jsx)(y.a,{styles:r,value:s,text:"".concat(s)})}),Object(m.jsx)("h3",{className:W.a.title,children:e.title})]}),Object(m.jsx)("span",{className:W.a.description,children:e.description})]})};var B=function(){var e="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ",t=Object(n.useState)(!1),a=Object(k.a)(t,2),s=a[0],c=a[1],r=Object(n.createRef)();Object(n.useEffect)((function(){document.addEventListener("scroll",i)}),[]);var i=function(){var e=r.current;if(e){var t=e.offsetTop;window.pageYOffset+window.innerHeight>=t&&c(!0)}};return Object(m.jsx)("div",{className:C.a.skillsBlock,id:"skills-ref",children:Object(m.jsx)(h.a,{left:!0,children:Object(m.jsxs)("div",{className:"".concat(_.a.container," ").concat(C.a.skillsContainer),children:[Object(m.jsx)("h2",{children:"Skills"}),Object(m.jsxs)("div",{className:C.a.skills,ref:r,children:[Object(m.jsx)(M,{title:"HTML/CSS",description:e,maxValue:94,start:s}),Object(m.jsx)(M,{title:"JavaScript",description:e,maxValue:85,start:s}),Object(m.jsx)(M,{title:"React",description:e,maxValue:93,start:s}),Object(m.jsx)(M,{title:"Redux",description:e,maxValue:88,start:s})]})]})})})},I=a(21),E=a.n(I),L=a(8),T=a.n(L),J=a(11),P=a(35);var U=function(e){return Object(m.jsxs)("div",{className:T.a.work,children:[Object(m.jsx)("div",{className:T.a.image}),Object(m.jsxs)("div",{className:T.a.info,children:[Object(m.jsx)("a",{href:"#",children:Object(m.jsx)("h3",{className:T.a.title,children:e.title})}),Object(m.jsxs)("div",{className:T.a.description,children:[Object(m.jsx)("span",{className:T.a.descriptionBody,children:e.description}),Object(m.jsx)("a",{href:"#",className:T.a.arrow,children:Object(m.jsx)(J.a,{size:"2x",style:{padding:"5px"},color:"rgb(232, 49, 49)",icon:P.a})})]})]})]})};var H=function(){var e="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ";return Object(m.jsx)("div",{className:E.a.worksBlock,id:"works-ref",children:Object(m.jsx)(h.a,{right:!0,children:Object(m.jsxs)("div",{className:"".concat(_.a.container," ").concat(E.a.worksContainer),children:[Object(m.jsx)("h2",{children:"Works"}),Object(m.jsxs)("div",{className:E.a.works,children:[Object(m.jsx)(U,{title:"TodoList",description:e}),Object(m.jsx)(U,{title:"Counter",description:e}),Object(m.jsx)(U,{title:"StarWars app",description:e}),Object(m.jsx)(U,{title:"AnotherProject",description:e})]})]})})})},Y=a(3),z=a.n(Y),R=a(10),V=a(13),D=a.n(V),K=a(36),Z=a.n(K),q=function(){var e=Object(n.useState)(),t=Object(k.a)(e,2);t[0],t[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:D.a.contactForm,onSubmit:function(e){console.log(e),e.preventDefault(),Z.a.sendForm("service_ei1ez18","template_52m8u09",e.currentTarget,"user_FIWkrWAV7JvPTrsEZmeDG").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},children:[Object(m.jsx)("input",{type:"text",name:"user_name",className:D.a.userName,placeholder:"Name"}),Object(m.jsx)("input",{type:"email",name:"user_email",className:D.a.userEmail,placeholder:"Email"}),Object(m.jsx)("textarea",{name:"message",className:D.a.userMessage,placeholder:"Your message"}),Object(m.jsx)("input",{type:"submit",value:"Send",className:D.a.buttonSend})]})})},A=a(37),G=a.n(A),X=function(e){return Object(m.jsx)("div",{className:G.a.button,children:Object(m.jsx)("a",{href:"#",children:e.text})})};var Q=function(){return Object(m.jsx)("footer",{className:z.a.footerBlock,id:"contacts-ref",children:Object(m.jsx)(h.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"".concat(_.a.container," ").concat(z.a.footerContainer),children:[Object(m.jsxs)("div",{className:z.a.teleworkContacts,children:[Object(m.jsx)("div",{className:z.a.text,children:Object(m.jsxs)("h1",{children:["I am ready to ",Object(m.jsx)("span",{children:"telework"})]})}),Object(m.jsx)(X,{text:"My resume"}),Object(m.jsxs)("div",{className:z.a.phone,children:[Object(m.jsx)("span",{className:z.a.numberPhone,children:"+7 952 277 76 30"}),Object(m.jsx)("span",{className:z.a.mail,children:"roman.radaikin@yandex.ru"})]}),Object(m.jsxs)("div",{className:z.a.socialNetworks,children:[Object(m.jsx)(J.a,{className:z.a.iconItem,icon:R.b,size:"2x"}),Object(m.jsx)(J.a,{className:z.a.iconItem,icon:R.c,size:"2x"}),Object(m.jsx)(J.a,{className:z.a.iconItem,icon:R.a,size:"2x"})]})]}),Object(m.jsxs)("div",{className:z.a.messageForm,children:[Object(m.jsx)("h3",{children:"Contact with me"}),Object(m.jsx)(q,{})]})]})})})};var $=function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(O,{}),Object(m.jsx)(S,{}),Object(m.jsx)(B,{}),Object(m.jsx)(H,{}),Object(m.jsx)(Q,{})]})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)($,{})}),document.getElementById("root")),ee()},8:function(e,t,a){e.exports={work:"Work_work___Jxwp",image:"Work_image__1_YrW",info:"Work_info__1Hxtc",title:"Work_title__3Ls87",description:"Work_description___84Uu",arrow:"Work_arrow__tZKHh",descriptionBody:"Work_descriptionBody__Zlg-U"}},9:function(e,t,a){e.exports={mainBlock:"Main_mainBlock__3lt7J",mainContainer:"Main_mainContainer__1zK3W",photoWrapper:"Main_photoWrapper__3CK_-",photo:"Main_photo__32wxB",text:"Main_text__bkNmR",typed:"Main_typed__3cgbK"}}},[[62,1,2]]]);
//# sourceMappingURL=main.ba8da4e3.chunk.js.map