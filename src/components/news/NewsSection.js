import React from "react";
import styles from "./news.module.css";
import jit1 from "../../assests/newsImage/jit1.jpg";
import jit2 from "../../assests/newsImage/jit2.jpg";
import jit3 from "../../assests/newsImage/jit3.jpg";
import jit4 from "../../assests/newsImage/jit4.jpg";
import jit5 from "../../assests/newsImage/jit5.jpg";
import jit6 from "../../assests/newsImage/jit6.jpg";
import jit7 from "../../assests/newsImage/jit7.jpg";
import jit8 from "../../assests/newsImage/jit8.jpg";
import jit9 from "../../assests/newsImage/jit9.jpg";
import jit10 from "../../assests/newsImage/jit10.jpg";

import jit11 from "../../assests/newsImage/jit11.jpg";
import jit12 from "../../assests/newsImage/jit12.jpg";
import jit13 from "../../assests/newsImage/jit13.jpg";
import jit14 from "../../assests/newsImage/jit14.jpg";
import jit15 from "../../assests/newsImage/jit15.jpg";
import jit16 from "../../assests/newsImage/jit16.jpg";
import jit17 from "../../assests/newsImage/jit17.jpg";
import jit18 from "../../assests/newsImage/jit18.jpg";
import jit19 from "../../assests/newsImage/jit19.jpg";
import jit20 from "../../assests/newsImage/jit20.jpg";
import jit21 from "../../assests/newsImage/jit21.jpg";
import jit22 from "../../assests/newsImage/jit22.jpg";
import jit23 from "../../assests/newsImage/jit23.jpg";
import jit24 from "../../assests/newsImage/jit24.jpg";
// import jit10 from "../../assests/newsImage/jit10.jpg";


const NewsSection = () => {
  const arr = [jit2, jit9, jit3, jit4, jit5, jit6, jit7, jit8, jit1,jit10,jit11,jit12,jit13,jit14,jit15,jit16,jit17,jit18,jit19,jit20,jit21,jit22,jit3,jit24];

  return (
    <div style={{marginLeft:'0px', padding:'20px'}} className={styles.newMainCtn}>
      <div className={styles.headinCtn}>
        <h2 style={{color:'#fff'}}>JIT in News</h2>
      </div>

      <div className={styles.newImagesCtn}>
        {arr.map((x, index) => (
          <div key={index+10-1} className={styles.singleImg}>
        {    index===0 ?  <img style={{marginleft:'30px'}} className={styles.img} src={x} alt="newsImg" />
        :  <img className={styles.img} src={x} alt="newsImg" />}
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewsSection;
