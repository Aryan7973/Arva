import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import AuthLayout from './components/AuthLayout'
import CreateEmployee from './components/CreateEmployee'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <div className='app-container'>
   <Router>
      <Routes>
        <Route path="/" element={<Navigate to="auth/login"/>}/>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<LoginForm/>}/>
          <Route path="register" element={<CreateEmployee/>}/>
        </Route>
      </Routes>
   </Router>
   </div>
  )
}

export default App
