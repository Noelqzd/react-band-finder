import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';



const BandCard = ({ band }) => {
    return (

        <Grid item key={band.id} xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card>
                    <div >
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
                    <Hidden xsDown>
                        <CardMedia

                            image={band.imgUrl}
                            title="Image title"
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default BandCard