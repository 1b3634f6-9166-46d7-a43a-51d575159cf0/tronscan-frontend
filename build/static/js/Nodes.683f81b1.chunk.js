(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1232:function(e,t,a){"use strict";var r,n=a(85);t.a={pieChart:{color:["#98C8EB","#1A3964","#2A4994","#3665B0","#205097","#3A69C4"],title:{text:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} %"},series:[{name:"",type:"pie",radius:["45%","70%"],center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{c}%"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},representPieChart:{color:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"scroll",show:!1,orient:"vertical",left:"right",top:35,selectedMode:"false",data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},supplyTypesTRXPieChart:{color:["#c84a45","#e7afad","#e19b98","#da8683"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"plain",show:!1,orient:"horizontal",bottom:0,left:"center",selectedMode:"false",itemGap:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","50%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:10,length2:5},emphasis:{show:!0}}}]},lineChart:{title:{text:"",x:"center",link:"",target:"self"},grid:{left:"5%",right:"7%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{data:[],type:"line"}]},ringPieChart:{title:{text:"",x:"center"},color:["#F25C81","#7CB5EC","#F4A45D","#8085ED","#8FCACE","#424246","#348188","#F25C81","#E5D355","#96EE80"],legend:{type:"scroll",orient:"vertical",x:"right",selected:(r={"Bancor Network":!1,Gatecoin:!1,BitFlip:!1,Braziliex:!1,Cobinhood:!1,CoinExchange:!1,CoinFalcon:!1,Cryptomate:!1},Object(n.a)(r,"Gatecoin",!1),Object(n.a)(r,"IDEX",!1),Object(n.a)(r,"LiteBit.eu",!1),Object(n.a)(r,"Stocks.Exchange",!1),Object(n.a)(r,"Tidex",!1),r)},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"",type:"pie",selectedMode:"single",radius:[0,"30%"],center:["50%","50%"],label:{normal:{position:"inner",show:!1}},labelLine:{normal:{show:!1}},data:[]},{name:"",type:"pie",radius:["40%","55%"],center:["50%","50%"],data:[]}]},multiLineChart:{title:{text:"",x:"center"},legend:{type:"scroll",data:[]},grid:{left:"3%",right:"3%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[]},mapChart:{color:["gold"],series:[{name:"",type:"map",roam:!0,hoverable:!1,mapType:"none",itemStyle:{normal:{borderColor:"rgba(100,149,237,1)",borderWidth:.5,areaStyle:{color:"#1b1b1b"}}},data:[],geoCoord:{}},{name:"",type:"map",mapType:"none",data:[],markPoint:{symbol:"emptyCircle",symbolSize:function(e){return 1+e/10},effect:{show:!0,shadowBlur:0},itemStyle:{normal:{label:{show:!1}},emphasis:{label:{position:"top"}}},data:[]}}]},barChart:{title:{text:"Ranking"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:150},xAxis:{type:"value",name:"",axisLabel:{formatter:"{value}"}},yAxis:{type:"category",inverse:!0,data:[]},series:[{name:"",type:"bar",data:[],label:{normal:{show:!0,textBorderWidth:0}},itemStyle:{}}]},overviewChart:{title:{text:"",x:"center",link:"",target:"self",padding:[0,0,10,0]},tooltip:{trigger:"axis",axisPointer:{animation:!1}},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},axisPointer:{link:{xAxisIndex:"all"}},dataZoom:[{start:0,end:100},{type:"inside"}],grid:[{top:80,left:"10%",right:80,containLabel:!0}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:[]}],yAxis:[{name:"",nameGap:20,type:"value"}],series:[{name:"",type:"line",markPoint:{data:[{type:"max",name:"max"},{type:"min",name:"min"}]},data:[]}]},overviewHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:""},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#999999"}}},legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"area",name:"",data:[],marker:{enabled:!0}}]},ringPieHighChart3D:{chart:{type:"pie",options3d:{enabled:!0,alpha:45},spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0},title:{text:""},subtitle:{text:""},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},credits:{enabled:!1},colors:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",showInLegend:!0,innerSize:100,depth:60}},legend:{itemStyle:{fontWeight:"normal",color:"#666666"}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},series:[{name:"",data:[]}]},supplyPieHighChart:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},credits:{enabled:!1},exporting:{enabled:!0,sourceWidth:562,sourceHeight:400,filename:""},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},colors:["#c84a45","#e7afad"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0},showInLegend:!0}},series:[{name:"",colorByPoint:!0,data:[]}]},supplyAreaHighChart:{chart:{type:"area"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},tickmarkPlacement:"on",title:{enabled:!1}},yAxis:{title:{text:""},labels:{style:{color:"#999999"}}},tooltip:{shared:!0,valueSuffix:"%"},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{area:{stacking:"normal",lineColor:"#666666",lineWidth:1,marker:{lineWidth:1,lineColor:"#666666",radius:1}}},series:[]}}},3333:function(e,t,a){"use strict";a.r(t);var r=a(3065),n=a.n(r),o=a(2),i=a.n(o),l=a(5),s=a(108),c=a.n(s),d=a(1569),m=a.n(d),h=a(15),p=a(16),u=a(25),b=a(24),g=a(26),y=a(0),f=a.n(y),x=a(21),v=a.n(x),E=a(31),C=a(196),w=a(3),k=a(83),N=a(11),L=Object(N.a)(function(){return Promise.all([a.e(76),a.e(36)]).then(a.bind(null,3321))},function(){return f.a.createElement("div",{className:"card"},f.a.createElement(k.b,null,Object(w.c)("loading_map")))}),O=a(304);a(46);var A=a(13),j=a(1232),S=a(1108),H=a.n(S),B=(a(1475),a(1342),a(1242),function(e){function t(e){var a;Object(h.a)(this,t),a=Object(u.a)(this,Object(b.a)(t).call(this,e));var r=("_"+Math.random()).replace(".","_");return a.state={barId:"bar"+r},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"initBar",value:function(e){var t=this.props,a=(t.intl,t.data),r=H.a.getInstanceByDom(document.getElementById(e));void 0===r&&(r=H.a.init(document.getElementById(e))),j.a.barChart.title.text="",j.a.barChart.yAxis.data=[],j.a.barChart.series[0].data=[],j.a.barChart.series[0].itemStyle={normal:{color:new H.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ed213a"},{offset:1,color:"#93291e"}])},emphasis:{color:new H.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0052d4"},{offset:1,color:"#0052d4"}])}};var n=[],o={name:"Others",total:0};a.map(function(e){e.total>10&&null!==e.name?n.push(e):o.total=o.total+e.total}),n.push(o),n&&n.length>0&&n.map(function(e){j.a.barChart.yAxis.data.push(e.name),j.a.barChart.series[0].data.push(e.total)}),n&&0===n.length&&(j.a.barChart.title.text="No data"),r.setOption(j.a.barChart)}},{key:"componentDidMount",value:function(){this.initBar(this.state.barId)}},{key:"componentDidUpdate",value:function(){this.initBar(this.state.barId)}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("div",{id:this.state.barId,style:this.props.style}))}}]),t}(f.a.Component));var M=Object(E.connect)(function(e){return{}},{},null,{pure:!1})(Object(A.h)(B)),_=a(6),F=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(b.a)(t).call(this,e))).buildNodeList=function(){var e=a.state.nodes,t={},r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var s=i.value;t[s.country]||(t[s.country]={name:s.country,nodes:[],total:0}),t[s.country].nodes.push(s),t[s.country].total++}}catch(h){n=!0,o=h}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}var d=Object.values(t);return d=m()(d,function(e){return e.total}),(d=c()(d,function(e){return""!==e.name})).reverse(),d},a.setCountryHover=function(e){a.setState({activeCountry:e})},a.loadNodes=Object(l.a)(i.a.mark(function e(){var t,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(_.e,"/api/nodemap"));case 2:t=e.sent,r=t.data,a.setState({nodes:r.data,syncStatus:null});case 5:case"end":return e.stop()}},e)})),a.state={showAllCountries:!1,size:5,nodes:[],syncStatus:"waiting",show3D:"3d"===Object(O.a)(e.location,"mode")},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"renderList",value:function(){var e=this.state,t=e.showAllCountries,a=e.size,r=this.state.nodes,n=this.buildNodeList();return t||(n=n.slice(0,a)),0===r.length?f.a.createElement("div",{className:"d-flex justify-content-center p-4"},f.a.createElement(k.b,null)):f.a.createElement("ul",{className:"list-group list-group-flush"},n.map(function(e,t){return f.a.createElement("li",{key:e.name,className:"list-group-item d-flex"},e.name,f.a.createElement("span",{className:"ml-auto"},e.total))}))}},{key:"componentDidMount",value:function(){this.loadNodes()}},{key:"render",value:function(){var e=this.state,t=e.nodes,a=e.syncStatus,r=this.buildNodeList();return"waiting_for_first_sync"===a?f.a.createElement("main",{className:"container header-overlap"},f.a.createElement("div",{className:"card"},f.a.createElement(k.b,null,Object(w.c)("first_node_sync_message")))):0===t.length?f.a.createElement("main",{className:"container header-overlap"},f.a.createElement("div",{className:"card"},f.a.createElement(k.b,null,Object(w.c)("loading_nodes")))):f.a.createElement("main",{className:"container header-overlap _nodemap"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-6"},f.a.createElement("div",{className:"card h-100 text-left widget-icon bg-line_red bg-image_node"},f.a.createElement("div",{className:"card-body _node",style:{marginLeft:"50px"}},f.a.createElement("h3",{className:"text-secondary"},t.length),Object(w.c)("nodes")))),f.a.createElement("div",{className:"col-md-6 mt-3 mt-md-0"},f.a.createElement("div",{className:"card h-100 text-left widget-icon bg-line_green bg-image_nodest"},f.a.createElement("div",{className:"card-body _node",style:{marginLeft:"50px"}},r.length>0?f.a.createElement("h3",{className:"text-primary"},n()(r,function(e){return e.total}).name):f.a.createElement("h3",{className:"text-primary"},"Unknown"),Object(w.c)("most_nodes"))))),f.a.createElement("div",{className:"row mt-3"},f.a.createElement("div",{className:"col-md-12"},f.a.createElement("div",{className:"card",style:{padding:"20px"}},f.a.createElement(L,{nodes:t,countries:r})))),f.a.createElement("div",{className:"row mt-3"},f.a.createElement("div",{className:"col-md-12"},f.a.createElement("div",{className:"card"},f.a.createElement("div",{className:"card-body _node"},f.a.createElement("h5",{className:"card-title text-center"},Object(w.c)("nodes_ranking"),f.a.createElement("br",null),Object(w.c)("split_by_country")),f.a.createElement("div",{style:{height:500}},null===r?f.a.createElement(k.b,null):f.a.createElement(M,{style:{height:500},data:r})))))))}}]),t}(y.Component);var P={loadNodes:C.d};t.default=Object(E.connect)(function(e){return{}},P)(F)}}]);