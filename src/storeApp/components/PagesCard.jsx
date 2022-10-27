import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import pages from '../utils/pages';

const PagesCard = () => {
    return (
        <Box sx={{ p: 2}}>
            <Grid container spacing={2} sx={{ p: 2}}>
                {pages.map((page, i) => 
                    <PageItem 
                        image={page.image} 
                        name={page.name} 
                        key={i}
                    />
                )}
            </Grid>
        </Box>
    );
}

const PageItem = ({image, name}) => {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card sx={{minWidth: 300, background: '#f7f7f7'}}>
                <CardActionArea>
                    <PageImage image={image} alt={name}/>
                    <PageTitle title={name}/>
                </CardActionArea>
                <BtnSeeMore />
            </Card>
        </Grid>
    );
}

const PageImage = ({image, alt}) => {
    return (
        <CardMedia
            component="img"
            height="140"
            image= {image}
            alt={alt}
        />
    );
}

const PageTitle = ({title}) => {
    return (
        <CardContent>
            <Typography gutterBottom variant="h5" component="h5">{title}</Typography>
        </CardContent>
    );
}

const BtnSeeMore = () => {
    return (
        <CardActions>
            <Button size="small" color="primary">
                See more
            </Button>
        </CardActions>
    );
}

export default PagesCard;