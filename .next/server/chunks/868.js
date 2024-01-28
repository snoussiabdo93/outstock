"use strict";
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 5730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1542);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4071);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_5__]);
_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Cart = ()=>{
    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.cart.cartProducts);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { total  } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mini-cart",
            style: {
                width: 400
            },
            children: [
                cartItems.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "Your cart is empty"
                }),
                cartItems.length >= 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mini-cart-inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: `mini-cart-list ${cartItems.length > 2 ? "slider-height" : ""} 
          ${cartItems.length > 1 ? "slider-height-2" : ""}`,
                            children: cartItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cart-img f-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: `/product-details/${item.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item.photo1,
                                                        alt: "",
                                                        width: "40vw",
                                                        height: "60vh"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "cart-content f-left text-start",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `/product-details/${item.id}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            children: [
                                                                item.Freq,
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fal fa-start",
                                                                    children: "  "
                                                                }),
                                                                " Qte : ",
                                                                item.quantity
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: item.sizes.map((T, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "badge bg-secondary mx-1",
                                                            children: [
                                                                " ",
                                                                T,
                                                                " "
                                                            ]
                                                        }, index))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "del-icon f-right mt-30",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_5__/* .remove_cart_product */ .uZ)(item)),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fal fa-times"
                                                })
                                            })
                                        })
                                    ]
                                }, index))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "total-price d-flex justify-content-between mb-30",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Total Products :"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: total
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "checkout-link",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/cart",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "os-btn",
                                        children: "View Quotation Cart"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/checkout",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "os-btn os-btn-black",
                                        children: "Get A Quotation"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_features_search_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3397);




const Search = ()=>{
    const search = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.search.isOpen);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: `header__search white-bg transition-3 ${search ? "search-opened" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "header__search-inner text-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "header__search-btn",
                                            onClick: ()=>dispatch((0,_redux_features_search_slice__WEBPACK_IMPORTED_MODULE_3__/* .search_bar */ .zm)(false)),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "header__search-btn-close",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fal fa-times"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "header__search-header",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: "Search"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "header__search-categories",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "search-category",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/shop",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: "All Categories"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/shop",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: "Accessories"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/shop",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: "Chair"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/shop",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: "Tablet"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/shop",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: "Men"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/shop",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: "Women"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "header__search-input p-relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    placeholder: "Search for products... "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "far fa-search"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>dispatch((0,_redux_features_search_slice__WEBPACK_IMPORTED_MODULE_3__/* .search_bar */ .zm)(false)),
                className: `body-overlay transition-3 ${search ? "opened" : ""}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./hooks/use-context.js
var use_context = __webpack_require__(553);
;// CONCATENATED MODULE: ./data/header/products.js
const Prods = [
    {
        link: "/shop",
        title: "kitchen",
        dropdownMenu: [
            {
                link: "/product-details/ojkfZzzz3ioerklYDFjl",
                title: "Wooden Cooking Spoon"
            },
            {
                link: "/product-details/nKakmoFZwUGLPyhyC3yg",
                title: "Cooking Spoon New Style"
            },
            {
                link: "/product-details/dqEplTnx0hQ1fJ0Oxjkc",
                title: "Wooden spoon for pasta"
            },
            {
                link: "/product-details/jVz646e3EpZivPQ5WBjh",
                title: "Large Olive Wood Spoon"
            },
            {
                link: "/product-details/SXe2Lt1jnqNl3HhWquvM",
                title: "Slotted spoon  olive wood"
            }, 
        ]
    },
    {
        link: "/shop",
        title: "Chess Game",
        dropdownMenu: [
            {
                link: "/product-details/MDSeSNdhChIG3sohbfRI",
                title: "  Chess  With 2 Storages "
            },
            {
                link: "/product-details/LQZwE0VwyHmWwglHWFNP",
                title: "Fancy Wooden Chess "
            },
            {
                link: "/product-details/3k7esGoyBLuuP38ptGMJ",
                title: "Wooden Chess Rustic Rough Edges"
            },
            {
                link: "/product-details/1ROP7WtB4N9vOTfKTeUy",
                title: "Sample Wooden Chess "
            }, 
        ]
    },
    {
        link: "/shop",
        title: "accessories",
        dropdownMenu: [
            {
                link: "/product-details/6SMbRoY5ToK8mNO3gLf3",
                title: "Olive Wooden Pepper Mill"
            },
            {
                link: "/product-details/6u7GtFZVb4Mxbf8grV1y",
                title: "Olive Wooden Bowl and picker"
            },
            {
                link: "/product-details/sCkczTzrnGtNLMb5tzzv",
                title: "English Oak Salt And Pepper Mill "
            },
            {
                link: "/product-details/Pv8GVwDhCsVCb8OShhGP",
                title: "Olive Wooden Honey bottle with Dipper "
            }, 
        ]
    }, 
];
/* harmony default export */ const products = (Prods);

;// CONCATENATED MODULE: ./components/common/sidebar.jsx





const Sidebar = ()=>{
    const { showSidebar , setShowSidebar  } = (0,use_context/* default */.Z)();
    const { 0: home , 1: setHome  } = (0,external_react_.useState)(false);
    const { 0: shop , 1: setShop  } = (0,external_react_.useState)(false);
    const { 0: shopD , 1: setShopD  } = (0,external_react_.useState)(false);
    const { 0: productPages , 1: setProductPages  } = (0,external_react_.useState)(false);
    const { 0: otherPages , 1: setOtherPages  } = (0,external_react_.useState)(false);
    const { 0: blog , 1: setBlog  } = (0,external_react_.useState)(false);
    const { 0: data , 1: setdata  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        console.log(products);
    }, []);
    const handleMenuDropDown = (page)=>{
        if (page === "home") {
            setHome(!home);
            setShop(false);
            setProductPages(false);
            setOtherPages(false);
            setBlog(false);
        }
        if (page === "shop") {
            setHome(false);
            setShop(!shop);
            setShopD(false);
        }
        if (page === "shop-detail") {
            setHome(false);
            setShopD(!shopD);
            setShop(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: `extra__info transition-3 ${showSidebar ? "info-opened" : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "extra__info-inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "extra__info-close text-end",
                            onClick: ()=>setShowSidebar(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "extra__info-close-btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fal fa-times"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "side-mobile-menu d-block d-lg-none mm-menu",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            onClick: ()=>setShowSidebar(false),
                                            href: "/",
                                            children: "Home "
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        style: {
                                            maxHeight: "60vh",
                                            overflow: "auto"
                                        },
                                        className: `menu-item-has-children has-droupdown ${shop ? "active" : ""}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                onClick: ()=>handleMenuDropDown("shop"),
                                                children: "Products"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: `sub-menu ${shop ? "active" : ""}`,
                                                children: products?.map((menu, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "has-dropdown",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: `${menu.link}`,
                                                                children: menu.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                children: menu?.dropdownMenu?.map((m, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: `${m.link}`,
                                                                            children: m.title
                                                                        })
                                                                    }, index))
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                onClick: ()=>setShowSidebar(false),
                                                href: "/about",
                                                children: "About"
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: "Contact"
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setShowSidebar(false),
                className: `body-overlay transition-3 ${showSidebar ? "opened" : ""}`
            })
        ]
    });
};
/* harmony default export */ const sidebar = (Sidebar);


/***/ }),

/***/ 1998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const SEO = ({ pageTitle , font  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: pageTitle && `${pageTitle} || Olizana Olive Wood HandCrafts `
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    httpEquiv: "x-ua-compatible",
                    content: "ie=edge"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: " Olizana Olive Wood Best b2b company"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "robots",
                    content: "index, follow"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                }),
                font && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    href: font,
                    rel: "stylesheet"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "icon",
                    href: "/favicon.ico"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 4736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ extra_info),
  "j": () => (/* reexport */ logo)
});

;// CONCATENATED MODULE: ./public/assets/img/logo/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.92ab61e0.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4UlEQVR42mMAgasrnLn6Cg1Djs9zUGrLNnBb2Wamw4AMJOVlLd2slfOivVVWedgoH8qP1MlY1mKpurnfnItBQlaGV0xWLohJRLKWgUm828ZEyb4kTtu5p1BPa2OPNQ+DqqoyJ7+k5F5eCcktMBOvrdXXur5Oi48BBoSkpCcIS0uvArEXNOixT6vScOKSNWNigAELQ10moII2LgnpThsTBXd3K3VRkHicnwpEkbicrJKMgry5lLysAwOjtCSDiKykga4SJ8IKaWljMVnZYHE5+WQJWdkQCXm5KGkFBSkGBgYGAB5TLfkogX/vAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./data/header/header.js

const extra_info = [
    {
        class: "lang",
        title: "Language",
        listItems: [
            {
                link: "/",
                title: "English"
            },
            {
                link: "/",
                title: "France"
            }, 
        ]
    }, 
];
 // export default header;


/***/ }),

/***/ 2830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ty": () => (/* reexport */ data_banners),
  "ZF": () => (/* reexport */ data_blogs),
  "j4": () => (/* reexport */ home_slider),
  "po": () => (/* reexport */ header_nav_menus)
});

// UNUSED EXPORTS: brands, slider_data_7

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./data/banners.js

const banners = [
    // banner one
    {
        id: 1,
        img: "/assets/img/shop/banner/banner-sm-11.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                " ",
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                    children: [
                        "  ",
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Kitchen Products"
                        }),
                        " "
                    ]
                }),
                "  Over 20 models  ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "   "
            ]
        }),
        btnText: "Discover now",
        categ: "Kitchen"
    },
    {
        id: 2,
        img: "/assets/img/shop/banner/banner-sm-2.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                " ",
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                    children: [
                        "  ",
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Chess"
                        }),
                        "  "
                    ]
                }),
                " Over 10 models  ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "     "
            ]
        }),
        btnText: "Discover now",
        categ: "echec"
    },
    {
        id: 3,
        img: "/assets/img/shop/banner/banner-sm-3.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                " ",
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: " Accessories"
                        }),
                        " "
                    ]
                }),
                "  Over 20 models  ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "    "
            ]
        }),
        btnText: "Discover now",
        categ: "Decoration"
    },
    // banner two
    {
        id: 4,
        img: "/assets/img/shop/banner/banner-sm-133.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: " Spoons & Spatules"
                        }),
                        " "
                    ]
                }),
                "  Over 20 models  ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "  "
            ]
        }),
        btnText: "Discover now",
        categ: "spati&spoon"
    },
    {
        id: 5,
        img: "/assets/img/shop/banner/banner-acc.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: " Gifts and Decoration "
                        }),
                        " "
                    ]
                }),
                "  Over 20 models  ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "  "
            ]
        }),
        btnText: "Discover now",
        categ: "Gifts"
    },
    {
        id: 6,
        img: "/assets/img/shop/banner/banner-big-2.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: " Boards and Trays"
                        }),
                        " "
                    ]
                }),
                "  Over 20 models  ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "  "
            ]
        }),
        btnText: "Discover now",
        categ: "planche"
    },
    // banner three
    {
        id: 7,
        img: "/assets/img/shop/banner/02/1.png",
        title: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "FASHION FOR MEN\u2019S"
        }),
        desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
        btnText: "Shop Now"
    },
    {
        id: 8,
        img: "/assets/img/shop/banner/02/2.png",
        title: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "FASHION FOR WOMEN\u2019S"
        }),
        desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
        btnText: "Shop Now"
    },
    {
        id: 9,
        img: "/assets/img/shop/banner/02/3.png",
        title: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "FASHION FOR MEN\u2019S"
        }),
        desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
        btnText: "Shop Now"
    }, 
];
/* harmony default export */ const data_banners = (banners);

;// CONCATENATED MODULE: ./data/header/nav-menus.js
const nav_menus = [
    {
        link: "/",
        title: "Home"
    },
    {
        link: "/shop",
        title: "Products",
        hasDropdown: true,
        megamenu: true,
        dropdownItems: [
            {
                link: "/shop",
                title: "kitchen",
                dropdownMenu: [
                    {
                        link: "/product-details/ojkfZzzz3ioerklYDFjl",
                        title: "Wooden Cooking Spoon"
                    },
                    {
                        link: "/product-details/nKakmoFZwUGLPyhyC3yg",
                        title: "Cooking Spoon New Style"
                    },
                    {
                        link: "/product-details/dqEplTnx0hQ1fJ0Oxjkc",
                        title: "Wooden spoon for pasta"
                    },
                    {
                        link: "/product-details/jVz646e3EpZivPQ5WBjh",
                        title: "Large Olive Wood Spoon"
                    },
                    {
                        link: "/product-details/SXe2Lt1jnqNl3HhWquvM",
                        title: "Slotted spoon  olive wood"
                    }, 
                ]
            },
            {
                link: "/shop",
                title: "Chess Game",
                dropdownMenu: [
                    {
                        link: "/product-details/MDSeSNdhChIG3sohbfRI",
                        title: "  Chess  With 2 Storages "
                    },
                    {
                        link: "/product-details/LQZwE0VwyHmWwglHWFNP",
                        title: "Fancy Wooden Chess "
                    },
                    {
                        link: "/product-details/3k7esGoyBLuuP38ptGMJ",
                        title: "Wooden Chess Rustic Rough Edges"
                    },
                    {
                        link: "/product-details/1ROP7WtB4N9vOTfKTeUy",
                        title: "Sample Wooden Chess with storage"
                    }, 
                ]
            },
            {
                link: "/shop",
                title: "accessories",
                dropdownMenu: [
                    {
                        link: "/product-details/6SMbRoY5ToK8mNO3gLf3",
                        title: "Olive Wooden Pepper Mill"
                    },
                    {
                        link: "/product-details/6u7GtFZVb4Mxbf8grV1y",
                        title: "Olive Wooden Bowl and picker"
                    },
                    {
                        link: "/product-details/sCkczTzrnGtNLMb5tzzv",
                        title: "English Oak Salt And Pepper Mill "
                    },
                    {
                        link: "/product-details/Pv8GVwDhCsVCb8OShhGP",
                        title: "Olive Wooden Honey bottle with Dipper "
                    }, 
                ]
            }, 
        ]
    },
    {
        link: "/about",
        title: "About"
    },
    {
        link: "/contact",
        title: "Contact"
    }, 
];
/* harmony default export */ const header_nav_menus = (nav_menus);

;// CONCATENATED MODULE: ./data/brands.js
const brands = [
    {
        id: 1,
        img: "/assets/img/client/client-1.jpg"
    },
    {
        id: 1,
        img: "/assets/img/client/client-2.jpg"
    },
    {
        id: 1,
        img: "/assets/img/client/client-3.jpg"
    },
    {
        id: 1,
        img: "/assets/img/client/client-4.jpg"
    },
    {
        id: 1,
        img: "/assets/img/client/client-5.jpg"
    },
    {
        id: 1,
        img: "/assets/img/client/client-4.jpg"
    }, 
];
/* harmony default export */ const data_brands = ((/* unused pure expression or super */ null && (brands)));

;// CONCATENATED MODULE: ./data/blogs.js
const blogs = [
    // blog page
    {
        id: 1,
        img: "/assets/img/blog/blog-big-2.jpg",
        title: "Anteposuerit litterarum formas.",
        author: "Shahnewaz Sakil",
        date: "September 14, 2021",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the",
        masonry: true
    },
    {
        id: 2,
        img: "/assets/img/blog/blog-big-3.jpg",
        title: "Hanging fruit to identify a ballpark",
        author: "Naim Ahmed",
        date: "November 15, 2021",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the",
        masonry: true
    },
    {
        id: 3,
        img: "/assets/img/blog/blog-big-4.jpg",
        title: "The information highway will close",
        author: "Mamun Ahmed",
        date: "December 16, 2021",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the",
        masonry: true
    },
    {
        id: 4,
        img: "/assets/img/blog/blog-big-5.jpg",
        title: "Additional clickthroughs from DevOps",
        author: "Salim Rana",
        date: "January 16, 2022",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the",
        masonry: true
    },
    {
        id: 5,
        img: "/assets/img/blog/blog-big-6.jpg",
        title: "Ballpark value added activity",
        author: "Matiour Rahman",
        date: "January 22, 2022",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the"
    },
    {
        id: 6,
        img: "/assets/img/blog/blog-big-7.jpg",
        title: "Immersion along the information",
        author: "Farhan",
        date: "January 25, 2022",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the"
    },
    // blog one
    {
        id: 7,
        img: "/assets/img/blog/blog-1.jpg",
        title: "Anteposuerit litterarum formas.",
        author: "Shahnewaz Sakil",
        date: "September 14, 2021",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_one: true
    },
    {
        id: 8,
        img: "/assets/img/blog/blog-2.jpg",
        title: "Hanging fruit to identify",
        author: "Naim Ahmed",
        date: "November 14, 2021",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_one: true
    },
    {
        id: 9,
        img: "/assets/img/blog/blog-3.jpg",
        title: "The information highway will",
        author: "John Smith",
        date: "January 14, 2022",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_one: true
    },
    // mas
    {
        id: 10,
        img: "/assets/img/blog/masonary/blog-ms-2.jpg",
        title: "Hanging fruit to identify a ballpark",
        author: "Samrat",
        date: "January 28, 2022",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the",
        masonry: true
    },
    {
        id: 11,
        img: "/assets/img/blog/masonary/blog-ms-1.jpg",
        title: "Override the digital divide with",
        author: "Salim Rana",
        date: "February 28, 2022",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the",
        masonry: true
    },
    {
        id: 12,
        img: "/assets/img/blog/blog-2.jpg",
        title: "Hanging fruit to identify",
        author: "Naim Ahmed",
        date: "November 14, 2021",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_one: true,
        masonry: true
    },
    {
        id: 13,
        img: "/assets/img/blog/masonary/blog-ms-3.jpg",
        title: "Ballpark value added activity",
        author: "Naim Ahmed",
        date: "February 15, 2022",
        desc: "A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the",
        masonry: true
    },
    // blog 2
    {
        id: 14,
        img: "/assets/img/blog/2/blog-01.png",
        title: "Table With Resin Round",
        desc: "Elevate Your Space with Resin Rounded Tables",
        blog_two: true
    },
    {
        id: 15,
        img: "/assets/img/blog/2/blog-2.png",
        title: "Table With Resin Rectangular ",
        desc: "Discover the Beauty of Our Resin Rectangular Tables",
        blog_two: true
    },
    {
        id: 16,
        img: "/assets/img/blog/2/blog-03.png",
        title: " Olive Wood and Resin Tabletop Rounded",
        desc: "Elevate Your D\xe9cor with Our Olive Wood and Resin Tabletop",
        blog_two: true
    },
    {
        id: 17,
        img: "/assets/img/blog/2/blog-4.png",
        title: " Olive Wood and Resin Tabletop  Rectangular ",
        desc: "Elevate your living space with the exquisite beauty of our Olive Wood and Resin Tabletop",
        blog_two: true
    }, 
];
/* harmony default export */ const data_blogs = (blogs);

;// CONCATENATED MODULE: ./data/slider-data.js

const home_slider = [
    {
        id: 1,
        bgImg: "/assets/img/slider/slider-1.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Handmade ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Best Quality",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " B2B Business  "
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: " Are you looking for exquisite handmade products crafted from the finest Tunisian olive wood? Look no further! Our collection showcases the best quality Tunisian wood olive creations, meticulously crafted by skilled artisans."
        })
    },
    {
        id: 2,
        bgImg: "assets/img/slider/slider-2.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                " Innovation  ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Amazing Models "
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: " Think of Different Amazing Models of Innovation and artistic you can have a perfect gift for everyone on your list this year."
        })
    },
    {
        id: 3,
        bgImg: "assets/img/slider/slider-3.webp",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Big Variety",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "Best Story "
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "We have a wide variety of products in our story. We have a wide variety of story products to choose from. "
        })
    }, 
];
const slider_data_7 = [
    {
        id: 1,
        bgImg: "/assets/img/slider/05/slide111.webp",
        sm_title: "up to 50% off",
        meta: true,
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Life style that you ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "need, Yo."
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        })
    },
    {
        id: 2,
        bgImg: "/assets/img/slider/05/slide112.webp",
        sm_title: "Quick parcel delivery",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Creative theme ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "Awesome."
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        })
    },
    {
        id: 3,
        bgImg: "/assets/img/slider/05/slide113.webp",
        sm_title: "Quick parcel delivery",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "The world is",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                "make all."
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        })
    }, 
];

;// CONCATENATED MODULE: ./data/index.js









/***/ }),

/***/ 1542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const useCartInfo = ()=>{
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { 0: total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.cart.cartProducts);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const cart = cartItems.reduce((cartTotal, cartItem)=>{
            const { price , quantity  } = cartItem;
            const itemTotal = price * quantity;
            cartTotal.total += itemTotal;
            cartTotal.quantity += quantity;
            return cartTotal;
        }, {
            total: 0,
            quantity: 0
        });
        setQuantity(cart.quantity);
        setTotal(cart.total);
    }, [
        cartItems
    ]);
    return {
        quantity,
        total
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCartInfo);


/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2130);


const useGlobalContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .AppContext */ .I);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGlobalContext);


/***/ }),

/***/ 2185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSticky = ()=>{
    const { 0: headerSticky , 1: setHeaderSticky  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const stickyHeader = ()=>{
        if (window.scrollY > 80) {
            setHeaderSticky(false);
        } else {
            setHeaderSticky(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("scroll", stickyHeader);
    }, []);
    return {
        headerSticky
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSticky);


/***/ }),

/***/ 2822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/assets/img/logo/logo-2.png
/* harmony default export */ const logo_2 = ({"src":"/_next/static/media/logo-2.e1a425dc.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzElEQVR42mOAgZdbm8Te7O8RerGxVvrD2VlsDMjgXpsv9/3ukOyHk+PK7ncFzX08J93z7cE+jgeTohnBCu5U21ndrrTMuFNjt/puk0fhgwmRXk+XFGh8ujyfCarAtuZOlc0xBih4e6BX+8u1RWBJmAJ/ID58u9RY9NGMJPEnC3MtGIDg2cpSRobbFeZMUEWhQFPq7ja6mV60ZwDbfbfJnRFmgtydGnsvIPa+XWVjBKTN7tQ7syFbwQfEKkAJC6BDDYG05p1aBxYGBgYGADKCWsaqRcaFAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/assets/img/logo/facebook.png
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.d994430e.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9UlEQVR42h3KMUvDQBgG4Pe7iyWhQaRQh85dVPwHLoooONRRHRwc4+Aibm5ODs5dHP0b3RRcbaFDwUlLFRJs2kR7F3KvbefnkePbt3MAbQBVJeBH5hBbSqPisqBII7VAEalWPM2JhVzt1aR7v83ro/Ww82nb3gJBx2Gcyp8pcHK4heFoLP3BiHXfhZ4rS8ZJIsZYRAcNeFqhN/jBcz+VVTulmk5SJLlBs+7jrLUBpQSt/SZOd0K8dxKo35mRWuCx+21w8/CK0hGPTy+4uOtxczcURTITQEqCX+MCIJDllphRtCBTIhIBWCZ/RREAtZ4TkK8F+vIfP3JuSZ3NiM4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/img/logo/instagram.png
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.7e17fedd.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42gWATS4DUQCAv/f63sy0ZloloaXSoguJhUTiAo4iFo1DEBYOwM7GQSy6FBYSO4mI6KKUamKm087Mmx8Rd93bnknkuRnEXorlTLGZ4ES+XgrCTuVMPLWvRmLLXqkd7WJSyHKIhMXzzZjhY/lbtj/evc3jbfwwwYpnLGtDq7vAzkmDaj72pLs3cWTZUFczIkfhF4L07QtBhgFHFocD9OKc9eYPWhsUCXYQ4GIoEyPZ70el5oxSfU6nMaQqplSUwSnlrPIXS9ElQF0SNlwCZaG9AmoV9PU9a9XMF+ah2YPPi/wXz7xiq5cWqu/GYf0gGKmN039h011OIT9TfAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./layout/footers/footer.jsx






const footerWidget = [
    {
        id: 1,
        title: "information",
        footer__links: [
            {
                list: "About Us",
                link: "/about"
            },
            {
                list: "Delivery Inforamtion"
            },
            {
                list: "Privacy Policy"
            },
            {
                list: "Terms & Condition"
            }, 
        ]
    },
    {
        id: 2,
        title: "Customer Service",
        footer__links: [
            {
                list: "Shipping Policy"
            },
            {
                list: "Help & Contact Us",
                link: "/contact"
            },
            {
                list: "Returns & Refunds"
            },
            {
                list: "Online Stores"
            },
            {
                list: "Terms & Conditions"
            }, 
        ]
    }, 
];
const Footer = ({ df  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: `footer__area footer-bg ${df ? "box-m-15" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer__top pt-30 pb-60",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 col-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer__widget mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row footer__widget-title mb-25",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: logo_2,
                                                                alt: "logo",
                                                                width: "120vw",
                                                                height: "120vw"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-xl-6 col-lg-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "footer__social-list mb-20",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "https://www.instagram.com/olizanawood/",
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                                    src: instagram,
                                                                                    alt: "logo",
                                                                                    width: "30vw",
                                                                                    height: "30vw"
                                                                                }),
                                                                                "  "
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "https://www.facebook.com/profile.php?id=61553789957924",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                                    src: facebook,
                                                                                    alt: "logo",
                                                                                    width: "30vw",
                                                                                    height: "30vw"
                                                                                }),
                                                                                " "
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "footer__widget-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Olizana is a Tunisian company specializing in the making of articles using olive wood. Founded by enthusiasts of craftsmanship and environmental preservation, the company is committed to creating unique and sustainable products using olive wood, an abundant natural resource in Tunisia."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "footer__contact",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fal fa-map-marker-alt"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "text",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Add: route de tunis km8 sfax , Tunisia ."
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fal fa-envelope-open-text"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "text",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Email: Contact@olizana.com"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "icon",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fal fa-phone-alt"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "text",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Phone Number: (+216)50 049 000"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                footerWidget.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-3 col-md-3 col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer__widget mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `footer__widget-title ${item.id === 2 ? "mb-25" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer__widget-content",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "footer__links",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            children: item.footer__links.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: link.link ? link.link : "#",
                                                                        children: link.list
                                                                    })
                                                                }, index))
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }, item.id))
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer__copyright",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Copyright \xa9 ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: " Olizana "
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);


/***/ }),

/***/ 3734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6195);
/* harmony import */ var _data_header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4736);
/* harmony import */ var _redux_features_search_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3397);
/* harmony import */ var _components_common_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(995);
/* harmony import */ var _components_common_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5730);
/* harmony import */ var _hooks_use_sticky__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2185);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1542);
/* harmony import */ var _hooks_use_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(553);
/* harmony import */ var _components_common_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(531);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_cart__WEBPACK_IMPORTED_MODULE_8__]);
_components_common_cart__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const Header = ({ header_big , white_bg  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { headerSticky  } = (0,_hooks_use_sticky__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { quantity  } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const { setShowSidebar  } = (0,_hooks_use_context__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.cart.cartProducts);
    const [Langue, setlangue] = react__WEBPACK_IMPORTED_MODULE_13___default().useState(localStorage.getItem("lang"));
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        const local = localStorage.setItem("lang", Langue);
    }, []);
    const handellangue = (value)=>{
        localStorage.setItem("lang", value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "header-sticky",
                    className: `header__area ${header_big ? "box-25" : !white_bg && "grey-bg"} 
        ${headerSticky ? "sticky" : ""}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${header_big ? "container-fluid" : "container"}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _data_header_header__WEBPACK_IMPORTED_MODULE_5__/* .logo */ .j,
                                                alt: "logo",
                                                width: "80vw",
                                                height: "80vw"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-9 col-lg-9 col-md-8 col-sm-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "header__right p-relative d-flex justify-content-between align-items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "main-menu d-none d-lg-block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mobile-menu-btn d-lg-none",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>setShowSidebar(true),
                                                    className: "mobile-menu-toggle",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fas fa-bars"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "header__action",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                className: "search-toggle",
                                                                onClick: ()=>dispatch((0,_redux_features_search_slice__WEBPACK_IMPORTED_MODULE_6__/* .search_bar */ .zm)(true)),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "ion-ios-search-strong"
                                                                    }),
                                                                    " Search"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    className: "cart",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "ion-bag"
                                                                        }),
                                                                        " Quote Cart  ",
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                "(",
                                                                                cartItems.length,
                                                                                ")"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa fa-language",
                                                                            "aria-hidden": "true"
                                                                        }),
                                                                        "  "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "extra-info",
                                                                    children: _data_header_header__WEBPACK_IMPORTED_MODULE_5__/* .extra_info.map */ .G.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: `${item.class}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "extra-title",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                            children: item.title
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                                        children: item.listItems.map((list, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                onClick: ()=>handellangue(list.title.slice(0, 2)),
                                                                                                children: `${list.title}`
                                                                                            }, index))
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }, index))
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_search__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_sidebar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2830);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const Menu = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const local = localStorage.getItem("lang");
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: _data__WEBPACK_IMPORTED_MODULE_2__/* .nav_menus */ .po?.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: `${item.hasDropdown && !item.megamenu ? "active has-dropdown" : item.megamenu && "mega-menu has-dropdown"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `${item.link}`,
                            children: `${item.title}`
                        }),
                        item?.hasDropdown && !item.megamenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "submenu transition-3",
                            children: item?.dropdownItems?.map((menu, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `${menu.link}`,
                                        children: menu.title
                                    })
                                }, index))
                        }),
                        item.hasDropdown && item.megamenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "submenu transition-3",
                            style: {
                                background: `url(${"/assets/img/bg/mega-menu-bg.png"})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center right",
                                backgroundSize: "cover"
                            },
                            children: item.dropdownItems.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${menu.hasDropdown ? "has-dropdown" : ""}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: `${menu.link}`,
                                            children: menu.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: menu?.dropdownMenu?.map((m, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `${m.link}`,
                                                        children: m.title
                                                    })
                                                }, index))
                                        })
                                    ]
                                }, index))
                        })
                    ]
                }, index);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ })

};
;