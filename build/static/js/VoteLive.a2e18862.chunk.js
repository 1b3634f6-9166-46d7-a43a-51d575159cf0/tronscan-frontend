(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{3288:function(e,t,a){"use strict";a.r(t);var n=a(1569),r=a.n(n),s=a(2),c=a.n(s),o=a(8),i=a(5),d=a(15),l=a(16),m=a(25),u=a(24),v=a(26),b=a(0),p=a.n(b),f=a(13),h=a(297),w=a(2933),x=a(18),E=a(19),g=a(2562),j=a.n(g),O=a(3),y=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).loadCandidates=Object(i.a)(c.a.mark(function t(){var a,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.getWitnesses();case 2:a=t.sent,n=a.witnesses,e.setState({candidates:n.map(function(e){return Object(o.a)({},e,{votes:0})})});case 5:case"end":return t.stop()}},t)})),e.loadVotes=Object(i.a)(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.getLiveVotes();case 2:a=t.sent,e.setState({votes:a});case 4:case"end":return t.stop()}},t)})),e.loadData=Object(i.a)(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.getVoteStats();case 2:a=t.sent,e.setState({data:a});case 4:case"end":return t.stop()}},t)})),e.state={candidates:[],data:null,votes:{},colors:j()("mpn65",20)},e}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadCandidates().then(function(){return e.loadVotes()}),this.props.setInterval(function(){e.loadVotes(),e.loadCandidates()},15e3),this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.candidates,a=e.colors,n=e.votes;e.data;t=t.map(function(e){return Object(o.a)({},e,{votes:n[e.address]?n[e.address].votes:0})});var s=r()(t,function(e){return-1*e.votes}).map(function(e,t){return Object(o.a)({},e,{rank:t+1})});return p.a.createElement("main",{className:"container header-overlap pb-3"},p.a.createElement("div",{className:"card mt-3"},p.a.createElement("div",{className:"card-header text-center"},Object(O.c)("live_ranking"),p.a.createElement("div",{className:"small text-center text-muted p-2"},Object(O.c)("live_ranking_msg"))),p.a.createElement("div",{className:"media m-3 mb-0"},p.a.createElement("div",{className:"font-weight-bold text-center border-1 border-secondary",style:{width:25}},"\xa0"),p.a.createElement("div",{className:"mx-2",style:{width:25}},"\xa0"),p.a.createElement("div",{className:"media-body font-weight-bold"},Object(O.c)("candidate")),p.a.createElement("div",{className:"ml-3 text-center font-weight-bold"},Object(O.c)("current_votes"))),p.a.createElement(w.a,{duration:700,easing:"ease",enterAnimation:"elevator",staggerDurationBy:15,staggerDelayBy:20},s.map(function(e,t){return p.a.createElement("div",{key:e.address,className:"media mx-3 mb-3"},p.a.createElement("div",{className:"font-weight-bold text-center border-1 border-secondary",style:Object(o.a)({color:t<15?"#"+a[t]:null},k.rank)},e.rank),p.a.createElement("div",{className:"media-body"},p.a.createElement("span",{className:"mt-0",style:k.row},p.a.createElement(E.a,{address:e.address},e.name||e.url))),p.a.createElement("div",{className:"ml-3 text-center"},p.a.createElement("div",{style:k.votes},p.a.createElement("code",{style:{color:"#3E3F3A"}},p.a.createElement(f.c,{value:e.votes})))))}))))}}]),t}(p.a.Component),k={rank:{fontSize:18,lineHeight:"".concat(25,"px"),borderRadius:"6px",width:"45px"},votes:{fontSize:18,lineHeight:"".concat(25,"px")},row:{lineHeight:"".concat(25,"px"),fontSize:18},avatar:{height:25}};t.default=Object(h.a)(y)}}]);