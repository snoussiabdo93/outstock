"use strict";
exports.id = 9645;
exports.ids = [9645];
exports.modules = {

/***/ 7038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.99244b61.png","height":23,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIElEQVR4nGM0NDTMZmBgeA/EkkDMAcRfgfgVEIsA8WEATewExu/NTfUAAAAASUVORK5CYII="});

/***/ }),

/***/ 5730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1542);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4071);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__]);
_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Cart = ()=>{
    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart.cartProducts);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const { total  } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mini-cart",
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
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: `/product-details/${item.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item.img,
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "cart-content f-left text-start",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: `/product-details/${item.id}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            children: [
                                                                item.title,
                                                                " "
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cart-price",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "ammount",
                                                            children: [
                                                                item.quantity,
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fal fa-times"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "price",
                                                            children: [
                                                                "$ ",
                                                                item.price
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "del-icon f-right mt-30",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__/* .remove_cart_product */ .uZ)(item)),
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
                                    children: "Subtotal:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "$",
                                        parseFloat(total)
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "checkout-link",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/cart",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "os-btn",
                                        children: "view Cart"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/checkout",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "os-btn os-btn-black",
                                        children: "Checkout"
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

/***/ 1187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(553);




const Sidebar = ()=>{
    const { showSidebar , setShowSidebar  } = (0,_hooks_use_context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { 0: home , 1: setHome  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: shop , 1: setShop  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: productPages , 1: setProductPages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: otherPages , 1: setOtherPages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
            setProductPages(false);
            setOtherPages(false);
            setBlog(false);
        }
        if (page === "product-pages") {
            setHome(false);
            setShop(false);
            setProductPages(!productPages);
            setOtherPages(false);
            setBlog(false);
        }
        if (page === "other-pages") {
            setHome(false);
            setShop(false);
            setProductPages(false);
            setOtherPages(!otherPages);
            setBlog(false);
        }
        if (page === "blog") {
            setHome(false);
            setShop(false);
            setProductPages(false);
            setOtherPages(false);
            setBlog(!blog);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: `extra__info transition-3 ${showSidebar ? "info-opened" : ""}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "extra__info-inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "extra__info-close text-end",
                            onClick: ()=>setShowSidebar(false),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "extra__info-close-btn",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fal fa-times"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: "side-mobile-menu d-block d-lg-none mm-menu",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: `menu-item-has-children has-droupdown ${home ? "active" : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>handleMenuDropDown("home"),
                                                children: "Home"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                onClick: ()=>setShowSidebar(false),
                                                className: `sub-menu ${home ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/",
                                                            children: "Home Style 1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/home-2",
                                                            children: "Home Style 2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/home-3",
                                                            children: "Home Style 3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/home-4",
                                                            children: "Home Style 4"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/home-5",
                                                            children: "Home Style 5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/home-6",
                                                            children: "Home Style 6"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/home-7",
                                                            children: "Home Style 7"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: `menu-item-has-children has-droupdown ${shop ? "active" : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>handleMenuDropDown("shop"),
                                                children: "Shop Shop"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                onClick: ()=>setShowSidebar(false),
                                                className: `sub-menu ${shop ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/shop",
                                                            children: "Standard Shop Page"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/shop-right",
                                                            children: "Shop Right Sidebar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/shop-4-col",
                                                            children: "Shop 4 Column"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/shop-3-col",
                                                            children: "Shop 3 Column"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/shop",
                                                            children: "Shop Page"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/shop",
                                                            children: "Shop Page"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/shop",
                                                            children: "Shop Infinity"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: `menu-item-has-children has-droupdown ${productPages ? "active" : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>handleMenuDropDown("product-pages"),
                                                children: "Product Pages"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                onClick: ()=>setShowSidebar(false),
                                                className: `sub-menu ${productPages ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/about",
                                                            children: "About"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/login",
                                                            children: "Login"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/creator",
                                                            children: "Creators"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/shop",
                                                            children: "Our Shop"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: `menu-item-has-children has-droupdown ${otherPages ? "active" : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>handleMenuDropDown("other-pages"),
                                                children: "Other Pages"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                onClick: ()=>setShowSidebar(false),
                                                className: `sub-menu ${otherPages ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/wishlist",
                                                            children: "Wishlist"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/cart",
                                                            children: "Shopping Cart"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/register",
                                                            children: "Register"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/login",
                                                            children: "Login"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: `menu-item-has-children has-droupdown ${blog ? "active" : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>handleMenuDropDown("blog"),
                                                children: "Blog"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                onClick: ()=>setShowSidebar(false),
                                                className: `sub-menu ${blog ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/blog",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/blog-left-sidebar",
                                                            children: "Blog Left Sidebar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/blog-no-sidebar",
                                                            children: "Blog No Sidebar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/blog-2-col",
                                                            children: "Blog 2 Column"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/blog-2-col-mas",
                                                            children: "BLog 2 Col Masonary"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/blog-3-col",
                                                            children: "Blog 3 Column"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/blog-details",
                                                            children: "Blog Details"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setShowSidebar(false),
                className: `body-overlay transition-3 ${showSidebar ? "opened" : ""}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


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
                    children: pageTitle && `${pageTitle} || Outstock - Clean, Minimal eCommerce React Next js Template}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    httpEquiv: "x-ua-compatible",
                    content: "ie=edge"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: "Generated by create next app"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "robots",
                    content: "noindex, follow"
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

/***/ 4808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ extra_info),
/* harmony export */   "j": () => (/* reexport safe */ _public_assets_img_logo_logo_png__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _public_assets_img_logo_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7038);

const extra_info = [
    {
        class: "my-account",
        title: "My Account",
        listItems: [
            {
                link: "/login",
                title: "My Account"
            },
            {
                link: "/wishlist",
                title: "Wishlist"
            },
            {
                link: "/cart",
                title: "Cart"
            },
            {
                link: "/checkout",
                title: "Checkout"
            },
            {
                link: "/register",
                title: "Create Account"
            }, 
        ]
    },
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
            {
                link: "/",
                title: "Germany"
            },
            {
                link: "/",
                title: "Bangla"
            }, 
        ]
    },
    {
        class: "currency",
        title: "Currency",
        listItems: [
            {
                link: "/",
                title: "USD - US Dollar"
            },
            {
                link: "/",
                title: "EUR - Ruro"
            },
            {
                link: "/",
                title: "GBP - Britis Pound"
            },
            {
                link: "/",
                title: "INR - Indian Rupee"
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
  "YS": () => (/* reexport */ data_brands),
  "j4": () => (/* reexport */ home_slider),
  "po": () => (/* reexport */ header_nav_menus),
  "J3": () => (/* reexport */ slider_data_7)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./data/banners.js

const banners = [
    // banner one
    {
        id: 1,
        img: "/assets/img/shop/banner/banner-sm-1.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Sunflower Clock ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Quartz Hands"
            ]
        }),
        btnText: "Discover now"
    },
    {
        id: 2,
        img: "/assets/img/shop/banner/banner-sm-2.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Chair Kimi No Isu ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Project"
            ]
        }),
        btnText: "Discover now"
    },
    {
        id: 3,
        img: "/assets/img/shop/banner/banner-sm-3.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Sweeper and Dustpan ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " by Jan Kochanski"
            ]
        }),
        btnText: "Discover now"
    },
    // banner two
    {
        id: 4,
        img: "/assets/img/shop/banner/banner-sm-4.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "British Made Pocket ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Knife - Oak"
            ]
        }),
        btnText: "Discover now"
    },
    {
        id: 5,
        img: "/assets/img/shop/banner/banner-sm-2.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Chair Kimi No Isu ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Project"
            ]
        }),
        btnText: "Discover now"
    },
    {
        id: 6,
        img: "/assets/img/shop/banner/banner-sm-5.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Merino Lambswool ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Scarf Moss"
            ]
        }),
        btnText: "Discover now"
    },
    // banner three
    {
        id: 7,
        img: "/assets/img/shop/banner/02/banner-1.webp",
        title: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "FASHION FOR MEN\u2019S"
        }),
        desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
        btnText: "Shop Now"
    },
    {
        id: 8,
        img: "/assets/img/shop/banner/02/banner-2.webp",
        title: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "FASHION FOR WOMEN\u2019S"
        }),
        desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
        btnText: "Shop Now"
    },
    {
        id: 9,
        img: "/assets/img/shop/banner/02/banner-3.webp",
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
        title: "Home",
        hasDropdown: true,
        megamenu: false,
        dropdownItems: [
            {
                link: "/",
                title: "Home Style 1"
            },
            {
                link: "/home-2",
                title: "Home Style 2"
            },
            {
                link: "/home-3",
                title: "Home Style 3"
            },
            {
                link: "/home-4",
                title: "Home Style 4"
            },
            {
                link: "/home-5",
                title: "Home Style 5"
            },
            {
                link: "/home-6",
                title: "Home Style 6"
            },
            {
                link: "/home-7",
                title: "Home Style 7"
            }, 
        ]
    },
    {
        link: "/shop",
        title: "Shop",
        hasDropdown: true,
        megamenu: true,
        dropdownItems: [
            {
                link: "/shop",
                title: "Shop Pages",
                dropdownMenu: [
                    {
                        link: "/shop",
                        title: "Standard Shop Page"
                    },
                    {
                        link: "/shop-right",
                        title: "Shop Right Sidebar"
                    },
                    {
                        link: "/shop-4-col",
                        title: "Shop 4 Column"
                    },
                    {
                        link: "/shop-3-col",
                        title: "Shop 3 Column"
                    },
                    {
                        link: "/shop",
                        title: "Shop Page"
                    },
                    {
                        link: "/shop",
                        title: "Shop Page"
                    },
                    {
                        link: "/shop",
                        title: "Shop Infinity"
                    }, 
                ]
            },
            {
                link: "/shop",
                title: "Products Pages",
                dropdownMenu: [
                    {
                        link: "/product-details",
                        title: "Product Details"
                    },
                    {
                        link: "/product-details",
                        title: "Product Page V2"
                    },
                    {
                        link: "/product-details",
                        title: "Product Page V3"
                    },
                    {
                        link: "/product-details",
                        title: "Product Page V4"
                    },
                    {
                        link: "/product-details",
                        title: "Simple Product"
                    },
                    {
                        link: "/product-details",
                        title: "Variable Product"
                    },
                    {
                        link: "/product-details",
                        title: "External Product"
                    }, 
                ]
            },
            {
                link: "/shop",
                title: "Other Shop Pages",
                dropdownMenu: [
                    {
                        link: "/wishlist",
                        title: "Wishlist"
                    },
                    {
                        link: "/cart",
                        title: "Shopping Cart"
                    },
                    {
                        link: "/checkout",
                        title: "Checkout"
                    },
                    {
                        link: "/register",
                        title: "Register"
                    },
                    {
                        link: "/login",
                        title: "Login"
                    }, 
                ]
            }, 
        ]
    },
    {
        link: "/blog",
        title: "Blog",
        hasDropdown: true,
        megamenu: false,
        dropdownItems: [
            {
                link: "/blog",
                title: "Blog"
            },
            {
                link: "/blog-left-sidebar",
                title: "Blog Left Sidebar"
            },
            {
                link: "/blog-no-sidebar",
                title: "Blog No Sidebar"
            },
            {
                link: "/blog-2-col",
                title: "Blog 2 Column"
            },
            {
                link: "/blog-2-col-mas",
                title: "Blog 2 Column Masonary"
            },
            {
                link: "/blog-3-col",
                title: "Blog 3 Column"
            },
            {
                link: "/blog-details",
                title: "Blog Details"
            }, 
        ]
    },
    {
        link: "/shop",
        title: "Pages",
        hasDropdown: true,
        megamenu: false,
        dropdownItems: [
            {
                link: "/wishlist",
                title: "Wishlist"
            },
            {
                link: "/cart",
                title: "Shopping Cart"
            },
            {
                link: "/checkout",
                title: "Checkout"
            },
            {
                link: "/register",
                title: "Register"
            },
            {
                link: "/login",
                title: "Login"
            },
            {
                link: "/404",
                title: "Error 404"
            }, 
        ]
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
/* harmony default export */ const data_brands = (brands);

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
        img: "/assets/img/blog/2/blog-01.webp",
        title: "Amy Schumer Doesn\u2019t Care",
        author: "Theme_pure Admin",
        date: "February 7, 2022",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_two: true
    },
    {
        id: 15,
        img: "/assets/img/blog/2/blog-02.webp",
        title: "How to choose right jeans?",
        author: "Theme_pure Admin",
        date: "February 15, 2022",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_two: true
    },
    {
        id: 16,
        img: "/assets/img/blog/2/blog-03.webp",
        title: "Fashion T-shirts - the main",
        author: "Theme_pure Admin",
        date: "February 16, 2022",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_two: true
    },
    {
        id: 17,
        img: "/assets/img/blog/2/blog-04.webp",
        title: "Fashion coats 2022: key trends",
        author: "Theme_pure Admin",
        date: "March 16, 2022",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_two: true
    },
    {
        id: 18,
        img: "/assets/img/blog/2/blog-05.webp",
        title: "Boots - novelties of this s.",
        author: "Theme_pure Admin",
        date: "March 10, 2022",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_two: true
    },
    {
        id: 19,
        img: "/assets/img/blog/2/blog-06.webp",
        title: "Choose your best shirt",
        author: "Theme_pure Admin",
        date: "March 18, 2022",
        desc: "Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        blog_two: true
    }, 
];
/* harmony default export */ const data_blogs = (blogs);

;// CONCATENATED MODULE: ./data/slider-data.js

const home_slider = [
    {
        id: 1,
        bgImg: "/assets/img/slider/slider-1.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Handmade ",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Hand carved Coffee"
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day."
        })
    },
    {
        id: 2,
        bgImg: "assets/img/slider/slider-2.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "Think Different &",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " Do it otherwise"
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        })
    },
    {
        id: 3,
        bgImg: "assets/img/slider/slider-3.jpg",
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "High Beam",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                " by Tom Chung"
            ]
        }),
        subtitle: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "High Beam is an adjustable desk or shelf light that offers a wide variety of lighting possibilities."
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
            setHeaderSticky(true);
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

/***/ 6195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2830);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Menu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: _data__WEBPACK_IMPORTED_MODULE_1__/* .nav_menus */ .po?.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: `${item.hasDropdown && !item.megamenu ? "active has-dropdown" : item.megamenu && "mega-menu has-dropdown"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `${item.link}`,
                            children: `${item.title}`
                        }),
                        item?.hasDropdown && !item.megamenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "submenu transition-3",
                            children: item?.dropdownItems?.map((menu, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `${menu.link}`,
                                        children: menu.title
                                    })
                                }, index))
                        }),
                        item.hasDropdown && item.megamenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "submenu transition-3",
                            style: {
                                background: `url(${"/assets/img/bg/mega-menu-bg.jpg"})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center right",
                                backgroundSize: "cover"
                            },
                            children: item.dropdownItems.map((menu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${menu.hasDropdown ? "has-dropdown" : ""}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `${menu.link}`,
                                            children: menu.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: menu?.dropdownMenu?.map((m, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
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