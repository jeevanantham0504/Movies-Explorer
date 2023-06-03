import logo from './logo.svg';
import './App.css';
import Landing from './components/landingpage/landingpage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/login/login';
import Registerpage from './components/register/register';
import Firstpage from './components/firstpage/firstpage';
import Moviepage from './components/moviepage/moviepage';
import Moviedetails from './components/moviedetailspage/moviedetailspage';


function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Landing/>]}/>
      <Route path='/register' element={[<Registerpage/>]}/>
      <Route path='/login' element={[<Loginpage/>]}/>
      <Route path='/firstpage' element={[<Firstpage/>]}/>
      <Route path='/moviepage' element={[<Moviepage/>]}/>
      <Route path='/moviedetailspage' element={[<Moviedetails/>]}/>


      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
