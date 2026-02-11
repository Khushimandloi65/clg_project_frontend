import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCareerData from "../../hooks/careerDataHook";
import featureSelectors from "../../hooks/featureSelectors";
import useGetCareer from "../../hooks/getCareerDataHook";
import styles from "./career.module.css";

const CareerHome = () => {
  const getCareerData = useGetCareer();
  useEffect(() => {
    getCareerData();
  }, []);

  const handleApply = (url) => {
    window.open(url, "_blank");
  };

  const arr = featureSelectors.useJobData() || [];

  return (
    <div className={styles.careerCtn}>
      <div className={styles.headMsg}>
        <h2>These Companies Are hiring </h2>
      </div>

      <div className={styles.crrCtn}>
        {arr &&
          arr.map((x, index) => (
            <>
              <div className={styles.singleCtn} key={index.toString()}>
                <h2>{x.companyName}</h2>
                <div className={styles.applyCtn}>
                  <p
                    className={styles.apply}
                    onClick={() => handleApply(x.jobUrl)}
                  >
                    Apply
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default CareerHome;
