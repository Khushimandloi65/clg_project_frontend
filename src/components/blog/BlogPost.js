import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./blog.module.css";

const BlogPost = () => {
  const [write, setWrite] = useState(false);
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

  const handleWrite = () => {
    setWrite(true);
  };

  const onSubmit = (data) => {};

  return (
    <div className={styles.blogMain}>
      <h2 className={styles.heading} onClick={() => handleWrite}>
        Write a blog about JIT college
      </h2>

      <div className={styles.secondBlog}>
        <div className={styles.formGroup}>
          <textarea
            type="text"
            name="title"
            className={styles.inputArea}
            placeholder="please write here title of your blog"
            {...register("title", { required: true })}
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <textarea
            ref="myArea"
            type="text"
            name="blog"
            className={styles.inputAreaDesc}
            placeholder="please write here your blog !!"
            {...register("summary", { required: true })}
          ></textarea>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.done}>
            <button>Post Your Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
