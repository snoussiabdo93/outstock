"use strict";
exports.id = 631;
exports.ids = [631];
exports.modules = {

/***/ 2130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ AppContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9035);




const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AppProvider = ({ children  })=>{
    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .selectProducts */ .nR).map((item)=>item.product).flat();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const product = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .selectProduct */ .Fn);
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(products);
    const { 0: categoryActive , 1: setCategoryActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500);
    const { 0: sizeActive , 1: setSizeActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: color , 1: setColor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: showSidebar , 1: setShowSidebar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // handle Category Change
    const handleCategoryChange = (category)=>{
        setCategoryActive(category);
        const newProducts = products.filter((item)=>item.category === category);
        setItems(newProducts);
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_force_page */ .CF)(0));
    };
    // handle price change
    const handlePriceChange = (value)=>{
        setPrice(value);
        const newProducts = products.filter((item)=>item.price < value);
        setItems(newProducts);
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_force_page */ .CF)(0));
    };
    // handle sizes
    const handleProductSizes = (size)=>{
        setSizeActive(size);
        const newProducts = products.filter((item)=>item.sizes.indexOf(size) > -1);
        setItems(newProducts);
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_force_page */ .CF)(0));
    };
    // handle sizes
    const handleColors = (color)=>{
        setColor(color);
        const newProducts = products.filter((item)=>item.colors.indexOf(color) > -1);
        setItems(newProducts);
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_force_page */ .CF)(0));
    };
    // handle select change
    const handleSelectChange = (e)=>{
        if (e.target.value === "Default Sorting") {
            setItems(products);
        }
        if (e.target.value === "Short by new") {
            const newProducts = products.filter((item)=>item.product__sale?.indexOf("new") > -1);
            setItems(newProducts);
        }
        if (e.target.value === "Short by featured") {
            const newProducts1 = products.filter((item)=>item.feature_prd);
            setItems(newProducts1);
        }
        if (e.target.value === "Short by price") {
            const newProducts2 = products.sort((a, b)=>a.price - b.price);
            setItems(newProducts2);
        }
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_force_page */ .CF)(0));
    };
    // filtering brand 
    const filteringBrands = (brand)=>{
        const filtering_brands = products.filter((b)=>b.brand.toLowerCase() === brand.toLowerCase());
        setItems(filtering_brands);
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .add_force_page */ .CF)(0));
    };
    // reset filtering
    const resetFiltering = ()=>{
        handleCategoryChange("");
        filteringBrands("");
        handleColors("");
        handleProductSizes("");
        handlePriceChange(500);
        setItems(products);
    };
    // all values
    const value = {
        items,
        setItems,
        price,
        setPrice,
        handleCategoryChange,
        categoryActive,
        handlePriceChange,
        price,
        handleProductSizes,
        sizeActive,
        handleColors,
        color,
        handleSelectChange,
        showSidebar,
        setShowSidebar,
        product,
        resetFiltering,
        filteringBrands
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: value,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppProvider);


/***/ }),

/***/ 4071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vu": () => (/* binding */ cart_product),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h9": () => (/* binding */ clear_cart),
/* harmony export */   "qS": () => (/* binding */ cartProducts),
/* harmony export */   "uZ": () => (/* binding */ remove_cart_product)
/* harmony export */ });
/* unused harmony exports cartSlice, decrease_quantity */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    cartProducts: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        cart_product: (state, { payload  })=>{
            const productIndex = state.cartProducts.findIndex((item)=>item.id == payload.id);
            if (productIndex >= 0) {
                state.cartProducts[productIndex].quantity = payload.quantity;
                if (!state.cartProducts[productIndex].sizes.find((x)=>x == payload.size)) {
                    if (payload.size == "All") {
                        state.cartProducts[productIndex].sizes = [
                            "All"
                        ];
                    } else {
                        state.cartProducts[productIndex].sizes = state.cartProducts[productIndex].sizes.filter((x)=>x !== "All");
                        state.cartProducts[productIndex].sizes.push(payload.size);
                    }
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Modified Product Sizes", {
                        position: "top-left"
                    });
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Modified Product Quantity", {
                        position: "top-left"
                    });
                }
            } else {
                const tempProduct = {
                    ...payload,
                    quantity: payload.quantity,
                    sizes: [
                        payload.size
                    ]
                };
                state.cartProducts.push(tempProduct);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${payload.Label} added to cart`, {
                    position: "top-left"
                });
            }
        },
        decrease_quantity: (state, { payload  })=>{
            const cartIndex = state.cartProducts.findIndex((item)=>item.id === payload.id);
            if (state.cartProducts[cartIndex].quantity > 1) {
                state.cartProducts[cartIndex].quantity -= 1;
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`Decrease cart quantity`, {
                    position: "top-left"
                });
            }
        },
        remove_cart_product: (state, { payload  })=>{
            state.cartProducts = state.cartProducts.filter((item)=>item.id !== payload.id);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`remove from your cart`, {
                position: "top-left"
            });
        },
        clear_cart: (state, { payload  })=>{
            const confirmMsg = window.confirm("Are you sure deleted your all cart items ?");
            if (confirmMsg) {
                state.cartProducts = [];
            }
        }
    }
});
const { cart_product , remove_cart_product , decrease_quantity , clear_cart  } = cartSlice.actions;
const cartProducts = (state)=>state.cart.cartProducts;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CF": () => (/* binding */ add_force_page),
  "Xn": () => (/* binding */ add_item_offset),
  "ZP": () => (/* binding */ product_slice),
  "Fn": () => (/* binding */ selectProduct),
  "nR": () => (/* binding */ selectProducts),
  "pQ": () => (/* binding */ single_product),
  "E4": () => (/* binding */ specific_product)
});

// UNUSED EXPORTS: priceFilter, productSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./data/products.js
const products = [
    {
        id: 1,
        trending: true,
        product: [
            {
                id: 1,
                img: "/assets/img/shop/product/product-1.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-1.png"
                    },
                    {
                        src: "/assets/img/shop/product/1.png"
                    },
                    {
                        src: "/assets/img/shop/product/2.png"
                    },
                    {
                        src: "/assets/img/shop/product/3.png"
                    },
                    {
                        src: "/assets/img/shop/product/4.png"
                    },
                    {
                        src: "/assets/img/shop/product/5.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-1.png",
                category: "Cuill\xe8re",
                titleFr: "Cuill\xe8re de cuisine",
                titleAn: "Kitchen spoon",
                price: "plus de 50 pieces pour commandez",
                old_price: 120.00,
                rating: 5,
                descFr: "Cuill\xe8re de cuisine personnalis\xe9e faite \xe0 la main \xe0 partir de bois d olivier  Cuill\xe8re en bois pour la cuisson  Cuill\xe8re en bois d olivier",
                descAn: "Customized kitchen spoon handmade from olive wood Wooden spoon for cooking Olive wood spoon",
                sizes: [
                    "L",
                    "XL",
                    "XXL"
                ],
                weight: .25,
                dimension: "35 / 18,3",
                brand: "sony"
            },
            {
                id: 2,
                img: "/assets/img/shop/product/product-5.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-5.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-5.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-5.png",
                category: "Spatule",
                titleFr: "Spatule 30 cm ",
                price: "plus de 50 pieces pour commandez",
                old_price: 110.00,
                product__sale: [
                    "new",
                    "16%"
                ],
                rating: 4,
                descFr: " spatules en bois d olivier | Ustensiles en bois faits \xe0 la main \xe0 partir de bois d olivier tunisien",
                descAn: "olive wood spatulas | Handcrafted wooden utensils from Tunisian olive wood",
                weight: .27,
                dimension: "30cm/ 11.8 Inch",
                brand: "panasonic"
            }, 
        ]
    },
    {
        id: 2,
        trending: true,
        product: [
            {
                id: 3,
                img: "/assets/img/shop/product/product-2.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-2.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-2.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-2.png",
                category: "Cuillere",
                titleFr: "Cuill\xe8re \xe0 p\xe2tes ",
                titleAn: "Pasta Spoon ",
                price: "plus de 10 pieces pour commandes",
                old_price: 112.00,
                rating: 3.5,
                product__sale: [
                    "new",
                    "16%"
                ],
                descFr: "Cuill\xe8re \xe0 p\xe2tes  faite \xe0 la main \xe0 partir de bois d olivier / Cuill\xe8re en bois pour p\xe2tes / Cuill\xe8re de cuisson",
                descAn: "Handmade pasta spoon from olive wood / Wooden pasta spoon / Cooking spoon",
                sizes: [
                    "S",
                    "M",
                    "L", 
                ],
                colors: [
                    "Green",
                    "White",
                    " Ocean Blue"
                ],
                weight: .25,
                dimension: "30cm / 13,7 Inch ",
                brand: "panasonic"
            },
            {
                id: 4,
                img: "/assets/img/shop/product/product-4.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-4.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-4.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-4.png",
                category: "Cuill\xe8re",
                titleAn: "Split spoon  ",
                titleFr: "Cuill\xe8re fendue",
                price: "Plus de 10 pieces pour commandes",
                rating: 3,
                descAn: "Split spoon handmade from olive wood ",
                descFr: "Cuill\xe8re fendue fabriqu\xe9e \xe0 la main en bois d olivier ",
                weight: .22,
                dimension: "30 cm / 11.8 Inch",
                brand: "samsung"
            }, 
        ]
    },
    {
        id: 3,
        trending: true,
        product: [
            {
                id: 5,
                img: "/assets/img/shop/product/product-3.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-3.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-3.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-3.png",
                category: "Spatule",
                titleFr: "Spatule \xe0 cr\xeape en bois",
                titleAn: "Wooden crepe spatula",
                price: "plus de 100 pieces pour commandez",
                descFr: "Spatule \xe0 cr\xeape en bois, taille parfaite pour s adapter \xe0 la po\xeale \xe0 cr\xeape moyenne, spatule \xe0 cr\xeape en bois d olivier 100 % naturel",
                descAn: "Wooden crepe spatula, perfect size to fit the medium crepe pan, crepe spatula made of 100% natural olive wood.",
                weight: .23,
                dimension: "35 cm / 13.7 inch",
                brand: "apple"
            },
            {
                id: 6,
                img: "/assets/img/shop/product/product-8.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-8.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-8.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-8.png",
                category: "Spatule ",
                titleFr: "Spatule 12 pouces",
                titleAn: "Spatula 12 pouces",
                price: "plus de 50 pieces pour commandez",
                old_price: 102.00,
                rating: 3.7,
                product__sale: [
                    "new",
                    "19%"
                ],
                descFr: "Spatule en bois d\u2019olivier 12 pouces / Cuisine en bois Spatule \xe0 bord tranchant  Ustensile de cuill\xe8re de cuisson pour une utilisation avec des casseroles antiadh\xe9sives",
                descAn: "Olive wood spatula 12 inches / Kitchen wood Spatula with sharp edge Cooking spoon utensil for use with non-stick pans",
                weight: .22,
                dimension: "25cm/12pouces",
                brand: "Olizana"
            }, 
        ]
    },
    {
        id: 4,
        trending: true,
        product: [
            {
                id: 7,
                img: "/assets/img/shop/product/product-6.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-6.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-6.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-6.png",
                category: "Spatule",
                titleFr: "spatule en bois perc\xe9es trous",
                titleAn: "wooden spatula with holes",
                price: "plus de 50 pieces pour commandez",
                old_price: 90.00,
                rating: 3.9,
                product__sale: [
                    "new",
                    "22%"
                ],
                descFr: "spatules en bois perc\xe9es avec trous faits \xe0 la main \xe0 partir de bois d\u2019olivier tunisien \xe0 utiliser avec des casseroles antiadh\xe9sives ",
                descAn: "pierced wooden spatulas with holes handcrafted from Tunisian olive wood for use with non-stick pans",
                weight: .22,
                dimension: "25cm/12pouces",
                brand: "samsung"
            },
            {
                id: 8,
                img: "/assets/img/shop/product/product-10.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-10.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-10.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-10.png",
                category: "Cuillere",
                titleFr: "Handmade salad fork",
                titleAn: "Fourchette \xe0 salade",
                price: "plus de 50 pieces pour commandez",
                old_price: 95.00,
                rating: 3.4,
                descAn: "Handmade salad fork from olive wood / personalized wooden fork / wooden salad fork / wooden salad cutlery",
                descFr: "Fourchette \xe0 salade faite \xe0 la main \xe0 partir de bois d olivier / fourchette en bois personnalis\xe9e / fourchette en bois pour salade / couverts \xe0 salade en bois",
                sizes: [
                    "S",
                    "XL"
                ],
                weight: .29,
                dimension: "30cm||25cm||20cm",
                brand: "apple"
            }, 
        ]
    },
    {
        id: 5,
        trending: true,
        product: [
            {
                id: 9,
                img: "/assets/img/shop/product/product-7.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-7.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-7.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-7.png",
                category: "Cuillere",
                titleAn: "Wooden spoon (split)",
                titleFr: "Cuill\xe8re en bois (fendue) 30 cm",
                price: "plus de 50 pieces pour commandez",
                old_price: 88.00,
                rating: 4,
                product__sale: [
                    "new"
                ],
                descFr: "Cuill\xe8re en bois (fendue) / Spatule fendue / Spatule faite \xe0 la main / Cuill\xe8re d olive grav\xe9e pour la cuisson",
                descAn: "Wooden spoon (split) / Split spatula / Handmade spatula / Olive spoon engraved for cooking",
                weight: .22,
                dimension: "30cm / 11.8 inch",
                brand: "sony"
            },
            {
                id: 10,
                img: "/assets/img/shop/product/product-9.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-9.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-9.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-9.png",
                category: "Cuillere",
                titleFr: "Couverts \xe0 salade en bois",
                titleAn: "Handmade wooden salad servers",
                price: "plus de 50 pieces pour commandez",
                old_price: 92.00,
                product__sale: [
                    "new"
                ],
                descAn: "Couverts \xe0 salade en bois faits \xe0 la main \xe0 partir de bois d olivier tunisien | Lot de 2 mains \xe0 salade | Cuisine durable",
                descFr: "Handmade wooden salad servers from Tunisian olive wood | Set of 2 salad servers | Sustainable cooking",
                weight: .29,
                dimension: "20cm",
                brand: "panasonic"
            }, 
        ]
    },
    {
        id: 6,
        trending: true,
        product: [
            {
                id: 11,
                img: "/assets/img/shop/product/product-14.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-14.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-14.png",
                category: "accessoire",
                titleFr: "Plat coeur",
                titleAn: "olive wood heart dish",
                price: "plus de 50 pieces pour commandez",
                old_price: 75.00,
                rating: 4,
                descFr: "Plat coeur fait \xe0 la main en bois d olivier| Bol coeur en bois",
                descAn: "Handmade olive wood heart dish| Wooden heart bowl",
                weight: .22,
                dimension: "62 \xd7 59 \xd7 12",
                brand: "samsung"
            },
            {
                id: 12,
                img: "/assets/img/shop/product/product-11.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-11.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-11.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-11.png",
                category: "Spatule",
                titleFr: "Spatule fendue 35 cm",
                titleAn: "Split spatula 35 cm",
                price: "plus de 50 pieces pour commandez",
                old_price: 66.00,
                rating: 3.5,
                product__sale: [
                    "new",
                    "23%"
                ],
                descFr: "Spatule fendue faite \xe0 la main \xe0 partir de bois d olivier",
                descAn: "Split spatula handmade from olive wood",
                weight: .30,
                dimension: "35 cm/13.7 inch",
                brand: "apple"
            }, 
        ]
    },
    {
        id: 7,
        product: [
            {
                id: 13,
                img: "/assets/img/shop/product/product-12.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-12.png"
                    },
                    {
                        src: "/assets/img/shop/product/product-t-12.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-t-12.png",
                category: "Cuillere",
                titleFr: "Cuill\xe8re de cuisine 35 cm ",
                titleAn: "kitchen spoon 35 cm ",
                price: "plus de 50 pieces pour commandez",
                old_price: 112.00,
                rating: 4,
                descFr: "Cuill\xe8re de cuisine faite \xe0 la main \xe0 partir de bois d olivier",
                descAn: "Handmade kitchen spoon from olive wood",
                weight: .17,
                dimension: "35cm / 13.7 inch ",
                brand: "sony"
            },
            {
                id: 14,
                img: "/assets/img/shop/product/product-15.png",
                images: [
                    {
                        src: "/assets/img/shop/product/product-15.png"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-15.png",
                category: "accessoires",
                titleFr: "Plat coeur ",
                titleAn: "wood heart dish",
                price: "plus de 50 pieces pour commandez",
                old_price: 142.00,
                product__sale: [
                    "new",
                    "25%"
                ],
                descFr: "Plat coeur fait \xe0 la main en bois d olivier| Bol coeur en bois | Plateau coeur en bois ",
                descAn: "Handmade olive wood heart dish| Wooden heart bowl | Wooden heart tray",
                dimension: "12cm",
                brand: "panasonic"
            }, 
        ]
    }, 
];
/* harmony default export */ const data_products = (products);

;// CONCATENATED MODULE: ./redux/features/product-slice.js


const initialState = {
    products: data_products,
    product: {},
    priceFilter: null,
    item_offset: 0,
    forcePage: null
};
const productSlice = (0,toolkit_.createSlice)({
    name: "products",
    initialState,
    reducers: {
        single_product: (state, { payload  })=>{
            state.product = state.products.map((item)=>item.product).flat().find((product)=>product.id === payload);
        },
        specific_product: (state, { payload  })=>{
            state.product = state.products.map((item)=>item.product).flat().find((item)=>item.id == payload);
        },
        add_item_offset: (state, { payload  })=>{
            state.item_offset = payload;
        },
        add_force_page: (state, { payload  })=>{
            state.forcePage = payload;
        }
    }
});
const { single_product , priceFilter , specific_product , add_force_page , add_item_offset  } = productSlice.actions;
const selectProducts = (state)=>state.products.products;
const selectProduct = (state)=>state.products.product;
/* harmony default export */ const product_slice = (productSlice.reducer);


/***/ }),

/***/ 3397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "zm": () => (/* binding */ search_bar)
/* harmony export */ });
/* unused harmony export searchSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isOpen: false
};
const searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        search_bar: (state, { payload  })=>{
            state.isOpen = payload;
        }
    }
});
const { search_bar  } = searchSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSlice.reducer);


/***/ })

};
;