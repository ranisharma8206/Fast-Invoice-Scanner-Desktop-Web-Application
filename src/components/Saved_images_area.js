import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';
import test_image from '../assets/images/test.jpeg';
import test_image1 from '../assets/images/test2.jpeg';
import test_image2 from '../assets/images/test3.jpeg';
import Custom_card from './Custom_card.js';

const useStyles = makeStyles((theme) => ({
    root: {
       height:'100%',
       display : 'flex',
       flexDirection:'column',
       justifyContent:'center',
       paddingLeft : '30px',
       paddingRight : '30px',
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height : '80vh',
        width : '100%',
        display : 'flex',
        alignItems : 'flex-start',
        flexWrap : 'wrap',
        overflow : 'scroll',
        overflowX : 'hidden'
    }
}));

export default function Saved_images_area(props) {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Paper className={classes.paper} elevation={4}>
            {props.documents.map((doc)=>{return(<Custom_card document={doc} setSelectedDocument={props.setSelectedDocument}/>)})}
        </Paper>
    </div>
    );
}
