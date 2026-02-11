import React from "react";
import styles from "./footer.module.css";
import jitLogo from "../../assests/jitlogo.png";
import facebook from "../../assests/icons/facebook.svg";
import linkedin from "../../assests/icons/linkedinIcon.svg";
import instagram from "../../assests/icons/instagram.svg";
import youtube from "../../assests/icons/youtube.svg";

const FooterPage = () => {
  const currentYear = new Date().getFullYear();
  const iconsArr = [facebook, linkedin, instagram, youtube];
  
  return (
    <>
      <div className={styles.finalContainer}>
        <div className={styles.footerMainCtn}>
          <div className={styles.firstCtn}>
            <img className={styles.jitLogos} src={jitLogo} alt="jitLogo" />
            <h3 className={styles.head}>
              JAWAHARLAL INSTITUTE <br></br> OF TECHNOLOGY
            </h3>

            <h4 style={{ color: "#fff" }}>Follow Us</h4>
            <div className={styles.iconsCtn}>
              {iconsArr.map((x, index) => (
                <img
                  key={index + 10 - 1}
                  className={styles.icons}
                  src={x}
                  alt="icons"
                />
              ))}
            </div>
          </div>

          <div  className={styles.secondCtn}>
            <h2 style={{color:'#fff'}}>Contest</h2>
            <p className={styles.message}>Coding Competitions</p>
            <p className={styles.message}>Meeting Interaction</p>
          </div>

          {/* <div className={styles.thirdCtn}>
            <h2 style={{color:'#fff'}}>Contact Us</h2>
            <p
              style={{ color: "white", fontSize: "12px", cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/itz_gurucharan_rajput",
                  "_blank"
                )
              }
            >
              Let's Connect me on Instagram :) itz_gurucharan_rajput
            </p>
          </div> */}
        </div>
        <div className={styles.copyContainer}>
          <p className={styles.copyMsg} style={{ marginBottom: "0px" }}>
            Copyright © {currentYear} Gurucharan SDE 1 <b>Skuad Singapore</b>
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
