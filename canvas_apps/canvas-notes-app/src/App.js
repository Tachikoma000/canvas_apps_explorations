import React from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import CanvasFlow from './components/CanvasFlow';
import './App.css';

function App() {
  return (
    <div className="app">
      <ReactFlowProvider>
        <CanvasFlow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
