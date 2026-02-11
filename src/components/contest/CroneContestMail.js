import React from "react";
import styles from "./contest.module.css";
import { useForm } from "react-hook-form";
import useCrone from "../../hooks/croneHook";

const CroneContestMail = () => {
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

  const callCrone = useCrone();
  const onSubmit = (data) => {
    if (data.password !== "guruingurgaon") {
      alert(`Incorrect Password : ${data.password}`);
      return;
    }
    const confirmvalue = window.confirm("Are sure ? ");
    confirmvalue ? callCrone(data.contestUrl) : alert("Crone Cancel");
    reset();
  };

  return (
    <div className={styles.croneCtn}>
      <h2 className={styles.heading}>send contest mail to all user's</h2>

      <>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="Name"
            className={styles.inputArea}
            placeholder="please enter password"
            {...register("password", { required: true })}
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="contestUrl"
            className={styles.inputArea}
            placeholder="add Contest Url"
            {...register("contestUrl", { required: true })}
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.done}>
            <button>Done</button>
          </div>
        </form>
      </>
    </div>
  );
};

export default CroneContestMail;
