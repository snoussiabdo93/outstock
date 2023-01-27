"use strict";
exports.id = 1631;
exports.ids = [1631];
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
/* harmony export */   "gq": () => (/* binding */ decrease_quantity),
/* harmony export */   "h9": () => (/* binding */ clear_cart),
/* harmony export */   "qS": () => (/* binding */ cartProducts),
/* harmony export */   "uZ": () => (/* binding */ remove_cart_product)
/* harmony export */ });
/* unused harmony export cartSlice */
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
                state.cartProducts[productIndex].quantity += 1;
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Increase Product Quantity", {
                    position: "top-left"
                });
            } else {
                const tempProduct = {
                    ...payload,
                    quantity: 1
                };
                state.cartProducts.push(tempProduct);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${payload.title} added to cart`, {
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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./data/products.js

const products = [
    {
        id: 1,
        trending: true,
        product: [
            {
                id: 1,
                img: "/assets/img/shop/product/product-1.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-1.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-10.jpg",
                category: "Accessories",
                title: "Wooden container Bowl",
                price: 96.00,
                old_price: 120.00,
                rating: 3,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    "Yellow",
                    "Blue",
                    "White",
                    " Ocean Blue"
                ],
                weight: .25,
                dimension: "62 \xd7 56 \xd7 12",
                brand: "sony",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            },
            {
                id: 2,
                img: "/assets/img/shop/product/product-5.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-5.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-11.jpg",
                category: "Clothing",
                title: "Euvira Rocking Chair",
                price: 90.00,
                old_price: 110.00,
                product__sale: [
                    "new",
                    "16%"
                ],
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "S",
                    "M",
                    "XXL"
                ],
                colors: [
                    "Red",
                    "Yellow",
                    "Blue",
                    "White"
                ],
                weight: .27,
                dimension: "62 \xd7 68 \xd7 12",
                brand: "panasonic",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 2,
        trending: true,
        product: [
            {
                id: 3,
                img: "/assets/img/shop/product/product-2.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-11.jpg",
                category: "Men's",
                title: "Eunice coffee table",
                price: 92.00,
                old_price: 112.00,
                rating: 3.5,
                product__sale: [
                    "new",
                    "16%"
                ],
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
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
                dimension: "62 \xd7 59 \xd7 12",
                brand: "panasonic",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            },
            {
                id: 4,
                img: "/assets/img/shop/product/product-6.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-6.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-7.jpg",
                category: "Music",
                title: "Euvira Rocking Chair",
                price: 88.00,
                old_price: 108.00,
                rating: 3,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "S",
                    "XXL"
                ],
                colors: [
                    "Yellow",
                    "Black",
                    " Ocean Blue"
                ],
                weight: .22,
                dimension: "62 \xd7 77 \xd7 12",
                brand: "samsung",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 3,
        trending: true,
        product: [
            {
                id: 5,
                img: "/assets/img/shop/product/product-3.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-3.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-8.jpg",
                category: "Decoration",
                title: "Set of 2 baskets",
                price: 87.00,
                old_price: 107.00,
                rating: 3.8,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "XL",
                    "XXL"
                ],
                colors: [
                    "White",
                    " Ocean Blue"
                ],
                weight: .23,
                dimension: "62 \xd7 59 \xd7 12",
                brand: "apple",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            },
            {
                id: 6,
                img: "/assets/img/shop/product/product-7.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-7.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-1.jpg",
                category: "Chair",
                title: "Eames House Bird in Black",
                price: 77.00,
                old_price: 102.00,
                rating: 3.7,
                product__sale: [
                    "new",
                    "19%"
                ],
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "S",
                    "XL",
                    "XXL"
                ],
                colors: [
                    "Yellow",
                    "Black"
                ],
                weight: .22,
                dimension: "62 \xd7 77 \xd7 12",
                brand: "samsung",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 4,
        trending: true,
        product: [
            {
                id: 7,
                img: "/assets/img/shop/product/product-4.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-4.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-12.jpg",
                category: "Lighting",
                title: "Micro Eslabon Wall Clock",
                price: 70.00,
                old_price: 90.00,
                rating: 3.9,
                product__sale: [
                    "new",
                    "22%"
                ],
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "S",
                    "XXL"
                ],
                colors: [
                    "Green",
                    "White",
                    " Ocean Blue"
                ],
                weight: .22,
                dimension: "62 \xd7 59 \xd7 12",
                brand: "samsung",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            },
            {
                id: 8,
                img: "/assets/img/shop/product/product-8.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-8.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-3.jpg",
                category: "Accessories",
                title: "Georg Tv cabinet",
                price: 75.00,
                old_price: 95.00,
                rating: 3.4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "S",
                    "XL"
                ],
                colors: [
                    "Yellow",
                    "Black",
                    "Blue"
                ],
                weight: .29,
                dimension: "62 \xd7 77 \xd7 12",
                brand: "apple",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 5,
        trending: true,
        product: [
            {
                id: 9,
                img: "/assets/img/shop/product/product-5.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-5.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-11.jpg",
                category: "Clothing",
                title: "Stone Table Lamp",
                price: 68.00,
                old_price: 88.00,
                rating: 4,
                product__sale: [
                    "new"
                ],
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "L",
                    "XL"
                ],
                colors: [
                    "Green",
                    " Ocean Blue"
                ],
                weight: .22,
                dimension: "62 \xd7 59 \xd7 12",
                brand: "sony",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            },
            {
                id: 10,
                img: "/assets/img/shop/product/product-4.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-4.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-1.jpg",
                category: "Men's",
                title: "Water Bottle",
                price: 75.00,
                old_price: 92.00,
                rating: 3.5,
                product__sale: [
                    "new"
                ],
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "S",
                    "M",
                    "XXL"
                ],
                colors: [
                    "White",
                    " Ocean Blue"
                ],
                weight: .29,
                dimension: "62 \xd7 77 \xd7 12",
                brand: "panasonic",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 6,
        trending: true,
        product: [
            {
                id: 11,
                img: "/assets/img/shop/product/product-6.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-6.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-2.jpg",
                category: "Music",
                title: "Tailored Fit Mesh-Panel",
                price: 67.00,
                old_price: 75.00,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "S",
                    "XXL"
                ],
                colors: [
                    "Green",
                    "White",
                    " Ocean Blue"
                ],
                weight: .22,
                dimension: "62 \xd7 59 \xd7 12",
                brand: "samsung",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            },
            {
                id: 12,
                img: "/assets/img/shop/product/product-11.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-11.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-2.jpg",
                category: "Decoration",
                title: "Water Bottle",
                price: 55.00,
                old_price: 66.00,
                rating: 3.5,
                product__sale: [
                    "new",
                    "23%"
                ],
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "S",
                    "M"
                ],
                colors: [
                    "Blue",
                    "White"
                ],
                weight: .30,
                dimension: "62 \xd7 77 \xd7 12",
                brand: "apple",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 7,
        product: [
            {
                id: 13,
                img: "/assets/img/shop/product/product-12.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-12.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-4.jpg",
                category: "Chair",
                title: "Rosmo Namino",
                price: 99.00,
                old_price: 112.00,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "L",
                    "XL"
                ],
                colors: [
                    "Blue",
                    " Ocean Blue"
                ],
                weight: .17,
                dimension: "62 \xd7 59 \xd7 12",
                brand: "sony",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            },
            {
                id: 14,
                img: "/assets/img/shop/product/product-10.jpg",
                images: [
                    {
                        src: "/assets/img/shop/product/product-10.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-1.jpg",
                category: "Lighting",
                title: "Plaid Cotton Shirt",
                price: 122.00,
                old_price: 142.00,
                rating: 3.5,
                product__sale: [
                    "new",
                    "25%"
                ],
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "L",
                    "XXL"
                ],
                colors: [
                    "Black",
                    "White"
                ],
                weight: .30,
                dimension: "62 \xd7 77 \xd7 12",
                brand: "panasonic",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 8,
        product: [
            {
                id: 15,
                featured: true,
                img: "/assets/img/shop/banner/banner-big-1.jpg",
                images: [
                    {
                        src: "/assets/img/shop/banner/banner-big-1.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-11.jpg",
                category: "Accessories",
                sm_title: "Products Essentials",
                title: "Bottle With Wooden Cork",
                price: 59.25,
                old_price: 75.25,
                rating: 4,
                desc: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Mirum est notare quam littera gothica, quam nunc putamus ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " parum claram, anteposuerit litterarum formas."
                    ]
                }),
                desc_2: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Mirum est notare quam littera gothica",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " parum claram, antep"
                    ]
                }),
                sizes: [
                    "M",
                    "XXL"
                ],
                colors: [
                    "White",
                    "Yellow"
                ],
                weight: .20,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "sony",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 9,
        product: [
            {
                id: 16,
                featured: true,
                img: "/assets/img/shop/banner/banner-big-2.jpg",
                images: [
                    {
                        src: "/assets/img/shop/banner/banner-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/product-11.jpg",
                category: "Accessories",
                sm_title: "Products Furniture",
                title: "Hauteville Plywood Chair",
                price: 396.25,
                old_price: 450.25,
                rating: 4,
                desc: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Mirum est notare quam littera gothica, quam nunc putamus ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " parum claram, anteposuerit litterarum formas."
                    ]
                }),
                desc_2: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Mirum est notare quam littera gothica",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " parum claram, antep"
                    ]
                }),
                sizes: [
                    "L",
                    "XL"
                ],
                colors: [
                    "Yellow",
                    "Blue"
                ],
                weight: .20,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "apple",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 10,
        product: [
            {
                id: 17,
                big: true,
                img: "/assets/img/shop/product/product-big-1.jpg",
                category: "Lighting",
                images: [
                    {
                        src: "/assets/img/shop/product/product-big-1.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Creative Design ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "Juicy Pendant Lamp"
                    ]
                }),
                price: 296.25,
                old_price: 350.25,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "L",
                    "XL"
                ],
                colors: [
                    "White",
                    "Yellow"
                ],
                weight: .18,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "panasonic",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 11,
        product: [
            {
                id: 18,
                big_3: true,
                img: "/assets/img/shop/product/product-big-3.jpg",
                category: "Decoration",
                images: [
                    {
                        src: "/assets/img/shop/product/product-big-3.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                title: "Big sale canvas basket",
                price: 287.25,
                old_price: 325.25,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "L"
                ],
                colors: [
                    "Green",
                    " Ocean Blue"
                ],
                weight: .18,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "sumsung",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 13,
        product: [
            {
                id: 19,
                big_2: true,
                img: "/assets/img/shop/product/product-big-2.jpg",
                category: "Music",
                images: [
                    {
                        src: "/assets/img/shop/product/product-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                title: "Big sale canvas basket",
                price: 167.25,
                old_price: 274.25,
                rating: 3,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "M",
                    "L"
                ],
                colors: [
                    "Yellow",
                    "Blue",
                    "Green"
                ],
                weight: .15,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "sony",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 14,
        product: [
            {
                id: 20,
                f_prd: true,
                new: true,
                feature_prd: true,
                img: "/assets/img/shop/product/fashion/fashion-2.webp",
                images: [
                    {
                        src: "/assets/img/shop/product/fashion/fashion-2.webp"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/fashion/fashion-1.webp",
                category: "Chair",
                title: "Haggar Men's Heather",
                price: 85.00,
                old_price: 96.00,
                rating: 3,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "XL",
                    "XXL"
                ],
                colors: [
                    "Ocean Blue",
                    " White"
                ],
                weight: .17,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "panasonic",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 15,
        product: [
            {
                id: 21,
                f_prd: true,
                new: true,
                feature_prd: true,
                img: "/assets/img/shop/product/fashion/fashion-3.webp",
                category: "Accessories",
                images: [
                    {
                        src: "/assets/img/shop/product/fashion/fashion-3.webp"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/fashion/fashion-4.webp",
                title: "Cotton Twill Suit",
                price: 108.00,
                old_price: 120.00,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "L",
                    "XL",
                    "XXL"
                ],
                colors: [
                    "Blue",
                    "Green"
                ],
                weight: .9,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "apple",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 16,
        product: [
            {
                id: 22,
                img: "/assets/img/shop/product/fashion/fashion-b1.webp",
                images: [
                    {
                        src: "/assets/img/shop/product/fashion/fashion-b1.webp"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                f_prd_big: true,
                category: "Decoration",
                title: "Cotton Twill Suit",
                price: 129.00,
                old_price: 138.00,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "M",
                    "L",
                    "XL"
                ],
                colors: [
                    "Ocean Blue",
                    " White"
                ],
                weight: .14,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "sumsung",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 17,
        product: [
            {
                id: 23,
                img: "/assets/img/shop/product/fashion/fashion-b2.webp",
                images: [
                    {
                        src: "/assets/img/shop/product/fashion/fashion-b2.webp"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                f_prd_big: true,
                category: "Men's",
                title: "Big sale canvas basket",
                price: 142.00,
                old_price: 152.00,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "L",
                    "XXL"
                ],
                colors: [
                    "Ocean Blue",
                    "Green",
                    " White"
                ],
                weight: .15,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "sony",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 18,
        product: [
            {
                id: 24,
                f_prd: true,
                feature_prd: true,
                category: "Clothing",
                img: "/assets/img/shop/product/fashion/fashion-5.webp",
                images: [
                    {
                        src: "/assets/img/shop/product/fashion/fashion-5.webp"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/fashion/fashion-7.webp",
                title: "Adrianna Papell Women's",
                price: 98.00,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "M",
                    "L"
                ],
                colors: [
                    "Yellow",
                    "Green",
                    " White"
                ],
                weight: .9,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "apple",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 19,
        product: [
            {
                id: 25,
                f_prd: true,
                feature_prd: true,
                img: "/assets/img/shop/product/fashion/fashion-10.webp",
                images: [
                    {
                        src: "/assets/img/shop/product/fashion/fashion-10.webp"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/fashion/fashion-9.webp",
                category: "Clothing",
                title: "Calvin Klein Women's",
                price: 80.00,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "XL",
                    "M",
                    "L"
                ],
                colors: [
                    "Blue",
                    "Green",
                    " White"
                ],
                weight: .9,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "apple",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
            }, 
        ]
    },
    {
        id: 20,
        product: [
            {
                id: 26,
                f_prd: true,
                feature_prd: true,
                category: "Chair",
                img: "/assets/img/shop/product/fashion/fashion-12.webp",
                images: [
                    {
                        src: "/assets/img/shop/product/fashion/fashion-12.webp"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-2.jpg"
                    },
                    {
                        src: "/assets/img/shop/product/quick-view/quick-big-3.jpg"
                    }, 
                ],
                thumb_img: "/assets/img/shop/product/fashion/fashion-11.webp",
                title: "Calvin Klein Women's",
                price: 65.00,
                rating: 4,
                desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
                sizes: [
                    "XL",
                    "L"
                ],
                colors: [
                    "Ocean Blue"
                ],
                weight: .9,
                dimension: "59 \xd7 60 \xd7 12",
                brand: "panasonic",
                reviews: [
                    {
                        img: "/assets/img/blog/comments/avater-1.png",
                        name: "Siarhei Dzenisenka",
                        time: "3 Months Ago",
                        rating: 4
                    },
                    {
                        img: "/assets/img/blog/comments/avater-2.png",
                        name: "Julias Roy",
                        time: "6 Months Ago",
                        rating: 4,
                        children: true
                    },
                    {
                        img: "/assets/img/blog/comments/avater-3.png",
                        name: "Arista Williamson",
                        time: "6 Months Ago",
                        rating: 4
                    }, 
                ]
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