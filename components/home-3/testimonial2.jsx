import { useState } from "react";
import Slider from "react-slick";

import Image from 'next/image';

// slick setting nav
const settings_nav = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  centerPadding: 0,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

// slick setting
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
};


const nav_data = [
  { img: '/assets/img/testimonial/person-1.jpg' },
  { img: '/assets/img/testimonial/person-2.jpg' },
  { img: '/assets/img/testimonial/person-3.jpg' },
  { img: '/assets/img/testimonial/person-4.jpg' },
]

const testimonial_data = [
  {
    id: 1,
    name: 'Mason Robinson',
    title: 'UX - Designer',
    desc: 'Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.'
  },
  {
    id: 2,
    name: 'David Cruso',
    title: 'Web Developer',
    desc: 'Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.'
  },
  {
    id: 3,
    name: 'Shahnewaz Sakil',
    title: 'Web Designer',
    desc: 'Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.'
  },
  {
    id: 4,
    name: 'Salim Rana',
    title: 'WP Expert',
    desc: 'Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius consuetudium lectorum.'
  },
]
const Testimonial = () => {

  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <>
      <section className="testimonial__area box-m-10 pt-100 pb-140 mt-50"
        style={{ background: 'url(/assets/img/bg/testimonial-bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
              <div className="">
                
              </div>
              <div className=" mt-40">
              

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;