import React from "react";
import styles from "./feedback.module.css";
import useFeedbackData from "../../hooks/getFeedbackHook";
import { useEffect } from "react";
import featureSelector from "../../hooks/featureSelectors";
import { DynamicStar } from "react-dynamic-star";
import avtar from "../../assests/icons/userLogo.png";
import shortid from "shortid";

const FeedbackRating = () => {
  const getAllFeedbackData = useFeedbackData();

  useEffect(() => {
    getAllFeedbackData();
  }, []);

  const feedbackData = featureSelector.useAllFeedbackData();

  return (
    <div className={styles.ratingMain}>
      <h2 className={styles.ratingOur}>Rating of our website</h2>

      <div className={styles.ratingSecond}>
        {feedbackData &&
          feedbackData.map((item, index) => (
            <div
              className={styles.singleRatingContainer}
              key={shortid.generate()}
            >
              <div className={styles.singleRating}>
                <DynamicStar
                  rating={parseFloat(item.starCount)}
                  totalStars={5}
                  sharpness={2}
                  width={24}
                  height={24}
                  outlined={false}
                  outlinedColor={""}
                  fullStarColor={"#FFBC00"}
                  emptyStarColor={"#2c223a"}
                />
              </div>

              <div className={styles.reviewMessage}>
                <p className={styles.review}>
                  {item.feedback.length > 150
                    ? item.feedback.substring(0, 150)
                    : item.feedback}
                </p>
              </div>

              <div className={styles.userName}>
                <img className={styles.avtarLogo} src={avtar} alt="avtar" />
                <p className={styles.userNameMsg}>
                  <b style={{ marginTop: "4px" }}>{item.name}</b>
                </p>
              </div>

              <div className={styles.feedbackDate}>
                <p className={styles.feedDate}>
                  {new Date(item.feedbackDate).toDateString()}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeedbackRating;
