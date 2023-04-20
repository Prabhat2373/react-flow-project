import { useState } from 'react';
import './App.css';
import Flow from './components/Flow';
import FlowCustom from './components/FlowCustom';
import { AllPages } from './routes/Route';
import { useRoutes } from 'react-router-dom';

function App() {
  const all_pages = useRoutes(AllPages());
  return <>{all_pages}</>;
}

export default App;
