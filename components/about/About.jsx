import Image from "next/image";
import about from "../../public/assets/img/bg/about.png"



const About = () => {
  return (
    <>
      <section className="contact__area pb-100 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div >
                <h3>Find us here.</h3>
              
                <p>

                  Olizana is a Tunisian company <strong>Since 1980 In sfax </strong> specializing in the making of articles using olive wood.<br/> Founded by enthusiasts of craftsmanship and environmental preservation, the company is committed to creating unique and sustainable products using olive wood, an abundant natural resource in Tunisia. <br/>

                  Olizana stands out for its eco-friendly and environmentally conscious approach.<br/>
                  The olive wood used is sourced from olive trees that have reached the end of their productive life cycle, thereby avoiding unnecessary felling.<br/>
                  This sustainable approach helps preserve natural resources while giving new life to olive wood.<br/>

                  The skilled artisans at Olizana master the art of transforming olive wood into exquisite articles. <br/>
                  They create a wide range of products, including kitchen utensils such as cutting boards, bowls, and spoons, as well as decorative items like vases, sculptures, and jewelry. Each piece is meticulously handcrafted, ensuring exceptional quality and beauty.<br/>

                  Beyond producing olive wood articles, Olizana is also committed to supporting local communities and preserving traditional craftsmanship. By closely collaborating with local artisans, the company contributes to job creation and the preservation of traditional Tunisian skills.


                </p>

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

