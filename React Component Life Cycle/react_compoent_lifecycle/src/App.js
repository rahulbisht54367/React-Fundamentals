import logo from './logo.svg';
import './App.css';
import HomePageComponent from './components/HomePageComponent';
import { useState } from 'react';

function App() {
  const [loadHomepage,setLoadHomepage] = useState(true)
  function loadhomepageComponent(){
    if(loadHomepage){
      setLoadHomepage(false)
    }else{
      setLoadHomepage(true)
    }
  }
  return (
    <div>
      {loadHomepage && <HomePageComponent></HomePageComponent>}
      <button type='radio' onClick={loadhomepageComponent}>Load Homepage compoenet</button>
      Here we are testing the code for the Life compoenet life cycle
    </div>
  );
}

export default App;
