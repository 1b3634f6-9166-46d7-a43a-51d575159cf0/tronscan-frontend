webpackJsonp([20],{1405:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}}Object.defineProperty(t,"__esModule",{value:!0});var u,c=a(10),d=n(c),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(0),p=n(m),h=a(17),g=a(88),b=a(12),y=a(53),w=n(y),x=a(13),E=a(16),v=a(14),k=a(135),_=a(21),N=a(1512),T=(n(N),a(98)),C=a(30),S=n(C),O=a(20),P=a(54),R=a(133),M=a(19),A=a(132),I=a(24),j=n(I),L=a(41),F=n(L),B=a(116),X=(0,B.withTronWeb)(u=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));D.call(a),a.state={tokens:[],buyAmount:0,loading:!1,total:0,amount:"",filter:{}};var n=(0,E.trim)((0,k.getQueryParam)(e.location,"search"));return n.length>0&&(a.state.filter.name=""+n),a}return i(t,e),f(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&this.loadPage()}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,l=t.total,o=this.props,i=(o.match,o.intl),s=this.customizedColumn(),u=i.formatMessage({id:"view_total"})+" "+(l-1)+" "+i.formatMessage({id:"view_pass"});return p.default.createElement("main",{className:"container header-overlap token_black"},n,r&&p.default.createElement("div",{className:"loading-style"},p.default.createElement(M.TronLoader,null)),p.default.createElement("div",{className:"row"},p.default.createElement("div",{className:"col-md-12 table_pos"},l?p.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},u):"",p.default.createElement(S.default,{bordered:!0,loading:r,column:s,data:a,total:l,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(m.Component))||u,D=function(){var e=this;this.loadPage=function(){var t=r(d.default.mark(function t(){var a,n,r,l,o,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.filter,n=e.props.intl,e.setState({loading:!0}),r=void 0,!a.name){t.next=10;break}return t.next=7,j.default.get(O.API_URL+"/api/token?sort=rank&limit="+s+"&start="+(i-1)*s+"&status=ico&name="+a.name);case 7:r=t.sent,t.next=13;break;case 10:return t.next=12,j.default.get(O.API_URL+"/api/token?sort=rank&limit="+s+"&start="+(i-1)*s+"&status=ico&showAll=2");case 12:r=t.sent;case 13:return l=r.data.total,o=r.data.data,0===o.length&&T.toastr.warning(n.formatMessage({id:"warning"}),n.formatMessage({id:"record_not_found"})),e.setState({loading:!1,tokens:o,total:l}),t.abrupt("return",l);case 18:case"end":return t.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),this.setSearch=function(){var t=(0,E.trim)((0,k.getQueryParam)(e.props.location,"search"));t.length>0?e.setState({filter:{name:""+t}}):e.setState({filter:{}})},this.onChange=function(t,a){e.loadPage(t,a)},this.searchName=function(t){t.length>0?e.setState({filter:{name:"%25"+t+"%25"}}):"#/tokens/view"!==window.location.hash?window.location.hash="#/tokens/view":e.setState({filter:{}})},this.onBuyInputChange=function(t,a,n){var r=e.props.intl;t>n&&(t=n),t=t.replace(/^0|[^\d*]/g,""),e.setState({buyAmount:t}),e.buyAmount.value=t;var l=t*a;e.priceTRX.innerHTML=r.formatNumber(l,{maximumFractionDigits:6})+" TRX"},this.preBuyTokens=function(t){var a=e.state,n=(a.buyAmount,a.amount,e.props);if(n.currentWallet,!n.wallet.isOpen)return void e.setState({alert:p.default.createElement(w.default,{info:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},p.default.createElement("div",{className:"token-sweet-alert"},p.default.createElement("a",{className:"close",onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),p.default.createElement("span",null,(0,x.tu)("login_first")),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.setState({alert:null})}},(0,x.tu)("OK"))))});e.setState({alert:p.default.createElement(w.default,{showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},p.default.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},p.default.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),p.default.createElement("h5",{style:{color:"black"}},(0,x.tu)("buy_token_info")),0===t.remaining&&p.default.createElement("span",null," ",(0,x.tu)("no_token_to_buy")),p.default.createElement("div",{className:"input-group mt-5"},p.default.createElement("input",{type:"number",ref:function(t){return e.buyAmount=t},className:"form-control",max:t.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(a){e.onBuyInputChange(a.target.value,t.trxNum/t.num*Math.pow(10,t.precision)/O.ONE_TRX,t.remaining)}})),p.default.createElement("div",{className:"text-center mt-3 text-muted"},p.default.createElement("b",null,"= ",p.default.createElement("span",{ref:function(t){return e.priceTRX=t}},"0 TRX"))),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.buyTokens(t)}},(0,x.tu)("participate"))))})},this.buyTokens=function(t){var a=t.trxNum/t.num*Math.pow(10,t.precision),n=e.state.buyAmount;if(!(n<=0)){var r=e.props,l=r.currentWallet,o=(r.wallet,n*(a/O.ONE_TRX));l.balance/O.ONE_TRX<o?e.setState({alert:p.default.createElement(w.default,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},p.default.createElement("div",{className:"mt-5 token-sweet-alert"},p.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),p.default.createElement("span",null,(0,x.tu)("not_enough_trx_message")),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.setState({alert:null})}},(0,x.tu)("confirm"))))}):e.setState({alert:p.default.createElement(w.default,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},p.default.createElement("div",{className:"mt-5 token-sweet-alert"},p.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),p.default.createElement("p",{className:"ml-auto buy_confirm_message"},(0,x.tu)("buy_confirm_message_1")),p.default.createElement("span",null,n," ",t.name," ",(0,x.t)("for")," ",parseFloat((n*(a/O.ONE_TRX)).toFixed(6))," TRX?"),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.confirmTransaction(t)}},(0,x.tu)("confirm"))))})}},this.submit=function(){var t=r(d.default.mark(function t(a){var n,r,l,o,i,s,u,c,f,m,p,h,g,b,y;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.trxNum/a.num*Math.pow(10,a.precision),r=e.props,l=r.account,o=r.currentWallet,i=e.state.buyAmount,s=void 0,!F.default.get("islogin")&&"ACCOUNT_LEDGER"!==e.props.walletType.type&&"ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=33;break}if(u=e.props.tronWeb(),c=e.props.account.tronWeb,t.prev=7,"ACCOUNT_LEDGER"!==e.props.walletType.type){t.next=17;break}return t.next=11,u.transactionBuilder.purchaseToken(a.ownerAddress,a.id+"",parseInt((i*n).toFixed(0)),e.props.walletType.address);case 11:return f=t.sent,t.next=14,(0,A.transactionResultManager)(f,u);case 14:m=t.sent,p=m.result,s=p;case 17:if("ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=26;break}return t.next=20,c.transactionBuilder.purchaseToken(a.ownerAddress,a.id+"",parseInt((i*n).toFixed(0)),c.defaultAddress.hex).catch(function(e){return!1});case 20:return h=t.sent,t.next=23,(0,A.transactionResultManager)(h,c);case 23:g=t.sent,b=g.result,s=b;case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(7);case 31:t.next=37;break;case 33:return t.next=35,v.Client.participateAsset(o.address,a.ownerAddress,a.id+"",parseInt((i*n).toFixed(0)))(l.key);case 35:y=t.sent,s=y.success;case 37:if(!s){t.next=43;break}return e.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:s,buyAmount:0}),e.props.reloadWallet(),t.abrupt("return",!0);case 43:return t.abrupt("return",!1);case 44:case"end":return t.stop()}},t,e,[[7,28]])}));return function(e){return t.apply(this,arguments)}}(),this.confirmTransaction=function(){var t=r(d.default.mark(function t(a){var n,r,l,o;return d.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,r=n.account,l=n.intl,o=e.state.buyAmount,e.setState({alert:p.default.createElement(w.default,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:l.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),t.next=5,e.submit(a);case 5:if(!t.sent){t.next=9;break}e.setState({alert:p.default.createElement(w.default,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},p.default.createElement("div",{className:"mt-5 token-sweet-alert"},p.default.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){e.setState({alert:null})}},p.default.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),p.default.createElement("h5",{style:{color:"black"}},(0,x.tu)("transaction")," ",(0,x.tu)("confirm")),p.default.createElement("span",null,(0,x.tu)("success_receive")," ",a.name," ",(0,x.tu)("tokens")),p.default.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){e.setState({alert:null})}},(0,x.tu)("OK"))))}),t.next=10;break;case 9:e.setState({alert:p.default.createElement(w.default,{danger:!0,title:"Error",onConfirm:function(){return e.setState({alert:null})}},(0,x.tu)("fail_transaction"))});case 10:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.customizedColumn=function(){var t=e.props.intl;return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:(0,E.upperFirst)(t.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"40%",render:function(e,t,n){return p.default.createElement("div",{className:"table-imgtext"},t.imgUrl?p.default.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==t.id?p.default.createElement("div",{className:"token-img-top"},p.default.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl}),p.default.createElement("i",null)):p.default.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl})):p.default.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},p.default.createElement("img",{style:{width:"42px",height:"42px"},src:a(134)})),p.default.createElement("div",null,p.default.createElement("h5",null,p.default.createElement(_.TokenLink,{name:t.name,id:t.id,namePlus:t.name+" ("+t.abbr+")",address:t.ownerAddress})),p.default.createElement("p",{style:{wordBreak:"break-all"}},t.description)))}},{title:"ID",render:function(e,t,a){return p.default.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:t.formatMessage({id:"fund_raised"}),render:function(e,t,a){return p.default.createElement("div",null,p.default.createElement(b.FormattedNumber,{value:t.participated/O.ONE_TRX,maximumFractionDigits:1})," TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:t.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e,t,a){return null===e&&(e=0),p.default.createElement("div",null,p.default.createElement(b.FormattedNumber,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table d-none d-sm-table-cell _text_nowrap"},{title:t.formatMessage({id:"end_time"}),dataIndex:"endTime",key:"endTime",align:"center",className:"ant_table _text_nowrap",render:function(e,t,a){return p.default.createElement("div",null,p.default.createElement(b.FormattedRelative,{value:t.endTime,units:"day"}))}},{title:t.formatMessage({id:"issuing_price"}),render:function(e,t,a){return p.default.createElement("div",null,p.default.createElement(b.FormattedNumber,{value:t.trxNum/t.num*Math.pow(10,t.precision)/O.ONE_TRX,maximumFractionDigits:6})," TRX")},align:"center",className:"ant_table"},{title:t.formatMessage({id:"participate"}),align:"center",render:function(t,a,n){return a.isBlack?p.default.createElement("button",{className:"btn btn-secondary btn-block btn-sm",disabled:!0},(0,x.tu)("participate")):a.endTime<new Date||100===a.issuedPercentage?p.default.createElement("span",{style:{fontWeight:"normal"}},(0,x.tu)("finish")):a.startTime>new Date?p.default.createElement("span",{style:{fontWeight:"normal"}},(0,x.tu)("not_started")):p.default.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return e.preBuyTokens(a)}},(0,x.tu)("participate"))},className:"ant_table"}]}},W={loadTokens:g.loadTokens,login:P.login,reloadWallet:R.reloadWallet};t.default=(0,h.connect)(s,W)((0,b.injectIntl)(X))},1512:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(58),s=n(i),u=a(56),c=n(u),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(89),a(55);var f=a(0),m=n(f),p=a(13),h=a(141),g=n(h),b=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.state.searchText;a.props.search(e)},a.onPressEnter=function(){(0,g.default)("#dropdownMenuButton").dropdown("toggle"),a.onSearch()},a.state={searchText:""},a}return o(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this;(0,g.default)(".dropdown").on("show.bs.dropdown",function(){setTimeout(function(){e.searchInput&&e.searchInput.focus()},100)})}},{key:"render",value:function(){var e=this;return m.default.createElement("span",{className:"dropdown"},m.default.createElement("span",{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},m.default.createElement("i",{className:"fa fa-filter ml-2"})),m.default.createElement("div",{className:"custom-filter-dropdown dropdown-menu","aria-labelledby":"dropdownMenuButton"},m.default.createElement(c.default,{ref:function(t){return e.searchInput=t},placeholder:"Search name",type:"text",className:"ant-input",value:this.state.searchText,onChange:this.onInputChange,onPressEnter:this.onPressEnter}),m.default.createElement(s.default,{type:"primary",onClick:this.onSearch},(0,p.tu)("search")),m.default.createElement(s.default,{className:"btn-secondary ml-1",onClick:this.onReset},(0,p.tu)("reset"))))}}]),t}(m.default.Component);t.default=b}});