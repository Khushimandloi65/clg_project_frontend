import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from './profilepage.module.css'

const Profile = () => {

    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();

    let data = [{
        name: 'Guru',
        email: 'gurucharan.chouhan@zunpulse.com',
        companyName: 'Zunpulse',
        batchYear: 2023,
        url: 'https://www.zunpulse.com/'
    }]

    const handleEdit = () => {
        setEdit(true);
    }
    const handleCancel = () => {
        setEdit(false);
    }
    const handleSave = () => {
        alert('Data Successfully Updated')
        setEdit(false);
        navigate('/')
    }
    return (
        <div className={styles.mainContainer}>
            {data && data.map((val, index) => (
                <div className={styles.firstPage} key={index}>
                    <h2>Name : {val.name}</h2>
                    <p>EmailId: {val.email}</p>
                    <p>Company Name : {val.companyName}</p>
                    <p>Batch Year: {val.batchYear}</p>

                    <div className={styles.editContainer}>
                        {!edit && <button onClick={() => handleEdit()}>Edit</button>}
                        {edit &&
                            <div className={styles.cancelContainer}>
                                <button onClick={() => handleCancel()}>cancel</button>
                                <button onClick={() => handleSave()}>Save</button>
                            </div>}
                    </div>
                </div>
            ))
            }
            <h2></h2>
        </div >
    )
}

export default Profile;