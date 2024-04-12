// Women.js
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, CardMedia, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    price: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    content: {
        backgroundColor: '#ff4d88',
        borderRadius: '20px 20px 20px 20px',
    },
    media: {
        margin: 'auto',
        display: 'block',
        width: '100%',
        height: '100%',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
        flexWrap: 'wrap',
    },
}));

const Women = () => {
    const classes = useStyles();
    const [menCardData, setMenCardData] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
            .then(res => res.json())
            .then(data => {
                setMenCardData(data);
            })
            .catch(error => console.error('Error fetching men clothing data:', error));
    }, []);

    const renderCard = (cardData) => (
        <Grid item xs={12} sm={6} md={3} key={cardData.id}>
            <Paper className={classes.paper} elevation={9}>
                <Typography variant="h5" component="h2">
                    {cardData.title}
                </Typography>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt={cardData.title}
                    image={cardData.image}
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" className={classes.price}>
                        Rs.{cardData.price}
                    </Typography>
                    <Typography variant="body2">
                        {cardData.description}
                    </Typography>
                </CardContent>
            </Paper>
        </Grid>
    );


    const renderCardRow = (cards) => (
        <Grid container spacing={3}>
            {cards.map(card => renderCard(card))}
        </Grid>
    );


    const divideMenCards = (cardsData, cardsPerRow) => {
        const dividedRows = [];
        for (let i = 0; i < cardsData.length; i += cardsPerRow) {
            dividedRows.push(cardsData.slice(i, i + cardsPerRow));
        }
        return dividedRows;
    };

    return (
        <div className={classes.container}>
            {divideMenCards(menCardData, 4).map((row, index) => (
                <div key={index}>
                    {renderCardRow(row)}
                </div>
            ))}
        </div>
    );
};

export default Women;

