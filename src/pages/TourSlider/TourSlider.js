import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Slider from "react-slick";
import tour1 from "../../images/img-01.jpg";
import tour2 from "../../images/img-02.jpg";
import tour3 from "../../images/img-03.jpg";
import tour4 from "../../images/img-04.jpg";
const TourSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="container my-5">
      <h2 className="text-center">Popular Tours</h2>
      <Slider {...settings}>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={tour1} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={tour2} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={tour3} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={tour4} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={tour1} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={tour2} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={tour3} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={tour4} />
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default TourSlider;
