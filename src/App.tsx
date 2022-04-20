import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import NotFound from './components/shared/NotFound';
import Space from './components/Space/Space';

export interface Title {
  title: string;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Space />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
