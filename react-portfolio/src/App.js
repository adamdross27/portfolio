import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/portfolio" element={<Navigate to="/portfolio/home" replace />} />
          <Route path="/portfolio/home" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/projects" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
