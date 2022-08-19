import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import List from './Components/List';

function App() {
  const [visual, setVisual] = React.useState()

  React.useEffect(()=>{
    let local = window.localStorage.getItem('visual')
    if(local){
      setVisual(local)
    }else{
      setVisual('1')
      window.localStorage.setItem('visual', '1')
    }
  }, [])

  React.useEffect(()=>{
    if(visual) window.localStorage.setItem('visual', visual)
  },[visual])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List visual={visual} setVisual={setVisual} />} />
        <Route path="detalhes/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
