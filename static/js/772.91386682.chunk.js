"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[772],{831:function(e,t,n){n.d(t,{F2:function(){return v},PF:function(){return l},R8:function(){return p},bV:function(){return u},gY:function(){return f},il:function(){return h}});var r=n(861),a=n(687),c=n.n(a),s=n(44),i="https://api.themoviedb.org/3/",o="a620a6416fb18e40f7d335c64c3f9e0e",u="https://image.tmdb.org/t/p/w500",l=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,n="".concat(i,"trending/movie/day?api_key=").concat(o,"&page=").concat(t),e.prev=2,e.next=5,s.ZP.get(n);case 5:return r=e.sent,e.next=8,r.data;case 8:return a=e.sent,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,u,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:1,r="".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&page=").concat(n,"&query=").concat(t,"&include_adult=false"),e.prev=2,e.next=5,s.ZP.get(r);case 5:return a=e.sent,e.next=8,a.data;case 8:return u=e.sent,e.abrupt("return",u);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,s.ZP.get(n);case 4:return r=e.sent,e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,s.ZP.get(n);case 4:return r=e.sent,e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,s.ZP.get(n);case 4:return r=e.sent,e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},842:function(e,t,n){n.d(t,{H:function(){return u}});var r=n(689),a=n(731),c=n(831),s=n(892),i=n(272),o=n(184),u=function(e){var t=e.movie,n="/"===(0,r.TH)().pathname?"movies/":"";return(0,o.jsx)("li",{className:s.Z.item,children:(0,o.jsxs)(a.rU,{to:"".concat(n).concat(t.id),className:s.Z.link,children:[(0,o.jsx)("img",{src:t.poster_path?c.bV+t.poster_path:i,alt:t.title,className:s.Z.img}),(0,o.jsx)("div",{className:s.Z.info,children:(0,o.jsx)("h3",{children:t.title})})]})})}},772:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(885),c=n(687),s=n.n(c),i=n(791),o=n(731),u=n(831),l="Form_form__psS5c",p="Form_input__EwUhk",f="Form_submit__khcqq",v=n(184),h=function(e){var t=e.submit,n=e.searchMovieValue,r=e.onChang;return(0,v.jsxs)("form",{id:"search-form",autoComplete:"off",onSubmit:t,className:l,children:[(0,v.jsx)("input",{className:p,type:"text",name:"name",autoFocus:!0,placeholder:"Search movies",onChange:function(e){r(e.target.value.toLowerCase())},value:n}),(0,v.jsx)("button",{type:"submit",className:f,children:"Search"})]})},m=n(842),d=n(781),_=n(892),g="MovieSearch_p__MwZHn",x=function(){var e,t=(0,i.useState)(""),n=(0,a.Z)(t,2),c=n[0],l=n[1],p=(0,i.useState)([]),f=(0,a.Z)(p,2),x=f[0],Z=f[1],w=(0,i.useState)(!1),k=(0,a.Z)(w,2),y=k[0],b=k[1],j=(0,o.lr)(),S=(0,a.Z)(j,2),M=S[0],N=S[1],C=(0,i.useState)(!1),L=(0,a.Z)(C,2),P=L[0],U=L[1],F=null!==(e=M.get("name"))&&void 0!==e?e:"",H=window.location.search.split("=")[1];(0,i.useEffect)((function(){(c||H)&&V(c||H)}),[c]);var V=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!1),U(!0),e.next=4,(0,u.R8)(t);case 4:return n=e.sent,e.next=7,n.results;case 7:r=e.sent,console.log(r),Z(r),r.length||b(!0),U(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsx)("main",{children:(0,v.jsxs)("section",{children:[(0,v.jsx)(h,{submit:function(e){e.preventDefault(),l(e.target.name.value)},searchMovieValue:F,onChang:function(e){N(""!==e?{name:e}:{})}}),P&&(0,v.jsx)(d.a,{}),y&&(0,v.jsx)("p",{className:g,children:"Sorry, we didn't find anything. Try again."}),(0,v.jsx)("ul",{className:_.Z.list,children:x.map((function(e){return(0,v.jsx)(m.H,{movie:e},e.id)}))})]})})}},892:function(e,t){t.Z={text:"MovieList_text__6RJQy",list:"MovieList_list__2rnyn",item:"MovieList_item__NkPkZ",link:"MovieList_link__Vh6rU",img:"MovieList_img__eH6st",info:"MovieList_info__eZ7jA"}},272:function(e,t,n){e.exports=n.p+"static/media/default.eaf453e7546459c2020a.jpg"}}]);
//# sourceMappingURL=772.91386682.chunk.js.map