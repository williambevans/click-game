(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"},{id:2,name:"Mr. Krabs",image:"https://images.unsplash.com/photo-1519305124423-5ccccff55da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://images.unsplash.com/photo-1511635004244-63bfe11a6be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://images.unsplash.com/photo-1544857412-85e78e73a269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=992&q=80",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://images.unsplash.com/photo-1524594926950-50eddf33eb39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://images.unsplash.com/photo-1454425064867-5ba516caf601?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://images.unsplash.com/photo-1546391803-20a1a9e2c01c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"https://images.unsplash.com/photo-1516044600322-f72f1b84ec86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://images.unsplash.com/photo-1507504092444-9756efa33e83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"https://images.unsplash.com/photo-1509105494475-358d372e6ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1950&q=80",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"https://images.unsplash.com/photo-1516764838-c2d556ca60e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"https://images.unsplash.com/photo-1516044437274-60c4b8e9fceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),o=t.n(i),n=t(2),r=t.n(n),c=t(3),m=t(4),l=t(7),s=t(5),u=t(8);t(15);var p=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{onClick:function(){return e.removeFriend(e.id)},className:"remove",alt:e.name,src:e.image})))};t(16),t(17);var f=function(){return o.a.createElement("footer",{className:"footer"})};t(18);var h=function(){return o.a.createElement("header",{class:"header"},o.a.createElement("h2",null,"Pick a mushroom to put in your basket and gain points, but don't pick the same mushroom twice or game over!"))};t(19);var d=function(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("ul",null,o.a.createElement("li",{className:"brand"},o.a.createElement("a",{href:"/"},"Mushroom Pick")),o.a.createElement("li",{className:""},"Click an image to begin!"),o.a.createElement("li",null,"Score: 0 | Top Score: 0")))};var b=function(e){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(h,null),o.a.createElement("div",{className:"wrapper"},e.children),o.a.createElement(f,null))},g=t(6),y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(o)))).state={image:g},t.removeFriend=function(e){var a=t.state.image.filter(function(a){return a.id!==e});t.setState({image:a})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(b,null,this.state.image.map(function(a){return o.a.createElement(p,{removeFriend:e.removeFriend,id:a.id,image:a.image})}))}}]),a}(i.Component);r.a.render(o.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1bdf43c5.chunk.js.map