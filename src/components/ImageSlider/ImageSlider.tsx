import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => (
  <Swiper spaceBetween={10} slidesPerView={1}>
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <img src={img} alt={`Product ${index}`} style={{ width: "100%" }} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ImageSlider;
