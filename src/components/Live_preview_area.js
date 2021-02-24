import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';
import test_image from '../assets/images/test.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
       height:'100vh',
       display:'flex',
       flexDirection:'column',
       justifyContent:'center'
    },
    preview_paper: {
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginLeft:'10px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        height:'720px'
    },
    toolbar_paper: {
        padding: theme.spacing(1.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginLeft:'10px',
        marginTop:'20px'
    },
    download_button : {
        position: 'relative',
        float: 'right'
    }
}));

export default function Live_preview_area() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Paper className={classes.preview_paper} elevation={4}>
            <img src={test_image} alt="Logo" style={{height : 'auto', width : '100%'}} />
        </Paper>
        <Paper className={classes.toolbar_paper} elevation={3}>
            <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.download_button}
            startIcon={<CloudDownloadIcon />}
            >
            Download All
            </Button>
        </Paper>
    </div>
    );
}
