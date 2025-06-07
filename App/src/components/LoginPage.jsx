import axios from 'axios'
import React,{useState} from 'react'
import './LoginPage.css'
import Popup from "./Popup.jsx"
 
const LoginForm = () => {

    const [companyEmail, setcompanyEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const backendUrl = 'http://localhost:5000/api/auth/signin';

        try{
            const response = await axios.post(backendUrl,{companyEmail,password});
            console.log(response)
            setResponseMessage(`Success: ${response.data.msg}`);
            setShowPopup(true);
            console.log(response.data)
        }catch(error){
            if(error.response){
                setResponseMessage(`${error.response.data.msg || 'Someting went wrong!'}`);
            }else if(error.request){
                setResponseMessage('Error: No response from server. Please check your network connection or backend server status.');
            }else{
                setResponseMessage(`Error: ${error.message}`)
            }
            setShowPopup(true);
            console.log(`Error: ${error}`);
        }  
    };

    const closePopup =()=>{
        setShowPopup(false);
        setResponseMessage('');
    }

    return (
        <div className="login-container">
            <div className="login-panel-container">
                <div className="login-left-panel">
                    <div className="login-form">
                        <h2>Login to <span style={{ 'color': '#205295', 'fontSize': '18px' }}>ARVA</span></h2>
                        <form>
                            <input type="email" value={companyEmail} onChange={(e)=>setcompanyEmail(e.target.value)} placeholder="Enter organisation companyEmail" required />
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required />
                        </form>
                        <p>Forgot password?</p>
                        <button onClick={handleSubmit}>But</button>
                    </div>
                </div>
                <div className="login-right-panel">
                    <div className="floating-panel">
                        <h2>What our users say?</h2>
                        <div>
                            <p>"Meri zindagi whichon bahar aagi aina de kr k. "</p>
                            <br />
                            <p>Laddi Pra</p>
                            <p>Team lead at Google</p>
                        </div>
                        <div className='floating-panel-buttons'>
                            <button>back</button>
                            <button>next</button>
                        </div>
                    </div>

                    <div className='floating-message'>
                        
                    </div>
                </div>
            </div>
            {showPopup && (
                <Popup message={responseMessage} onClose={closePopup}/>
            )}
        </div>
    )

}

export default LoginForm;