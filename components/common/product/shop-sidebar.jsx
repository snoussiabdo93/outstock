import ProductBrands from '../filtering/product-brands';
import ProductCategories from '../filtering/product-categories';
import ProductColor from '../filtering/product-color';
import ProductFeature from '../filtering/product-feature';
import ProductSize from '../filtering/product-size';

const ShopSidebar = () => {
  return (
    <>
      <div className="shop__sidebar">
        <ProductCategories/>
        
      </div>
    </>
  );
};

export default ShopSidebar;

/*<ProductColor/>
        <ProductBrands/>
        <ProductFeature/>*/