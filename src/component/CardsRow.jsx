import React from 'react';
import { Grid, Paper, Typography, CardMedia, CardContent, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100%',
    },
    price: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    content: {
        backgroundColor: 'green',
        borderRadius: '20px 20px 20px 20px',
    },
    media: {
        margin: 'auto',
        display: 'block',
        width: '100%',
        height: 'auto',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
    },
    cardContainer: {
        width: '45%',
        marginBottom: theme.spacing(2),
    },
}));

const CardsRow = ({ menCardData, womenCardData }) => {
    const classes = useStyles();

    const renderCards = () => {
        const cards = [];
        for (let i = 0; i < 2; i++) {
            if (menCardData[i]) {
                cards.push(
                    <Grid item xs={12} sm={6} md={3} key={`men-${i}`} className={classes.cardContainer}>
                        <Paper className={classes.paper} elevation={9}>
                            <Typography variant="h5" component="h2">
                                {menCardData[i].title}
                            </Typography>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                alt={menCardData[i].title}
                                image={menCardData[i].image}
                            />
                            <CardContent className={classes.content} style={{ backgroundColor: '#66ffcc' }}>
                                <Typography variant="body2" className={classes.price}>
                                    Rs.{menCardData[i].price}
                                </Typography>
                                <Typography variant="body2">
                                    {menCardData[i].description}
                                </Typography>
                            </CardContent>
                        </Paper>
                    </Grid>
                );
            }
            if (womenCardData[i]) {
                cards.push(
                    <Grid item xs={12} sm={6} md={3} key={`men-${i}`}>
                        <Paper className={classes.paper} elevation={9}>
                            <Typography variant="h5" component="h2">
                                {womenCardData[i].title}
                            </Typography>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                alt={womenCardData[i].title}
                                image={womenCardData[i].image}
                            />
                            <CardContent className={classes.content} style={{ backgroundColor: '#ff4d88' }}>
                                <Typography variant="body2" className={classes.price}>
                                    Rs.{womenCardData[i].price}
                                </Typography>
                                <Typography variant="body2">
                                    {womenCardData[i].description}
                                </Typography>
                            </CardContent>
                        </Paper>
                    </Grid>

                );
            }
        }
        return cards;
    };

    return (
        <Grid container spacing={3}>
            {renderCards()}
        </Grid>
    );
};

export default CardsRow;
