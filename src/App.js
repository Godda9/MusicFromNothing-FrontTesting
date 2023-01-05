import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Login, Register, NotFound404, MainPage, Chats, Profile, AccountRestore } from './components/pages/pages';
=======
import { Login, Register, NotFound404, MainPage, Chats, Profile, ProfileEdit, Battles, FAQ } from './components/pages/pages';
>>>>>>> 2ac0169e6b39cfc6c319024a7e127f03a2b55e63

function App() {
  return (
    <Router>
        <Routes>
<<<<<<< HEAD
          <Route path='/login'          element={<Login/>}       />
          <Route path='/register'       element={<Register/>}    />
          <Route path='/feed'           element={<MainPage/>}    />
          <Route path='/chats'          element={<Chats/>}       />
          <Route path='/profile'        element={<Profile/>}     />
          <Route path='*'               element={<NotFound404/>} />
          <Route path='account-restore' element={<AccountRestore/>} />
=======
          <Route path='/login'        element={<Login/>}       />
          <Route path='/register'     element={<Register/>}    />
          <Route path='/feed'         element={<MainPage/>}    />
          <Route path='/chats'        element={<Chats/>}       />
          <Route path='/profile'      element={<Profile/>}     />
          <Route path='/profile-edit' element={<ProfileEdit/>} />
          <Route path='/battles'      element={<Battles/>}     />
          <Route path='/f.a.q'        element={<FAQ/>}         />
          <Route path='*'             element={<NotFound404/>} />
>>>>>>> 2ac0169e6b39cfc6c319024a7e127f03a2b55e63
        </Routes>
    </Router>
  );
}

export default App;

