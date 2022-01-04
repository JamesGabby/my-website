import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Directory from './photo-gallery/directory/directory.component';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<Directory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
