import { Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NoMatch';

import './App.css';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </>
);

export default App;
