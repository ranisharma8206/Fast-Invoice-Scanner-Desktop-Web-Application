import React, { useEffect, useRef, useState } from 'react';
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
    const [documents, setDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(undefined);
    const documentsRef = useRef(documents)


    useEffect(()=>{
        documentsRef.current = documents;
    });
    useEffect(() => {
        document.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                props.socket.emit('viewer_key_press');
            }
        });
        const appendDoc = (doc)=>{
            console.log(documentsRef.current)
            setDocuments([...documentsRef.current, doc]);
            setSelectedDocument(doc);
        }
    
        props.socket.on("send_image_viewer", (imageData) => {
            console.log(imageData);
            var doc_json = JSON.parse(imageData);
            var doc={url:doc_json.url}
            appendDoc(doc);
            
        });


        return () => {
            props.socket.off("send_image_viewer");
          };
    },[]);
    return (
    <div className={classes.root}>
        <Grid container>
        <Grid item xs={4}>
            <Live_preview_area selectedDocument={selectedDocument}/>
        </Grid>
        <Grid item xs={8}>
            <Saved_images_area documents={documents} setSelectedDocument={setSelectedDocument} />
        </Grid>
        </Grid>
    </div>
    );
}
