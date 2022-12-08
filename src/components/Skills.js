import htmllogo from "../assets/img/HTML.png";
import Csslogo from "../assets/img/CSS.png";
import Jslogo from "../assets/img/JS.png";
import Reactlogo from "../assets/img/react.png";
import Githublogo from "../assets/img/github.png";
import bootstraplogo from "../assets/img/bootstrap.png";
import nodejslogo from "../assets/img/nodejs.png";
import materialuilogo from "../assets/img/materialui.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmllogo} alt="Imag" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={Csslogo} alt="Imag" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Jslogo} alt="Imag" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={Reactlogo} alt="Imag" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                            <img src={bootstraplogo} alt="Imag" />
                            <h5>BOOTSTRAP</h5>
                        </div>
                       
                        <div className="item">
                        <img src={materialuilogo} alt="Imag" />
                        <h5>MATERIAL UI</h5>
                    </div>
                    <div className="item">
                    <img src={nodejslogo} alt="Imag" />
                    <h5>NODE JS</h5>
                </div>
                <div className="item">
                    <img src={Githublogo} alt="Imag" />
                    <h5>GITHUB</h5>
                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Imag" />
    </section>
  )
}
