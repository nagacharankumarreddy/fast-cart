(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(75)},40:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(14),l=a.n(r),o=(a(40),a(19),a(11)),i=a(1),s=a(10),u=a.n(s),m=a(15),d=a(8),p=function(){var e=Object(d.c)(function(e){return e.allProducts.products}).map(function(e){var t=e.id,a=e.title,c=e.category,r=e.image,l=e.price;return n.a.createElement("div",{className:"column four wide",key:t},n.a.createElement(o.b,{to:"/product/".concat(t)},n.a.createElement("div",{className:"ui link card"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:r,alt:a,height:"200px"})),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"header"},a),n.a.createElement("div",{className:"meta price"},"$",l),n.a.createElement("div",{className:"meta"},c)))))});return n.a.createElement(n.a.Fragment,null,e)},E="SET_PRODUCTS",f="SELECTED_PRODUCT",v=a(16),h=a.n(v),g=function(){var e=Object(d.b)(),t=function(){var t=Object(m.a)(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://fakestoreapi.com/products").catch(function(e){console.log(e)});case 2:a=t.sent,e((c=a.data,{type:E,payload:c}));case 4:case"end":return t.stop()}var c},t)}));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)(function(){t()},[]),n.a.createElement("div",{className:"ui grid container"},n.a.createElement(p,null))},O=function(){var e=Object(i.f)().productId,t=Object(d.b)(),a=function(){var a=Object(m.a)(u.a.mark(function a(){var c;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.get("https://fakestoreapi.com/products/".concat(e)).catch(function(e){console.log(e)});case 2:c=a.sent,t((n=c.data,{type:f,payload:n}));case 4:case"end":return a.stop()}var n},a)}));return function(){return a.apply(this,arguments)}}();Object(c.useEffect)(function(){e&&""!==e&&a()},[e]);var r=Object(d.c)(function(e){return e.product}),l=(r.id,r.title),o=(r.category,r.image),s=(r.price,r.description);return n.a.createElement("div",null,0===Object.keys(r).length?n.a.createElement("h1",null,"Loading..."):n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm-4"},n.a.createElement("img",{src:o,alt:l,className:"img-circle",style:{width:"100%",height:"auto"}})),n.a.createElement("div",{class:"col-sm-4"}),n.a.createElement("div",{class:"col-sm-4"},n.a.createElement("h1",null,l),n.a.createElement("h5",null,s)))))};var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",exact:!0,component:g}),n.a.createElement(i.a,{path:"/product/:productId",exact:!0,component:O}),n.a.createElement(i.a,{path:"/",exact:!0,component:g}))))},w=a(17),y=a(23),j={products:[]},N=Object(w.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(y.a)({},e,{products:t.payload});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case f:return Object(y.a)({},e,c);default:return e}}}),_=Object(w.b)(N,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a(72);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d.a,{store:_},n.a.createElement(b,null))),document.getElementById("root"))}},[[35,2,1]]]);
//# sourceMappingURL=main.76538435.chunk.js.map