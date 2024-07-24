"use client";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { testimonials } from "@/Data/testimonialData";
import Image from "next/image";
import styles from "./testimonial.module.css";

// Swiper components, modules and styles
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// Our custom button component
// import SliderButtons from "./SliderButtons";

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow,PrevArrow } from "../TesimonialArrows";

const TestiminialSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <section className={styles.slider}>
        <div className={styles.sliderMain}>
          <Slider {...settings}>
            {testimonials.map(({ id, img, name, text }) => (
              <div key={id} className={styles.slide}>
                <div className={styles.slideImg}>
                  <Image src={img} width={80} height={80} alt={name} />
                </div>
                <div className={styles}>
                  <p>{text}</p>
                </div>

                <div className={styles}>
                  <h4>{name}</h4>
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </section>
    </>
  );
};

export default TestiminialSlider;
