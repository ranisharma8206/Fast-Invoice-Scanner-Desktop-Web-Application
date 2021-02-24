import { useState } from 'react';
import Main_container from './components/Main_container.js'
import { ViewerInitialScreen } from './components/ViewerInitialScreen.js';

function App() {
  const [connectedViewer, setConnectedViewer] = useState(false);
  const [viewerUsername, setViewerUsername] = useState('');

  if(connectedViewer){
    return(
      <div>
        <Main_container />
      </div>
    );
  }
  else{
    return(
      <div>
        <ViewerInitialScreen connectedViewer = {connectedViewer} setConnectedViewer={setConnectedViewer} viewerUsername={viewerUsername} setViewerUsername={setViewerUsername} />
      </div>
    );
  }
  
}

export default App;
