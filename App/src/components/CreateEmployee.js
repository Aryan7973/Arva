
const CreateEmployee = ()=>{

    return(
        <form>
            <h3>Register new employee</h3>
            <input type="text" placeholder='Firstname' required/>
            <input type="text" placeholder='Lastname' required/>
            <input type="text" placeholder="Employee ID"/>
            <input type="date" placeholder='Date of birth'/>
            <input type="text" placeholder='Gender'/>
            <input type="password" placeholder='Enter password'/>
            <input type="email" placeholder="Company email"/>
            <input type="email" placeholder="Personal email"/>
            <input type="number" placeholder='Phone number'/>
            <input type="text" placeholder="Job role"/>
            <input type="text" placeholder="Department" />
            <input type="text" placeholder="Project Code"/>
            <input type="text" placeholder="Reporting Manager"/>
            <input type="date" placeholder="Joining date"/>
            <input type="text" placeholder='Work shift'/>
        </form>
    )

}

export default CreateEmployee;