
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Navbar from './componenet/Navbar';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <h1> This is React Router Dom</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
