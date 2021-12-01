import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Feature from './pages/feature/Feature';
import Create from './pages/create/Create'
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route exact path ='/' element={<Home />}/>
          <Route path ='/feature/:id' element={<Feature />}/>
          <Route path ='/create' element={<Create />}/>
          <Route path ='/search' element={<Search />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App
