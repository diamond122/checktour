(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{224:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(10),r(9),r(36)),i=r(2),s=r(247);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(r,!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={mixins:[o.b],computed:c({breadcrumbs:function(){if(this.$data.tour)return s.a.generate("tour-options.list",this.$data.tour)}},Object(i.b)([{name:"list.fetch",process:"tour-options@list.fetch"}])),data:function(){return{items:[],pagination:null,tour:null}},created:function(){this.$listenCycle("tour-options@list.fetch",this.list)},beforeRouteEnter:function(t,e,r){return r((function(e){return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(e.$filters("tour-options").restoreFromUrl(t.name));case 2:e.lock(e.list(),e.view());case 3:case"end":return r.stop()}}))}))},methods:c({formatIdentifiers:function(t){return t.bookeo_id?Array.isArray(t.bookeo_id)?t.bookeo_id.join("|"):t.bookeo_id:""},onClickCreate:function(){this.$router.push({name:"tour-options.create"})},fill:function(t){this.items=t.items,this.pagination=t.pagination},close:function(){this.$router.push({name:"tour-options.list"})},onChangePage:function(t){this.$filters("tour-options").data.page=t,this.list()}},Object(n.mapActions)("tour-options",{list:function(t){var e;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(t("list",{tourId:this.$routeParam("tourId")}));case 2:e=r.sent,this.fill(e);case 4:case"end":return r.stop()}}),null,this)}}),{},Object(n.mapActions)("tours",{view:function(t){var e,r,n,o=arguments;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:null,i.next=3,regeneratorRuntime.awrap(t("view",{tourId:e||this.$routeParam("tourId")}));case 3:r=i.sent,n=r.view,this.$data.tour=n;case 6:case"end":return i.stop()}}),null,this)}}))},p=r(1),f=Object(p.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{locked:t.locked,breadcrumbs:t.breadcrumbs},on:{"close-sidebar":t.close},scopedSlots:t._u([{key:"actions",fn:function(){return[r("div",{staticClass:"o-layout__header-actions"},[t.$can("tour-options.create")?r("div",{staticClass:"o-layout__header-group"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onClickCreate}},[t._v(t._s(t.$t("Create tour option"))+"\n                ")])],1):t._e()])]},proxy:!0},{key:"content",fn:function(e){var n=e.locked;return[r("v-scroll",{staticClass:"col-xl-6",attrs:{locked:n}},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"pt-20"},[r("v-search-panel",{on:{search:t.list},model:{value:t.$filters("tour-options").data.term,callback:function(e){t.$set(t.$filters("tour-options").data,"term",e)},expression:"$filters('tour-options').data.term"}})],1)]),t._v(" "),r("v-content-list",{staticClass:"col-inner",attrs:{items:t.items,pagination:t.pagination},on:{"change-page":t.onChangePage},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("v-list-item",{key:n.id,attrs:{data:n,route:{name:"tour-options.view",params:{tourOptionId:n.id}},"title-by":"name","description-by":t.formatIdentifiers}})]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"col-xl-6 d-none d-xl-flex u-border-left"},[r("div",{staticClass:"c-aside-icon"},[r("div",{staticClass:"c-aside-icon__inner"},[r("i",{staticClass:"icon fal fa-landmark"}),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.$t("Tour options")))])])])])]}}])})}),[],!1,null,null,null);e.default=f.exports},239:function(t,e,r){"use strict";var n=r(23),o=r(6);n.b.register("tours.list",(function(t){t.push(Object(o.$t)("Tours"),"tours.list")})),n.b.register("tours.view",(function(t,e){t.parent("tours.list"),t.push(e.name,{name:"tours.view",params:{tourId:e.id}})})),e.a=n.b},247:function(t,e,r){"use strict";var n=r(23),o=(r(239),r(6));n.b.register("tour-options.list",(function(t,e){t.parent("tours.view",e),t.push(Object(o.$t)("Tour options"),"tour-options.list")})),e.a=n.b}}]);