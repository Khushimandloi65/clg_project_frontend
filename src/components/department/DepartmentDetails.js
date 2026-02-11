import React, { useEffect } from "react";
import styles from "./depart.module.css";
import { useState } from "react";
import DetailsProfile from "./DetailsProfile";
import Faculty from "./Faculty";
import Laboratories from "./Laboratories";
import { useParams } from "react-router-dom";
import { allDepData } from "../../routes/constant";

const DepartmentDetails = () => {
  const { branch } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [depData, setDepartmentData] = useState([]);
  const handleClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setDepartmentData(allDepData[branch]);
  }, [branch]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.listctn}>
        <ul>
          {depData &&
            depData.map((item, index) => (
              <li key={item.id} onClick={() => handleClick(item)}>
                {item.profile}
              </li>
            ))}
        </ul>
      </div>

      {selectedItem && selectedItem.profile == "Department Profile" && (
        <div className={styles.leftContainer}>
          <DetailsProfile branch={branch} />
        </div>
      )}

      {selectedItem && selectedItem.profile == "Faculty" && (
        <div className={styles.leftContainer}>
          <Faculty />
        </div>
      )}

      {selectedItem && selectedItem.profile == "Laboratories" && (
        <div className={styles.leftContainer}>
          <Laboratories branch={branch} />
        </div>
      )}
    </div>
  );
};

export default DepartmentDetails;
