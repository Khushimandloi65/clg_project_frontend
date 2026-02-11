import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import arun from "../../assests/arunji.jpg";
import atul from "../../assests/atulji.jpg";
import firstBanner from "../../assests/banners/firstBanner.jpg";
import secondBanner from "../../assests/banners/secondBanner.jpg";
import dean from "../../assests/dean.jpg";
import csimg from "../../assests/department/cs.jpg";
import itimg from "../../assests/department/it.jpeg";
import linkedinIcon from "../../assests/icons/linkedin.png";
import subhash from "../../assests/Subhashji.jpg";
import featureSelectors from "../../hooks/featureSelectors";
import styles from "./home.module.css";
import useSingleUserDetails from "../../hooks/SingleUserHook";
import civil from "../../assests/department/civil.jpeg";
import mech from "../../assests/department/mech.jpg";
import ele from "../../assests/department/ele.jpg";
import elec from "../../assests/department/elec.png";
import FooterPage from "../footer/FooterPage";
import NewsSection from "../news/NewsSection";
import shortid from "shortid";
import Community from "../community/Community";
import AnnualFunction from "../festfunction/AnnualFunction";
import FeedBack from "../feedback/FeedBack";
import FeedbackRating from "../feedback/FeedbackRating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { EffectFade, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import loader from "../../assests/icons/loader.png";
import VideoSection from "../videoGuru/VideoSection";
import { ADD_USER, PROFILE_PAGE } from "../../routes/constant";
import Header from "../header/Header";
import { Typography } from "@mui/material";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getSingleUser = useSingleUserDetails();

  useEffect(() => {
    getSingleUser();
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const addInfo = (msg) => {
    if (msg === "info") {
      navigate(ADD_USER);
    }
    if (msg === "prof") {
      navigate(PROFILE_PAGE);
    }
    if (msg === "career") {
      navigate("/career");
    }
  };

  const handleDepart = (branch) => {
    navigate(`/department/${branch.toLowerCase()}`);
  };

  const teamData = [
    {
      imgDesktop: subhash,
      name: "LATE Shri Subhash Ji Yadav",
      designation: "Founder",
    },
    {
      imgDesktop: arun,
      name: "Mr.Shri Arun Ji Yadav",
      designation: "Chairman",
    },
    {
      imgDesktop: atul,
      name: "Dr.Atul Upadhyay",
      designation: "Principal",
    },
    {
      imgDesktop: dean,
      name: "Dr. Sunil Sugandhi",
      designation: "Dean Academic",
    },
  ];
  let placedData = featureSelectors.useSingleData();
  const images = [
    { url: firstBanner },
    { url: secondBanner },
    // {url:thirdBanner}
  ];

  let imgDep = [
    {
      img: itimg,
      heading: "Information Technology",
      branch: "it",
    },
    {
      img: csimg,
      heading: "Computer Science",
      branch: "cs",
    },
    {
      img: civil,
      heading: "Civil Engg.",
      branch: "ce",
    },
    {
      img: ele,
      heading: "Electronics Engg.",
      branch: "ec",
    },
    {
      img: mech,
      heading: "Mechanical Engg.",
      branch: "me",
    },
    {
      img: elec,
      heading: "Electrical Engg.",
      branch: "ee",
    },
  ];
  const colors = [
    "#EFC050",
    "#F7CAC9",
    "#DD4124",
    "#009B77",
    "#D65076",
    "#9B2335",
    "#FF6F61",
  ];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const currentColor = colors[currentColorIndex];
  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <img className={styles.loadImg} src={loader} alt="Your Image" />
        </div>
      ) : (
        <div className={styles.homeContainer}>
          <div
            style={{ backgroundColor: "#e91e62" }}
            className={styles.firstContainer}
          >
            <div className={styles.firstTwoHeader}>
              <p
                style={{ marginLeft: "10px" }}
                className={styles.addInfo}
                onClick={() => addInfo("info")}
              >
                Add Info
              </p>
              {/* <p
      style={{ marginLeft: '20px', fontWeight: 'bold', color: currentColor }}
      className={styles.addInfo}
      onClick={() => navigate('/vihangam')}
    >
      Find Your Clan <span style={{fontSize:'12px'}}>for vihangam</span>
    </p> */}
            </div>
            <p className={styles.addInfo} onClick={() => addInfo("career")}>
              Career
            </p>
            {/* <p onClick={() => addInfo("prof")}>Profile</p> */}
          </div>
          {/* <Header /> */}

          <div className={styles.bannerContainer}>
            <Swiper
              modules={[EffectFade, Pagination, Autoplay, Navigation]}
              effect={"fade"}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              // onSlideChange={(c) => setCurrentIndex(c.snapIndex)}
              onSwiper={(swiper) => {}}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {images.map((x, index) => (
                <SwiperSlide key={shortid.generate()}>
                  <img style={{ height: "250px", width: "100%" }} src={x.url} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div style={{background:'#e91e62'}} className={styles.secondContainer}>
            {teamData.map((ans) => (
              <div
                className={styles.teamDataContainer}
                key={shortid.generate()}
              >
                <img src={ans.imgDesktop} alt="guru" />
                <p>{ans.name}</p>
                <p className={styles.des}>{ans.designation}</p>
              </div>
            ))}
          </div>

          <div style={{background:'#e91e62'}} className={styles.batchProfile}>
            <div  className={styles.batch}>
              {placedData && placedData.length ? (
                <h3>Batch :) 2023 </h3>
              ) : (
                <div></div>
              )}
            </div>

            <div style={{background:'#fff', marginTop:2}} className={styles.thirdContainer}>
              {placedData.map((place, index) => (
                <div
                  style={{background:'#9c0768',marginTop:'20px',marginBottom:'20px'}}
                  className={styles.singleContainer}
                  key={shortid.generate()}
                >
                  <div className={styles.imgdiv}>
                    {placedData[index].imageUrl && (
                      <img
                        className={styles.userImg}
                        src={placedData[index].imageUrl}
                        alt="singleImg"
                      />
                    )}
                  </div>
                  <p className={styles.name} style={{ fontWeight: "bold" }}>
                    {placedData[index].name}
                  </p>
                  <p className={styles.name}>
                    Placed at :<b>{placedData[index].companyName}</b>
                  </p>
                  <p className={styles.name}>{placedData[index].batchYear}</p>

                  <a
                    rel="noopener"
                    target="_blank"
                    title="linkedinId"
                    href={place.linkedinUrl}
                  >
                    <img
                      className={styles.icon}
                      src={linkedinIcon}
                      alt="linkedin"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:'#fff',marginTop:'10px'}} className={styles.dpHeader}>
            <h2 className={styles.named}>Our Departments</h2>
          </div>
          <div style={{background:'#fff'}} className={styles.departContainer}>
            {imgDep.map((item, index) => (
              <div
                style={{ cursor: "pointer",background:'#e91e62' }}
                key={shortid.generate()}
                className={styles.depContainer}
                onClick={() => handleDepart(item.branch)}
              >
                <img src={item.img} alt="guru" />
                <p className={styles.heading}>{item.heading}</p>
              </div>
            ))}
          </div>
          <div className={styles.hrLine}></div>
          <AnnualFunction />
          <Community />
          <VideoSection />
          <NewsSection />
          <FeedbackRating />
          <FeedBack />
          <FooterPage />
        </div>
      )}
    </>
  );
};

export default Home;
