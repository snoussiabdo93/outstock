import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useGlobalContext from '../../hooks/use-context';
import Prods from '../../data/header/products'

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [home, setHome] = useState(false);
  const [shop, setShop] = useState(false);
  const [shopD, setShopD] = useState(false);

  const [productPages, setProductPages] = useState(false);
  const [otherPages, setOtherPages] = useState(false);
  const [blog, setBlog] = useState(false);  
  const [data, setdata] = useState([]);

  

useEffect(()=>{console.log(Prods)},[])
  const handleMenuDropDown = (page) => {
    if (page === 'home') {
      setHome(!home)
      setShop(false)
      setProductPages(false)
      setOtherPages(false);
      setBlog(false)
    }

    if (page === 'shop') {
      setHome(false)
      setShop(!shop)
      setShopD(false)

    }
    if (page === 'shop-detail') {
      setHome(false)
      setShopD(!shopD)
      setShop(true)

    }

   

  

   
  }

  return (
    <>
      <section  className={`extra__info transition-3 ${showSidebar ? 'info-opened' : ''}`}>
        <div className="extra__info-inner">
          <div className="extra__info-close text-end" onClick={() => setShowSidebar(false)}>
            <a href="#" className="extra__info-close-btn"><i className="fal fa-times"></i></a>
          </div>

          {/* <!-- side-mobile-menu start --> */}
          <nav  className="side-mobile-menu d-block d-lg-none mm-menu">
            <ul>
              <li >
                
              <Link onClick={() => setShowSidebar(false)}  href="/">Home </Link>
              </li>

              <li style={{maxHeight:'60vh' ,overflow: "auto"}} className={`menu-item-has-children has-droupdown ${shop ? 'active' : ''}`}>
                <a onClick={() => handleMenuDropDown('shop')}>Products</a>
                <ul className={`sub-menu ${shop ? 'active' : ''}`}>
               
                {Prods?.map((menu, index) => (
                    <li key={index} className={'has-dropdown'}>
                      <Link href={`${menu.link}`}>{menu.title}</Link>
                      <ul>
                        {menu?.dropdownMenu?.map((m, index) => (
                          <li key={index}><Link href={`${m.link}`}>{m.title}</Link></li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>


    
              <li> <Link onClick={() => setShowSidebar(false)}  href="/about">About</Link> </li>

            

              <li> <Link href="/contact">Contact</Link> </li>

            </ul>
          </nav>
          {/* <!-- side-mobile-menu end --> */}
        </div>
      </section>

      {/* body overlay */}
      <div onClick={() => setShowSidebar(false)}
        className={`body-overlay transition-3 ${showSidebar ? 'opened' : ''}`}>
      </div>
    </>
  );
};

export default Sidebar;