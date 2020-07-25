import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/");
        }

        if (error === "Invalid Credentials") {
            setAlert(error, "danger");
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { email, password } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setAlert("Please fill in all fields", "danger");
        } else {
            login({
                email,
                password,
            });
        }
    };

    return (
        <div className=''>
            <div className='form-container form-card'>
                <h1>
                   KeepMe <span className='text-primary'>Login</span>
                </h1>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                            minLength='6'
                        />
                    </div>

                    <input
                        type='submit'
                        value='Login'
                        className='btn btn-primary btn-block btn-rounded login-btn'
                    />
                    <small>
                        Don't have an account? <a href='/register'>Sign up</a>
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;
