import './LoginPage.css'

const LoginForm = () => {

    return (
        <div className="login-container">
            <div className="login-panel-container">
                <div className="login-left-panel">
                    <div className="login-form">
                        <h2>Login to <span style={{ 'color': '#205295', 'font-size': '18px' }}>ARVA</span></h2>
                        <form>
                            <input type="email" placeholder="Enter organisation email" required />
                            <input type="password" placeholder="Enter password" required />
                        </form>
                        <p>Forgot password?</p>
                    </div>
                </div>
                <div className="login-right-panel">
                    {/* <div className='login-right-panel-poster'>
                        
                    </div> */}
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
        </div>
    )

}

export default LoginForm;