"use strict";
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 5021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4071);
/* harmony import */ var _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9035);
/* harmony import */ var _modal_product_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1134);
/* harmony import */ var _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3921);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1492);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1838);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_3__, _modal_product_modal__WEBPACK_IMPORTED_MODULE_5__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _config__WEBPACK_IMPORTED_MODULE_11__]);
([_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_3__, _modal_product_modal__WEBPACK_IMPORTED_MODULE_5__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _config__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const settings = {
    autoplay: false,
    speed: 500,
    dots: true,
    fade: false,
    arrows: false,
    fade: true
};
const ProductDetails = ()=>{
    const { 0: product , 1: setdata  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const { 0: images , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const { 0: Tailles , 1: setTailles  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/"); // Split path into segments
    const lastSegment = segments[segments.length - 1];
    function checkInput(input) {
        if (input !== null) {
            console.log(input);
            return input;
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        const fetchCarListing = async ()=>{
            try {
                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(_config__WEBPACK_IMPORTED_MODULE_11__.db, "Produits", lastSegment);
                const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDoc)(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setdata({
                        ...data,
                        id: lastSegment
                    });
                    const imgs = [
                        data.photo1,
                        data.photo2,
                        data.photo3,
                        data.photo4,
                        data.photo5
                    ];
                    const Tails = [
                        data.Taille1 !== "" && data.Taille1,
                        data.Taille2 !== "" && data.Taille2,
                        data.Taille3 !== "" && data.Taille3,
                        data.Taille4 !== "" && data.Taille4,
                        data.Taille5 !== "" && data.Taille5
                    ];
                    setImages(imgs);
                    setTailles(Tails);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchCarListing();
    }, [
        lastSegment
    ]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_3__/* .cartProducts */ .qS);
    const { 0: Qte , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("");
    const { 0: Size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(product?.Taille1);
    const { 0: Ok , 1: setOk  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "shop__area pb-65",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "shop__top grey-bg-6 pt-20 pb-20",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-xl-6 col-lg-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                            className: `slider__area slider__area-4 p-relative`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                className: "slider-active",
                                                ...settings,
                                                children: images.filter((x)=>x !== null).map((img, index)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `single-slider slider__height  d-flex align-items-center`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: img,
                                                                alt: "",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "50vh"
                                                                }
                                                            })
                                                        })
                                                    }, index);
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-xl-6 col-lg-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "product__modal-content product__modal-content-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: product?.Label
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "product__price-2 mb-25",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                        children: [
                                                            "  # ",
                                                            product?.Freq
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "product__modal-des mb-30",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: product.Desc
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "product__modal-form mb-30",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "product__modal-required mb-5",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Repuired Fiields *"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "pro-quan-area d-flex justify-content-between",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "product__modal-input size mb-20",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                            children: [
                                                                                "Size ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fas fa-star-of-life"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        product.categ !== "echec" && product.categ !== "planche" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                    children: product.Taille1
                                                                                }),
                                                                                " "
                                                                            ]
                                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                            value: Size,
                                                                            onChange: (e)=>setSize(e.target.value),
                                                                            error: Ok && Size == "",
                                                                            required: true,
                                                                            disabled: Tailles.length == 0,
                                                                            children: [
                                                                                Tailles?.map((Ta, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                                                        children: [
                                                                                            " ",
                                                                                            Ta,
                                                                                            " "
                                                                                        ]
                                                                                    }, index)),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "All",
                                                                                    children: "For All Sizes"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "invalid-feedback",
                                                                            children: "Please choose a username."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "product__modal-input size mb-20",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                            id: "validationCustom04",
                                                                            children: [
                                                                                "Quantity ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: `fas fa-star-of-life }`
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                            id: "validationCustom04",
                                                                            value: Qte,
                                                                            onChange: (e)=>{
                                                                                setQuantity(e.target.value);
                                                                            },
                                                                            error: Ok && Qte == "",
                                                                            required: true,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "",
                                                                                    children: "- Please select -"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    children: " under 500 "
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    children: "500 -1000"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    children: "1000-2000 "
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    children: "2000-5000"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    children: "5000-10 000 "
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    children: "- + 10 000 -"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        Ok && Qte == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "text-danger",
                                                                            children: "Please choose a Quantity"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "pro-cart-btn",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                href: "#",
                                                                type: "submit",
                                                                onClick: ()=>{
                                                                    setOk(true);
                                                                    Ok && Qte && dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_3__/* .cart_product */ .Vu)({
                                                                        ...product,
                                                                        size: Size ? Size : product.Taille1,
                                                                        quantity: Qte
                                                                    }));
                                                                },
                                                                className: "add-cart-btn mb-20",
                                                                children: "+ Add to Quotation Cart "
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "product__tag mb-25",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Category:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                children: "Decor,"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                children: "handmade,"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                children: "Handcraft,"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                children: "Chess Game"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "product__share",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Share :"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "https://www.facebook.com/profile.php?id=61553789957924",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fab fa-facebook-f"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "https://www.instagram.com/olizanawood/",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fab fa-instagram"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "shop__bottom",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "product__details-tab",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "product__details-tab-nav text-center mb-45",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "nav nav-tabs justify-content-start justify-content-sm-center",
                                                        id: "pro-details",
                                                        role: "tablist",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "nav-item nav-link active",
                                                                id: "des-tab",
                                                                "data-bs-toggle": "tab",
                                                                href: "#des",
                                                                role: "tab",
                                                                "aria-controls": "des",
                                                                "aria-selected": "true",
                                                                children: "Description"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "nav-item nav-link",
                                                                id: "add-tab",
                                                                "data-bs-toggle": "tab",
                                                                href: "#add",
                                                                role: "tab",
                                                                "aria-controls": "add",
                                                                "aria-selected": "false",
                                                                children: "Additional Information"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "tab-content",
                                                id: "pro-detailsContent",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "tab-pane fade show active",
                                                        id: "des",
                                                        role: "tabpanel",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "product__details-des",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Olizana is a Tunisian company specializing in the construction of articles using olive wood. Founded by enthusiasts of craftsmanship and environmental preservation, the company is committed to creating unique and sustainable products using olive wood, an abundant natural resource in Tunisia"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "product__details-des-list mb-20",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "Exquisite Craftsmanship ."
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "Rich Aesthetics ."
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "Durability and Resilience."
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "Eco-Friendly Choice."
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "Smooth Texture."
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: "Distinctive Grain."
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "tab-pane fade",
                                                        id: "add",
                                                        role: "tabpanel",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "product__details-add",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Weight"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                product?.weight,
                                                                                " KG"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Dimention"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: product?.dimension
                                                                        })
                                                                    })
                                                                ]
                                                            })
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
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RelatedProducts, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_product_modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);
const RelatedProducts = ()=>{
    const trendingProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_4__/* .selectProducts */ .nR).filter((item)=>item.trending).map((product)=>product.product).flat().slice(0, 4);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const { 0: data , 1: setdata  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        const fetchProds = async ()=>{
            try {
                const Ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_config__WEBPACK_IMPORTED_MODULE_11__.db, "Produits");
                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.query)(Ref, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.where)("categ", "==", "echec"));
                const qSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)(q);
                const Array = [];
                qSnap.forEach((prod)=>{
                    return Array.push({
                        id: prod.id,
                        data: prod.data()
                    });
                });
                console.log(Array);
                setdata(Array);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProds();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "related__product pb-60",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: data.slice(0, 4).map((product, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-3 col-lg-3 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product__wrapper mb-60",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "product__thumb",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `/product-details/${product.id}`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "w-img",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: product.data.photo1,
                                                                alt: "product-img",
                                                                width: "100%",
                                                                height: "100%"
                                                            }),
                                                            product.thumb_img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "product__thumb-2",
                                                                src: product.data.photo2,
                                                                alt: "product-img",
                                                                width: "100%",
                                                                height: "100%"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "product__action transition-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>dispatch((0,_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_6__/* .add_to_wishlist */ .CZ)(product)),
                                                            href: "#",
                                                            "data-bs-toggle": "tooltip",
                                                            "data-bs-placement": "top",
                                                            title: "Add to Wishlist",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fal fa-heart"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: `/product-details/${product.id}`,
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
                                                            onClick: ()=>dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_4__/* .single_product */ .pQ)(product.id)),
                                                            href: "#",
                                                            "data-bs-toggle": "modal",
                                                            "data-bs-target": "#productModalId",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fal fa-search"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                product.product__sale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "product__sale",
                                                    children: product.product__sale.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: `${item === "new" ? "new" : "percent"}`,
                                                            children: item
                                                        }, index))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product__content p-relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "product__content-inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `/product-details/${product.id}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: product.data.Label
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }, index))
                    })
                ]
            })
        })
    });
} /*<div className="rating rating-shop mb-15">
                    <ul>
                      <li><span><i className="fas fa-star"></i></span></li>
                      <li><span><i className="fas fa-star"></i></span></li>
                      <li><span><i className="fas fa-star"></i></span></li>
                      <li><span><i className="fas fa-star"></i></span></li>
                      <li><span><i className="fal fa-star"></i></span></li>
                    </ul>
                    <span className="rating-no ml-10 rating-left">
                      {product?.rating} rating(s)
                    </span>
                    <span className="review rating-left"><a href="#">Add your Review</a></span>
                  </div>*/  /*<div className="product__modal-nav mr-20">
                    <nav>
                      <div className="nav nav-tabs" id="product-details" role="tablist">
                        {images?.map((img, index) => (
                          <a style={{height:100,width:100 }} key={index} className={`nav-item nav-link mb-20 ${index === 0 ? 'active' : ''}`}
                            id={`nav-${index}-tab`} data-bs-toggle="tab" href={`#nav-${index}`}
                            role="tab" aria-controls={`nav-${index}`}
                            aria-selected={index === 0 ? 'true' : 'false'}>
                            <div className="product__nav-img w-img">
                              <img src={img} alt=""   />
                            </div>
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>*/ ;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;