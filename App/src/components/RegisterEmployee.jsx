import './RegisterEmployee.css'

const RegisterEmployee = ()=>{

    return(
        <div className="registeration-container">
            <div className="left-section">
                <ul>
                    <li>-- Organisation Details</li>
                    <li>-- Personal Information</li>
                    <li>-- Project Details</li>
                </ul>
            </div>
            <div className="right-section">
                <div className='form-container'>
                    <span className='new-emp-badge'>Register new employee</span>
                    <section>
                        <h3>Organisation Details</h3>
                        <hr/>
                        <div className='form-elements'>
                            <div className="input-container">
                            <label>Employee Id</label>
                            <input type="email" required/>
                            </div>
                            <div className="input-container">
                            <label>Joining Date</label>
                            <input type="date" required/>
                            </div>
                            <div className="input-container">
                            <label>Organisation Email</label>
                            <input type="email" required/>
                            </div>
                            <div className="input-container">
                            <label>Email Password</label>
                            <input type="password" required/>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3>Personal Information</h3>
                        <hr/>
                        <div className='form-elements'>
                            <div className="input-container">
                            <label>First Name</label>
                            <input type="text" required/>
                            </div>
                            <div className="input-container">
                            <label>Last Name</label>
                            <input type="text" required/>
                            </div>
                            <div className="input-container">
                            <label>Personal Email</label>
                            <input type="email" required/>
                            </div>
                            <div className="input-container">
                            <label>Phone Number</label>
                            <input type="tel" required/>
                            </div>
                            <div className="input-container">
                            <label>Date of Birth</label>
                            <input type="date" required/>
                            </div>
                            <div className="input-container">
                            <label>Gender</label>
                            <input type="text" required/>
                            </div>
                        </div>
                    </section>
       
                    <section>
                        <h3>Project Details</h3>
                        <hr/>
                        <div className='form-elements'>
                            <div className="input-container">
                            <label>Department</label>
                            <input type="text" required/>
                            </div>
                            <div className="input-container">
                            <label>Project Code</label>
                            <input type="text" required/>
                            </div>
                            <div className="input-container">
                            <label>Job Role</label>
                            <input type="text" required/>
                            </div>
                            <div className="input-container">
                            <label>Reporting Manager</label>
                            <input type="text" required/>
                            </div>
                            <div className="input-container">
                            <label>Work Shift</label>
                            <input type="text" required/>
                            </div>  
                        </div>
                    </section>
                    <button className='submit-btn'>Submit</button>
                    <div className="margin-box"></div>
                </div>
            </div>
        </div>
        // <form>
        //     <h3>Register new employee</h3>
        //     <input type="text" placeholder='Firstname' required/>
        //     <input type="text" placeholder='Lastname' required/>
        //     <input type="text" placeholder="Employee ID"/>
        //     <input type="date" placeholder='Date of birth'/>
        //     <input type="text" placeholder='Gender'/>
        //     <input type="password" placeholder='Enter password'/>
        //     <input type="email" placeholder="Company email"/>
        //     <input type="email" placeholder="Personal email"/>
        //     <input type="number" placeholder='Phone number'/>
        //     <input type="text" placeholder="Job role"/>
        //     <input type="text" placeholder="Department" />
        //     <input type="text" placeholder="Project Code"/>
        //     <input type="text" placeholder="Reporting Manager"/>
        //     <input type="date" placeholder="Joining date"/>
        //     <input type="text" placeholder='Work shift'/>
        // </form>
    )

}

export default RegisterEmployee;