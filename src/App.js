import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, NotFound404, MainPage, Chats, Profile, ProfileEdit, Battles } from './components/pages/pages';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/login'        element={<Login/>}       />
          <Route path='/register'     element={<Register/>}    />
          <Route path='/feed'         element={<MainPage/>}    />
          <Route path='/chats'        element={<Chats/>}       />
          <Route path='/profile'      element={<Profile/>}     />
          <Route path='/profile-edit' element={<ProfileEdit/>} />
          <Route path='/battles'      element={<Battles/>}     />
          <Route path='*'             element={<NotFound404/>} />
        </Routes>
    </Router>
  );
}

export default App;

