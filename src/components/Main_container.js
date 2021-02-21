import React from 'react';
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

export default function Main_container() {
    const classes = useStyles();

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
