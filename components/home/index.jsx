import Header from '../../layout/headers/header';
import Brands from '../common/brands/brands';
import Banner from '../common/banner/banner';
import BannerTwo from '../common/banner/banner-2';
import HeroSlider from '../common/hero-slider';
import Products from '../common/product/trending-products';
import SaleOff from '../common/product/sale-off';
import SubscribeArea from '../common/subscribe-area';
import Footer from '../../layout/footers/footer';
import Testimonial from '../home-3/testimonial';
import Blogs from '../home-7/blogs';
import React from 'react';
import BannerThree from '../common/banner/banner-3';

const index = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <Banner/>

      <Products/>
      <BannerTwo/>
      <Blogs/>

      <SubscribeArea/>
      <Footer/>
    </>
  );
};

export default index;