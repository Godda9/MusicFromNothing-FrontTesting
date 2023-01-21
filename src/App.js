import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, NotFound404, MainPage, Chats, Profile, ProfileEdit, Battles, Support, FAQ, AccountRestore, PostUpload, Studio, Container, Track} from './components/pages/pages';
import Darkmode from 'darkmode-js';

function App() {
  new Darkmode({
    bottom: '10px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '10px', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }).showWidget();
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login'           element={<Login/>}/>
          <Route path='/register'        element={<Register/>}/>
          <Route path='/account-restore' element={<AccountRestore/>}/>
          <Route path='/support'         element={<Support/>}/>
          <Route path='/f.a.q'           element={<FAQ/>}/>
          <Route path='/studio'          element={<Studio/>}/>
          <Route path='/'                element={<Container/>}>   
            <Route path='/feed'            element={<MainPage/>}/>
            <Route path='/chats'           element={<Chats/>} />
            <Route path='/profile'         element={<Profile/>}/>
            <Route path='/profile-edit'    element={<ProfileEdit/>}/>
            <Route path='/battles'         element={<Battles/>}/>
            <Route path='/post-upload'     element={<PostUpload/>}/>
            <Route path='/track'           element={<Track/>}/>
            <Route path='*'                element={<NotFound404/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

