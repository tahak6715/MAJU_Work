import logo from './logo.svg';
import './App.css';
import BASelect from './components/BASelect';
import { useState } from 'react';
import Routing from './config/routing';

function App() {

  const [model,setModel] = useState({})
  return (
    <>
    <Routing/>
    
    </>
  );
}

export default App;
