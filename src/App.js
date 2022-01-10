
import './App.css';
import GeneratePlaylist from './Components/GeneratePlaylist/GeneratePlaylist';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import frontToken from './Components/frontToken';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/about" element={<About />}/>
              <Route path='/generate-playlist' element={<GeneratePlaylist/>}/>
              <Route path='/frontToken' element={<frontToken/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
