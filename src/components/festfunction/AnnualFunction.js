import React from "react";
import styles from "./annualfunction.module.css";
import shortid from "shortid";
import p1 from "../../assests/department/guru.webp";
import p2 from "../../assests/department/devyani.webp";
import p3 from "../../assests/department/prashant.webp";

const AnnualFunction = () => {
  const videoLinks = [
    {
      videoUrl: "https://youtu.be/CTHQSyAV1Hs",
      photo: p1,
    },
    {
      videoUrl: "https://youtu.be/dhodyBrYzvo",
      photo: p2,
    },
  ];

  const handleRediect = (url) => {
    window.open(url);
    return;
  };

  return (
    <div className={styles.annualMain}>
      <h2 className={styles.festHeading}>
        Interview Experience shared By JITian's{" "}
      </h2>

      <div className={styles.videoCtn}>
        {videoLinks.map((content, index) => (
          <img
            style={{ border: "1px solid #e91e62" }}
            key={shortid.generate()}
            onClick={() => handleRediect(content.videoUrl)}
            className={styles.videoImg}
            src={content.photo}
            alt="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default AnnualFunction;
