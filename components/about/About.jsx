import Image from "next/image";
import about from "../../public/assets/img/bg/about.png"



const About = () => {
  return (
    <>
      <section className="contact__area pb-100 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact__info">
                <h3>Find us here.</h3>
              
                <p>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready. Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

                <div className="contact__social">
                  <ul>
                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                    <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div >
                <Image  src={about} width='500px' height={"500px"} alt="about-img"/>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

