import { useState } from "react";
import { useForm } from "react-hook-form";
import { arr, arr1 } from "../../row/rowData";
import styles from "./vihangam.module.css";
import instagram from "../../assests/icons/instagram.svg";

const Vihangam = () => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    shouldUseNativeValidation: true,
    reValidateMode: "onChange",
  });
  const [groupLink, setGroupLink] = useState("");
  const [singleData, setsingleData] = useState({});
  const [click, setClick] = useState(false);

  const vihangamData = arr1;

  let clanArr = [
    {
      Clan: "AADI YOGI",
      link: "https://chat.whatsapp.com/BB3uM1Faxp9G9qsHKxbZUu",
    },
    {
      Clan: "BLACK PENTHER",
      link: "https://chat.whatsapp.com/JHbgiDHflCL8n3jE3ZO4yh",
    },
    {
      Clan: "STROM WOLVES",
      link: "https://chat.whatsapp.com/InUwNg43Odk26nwagOdXTJ",
    },
    {
      Clan: "WILD BUNCH",
      link: "https://chat.whatsapp.com/JC87gy3F49YKs9g8Gvj8cs",
    },
  ];

  const onSubmit = (data) => {
    var found = false;
    for (var i = 0; i < vihangamData.length; i++) {
      if (vihangamData[i].rollNo == data.roll.toUpperCase()) {
        found = true;

        clanArr.forEach((res) => {
          if (res.Clan == vihangamData[i].Clan) {
            setGroupLink(res.link);
          }
        });
        setsingleData(vihangamData[i]);
        setClick(true);
        break;
      }
    }

    if (!found) {
      alert("Your Clan not Found !! 😞 ");
    }
  };

  const handleBack = () => {
    setClick(false);
  };

  const handleJoinGroup = () => {
    window.open(groupLink, "_blank");
  };

  return (
    <div className={styles.MainCtn}>
      {!click ? (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label style={{ color: "#000" }}>Roll No.</label>
            <input
              type="text"
              name="name"
              className={styles.inputBox}
              k
              placeholder="Enter Roll No. and find your clan :) "
              {...register("roll", { required: true })}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/itz_gurucharan_rajput",
                  "_blank"
                )
              }
            >
              <p
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                  alignItems: "center",
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/itz_gurucharan_rajput",
                    "_blank"
                  )
                }
              >
                Let's Connect me on :)
              </p>
              <img
                style={{ marginLeft: "10px" }}
                className={styles.icons}
                src={instagram}
                alt="icons"
              />
              <p
                style={{
                  marginLeft: "10px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Guru
              </p>
            </div>
          </div>

          <div className={styles.applyCtn}>
            <button className={styles.apply} onClick={() => handleSubmit()}>
              search your clan
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.cardContainer}>
          <h2 className={styles.message}>Vihangam Card</h2>
          <div className={styles.cards}>
            <p className={styles.ptext}>Name : {singleData.name}</p>
            <p className={styles.ptext}>
              Clan : <b>{singleData.Clan}</b>
            </p>
            <p className={styles.ptext}>Roll No. {singleData.rollNo}</p>

            <div className={styles.joinBtn}>
              <p className={styles.joinMsg} onClick={() => handleJoinGroup()}>
                Join Clan Group
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/itz_gurucharan_rajput",
                  "_blank"
                )
              }
            >
              <p
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                  alignItems: "center",
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/itz_gurucharan_rajput",
                    "_blank"
                  )
                }
              >
                Let's Connect me on :)
              </p>
              <img
                style={{ marginLeft: "10px" }}
                className={styles.icons}
                src={instagram}
                alt="icons"
              />
              <p
                style={{
                  marginLeft: "10px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Guru
              </p>
            </div>
          </div>

          <p className={styles.back} onClick={() => handleBack()}>
            back to Search
          </p>
        </div>
      )}
    </div>
  );
};
export default Vihangam;
