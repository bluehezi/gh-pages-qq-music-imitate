webpackJsonp([0],[,,,function(t,s,e){"use strict";function a(t,s){/(y+)/g.test(s)&&(s=s.replace(RegExp.$1,(""+t.getFullYear()).substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in e)new RegExp("("+a+")").test(s)&&(s=s.replace(RegExp.$1,("00"+e[a]).substring((""+e[a]).length)));return s}s.a=a},function(t,s,e){"use strict";var a=e(46),i=e.n(a);window.$=i.a,window.jQuery=i.a,s.a=i.a},function(t,s,e){"use strict";s.a={baseApiUrl:"http://route.showapi.com",appid:"37350",secret:"b5550ab6050b47d89607f287a42cd682",ranking:"/213-4",search:"/213-1",lyric:"/213-2"}},function(t,s,e){"use strict";e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i});var a="AJAX_JSONP_RANKING",i="AJAX_JSONP_SEARCH"},,,,,,function(t,s,e){e(43);var a=e(0)(e(25),e(55),null,null);t.exports=a.exports},function(t,s,e){"use strict";var a=e(1),i=e(58),n=e(49),r=e.n(n),o=e(48),c=e.n(o),l=e(50),u=e.n(l);a.a.use(i.a),s.a=new i.a({routes:[{path:"/",redirect:{name:"recommend"}},{path:"/recommend",name:"recommend",component:r.a},{path:"/search",name:"search",component:u.a},{path:"/ranking",name:"ranking",component:c.a}]})},function(t,s,e){"use strict";var a=e(1),i=e(60),n=e(17),r=e(19),o=e(18);a.a.use(i.a),s.a=new i.a.Store({state:{ranking:{},searchResult:null,slideShowBean:[{special:"http://y.qq.com/w/album.html?albummid=0032EblP0FOvUt&ADTAG=myqq&from=myqq&channel=10007100",img:"https://y.gtimg.cn/music/photo_new/T003R720x288M000001f28yN3VSdEO.jpg?max_age=2592000&max_age=2592000"},{special:"http://y.qq.com/w/album.html?albummid=001stRLN16lYgR&ADTAG=myqq&from=myqq&channel=10007100",img:"https://y.gtimg.cn/music/photo_new/T003R720x288M0000036SziY1G1BSV.jpg?max_age=2592000&max_age=2592000"},{special:"https://y.qq.com/msa/218/0_3076.html?ADTAG=myqq&from=myqq&channel=10007100",img:"https://y.gtimg.cn/music/photo_new/T003R720x288M0000028XHBK3yheh3.jpg?max_age=2592000&max_age=2592000"},{special:"http://y.qq.com/w/album.html?albummid=003OKlqw3H7j0R&ADTAG=myqq&from=myqq&channel=10007100",img:"https://y.gtimg.cn/music/photo_new/T003R720x288M000002SwJjo2H6SBa.jpg?max_age=2592000&max_age=2592000"},{special:"https://y.qq.com/live/zhibo/0508chenweiting.html?ADTAG=myqq&from=myqq&channel=10007100",img:"https://y.gtimg.cn/music/photo_new/T003R720x288M000004RTXy31BexGo.jpg?max_age=2592000&max_age=2592000"}]},getters:o,actions:n,mutations:r.a})},function(t,s,e){e(42);var a=e(0)(e(20),e(54),null,null);t.exports=a.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(1),i=e(15),n=e.n(i),r=e(13),o=e(14);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:n.a}})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(4),i=e(6);e.d(s,"ajaxJsonpRanking",function(){return n}),e.d(s,"ajaxJsonpSearch",function(){return r});var n=function(t,s){a.a.ajax(s).then(function(e,a,n){0===e.showapi_res_code&&e.showapi_res_body&&t.commit(i.a,{body:e.showapi_res_body,id:s.data.topid})}).catch(function(t){console.log(t)})},r=function(t,s){a.a.ajax(s).then(function(s,e,a){0===s.showapi_res_code&&s.showapi_res_body&&t.commit(i.b,s.showapi_res_body)}).catch(function(t){console.log(t)})}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),e.d(s,"getRanking",function(){return a}),e.d(s,"getSlideShowBean",function(){return i}),e.d(s,"getSearchResult",function(){return n});var a=function(t){return t.ranking},i=function(t){return t.slideShowBean},n=function(t){return t.searchResult}},function(t,s,e){"use strict";var a,i=e(27),n=e.n(i),r=e(6),o=e(1);s.a=(a={},n()(a,r.a,function(t,s){o.a.set(t.ranking,s.id,s.body)}),n()(a,r.b,function(t,s){t.searchResult=s}),a)},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app",data:function(){return{tos:[{name:"recommend",title:"推荐"},{name:"ranking",title:"排行榜"},{name:"search",title:"搜索"}]}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(3),i=e(5),n=e(51),r=e.n(n);s.default={name:"ranking",data:function(){return{topIds:{3:"欧美",5:"内地",6:"港台",16:"韩国",17:"日本",18:"民谣",19:"摇滚",23:"销量",26:"热歌"},currentPagebean:null,currentTitle:""}},created:function(){for(var t in this.topIds)this.$store.dispatch("ajaxJsonpRanking",{url:i.a.baseApiUrl+i.a.ranking,type:"POST",dataType:"jsonp",jsonp:"jsonpcallback",data:{showapi_appid:i.a.appid,showapi_sign:i.a.secret,showapi_timestamp:e.i(a.a)(new Date,"yyyyMMddhhmmss"),topid:t}})},computed:{getRanking:function(){return this.$store.getters.getRanking}},components:{songListShow:r.a},methods:{showSongList:function(t){this.$store.getters.getRanking[t]&&(this.currentTitle=this.topIds[t],this.currentPagebean=this.$store.getters.getRanking[t].pagebean,this.$refs.songlist.show())}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(4);s.default={name:"recommend",data:function(){return{activeIndex:1,timerInterval:null,picWidth:0,touched:!1,minMoveX:0,startX:-1}},mounted:function(){this.picWidth=parseInt(e.i(a.a)(".slide-item").css("width")),this.minMoveX=this.picWidth/3,e.i(a.a)(this.$refs.slidewrapper).css("transform","translateX("+-this.picWidth+"px)"),this.addTransition(),e.i(a.a)(".point-item").eq(0).addClass("active"),this.timerInterval=setInterval(this.intervalFunc,2e3)},methods:{intervalFunc:function(){this.next()},addTransition:function(){e.i(a.a)(this.$refs.slidewrapper).addClass("transition")},removeTransition:function(){e.i(a.a)(this.$refs.slidewrapper).removeClass("transition")},toTransform:function(t){e.i(a.a)(this.$refs.slidewrapper).css("transform","translateX("+t+"px)")},next:function(){++this.activeIndex,e.i(a.a)(".point-item").removeClass("active"),6===this.activeIndex?e.i(a.a)(".point-item").eq(0).addClass("active"):0===this.activeIndex?e.i(a.a)(".point-item").eq(4).addClass("active"):e.i(a.a)(".point-item").eq(this.activeIndex-1).addClass("active"),this.toTransform(-this.activeIndex*this.picWidth)},prev:function(){--this.activeIndex,e.i(a.a)(".point-item").removeClass("active"),0===this.activeIndex?e.i(a.a)(".point-item").eq(4).addClass("active"):6===this.activeIndex?e.i(a.a)(".point-item").eq(0).addClass("active"):e.i(a.a)(".point-item").eq(this.activeIndex-1).addClass("active"),this.toTransform(-this.activeIndex*this.picWidth)},transitionend:function(){var t=this;this.activeIndex>0&&this.activeIndex<6||(this.activeIndex>=6&&(this.activeIndex=1),this.activeIndex<=0&&(this.activeIndex=5),this.removeTransition(),this.toTransform(375*-this.activeIndex),setTimeout(function(){t.addTransition()}))},touchstart:function(t){this.removeTransition(),this.activeIndex>=6&&(this.activeIndex=1),this.activeIndex<=0&&(this.activeIndex=5),this.toTransform(-this.activeIndex*this.picWidth),clearInterval(this.timerInterval),this.startX=t.changedTouches[0].clientX},touchmove:function(t){-1===this.startX&&(this.startX=t.changedTouches[0].clientX);var s=t.changedTouches[0].clientX,e=s-this.startX;this.toTransform(-this.activeIndex*this.picWidth+e)},touchend:function(t){var s=t.changedTouches[0].clientX;Math.abs(s-this.startX)>this.minMoveX&&(s-this.startX>0?this.activeIndex--:this.activeIndex++),this.startX=-1,e.i(a.a)(".point-item").removeClass("active"),6===this.activeIndex?e.i(a.a)(".point-item").eq(0).addClass("active"):0===this.activeIndex?e.i(a.a)(".point-item").eq(4).addClass("active"):e.i(a.a)(".point-item").eq(this.activeIndex-1).addClass("active"),this.addTransition(),this.toTransform(-this.activeIndex*this.picWidth),this.timerInterval=setInterval(this.intervalFunc,3e3)}},computed:{slideShowBean:function(){return this.$store.getters.getSlideShowBean}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(5),i=e(3),n=e(6),r=e(12),o=e.n(r);s.default={name:"search",data:function(){return{boxFocus:!1,tips:["金曲捞","东京铁塔的幸福","白山茶 陈雪凝固","思念是一把刀","志明与春娇","刚好遇见你","春娇救志明","一人饮酒醉","勉为其难"],currentSong:{}}},methods:{toFocus:function(){this.boxFocus=!0},cancelFocus:function(){this.boxFocus=!1},search:function(t){if(13===t.keyCode){var s=this;this.$store.dispatch("ajaxJsonpSearch",{url:a.a.baseApiUrl+a.a.search,type:"POST",dataType:"jsonp",jsonp:"jsonpcallback",data:{showapi_appid:a.a.appid,showapi_sign:a.a.secret,showapi_timestamp:e.i(i.a)(new Date,"yyyyMMddhhmmss"),keyword:s.$refs.searchvalue.value}})}},toInput:function(t){this.$refs.searchvalue.value=t},toSongPage:function(t){this.currentSong=t,this.$refs.songpage.toShow()}},computed:{getSearchResult:function(){return this.$store.getters.getSearchResult}},watch:{boxFocus:function(){this.$store.commit(n.b,null)}},deactivated:function(){this.boxFocus?this.boxFocus=!1:this.$store.commit(n.b,null)},components:{songPage:o.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(28),i=e.n(a),n=e(12),r=e.n(n);s.default={props:{pagebean:{type:Object,default:function(){return{}}},title:{type:String,default:""}},data:function(){return{showStatus:!1,scroll:null,currentSong:{}}},methods:{show:function(){this.showStatus=!0,document.body.style.overflow="hidden"},toClose:function(t){t._constructed&&(this.showStatus=!1,document.body.style.overflow="scroll")},toSongPage:function(t,s){s._constructed&&(this.currentSong=t,this.$refs.song.toShow())}},updated:function(){var t=this;this.$nextTick(function(){t.scroll||(t.scroll=new i.a(t.$refs._songlistshow,{scrollY:!0,click:!0,bounce:!1}),t.scroll.refresh())})},components:{songPage:r.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(4),i=e(5),n=e(3);s.default={props:{song:{type:Object,default:function(){return{}}}},data:function(){return{showStatus:!1,status:!1,songLyric:"",currentLyricId:"",num:0}},methods:{keydown:function(t){console.log(t.keyCode)},toShow:function(){this.showStatus=!0,document.body.style.overflow="hidden",this.num=0,this.$refs.maskprocess&&(this.$refs.maskprocess.style.width="0%")},toClose:function(){this.showStatus=!1,document.body.style.overflow="auto",this.$refs.player.pause(),this.num=0,this.$refs.maskprocess&&(this.$refs.maskprocess.style.width="0%")},toggleStatus:function(){this.status=!this.status,this.status?this.$refs.player.play():this.$refs.player.pause()},unescapeHTML:function(t){var s=document.createElement("div");s.innerHTML=t+"",this.songLyric=s.innerHTML.replace(/\s+/g,"")},paly:function(){this.status=!0},pause:function(){this.status=!1},timeupdate:function(){if(this.$refs.player){var t=parseInt(this.$refs.player.currentTime);this.$refs.maskprocess.style.width=t/this.$refs.player.duration*100+"%";var s=parseInt(t/60),e=t%60;s=("00"+s).substring((""+s).length),e=("00"+e).substring((""+e).length),this.$refs.timestart.innerHTML=s+":"+e,document.getElementById(t)&&(this.currentLyricId=t);var a=document.querySelectorAll(".lyric-item");a[4+this.num]&&a[4+this.num].id===t+""&&(++this.num,this.$refs.lyricList.style.top=-46*this.num+"px")}},ended:function(){this.num=0,this.$refs.lyricList.style.top="0px",this.status=!1,this.$refs.maskprocess.style.width="0%"},loadeddata:function(){var t=parseInt(this.$refs.player.duration),s=parseInt(t/60),e=t%60;s=("00"+s).substring((""+s).length),e=("00"+e).substring((""+e).length),this.$refs.timeend.innerHTML=s+":"+e}},computed:{getSongLyricList:function(){for(var t=this.songLyric.split("["),s=[],e=0;e<t.length;e++){var a=t[e].split("]"),i=0,n=a[0].split("."),r=n[0].split(":");i=60*r[0]+1*r[1],a[1]&&s.push({id:i,lyric:a[1]})}return s}},created:function(){},mounted:function(){},updated:function(){this.$refs.bg&&(this.$refs.bg.style.backgroundImage="url("+this.song.albumpic_big+")")},watch:{showStatus:function(t,s){if(t&&this.song.songid){var r=this;a.a.ajax({type:"post",url:i.a.baseApiUrl+i.a.lyric,dataType:"jsonp",jsonp:"jsonpcallback",async:!0,data:{showapi_appid:i.a.appid,showapi_sign:i.a.secret,showapi_timestamp:e.i(n.a)(new Date,"yyyyMMddhhmmss"),musicid:r.song.songid}}).then(function(t,s){t.showapi_res_code||r.unescapeHTML(t.showapi_res_body.lyric)}).catch(function(t){console.log(t)})}}}}},,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){t.exports=e.p+"static/img/avatar.3ef12c3.jpg"},function(t,s,e){e(41);var a=e(0)(e(21),e(53),null,null);t.exports=a.exports},function(t,s,e){e(40);var a=e(0)(e(22),e(52),null,null);t.exports=a.exports},function(t,s,e){e(44);var a=e(0)(e(23),e(56),null,null);t.exports=a.exports},function(t,s,e){e(45);var a=e(0)(e(24),e(57),null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"recommend"}},[e("div",{staticClass:"wrapper"},[e("ul",{ref:"slidewrapper",staticClass:"slide-wrapper",on:{transitionend:t.transitionend,touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[e("li",{staticClass:"slide-item"},[e("a",{attrs:{href:t.slideShowBean[t.slideShowBean.length-1].special}},[e("img",{attrs:{src:t.slideShowBean[t.slideShowBean.length-1].img,alt:"",width:"100%"}})])]),t._v(" "),t._l(t.slideShowBean,function(t){return e("li",{staticClass:"slide-item"},[e("a",{attrs:{href:t.special}},[e("img",{attrs:{src:t.img,alt:"",width:"100%"}})])])}),t._v(" "),e("li",{staticClass:"slide-item"},[e("a",{attrs:{href:t.slideShowBean[0].special}},[e("img",{attrs:{src:t.slideShowBean[0].img,alt:"",width:"100%"}})])])],2),t._v(" "),e("ul",{staticClass:"points-wrapper"},t._l(t.slideShowBean,function(t,s){return e("li",{staticClass:"point-item"})}))]),t._v(" "),t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h3",{staticClass:"title"},[t._v("电台")]),t._v(" "),e("div",{staticClass:"radio_cards"},[e("div",{staticClass:"card"},[e("div",{staticClass:"img_wrapper"},[e("img",{staticStyle:{width:"100%"},attrs:{src:"https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000&max_age=2592000",alt:""}}),t._v(" "),e("span",{staticClass:"icon icon_play"})]),t._v(" "),e("span",{staticClass:"title"},[t._v("一热一首招牌歌")])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"img_wrapper"},[e("img",{staticStyle:{width:"100%"},attrs:{src:"https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000&max_age=2592000",alt:""}}),t._v(" "),e("span",{staticClass:"icon icon_play"})]),t._v(" "),e("span",{staticClass:"title"},[t._v("热歌")])])]),t._v(" "),e("h3",{staticClass:"title"},[t._v("热门歌单")]),t._v(" "),e("div",{staticClass:"message"},[e("a",{staticClass:"go",attrs:{href:"#"}},[t._v("去客户端发现更多更好的音乐>>>")]),t._v(" "),e("a",{staticClass:"go",attrs:{href:"http://y.qq.com/?ADTAG=myqq&nomobile=1#type=index"}},[t._v("查看电脑端网页")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-logo"})])}]}},function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"ranking"}},[t.getRanking?e("ul",{staticClass:"ranking-wrapper"},t._l(t.getRanking,function(s,a){return-1!==s.ret_code?e("li",{key:a,staticClass:"ranking-item",on:{click:function(s){t.showSongList(a)}}},[e("div",{staticClass:"wrapper"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"content"},[e("h3",{staticClass:"title"},[t._v(t._s(t.topIds[a]))]),t._v(" "),e("ul",{staticClass:"threesong"},t._l(s.pagebean.songlist,function(s,a){return a<3?e("li",{staticClass:"song-item"},[t._v(t._s(s.songname)+" "),e("span",{staticClass:"singername"},[t._v(" - "+t._s(s.singername))])]):t._e()}))])])]):t._e()})):t._e(),t._v(" "),e("songListShow",{ref:"songlist",attrs:{pagebean:t.currentPagebean,title:t.currentTitle}})],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"avatar"},[a("img",{staticStyle:{width:"100%"},attrs:{src:e(47),alt:""}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),e("nav",{staticClass:"mob_nav"},t._l(t.tos,function(s,a){return e("router-link",{key:a,staticClass:"nav-item",attrs:{to:s}},[t._v(t._s(s.title))])})),t._v(" "),e("div",{staticClass:"view"},[e("keep-alive",[e("router-view")],1)],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"mob_header"},[e("i",{staticClass:"music_logo"}),t._v(" "),e("a",{staticClass:"btn_download",attrs:{href:"http://dldir1.qq.com/music/clntupate/QQMusic72282.apk",download:""}},[t._v("下载app")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.showStatus?e("div",{ref:"songpage",attrs:{id:"songpage"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"img_avatar",attrs:{src:t.song.albumpic_big,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("span",{staticClass:"name"},[t._v(t._s(t.song.songname))]),t._v(" "),e("span",{staticClass:"singername"},[t._v(t._s(t.song.singername))])]),t._v(" "),e("span",{staticClass:"play-status",class:{play:t.status,pause:!t.status},on:{click:t.toggleStatus}})]),t._v(" "),e("div",{staticClass:"lyric"},[e("ul",{ref:"lyricList",staticClass:"lyricList"},t._l(t.getSongLyricList,function(s){return e("li",{staticClass:"lyric-item",class:{active:t.currentLyricId===s.id},attrs:{id:s.id}},[t._v(t._s(s.lyric))])}))]),t._v(" "),e("div",{staticClass:"control"},[e("audio",{ref:"player",attrs:{src:t.song.m4a||t.song.url,id:"player"},on:{pause:t.pause,timeupdate:t.timeupdate,ended:t.ended,loadeddata:t.loadeddata}}),t._v(" "),e("div",{staticClass:"options"},[e("i",{staticClass:"back",on:{click:t.toClose}},[t._v("back")]),t._v(" "),e("i",{staticClass:"favorite"})]),t._v(" "),e("div",{staticClass:"process"},[e("span",{ref:"timestart",staticClass:"time_start"},[t._v("00:00")]),t._v(" "),e("div",{staticClass:"bg_process"},[e("div",{ref:"maskprocess",staticClass:"mask_process"})]),t._v(" "),e("span",{ref:"timeend",staticClass:"time_end"},[t._v("00:00")])])])]),t._v(" "),e("div",{ref:"bg",staticClass:"bg"}),t._v(" "),e("div",{staticClass:"bg_mask"})]):t._e()},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"search"}},[e("div",{staticClass:"search-box"},[e("input",{ref:"searchvalue",attrs:{type:"text",id:"input_search",placeholder:"搜索歌曲、歌单、专辑"},on:{focus:t.toFocus,keydown:t.search}}),t._v(" "),t.boxFocus?e("span",{staticClass:"cancel",on:{click:t.cancelFocus}},[t._v("取消")]):t._e()]),t._v(" "),t.boxFocus?e("div",{staticClass:"result-content"},[t.getSearchResult&&0===t.getSearchResult.ret_code?e("ul",{staticClass:"result-list"},t._l(t.getSearchResult.pagebean.contentlist,function(s,a){return e("li",{staticClass:"result-item",on:{click:function(e){t.toSongPage(s)}}},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"img_avatar",attrs:{src:s.albumpic_big,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("span",{staticClass:"songname"},[t._v(t._s(s.songname))]),e("br"),t._v(" "),e("span",{staticClass:"singername"},[t._v(t._s(s.singername))])])])})):t._e()]):e("div",{staticClass:"tips"},[e("h3",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),e("div",{staticClass:"tiplist"},t._l(t.tips,function(s){return e("span",{staticClass:"tip-item",on:{click:function(e){t.toInput(s)}}},[t._v(t._s(s))])}))]),t._v(" "),e("songPage",{ref:"songpage",attrs:{song:t.currentSong}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showStatus,expression:"showStatus"}],ref:"_songlistshow",attrs:{id:"songlistshow"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"cover"},[e("span",{staticClass:"close",on:{click:t.toClose}},[t._v("back")]),t._v(" "),e("div",{staticClass:"info"},[e("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.pagebean?e("span",{staticClass:"time"},[t._v(t._s(t.pagebean.update_time)+" 更新")]):t._e(),t._v(" "),e("span",{staticClass:"play"})])]),t._v(" "),t.pagebean?e("ul",{staticClass:"songlist"},t._l(t.pagebean.songlist,function(s,a){return e("li",{key:a,staticClass:"song-item",on:{click:function(e){t.toSongPage(s,e)}}},[e("div",{staticClass:"index"},[t._v(t._s(a))]),t._v(" "),e("div",{staticClass:"song-info"},[e("span",{staticClass:"songname"},[t._v(t._s(s.songname))]),t._v(" "),e("span",{staticClass:"singername"},[t._v(t._s(s.singername))])])])})):t._e()]),t._v(" "),e("songPage",{ref:"song",attrs:{song:t.currentSong}})],1)},staticRenderFns:[]}}],[16]);