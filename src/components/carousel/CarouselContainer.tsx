import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import imgOne from "../../../assets/1.jpg";
import imgTwo from "../../../assets/2.jpg";
import imgThree from "../../../assets/3.jpg";
import imgFour from "../../../assets/4.jpg";

const CarouselContainer = () => {
  const images = [
    {
      source: imgOne,
      alt: "Image One",
    },
    {
      source: imgTwo,
      alt: "Image Two",
    },
    {
      source: imgThree,
      alt: "Image Three",
    },
    {
      source: imgFour,
      alt: "Image Four",
    },
  ];
  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        <div className="h-full">
          <Image
            src={imgOne}
            alt="Image One"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="h-full">
          <Image
            src={imgTwo}
            alt="Image Two"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="h-full">
          <Image
            src={imgThree}
            alt="Image Three"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="h-full">
          <Image
            src={imgFour}
            alt="Image Four"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
