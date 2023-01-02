import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, NotFound404, MainPage } from './components/pages/pages';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/feed' element={<MainPage/>} />
          <Route path='*' element={<NotFound404/>} />
        </Routes>
    </Router>
  );
}

export default App;

