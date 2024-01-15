import React, { useState } from 'react';
import Link from 'next/link';
import useGlobalContext from '../../hooks/use-context';

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [home, setHome] = useState(false);
  const [shop, setShop] = useState(false);
  const [productPages, setProductPages] = useState(false);
  const [otherPages, setOtherPages] = useState(false);
  const [blog, setBlog] = useState(false);

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
      setProductPages(false)
      setOtherPages(false)
      setBlog(false)
    }

   

  

   
  }

  return (
    <>
      <section className={`extra__info transition-3 ${showSidebar ? 'info-opened' : ''}`}>
        <div className="extra__info-inner">
          <div className="extra__info-close text-end" onClick={() => setShowSidebar(false)}>
            <a href="#" className="extra__info-close-btn"><i className="fal fa-times"></i></a>
          </div>

          {/* <!-- side-mobile-menu start --> */}
          <nav className="side-mobile-menu d-block d-lg-none mm-menu">
            <ul>
              <li className={`menu-item-has-children has-droupdown ${home ? 'active' : ''}`}>
                
              <Link href="/">Home </Link>
              </li>

              


    
              <li> <Link href="/about">About</Link> </li>

            

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