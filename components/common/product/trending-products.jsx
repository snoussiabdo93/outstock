import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {Blurhash} from 'react-blurhash';

import ProductModal from "../modal/product-modal";
import { selectProducts, single_product } from "../../../redux/features/product-slice";
import { cart_product } from "../../../redux/features/cart-slice";
import { add_to_wishlist } from "../../../redux/features/wishlist-slice";
import Image from "next/image";
import { useState, useEffect ,useRef} from "react";
import { db } from "../../../config";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,query, where
} from "firebase/firestore";
const blurhash = 'LeSFU^ozyXjE%#aeV?kCysjZVrf+';
const imageWidth = 500;
const imageHeight = 300;

const BlurhashWithLoadingImage = ({ blurhash, imageSrc, width, height }) => {
  return (
    <LazyLoadImage
      effect="blur" // Add a blur effect to the loading image
      src={imageSrc} // The URL of the actual image
      alt="Your Image Alt Text"
      
      placeholder={
        <Blurhash
          hash={blurhash} // The Blurhash value for your image
          width={width}
          height={height}

        />
      }
    />
  );
};
function Products  ({ h4, h5 })  {
  // slick setting
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    slidesToShow: h4 ? 5 : h5 ? 5 : 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  const products = useSelector(selectProducts);
  const trendingItems = products.filter(item => item.trending)
  const dispatch = useDispatch();
  const [locallang, setlang] =useState(  localStorage.getItem("lang"))
  const [data, setdata] =useState([])
  const Refrun = useRef(false)


  useEffect(()=>{

if(Refrun.current=== false){
  const fetchCars = async () => {
    try {
        const Ref = collection(db, 'Produits')

        const q = query(
          Ref,
          where('new', '==',true) 
         )
        const qSnap = await getDocs(q)

        const carsArray = []
        qSnap.forEach((car) => {
            return carsArray.push({
                id: car.id,
                data: car.data()
            })
        })
        setdata(carsArray)
       console.log(carsArray)
    } catch (error) {
        console.log(error)
        
    }
   
  }
  fetchCars()
return(()=>{Refrun.current = true})
}

  }, [])

  return (
    <>
      <section className="product__area pt-60 pb-100"  >
        <div className={`${!h5 && 'container'} ${h4 ? 'custom-container' : ''} ${h5 ? 'container-fluid' : ''}`} >

          <div className="row">
            <div className="col-xl-12">
              <div className={`section__title-wrapper text-center mb-55 ${h4 ? 'p-relative' : ''}`}>
                <div className="section__title mb-10">
                  <h2>Trending Products</h2>
                </div>
                <div className="section__sub-title">
                  <p>Explore our collection of meticulously hand-crafted products made from premium olive wood. Each piece is a testament to craftsmanship and nature s beauty, perfect for eco-conscious enthusiasts and lovers of rustic elegance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className={`product__slider ${h4 ? 'product__slider-4' : ''}`}>
                
                <Slider {...settings}>
                          {
                            data.slice(0,7).map((product, index) => (
                              <div key={index}  className="product__item">

                              <div key={index} className="product__wrapper mb-60 shadow   ">
                                <div className="product__thumb" key={index} >
                                  <Link href={`/product-details/${product.id}`}>
                                    <a className="w-img">
                                        <BlurhashWithLoadingImage
                                          blurhash={blurhash}
                                          imageSrc={product.data.photo2}
                                          width={imageWidth}
                                          height={imageHeight}
                                        />
                                   
                                      <img   className="product__thumb-2" src={product.data.photo1} alt="product-img" style={{border:'2px',borderRadius:'5%',borderColor:'#0000' }} />
                                    </a>
                                  </Link>
                                  <div className="product__action transition-3">
                                    <button onClick={() => dispatch(add_to_wishlist({...product,id:product.id}))}
                                      data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                                      <i className="fal fa-heart"></i>
                                    </button>
                                    <Link href={`/product-details/${product.id}`}>
                                      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Details">
                                        <i className="fal fa-link"></i>
                                      </a>
                                    </Link>
                                    {/* <!-- Button trigger modal --> */}
                                    <a onClick={() => dispatch(single_product(product.id))} href="#" data-bs-toggle="modal" data-bs-target="#productModalId">
                                      <i className="fal fa-search"></i>
                                    </a>
                                  </div>

                                 {product.data.New&& <div className="product__sale">
                                      <span  className='new'>
                                        New
                                      </span>
                                  
                                  </div>}

                                </div>
                                <div className="product__content p-relative">
                                  <div className="product__content-inner p-3 border border-color-black"  style={{ height :60 }} >
                                    <h4  >
                                      <Link href={`/product-details/${product.id}`}>
                                        <a> <h5> {product.data.Label} </h5></a>
                                      </Link>
                                    </h4>
                                    
                                  </div>
                                  
                                </div>
                              </div>
                               </div>
                            ))
                          }

                     

                </Slider>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className={`product__slider ${h4 ? 'product__slider-4' : ''}`}>
                
                <Slider {...settings}>
                          {
                            data.slice(7,data.length).map((product, index) => (
                              <div key={index}  className="product__item">

                              <div key={index} className="product__wrapper mb-60 shadow ">
                                <div className="product__thumb" key={index} >
                                <Link href={`/product-details/${product.id}`}>
                                    <a className="w-img">
                                        <BlurhashWithLoadingImage
                                          blurhash={blurhash}
                                          imageSrc={product.data.photo2}
                                          width={imageWidth}
                                          height={imageHeight}
                                        />
                                   
                                      <img   className="product__thumb-2" src={product.data.photo1} alt="product-img" style={{border:'2px',borderRadius:'5%',borderColor:'#0000' }} />
                                    </a>
                                  </Link>
                                  <div className="product__action transition-3">
                                    <button onClick={() => dispatch(add_to_wishlist({...product,id:product.id}))}
                                      data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                                      <i className="fal fa-heart"></i>
                                    </button>
                                    <Link href={`/product-details/${product.id}`}>
                                      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Details">
                                        <i className="fal fa-link"></i>
                                      </a>
                                    </Link>
                                    {/* <!-- Button trigger modal --> */}
                                    <a onClick={() => dispatch(single_product(product.id))} href="#" data-bs-toggle="modal" data-bs-target="#productModalId">
                                      <i className="fal fa-search"></i>
                                    </a>
                                  </div>

                                  {product.product__sale && <div className="product__sale">
                                    {product.product__sale.map((item, index) => (
                                      <span key={index} className={`${item === 'new' ? 'new' : 'percent'}`}>
                                        {item}
                                      </span>
                                    ))}
                                  </div>}

                                </div>
                                <div className="product__content p-relative " >
                                  <div className="product__content-inner border p-3" style={{height : 60}} >
                                    <h4>
                                      <Link href={`/product-details/${product.id}`}>
                                        <a> <h5> {product.data.Label} </h5></a>
                                      </Link>
                                    </h4>
                                    
                                  </div>
                                  
                                </div>
                              </div>
                               </div>
                            ))
                          }

                     

                </Slider>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="product__load-btn text-center mt-25">
                <Link href="/shop">
                  <a className="os-btn os-btn-3">See More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product modal start */}
      <ProductModal />
      {/* product modal end */}
    </>
  );
};

export default Products;
//<div className="product__price transition-3">
//<span>${product.price}.00</span>
//<span className="old-price">${product.old_price}.00</span>
// const q = query(
  //carsRef,
  //where('type', '==', params.categoryName) 
 // )
 //<div className="add-cart p-absolute transition-3">
 //<button onClick={() => dispatch(cart_product({...product.data,id:product.id}))}>+ Add to Cart</button>
 //</div>
