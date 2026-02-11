import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useCareerData from "../../hooks/careerDataHook";
import styles from "./career.module.css";

const AddCareer = () => {
  const [img, setImage] = useState(null);
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    shouldUseNativeValidation: true,
    reValidateMode: "onChange",
  });

  const addJob = useCareerData();
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("photo", img);
    formData.append("email", data.email);
    formData.append("link", data.link);
    formData.append("companyName", data.companyName);
    addJob(formData);
  };

  return (
    <div className={styles.addCtn}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            name="name"
            className={styles.inputBox}
            placeholder="company name"
            {...register("companyName")}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="link">link</label>
          <input
            type="text"
            name="link"
            className={styles.inputBox}
            placeholder="Enter link"
            {...register("link")}
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
          <label for="img">Select Photo </label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className={styles.requestCallButton}>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddCareer;
