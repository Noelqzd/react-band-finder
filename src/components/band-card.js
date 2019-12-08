import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',

    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    }
}))

const BandCard = ({ band }) => {
    const classes = useStyles();
    return (

        <Grid item key={band.id} xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {band.name}

                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {band.genre ? band.genre.name : "Genre Undefined"}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {band.bio}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                More Info...

                        </Typography>
                        </CardContent>
                    </div>

                    <CardMedia
                        className={classes.cardMedia}
                        image={band.imgUrl}
                        title="Image title"
                    />

                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default BandCard