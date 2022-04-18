import React from "react";
import { Carousel } from "react-bootstrap";
import tour1 from "../../images/tour1.jpg";
import tour2 from "../../images/tour2.jpg";
import tour3 from "../../images/tour3.jpg";
import './Banner.css'
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 bannerImg" src={tour1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-dark fs-1">Travel To The World</h3>
          <p className="text-dark">Discover the hidden beauty from top to bottom</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 bannerImg" src={tour2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="text-dark fs-1">Book the Perfect Trip</h3>
          <p className="text-dark">Search Over 100+ Airlines and More Then 450+ hotels.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 bannerImg" src={tour3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="text-dark fs-1">Vacation Packages</h3>
          <p className="text-dark">Find out the best deals and books yours today.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
