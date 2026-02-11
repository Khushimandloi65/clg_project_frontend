import React from "react";
import styles from './home.module.css'
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useSingleSave from "../../hooks/saveSingleDataHook";

const AddUser = () => {

    const { register, handleSubmit, watch, reset, onChange, formState: { errors } } = useForm({ mode: 'onChange', shouldUseNativeValidation: true, reValidateMode: 'onChange', });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('')
    const [companyName, setCmp] = useState('')
    const [img, setImage] = useState(null)
    const [url, setUrl] = useState('')
    const [batchYear, setBatchYear] = useState('')

    const navigate = useNavigate();

    const getSingleUser = useSingleSave();

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    }

    const isValidLinkedinUrl = (url) => {
        return /(https?:\/\/(www.)|(www.))?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/.test(url);
    };

    const onSubmit = async (data) => {

        let arr = ['google', 'microsoft', 'amazon', 'paytm', 'zomato', 'blinkit']

        if (arr.includes((data.companyName).toLowerCase())) {
            window.alert(`Bhai Tere Se vahiyaat banda mene kabhi nhi dekha jivan me  \n 
            Bhai tu  ${data.companyName} me placed he \n`)
            return
        }


        if ((data.batchYear).toString().length > 4 || !(data.batchYear.substring(0, 2) == '20')) {
            alert(`Bhai tu ${data.batchYear} ka passout he shi batch Year dal do `)
            return
        }

      
        if(!isValidLinkedinUrl(data.url)){
            alert('Bhai Linkedin Url galat he ek bar dekhiyo')
            return
        }

        const emailId = data.email ? data.email.replace(/[^\w\s]/gi, "") : "";
        if(!emailId){
            alert('Vese shi email id enter krne me kya problem he sahi mail enter kr do yrr :(')
            return
        }
        const formData = new FormData();
        formData.append('photo', img);
        formData.append('email', data.email.toLowerCase());
        formData.append('name', data.name);
        formData.append('batchYear', data.batchYear);
        formData.append('url', data.url);
        formData.append('companyName', data.companyName)

        getSingleUser(formData)
    }


    return (

        <div className={styles.mainContainer}>

            <div className={styles.main}>
                {/* {user !== null ? <p>guru</p> : */}
                <div className={styles.rectangleForm}>
                    <div className={styles.formContainer}>
                        <div className={styles.enquiryText}>
                            <h2>Add info</h2>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="Name" className={styles.inputBox} onChange={(e) => setUser(e.target.value)} placeholder="please enter your name"  {...register("name")} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email id</label>
                            <input type="text" name="email" className={styles.inputBox} onChange={(e) => setEmail(e.target.value)} placeholder="email id"  {...register("email", { required: true })} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="companyName">Current Company</label>
                            <input type="text" name="Name" className={styles.inputBox} onChange={(e) => setCmp(e.target.value)} placeholder="please enter placed company name"  {...register("companyName", { required: true })} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="url">Linkedin Url</label>
                            <input type="url" name="Linkedin url" onChange={(e) => setUrl(e.target.value)} className={styles.inputBox} placeholder="please enter linkedin url" {...register("url", { required: true })} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="batchYear">Batch</label>
                            <input type="number" name="number" onChange={(e) => setBatchYear(e.target.value)} className={styles.inputBox} placeholder="please enter passout year" {...register("batchYear", { required: true })} />
                        </div>

                        {/* {...register("batchYear",{ required: true, minLength: 6, maxLength: 6}} */}
                        <div className={styles.formGroup}>
                            <label for="img">Select Photo</label>
                            <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange} />
                        </div>


                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.requestCallButton} >
                                <button>submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default AddUser;