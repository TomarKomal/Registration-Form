import React from 'react';
import './mystyle.css';
// import  validator  from 'validator';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            Email: "",
            Mobile: "",
            Message: "",
            password: "",
            ConfirmPassword: "",
            gender :"",
            error: {}
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formValidation = (value) => {
        const { username, Email, Mobile, Message, password, ConfirmPassword ,gender } = this.state
        let isValid = true;
        const error = {};

        if (username.length < 3) {
            error.username = "Minimum 3 character  Required"
            isValid = false;
        }
        if (username.length > 10) {
            error.username = "maximum 10 character allow"
            isValid = false;
        }
        if (!username) {
            error.username = "Enter Name";
            isValid = false;
           
        }
        if (!Email) {
            isValid = false;
            error.Email = "Email is required.";
        }
        else {
            var emails = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;;
            if (!emails.test(Email)) {
                isValid = false;
                error.Email = "Invalid emails.";
            }
        }

        if (!Mobile) {
            isValid = false;
            error.Mobile = "Phone number is required.";
        }
        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(Mobile)) {
                isValid = false;
                error.Mobile = "Invalid phone number.";
            }
        }
        if (!gender) {
            error.gender = "Choose gender";
            isValid = false;
        }
        if (Message.length < 10) {
            error.Message = "Minimum 10 character  Required"
            isValid = false;
        }
        if (Message.length > 100) {
            error.Message = "maximum 100 character allow"
            isValid = false;
        }
        if (!Message) {
            error.Message = "Please, Enter some Message";
            isValid = false;
           
        }
       

        if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/)) {
            isValid = false;
            error.password = "Invalid Password";
        }
       
        if (!password) {
            isValid = false;
            error.password = " Password is required.";
        }

        if (password !== ConfirmPassword) {

            isValid = false;
            error.ConfirmPassword = "Password Not Match";
        }
        
        if (!ConfirmPassword) {
            isValid = false;
            error.ConfirmPassword = "Please enter Confirm Password";
        }

        this.setState({ error });
        return isValid;

    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if (isValid) {
            console.log("onsubmit" + this.state.username + this.state.Email + this.state.Mobile + this.state.Message + this.state.password + this.state.ConfirmPassword)
            this.setState({ username: "", Email: "", Mobile: "",gender:"", Message: "", password: "", ConfirmPassword: "", error: {} })
        }

    }
    render() {
        const { username, Email, Mobile, Message, password, ConfirmPassword, error ,gender } = this.state
        return (

            <div className='page'>
                <h1 style={{color :"brown"}}>Registration Form</h1>
                <form   onSubmit={this.onSubmit}>
                    {Object.keys(error).map((key) => {
                        return <b><div style={{ color: 'red' }} key={key}>{error[key]}</div></b>
                    })}
                   <b> <div className='color'><br/><br/>
                    Name : &nbsp;  <input  type="text" name="username" value={username} onChange={this.onChange.bind(this)}></input><br />
                Email : &nbsp; <input type="text" name="Email" value={Email} onChange={this.onChange.bind(this)}></input><br />
                    Mobile : &nbsp; <input type="number" name="Mobile" value={Mobile} onChange={this.onChange.bind(this)}></input><br />

                    Gender : &nbsp; Male<input type="radio" name="gender" value={gender} onChange={this.onChange.bind(this)}></input> Female<input type="radio" name="gender" value={gender}  onChange={this.onChange.bind(this)}></input><br />

                    Message : <input type="text" name="Message"  value={Message} onChange={this.onChange.bind(this)}></input><br />
                    Password : <input type="text" name="password" value={password} onChange={this.onChange.bind(this)}></input><br />
                    Confirm Password : <input type="text" name="ConfirmPassword" value={ConfirmPassword} onChange={this.onChange.bind(this)}></input><br />
                    I Agree Terms & Condition <input type="checkbox"></input><br></br>
                    <input type="submit" value="submit" />
            </div>
            </b>       </form>
            </div>
        )
    }

}


export default Page;