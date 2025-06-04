import React from 'react'
import {Outlet, Link} from  'react-router-dom'

const AuthLayout = ()=>{
    return(
        <div>
            <h2>HRMS</h2>
            <nav>
                <Link to='login'>Login</Link>
                <Link to='createEmployee'>Register new employee</Link>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthLayout;