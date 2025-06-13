import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import AuthLayout from './routes/AuthLayout'
import RegisterEmployee from './pages/Register/RegisterEmployee'
import LoginPage from './pages/Login/LoginPage.jsx'

function App() {

  return (
    <div className='app-container'>
   <Router>
      <Routes>
        <Route path="/" element={<Navigate to="auth/login"/>}/>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterEmployee/>}/>
        </Route>
      </Routes>
   </Router>
   </div>
  )
}

export default App
