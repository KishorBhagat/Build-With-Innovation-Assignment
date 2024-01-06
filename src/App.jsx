import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const accessToken = localStorage.getItem('token');

  const ProtectedRoute = ({ children }) => {
    if (!accessToken) {
      return <Navigate to='/login' />
    }
    return children
  }
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
