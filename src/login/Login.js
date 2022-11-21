import React, { useEffect, useState } from "react";
import '../login/login.css'
const Login = () => {

    const [state, setState] = useState({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
    const [errors, setErrors] = useState({
        userName: false,
      email: false,
      passwordStrength: false,
      passwordNotMatching: false,
    })
  
    const handleChange = (e) => {
      switch (e.target.name) {
        case 'userName':
          if (!e.target.value.match(/^[a-z ,.'-]+$/i)) {
            setErrors({ ...errors, userName: true })
          } else {
            setErrors({ ...errors, userName: false })
          }
          break
        case 'email':
          if (!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            setErrors({ ...errors, email: true })
          } else {
            setErrors({ ...errors, email: false })
          }
          break
        case 'password':
          if (!e.target.value.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,}$/)) {
            setErrors({ ...errors, passwordStrength: true })
          } else {
            setErrors({ ...errors, passwordStrength: false })
          }
          break
        default:
          break
      }
  
      setState({
        ...state,
        [e.target.name]: e.target.value,
      })
    } 
    useEffect(() => {
      if (state.password !== state.confirmPassword) {
        setErrors({ ...errors, passwordNotMatching: true })
      } else {
        setErrors({ ...errors, passwordNotMatching: false })
      }
    }, [state.confirmPassword, state.password])
    return(
    <>
        <div className="page">
            <form>
            <div className="page_form">
                <div >
                    <h1 className="title">
                        Please Sign in
                    </h1>
                    <div className="container">
                        <div className="">
                            <label for="fname" className="labels">
                            UserName
                            </label>
                            <input
                            value={state.userName}
                            onChange={handleChange}
                            name="userName"
                            type="text"
                            className="inputs"
                            />
                             <div className="Spacing">
                                {errors.userName && 'User name is required'}
                            </div>
                        </div>
                        <div className="">
                            <label for="email" className="labels">
                            Email
                            </label>
                            <input
                            onChange={handleChange}
                            name="email"
                            type="text"
                            className="inputs"
                            />
                            <div className="Spacing">
                                {errors.email && 'Please enter a valid email'}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="email" className="labels">
                        Password
                        </label>
                        <input
                            onChange={handleChange}
                            name="password"
                            type="password"
                            className="inputs"
                        />
                        {errors.passwordStrength && (
                            <div className="Spacing ">
                            • Contains at least one uppercase letters
                            <br />
                            • Contains at least 7 characters
                            <br />• Contains at least one digit
                            </div>
                        )}
                    </div>
                    <div>
                        <label for="email" className="labels">
                        Confirm Password
                        </label>
                        <input
                            onChange={handleChange}
                            name="confirmPassword"
                            type="password"
                            className="inputs"
                        />
                        {errors.passwordNotMatching && (
                            <div className="Spacing"> Passwords are not matching. </div>
                        )}
                    </div>
                </div>

                <div>
                    <button className="Button">
                        Login
                    </button>
                </div>
                <div className="last">
                    <p>
                    New to SalemGroup?{" "}
                    <span>
                        <a href="/#" className>
                        Sign Up
                        </a>
                    </span>
                    </p>
                </div>
            </div>
            </form>

        </div>
    </>
    )
}
export default Login;
