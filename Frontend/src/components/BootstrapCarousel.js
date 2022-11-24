import React from "react";
import { Carousel } from "react-bootstrap";
import clothingshop2 from "../images/clothingshop2.jpg";
import clothingshop3 from "../images/clothingshop3.jpg";

export default function BootstrapCarousel() {
    return (

<div>
<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={clothingshop2}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={clothingshop3}
      alt="Second slide"
    />

  </Carousel.Item>
</Carousel>
</div>
) 
} 