import Image from "next/image";
import Link from "next/link";
import { banners } from "../../../data";

const BannerThree = () => {
  return (
    <section className="product__area pt-60 pb-100"  >
    <div className="section__title mb-10 text-center">
                  <h2> services</h2>
                </div>
      <div className="banner__area-df mt-10">
      
        {banners.slice(6, 9).map(banner => (
          <div key={banner.id} className=" col- banner__item-3 mb-30" >
            <div className="banner__item-3-image m-img">
              <img src={banner.img} alt=""  />
            </div>
            <div className="banner__content-5">
              <h5>{banner.title}</h5>
              <p>{banner.desc}</p>
              <Link href="/shop-3-col">
                <a className="os-btn-5">{banner.btnText}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerThree;