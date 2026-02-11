import React, { useState } from "react";
import styles from "./feedback.module.css";
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import useFeedback from "../../hooks/feedbackHook";
import useFeedbackData from "../../hooks/getFeedbackHook";

const FeedBack = () => {
  const [star, setStar] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    shouldUseNativeValidation: true,
    reValidateMode: "onChange",
  });

  const setFeedback = useFeedback();
  const getFeedback = useFeedbackData();
  const ratingChanged = (newRating) => {
    setStar(newRating);
  };

  const onSubmit = (data) => {
    if (star == 0) {
      alert("please give the rating");
      return;
    }

    const feedBackObj = {
      name: data.name,
      email: data.email,
      feedback: data.feedback,
      starCount: star,
    };

    setFeedback(feedBackObj);
    getFeedback();
  };

  return (
    <div className={styles.feedbackMain}>
      <div className={styles.headContainer}>
        <h3 className={styles.heading}>Please give rating our website 🙂</h3>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label className={styles.labelMsg} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={styles.inputBox}
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.labelMsg} htmlFor="name">
            Email
          </label>
          <input
            type="text"
            name="email"
            className={styles.inputBox}
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </div>
      </div>

      <div className={styles.ratingContainer}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.labelMsg}>FeedBack</label>
        <textarea
          ref="myArea"
          type="text"
          name="feedback"
          className={styles.inputAreaDesc}
          placeholder="please add feedback that's we optimize the website & improve the performance of website !!"
          {...register("feedback", { required: true })}
        ></textarea>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.done}>
          <button>submit feedback</button>
        </div>
      </form>
    </div>
  );
};
export default FeedBack;
