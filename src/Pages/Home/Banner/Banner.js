import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/banner/banner-1.jpg";
import banner2 from "../../../Images/banner/banner-2.jpg";
import banner3 from "../../../Images/banner/banner-3.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img width={"100%"} height={"550px"} src={banner1} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"550px"} src={banner2} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"550px"} src={banner3} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
