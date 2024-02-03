import React from 'react';
import useGlobalContext from '../../../hooks/use-context';


const categoryData = [
  {title:"Kitchen Products",value:['Kitchen']},
  {title:'Accessoires',value:['Decoration']},
  {title:'Spoon & Spatula',value:['spati&spoon','CollectionSimple']},
  {title:"Chess",value:['echec']},{title:"Boards and Trays",value:['planche']}, 
]
const collData = [
  {title:"Simple Collection ",value:['CollectionSimple']},
  {title:'kitchen utensils',value:['utensils']},
  
]


const ProductCategories = () => {
  const {handleCategoryChange,categoryActive} = useGlobalContext();

  return (
    <>
      <div className="sidebar__widget mb-55">
        <div className="sidebar__widget-title mb-25">
          <h3>Product Categories</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="categories">
            <div className='categories__list'>
              <ul>
                {categoryData.map((category,index) => (
                  <li className={categoryActive === category.title ? 'active' : ''} 
                  onClick={()=> handleCategoryChange(category.value)} key={index}>
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar__widget-title mb-25">
          <h3>Collections </h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="categories">
            <div className='categories__list'>
              <ul>
                {collData.map((category,index) => (
                  <li className={categoryActive === category.title ? 'active' : ''} 
                  onClick={()=> handleCategoryChange(category.value)} key={index}>
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;