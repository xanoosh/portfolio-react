import SingleImageElement from './SingleImageElement';

import reactLogo from './img/react-logo.png';
import javascriptLogo from './img/javascript-logo.png';
import cssLogo from './img/css3-logo.png';
import htmlLogo from './img/html5-logo.png';

const SectionImages = () => {
  const images = [reactLogo, javascriptLogo, cssLogo, htmlLogo].map(
    (logoSrc) => <SingleImageElement src={logoSrc} />
  );
  return (
    <section className="section-images">
      <div className="row">{images}</div>
    </section>
  );
};

export default SectionImages;
