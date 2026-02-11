import styles from "./contribution.module.css";
import guru from "../../assests/department/gurucharan.jpeg";
import yukta from "../../assests/department/yukta.jpeg";

const ContributionGuys = () => {
  let arr = [
    {
      photo: guru,
      name: "Gurucharan Chouhan",
      background: "#d7458f",
    },
    //         {
    //             photo: yukta,
    //             name: 'Yukra Solanki',
    //             background: '#4cbfa8'
    //         }
  ];

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.contributionHeading}>Contribution by :)</h2>

      <div className={styles.singleContainer}>
        {arr.map((imgs, idx) => (
          <div
            style={{ backgroundColor: imgs.background }}
            className={styles.imageContainer}
          >
            <div className={styles.singleImgContainer}>
              <img className={styles.imgSingle} src={imgs.photo} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionGuys;
