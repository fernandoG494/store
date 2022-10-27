import React from 'react';
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Rating from '@mui/material/Rating';

import '../css/style.css';

const ProductCard = ({product}) => {
    return (
        <Box sx={{ p: 2}}>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Card style={{minWidth: '300px', background: '#fbfbfb'}}>
                    <ImageCard img={product.img} name={product.name}/>
                    <ContentCard 
                        name={product.name} 
                        prace={product.prace} 
                        cents={product.cents}
                        starts={product.starts}    
                    />
                </Card>
            </Grid>
        </Box>
    );
}

const ImageCard = ({img, name}) => {
    return (
        <CardMedia
            component="img"
            height="224"
            width="224"
            image={img}
            alt={name}
        />
    );
}

const ContentCard = ({name, prace, cents, starts}) => {
    return (
        <CardContent sx={{paddingBottom: 0}}>
            <Typography gutterBottom variant="h5" component="h5">{name}</Typography>
            <Rating name="read-only" value={starts} readOnly />
            <CardActions disableSpacing>
                <PraceProduct prace={prace} cents={cents} />
                <Box sx={{ flexGrow: 1 }} />
                <IconFavorite />
                <IconShopping />
            </CardActions>
        </CardContent>
    );
}

const PraceProduct = ({prace, cents}) => {
    return (
        <div>
            <Typography variant="string" className='money-symbol'>$</Typography>
            <Typography variant="string" className='money-cost'>{prace}</Typography>
            <Typography variant="string" className='money-cents'>{cents}</Typography>
        </div>
    );
}

const IconFavorite = () => {
    return (
        <IconButton color='iconCard' aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon sx={{fontSize: 30}}/>
        </IconButton>
    );
}

const IconShopping = () => {
    return (
        <IconButton color='iconCard' aria-label="Shopp">
            <ShoppingCartOutlinedIcon sx={{fontSize: 30}}/>
        </IconButton>
    );
}

export default ProductCard;