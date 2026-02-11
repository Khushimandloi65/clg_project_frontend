import React from "react";
import styles from "./community.module.css";

const Community = () => {
  const whatsAppUrl = "https://chat.whatsapp.com/Ec4uZ3s9p6q2WkNSrUsg3n";

  const handleJoinCommunity = () => {
    window.open(whatsAppUrl, "_blank");
    return;
  };

  return (
    <div className={styles.mainCommunity}>
      <div  className={styles.communityCtn}>
        <div className={styles.firstCtn}>
          <h2 className={styles.cmtMsg}>
            Learn and Growth and updates with a <br></br> community
            <span>
              <b style={{ color: "#f1f1f1" }}> of learners </b>just like
            </span>
            <br></br> you
          </h2>
        </div>

        <div className={styles.joinBtn}>
          <p className={styles.joinMsg} onClick={() => handleJoinCommunity()}>
            Join our community
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
