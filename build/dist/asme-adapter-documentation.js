!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("d3"),require(void 0),require("d3chart")):"function"==typeof define&&define.amd?define(["React","d3",,"d3chart"],t):"object"==typeof exports?exports.AsmeAdapter=t(require("React"),require("d3"),require(void 0),require("d3chart")):e.AsmeAdapter=t(e.React,e.d3,e[void 0],e.d3chart)}(this,function(e,t,a,o){return webpackJsonpAsmeAdapter([0,2],[function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){return e=e.replace(/\s+/g,""),e=e.replace(/_+/g,""),e=e.toLowerCase()}function i(){var e=location.hash.replace("#/",""),t=b.filter(function(t){return r(t.title)===r(e)}),a=0===t.length?b[0]:t[0],i=function(e){function t(e){o(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.handleRouteChange=this.handleRouteChange.bind(this),this.state={selectedPage:a}}return n(t,e),s(t,[{key:"handleRouteChange",value:function(){var e=location.hash.replace("#/",""),t=b.filter(function(t){return r(t.title)===r(e)});t.length>0&&this.setState({selectedPage:t[0]})}},{key:"componentDidMount",value:function(){window.addEventListener("hashchange",this.handleRouteChange,!1)}},{key:"render",value:function(){var e=this,t=this.state.selectedPage;return l.createElement("div",null,l.createElement(p,null),l.createElement(h,null,l.createElement(u,null,l.createElement(f,null," ",b.map(function(t,a){return l.createElement(v,{key:a,current:t===e.state.selectedPage,title:t.title})})," ")," ")," ",l.createElement(t,null)," ")," ")}}]),t}(l.Component);l.render(l.createElement(i,null),document.getElementById("chart-goes-here"))}var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),c=function(e,t,a){for(var o=!0;o;){var n=e,r=t,i=a;s=l=c=void 0,o=!1,null===n&&(n=Function.prototype);var s=Object.getOwnPropertyDescriptor(n,r);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(n);if(null===l)return void 0;e=l,t=r,a=i,o=!0}},l=a(1),d=a(2);d.time.format("%Y-%m-%d").parse;a(3),a(7);var p=a(10),u=a(11),h=a(12),f=a(14),v=a(15),b=[a(16),a(20),a(32)];d.csv("data/testCereal.csv",function(e,t){return e.index=t,e},function(e,t){adapter.weaveInteractionPeer=new adapter.peer.WeaveJSInterface,WeaveAPI.globalHashMap.getObject("dataSource").setSessionState(t),i()})},function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t,a){var o=a(4);"string"==typeof o&&(o=[[e.id,o,""]]);a(6)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,a){t=e.exports=a(5)(),t.push([e.id,"body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px}.point{fill:#999;stroke:#fff}.point.selected{fill:red;fill-opacity:1}.node{fill:none;stroke:none}.brush .extent,.node{shape-rendering:crispEdges}.brush .extent{stroke:#fff;fill-opacity:.125}.selected{fill:#afa2dc;stroke:#2f225d}.axis{font:10px sans-serif}p{font:9pt sans-serif;margin:0 0 2px;padding:0}.axis line,.axis path{fill:none;stroke:#000;shape-rendering:crispEdges}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(o[r]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&o[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),e.push(i))}},e}},function(e,t,a){function o(e,t){for(var a=0;a<e.length;a++){var o=e[a],n=p[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(s(o.parts[r],t))}else{for(var i=[],r=0;r<o.parts.length;r++)i.push(s(o.parts[r],t));p[o.id]={id:o.id,refs:1,parts:i}}}}function n(e){for(var t=[],a={},o=0;o<e.length;o++){var n=e[o],r=n[0],i=n[1],s=n[2],c=n[3],l={css:i,media:s,sourceMap:c};a[r]?a[r].parts.push(l):t.push(a[r]={id:r,parts:[l]})}return t}function r(){var e=document.createElement("style"),t=f();return e.type="text/css",t.appendChild(e),e}function i(){var e=document.createElement("link"),t=f();return e.rel="stylesheet",t.appendChild(e),e}function s(e,t){var a,o,n;if(t.singleton){var s=b++;a=v||(v=r()),o=c.bind(null,a,s,!1),n=c.bind(null,a,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=i(),o=d.bind(null,a),n=function(){a.parentNode.removeChild(a),a.href&&URL.revokeObjectURL(a.href)}):(a=r(),o=l.bind(null,a),n=function(){a.parentNode.removeChild(a)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}function c(e,t,a,o){var n=a?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var r=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function l(e,t){var a=t.css,o=t.media;t.sourceMap;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function d(e,t){var a=t.css,o=(t.media,t.sourceMap);o&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var n=new Blob([a],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(n),r&&URL.revokeObjectURL(r)}var p={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=u(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0;e.exports=function(e,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h());var a=n(e);return o(a,t),function(e){for(var r=[],i=0;i<a.length;i++){var s=a[i],c=p[s.id];c.refs--,r.push(c)}if(e){var l=n(e);o(l,t)}for(var i=0;i<r.length;i++){var c=r[i];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete p[c.id]}}}};var y=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t,a){var o=a(8);"string"==typeof o&&(o=[[e.id,o,""]]);a(6)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,a){t=e.exports=a(5)(),t.push([e.id,"/*! normalize.css v3.0.2 | MIT License | git.io/normalize */aside table{border:1;border-spacing:1px;border-collapse:collapse;max-width:100%;margin-bottom:20px}aside table tbody>tr>td,aside table tbody>tr>th,aside table tfoot>tr>td,aside table tfoot>tr>th,aside table thead>tr>td,aside table thead>tr>th{padding:8px;line-height:1.42857;vertical-align:top;border-top:1px solid #ddd}a.button{background:transparent url("+a(9)+") 0 0 no-repeat;width:203px;height:5pc;padding-left:60px;color:#fff!important}a.button small{display:inline;font-size:13px;margin-top:15px}.jumbotron{background:#000;padding:0;color:#fff}.jumbotron a{color:#ff0}.top-spacing{padding-top:10px}.navbar{background-color:#000}.navbar a{color:#fff}.navbar-fixed-top{border:0}.sidebar{display:none}@media (min-width:768px){.sidebar{position:fixed;top:51px;bottom:0;left:0;z-index:1000;display:block;padding:20px;overflow-x:hidden;overflow-y:auto;background-color:#f5f5f5;border-right:1px solid #eee}}.nav-sidebar{margin-right:-21px;margin-bottom:20px;margin-left:-20px}.nav-sidebar>li>a{padding-right:20px;padding-left:20px}.nav-sidebar>.active a,.nav-sidebar>.active a:focus,.nav-sidebar>.active a:hover{color:#fff;background-color:#000}.main{padding:20px}@media (min-width:768px){.main{padding-right:40px;padding-left:40px}}.main .page-header{margin-top:0}",""])},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,a){"use strict";var o=a(1),n=o.createClass({displayName:"Nav",render:function(){return o.createElement("nav",{className:"navbar navbar-fixed-top"},o.createElement("div",{className:"container-fluid"},o.createElement("div",{className:"navbar-header"},o.createElement("a",{className:"navbar-brand",href:"index.html"},"As~Me Adapter"))))}});e.exports=n},function(e,t,a){"use strict";var o=a(1),n=o.createClass({displayName:"SideBar",render:function(){return o.createElement("div",{className:"col-sm-3 col-md-2 sidebar"},this.props.children)}});e.exports=n},function(e,t,a){"use strict";var o=a(1),n=a(13),r=o.createClass({displayName:"MainContainer",render:function(){return o.createElement("div",{className:"container-fluid",id:"MainContainer"},o.createElement(n,null,this.props.children))}});e.exports=r},function(e,t,a){"use strict";var o=a(1),n=o.createClass({displayName:"Row",propTypes:{title:o.PropTypes.string,anchor:o.PropTypes.string},render:function(){var e=this.props.anchor||this.props.title,t=this.props.title?o.createElement("h4",null,o.createElement("a",{id:e,href:"#"+e},this.props.title)):null;return o.createElement("div",{className:"row"},t,this.props.children)}});e.exports=n},function(e,t,a){"use strict";var o=a(1),n=o.createClass({displayName:"MenuGroup",render:function(){return o.createElement("ul",{className:"nav nav-sidebar"},this.props.children)}});e.exports=n},function(e,t,a){"use strict";var o=a(1),n=o.createClass({displayName:"MenuItem",propTypes:{current:o.PropTypes.bool.isRequired,title:o.PropTypes.string.isRequired},getDefaultProps:function(){return{active:!1}},render:function(){var e=this.props.current?"active":"";return o.createElement("li",{className:e},o.createElement("a",{href:"#/"+this.props.title},this.props.title))}});e.exports=n},function(e,t,a){"use strict";var o=a(1),n=a(17),r=a(13),i=a(18),s=o.createClass({displayName:"GettingStartedPage",statics:{title:"Getting Started"},render:function(){return o.createElement(n,{title:s.title},o.createElement(r,null,o.createElement(i,{colSpan:2},o.createElement("aside",{dangerouslySetInnerHTML:{__html:a(19)}}))))}});e.exports=s},function(e,t,a){"use strict";var o=a(1),n=o.createClass({displayName:"ContentSection",propTypes:{title:o.PropTypes.string.isRequired},render:function(){return o.createElement("div",{id:"ContentSection",className:"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"},o.createElement("h1",{className:"page-header"},this.props.title),this.props.children)}});e.exports=n},function(e,t,a){"use strict";var o=a(1),n=o.createClass({displayName:"Section",propTypes:{colSpan:o.PropTypes.number.isRequired,title:o.PropTypes.string},getDefaultProps:function(){return{colSpan:1}},render:function(){var e=this.props.className+" col-md-"+6*this.props.colSpan,t=this.props.title?o.createElement("h4",null,this.props.title):null;return o.createElement("div",{className:e},t,this.props.children)}});e.exports=n},function(e,t){e.exports='<h3>Installation</h3><pre><code class=language-sh>npm install https://github.com/as-me/Adapter.git --save\n</code></pre><p>edit the <code>index.html</code> to use the below</p><pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>script</span> <span class=hljs-attribute>type</span>=<span class=hljs-value>"text/javascript"</span> <span class=hljs-attribute>src</span>=<span class=hljs-value>"node_modules/asme-adapter/build/dist/asme-adapter.js"</span>&gt;</span><span class=undefined></span><span class=hljs-tag>&lt;/<span class=hljs-title>script</span>&gt;</span>\n</code></pre><p>instead of</p><pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-title>script</span> <span class=hljs-attribute>type</span>=<span class=hljs-value>"text/javascript"</span> <span class=hljs-attribute>src</span>=<span class=hljs-value>"//asme.github.io/Adapter/dist/asme-adapter.js"</span>&gt;</span><span class=undefined></span><span class=hljs-tag>&lt;/<span class=hljs-title>script</span>&gt;</span>\n</code></pre><p>You should be good to go</p>'},function(e,t,a){"use strict";var o=a(1);a(21);var n=a(17),r=a(13),i=a(18),s=a(22),c=o.createClass({displayName:"ScatterPlotPage",statics:{title:"ScatterPlot Chart"},render:function(){var e=o.createElement(s,null);return console.log(e),o.createElement(n,{title:c.title},o.createElement(r,null,o.createElement(i,{colSpan:2,className:"react-stockchart"},e)))}});e.exports=c},function(e,t){e.exports=a},function(e,t,a){"use strict";var o=a(1);a(23);a(21);var n=adapter.sessionTool.d3.ScatterPlotTool,r=o.createClass({displayName:"ScatterPlotChart",getInitialState:function(){return{width:800,height:400,top:5,bottom:100,right:20,left:70}},render:function(){var e=adapter.weaveInteractionPeer.requestHook("ScatterPlotTool",n,!1);e.createUI({top:this.state.top,bottom:this.state.bottom,right:this.state.right,left:this.state.left},{width:this.state.width,height:this.state.height},{onProbe:{showToolTip:!0,callback:function(e){adapter.weaveInteractionPeer.activeHook=this,adapter.weaveInteractionPeer.doProbe(e)}},onSelect:{callback:function(e){adapter.weaveInteractionPeer.activeHook=this,adapter.weaveInteractionPeer.doSelection(e)}}}),e.sessionData.xAxis.value="name",e.sessionData.yAxis.value="fat";var t=adapter.weaveInteractionPeer.requestHook("ScatterPlotTool2",n,!1);return t.createUI({top:this.state.top,bottom:this.state.bottom,right:this.state.right,left:this.state.left},{width:this.state.width,height:this.state.height},{onProbe:{showToolTip:!0,callback:function(e){adapter.weaveInteractionPeer.activeHook=this,adapter.weaveInteractionPeer.doProbe(e)}},onSelect:{callback:function(e){adapter.weaveInteractionPeer.activeHook=this,adapter.weaveInteractionPeer.doSelection(e)}}}),t.sessionData.xAxis.value="name",t.sessionData.yAxis.value="protein",o.createElement("div",{className:"App"},e.ui,t.ui)}});e.exports=r},function(e,t,a){"use strict";a(24),t.AdapterInterface=a(25),t.hook={},t.hook.C3Hook=a(26),t.hook.D3Hook=a(27),t.peer={},t.peer.WeaveJSPeer=a(28),t.components={},t.components.D3={},t.components.D3.ScatterPlotTool=a(29)},function(e,t,a){"use strict";a(21),"undefined"==typeof window?(void 0).adapter=(void 0).adapter||{}:window.adapter=window.adapter||{},"undefined"==typeof window?(void 0).adapter.sessionData=(void 0).adapter.sessionData||{}:window.adapter.sessionData=window.adapter.sessionData||{},function(){function e(){Object.defineProperty(this,"dataSource",{value:WeaveAPI.globalHashMap.requestObject("dataSource",weavecore.LinkableVariable)})}var t=e.prototype;t.getData=function(){return this.dataSource.getSessionState()},t.getSessionStateValue=function(){return{dataSource:this.dataSource.getSessionState()}},adapter.sessionData.GlobalData=new e}()},function(e,t){"use strict";"undefined"==typeof window?(void 0).adapter=(void 0).adapter||{}:window.adapter=window.adapter||{},function(){function e(){}var t=e.prototype;t.doSelection=function(e){},t.doProbe=function(e){},t.setData=function(){},t.getData=function(){},adapter.Interface=e}()},function(e,t){"use strict";"undefined"==typeof window?(void 0).adapter.hook=(void 0).adapter.hook||{}:window.adapter.hook=window.adapter.hook||{},function(){function e(e){adapter.Interface.call(this),this.chart=e}e.prototype=new adapter.Interface,e.prototype.constructor=e;var t=e.prototype;t.doSelection=function(e){if(void 0!==e?e.constructor!==Array&&console.log("Keys has to be an array "):console.log("keys(Array)  is required"),e.length>0){var t=e.map(function(e){return e.constructor===String?e=Number(e):e});this.chart.select(this.chart.columns,t,!0)}else this.chart.unselect()},adapter.hook.C3Interface=e}()},function(e,t){"use strict";"undefined"==typeof window?(void 0).adapter.hook=(void 0).adapter.hook||{}:window.adapter.hook=window.adapter.hook||{},function(){function e(e){adapter.Interface.call(this),this.chart=e,this.dataSource}e.prototype=new adapter.Interface,e.prototype.constructor=e;var t=e.prototype;t.doSelection=function(e){this.chart.select(e)},t.doProbe=function(e){this.chart.probe(e)},t.setData=function(e,t){this.dataSource=e,this.chart.renderChart(t)},adapter.hook.D3Interface=e}()},function(e,t,a){"use strict";a(21),"undefined"==typeof window?(void 0).adapter.peer=(void 0).adapter.peer||{}:window.adapter.peer=window.adapter.peer||{},function(){function e(){adapter.Interface.call(this),this.activeTool=null,Object.defineProperty(this,"sessionable",{value:!0}),Object.defineProperty(this,"probeKeys",{value:WeaveAPI.globalHashMap.requestObject("probeKeys",weavecore.LinkableVariable,!1)}),Object.defineProperty(this,"selectionKeys",{value:WeaveAPI.globalHashMap.requestObject("selectionKeys",weavecore.LinkableVariable,!1)}),Object.defineProperty(this,"hooks",{value:WeaveAPI.globalHashMap.requestObject("hooks",weavecore.LinkableHashMap,!1)}),this.selectionKeys.addImmediateCallback(this,t.bind(this)),this.probeKeys.addImmediateCallback(this,a.bind(this))}function t(){var e=this.selectionKeys.getSessionState(),t=this.hooks.getObjects();t.forEach(function(t,a){t!=this.activeTool?t.hook.doSelection(e):this.activeTool=null}.bind(this))}function a(){var e=this.probeKeys.getSessionState(),t=this.hooks.getObjects();t.forEach(function(t,a){t!=this.activeTool?t.hook.doProbe(e):this.activeTool=null}.bind(this))}e.prototype=new adapter.Interface,e.prototype.constructor=e;var o=e.prototype;o.doSelection=function(e){this.selectionKeys.setSessionState(e)},o.doProbe=function(e){this.probeKeys.setSessionState(e)},o.probeCallback=function(e,t){this.activeTool=t,this.doProbe(e)},o.selectionCallback=function(e,t){this.activeTool=t,this.doSelection(e)},o.requestHook=function(e,t){return this.hooks.requestObject(e,t,!1)},o.deleteHook=function(e){return this.hooks.removeObject(e)},o.loadSessionState=function(){},adapter.peer.WeaveJSInterface=e}()},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var n=a(1),r=o(n),i=a(30),s=o(i);a(21),"undefined"==typeof window?(void 0).adapter=(void 0).adapter||{}:window.adapter=window.adapter||{},"undefined"==typeof window?(void 0).adapter.sessionData=(void 0).adapter.sessionData||{}:window.adapter.sessionData=window.adapter.sessionData||{},function(){function e(){Object.defineProperty(this,"sessionable",{value:!0}),Object.defineProperty(this,"ns",{value:"adapter.sessionData"}),Object.defineProperty(this,"xAxis",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new weavecore.LinkableString)}),Object.defineProperty(this,"yAxis",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new weavecore.LinkableString("yAxis"))})}Object.defineProperty(e,"NS",{value:"adapter.sessionData"}),Object.defineProperty(e,"CLASS_NAME",{value:"ScatterPlotData"});var t=e.prototype;t.getSessionStateValue=function(){return{xAxis:this.xAxis.value,yAxis:this.yAxis.value}},t.getXAxisValue=function(){return{xAxis:this.xAxis.value}},t.getYAxisValue=function(){return{yAxis:this.yAxis.value}},adapter.sessionData.ScatterPlotData=e}(),"undefined"==typeof window?(void 0).adapter.sessionTool=(void 0).adapter.sessionTool||{}:window.adapter.sessionTool=window.adapter.sessionTool||{},"undefined"==typeof window?(void 0).adapter.sessionTool.d3=(void 0).adapter.sessionTool.d3||{}:window.adapter.sessionTool.d3=window.adapter.sessionTool.d3||{},function(){function e(){Object.defineProperty(this,"sessionable",{value:!0}),Object.defineProperty(this,"ns",{value:"adapter.sessionTool.d3"}),Object.defineProperty(this,"sessionData",{value:WeaveAPI.SessionManager.registerLinkableChild(this,new adapter.sessionData.ScatterPlotData)}),Object.defineProperty(this,"chart",{value:new d3Chart.Scatterplot}),Object.defineProperty(this,"hook",{value:new adapter.hook.D3Interface(this.chart)})}Object.defineProperty(e,"NS",{value:"adapter.sessionTool.d3"}),Object.defineProperty(e,"CLASS_NAME",{value:"ScatterPlotTool"});var t=e.prototype;t.createUI=function(e,t,a){console.log("createUI"),this.ui||Object.defineProperty(this,"ui",{value:r["default"].createElement(s["default"],{sessionData:this.sessionData,top:e.top,bottom:e.bottom,left:e.left,right:e.right,width:t.width,height:t.height,onProbe:a.onProbe,onSelect:a.onSelect,chart:this.chart})})},adapter.sessionTool.d3.ScatterPlotTool=e}()},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),s=function(e,t,a){for(var o=!0;o;){var n=e,r=t,i=a;s=l=c=void 0,o=!1,null===n&&(n=Function.prototype);var s=Object.getOwnPropertyDescriptor(n,r);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(n);if(null===l)return void 0;e=l,t=r,a=i,o=!0}};a(31);var c=a(1),l=o(c),d=function(e){function t(e){n(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.sessionData=e.sessionData,this.chart=e.chart,this._setReactState=this._setReactState.bind(this)}return r(t,e),i(t,[{key:"componentDidMount",value:function(){var e={container:l["default"].findDOMNode(this),margin:{top:this.props.top,bottom:this.props.bottom,left:this.props.left,right:this.props.right},size:{width:this.props.width,height:this.props.height},columns:{x:this.sessionData.xAxis.value,y:this.sessionData.yAxis.value,key:"name"},interactions:{onProbe:this.props.onProbe,onSelect:this.props.onSelect}},t=WeaveAPI.globalHashMap.getObject("dataSource").getSessionState();WeaveAPI.globalHashMap.getObject("dataSource").addGroupedCallback(this,this._setReactState),console.log(this,this.props),this.chart.create(e),this.chart.renderChart(t),this.sessionData.xAxis.addGroupedCallback(this,this._setReactState),this.sessionData.yAxis.addGroupedCallback(this,this._setReactState)}},{key:"componentDidUpdate",value:function(e,t){this.chart.setXAttribute(this.sessionData.xAxis.value),this.chart.setYAttribute(this.sessionData.yAxis.value)}},{key:"componentWillUnmount",value:function(){this.sessionData.xAxis.removeCallback(this._setReactState),this.sessionData.yAxis.removeCallback(this._setReactState),WeaveAPI.globalHashMap.getObject("dataSource").removeCallback(this._setReactState)}},{key:"_setReactState",value:function(){this.setState(this.sessionData.getSessionStateValue())}},{key:"render",value:function(){return l["default"].createElement("div",{className:"Chart"}," ")}}]),t}(l["default"].Component);e.exports=d},function(e,t){e.exports=o},function(e,t,a){"use strict";var o=a(1),n=a(17),r=a(13),i=a(18),s=o.createClass({displayName:"ComingSoonPage",statics:{title:"Coming soon..."},render:function(){return o.createElement(n,{title:s.title},o.createElement(r,null,o.createElement(i,{colSpan:2},o.createElement("aside",{dangerouslySetInnerHTML:{__html:a(33)}}))))}});e.exports=s},function(e,t){e.exports="<h4>C3</h4><ul><li>ScatterPlot</li><li>BarChart</li></ul><h4>D3Chart</h4><ul><li><del>Scatterplot</del></li><li>Barchart</li></ul><h4>Other Libraries</h4><ul><li>NVD3</li><li>HighChart</li></ul>"}])});
//# sourceMappingURL=asme-adapter-documentation.js.map
