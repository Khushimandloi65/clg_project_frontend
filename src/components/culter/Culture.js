import React from "react";
import styles from "./culter.module.css";

import jit2 from "../../assests/jitculture/jitculter2.jpg";
import jit3 from "../../assests/jitculture/jitculter3.jpg";
import jit4 from "../../assests/jitculture/jitculter4.jpg";
import jit5 from "../../assests/jitculture/jitculter5.jpg";
import jit6 from "../../assests/jitculture/jitculter6.jpg";
import jit7 from "../../assests/jitculture/jitculter7.jpg";
import jit8 from "../../assests/jitculture/jitculter8.jpg";
import jit9 from "../../assests/jitculture/jitculter9.jpg";
import jit10 from "../../assests/jitculture/jitculter10.jpg";
import jit11 from "../../assests/jitculture/jitculter11.jpg";
import jit12 from "../../assests/jitculture/jitculter12.jpg";
import jit13 from "../../assests/jitculture/jitculter13.jpg";
import jit14 from "../../assests/jitculture/jitculter14.jpg";
import jit15 from "../../assests/jitculture/jitculter15.jpg";
import jit16 from "../../assests/jitculture/jitculter16.jpg";
import jit17 from "../../assests/jitculture/jitculter17.jpg";
import jit18 from "../../assests/jitculture/jitculter18.jpg";
import jit19 from "../../assests/jitculture/jitculter19.jpg";
import jit20 from "../../assests/jitculture/jitculter20.jpg";
import jit21 from "../../assests/jitculture/jitculter21.jpg";
import jit22 from "../../assests/jitculture/jitculter22.jpg";
import jit23 from "../../assests/jitculture/jitculter23.jpg";
import jit24 from "../../assests/jitculture/jitculter24.jpg";
import jit25 from "../../assests/jitculture/jitculter25.jpg";
import jit26 from "../../assests/jitculture/jitculter26.jpg";
import jit27 from "../../assests/jitculture/jitculter27.jpg";
import jit28 from "../../assests/jitculture/jitculter28.jpg";
import jit29 from "../../assests/jitculture/jitculter29.jpg";
import jit30 from "../../assests/jitculture/jitculter30.jpg";
import jit31 from "../../assests/jitculture/jitculter31.jpg";
import jit32 from "../../assests/jitculture/jitculter32.jpg";
import jit33 from "../../assests/jitculture/jitculter33.jpg";
import jit34 from "../../assests/jitculture/jitculter34.png";
import jit35 from "../../assests/jitculture/jitculter35.png";
import jit36 from "../../assests/jitculture/jitculter36.png";
import jit37 from "../../assests/jitculture/jitculter37.jpg";

const Culture = () => {
  let imageArr = [
    jit3,
    jit4,
    jit5,
    jit6,
    jit7,
    jit8,
    jit9,
    jit10,
    jit11,
    jit12,
    jit13,
    jit14,
    jit15,
    jit16,
    jit17,
    jit18,
    jit19,
    jit20,
    jit21,
    jit22,
    jit23,
    jit24,
    jit25,
    jit26,
    jit27,
    jit28,
    jit29,
    jit30,
    jit31,
    jit32,
    jit33,
    jit34,
    jit35,
    jit36,
    jit37,
    jit2,
  ];

  return (
    <div className={styles.culterMain}>
      {imageArr.map((img, index) => (
        <img className={styles.culterImg} src={img} alt="helloji" />
      ))}
    </div>
  );
};
export default Culture;
