import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import test_image from '../assets/images/test.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth : '150px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      padding : '10px'
    },
    images_preview: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height : '200px'
    },
    toolbaar_options: {
      padding: theme.spacing(0.2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop : '5px',
    }
}));

export default function Custom_card(props) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Paper className={classes.images_preview} elevation={4}>
          <img onClick={()=>{props.setSelectedDocument(props.document)}} src={props.document.url} alt="Logo" style={{height : 'auto', width : '100%'}} />
        </Paper>
        <Paper className={classes.toolbaar_options} elevation={3}>
          <CloudDownloadIcon fontSize="medium" />
          <DeleteIcon fontSize="medium" />
        </Paper>
    </div>
    );
}
