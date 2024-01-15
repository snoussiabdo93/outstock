import Link from 'next/link';
import Image from 'next/image';
import { useDispatch , useSelector  } from 'react-redux';

import Menu from './menu';
import { extra_info, logo } from '../../data/header/header';
import { search_bar } from '../../redux/features/search-slice';
import Search from '../../components/common/search';
import Cart from '../../components/common/cart';
import useSticky from '../../hooks/use-sticky';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import Sidebar from '../../components/common/sidebar';
import React from 'react';
import { useEffect } from 'react';


const Header = ({ header_big,white_bg }) => {
  const dispatch = useDispatch();
  const { headerSticky } = useSticky();
  const { quantity } = useCartInfo();
  const {setShowSidebar} = useGlobalContext();
  const cartItems = useSelector(state => state.cart.cartProducts);


   const [Langue, setlangue] = React.useState(localStorage.getItem('lang'));
   useEffect(()=>{
    const local = localStorage.setItem("lang",Langue)
      },[])
 const handellangue=(value)=>{
  localStorage.setItem('lang',value)
 }
  return (
    <>
      <header>
        <div id="header-sticky" className={`header__area ${header_big ? 'box-25' : !white_bg && 'grey-bg'} 
        ${headerSticky ? 'sticky' : ''}`}>
          <div className={`${header_big ? 'container-fluid' : 'container'}`}>
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                <div className="logo">
                  <Link href="/">
                    
                      <Image src={logo} alt="logo" width="120vw" height="120vw" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8">
                <div className="header__right p-relative d-flex justify-content-between align-items-center">
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <Menu />
                    </nav>
                  </div>
                  <div className="mobile-menu-btn d-lg-none">
                    <button onClick={()=> setShowSidebar(true)} className="mobile-menu-toggle">
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
                  <div className="header__action">
                    <ul>
                      <li>
                        <button className="search-toggle" onClick={() => dispatch(search_bar(true))}>
                          <i className="ion-ios-search-strong"></i> Search</button>
                      </li>
                      <li>
                        <button className="cart">
                          <i className="ion-bag"></i> Quote Cart  <span>({cartItems.length})</span>
                        </button>
                        {/* cart area start */}
                        <Cart />
                        {/* cart area end */}
                      </li> 
                      <li> <button ><i className="fa fa-language" aria-hidden="true"></i>  </button> 
                        <ul className="extra-info">
                          {extra_info.map((item, index) => (
                            <li key={index}>
                              <div className={`${item.class}`}>
                                <div className="extra-title">
                                  <h5>{item.title}</h5>
                                </div>
                                <ul>
                                  {item.listItems.map((list, index) => (
                                    <li key={index} onClick={()=> handellangue(list.title.slice(0,2))} >
                                      {`${list.title}`}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search area start */}
      <Search />
      {/* search area end */}

      {/* sidebar start */}
      <Sidebar/>
      {/* sidebar end */}

    </>
  );
};

export default Header;