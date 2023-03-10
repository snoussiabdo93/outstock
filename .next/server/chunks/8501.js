"use strict";
exports.id = 8501;
exports.ids = [8501];
exports.modules = {

/***/ 8501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_details_area)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/common/blog/blog-sidebar.jsx
var blog_sidebar = __webpack_require__(2333);
// EXTERNAL MODULE: ./data/index.js + 5 modules
var data = __webpack_require__(2830);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./components/common/form/error-msg.jsx
var error_msg = __webpack_require__(2017);
// EXTERNAL MODULE: ./components/common/form/validation-schema.jsx
var validation_schema = __webpack_require__(93);
;// CONCATENATED MODULE: ./components/common/form/blog-form.jsx




const BlogForm = ()=>{
    // contact form
    const handleOnSubmit = (values, { resetForm  })=>{
        alert(`${values.name + "\n" + values.email + "\n" + values.subject + "\n" + values.msg}`);
        resetForm();
    };
    // use formik
    const { handleChange , handleSubmit , handleBlur , errors , values , touched  } = (0,external_formik_.useFormik)({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            msg: ""
        },
        validationSchema: validation_schema/* blogSchema */.gT,
        onSubmit: handleOnSubmit
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: handleSubmit,
            id: "contacts-form",
            className: "conatct-post-form",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-icon p-relative contacts-name",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "name",
                                    value: values.name,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    type: "text",
                                    placeholder: "Name"
                                }),
                                touched.name && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                                    error: errors.name
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-icon p-relative contacts-name",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "email",
                                    value: values.email,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    type: "email",
                                    placeholder: "Email"
                                }),
                                touched.email && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                                    error: errors.email
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-icon p-relative contacts-email",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "subject",
                                    value: values.subject,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    type: "text",
                                    placeholder: "Subject"
                                }),
                                touched.subject && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                                    error: errors.subject
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contact-icon p-relative contacts-message",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    name: "msg",
                                    value: values.msg,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    id: "comments",
                                    cols: "30",
                                    rows: "10",
                                    placeholder: "Comments"
                                }),
                                touched.msg && /*#__PURE__*/ jsx_runtime_.jsx(error_msg/* default */.Z, {
                                    error: errors.msg
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "os-btn os-btn-black",
                            type: "submit",
                            children: "Post comment"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const blog_form = (BlogForm);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/blog-details/blog-details-area.jsx





const reviews = [
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
];
const BlogDetailsArea = ({ item  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "blog__area pt-55",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-xl-9 col-lg-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "postbox__title mb-55",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/blog",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "blog__meta",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "By ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: item.author
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "/ ",
                                                        item.date
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "postbox__thumb w-img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: item.img,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "postbox__wrapper mb-70",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "postbox__text mt-65",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Diga, Koma and Torus are three kitchen utensils designed for ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "highlight theme",
                                                        children: "Ommo"
                                                    }),
                                                    ", a new design-oriented brand introduced at the Ambiente show in February 2016. ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "highlight",
                                                        children: "Minimalist approach, bright colors, stainless steel and matte plastic"
                                                    }),
                                                    ", abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "postbox__text",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Diga is a two-color melamine salad bowl where vegetables can be washed, drained and served. The disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned clockwise to lock the drain and hold condiments in the bowl when serving."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                            className: "postbox format-quote mt-45 mb-50",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "postbox__quote",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-quote-right"
                                                            }),
                                                            " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. "
                                                        ]
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "postbox__details-img w-img mb-60",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/assets/img/blog/blog-details-sm.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "postbox__text",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Koma and Torus are two tea infusers, each with an original design and a concealed function. Koma has a round base and a long stainless steel-trimmed handle which offers a comfortable grip and allows."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "postbox__text",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "And the brushed steel cover opens and closes at the touch of a finger to easily fill and empty the infuser. The perfect way to enjoy brewing tea. Torus is donut-shaped and can      cling to any cup. It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea."
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "postbox__share mb-95",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-6 col-lg-6 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "postbox__social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Share to friends:"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-facebook-f"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-twitter"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-dribbble"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fas fa-share-alt"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-6 col-lg-6 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "postbox__tag f-right",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Tags :"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Furniture,"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Erentheme,"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Chair, "
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Decor"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "postbox__related-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "You Might Also Like"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "postbox__related-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: data/* blogs.slice */.ZF.slice(0, 2).map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-6 col-lg-6 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "blog__item mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "blog__thumb fix",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: `/blog-details/${blog.id}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "w-img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: blog.img,
                                                                        alt: "blog"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "blog__content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: `/blog-details/${blog.id}`,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            children: blog.title
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "blog__meta",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                "By ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    children: blog.auhtor
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                "/ ",
                                                                                blog.date
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "postbox__line mt-65"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "postbox__comments pt-90",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "postbox__comment-title mb-30",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Comments (32)"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "latest-comments mb-30",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                children: reviews.map((review, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: review.children ? "children" : "",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "comments-box",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "comments-avatar",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: review.img,
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "comments-text",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "avatar-name",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                    children: review.name
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                    children: [
                                                                                        " - ",
                                                                                        review.time,
                                                                                        " "
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "reply",
                                                                                    href: "#",
                                                                                    children: "Leave Reply"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "user-rating",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fas fa-star"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fas fa-star"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fas fa-star"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fas fa-star"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fal fa-star"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            children: [
                                                                                "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "\u201Clorem ipsum\u201D"
                                                                                }),
                                                                                " will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose."
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }, index))
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "postbox__line mb-95"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "post-comments-form mb-100",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "post-comments-title mb-30",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Leave A Reply"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(blog_form, {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(blog_sidebar/* default */.Z, {})
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const blog_details_area = (BlogDetailsArea);


/***/ })

};
;