import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import SubscribeArea from '../common/subscribe-area';
import About from './About'

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb img="/assets/img/page-title/page-title-2.jpg" title={'About Us'} subtitle={'About '} />
        <About/>
        <SubscribeArea />
      </main>
      <Footer />
    </>
  );
};

export default index;