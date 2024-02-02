import { useEffect, useRef, useState } from "react";
import useGlobalContext from "../../../hooks/use-context";
import ProductModal from "../modal/product-modal";
import ProductGrid from "./product-grid";
import ProductList from "./product-list";
import ShopSidebar from "./shop-sidebar";
import {
  collection,
  getDocs,

  doc,query, where
} from "firebase/firestore";
import { db } from '../../../config';
const nav_tabs = [
  { id: 'grid', active: true, icon: 'fas fa-th' },
  { id: 'list', icon: 'fas fa-list-ul' },
]

const ShopProduct = ({ shop_right }) => {
  const {  handleSelectChange , categoryActive } = useGlobalContext();
  const [showing, setShowing] = useState(0);
  const [isActive,setIsActive] = useState('grid')
  const [listShowing, setListShowing] = useState(0);
  const [data, setdata] = useState([]);
  const currentPath = window.location.pathname;
  const segments = currentPath.split('/'); // Split path into segments
  const lastSegment = segments[segments.length - 1];
  const handleActive = (list) => {
    setIsActive(list)
  }
  useEffect(() => {
   
    const fetchProds = async () => {
      try {
          const Ref = collection(db, 'Produits')
          
          const q = query(
            Ref,
            where('categ', 'in',lastSegment?[lastSegment]:categoryActive) 
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

   
  }, [categoryActive])


  return (
    <>
      <section className="shop__area pt-100 pb-100 shop_products">
        <div className="container">
          <div className="row">
            {!shop_right && <div className="col-xl-3 col-lg-3 col-md-4">
              <ShopSidebar />
            </div>}
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="shop__content-area">
                <div className="shop__header d-sm-flex justify-content-between align-items-center mb-40">
                  <div className="shop__header-left">
                    <div className="show-text">
                      <span>Showing 1–{isActive === 'grid' ? showing : listShowing} of {data.length} results</span>
                    </div>
                  </div>
                  <div className="shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end">
                    <div className="sort-wrapper mr-30 pr-25 p-relative">
                      <select onChange={handleSelectChange}>
                        <option defaultValue="1">Default Sorting</option>
                        <option defaultValue="2">Short by new</option>
                        <option defaultValue="3">Short by featured</option>
                        <option defaultValue="4">Short by price</option>
                      </select>
                    </div>
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      {nav_tabs.map((tab, i) => {
                        return <li key={i} className="nav-item" onClick={()=> handleActive(tab.id)}>
                          <a className={`nav-link ${tab.active ? 'active' : ''}`} id={`pills-${tab.id}-tab`} data-bs-toggle="pill" href={`#pills-${tab.id}`} role="tab" aria-controls={`pills-${tab.id}`} aria-selected={tab.active ? 'true' : 'false'}><i className={tab.icon}></i></a>
                        </li>
                      })}
                    </ul>
                  </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                    <div className="row custom-row-10">
                      <ProductGrid itemsPerPage={10} items={data} setShowing={setShowing} />
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-list" role="tabpanel" aria-labelledby="pills-list-tab">
                    <ProductList itemsPerPage={5} items={data} setShowing={setListShowing} />
                  </div>
                </div>

              </div>
            </div>

            {shop_right && <div className="col-xl-3 col-lg-3 col-md-4">
              <ShopSidebar />
            </div>}

          </div>
        </div>
      </section>


      {/* product modal start */}
      <ProductModal />
      {/* product modal end */}
    </>
  );
};

export default ShopProduct;