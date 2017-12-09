webpackJsonp([2,0],{0:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=s(25),r=a(n),i=s(723),o=a(i),u=s(742),d=a(u),c=s(695),l=a(c),f=s(741),h=a(f);r.default.use(h.default),r.default.use(d.default),r.default.use(l.default);var p=s(725),v=s(730),m=s(728),j=s(729),y=s(731),_=[{path:"/",redirect:"/goodsclick"},{path:"/status",component:v},{path:"/goodsclick",component:p},{path:"/pay",component:m},{path:"/ship",component:j},{path:"/users_statistic",component:y}],g=new d.default({routes:_});new r.default({el:"#app",template:"<App/>",components:{App:o.default},router:g})},57:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.HTTP=void 0;var n=s(379),r=a(n);e.HTTP=r.default.create({baseURL:"http://private-e20da-visualization2.apiary-mock.com/"})},398:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(726),r=a(n),i=s(727),o=a(i),u=s(724),d=a(u);e.default={name:"app",components:{myHead:r.default,myNav:o.default,myFoot:d.default}}},399:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(59),r=a(n),i=s(57);e.default={data:function(){return{chart:null,xAxisData:this.xAxisData,yData:this.yData,errors:[]}},methods:{request:function(t,e){var s=this;i.HTTP.get(t).then(function(t){s.formatData(t.data),s.chart.setOption({xAxis:{data:s.xAxisData},yAxis:{},series:[{type:"bar",barWidth:25,data:s.yData}]}),s.chart.hideLoading()}).catch(function(t){s.errors.push(t)})},formatData:function(t){this.xAxisData=[],this.yData=[];var e;for(e=0;e<t.goods_list.length;e++)this.xAxisData.push(t.goods_list[e].goodsName),this.yData.push(t.goods_list[e].clickCount)},drawChart:function(t){this.chart=r.default.init(document.getElementById(t)),this.chart.setOption({title:{text:"商品热度表",x:"center"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},tooltip:{},legend:{data:["点击量"]}}),this.chart.showLoading({}),this.request("statistics/goods/top/visit/1")}},mounted:function(){var t=this;this.$nextTick(function(){t.drawChart("goodsclick");var e=t,s=null;window.onresize=function(){s&&clearTimeout(s),s=setTimeout(function(){e.drawChart("goodsclick")},100)}})}}},400:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(743);e.default={}},401:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:[{name:"用户信息统计",ad:"users_statistic"},{name:"商品点击一览",ad:"goodsclick"},{name:"订单状态一览",ad:"status"},{name:"支付方式占比",ad:"pay"},{name:"配送方式占比",ad:"ship"}]}}}},402:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(59),r=a(n),i=s(57);e.default={data:function(){return{chart:null,errors:[],value1:this.value1,value2:this.value2}},methods:{request:function(t,e){var s=this;i.HTTP.get(t).then(function(t){s.formatData(t.data),s.chart.setOption({series:[{type:"pie",radius:"55%",center:["50%","60%"],data:[{value:s.value1,name:"支付宝支付"},{value:s.value2,name:"微信支付"}]}]}),s.chart.hideLoading()}).catch(function(t){s.errors.push(t)})},formatData:function(t){this.value1=t.orderPayByAlipay,this.value2=t.orderPayByWeiXin},drawChart:function(t){this.chart=r.default.init(document.getElementById(t)),this.chart.setOption({title:{text:"支付方式占比",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{orient:"vertical",left:"left",data:["支付宝支付","微信支付"]}}),this.chart.showLoading({}),this.request("statistics/order/ratio/pay")}},mounted:function(){var t=this;this.$nextTick(function(){t.drawChart("pay");var e=t,s=null;window.onresize=function(){s&&clearTimeout(s),s=setTimeout(function(){e.drawChart("pay")},100)}})}}},403:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(59),r=a(n),i=s(57);e.default={data:function(){return{chart:null,errors:[],value1:this.value1,value2:this.value2}},methods:{request:function(t,e){var s=this;i.HTTP.get(t).then(function(t){s.formatData(t.data),s.chart.setOption({series:[{type:"pie",radius:"55%",center:["50%","60%"],data:[{value:s.value1,name:"顺丰配送"},{value:s.value2,name:"中通配送"}]}]}),s.chart.hideLoading()}).catch(function(t){s.errors.push(t)})},formatData:function(t){this.value1=t.orderShipByShunFeng,this.value2=t.orderShipByZhongTong},drawChart:function(t){this.chart=r.default.init(document.getElementById(t)),this.chart.setOption({title:{text:"配送方式占比",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{orient:"vertical",left:"left",data:["顺丰配送","中通配送"]}}),this.chart.showLoading({}),this.request("statistics/order/ratio/ship")}},mounted:function(){var t=this;this.$nextTick(function(){t.drawChart("ship");var e=t,s=null;window.onresize=function(){s&&clearTimeout(s),s=setTimeout(function(){e.drawChart("ship")},100)}})}}},404:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(59),r=a(n),i=s(57);e.default={data:function(){return{chart:null,value1:this.value1,value2:this.value2,value3:this.value3,value4:this.value4,value5:this.value5,errors:[]}},methods:{request:function(t,e){var s=this;i.HTTP.get(t).then(function(t){s.formatData(t.data),s.chart.setOption({xAxis:{data:["已取消订单","无效订单","未确认订单","已确认订单","已退货订单"]},yAxis:{},series:[{type:"bar",data:[s.value1,s.value2,s.value3,s.value4,s.value5]}]}),s.chart.hideLoading()}).catch(function(t){s.errors.push(t)})},formatData:function(t){this.value1=t.orderCancelled,this.value2=t.orderConfirmed,this.value3=t.orderInvalid,this.value4=t.orderNotConfirm,this.value5=t.orderReturned},drawChart:function(t){this.chart=r.default.init(document.getElementById(t)),this.chart.setOption({title:{text:"订单状态表",x:"center"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},tooltip:{},legend:{data:["点击量"]}}),this.chart.showLoading({}),this.request("statistics/order/ratio/status")}},mounted:function(){var t=this;this.$nextTick(function(){t.drawChart("status");var e=t,s=null;window.onresize=function(){s&&clearTimeout(s),s=setTimeout(function(){e.drawChart("status")},100)}})}}},405:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(59),r=a(n),i=s(57),o=s(2),u=a(o);e.default={data:function(){return{chart:null,chart2:null,chart3:null,history:null,time:"",date:"",users:{allUsers:0,usersBuied:0},week:[]}},watch:{users:function(t){this.users=t;var e=t.allUsers-t.usersBuied,s=t.usersBuied;this.chart.setOption({series:[{type:"pie",radius:"55%",center:["50%","60%"],data:[{value:e,name:"下单用户"},{value:s,name:"未下单用户"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),this.chart.hideLoading()},history:function(t){var e=t.month_list,s=e.map(function(t){return t.datetime}),a=e.map(function(t){return t.value});this.chart3.setOption({xAxis:[{data:s}],yAxis:[{splitLine:{show:!1}}],grid:[{bottom:"60%"}],series:[{type:"line",showSymbol:!1,data:a}]}),this.chart.hideLoading()}},methods:{updateTime:function(){var t=new Date;this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.date=this.zeroPadding(t.getFullYear(),4)+"年"+this.zeroPadding(t.getMonth()+1,2)+"月"+this.zeroPadding(t.getDate(),2)+"日 "+this.week[t.getDay()]},zeroPadding:function(t,e){for(var s="",a=0;a<e;a++)s+="0";return(s+t).slice(-e)},get_current_datetime:function(){var t=(0,u.default)().utcOffset(),e=u.default.utc(this.created_at).utcOffset(t),s=e.format("HH:mm:ss"),a=e.format("YYYY 年 MM 月 DD 日");this.time=s,this.mdy=a;var n=this;setTimeout(function(){n.get_current_datetime()},1e3)},request1:function(t){var e=this;i.HTTP.get(t).then(function(t){e.users=t.data}).catch(function(t){e.errors.push(t)})},request2:function(t){var e=this;i.HTTP.get(t).then(function(t){e.history=t.data}).catch(function(t){e.errors.push(t)})},formatData:function(t){this.xAxisData=[],this.yData=[];var e;for(e=0;e<t.goods_list.length;++e)this.xAxisData.push(t.goods_list[e].goods_name),this.yData.push(t.goods_list[e].clicked)},drawChart:function(t){this.chart=r.default.init(document.getElementById(t)),this.chart.setOption({title:{text:"用户购买率",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{orient:"vertical",left:"left",data:["下单用户","未下单用户"]}}),this.chart.showLoading({}),this.request1("statistics/users/ratio/buy")},drawHistory:function(t){this.chart3=r.default.init(document.getElementById(t));var e={visualMap:[{show:!1,type:"continuous",seriesIndex:0,min:0,max:400}],title:[{left:"center",text:"用户注册变化曲线"}],tooltip:{trigger:"axis"},xAxis:[{data:[]}],yAxis:[{splitLine:{show:!1}}],grid:[{bottom:"60%"}],series:[{type:"line",showSymbol:!1,data:[]}]};this.chart3.setOption(e),this.chart.showLoading({}),this.request2("statistics/users/history")}},mounted:function(){this.week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];setInterval(this.updateTime,1e3);this.updateTime(),this.drawChart("piechart"),this.drawHistory("historychart")}}},710:function(t,e){},711:function(t,e){},712:function(t,e){},713:function(t,e){},714:function(t,e){},715:function(t,e){},716:function(t,e){},717:function(t,e){},718:function(t,e){},720:function(t,e,s){function a(t){return s(n(t))}function n(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./af":219,"./af.js":219,"./ar":226,"./ar-dz":220,"./ar-dz.js":220,"./ar-kw":221,"./ar-kw.js":221,"./ar-ly":222,"./ar-ly.js":222,"./ar-ma":223,"./ar-ma.js":223,"./ar-sa":224,"./ar-sa.js":224,"./ar-tn":225,"./ar-tn.js":225,"./ar.js":226,"./az":227,"./az.js":227,"./be":228,"./be.js":228,"./bg":229,"./bg.js":229,"./bm":230,"./bm.js":230,"./bn":231,"./bn.js":231,"./bo":232,"./bo.js":232,"./br":233,"./br.js":233,"./bs":234,"./bs.js":234,"./ca":235,"./ca.js":235,"./cs":236,"./cs.js":236,"./cv":237,"./cv.js":237,"./cy":238,"./cy.js":238,"./da":239,"./da.js":239,"./de":242,"./de-at":240,"./de-at.js":240,"./de-ch":241,"./de-ch.js":241,"./de.js":242,"./dv":243,"./dv.js":243,"./el":244,"./el.js":244,"./en-au":245,"./en-au.js":245,"./en-ca":246,"./en-ca.js":246,"./en-gb":247,"./en-gb.js":247,"./en-ie":248,"./en-ie.js":248,"./en-nz":249,"./en-nz.js":249,"./eo":250,"./eo.js":250,"./es":253,"./es-do":251,"./es-do.js":251,"./es-us":252,"./es-us.js":252,"./es.js":253,"./et":254,"./et.js":254,"./eu":255,"./eu.js":255,"./fa":256,"./fa.js":256,"./fi":257,"./fi.js":257,"./fo":258,"./fo.js":258,"./fr":261,"./fr-ca":259,"./fr-ca.js":259,"./fr-ch":260,"./fr-ch.js":260,"./fr.js":261,"./fy":262,"./fy.js":262,"./gd":263,"./gd.js":263,"./gl":264,"./gl.js":264,"./gom-latn":265,"./gom-latn.js":265,"./gu":266,"./gu.js":266,"./he":267,"./he.js":267,"./hi":268,"./hi.js":268,"./hr":269,"./hr.js":269,"./hu":270,"./hu.js":270,"./hy-am":271,"./hy-am.js":271,"./id":272,"./id.js":272,"./is":273,"./is.js":273,"./it":274,"./it.js":274,"./ja":275,"./ja.js":275,"./jv":276,"./jv.js":276,"./ka":277,"./ka.js":277,"./kk":278,"./kk.js":278,"./km":279,"./km.js":279,"./kn":280,"./kn.js":280,"./ko":281,"./ko.js":281,"./ky":282,"./ky.js":282,"./lb":283,"./lb.js":283,"./lo":284,"./lo.js":284,"./lt":285,"./lt.js":285,"./lv":286,"./lv.js":286,"./me":287,"./me.js":287,"./mi":288,"./mi.js":288,"./mk":289,"./mk.js":289,"./ml":290,"./ml.js":290,"./mr":291,"./mr.js":291,"./ms":293,"./ms-my":292,"./ms-my.js":292,"./ms.js":293,"./my":294,"./my.js":294,"./nb":295,"./nb.js":295,"./ne":296,"./ne.js":296,"./nl":298,"./nl-be":297,"./nl-be.js":297,"./nl.js":298,"./nn":299,"./nn.js":299,"./pa-in":300,"./pa-in.js":300,"./pl":301,"./pl.js":301,"./pt":303,"./pt-br":302,"./pt-br.js":302,"./pt.js":303,"./ro":304,"./ro.js":304,"./ru":305,"./ru.js":305,"./sd":306,"./sd.js":306,"./se":307,"./se.js":307,"./si":308,"./si.js":308,"./sk":309,"./sk.js":309,"./sl":310,"./sl.js":310,"./sq":311,"./sq.js":311,"./sr":313,"./sr-cyrl":312,"./sr-cyrl.js":312,"./sr.js":313,"./ss":314,"./ss.js":314,"./sv":315,"./sv.js":315,"./sw":316,"./sw.js":316,"./ta":317,"./ta.js":317,"./te":318,"./te.js":318,"./tet":319,"./tet.js":319,"./th":320,"./th.js":320,"./tl-ph":321,"./tl-ph.js":321,"./tlh":322,"./tlh.js":322,"./tr":323,"./tr.js":323,"./tzl":324,"./tzl.js":324,"./tzm":326,"./tzm-latn":325,"./tzm-latn.js":325,"./tzm.js":326,"./uk":327,"./uk.js":327,"./ur":328,"./ur.js":328,"./uz":330,"./uz-latn":329,"./uz-latn.js":329,"./uz.js":330,"./vi":331,"./vi.js":331,"./x-pseudo":332,"./x-pseudo.js":332,"./yo":333,"./yo.js":333,"./zh-cn":334,"./zh-cn.js":334,"./zh-hk":335,"./zh-hk.js":335,"./zh-tw":336,"./zh-tw.js":336};a.keys=function(){return Object.keys(r)},a.resolve=n,t.exports=a,a.id=720},723:function(t,e,s){var a,n;s(713),a=s(398);var r=s(735);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=a},724:function(t,e,s){var a,n;s(715);var r=s(737);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-87a06d7a",t.exports=a},725:function(t,e,s){var a,n;s(714),a=s(399);var r=s(736);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-7f990d07",t.exports=a},726:function(t,e,s){var a,n;s(710),a=s(400);var r=s(732);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=a},727:function(t,e,s){var a,n;s(711),a=s(401);var r=s(733);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-4012f544",t.exports=a},728:function(t,e,s){var a,n;s(712),a=s(402);var r=s(734);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-49ed4263",t.exports=a},729:function(t,e,s){var a,n;s(718),a=s(403);var r=s(740);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-f443ffde",t.exports=a},730:function(t,e,s){var a,n;s(717),a=s(404);var r=s(739);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-f1fe60f2",t.exports=a},731:function(t,e,s){var a,n;s(716),a=s(405);var r=s(738);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-c1e3e6d8",t.exports=a},732:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"top-container"},[s("div",{staticClass:"top-bar clearfix"},[s("div",{staticClass:"topbar-nav"},[s("ul",{staticClass:"nav-wrap"},[s("li",{staticClass:"nav"},[t._v("后台数据可视化")])])])])])}]}},733:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"nav-list"}},[s("ul",{staticClass:"nav-left"},t._l(t.items,function(e,a){return s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/"+e.ad}},[t._v(t._s(e.name))])],1)}))])},staticRenderFns:[]}},734:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"pay"}})])}]}},735:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("my-head"),t._v(" "),s("my-nav"),t._v(" "),s("router-view",{staticClass:"main_content"}),t._v(" "),s("my-foot")],1)},staticRenderFns:[]}},736:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"goodsclick"}})])}]}},737:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("p",[t._v("Copyright © "),s("span",[t._v("SilentHusky")]),t._v(" 2017 ")])])}]}},738:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"test1"}},[s("el-row",{attrs:{id:"ani"}},[s("el-col",{attrs:{span:12}},[s("div",{attrs:{id:"clock"}},[s("p",{attrs:{id:"date"}},[t._v(t._s(t.date))]),t._v(" "),s("p",{attrs:{id:"time"}},[t._v(t._s(t.time))])]),t._v(" "),s("div",{attrs:{id:"clock"}},[s("p",{staticClass:"regt"},[t._v("注册用户总数："+t._s(t.users.allUsers))]),t._v(" "),s("p",{staticClass:"regnum"})]),t._v(" "),s("div",{attrs:{id:"clock"}},[s("p",{staticClass:"orderst"},[t._v("下单用户数："+t._s(t.users.usersBuied))]),t._v(" "),s("p",{staticClass:"ordersnum"})])]),t._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticStyle:{width:"500px",height:"300px"},attrs:{id:"piechart"}})])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("div",{staticStyle:{width:"1000px",height:"1000px"},attrs:{id:"historychart"}})])],1)],1)},staticRenderFns:[]}},739:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"status"}})])}]}},740:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"ship"}})])}]}}});
//# sourceMappingURL=app.9e17d723080c39f61ef1.js.map