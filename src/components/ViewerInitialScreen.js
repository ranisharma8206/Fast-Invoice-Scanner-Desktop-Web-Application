import { WorkOutlined } from "@material-ui/icons"
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
       height:'100vh',
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItems : 'center',
    }
}));


export function ViewerInitialScreen(props) {
    const classes = useStyles();
    const [disabledBtn, setDisabledBtn] = useState(true);

    function usernameChanged(event){
        props.setViewerUsername(event.target.value);
        if(event.target.value != '') { 
            setDisabledBtn(false);
        } else { 
            setDisabledBtn(true);
        }
    };
    const connectViewerBtn = () => {
        props.setConnectedViewer(true);
        props.socket.emit("viewer_connect", props.viewerUsername);
    };
    return(
        <div className={classes.root}>
            <div style={{width:'20%',textAlign:'center', marginBottom : '50px'}}>
                <TextField
                id="outlined-username-input"
                label="Username"
                type="text"
                variant="outlined"
                autoComplete = "off"
                onChange={usernameChanged}
                style={{width : '100%'}}
                />
            </div>
            <div style={{backgroundColor:'yellow'}}>
            <Button
                variant="contained"
                disabled={disabledBtn}
                color="primary"
                className={classes.button}
                onClick = {connectViewerBtn}
            >
                Connect
            </Button>
            </div>
        </div>
    );
  
}

