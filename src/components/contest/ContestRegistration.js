import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useContestRegistrationData from "../../hooks/contestRegistrationHook";
import styles from "../career/career.module.css";

const ContestRegistration = () => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    shouldUseNativeValidation: true,
    reValidateMode: "onChange",
  });

  const setContestData = useContestRegistrationData(); // this is function
  const onSubmit = (data) => {
    setContestData(data);
    return;
  };

  return (
    <div className={styles.addCtn}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <h2 style={{ fontFamily: "sans-serif", color: "#e6e6e6" }}>
            Contest Registration
          </h2>

          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            className={styles.inputBox}
            placeholder="name"
            {...register("name")}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Branch</label>
          <input
            type="text"
            name="branch"
            className={styles.inputBox}
            placeholder="Enter your branch"
            {...register("branch")}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">e-mail id</label>
          <input
            type="text"
            name="email"
            className={styles.inputBox}
            placeholder="e-mail id"
            {...register("email")}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="link">Passout Year</label>
          <input
            type="text"
            name="passoutYear"
            className={styles.inputBox}
            placeholder="Enter batch year"
            {...register("passoutYear", {
              required: true,
              minLength: 4,
              maxLength: 4,
            })}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="link">phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            className={styles.inputBox}
            placeholder="Enter mobile number"
            {...register("phoneNumber", {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
          />
        </div>

        <div className={styles.requestCallButton}>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContestRegistration;
