import ContactForm from "../common/form/contact-form";


const contactInfo = [
  {
    icon: 'fal fa-map-marker-alt',
    title: 'Address:',
    subtitle: 'Sakit ezzit Route tunis km 8 ,Sfax, Tunisia .'
  },
  {
    icon: 'fal fa-envelope-open-text',
    title: 'Email:',
    subtitle: 'olizanaTunisie@gmail.com'
  },
  {
    icon: 'fal fa-phone-alt',
    title: 'Number Phone:',
    subtitle: ' +216 50 049 000'
  },
]

const ContactArea = () => {
  return (
    <>
      <section className="contact__area pb-100 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact__info">
                <h3>Find us here.</h3>
                <ul className="mb-55">
                  {contactInfo.map(item => (
                    <li key={item.title} className="d-flex mb-35">
                      <div className="contact__info-icon mr-20">
                        <i className={item.icon}></i>
                      </div>
                      <div className="contact__info-content">
                        <h6>{item.title}</h6>
                        <span>{item.subtitle}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="contact__social">
                  <ul>
                    <li><a href="https://www.instagram.com/olizanawood/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61553789957924"><i className="fab fa-facebook-f"></i></a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact__form">
                <h3>Contact Us.</h3>
                {/* contact form stat */}
                <ContactForm/>
                {/* contact form stat */}
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;

