
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import firebaseConfig from '../../config';
import styles from './home.module.css'
import { LOGIN_PAGE } from '../../routes/constant';

const ForgetPassword = () => {

    const { register, handleSubmit, watch, reset, onChange, formState: { errors } } = useForm({ mode: 'onChange', shouldUseNativeValidation: true, reValidateMode: 'onChange', });
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await firebaseConfig.auth().sendPasswordResetEmail(data.email);
            alert('please login with new password')
            navigate(LOGIN_PAGE)
        } catch (error) {
            console.log("error", error)
        }
    }

    return (

        <div className={styles.main}>
            <div className={styles.rectangleForm}>
                <div className={styles.formContainer}>
                    <div className={styles.enquiryText}>
                        <h2 style={{ color: '#000', fontSize: '18px' }}>Reset Your Password</h2>
                    </div>

                    <div className={styles.formGroup}>
                        <label style={{ color: '#000' }} htmlFor="email">Email</label>
                        <input type="text" name="email" className={styles.inputBox} placeholder="email id"  {...register("email")} />
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.requestCallButton} >
                            <button style={{ backgroundColor: '#ff9100', fontWeight: 'bold', color: '#fff' }}>send reset link</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default ForgetPassword;