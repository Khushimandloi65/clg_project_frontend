import React from "react";
import styles from "./laboratories.module.css";
// import styles from './detailProfile.module.css'
import gurucharan from "../../assests/single/gurucharan.png";
import call from "../../assests/icons/call.png";
import mail from "../../assests/icons/mail.png";
import depart from "../../assests/icons/depart.png";
import man from "../../assests/icons/man.png";
import job from "../../assests/icons/designation.png";

const Faculty = () => {
  let tempData = [
    {
      img: gurucharan,
      name: "Gurucharan Rajput",
      designation: "Professor",
      dep: "Information Technology",
      email: "gurucharanchouhan17@gmail.com",
      phone: 7970279927,
    },
    {
      img: gurucharan,
      name: "Akshit Verma",
      designation: "Professor",
      dep: "Information Technology",
      email: "gurucharanchouhan17@gmail.com",
      phone: 7970277787,
    },
  ];

  return (
    <>
      <p>Currently Don't Have Faculty Data </p>
    </>
    // <div className={styles.facCtn}>
    //     <p className={styles.prf}>Faculty</p>

    //     <div className={styles.secondCtn}>

    //         {tempData.map((item, index) => (
    //             <div className={styles.rgtCtn} key={index}>
    //                 <div className={styles.leftImg}>
    //                     <img className={styles.pic} src={item.img} alt="guru" />
    //                 </div>

    //                 <div className={styles.rightCtn}>

    //                     <div className={styles.iconCtn}>
    //                         <img className={styles.icon} src={man} alt="call" />
    //                         <p className={styles.pCtn}>{item.name}</p>
    //                     </div>

    //                     <div className={styles.iconCtn}>
    //                         <img className={styles.icon} src={job} alt="call" />
    //                         <p style={{fontWeight:'bold'}} className={styles.pCtn}>{item.designation}</p>
    //                     </div>

    //                     <div className={styles.iconCtn}>
    //                         <img className={styles.icon} src={call} alt="call" />
    //                         <p className={styles.pCtn}>{item.phone}</p>
    //                     </div>

    //                     <div className={styles.iconCtn}>
    //                         <img className={styles.icon} src={depart} alt="call" />
    //                         <p className={styles.pCtn}>{item.dep}</p>
    //                     </div>

    //                     <div className={styles.iconCtn}>
    //                         <img className={styles.icon} src={mail} alt="call" />
    //                         <p className={styles.pCtn}>{item.email}</p>
    //                     </div>

    //                 </div>
    //             </div>
    //         ))}

    //     </div>
    // </div >
  );
};

export default Faculty;
