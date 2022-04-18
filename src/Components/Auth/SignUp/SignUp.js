import React, {
    useEffect,
    useState
} from "react";
import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword
} from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Pages/Shared/Loading/Loading";
import {
    ToastContainer,
    toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    BsEyeFill
} from 'react-icons/bs'


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true
        });
    useEffect(() => {
        if (error) {
            toast(error?.message)
        }
    }, [error])
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <p className="text-danger" > Error: {
            error?.message
        } </p>;
    }

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleName = (e) => {
        setUserInfo({
            ...userInfo,
            name: e.target.value
        });
    };
    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({
                ...userInfo,
                email: e.target.value
            });
            setErrors({
                ...errors,
                email: ""
            });
        } else {
            setErrors({
                ...errors,
                email: "Invalid Email"
            });
        }
    };

    const handlePassword = (e) => {
        const passwordRegex = /.{6}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({
                ...userInfo,
                password: e.target.value
            });
            setErrors({
                ...errors,
                password: ""
            });
        } else {
            setErrors({
                ...errors,
                password: "Password Must Be  contain 6 characters",
            });
        }
    };
    const handleConfirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({
                ...userInfo,
                confirmPassword: e.target.value
            })
            setErrors({
                ...errors,
                password: ""
            })
        } else {
            setErrors({
                ...errors,
                password: "Password Don't Match"
            })
            setUserInfo({
                ...userInfo,
                confirmPassword: ""
            })
        }
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);

    };
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])

    return (<div>
        <form onSubmit={
            handleCreateAccount
        } >
            <div className="login" >
                <h1 className="title" > Create Account </h1> <div className="container" >
                    <div className="contact-form row" >
                        < div className="form-field col-lg-6" >
                            <input required onChange={
                                handleName
                            }
                                className="input-text"
                                type="text"
                                name="name"
                                placeholder="Enter Your name" />

                        </div> <div className="form-field col-lg-6" >
                            <input required onChange={
                                handleEmail
                            }
                                className="input-text"
                                type="email"
                                name="email"
                                placeholder="Enter Your Email" /> {
                                errors?.email && (<p className="text-danger my-3 fw-bold" > {
                                    errors?.email
                                } </p>
                                )
                            } </div> <  div className="form-field col-lg-6" >
                            < input required onChange={
                                handlePassword
                            }
                                className="input-text"
                                type={
                                    showPassword ? "text" : "password"
                                }
                                name="password"
                                placeholder="Password" /> {
                                errors?.password && (< p className="text-danger my-3 fw-bold" > {
                                    errors?.password
                                } </p>
                                )
                            }

                        </div> < div className="form-field col-lg-6" >
                            < input onChange={
                                handleConfirmPassword
                            }
                                required className="input-text"
                                type={
                                    showPassword ? "text" : "password"
                                }
                                name="confirmPassword"
                                placeholder="Confirm Password" /> {
                                errors?.confirmPassword && (<p className="text-danger my-3 fw-bold" > {
                                    errors?.confirmPassword
                                } </p>
                                )
                            }

                        </div> <p className="" > {< BsEyeFill size={
                            20
                        }
                            onClick={
                                () => setShowPassword(!showPassword)
                            }
                        />} show Password</p >

                        < div className="form-field col-lg-12" >




                            < p className="my-3" >
                                Already Have An Account <Link to="/login" > Login </Link> </p> <div className="d-flex align-items-center" >
                                <input
                                    className="login-btn"
                                    type="submit"
                                    name=""
                                    value="Sign Up" />
                                < SocialLogin />
                            </div> < ToastContainer />
                        </div> </div> </div> </div> </form> </div>
    );
};

export default SignUp;