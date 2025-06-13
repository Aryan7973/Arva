import { useEffect, useRef, useState } from 'react';
import './RegisterEmployee.css'
import axios from 'axios';
import Popup from '../../components/common/Popup/Popup.jsx';

const RegisterEmployee = ()=>{

    // for scrolling to the section where user need to fill details
    const orgRef = useRef(null);
    const personalRef = useRef(null);
    const projectRef = useRef(null);
    
    const scrollToSection = (ref)=>{
        ref.current?.scrollIntoView({behavior : 'smooth',block:"center"});
    }

    const [responseMessage, setResponseMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const [employeeData, setEmployeeData] = useState({
        employeeId: '',
        firstName: '',
        lastName: '',
        jobRole: '',
        dateOfBirth: '',
        reportingManager: '',
        department: '',
        projectCode: '',
        joiningDate: '',
        companyEmail: '',
        personalEmail: '',
        gender: '',
        phoneNumber: '',
        password: '',
        workShift: '',
    });

    const closePopup = () =>{
        setShowPopup(false);
        setResponseMessage('');
    }

    useEffect(()=>{
            let timer;
            if(showPopup){
                timer = setTimeout(()=>{
                    setShowPopup(false)
                    setResponseMessage('')
                },5000)
            }
            return ()=>{
                clearTimeout(timer)
            }
        },[showPopup])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prev) => ({ ...prev, [name]: value }));
    };    

    const handleRegister = async(e)=>{
        e.preventDefault();
        const Url = 'https://super-duper-acorn-9p6xqgr6vvxc99gg-5000.app.github.dev/api/employee/register';

        const requiredFields = [
            "employeeId", , "joiningDate","companyEmail", "password", "firstName", "lastName", "personalEmail", "phoneNumber", "dateOfBirth", "gender",
            , "department", "projectCode","jobRole", "reportingManager", "workShift"
            
        ]

        // checkes and alerts whether everything is filled or not.
        const notFilled = requiredFields.find(field  => !employeeData[field]);
        if(notFilled){
            setResponseMessage(`Please fill in  : ${notFilled}`);
            setShowPopup(true);
            return;
        }


        try{
            const response = await axios.post(
                Url,
                employeeData,
                {withCredentials:true}
            )
            console.log(response);
            setResponseMessage(`${response.data}`);
            setShowPopup(true);
            console.log(response.data);

        }catch(error){
            console.log(error);
            if(error.response){
                setResponseMessage(`${error.response.data.message || 'Someting went wrong!'}`);
            }else if(error.request){
                setResponseMessage('Error: No response from server. Please check your network connection or backend server status.');
            }else{
                setResponseMessage(`Error: ${error.message}`)
            }
            setShowPopup(true);
            console.log(`Error: ${error}`);
        }

    }

    

    return(
        <div className="registeration-container">
            <div className="left-section">
                <ul>
                    <li onClick={()=>scrollToSection(orgRef)} >-- Organisation Details</li>
                    <li onClick={()=>scrollToSection(personalRef)}>-- Personal Information</li>
                    <li onClick={()=>scrollToSection(projectRef)}>-- Project Details</li>
                </ul>
            </div>
            <div className="right-section" >
                <div className='form-container'>
                    <span className='new-emp-badge'>Register new employee</span>
                    <section ref={orgRef}>
                        <h3>Organisation Details</h3>
                        <hr/>
                        <div className='form-elements'>
                            <div className="input-container">
                            <label>Employee Id</label>
                            <input type="text" name='employeeId' value={employeeData.employeeId} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Joining Date</label>
                            <input type="date" name='joiningDate' value={employeeData.joiningDate} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Organisation Email</label>
                            <input type="email" name='companyEmail' value={employeeData.companyEmail} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Email Password</label>
                            <input type="password" name='password' value={employeeData.password} onChange={handleChange}required/>
                            </div>
                        </div>
                    </section>
                    <section ref={personalRef}>
                        <h3>Personal Information</h3>
                        <hr/>
                        <div className='form-elements'>
                            <div className="input-container">
                            <label>First Name</label>
                            <input type="text" name='firstName' value={employeeData.firstName} onChange={handleChange} required/>
                            </div>
                            <div className="input-container">
                            <label>Last Name</label>
                            <input type="text" name='lastName' value={employeeData.lastName} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Personal Email</label>
                            <input type="email" name='personalEmail' value={employeeData.personalEmail} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Phone Number</label>
                            <input type="tel" name='phoneNumber' value={employeeData.phoneNumber} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Date of Birth</label>
                            <input type="date" name='dateOfBirth' value={employeeData.dateOfBirth} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Gender</label>
                            <select name="gender" onChange={handleChange}>
                                <option value={employeeData.gender}></option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option vlaue="O">Other</option>
                            </select>
                            {/* <input type="text" name='gender' value={employeeData.gender} onChange={handleChange} required/> */}
                            </div>
                        </div>
                    </section>
       
                    <section ref={projectRef}>
                        <h3>Project Details</h3>
                        <hr/>
                        <div className='form-elements'>
                            <div className="input-container">
                            <label>Department</label>
                            <input type="text" name='department' value={employeeData.department} onChange={handleChange} required/>
                            </div>
                            <div className="input-container">
                            <label>Project Code</label>
                            <input type="text" name='projectCode' value={employeeData.projectCode} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Job Role</label>
                            <input type="text" name='jobRole' value={employeeData.jobRole} onChange={handleChange}required/>
                            </div>
                            <div className="input-container">
                            <label>Reporting Manager</label>
                            <input type="text" name='reportingManager' value={employeeData.reportingManager} onChange={handleChange} required/>
                            </div>
                            <div className="input-container">
                            <label>Work Shift</label>
                            <input type="text" name='workShift' value={employeeData.workShift} onChange={handleChange} required/>
                            </div>  
                        </div>
                    </section>
                    <button className='submit-btn' onClick={handleRegister}>Submit</button>
                    <div className="margin-box"></div>
                </div>
            </div>
             {showPopup && (
                <Popup message={responseMessage} onClose={closePopup}/>
            )}
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