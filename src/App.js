import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ImageSlideShow from './pages/ImageSlideShow';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageslideshow" element={<ImageSlideShow />} />
      </Routes>
    </div>
  );
}

export default App;
