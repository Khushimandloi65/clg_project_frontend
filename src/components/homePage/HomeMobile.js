import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import arun from '../../assests/arunji.jpg';
import atul from '../../assests/atulji.jpg';
import firstBanner from '../../assests/banners/firstBanner.jpg';
import secondBanner from '../../assests/banners/secondBanner.jpg';
import dean from '../../assests/dean.jpg';
import csimg from '../../assests/department/cs.jpg';
import itimg from '../../assests/department/it.jpeg';
import linkedinIcon from '../../assests/icons/linkedin.png';
import subhash from '../../assests/Subhashji.jpg';
import featureSelectors from "../../hooks/featureSelectors";
import styles from './home.module.css';
import useSingleUserDetails from "../../hooks/SingleUserHook";
import civil from '../../assests/department/civil.jpeg'
import mech from '../../assests/department/mech.jpg'
import ele from '../../assests/department/ele.jpg'
import elec from '../../assests/department/elec.png'

const HomeMobile = () => {

    const navigate = useNavigate();

    const getSingleUser = useSingleUserDetails();

    useEffect(() => {
        getSingleUser()
    }, [])

    const addInfo = (msg) => {
        if (msg === 'info') {
            navigate('/adduser')
        }
        if (msg === 'prof') {
            navigate('/profile')
        }
    }

    const handleDepart = () => {
        navigate('/department')
    }

    let teamData = [
        {
            imgDesktop: subhash,
            name: 'LATE Shri Subhash Ji Yadav',
            designation: 'Founder'
        },
        {
            imgDesktop: arun,
            name: 'Mr.Shri Arun Ji Yadav',
            designation: 'Chairman'
        },
        {
            imgDesktop: atul,
            name: 'Dr.Atul Upadhyay',
            designation: 'Principal'
        },
        {
            imgDesktop: dean,
            name: 'Dr. Sunil Sugandhi',
            designation: 'Dean Academic'
        }
    ]
    let placedData = featureSelectors.useSingleData()

    const images = [
        { url: firstBanner },
        { url: secondBanner }
    ]

    let imgDep = [
        {
            img: itimg,
            heading: 'Information Technology'
        },
        {
            img: csimg,
            heading: 'Computer Science'
        },
        {
            img: civil,
            heading: 'Civil Engg.'
        },
        {
            img: ele,
            heading: 'Electronics Engg.'
        },
        {
            img: mech,
            heading: 'Mechanical Engg.'
        },
        {
            img: elec,
            heading: 'Electrical Engg.'
        }
    ]

    let backColor = ['#FFA07A', '#E9967A', '#FA8072', '#F08080', '#CD5C5C', '#DC143C', '#B22222', '#8B0000', '#FFB6C1', '#FFA07A', '	#FF7F50', '#778899', '#FF8C00', '#2F4F4F', '#FF6347', '#A52A2A', '#FF4500', '#00FF7F', '#00FA9A', '#CD853F', '#3CB371', '#2E8B57', '#D2691E', '#66CDAA', '#8FBC8B', '#20B2AA', '#008B8B', '#A0522D', '#A9A9A9', '#008080', '#F4A460', '#40E0D0', '#00CED1', '#800000', '#808080', '#FFA07A', '#E9967A', '#FA8072', '#F08080', '#CD5C5C', '#DC143C', '#B22222', '#8B0000', '#FFB6C1', '#FFA07A', '	#FF7F50', '#778899', '#FF8C00', '#2F4F4F', '#FF6347', '#D2691E', '#66CDAA', '#8FBC8B', '#20B2AA', '#008B8B', '#A0522D', '#A9A9A9', '#008080', '#F4A460', '#40E0D0', '#00CED1', '#800000', '#808080', '#FFA07A', '#A52A2A', '#FF4500', '#00FF7F', '#00FA9A', '#CD853F', '#3CB371', '#2E8B57', '#D2691E', '#66CDAA', '#8FBC8B', '#20B2AA', '#008B8B', '#A0522D', '#A9A9A9', '#008080', '#F4A460', '#40E0D0', '#00CED1', '#800000', '#808080', '#FFA07A', '#E9967A', '#FA8072', '#F08080', '#CD5C5C', '#DC143C', '#B22222', '#8B0000', '#FFB6C1', '#FFA07A', '	#FF7F50', '#778899', '#FF8C00', '#2F4F4F', '#FF6347', '#D2691E']

    return (

        <div className={styles.homeContainer}>

            <div className={styles.firstContainer}>
                <p className={styles.addInfo} onClick={() => addInfo('info')}>Add Info</p>
                <p onClick={() => addInfo('prof')}>Profile</p>
            </div>

            <div className={styles.bannerContainer}>
                <Carousel autoPlay={true}>
                    {images.map((x, index) => (
                        <div className={styles.bannerFirst} key={index}>
                            <img className={styles.imgg} src={x.url} />
                        </div>))}
                </Carousel>
            </div>

            <div className={styles.secondContainer}>
                {teamData.map((ans, index) => (
                    <div className={styles.teamDataContainer}>
                        <img src={ans.imgDesktop} alt="guru" />
                        <p>{ans.name}</p>
                        <p className={styles.des}>{ans.designation}</p>
                    </div>
                ))}
            </div>

            <div className={styles.batchProfile}>
                <div className={styles.batch}>
                    {placedData && placedData.length ? <h3>Batch :) 2023 </h3> : <></>}
                </div>

                <div className={styles.thirdContainer}>
                    {placedData.map((place, index) => (
                        // <div style={{backgroundColor:backColor[Math.floor(Math.random() * 100)],border: `1px solid #${backColor[Math.floor(Math.random() * 100)]}`}} className={styles.singleContainer}>
                        <div className={styles.singleContainer}>
                            <div className={styles.imgdiv}>
                                {placedData[index].imageUrl && <img className={styles.userImg} src={placedData[index].imageUrl} alt="singleImg" />}
                            </div>
                            <p className={styles.name} style={{ fontWeight: 'bold' }}>{placedData[index].name}</p>
                            <p className={styles.name}>Placed at :<b>{placedData[index].companyName}</b></p>
                            <p className={styles.name}>{placedData[index].batchYear}</p>

                            <a rel="noopener" target="_blank" title="linkedinId" href={place.linkedinUrl}>
                                <img className={styles.icon} src={linkedinIcon} alt="linkedin" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>


            <div className={styles.dpHeader}>
                <h2 className={styles.named}>Our Departments</h2>
            </div>

            <div className={styles.departContainer} >

                {imgDep.map((item, index) => (
                    <div className={styles.depContainer} onClick={() => handleDepart()}>
                        <img src={item.img} alt="guru" />
                        <p className={styles.heading}>{item.heading}</p>
                    </div>))}
            </div>

        </div >
    )
}

export default HomeMobile;