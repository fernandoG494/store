import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselProducts from './CarouselImages';

const CarouselImg = () => {
    return (
        <Carousel showThumbs={false} showStatus={false} autoPlay interval="3000" infiniteLoop={true}>
            {CarouselProducts.map((item, id) => (
                <div key={id}>
                    <img src={item.src} alt={item.alt} />
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselImg;