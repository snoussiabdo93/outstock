import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/features/product-slice";
import FeatureProduct from "../product/feature-product";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,query,where
  
} from "firebase/firestore";
import { db } from "../../../config";
const BannerTwo = ({df,h4}) => {
  const products = useSelector(selectProducts)
  const featureProducts = products.map(item => item.product).flat().filter(prd => prd.featured);
  const [data, setdata] =useState([])


  useEffect(() => {
   
    const fetchProds = async () => {
      try {
          const Ref = collection(db, 'Produits')
          const q = query(
            Ref,
            where('categ', '==','collection') 
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
          console.log(Array)

      } catch (error) {
          console.log(error)
          
      }
     
    }
    fetchProds()

   
  }, [])

  return (
    <>
      <div className="banner__area-2 pb-20">
        <div className={`container-fluid ${df ? '' : 'p-0'}`}>
          <div className="row g-0">
            {data.map((product, index) => (
              <FeatureProduct key={index} index={product.id} product={product.data} h4={h4} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTwo;