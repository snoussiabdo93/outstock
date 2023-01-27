"use strict";
exports.id = 6978;
exports.ids = [6978];
exports.modules = {

/***/ 6978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(553);
/* harmony import */ var _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9035);
/* harmony import */ var _modal_product_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1134);
/* harmony import */ var _product_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6531);
/* harmony import */ var _product_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3145);
/* harmony import */ var _shop_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal_product_modal__WEBPACK_IMPORTED_MODULE_5__, _product_grid__WEBPACK_IMPORTED_MODULE_6__, _product_list__WEBPACK_IMPORTED_MODULE_7__]);
([_modal_product_modal__WEBPACK_IMPORTED_MODULE_5__, _product_grid__WEBPACK_IMPORTED_MODULE_6__, _product_list__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const nav_tabs = [
    {
        id: "grid",
        active: true,
        icon: "fas fa-th"
    },
    {
        id: "list",
        icon: "fas fa-list-ul"
    }, 
];
const ShopProduct = ({ shop_right  })=>{
    const { items , handleSelectChange  } = (0,_hooks_use_context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { 0: showing , 1: setShowing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("grid");
    const { 0: listShowing , 1: setListShowing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const allProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_4__/* .selectProducts */ .nR).map((item)=>item.product).flat();
    const handleActive = (list)=>{
        setIsActive(list);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "shop__area pt-100 pb-100 shop_products",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            !shop_right && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-3 col-lg-3 col-md-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shop_sidebar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-9 col-lg-9 col-md-8",
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
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                "Showing 1\u2013",
                                                                isActive === "grid" ? showing : listShowing,
                                                                " of ",
                                                                allProducts.length,
                                                                " results"
                                                            ]
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: "nav nav-pills",
                                                            id: "pills-tab",
                                                            role: "tablist",
                                                            children: nav_tabs.map((tab, i)=>{
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "nav-item",
                                                                    onClick: ()=>handleActive(tab.id),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: `nav-link ${tab.active ? "active" : ""}`,
                                                                        id: `pills-${tab.id}-tab`,
                                                                        "data-bs-toggle": "pill",
                                                                        href: `#pills-${tab.id}`,
                                                                        role: "tab",
                                                                        "aria-controls": `pills-${tab.id}`,
                                                                        "aria-selected": tab.active ? "true" : "false",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: tab.icon
                                                                        })
                                                                    })
                                                                }, i);
                                                            })
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
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_grid__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            itemsPerPage: 12,
                                                            items: items,
                                                            setShowing: setShowing
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "tab-pane fade",
                                                    id: "pills-list",
                                                    role: "tabpanel",
                                                    "aria-labelledby": "pills-list-tab",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_list__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        itemsPerPage: 5,
                                                        items: items,
                                                        setShowing: setListShowing
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            shop_right && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-3 col-lg-3 col-md-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shop_sidebar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_product_modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopProduct);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shop_sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/use-context.js
var use_context = __webpack_require__(553);
;// CONCATENATED MODULE: ./components/common/filtering/product-brands.jsx



const ProductBrands = ()=>{
    const { resetFiltering , filteringBrands  } = (0,use_context/* default */.Z)();
    const brands = [
        "Sony",
        "Panasonic",
        "Apple",
        "Samsung"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "sidebar__widget mb-50",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-title mb-25",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Brand"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "brand",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: brands.map((brand, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>filteringBrands(brand),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        children: brand
                                    })
                                }, index))
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "reset-button mt-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: resetFiltering,
                        children: "Reset Filter"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const product_brands = (ProductBrands);

;// CONCATENATED MODULE: ./components/common/filtering/product-categories.jsx



const categoryData = [
    {
        title: "Accessories"
    },
    {
        title: "Clothing"
    },
    {
        title: "Men's"
    },
    {
        title: "Music"
    },
    {
        title: "Decoration"
    },
    {
        title: "Chair"
    },
    {
        title: "Lighting"
    }, 
];
const ProductCategories = ()=>{
    const { handleCategoryChange , categoryActive  } = (0,use_context/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "sidebar__widget mb-55",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-title mb-25",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Product Categories"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "categories",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "categories__list",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: categoryData.map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: categoryActive === category.title ? "active" : "",
                                        onClick: ()=>handleCategoryChange(category.title),
                                        children: category.title
                                    }, index))
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const product_categories = (ProductCategories);

;// CONCATENATED MODULE: ./components/common/filtering/product-color.jsx



const ProductColor = ()=>{
    const colors = [
        "Ocean Blue",
        "Yellow",
        "Blue",
        "Green",
        " White"
    ];
    const { handleColors , color  } = (0,use_context/* default */.Z)();
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "sidebar__widget mb-60",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-title mb-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Choose Color"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "color__pick",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            onSubmit: handleSubmit,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: colors.map((clr, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: ()=>handleColors(clr),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: `color ${clr === color ? "active" : ""} color-${index}`
                                        })
                                    }, index))
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const product_color = (ProductColor);

// EXTERNAL MODULE: ./redux/features/product-slice.js + 1 modules
var product_slice = __webpack_require__(9035);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/common/filtering/product-feature.jsx




const ProductFeature = ()=>{
    const products = (0,external_react_redux_.useSelector)(product_slice/* selectProducts */.nR);
    const featurePrd = products.map((prd)=>prd.product).flat().filter((item)=>item.feature_prd).slice(0, 2);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "sidebar__widget",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-title mb-30",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Featured Products"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "features__product",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: featurePrd.map((product, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mb-20",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "featires__product-wrapper d-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "features__product-thumb mr-15",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `/product-details/${product.id}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: product.img,
                                                            alt: "pro-sm-1"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "features__product-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/product-details/${product.id}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: product.title
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "price",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    "$",
                                                                    product.price
                                                                ]
                                                            }),
                                                            product.old_price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: "price-old",
                                                                children: [
                                                                    "$",
                                                                    product.old_price
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const product_feature = (ProductFeature);

// EXTERNAL MODULE: external "react-rangeslider"
var external_react_rangeslider_ = __webpack_require__(8331);
var external_react_rangeslider_default = /*#__PURE__*/__webpack_require__.n(external_react_rangeslider_);
;// CONCATENATED MODULE: ./components/common/filtering/product-price.jsx




const ProductPrice = ()=>{
    const { price , handlePriceChange  } = (0,use_context/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "sidebar__widget mb-55",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-title mb-30",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Filter By Price"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "price__slider",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "slider-range",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_rangeslider_default()), {
                                    value: price,
                                    max: 500,
                                    orientation: "horizontal",
                                    onChange: (value)=>handlePriceChange(value)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    onSubmit: (e)=>e.preventDefault(),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: "Filter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            htmlFor: "amount",
                                            children: "Price :"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            id: "amount",
                                            value: `$-${price}`,
                                            readOnly: true
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const product_price = (ProductPrice);

;// CONCATENATED MODULE: ./components/common/filtering/product-size.jsx



const ProductSize = ()=>{
    const { handleProductSizes , sizeActive  } = (0,use_context/* default */.Z)();
    const sizes = [
        "S",
        "M",
        "XL",
        "L",
        "XXL"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "sidebar__widget mb-55",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-title mb-30",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Any Size"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__widget-content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "size",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: sizes.map((size, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: sizeActive === size ? "active" : "",
                                    onClick: ()=>handleProductSizes(size),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        children: size
                                    })
                                }, index))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const product_size = (ProductSize);

;// CONCATENATED MODULE: ./components/common/product/shop-sidebar.jsx







const ShopSidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "shop__sidebar",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(product_categories, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(product_price, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(product_size, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(product_color, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(product_brands, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(product_feature, {})
            ]
        })
    });
};
/* harmony default export */ const shop_sidebar = (ShopSidebar);


/***/ })

};
;