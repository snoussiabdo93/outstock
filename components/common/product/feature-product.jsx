import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeatureProduct = ({ index, product, h4 }) => {
  return (
    <>
      <div className="col-xl-6 col-lg-6">
        <div className={`banner__item-2 ${index === 0 ? ' banner-right' : ' banner-left'} p-relative mb-30 pr-15`}>
          <div className="banner__thumb fix">
            <Link href={`/product-details/${index}`}>
              <a className="w-img">
                <img src={product.photo1} alt="banner"  />
              </a>
            </Link>
          </div>
          <div className={`banner__content-2 ${h4 ? 'banner__content-4' : ''} p-absolute transition-3`}>
            <span>{product.categ}</span>
            <h4>
              <Link href={`/product-details/${index}`}>
                <a>{product.Label}</a>
              </Link>
            </h4>
            {!h4 && <p>{product.desc}</p>}
            {h4 && <p>{product.desc_2}</p>}
            <Link href={`/product-details/${index}`}>
              <a className="os-btn os-btn-2"> Get a Quote 
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;