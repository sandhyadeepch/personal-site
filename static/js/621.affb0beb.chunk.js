"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[621],{7621:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(2791),s=n(1523),o=n(6842),i=n(184),a=function(e){var t=e.data;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,i.jsx)(a,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,d=function(e){var t=e.data;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,i.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},u=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,i.jsx)(d,{data:e},e.company)}))]})};u.defaultProps={data:[]};var p=u;function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=n(9611);function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function y(e,t){if(t&&("object"===g(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var s=m(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return y(this,n)}}var b=n(4942),j=n(1413),w=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,s=t.competency,o=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,j.Z)((0,j.Z)({},a),{},{width:"".concat(String(Math.min(100,Math.max(s/5*100,0))),"%")});return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:a,children:(0,i.jsx)("span",{children:o})}),(0,i.jsx)("div",{className:"skillbar-bar",style:c}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[s," / 5"]})]})};x.defaultProps={categories:[]};var k=x,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,f.Z)(e,t)}(o,e);var t,n,r,s=v(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=s.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,j.Z)((0,j.Z)({},n),{},(0,b.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,j.Z)((0,j.Z)({},e),{},(0,b.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,i.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,i.jsx)(w,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h3",{children:"Skills"}),(0,i.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,i.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,i.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.Component);S.defaultProps={skills:[],categories:[]};var P=S,N=function(e){var t=e.data,n=e.last;return(0,i.jsxs)("li",{className:"course-container",children:[(0,i.jsxs)("a",{href:t.link,children:[(0,i.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,i.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,i.jsx)("div",{className:"course-dot",children:(0,i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var A=N,O=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,i.jsx)(A,{data:t,last:n===e.length-1},t.title)}))},C=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"courses",children:[(0,i.jsx)("div",{className:"link-to",id:"courses"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Selected Courses"})}),(0,i.jsx)("ul",{className:"course-list",children:O(t)})]})};C.defaultProps={data:[]};var D=C,E=function(){return(0,i.jsxs)("div",{className:"references",children:[(0,i.jsx)("div",{className:"link-to",id:"references"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)(s.rU,{to:"/contact",children:(0,i.jsx)("h3",{children:"References are available upon request"})})})]})},R=[{title:"Web Development Bootcamp",id:"1",link:"https://www.udemy.com/course/the-complete-web-development-bootcamp/",university:"Udemy"},{title:"Python Programming: A Concise Introduction",number:"2",link:"https://www.coursera.org/learn/python-programming-introduction/home/",university:"Johns Hopkins"},{title:"HTML, CSS, and Javascript for Web Developers",number:"3",link:"https://www.coursera.org/learn/html-css-javascript-for-web-developers/home/",university:"Johns Hopkins"},{title:"Microsoft Certified Technology Specialist ",id:"4",link:"https://learn.microsoft.com/en-us/certifications/",university:"Microsoft"},{title:"Microsoft Office SharePoint Server 2007- Configuration (070-630)",number:"5",link:"https://learn.microsoft.com/en-us/certifications/",university:"Microsoft"},{title:"Microsoft Office SharePoint Server 2007 - Application Development (070-542)",number:"6",link:"https://learn.microsoft.com/en-us/certifications/",university:"Microsoft"}],T=[{school:"Bhojreddy engineering college for women",degree:"Bachelor of Electronics and communications",link:"http://brecw.ac.in/",year:2007}],L=[{id:"1",company:"PERSONAL PROJECTS/ TRAINING, AUSTIN",position:"Trainee",link:"https://github.com/sandhyadeepch/",daterange:"Jan 2022 - Present",points:["Enrolled in web development course and completed challenges with little to no help.","Developed various sites using HTML/CSS/Javascript/React/Node Js/ Express/ RESTful APIs/ MongoDB according to the requirements.","Published all the sites on to Git Hub using Git bash commands on hyper terminal.","Attended foundation course from AWS","Enrolled in python introduction program course and completed all challenges","My personal site - https://sandhyadeepch.github.io/personal-site/","Git site - https://github.com/sandhyadeepch"]},{id:"2",company:"ELLIS ELEMENTARY, SUNNYVALE",position:"PTA Volunteer",link:"https://www.sesd.org/ellis",daterange:"August 2021 - Jan 2022",points:["As part of PTA, designed and created flyer for fund raising event.","Participated in fund-raising events and activities.","Reached out to organizations who can raise fund for school.","Organized distribution of tokens/gifts to students (10 classes).","Chaperoned class field trips to assist teacher and protect students (25).","Assisted with classes by helping teacher where ever is needed and maintain organized spaces."]},{id:"3",company:"BRIGHT BEGINNERS, SUNNYVALE",position:"Parent Volunteer",link:"https://www.fuhsdadultschool.com/preschool-programs/bright-beginnings-preschool",daterange:"January 2017 - December 2020",points:["Chaperoned class field trips to assist teacher and protect students.","Helped students needing personalized support with group activities like crafts/paint and lesson assignments.","Assisted with classes by helping teacher in all areas as needed and maintain organized spaces.","Protected children from infection by cleaning and sanitizing spaces.","Involved in organizing fund-raising events within school .","Promoted student development and engagement by helping organize special activities."]},{id:"4",company:"SELF, HYDERABAD",position:"Tutor Volunteer",link:"",daterange:"July 2015 - April 2016",points:["Assisted students (grades 6-10) with homework using curriculum of the school.","Guided students in Maths by reviewing students textbooks and materials.","Motivated students towards learning to build self-confidence and reduce fear of failure.","Communicated with parents regarding student progress and areas of concern.","Created reports for students on the test results."]},{id:"5",company:"WELLS FARGO, CHARLOTTE",position:"SharePoint Consultant",link:"https://www.wellsfargo.com/",daterange:"Oct 2012 - January 2014",points:["Developed survey tool for managers to record employees Affiant/Notary response for audit purpose with validations handled using JQuery.","Created/modified reports in Access 2007.","Prep site collections to migrate from MOSS 2007 to SharePoint 2010.","Created, built, and modified sites to internal users upon request approval.","Created and maintained user accounts and properly routed documents for approval and training.","Collaborated with technical and non-technical staff and contractors at various levels to complete projects.","Developed custom forms using SharePoint Designer and InfoPath at times as per requirements.","Provided estimations and tracked the work to meet the timelines."]},{id:"6",company:"LPL FINANCIAL, CHARLOTTE",position:"Junior SharePoint Developer",link:"https://www.lpl.com/",daterange:"April 2012 - September 2012",points:["Created, built, and modified sites to internal users upon request approval.","Modified the site branding with the help of master pages and style sheet.","Designed and developed workflows  using SharePoint Designer at times.","Developed components using SharePoint Framework, and third-party integrations.","Developed custom web parts to allow users rate the blogs, and articles.","Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.","Integration of external database to SharePoint 2010 using APIs."]},{id:"7",company:"WELLS FARGO, CHARLOTTE",position:"SharePoint Developer",link:"https://www.wellsfargo.com/",daterange:"October 2011 - April 2012",points:["Developed workflows, InfoPath forms using SharePoint designer.","Developed POCs , technical support and troubleshooting for internal clients.","Managed the security of sites by creating appropriate groups and roles.","Collaborated with technical and non-technical staff at various levels to complete projects.","Provided suggestions and create contents on sites for different departments (ranging from 10 to 15) with required functionality.","Performed CRUD operations on Access DB for SharePoint lists."]},{id:"8",company:"SONATA SOFTWARE, HYDERABAD",position:"System Analyst/ Developer/ Team Lead ",link:"https://www.sonata-software.com/",daterange:"September 2007 - January 2011",points:["Developed intranet portals to clients like Aditya Birla (ABFSG India), Mahindra & Mahindra, Genpact India with all features of SharePoint.","Assessed business requirements to create focused solutions.","Collaborated on stages of systems development lifecycle from requirement gathering to production releases.","Customized Sites, Site Collections, Web parts, My Profile to the required extent using SharePoint designer, InfoPath, C#, CSS, ASP.Net, SQL Server 2005, Javascript, VSS.","Developed workflows both inbuilt and customized, across these intranet portals with alert notifications send to outlook.","Discussed issues with team members (team of 6 ) to provide resolution and apply best practices.","Built databases and table structures for web applications.","Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.","Estimated work hours and tracked progress using Scrum methodology."]}],J=n(907);var M=n(181);var I,B=[{title:"Javascript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:1,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:1,category:["Tools","Languages"]},{title:"MongoDB",competency:1,category:["Web Development","Databases"]},{title:"SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:1,category:["Web Development","Javascript"]},{title:"Bootstrap",competency:1,category:["Web Development","Javascript"]},{title:"Git",competency:2,category:["Tools"]},{title:"VS",competency:3,category:["Tools"]},{title:"Atom",competency:2,category:["Tools"]},{title:"EJS",competency:2,category:["TWeb Development","Languages"]},{title:"HTML + CSS",competency:4,category:["Web Development","Languages"]},{title:"Python",competency:1,category:["Languages","Python"]},{title:"C#",competency:2,category:["Languages"]}].map((function(e){return(0,j.Z)((0,j.Z)({},e),{},{category:e.category.sort()})})),Z=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],W=(I=new Set(B.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,J.Z)(e)}(I)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(I)||(0,M.Z)(I)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:Z[t]}})),H=["Education","Experience","Skills","Courses","References"],G=function(){return(0,i.jsx)(o.Z,{title:"Resume",description:"Sandhya's Resume. ",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{"data-testid":"heading",children:(0,i.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:H.map((function(e){return(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,i.jsx)(l,{data:T}),(0,i.jsx)(p,{data:L}),(0,i.jsx)(P,{skills:B,categories:W}),(0,i.jsx)(D,{data:R}),(0,i.jsx)(E,{})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=621.affb0beb.chunk.js.map