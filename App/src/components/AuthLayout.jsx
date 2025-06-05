import './AuthLayout.css'
import {Outlet, Link} from  'react-router-dom'

const AuthLayout = ()=>{
    return(
        <div className="form-container">
            <h2>HRMS</h2>
            <nav>
                <Link to='login'>Login</Link>
                <Link to='register'>Register new employee</Link>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthLayout;