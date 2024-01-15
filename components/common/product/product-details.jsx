import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { cartProducts, cart_product, decrease_quantity } from '../../../redux/features/cart-slice';
import { selectProducts, single_product } from '../../../redux/features/product-slice';
import ProductModal from '../modal/product-modal';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import {
  collection,
  getDoc,getDocs,

  doc,query,where
} from "firebase/firestore";
import { db } from '../../../config';
import Slider from "react-slick";



const settings = {
  autoplay: false,
  speed: 500,
  dots: true,
  fade: false,
  arrows: false,
  fade: true,
};

const ProductDetails = () => {
  const [product, setdata] =useState([])
  const [images, setImages] =useState([])
  const [Tailles, setTailles] =useState([])

 


  const currentPath = window.location.pathname;
    const segments = currentPath.split('/'); // Split path into segments
    const lastSegment = segments[segments.length - 1];

  useEffect(()=>{
  
    const fetchCarListing = async () => {

    try {
      const docRef = doc(db, 'Produits', lastSegment)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data= docSnap.data()
      setdata({...data,id:lastSegment})


      const imgs = [data.photo1 !==''&&data.photo1,data.photo2!==''>0&&data.photo2,data.photo3 !==''&&data.photo3,data.photo4!==''>0&&data.photo4,data.photo5!==''>0&&data.photo5]
      const Tails = [data.Taille1!==''&&data.Taille1,data.Taille2 !==''&&data.Taille2,data.Taille3 !==''&&data.Taille3,data.Taille4 !==''&&data.Taille4,data.Taille5 !==''&&data.Taille5]

      setImages(imgs )
      setTailles(Tails)
      }
    } catch (error) {
      console.log(error)
    }
  }
  fetchCarListing()
  }, [lastSegment])
  const dispatch = useDispatch();
  const cartItems = useSelector(cartProducts)
  const [Qte, setQuantity] =useState('')
  const [Size, setSize] =useState(product?.Taille1)
  const [Ok, setOk] =useState(false)

  return (
    <>
      <section className="shop__area pb-65">
        <div className="shop__top grey-bg-6 pt-20 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                
                  <section className={`slider__area slider__area-4 p-relative`}>


                <Slider   className='slider-active' {...settings}>

                    {images.map((img, index) => 
                      
                      {
                      return <div key={index}  >
                   
                   <div className={`single-slider slider__height  d-flex align-items-center`}>
                          <img src={img} alt="" style={{width:'100%' ,height:'50vh'}}  />
                          
                        </div>
                      </div>}
                    )}

                 
                </Slider>
                </section>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="product__modal-content product__modal-content-2">
                  <h4>
                      <a>{product?.Label}</a>
                  </h4>
                  
                  <div className="product__price-2 mb-25">
                    <h4>  # {product?.Freq}</h4>

                  </div>
                  <div className="product__modal-des mb-30">
                    <p>{product.Desc}</p>
                  </div>
                  <div className="product__modal-form mb-30">
                    
                     
                     
                      <div className="product__modal-required mb-5">
                        
                        <span >Repuired Fiields *</span>
                      </div>
                      
                      <div className="pro-quan-area d-flex justify-content-between">
                      <div className="product__modal-input size mb-20">
                        <label>Size <i className="fas fa-star-of-life"></i></label>
                        { product.categ  !== "echec" && product.categ  !=="planche" ? <div> <h4>{product.Taille1}</h4> </div> : <select  value={Size} onChange={(e)=>setSize(e.target.value)} error={Ok&&Size==''}  required  disabled={Tailles.length==0} >
                        {Tailles?.map((Ta, index) =>  
                          <option  key={index}> {Ta} </option>)}
                          <option value='All' >For All Sizes</option>
                        </select>}
                        <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                      </div>
                  <div className="product__modal-input size mb-20">
                        <label id="validationCustom04"  >Quantity <i className={`fas fa-star-of-life }`}></i></label>
                        <select id="validationCustom04" value={Qte} onChange={(e)=>{setQuantity(e.target.value)} } error={Ok&&Qte==''} required >
                          <option value='' >- Please select -</option>
                          <option> under 500 </option>

                          <option>500 -1000</option>

                          <option>1000-2000 </option>
                          <option>2000-5000</option>

                          <option>5000-10 000 </option>
                          <option>- + 10 000 -</option>


                        </select>
                          {Ok&&Qte==''&&<div className="text-danger">
                            Please choose a Quantity
                          </div>}
                      </div>
                       
                      </div>
                      <div className="pro-cart-btn">

                          <button href="#"  type="submit" onClick={() =>{setOk(true); Ok&&Qte&& dispatch(cart_product({...product,size:Size?Size:product.Taille1,quantity:Qte } )) }}
                            className="add-cart-btn mb-20">+ Add to Quotation Cart </button>
                        </div>
                  </div>
                  <div className="product__tag mb-25">
                    <span>Category:</span>
                    <span><a href="#">Decor,</a></span>
                    <span><a href="#">handmade,</a></span>
                    <span><a href="#">Handcraft,</a></span>
                    <span><a href="#">Chess Game</a></span>
                  </div>
                  <div className="product__share">
                    <span>Share :</span>
                    <ul>
                      <li><a href="https://www.facebook.com/profile.php?id=61553789957924"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="https://www.instagram.com/olizanawood/"><i className="fab fa-instagram"></i></a></li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shop__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="product__details-tab">
                  <div className="product__details-tab-nav text-center mb-45">
                    <nav>
                      <div className="nav nav-tabs justify-content-start justify-content-sm-center" id="pro-details" role="tablist">
                        <a className="nav-item nav-link active" id="des-tab" data-bs-toggle="tab" href="#des" role="tab" aria-controls="des" aria-selected="true">Description</a>
                        <a className="nav-item nav-link" id="add-tab" data-bs-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">Additional Information</a>
                      </div>
                    </nav>
                  </div>
                  <div className="tab-content" id="pro-detailsContent">
                    <div className="tab-pane fade show active" id="des" role="tabpanel">
                      <div className="product__details-des">
                        <p>Olizana is a Tunisian company specializing in the construction of articles using olive wood. Founded by enthusiasts of craftsmanship and environmental preservation, the company is committed to creating unique and sustainable products using olive wood, an abundant natural resource in Tunisia</p>

                        <div className="product__details-des-list mb-20">
                          <ul>
                            <li><span>Exquisite Craftsmanship .</span></li>
                            <li><span>Rich Aesthetics .</span></li>
                            <li><span>Durability and Resilience.</span></li>
                            <li><span>Eco-Friendly Choice.</span></li>
                            <li><span>Smooth Texture.</span></li>
                            <li><span>Distinctive Grain.</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="add" role="tabpanel">
                      <div className="product__details-add">
                        <ul>
                          <li><span>Weight</span></li>
                          <li><span>{product?.weight} KG</span></li>
                          <li><span>Dimention</span></li>
                          <li><span>{product?.dimension}</span></li>
                          
                        </ul>
                      </div>
                    </div>
                   
                        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RelatedProducts start */}
      <RelatedProducts />
      {/* RelatedProducts end */}

      {/* product modal start */}
      <ProductModal />
      {/* product modal end */}
    </>
  );
};

export default ProductDetails;



const RelatedProducts = () => {
  const trendingProducts = useSelector(selectProducts)
    .filter(item => item.trending)
    .map(product => product.product)
    .flat()
    .slice(0, 4);
  const dispatch = useDispatch();
  const [data, setdata] =useState([])

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
          console.log(Array)
                    setdata(Array)

      } catch (error) {
          console.log(error)
          
      }
     
    }
    fetchProds()

   
  }, [])
  
  return (
    <>
      <section className="related__product pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper text-center mb-55">
                <div className="section__title mb-10">
                  <h2>Trending Products</h2>
                </div>
                <div className="section__sub-title">
                  <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {data.slice(0, 4).map((product, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="product__wrapper mb-60">
                  <div className="product__thumb">
                    <Link href={`/product-details/${product.id}`}>
                      <a className="w-img">
                        <img src={product.data.photo1} alt="product-img"  width='100%' height='100%' />
                        {product.thumb_img &&
                          <img className="product__thumb-2" src={product.data.photo2} alt="product-img"  width='100%' height='100%' />
                        }
                      </a>
                    </Link>
                    <div className="product__action transition-3">
                      <button onClick={() => dispatch(add_to_wishlist(product))} href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
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
                  <div className="product__content p-relative">
                    <div className="product__content-inner">
                      <h4>
                        <Link href={`/product-details/${product.id}`}>
                          <a>{product.data.Label}</a>
                        </Link>
                      </h4>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


    </>
  )
}

/*<div className="rating rating-shop mb-15">
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
                  </div>*/




                  /*<div className="product__modal-nav mr-20">
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
                  </div>*/