import { useState, useEffect } from 'react';
import Main_container from './components/Main_container.js'
import { ViewerInitialScreen } from './components/ViewerInitialScreen.js';
// import { io } from "socket.io-client";
import {socket} from "./services/socket";
// const socket = io("http://192.168.29.212:5000/");


function App() {
  const [connectedViewer, setConnectedViewer] = useState(false);
  const [viewerUsername, setViewerUsername] = useState('');
  

  useEffect(()=>{
  },[])

  if(connectedViewer){
    return(
      <div>
        <Main_container socket = {socket}/>
      </div>
    );
  }
  else{
    return(
      <div>
        <ViewerInitialScreen connectedViewer = {connectedViewer} setConnectedViewer={setConnectedViewer} viewerUsername={viewerUsername} setViewerUsername={setViewerUsername} socket = {socket} />
      </div>
    );
  }
  
}

export default App;
