import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutMain from '../components/about';

const Contact = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutMain/>
    </Wrapper>
  );
};

export default Contact;