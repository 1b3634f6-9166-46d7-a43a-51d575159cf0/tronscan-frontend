(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{3511:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a.n(n),l=a(21),c=a(95),s=a(9),o=a(8),i=a(12),m=a(11),u=a(13),d=a(0),p=a.n(d),b=a(10),f=a(2);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).hideModal=function(){a.setState({modal:null})},a.isValid=function(e,t){var a=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e),n=!isNaN(parseInt(t,10))&&t>0;return a&&n},a.stopListening=function(){a.listener&&a.listener.close(),a.setState({active:!1,logs:[]})},a.testNode=function(e){a.listener&&a.listener.close(),a.listener=Object(b.c)("/nodetest-"+e,{query:{ip:e}}),a.listener.on("connect",function(){a.setState({active:!0})}),a.listener.on("node-status",function(e){a.setState(function(t){return{logs:[E({},e,{id:a.id++})].concat(Object(c.a)(t.logs.slice(0,9)))}})})},a.setPort=function(e){var t=r()(e.target.value);""!==t&&(t=parseInt(t,10),t=isNaN(t)?0:t),a.setState({port:t})},a.id=0,a.listener=null,a.state={ip:"",port:50051,active:!1,logs:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){this.listener&&this.listener.close()}},{key:"render",value:function(){var e=this,t=this.state,a=t.ip,n=t.port,r=t.modal,l=t.active,c=t.logs;return p.a.createElement("main",{className:"container header-overlap _tester"},r,p.a.createElement("div",{className:"card"},p.a.createElement("div",{className:"card-body"},p.a.createElement("h5",{className:"card-title text-left"},Object(f.c)("node_tester"),p.a.createElement("span",{className:"_tester_msg"},Object(f.c)("node_tester_msg"))),p.a.createElement("div",{className:"text-left"},p.a.createElement("span",null,"IP")),p.a.createElement("input",{className:"form-control text-left",type:"text",placeholder:"123.123.123.123",value:a,onChange:function(t){return e.setState({ip:t.target.value})}}),p.a.createElement("br",null),p.a.createElement("div",{className:"text-left"},p.a.createElement("span",null,"Port")),p.a.createElement("input",{className:"form-control text-left",type:"text",placeholder:"50051",value:n,onChange:this.setPort}),p.a.createElement("div",{className:"text-left"},l?p.a.createElement("button",{className:"btn",onClick:function(){return e.stopListening()}},Object(f.c)("node_tester_stop")):p.a.createElement("button",{className:"btn",disabled:!this.isValid(a,n),onClick:function(){return e.testNode(a+":"+n)}},Object(f.c)("node_tester_test"))))),l&&0===c.length&&p.a.createElement("div",{className:"card mt-3"},p.a.createElement("table",{className:"table table-hover table-striped bg-white m-0"},p.a.createElement("thead",{className:"thead-dark"},p.a.createElement("tr",{align:"center"},p.a.createElement("th",null,Object(f.c)("connection_node")))),p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{align:"center"},Object(f.c)("loading")))))),c.length>0&&p.a.createElement("div",{className:"card mt-3"},p.a.createElement("table",{className:"table table-hover table-striped bg-white m-0"},p.a.createElement("thead",{className:"thead-dark"},p.a.createElement("tr",null,p.a.createElement("th",null,Object(f.c)("message")),p.a.createElement("th",{style:{width:200}},Object(f.c)("node_tester_rt")))),p.a.createElement("tbody",null,c.map(function(e){return p.a.createElement("tr",{key:e.id},p.a.createElement("td",null,e.msg),p.a.createElement("td",null,e.responseTime," ms"))})))))}}]),t}(d.Component);t.default=v}}]);