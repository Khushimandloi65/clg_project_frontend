import React, {useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../config";
import styles from './home.module.css'
import { HOME_PAGE, SIGN_UP_PAGE } from "../../routes/constant";

const Login = () => {

    const { register, handleSubmit, watch, reset, onChange, formState: { errors } } = useForm({ mode: 'onChange', shouldUseNativeValidation: true, reValidateMode: 'onChange', });
    const navigate = useNavigate();

    const handleForgot = () => {
          navigate('/forgotPassword')
    }
    const handleSignup = () => {
        navigate('/signup')
  }

    const onSubmit = async (data) => {

        console.log("dataLogin", data)
        try {
            firebaseConfig.auth().signInWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    const LoggedUser = userCredential.user;
                    let token=LoggedUser?.multiFactor?.user?.accessToken
                    token ? navigate('/home') :navigate('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.error(errorCode)
                    switch (error.code) {

                        case "auth/user-not-found":
                            alert('please Signup first \Thanks')
                            navigate(SIGN_UP_PAGE)
                            break;

                        case "auth/wrong-password":
                            alert('wrong password please enter correct password ')
                            break;

                        case "auth/too-many-requests":

                            alert('too many attempt :( please wait')
                            // setTimeout(() => {
                            //     setLoading(false)
                            //   }, 1000);
                            break;

                        default:
                            navigate(HOME_PAGE)
                            break;
                    }
                    const errorMessage = error.message;
                });


        } catch (e) {

        }
    }

    return (
                <div className={styles.mainContainer}>

                    <div className={styles.main}>
                        <div className={styles.rectangleForm}>
                            <div className={styles.formContainer}>
                                <div className={styles.enquiryText}>
                                    <h2>Login Page</h2>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email id</label>
                                    <input type="text" name="email" className={styles.inputBox} placeholder="email id"  {...register("email",{required:true})} />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="pincode" className={styles.inputBox} placeholder="please enter password" {...register("password",{required:true})} />
                                </div>

                                <div className={styles.forgotMsgContainer}>
                                <p className={styles.forgotMSG} onClick={() => handleSignup()}>don't have account</p>
                                <p className={styles.forgotMSG} onClick={() => handleForgot()}>forgot password ?</p>
                                </div>

                                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                    <div className={styles.requestCallButton} >
                                        <button>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
    )
}

export default Login;