(this["webpackJsonpnasa-api-hackathon"]=this["webpackJsonpnasa-api-hackathon"]||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(9),i=a.n(n),r=(a(41),a(4)),l=a(2),o=a(12),d=(a(42),a(14)),j=(a(22),a(0));function b(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"h2 text-center",children:e.image_heading}),Object(j.jsx)(d.a,{children:Object(j.jsx)("img",{className:"img-fluid",src:e.image_src,alt:e.img_alt})}),Object(j.jsx)("p",{className:"h2 text-center mt-4",children:e.informationTitle})]})}b.defaultProps={image_heading:"Set The image by image_heading in the props",image_src:"Set the img src by image_src in the props",informationTitle:"Set the Title here by informationTitle from the props",img_alt:"Set the img alt by img_alt from the props"};var m=a(11),h=a.n(m);var x=function(){var e=Object(c.useState)({date:""}),t=Object(o.a)(e,2),a=t[0],n=t[1];return s.a.useEffect((function(){h.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat("BaJdMCMCqaioVVTgQals11eQWDF1B5U3fTT1sYVZ")).then((function(e){n(e.data)}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container pt-5 mt-3",children:Object(j.jsxs)("div",{className:"row p-5 rounded shadow my-5",children:[Object(j.jsx)("p",{className:"h1 text-secondary text-center",children:"Today's Hit"}),Object(j.jsx)("hr",{}),Object(j.jsx)(b,{image_heading:a.title,image_src:a.hdurl,img_alt:"Seen of the day",informationTitle:"Information about the Picture"}),Object(j.jsxs)("p",{className:"text-center mt-4",children:["This picture was taken by ",Object(j.jsx)("b",{children:a.copyright})," on ",Object(j.jsx)("b",{children:function(e){var t=e.substring(0,4),a=e.substring(4,6),c=e.substring(6,8);return new Date(t,a-1,c).toDateString()}(a.date.replace("-",""))})]}),Object(j.jsx)("p",{className:"h3 text-center mt-3",children:"Explanation"}),Object(j.jsx)("p",{className:"col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 mx-auto text-justify lh-lg fs-5 mt-4",children:a.explanation})]})})})};function O(){return Object(j.jsx)("h1",{children:"Hello This is my about"})}function p(){var e=Object(c.useState)("none"),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("h1",{className:"centre",children:"Enter the search term"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the search term here",id:"input"})]}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Once more");var e=document.getElementById("input").value;h.a.get("https://images-api.nasa.gov/search?page=1&q=".concat(e,"&media_type=image")).then((function(e){if(s(""),console.log(e),i.a.unmountComponentAtNode(document.getElementById("data_div")),console.log(e.data.collection.items.length),0===e.data.collection.items.length)return console.log("No results found"),void(document.getElementById("end").style.display="");document.getElementById("end").style.display="none";var t=Object(j.jsx)("div",{className:"row",children:e.data.collection.items.map((function(e,t){try{return Object(j.jsx)("div",{className:"col-lg-4 d-flex align-items-stretch",children:Object(j.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(j.jsx)("img",{src:e.links[0].href,className:"card-img-top",alt:"Search Result"}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.data[0].title}),Object(j.jsx)("p",{className:"card-text",children:Object(j.jsx)("b",{dangerouslySetInnerHTML:{__html:e.data[0].description}})})]}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item",children:["Taken on - ",Object(j.jsx)("b",{children:e.data[0].date_created})]},0),Object(j.jsxs)("li",{className:"list-group-item",children:["Center -",Object(j.jsx)("b",{children:e.data[0].center})]},1),Object(j.jsxs)("li",{className:"list-group-item",children:["NASA Id - ",e.data[0].nasa_id]},2)]}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)(r.a,{basename:"/",children:[Object(j.jsx)(r.b,{to:"/image/".concat(e.data[0].nasa_id),className:"card-link",children:"Details"}),Object(j.jsx)(r.b,{to:"#",className:"card-link",children:"Another link"})]})})]})},t)}catch(a){console.log("Done")}}))});console.log("Rendering"),i.a.render(t,document.getElementById("data_div")),console.log("Rendered")}))},children:"Search for it"}),Object(j.jsx)("div",{style:{textAlign:"center",display:a},children:Object(j.jsx)("div",{id:"data_div"})}),Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("br",{}),Object(j.jsx)("h3",{id:"end",style:{display:"none"},children:"Sorry No results found"})]})]})})}var g=a.p+"static/media/space.171ab69a.svg",u=a.p+"static/media/launch.0f4fd919.svg";function f(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container mt-4 pt-5",children:Object(j.jsxs)("div",{className:"rounded shadow p-5 pt-2 mb-5 mt-5",children:[Object(j.jsxs)("div",{className:"row flex-row row-reverse mb-5 mt-5",children:[Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("p",{className:"h1 text-center",children:[Object(j.jsx)("span",{className:"base-color",children:"Space"})," Exploration"]}),Object(j.jsx)("hr",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{className:"h2 text-center",children:["About ",Object(j.jsx)("span",{className:"base-color",children:"us"})]})]}),Object(j.jsx)("div",{className:"col-12 col-md-10 col-lg-6 mt-3",children:Object(j.jsx)("img",{className:"user-select-none",src:g,alt:"Logo"})}),Object(j.jsxs)("div",{className:"col-12 col-md-10 col-lg-6 mt-md-3 d-flex align-items-center",children:[Object(j.jsxs)("p",{className:"h5 text-justify lh-xl",children:["This is a place to research about space and this was made as a hackathon project and we use ",Object(j.jsx)("b",{children:"official"})," NASA API that we got from ",Object(j.jsx)("a",{className:"decoration-none",href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"here"}),". We are planning to add personal account for you to bookmark things in it in the future release and even much more. We are even working on a ",Object(j.jsx)("b",{children:"discord bot"})," for you to make easy to use it in ",Object(j.jsx)("b",{children:"discord"})," without any problem."]}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{className:"fas fa-facebook"})})})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 mt-5",children:Object(j.jsxs)("p",{className:"h2 text-center",children:["Contact ",Object(j.jsx)("span",{className:"base-color",children:"us"})]})}),Object(j.jsx)("div",{className:"col-12 col-md-10 col-lg-6 mt-3",children:Object(j.jsx)("img",{className:"user-select-none",src:u,alt:"Logo"})}),Object(j.jsx)("div",{className:"col-12 col-md-10 col-lg-6 mt-md-3 d-flex align-items-center",children:Object(j.jsxs)("form",{className:"w-100",children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"#Email",className:"form-label",children:"Email address"}),Object(j.jsx)("input",{type:"email",className:"form-control shadow-none",id:"Email","aria-describedby":"emailHelp"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"#Name",className:"form-label",children:"Name"}),Object(j.jsx)("input",{type:"email",className:"form-control shadow-none",id:"Name","aria-describedby":"emailHelp"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"#Message",className:"form-label",children:"Message"}),Object(j.jsx)("textarea",{type:"text",className:"form-control shadow-none",id:"Message"})]}),Object(j.jsx)("button",{type:"submit",className:"btn w-50 border-0 shadow-none py-2 text-white offset-3 mt-3",children:"Submit"})]})})]})]})})})}function v(e){return Object(j.jsx)("nav",{className:"navbar navbar-expand-md navbar-light shadow-sm border-bottom bg-light p-3 fixed-top",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(r.c,{className:"navbar-brand",to:"/",activeClassName:"active",children:e.title}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsx)("div",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(j.jsxs)("div",{className:"d-flex justify-content-around mt-4 mt-md-0",children:[Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(r.c,{className:"nav-link","aria-current":"page",exact:!0,to:"/",activeClassName:"active",children:"Home"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(r.c,{activeClassName:"active",className:"nav-link",exact:!0,to:e.aboutLink,children:e.aboutText})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(r.c,{className:"nav-link",to:e.image_search_link,exact:!0,activeClassName:"active",children:e.image_search})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(r.c,{activeClassName:"active",className:"nav-link",exact:!0,to:e.apod_link,children:e.apod_text})})]})})})]})})}v.defaultProps={title:"Set title here",aboutText:"About Text here",aboutLink:"/about",image_search:"Image Search",image_search_link:"/search",apod_text:"APOD",apod_link:"/apod"};var N=a(21);function y(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"centre",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)(d.a,{children:Object(j.jsx)("img",{src:e.img_src,className:"img-fluid",alt:e.NASA_id})}),Object(j.jsxs)(N.MobileView,{children:[Object(j.jsx)("br",{}),Object(j.jsxs)("button",{style:{float:"right",textAlign:"center"},className:"btn btn-danger",onClick:function(){navigator.share({title:"Share this Image",text:e.NASA_id,url:window.location.href})},children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-share",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"})})," Share"]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsxs)(N.BrowserView,{children:[Object(j.jsx)("br",{}),Object(j.jsx)("a",{class:"btn-floating btn btn-tw",type:"button",role:"button",title:"Share on twitter",href:"https://twitter.com/intent/tweet?url=".concat(window.location.href),rel:"noreferrer",target:"_blank",children:Object(j.jsx)("i",{class:"fab fa-2x fa-twitter",style:{color:"#00acee"}})}),Object(j.jsx)("a",{class:"btn-floating btn btn-tw",type:"button",role:"button",title:"Share on facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(window.location.href),target:"_blank",rel:"noreferrer",children:Object(j.jsx)("i",{class:"fab fa-2x fa-facebook-square"})})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("hr",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"centre",children:[Object(j.jsxs)("h2",{children:["NASA ID - ",Object(j.jsx)("b",{children:e.NASA_id})]}),Object(j.jsxs)("h2",{children:["Taken on - ",Object(j.jsx)("b",{children:e.taken_on})]}),Object(j.jsxs)("h2",{children:["Center - ",Object(j.jsx)("b",{children:e.center})]})]}),Object(j.jsx)("h2",{children:"Description"}),Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})})}function w(e){var t="https://images-assets.nasa.gov/image/".concat(e.match.params.id,"/").concat(e.match.params.id,"~thumb.jpg"),a=e.match.params.id,c=s.a.useState({title:"Loading",center:"Loading",description:"Loading",taken_on:"Loading"}),n=Object(o.a)(c,2),i=n[0],r=n[1];return s.a.useEffect((function(){h.a.get("https://images-assets.nasa.gov/image/".concat(e.match.params.id,"/metadata.json")).then((function(e){var t={title:e.data["AVAIL:Title"],center:e.data["AVAIL:Center"],taken_on:e.data["AVAIL:DateCreated"]};""!==e.data["AVAIL:Description"]?t.description=e.data["AVAIL:Description"].replace("\n","<br/>"):t.description="<em>No Description Provided</em>",console.log(t),r(t)})).catch((function(e){window.location.href="#/404"}))}),[e.match.params.id]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(y,{title:i.title,center:i.center,description:i.description,img_src:t,NASA_id:a,taken_on:i.taken_on})})}function _(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("h1",{children:"404 Page not found"}),Object(j.jsxs)("p",{children:["You have reached the end of ",Object(j.jsx)("b",{children:"SPACE"})," but you can return back to ",Object(j.jsx)("b",{children:"Earth"})," by ",Object(j.jsx)(r.b,{to:"/",children:" Home "})]})]})]})}function k(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"row bg-light border-top",children:Object(j.jsx)("div",{className:"col-10 offset-1 py-3",children:Object(j.jsxs)("div",{className:"nav d-flex justify-content-between align-items-center",children:[Object(j.jsxs)("div",{className:"col-12 col-md-6 justify-content-center justify-content-md-start text-center text-md-start",children:["Design and Developed by Space Exploration",Object(j.jsxs)("p",{className:"text-muted mb-0",children:["Illustrations By ",Object(j.jsx)("a",{className:"text-reset",href:"https://storyset.com/",children:"Storyset"})]})]}),Object(j.jsxs)("div",{className:"col-12 col-md-6 items d-flex justify-content-center justify-content-md-end text-secondary",children:[Object(j.jsx)("div",{className:"nav-item text-reset",children:Object(j.jsx)("a",{className:"nav-link text-reset",href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"Home"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link text-reset",href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"Term Of Use"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link text-reset",href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"Privacy & Policy"})})]})]})})})})})})}y.defaultProps={description:"<em>No Description Provided</em>"};var S=function(){return Object(j.jsxs)(r.a,{basename:"/",children:[Object(j.jsx)(v,{title:"Space Exploration",aboutText:"About Us",aboutLink:"/about"}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(j.jsx)(l.a,{path:"/apod",exact:!0,component:x}),Object(j.jsx)(l.a,{path:"/about",exact:!0,component:O}),Object(j.jsx)(l.a,{path:"/search",exact:!0,component:p}),Object(j.jsx)(l.a,{path:"/image/:id",exact:!0,component:w}),Object(j.jsx)(l.a,{path:"/404",exact:!0,component:_}),Object(j.jsx)(l.a,{path:"/",component:_})]}),Object(j.jsx)(k,{})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),A()}},[[73,1,2]]]);
//# sourceMappingURL=main.bda51a32.chunk.js.map