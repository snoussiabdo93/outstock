import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';

import { remove_cart_product } from '../../redux/features/cart-slice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartProducts);
  const dispatch = useDispatch();
  const { total } = useCartInfo();
  return (
    <>
      <div className="mini-cart" style={{width:400}} >
        {cartItems.length === 0 && <h5>Your cart is empty</h5>}
        {cartItems.length >= 1 && <div className="mini-cart-inner">
          <ul className={`mini-cart-list ${cartItems.length > 2 ? 'slider-height' : ''} 
          ${cartItems.length > 1 ? 'slider-height-2' : ''}`}>

            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-img f-left">
                  <Link href={`/product-details/${item.id}`}>
                    <a>
                      <img src={item.photo1} alt=""  width='40vw' height='60vh'  />
                    </a>
                  </Link>
                </div>
                <div className="cart-content f-left text-start">
                  <h5>
                    <Link href={`/product-details/${item.id}`}>
                      <a>{item.Freq} <i className="fal fa-start">  </i> Qte : {item.quantity}</a>
                    </Link>

                  </h5>
                  <div>
                  { item.sizes.map((T,index)=> <span key={index} className="badge bg-secondary mx-1"> {T} </span>) }
                  </div>
                </div>
                <div className="del-icon f-right mt-30">
                  <button onClick={() => dispatch(remove_cart_product(item))}>
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </li>
            ))}

          </ul>
          <div className="total-price d-flex justify-content-between mb-30">

            <span>Total Products :</span>
            <span>{total }</span>
          </div>
          <div className="checkout-link">
            <Link href={'/cart'}>
              <a className="os-btn">View Quotation Cart</a>
            </Link>
            <Link href={'/checkout'}>
              <a className="os-btn os-btn-black">Get A Quotation</a>
            </Link>
          </div>
        </div>}

      </div>
    </>
  );
};

export default Cart;