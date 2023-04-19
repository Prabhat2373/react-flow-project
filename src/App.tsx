import { useState } from 'react';
import './App.css';
import Flow from './components/Flow';
import FlowCustom from './components/FlowCustom';

function App() {
  return (
    <>
      <div>Hello There!</div>
      <div style={{ height: '500px' }}>
        {/* <Flow /> */}
        <FlowCustom />
      </div>
    </>
  );
}

export default App;
