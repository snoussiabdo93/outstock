(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{6842:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return a(3772)}])},6597:function(e,s,a){"use strict";var t=a(5893),i=a(1664),l=a.n(i);a(7294);s.Z=function(e){var s=e.img,a=e.title,i=e.subtitle;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{className:"page__title p-relative d-flex align-items-center",style:{background:"url( ".concat(s||"/assets/img/page-title/page-title-1.jpg",")"),backgroundSize:"cover",backgroundPosition:"center"},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-xl-12",children:(0,t.jsxs)("div",{className:"page__title-inner text-center",children:[(0,t.jsx)("h1",{children:a}),(0,t.jsx)("div",{className:"page__title-breadcrumb",children:(0,t.jsx)("nav",{"aria-label":"breadcrumb",children:(0,t.jsxs)("ol",{className:"breadcrumb justify-content-center",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsxs)("li",{className:"breadcrumb-item active","aria-current":"page",children:[" ",i]})]})})})]})})})})})})}},3772:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return T}});var t=a(5893),i=a(1998),l=a(2675),n=a(7294),c=a(2822),r=a(8711),d=a(6597),o=a(7568),h=a(4051),u=a.n(h),m=a(553),p=a(1134),x=a(1358),j=a.n(x),g=a(9473),f=a(1664),v=a.n(f),N=a(9035),b=a(3921),_=a(4071),w=function(e){var s=e.handlePageClick,a=e.pageCount,i=e.focusPage;return(0,t.jsx)(j(),{nextLabel:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("i",{className:"fal fa-angle-right"})}),onPageChange:s,pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:a,forcePage:i,previousLabel:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("i",{className:"fal fa-angle-left"})}),pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})};var C=function(e){var s=e.itemsPerPage,a=e.col,i=void 0===a?"col-xl-4 col-lg-4 col-md-6 col-sm-6 custom-col-10":a,l=e.items,c=e.setShowing,r=(0,g.v9)((function(e){return e.products})),d=r.forcePage,o=r.item_offset,h=(0,g.I0)(),u=(0,n.useState)(null),m=u[0],p=u[1],x=(0,n.useState)(0),j=x[0],f=x[1],_=(0,n.useState)(0),C=_[0],k=_[1],S=(0,n.useState)([]);return S[0],S[1],(0,n.useEffect)((function(){var e=C+s;p(null===l||void 0===l?void 0:l.slice(C,e)),f(Math.ceil(l.length/s))}),[C,s,l]),(0,n.useEffect)((function(){l&&c&&c(l.length)}),[m,c]),(0,n.useEffect)((function(){h((0,N.Xn)(C))}),[h,C]),(0,n.useEffect)((function(){k(o)}),[o]),(0,t.jsxs)(t.Fragment,{children:[l&&l.map((function(e,s){return(0,t.jsx)("div",{className:i,children:(0,t.jsxs)("div",{className:"mb-20 shadow p-1",children:[(0,t.jsxs)("div",{className:"product__thumb",children:[(0,t.jsx)(v(),{href:"/product-details/".concat(e.id),children:(0,t.jsxs)("a",{className:"w-img",children:[(0,t.jsx)("img",{src:e.data.photo1,alt:"product-img",style:{width:"100%",height:"40vh"}}),e.thumb_img&&(0,t.jsx)("img",{src:e.thumb_img,alt:"product-img"})]})}),(0,t.jsxs)("div",{className:"product__action transition-3",children:[(0,t.jsx)("button",{onClick:function(){return h((0,b.CZ)(e))},"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Add to Wishlist",children:(0,t.jsx)("i",{className:"fal fa-heart"})}),(0,t.jsx)(v(),{href:"/product-details/".concat(e.id),children:(0,t.jsx)("a",{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Details",children:(0,t.jsx)("i",{className:"fal fa-link"})})}),(0,t.jsx)("a",{onClick:function(){return h((0,N.pQ)(e.id))},href:"#","data-bs-toggle":"modal","data-bs-target":"#productModalId",children:(0,t.jsx)("i",{className:"fal fa-search"})})]}),e.product__sale&&(0,t.jsx)("div",{className:"product__sale",children:e.product__sale.map((function(e,s){return(0,t.jsx)("span",{className:"".concat("new"===e?"new":"percent"),children:e},s)}))})]}),(0,t.jsx)("div",{className:"product__content p-relative",children:(0,t.jsxs)("div",{className:"product__content-inner",children:[(0,t.jsx)("h4",{children:(0,t.jsx)(v(),{href:"/product-details/".concat(e.id),children:(0,t.jsx)("a",{children:e.data.Label})})}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"text-gray",children:e.price})})]})})]})},s)})),(0,t.jsx)("div",{className:"row mt-35",children:(0,t.jsx)("div",{className:"col-xl-12",children:(0,t.jsx)("div",{className:"shop-pagination-wrapper d-md-flex justify-content-between align-items-center",children:(0,t.jsx)("div",{className:"basic-pagination",children:(0,t.jsx)(w,{handlePageClick:function(e){var a=e.selected*s%l.length;k(a),h((0,N.CF)(e.selected))},pageCount:j,focusPage:d})})})})})]})},k=a(5675),S=a.n(k);var P=function(e){var s=e.itemsPerPage,a=e.items,i=e.setShowing,l=(0,g.v9)((function(e){return e.products})),c=(l.forcePage,l.item_offset),r=(0,g.I0)(),d=(0,n.useState)(null),o=d[0],h=d[1],u=(0,n.useState)(0),m=u[0],p=u[1],x=(0,n.useState)(0),j=x[0],f=x[1];return(0,n.useEffect)((function(){var e=j+s;h(a.slice(j,e)),p(Math.ceil(a.length/s))}),[j,s,a]),(0,n.useEffect)((function(){o&&i&&i(o.length)}),[o,i]),(0,n.useEffect)((function(){r((0,N.Xn)(j))}),[r,j]),(0,n.useEffect)((function(){f(c)}),[c]),(0,t.jsxs)(t.Fragment,{children:[o&&o.map((function(e,s){return(0,t.jsx)("div",{className:"product__wrapper mb-40",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xl-4 col-lg-4",children:(0,t.jsxs)("div",{className:"product__thumb list",children:[(0,t.jsx)(v(),{href:"/product-details/".concat(e.id),children:(0,t.jsxs)("a",{className:"w-img",children:[(0,t.jsx)("img",{src:e.data.photo1,alt:"product-img",width:"200vw",height:"280vh"}),e.thumb_img&&(0,t.jsx)(S(),{className:"product__thumb-2",src:e.thumb_img,alt:"product-img",width:"200vw",height:"280vh"})]})}),e.product__sale&&(0,t.jsx)("div",{className:"product__sale",children:e.product__sale.map((function(e,s){return(0,t.jsx)("span",{className:"".concat("new"===e?"new":"percent"),children:e},s)}))})]})}),(0,t.jsx)("div",{className:"col-xl-8 col-lg-8",children:(0,t.jsxs)("div",{className:"product__content p-relative",children:[(0,t.jsxs)("div",{className:"product__content-inner list",children:[(0,t.jsx)("h4",{children:(0,t.jsx)(v(),{href:"/product-details/".concat(e.id),children:(0,t.jsx)("a",{children:e.data.Label})})}),(0,t.jsxs)("div",{className:"product__price-2 mb-10",children:[(0,t.jsxs)("span",{children:["$",e.price]}),(null===e||void 0===e?void 0:e.old_price)&&(0,t.jsxs)("span",{className:"old-price",children:["$",e.old_price]})]}),(0,t.jsx)("p",{children:"Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus."}),(0,t.jsx)("div",{className:"product__list mb-30",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:"Light green crewneck sweatshirt."})}),(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:"Hand pockets."})}),(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:"Relaxed fit."})})]})})]}),(0,t.jsxs)("div",{className:"add-cart-list d-sm-flex align-items-center",children:[(0,t.jsx)("button",{onClick:function(){return r((0,_.Vu)(e))},href:"#",className:"add-cart-btn mr-10",children:"+ Add to Cart"}),(0,t.jsxs)("div",{className:"product__action-2 transition-3 mr-20",children:[(0,t.jsx)("button",{onClick:function(){return r((0,b.CZ)(e))},"data-bs-toggle":"tooltip","data-placement":"top",title:"Add to Wishlist",children:(0,t.jsx)("i",{className:"fal fa-heart"})}),(0,t.jsx)(v(),{href:"/product-details/".concat(e.id),children:(0,t.jsx)("a",{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Details",children:(0,t.jsx)("i",{className:"fal fa-link"})})}),(0,t.jsx)("a",{onClick:function(){return r((0,N.pQ)(e.id))},href:"#","data-bs-toggle":"modal","data-bs-target":"#productModalId",children:(0,t.jsx)("i",{className:"fal fa-search"})})]})]})]})})]})},s)})),(0,t.jsx)("div",{className:"row mt-35",children:(0,t.jsx)("div",{className:"col-xl-12",children:(0,t.jsx)("div",{className:"shop-pagination-wrapper d-md-flex justify-content-between align-items-center",children:(0,t.jsx)("div",{className:"basic-pagination",children:(0,t.jsx)(w,{handlePageClick:function(e){var t=e.selected*s%a.length;f(t),r((0,N.CF)(e.selected))},pageCount:m})})})})})]})},y=[{title:"Kitchen Products",value:"Kitchen"},{title:"Accessoires",value:"Decoration"},{title:"Spoon & Spatula",value:"spati&spoon"},{title:"Chess",value:"echec"},{title:"Boards and Trays",value:"planche"}],E=function(){var e=(0,m.Z)(),s=e.handleCategoryChange,a=e.categoryActive;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"sidebar__widget mb-55",children:[(0,t.jsx)("div",{className:"sidebar__widget-title mb-25",children:(0,t.jsx)("h3",{children:"Product Categories"})}),(0,t.jsx)("div",{className:"sidebar__widget-content",children:(0,t.jsx)("div",{className:"categories",children:(0,t.jsx)("div",{className:"categories__list",children:(0,t.jsx)("ul",{children:y.map((function(e,i){return(0,t.jsx)("li",{className:a===e.title?"active":"",onClick:function(){return s(e.value)},children:e.title},i)}))})})})})]})})},Z=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"shop__sidebar",children:(0,t.jsx)(E,{})})})},F=a(9828),L=a(1838),A=[{id:"grid",active:!0,icon:"fas fa-th"},{id:"list",icon:"fas fa-list-ul"}],D=function(e){var s=e.shop_right,a=(0,m.Z)(),i=a.handleSelectChange,l=a.categoryActive,c=(0,n.useState)(0),r=c[0],d=c[1],h=(0,n.useState)("grid"),x=h[0],j=h[1],g=(0,n.useState)(0),f=g[0],v=g[1],N=(0,n.useState)([]),b=N[0],_=N[1];return(0,n.useEffect)((function(){var e=function(){var e=(0,o.Z)(u().mark((function e(){var s,a,t,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=(0,F.hJ)(L.db,"Produits"),a=(0,F.IO)(s,(0,F.ar)("categ","==",l)),e.next=5,(0,F.PL)(a);case 5:t=e.sent,i=[],t.forEach((function(e){return i.push({id:e.id,data:e.data()})})),_(i),console.log(i),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("section",{className:"shop__area pt-100 pb-100 shop_products",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[!s&&(0,t.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4",children:(0,t.jsx)(Z,{})}),(0,t.jsx)("div",{className:"col-xl-9 col-lg-9 col-md-8",children:(0,t.jsxs)("div",{className:"shop__content-area",children:[(0,t.jsxs)("div",{className:"shop__header d-sm-flex justify-content-between align-items-center mb-40",children:[(0,t.jsx)("div",{className:"shop__header-left",children:(0,t.jsx)("div",{className:"show-text",children:(0,t.jsxs)("span",{children:["Showing 1\u2013","grid"===x?r:f," of ",b.length," results"]})})}),(0,t.jsxs)("div",{className:"shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end",children:[(0,t.jsx)("div",{className:"sort-wrapper mr-30 pr-25 p-relative",children:(0,t.jsxs)("select",{onChange:i,children:[(0,t.jsx)("option",{defaultValue:"1",children:"Default Sorting"}),(0,t.jsx)("option",{defaultValue:"2",children:"Short by new"}),(0,t.jsx)("option",{defaultValue:"3",children:"Short by featured"}),(0,t.jsx)("option",{defaultValue:"4",children:"Short by price"})]})}),(0,t.jsx)("ul",{className:"nav nav-pills",id:"pills-tab",role:"tablist",children:A.map((function(e,s){return(0,t.jsx)("li",{className:"nav-item",onClick:function(){return s=e.id,void j(s);var s},children:(0,t.jsx)("a",{className:"nav-link ".concat(e.active?"active":""),id:"pills-".concat(e.id,"-tab"),"data-bs-toggle":"pill",href:"#pills-".concat(e.id),role:"tab","aria-controls":"pills-".concat(e.id),"aria-selected":e.active?"true":"false",children:(0,t.jsx)("i",{className:e.icon})})},s)}))})]})]}),(0,t.jsxs)("div",{className:"tab-content",id:"pills-tabContent",children:[(0,t.jsx)("div",{className:"tab-pane fade show active",id:"pills-grid",role:"tabpanel","aria-labelledby":"pills-grid-tab",children:(0,t.jsx)("div",{className:"row custom-row-10",children:(0,t.jsx)(C,{itemsPerPage:12,items:b,setShowing:d})})}),(0,t.jsx)("div",{className:"tab-pane fade",id:"pills-list",role:"tabpanel","aria-labelledby":"pills-list-tab",children:(0,t.jsx)(P,{itemsPerPage:5,items:b,setShowing:v})})]})]})}),s&&(0,t.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4",children:(0,t.jsx)(Z,{})})]})})}),(0,t.jsx)(p.Z,{})]})},I=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)(d.Z,{title:"Shop",subtitle:"Shop"}),(0,t.jsx)(D,{})]}),(0,t.jsx)(c.Z,{})]})},T=function(){return(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{pageTitle:"Shop"}),(0,t.jsx)(I,{})]})}}},function(e){e.O(0,[16,773,184,358,761,626,774,888,179],(function(){return s=6842,e(e.s=s);var s}));var s=e.O();_N_E=s}]);