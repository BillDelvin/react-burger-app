webpackJsonp([2],{146:function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=n(0),c=n.n(a),s=n(12),u=n(6),p=n(157),l=n(50),d=n(10),b=n(49),f=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),A=function(e){function r(){return t(this,r),o(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,e),f(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=c.a.createElement(b.a,null);return this.props.loading||(e=c.a.createElement("div",null,this.props.orders.map(function(e){return c.a.createElement(p.a,{key:e.id,ingredients:e.ingredients,price:e.price})}))),e}}]),r}(a.Component),m=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},x=function(e){return{onFetchOrders:function(r,n){return e(d.d(r,n))}}};r.default=Object(u.b)(m,x)(Object(l.a)(A,s.a))},157:function(e,r,n){"use strict";var t=n(0),o=n.n(t),i=n(158),a=n.n(i),c=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map(function(e){return o.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},e.name,"(",e.amount,")\xa0")});return o.a.createElement("div",{className:a.a.Order},o.a.createElement("p",null,"ingredients : ",t," "),o.a.createElement("p",null,"price : ",o.a.createElement("strong",null,"IDR ",Number.parseFloat(e.price).toFixed(2))))};r.a=c},158:function(e,r,n){var t=n(159);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;n(144)(t,o);t.locals&&(e.exports=t.locals)},159:function(e,r,n){r=e.exports=n(143)(!0),r.push([e.i,".Order__Order__4yi4Z{width:100%;border:1px solid #ccc;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["/home/billdelvin/Documents/REACT/react-burger-app/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACE,WAAY,AACZ,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAChC",file:"Order.css",sourcesContent:[".Order {\n  width: 100%;\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 0 2px 3px #ccc;\n          box-shadow: 0 2px 3px #ccc;\n  padding: 10px;\n  margin: 10px auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n"],sourceRoot:""}]),r.locals={Order:"Order__Order__4yi4Z"}}});
//# sourceMappingURL=2.f3499e5a.chunk.js.map