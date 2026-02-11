import React from "react";
import styles from "./certificate.module.css";
import certificate from "../../assests/certificate.jpg";
import { useForm } from "react-hook-form";

const CertificateGenerate = () => {
    
  const { register, onChange, handleSubmit } = useForm({
    mode: "onChange",
    shouldUseNativeValidation: true,
    reValidateMode: "onChange",
  });

  const infoData = [
    {
      heading: "Certificate",
      appreciation: "OF Appreciation",
      name: "John Maxwell",
      complement:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: 1,
    },
  ];

  return (
    <div className={styles.first}>
      <div className={styles.firstInputContainer}></div>

      {infoData.map((item, index) => (
        <div className={styles.firstBannerContainer} key={item.id}>
          <div className={styles.firstContainer}>
            <img
              className={styles.backgroundImg}
              src={certificate}
              alt="certificate"
            />
          </div>

          <div className={styles.secondContainer} key={item.id}>
            <h2 className={styles.heading}>{item.heading}</h2>
            <p className={styles.text}>{item.appreciation}</p>
            <p className={styles.awardMessage}>
              THIS CERTIFICATE IS AWAREDED TO THE{" "}
            </p>
            <h2 className={styles.userName}>{item.name}</h2>
            <p className={styles.complement}>{item.complement}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CertificateGenerate;
