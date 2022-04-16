import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Component/Home';
import { AddCountry } from './Component/AddCountry';
import { AddCity } from './Component/AddCity';
function App() {

  return (
    <>
    <div className='App'>
      <div>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/add-country'} element={<AddCountry />} />
        <Route path={'/add-city'} element={<AddCity />} />
      </Routes>
     
        <Link to='/'></Link>
        <Link to='/add-country'>Add-Country</Link>
        <Link to='/add-city'> Add-City</Link>
      </div>

    </div>
    
    </>
     
   
  );
}

export default App;
