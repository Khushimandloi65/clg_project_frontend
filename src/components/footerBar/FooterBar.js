import styles from "./footerbar.module.css";
import profile from "../../assests/footerIcon/profileIcon.png";
import home from "../../assests/footerIcon/homeIcon.png";
import blog from "../../assests/footerIcon/blogIcon.png";
import { useNavigate } from "react-router-dom";
import { CREATE_BLOG, HOME_PAGE } from "../../routes/constant";

const FooterBar = () => {
  const iconArr = [
    { photo: home, text: "home", message: "home" },
    { photo: blog, text: "write blog", message: "blog" },
    { photo: profile, text: "account", message: "profile" },
  ];
  const navigate = useNavigate();

  const handleClick = (message) => {
    if (message == "blog") {
      navigate(CREATE_BLOG);
      return;
    } else if (message == "profile") {
      // navigate('/profile')
      alert("wait adding soon");
      return;
    } else {
      navigate(HOME_PAGE);
    }
  };
  return (
    <div className={styles.firstFooterCtn}>
      {iconArr.map((x, index) => (
        <div
          className={styles.singleContainer}
          key={index * 10 + 2}
          onClick={() => handleClick(x.message)}
        >
          <img className={styles.singleIcon} src={x.photo} alt="icons" />
          <p className={styles.textMsg}>{x.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterBar;
