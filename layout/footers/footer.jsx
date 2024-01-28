import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/img/logo/logo-2.png';
import FB from '../../public/assets/img/logo/facebook.png'
import INST from '../../public/assets/img/logo/instagram.png'


const footerWidget = [
  {
    id: 1,
    title: 'information',
    footer__links: [
      { list: 'About Us', link: '/about'},
      { list: 'Delivery Inforamtion' },
      { list: 'Privacy Policy' },
      { list: 'Terms & Condition' },
    ]
  },
  {
    id: 2,
    title: 'Customer Service',
    footer__links: [
      { list: 'Shipping Policy' },
      { list: 'Help & Contact Us',link:'/contact' },
      { list: 'Returns & Refunds' },
      { list: 'Online Stores' },
      { list: 'Terms & Conditions' },
    ]
  },
]

const Footer = ({ df }) => {
  return (
    <>
      <section className={`footer__area footer-bg ${df ? 'box-m-15' : ''}`}>
        <div className="footer__top pt-30 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="footer__widget mb-30">
                  <div className="row footer__widget-title mb-25">
                    <Link href="/">
                      <a>
                        <Image src={logo} alt="logo" width="120vw" height="120vw" />
                      </a>
                    </Link>
                    <div className="col-xl-6 col-lg-5">
                <div className="footer__social-list mb-20">
                  <ul>
                  <li><a href="https://www.instagram.com/olizanawood/"> <Image src={INST} alt="logo" width="30vw" height="30vw" />  </a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61553789957924"><Image src={FB} alt="logo" width="30vw" height="30vw" /> </a></li>
                    
                  </ul>
                </div>
              </div>
                  </div>
                  <div className="footer__widget-content">
                    <p>Olizana is a Tunisian company specializing in the making of articles using olive wood. Founded by enthusiasts of craftsmanship and environmental preservation, the company is committed to creating unique and sustainable products using olive wood, an abundant natural resource in Tunisia.</p>
                    <div className="footer__contact">
                      <ul>
                        <li>
                          <div className="icon">
                            <i className="fal fa-map-marker-alt"></i>
                          </div>
                          <div className="text">
                            <span>Add: route de tunis km8 sfax , Tunisia .</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-envelope-open-text"></i>
                          </div>
                          <div className="text">
                            <span>Email: Contact@olizana.com</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-phone-alt"></i>
                          </div>
                          <div className="text">
                            <span>Phone Number: (+216)50 049 000</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {footerWidget.map(item => (
                <div key={item.id} className="col-xl-3 col-lg-3 col-md-3 col-12">
                  <div className="footer__widget mb-30">
                    <div className={`footer__widget-title ${item.id === 2 ? 'mb-25' : ''}`}>
                      <h5>{item.title}</h5>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          {item.footer__links.map((link, index) => (
                            <li key={index}><a href={link.link?link.link:"#"}>{link.list}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="footer__copyright">
                  <p>Copyright © <Link href="/">
                    <a> Olizana </a>
                  </Link>
                  
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;