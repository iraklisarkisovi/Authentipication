import React from 'react';
import './App.css';
import Routess from './Components/Router/routes';
import Header from './Components/header';
import { route } from './Components/Router/interfaces';
import ResponsiveAppBar from './Components/materialHeader';
 

const App:React.FC = () => {
  return (
    <>
      {/* <ResponsiveAppBar route={route}/> */}
      <Routess/>
    </>
  );
}

export default App;
