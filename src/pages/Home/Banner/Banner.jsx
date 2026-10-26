import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImage1 from "/banner/banner1.png";
import bannerImage2 from "/banner/banner2.png";
import bannerImage3 from "/banner/banner3.png";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        emulateTouch={true}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={bannerImage1} />
        </div>
        <div>
          <img src={bannerImage2} />
        </div>
        <div>
          <img src={bannerImage3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
