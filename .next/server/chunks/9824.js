"use strict";
exports.id = 9824;
exports.ids = [9824];
exports.modules = {

/***/ 9824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(553);
/* harmony import */ var _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9035);
/* harmony import */ var _common_modal_product_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1134);
/* harmony import */ var _common_product_product_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6531);
/* harmony import */ var _common_product_product_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3145);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_modal_product_modal__WEBPACK_IMPORTED_MODULE_4__, _common_product_product_grid__WEBPACK_IMPORTED_MODULE_5__, _common_product_product_list__WEBPACK_IMPORTED_MODULE_6__]);
([_common_modal_product_modal__WEBPACK_IMPORTED_MODULE_4__, _common_product_product_grid__WEBPACK_IMPORTED_MODULE_5__, _common_product_product_list__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ShopFourColArea = ({ shopThreeCol  })=>{
    const { items , handleSelectChange  } = (0,_hooks_use_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "shop__area pt-100 pb-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${shopThreeCol ? "col-xl-8 offset-xl-2 col-lg-8 offset-lg-2" : "col-xl-12"}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "shop__content-area",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "shop__header d-sm-flex justify-content-between align-items-center mb-40",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "shop__header-left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "show-text",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Showing 1\u201312 of 20 results"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "sort-wrapper mr-30 pr-25 p-relative",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                            onChange: handleSelectChange,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    defaultValue: "1",
                                                                    children: "Default Sorting"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    defaultValue: "2",
                                                                    children: "Short by new"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    defaultValue: "3",
                                                                    children: "Short by featured"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    defaultValue: "4",
                                                                    children: "Short by price"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "nav nav-pills",
                                                        id: "pills-tab",
                                                        role: "tablist",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "nav-link active",
                                                                    id: "pills-grid-tab",
                                                                    "data-bs-toggle": "pill",
                                                                    href: "#pills-grid",
                                                                    role: "tab",
                                                                    "aria-controls": "pills-grid",
                                                                    "aria-selected": "true",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fas fa-th"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "nav-link",
                                                                    id: "pills-list-tab",
                                                                    "data-bs-toggle": "pill",
                                                                    href: "#pills-list",
                                                                    role: "tab",
                                                                    "aria-controls": "pills-list",
                                                                    "aria-selected": "false",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fas fa-list-ul"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "tab-content",
                                        id: "pills-tabContent",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "tab-pane fade show active",
                                                id: "pills-grid",
                                                role: "tabpanel",
                                                "aria-labelledby": "pills-grid-tab",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row custom-row-10",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_product_product_grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        itemsPerPage: 12,
                                                        col: shopThreeCol ? "col-xl-4 col-lg-4 col-md-6 col-sm-6 custom-col-10" : "col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10",
                                                        items: items
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "tab-pane fade",
                                                id: "pills-list",
                                                role: "tabpanel",
                                                "aria-labelledby": "pills-list-tab",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_product_product_list__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    itemsPerPage: 4,
                                                    items: items
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_modal_product_modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopFourColArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;