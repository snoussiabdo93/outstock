"use strict";
exports.id = 4929;
exports.ids = [4929];
exports.modules = {

/***/ 4929:
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4071);
/* harmony import */ var _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9035);
/* harmony import */ var _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3921);
/* harmony import */ var _modal_product_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__, _modal_product_modal__WEBPACK_IMPORTED_MODULE_7__]);
([_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__, _modal_product_modal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// slick setting
const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const Products = ()=>{
    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_5__/* .selectProducts */ .nR);
    const products_1 = products.map((item)=>item.product).flat().slice(0, 3);
    const products_2 = products.map((item)=>item.product).flat().slice(3, 6);
    const big_2_product = products.map((item)=>item.product).flat().find((item)=>item.big_2);
    const big_3_product = products.map((item)=>item.product).flat().find((item)=>item.big_3);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "product__area pt-60 pb-65",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "section__title-wrapper text-center mb-55",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "section__title mb-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "Trending Products"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "section__sub-title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Mirum est notare quam littera gothica quam nunc putamus parum claram!"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xl-6 col-lg-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product__slider-3 owl-carousel",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                ...settings,
                                                children: products_1.map((item, index)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "product__item",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "product__wrapper mb-60",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "product__thumb",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: `/product-details/${item.id}`,
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    className: "w-img",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: item.img,
                                                                                            alt: "product-img"
                                                                                        }),
                                                                                        item.thumb_img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            className: "product__thumb-2",
                                                                                            src: item.thumb_img,
                                                                                            alt: "product-img"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "product__action transition-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        onClick: ()=>dispatch((0,_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__/* .add_to_wishlist */ .CZ)(item)),
                                                                                        "data-bs-toggle": "tooltip",
                                                                                        "data-bs-placement": "top",
                                                                                        title: "Add to Wishlist",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fal fa-heart"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                        href: `/product-details/${item.id}`,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            "data-bs-toggle": "tooltip",
                                                                                            "data-bs-placement": "top",
                                                                                            title: "Details",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fal fa-link"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        onClick: ()=>dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_5__/* .single_product */ .pQ)(item.id)),
                                                                                        href: "#",
                                                                                        "data-bs-toggle": "modal",
                                                                                        "data-bs-target": "#productModalId",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fal fa-search"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            item.product__sale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "product__sale",
                                                                                children: item.product__sale.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: `${item === "new" ? "new" : "percent"}`,
                                                                                        children: item
                                                                                    }, index))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "product__content p-relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "product__content-inner",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                            href: `/product-details/${item.id}`,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                children: item.title
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "product__price transition-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                children: [
                                                                                                    "$",
                                                                                                    item.price,
                                                                                                    ".00"
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                className: "old-price",
                                                                                                children: [
                                                                                                    "$",
                                                                                                    item.old_price,
                                                                                                    ".00"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "add-cart p-absolute transition-3",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    onClick: ()=>dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__/* .cart_product */ .Vu)(item)),
                                                                                    children: "+ Add to Cart"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }, index)
                                                        })
                                                    }, index);
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product__banner mb-30",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: `/product-details/${big_3_product.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "w-img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: big_3_product.img,
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xl-6 col-lg-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product__banner w-img pb-25 mb-30",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: `/product-details/${big_2_product.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "w-img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: big_2_product.img,
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product__slider-3 owl-carousel",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                ...settings,
                                                children: products_2.map((item, index)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "product__item",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "product__wrapper mb-60",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "product__thumb",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: `/product-details/${item.id}`,
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    className: "w-img",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: item.img,
                                                                                            alt: "product-img"
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            className: "product__thumb-2",
                                                                                            src: item.thumb_img,
                                                                                            alt: "product-img"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "product__action transition-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        onClick: ()=>dispatch((0,_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__/* .add_to_wishlist */ .CZ)(item)),
                                                                                        "data-bs-toggle": "tooltip",
                                                                                        "data-bs-placement": "top",
                                                                                        title: "Add to Wishlist",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fal fa-heart"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                        href: `/product-details/${item.id}`,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            "data-bs-toggle": "tooltip",
                                                                                            "data-bs-placement": "top",
                                                                                            title: "Details",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fal fa-link"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        onClick: ()=>dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_5__/* .single_product */ .pQ)(item.id)),
                                                                                        href: "#",
                                                                                        "data-bs-toggle": "modal",
                                                                                        "data-bs-target": "#productModalId",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fal fa-search"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            item.product__sale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "product__sale",
                                                                                children: item.product__sale.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: `${item === "new" ? "new" : "percent"}`,
                                                                                        children: item
                                                                                    }, index))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "product__content p-relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "product__content-inner",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                            href: `/product-details/${item.id}`,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                children: item.title
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "product__price transition-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                children: [
                                                                                                    "$",
                                                                                                    item.price,
                                                                                                    ".00"
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                className: "old-price",
                                                                                                children: [
                                                                                                    "$",
                                                                                                    item.old_price,
                                                                                                    ".00"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "add-cart p-absolute transition-3",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    onClick: ()=>dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__/* .cart_product */ .Vu)(item)),
                                                                                    children: "+ Add to Cart"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }, index)
                                                        })
                                                    }, index);
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_product_modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;