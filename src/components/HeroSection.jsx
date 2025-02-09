
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import Slider from "react-slick";
const HeroSection = () => {
    const images = [
      img1, img2, img3
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
  
    return (
      <section className="hero">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`slide-${index}`} className="slide-image" />
            </div>
          ))}
        </Slider>
        <div className="hero-text">
          <h2>Welcome to Army Goodwill School</h2>
          <p>Empowering young minds with knowledge, discipline, and patriotism.</p>
          {/* <button>Discover More</button> */}
        </div>
      </section>
    );
  };

  export default HeroSection;