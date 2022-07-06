import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Pages/Components/Navigation';
import Search from './Pages/Components/Search';
import Home from './Pages/Home';
import Results from './Pages/Results';

function App() {
      return (
        <>
        <div className="App">
            <Navigation />
            <Search />
            <Routes>
              <Route path="/Rick-and-Morty-App" element={<Home />} />
              <Route path="/results/:search" element={<Results />} />
            </Routes>
        </div>
        </>
      );
}
export default App;
