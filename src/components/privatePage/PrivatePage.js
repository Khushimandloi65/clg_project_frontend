import React, { useEffect } from "react"
import featureSelectors from "../../hooks/featureSelectors"
import useGetPrivateData from "../../hooks/getPrivateDataHook"
import styles from './page.module.css'

const PrivatePage = () => {

    let columnArr = ['sr No.', 'Date', 'Name', 'Company Name', 'Email', 'BatchYear']
    const getPrivateData = useGetPrivateData();  // getPrivateData is function by using this function we will getting the data from the backend 

    useEffect(() => {
        getPrivateData();
    }, [])

    let count = 1;
    const dataArr = featureSelectors.useAllPrivateData();

    return (

        <div className={styles.mainContainer}>

            <p>Submitted Data</p>

            <table>
                <tr>
                    {columnArr && columnArr.map((item, index) => (
                        < th >{item}</th>
                    ))
                    }
                </tr>

                {dataArr.map((item, index) => (
                    <tr>
                        <>
                            <td>{count++}</td>
                            <td>{(item.updated).substring(0, (item.updated).indexOf('T'))}</td>
                            <td>{item.name}</td>
                            <td>{item.companyName}</td>
                            <td>{item.email}</td>
                            <td>{item.batchYear}</td>
                            <br></br>
                        </>
                    </tr>
                ))}
            </table>

        </div >
    )
}

export default PrivatePage;