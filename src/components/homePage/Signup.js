import { useForm } from "react-hook-form";
import styles from "./home.module.css";
import firebaseConfig from "../../config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin, setToken } from "../../reducers/authentication";
import { LOGIN_PAGE } from "../../routes/constant";

const Signup = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    onChange,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    shouldUseNativeValidation: true,
    reValidateMode: "onChange",
  });

  const handleLogin = () => {
    navigate(LOGIN_PAGE)
  }

  const onSubmit = async (data) => {
    try {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((u) => {
          console.log('userSucc', u)
          console.log("SignupSuccess")
          const token = u?.user?.multiFactor?.user?.accessToken

          if (token) {
            // naviagte('/home')
            dispatch(setToken(token))
            dispatch(setLogin(true))
            return
          }
        })

        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              console.log(`Email address ${data.email} already in use.`);
              navigate(LOGIN_PAGE)
              break;
            case "auth/invalid-email":
              console.log(`Email address ${data.email} is invalid.`);
              break;
            case "auth/operation-not-allowed":
              console.log(`Error during sign up.`);
              break;
            case "auth/weak-password":
              console.log(
                "Password is not strong enough. Add additional characters including special characters and numbers."
              );
              break;
            default:
              console.log(error.message);
              break;
          }
        });
    } catch (e) {
      console.log("eAuth", e);
    }

  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.rectangleForm}>
          <div className={styles.formContainer}>
            <div className={styles.enquiryText}>
              <h2 style={{ fontSize: '20px' }}>Create New Account</h2>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="Namw"
                className={styles.inputBox}
                placeholder="please enter your name"
                {...register("name")}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email id</label>
              <input
                type="text"
                name="email"
                className={styles.inputBox}
                placeholder="email id"
                {...register("email", { required: true })}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="pincode"
                className={styles.inputBox}
                placeholder="please enter password"
                {...register("password", { required: true })}
              />
            </div>

            <div className={styles.forgotMsgContainer}>
              <p className={styles.forgotMSG} onClick={() => handleLogin()}>Have an account ?</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.requestCallButton}>
                <button>Sign-up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;