import { useNavigate } from "react-router-dom";
import styles from "./crash.module.css";
import { VIHANGAM_PAGE } from "../../routes/constant";

const Crash = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(VIHANGAM_PAGE);
  };

  return (
    <div className={styles.mainCtn}>
      <h2>Coming Soon !! </h2>
      <p onClick={() => handleNavigate()} className={styles.joinBtn}>
        Get Clan Group
      </p>
    </div>
  );
};
export default Crash;
