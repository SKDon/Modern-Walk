import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
    },
    card: {
        flex: 1,
        padding: theme.spacing(2),
        textDecoration: 'none',
        color: 'inherit',
        textAlign: 'center'
        
    },
    whiteText: {
        color: 'white',
      },
      men: {
        backgroundColor: '#66ffcc'
      },
      women: {
        backgroundColor: '#ff4d88'
      },
      paper: {
        textAlign: 'center',
        height: 200,
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '20px 20px 20px 20px',
      },
      title: {
        fontSize: '2.5rem',
        fontWeight: 'bold', 
        textTransform: 'capitalize',
    },
}));

const Category = ({ card1Data, card2Data }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Link to={card1Data.route} className={classes.card}>
                <Paper elevation={9} className={`${classes.paper} ${classes.whiteText} ${classes.men}`}>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        {card1Data.title}
                    </Typography>
                </Paper>
            </Link>
            <Link to={card2Data.route} className={classes.card}>
                <Paper elevation={5} className={`${classes.paper} ${classes.whiteText} ${classes.women}`}>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        {card2Data.title}
                    </Typography>
                </Paper>
            </Link>
        </div>
    );
};

export default Category;
