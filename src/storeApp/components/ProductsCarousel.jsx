import React from "react";
import Carousel from "react-multi-carousel";
import Typography from '@mui/material/Typography';
import CardProductPoular from './ProductCard';
import Box from '@mui/material/Box';

import "react-multi-carousel/lib/styles.css";

const ProductsCarousel = ({title, products, time=5000}) => {
    return (
        <Box sx={{ p: 2}}>
            <section>
                <TitleCarousel title={title}/>
                <MultiCarousel products={products} time={time}/>
            </section>
        </Box>
    );
}

const TitleCarousel = ({title}) => {
    return (
        <Typography gutterBottom variant="h4" component="div"
            align={'center'}
            style={{
                cursor: 'default',
                letterSpacing: '.1rem',
                font: '2.5rem Balthazar',
                fontWeight:'400',
                marginTop: '50px',
                marginBottom: '0'
            }}
        >
            {title}
        </Typography>
    );
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const MultiCarousel = ({products, time}) => {
    return (
        <Carousel
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={time}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            style={{minWidth: '320px'}}
        >
            {products.map((item, i) =>
                <CardProductPoular product={item} key={i} />
            )}
        </Carousel>
    );
}

export default ProductsCarousel;