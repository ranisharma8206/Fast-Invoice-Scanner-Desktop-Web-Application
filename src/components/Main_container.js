import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Live_preview_area from './Live_preview_area.js'
import Saved_images_area from './Saved_images_area.js'

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
    },
}));

export default function Main_container(props) {
    const classes = useStyles();
    useEffect(() => {
        document.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                props.socket.emit('viewer_key_press');
            }
        });
        props.socket.on("send_image_viewer", (imageUri) => {
            console.log(imageUri);
        });
    });
    return (
    <div className={classes.root}>
        <Grid container>
        <Grid item xs={4}>
            <Live_preview_area />
        </Grid>
        <Grid item xs={8}>
            <Saved_images_area />
        </Grid>
        </Grid>
    </div>
    );
}
