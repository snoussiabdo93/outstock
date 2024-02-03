import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import {
  collection,
  getDocs,

  doc,query, where
} from "firebase/firestore";
import { cart_product } from '../../../redux/features/cart-slice';
import { selectProducts, single_product } from '../../../redux/features/product-slice';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import ProductModal from '../modal/product-modal';
import { db } from '../../../config';
import { useState , useEffect } from 'react';
// slider setting
const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
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

const SaleOff = () => {
  const products = useSelector(selectProducts);
  const [data, setdata] = useState([]);

  const dispatch = useDispatch();
  const saleOffProduct = products.map(item => item.product)
  .flat()
  .filter(prd => prd.product__sale);
  useEffect(() => {
   
    const fetchProds = async () => {
      try {
          const Ref = collection(db, 'Produits')
          const q = query(
            Ref,
            where('categ', '==','echec' ) 
           )
         
          const qSnap = await getDocs(q)
          const Array = []
          qSnap.forEach((prod) => {
              return Array.push({
                  id: prod.id,
                  data: prod.data()
              })
          })
          setdata(Array)

      } catch (error) {
          console.log(error)
          
      }
     
    }
    fetchProds()

   
  }, [])
  return (
    <>
      <section className="sale__area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper text-center mb-55">
                <div className="section__title mb-10">
                  <h2>Sale Off</h2>
                </div>
                <div className="section__sub-title">
                  <p>Immerse yourself in the world of sustainable luxury with our olive wood hand-crafted products. Discover timeless treasures that harmonize nature s beauty and human skill, bringing warmth and style to your home.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="sale__area-slider">
                <Slider {...settings}>
                  {
                    data.slice(0, 5).map((item, index) => {
                      return <div key={index} className="sale__item">
                        <div className="product__wrapper mb-60">
                          <div className="product__thumb">
                            <Link legacyBehavior href={`/product-details/${item.id}`}>
                              <a className="w-img">
                                <img src={item.data.photo1} alt="product-img"  />
                              </a>
                            </Link>
                            <div className="product__action transition-3">
                              <button onClick={() => dispatch(add_to_wishlist(item))} data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                                <i className="fal fa-heart"></i>
                              </button>
                              <Link href={`/product-details/${item.id}`}legacyBehavior >
                                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Details">
                                  <i className="fal fa-link"></i>
                                </a>
                              </Link>
                              {/* <!-- Button trigger modal --> */}
                              <a onClick={() => dispatch(single_product(item.id))} href="#"
                                data-bs-toggle="modal" data-bs-target="#productModalId">
                                <i className="fal fa-search"></i>
                              </a>

                            </div>
                            {item.product__sale && <div className="product__sale">
                              {item.product__sale.map((item, index) => (
                                <span key={index} className={`${item === 'new' ? 'new' : 'percent'}`}>
                                  {item}
                                </span>
                              ))}
                            </div>}
                          </div>
                          <div className="product__content p-relative">
                            <div className="product__content-inner">
                              <h4>
                                <Link href={`/product-details/${item.id}`}>
                                  <a>{item.title}</a>
                                </Link>
                              </h4>
                            
                            </div>
                            <div className="add-cart p-absolute transition-3">
                              <button onClick={() => dispatch(cart_product(item))}>+ Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    })
                  }

                </Slider>

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

export default SaleOff;