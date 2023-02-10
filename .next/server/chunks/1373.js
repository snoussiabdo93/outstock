"use strict";
exports.id = 1373;
exports.ids = [1373];
exports.modules = {

/***/ 4589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ banner_2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/features/product-slice.js + 1 modules
var product_slice = __webpack_require__(9035);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/common/product/feature-product.jsx




const FeatureProduct = ({ index , product , h4  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-xl-6 col-lg-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `banner__item-2 ${index === 0 ? " banner-right" : " banner-left"} p-relative mb-30 pr-15`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "banner__thumb fix",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/product-details/${product.id}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "w-img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: product.img,
                                    alt: "banner"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `banner__content-2 ${h4 ? "banner__content-4" : ""} p-absolute transition-3`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: product.sm_title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/product-details/${product.id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: product.title
                                    })
                                })
                            }),
                            !h4 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: product.desc
                            }),
                            h4 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: product.desc_2
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/product-details/${product.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "os-btn os-btn-2",
                                    children: " Get a Quotation now"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const feature_product = (FeatureProduct);

;// CONCATENATED MODULE: ./components/common/banner/banner-2.jsx




const BannerTwo = ({ df , h4  })=>{
    const products = (0,external_react_redux_.useSelector)(product_slice/* selectProducts */.nR);
    const featureProducts = products.map((item)=>item.product).flat().filter((prd)=>prd.featured);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "banner__area-2 pb-60",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `container-fluid ${df ? "" : "p-0"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row g-0",
                    children: featureProducts.map((product, index)=>/*#__PURE__*/ jsx_runtime_.jsx(feature_product, {
                            index: index,
                            product: product,
                            h4: h4
                        }, index))
                })
            })
        })
    });
};
/* harmony default export */ const banner_2 = (BannerTwo);


/***/ }),

/***/ 2675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);


/***/ })

};
;