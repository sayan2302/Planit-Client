import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Demo from './Pages/Demo/Demo';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App" >
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Demo />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />


          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
