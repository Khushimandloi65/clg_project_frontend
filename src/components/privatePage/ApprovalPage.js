import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import cutEye from "../../assests/icons/cutEye.png";
import eyeIcon from "../../assests/icons/eyeIcon.png";
import featureSelectors from "../../hooks/featureSelectors";
import useGetPrivateData from "../../hooks/getPrivateDataHook";
import styles from "./page.module.css";

const ApprovalPage = () => {
  let columnArr = [
    "sr No.",
    "Photo",
    "Date",
    "Name",
    "Company Name",
    "Email",
    "BatchYear",
    "Action",
  ];
  const getPrivateData = useGetPrivateData(); // getPrivateData is function by using this function we will getting the data from the backend
  const [filter, setFilter] = useState(false);

  const options = [
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [year, setYear] = useState(0);
  const [company, setCompany] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleYearChange = (year) => {
    setYear(year);
  };

  const handlleCpChange = (company) => {
    setCompany(company);
  };

  useEffect(() => {
    getPrivateData();
  }, []);

  const BACKEND_URL = `https://personal-project-backend-puxc.vercel.app/`;
  let dataArr = featureSelectors.useAllPrivateData();

  const handleApprove = async (count) => {
    if (dataArr[count].approve === false) {
      const ansData = await axios.post(`${BACKEND_URL}editPrivatePageData`, {
        approve: true,
        email: dataArr[count].email,
      });

      getPrivateData();
      return;
    }
  };

  const actionArr = [
    { value: "approve", label: "Approve" },
    { value: "reject", label: "Reject" },
  ];

  const handleReject = async (count) => {
    if (dataArr[count].approve === false) {
      const ansData = await axios.post(`${BACKEND_URL}editPrivatePageData`, {
        approve: false,
        email: dataArr[count].email,
      });

      getPrivateData();
      return;
    }
  };

  const filterOpen = () => {
    setFilter(true);
  };

  const filterClose = () => {
    setFilter(false);
  };

  const handleApply = () => {
    if (selectedOption.value === "reject") {
      // let x = dataArr.sort((p1, p2) => (p1.approve > p2.approve) ? 1 : (p1.approve < p2.approve) ? -1 :0);
      let pq = dataArr.slice().sort((a, b) => a.approve - b.approve);
      // setDataArr(pq)
      console.log("data100", pq);
    }
  };

  let cpArr = [];
  dataArr.forEach((item) => {
    let obj = {
      value: item.companyName,
      label: item.companyName,
    };
    cpArr.push(obj);
  });

  return (
    <div className={styles.mainContainer}>
      <p style={{ fontWeight: "bold" }}>ZRM Approval Page</p>

      <div className={styles.firstCtn}>
        <div className={styles.filterCtn}>
          <h2>Filters | </h2>
          {!filter && (
            <img onClick={() => filterOpen()} src={eyeIcon} alt="eye" />
          )}
          {filter && (
            <img
              style={{ fontWeight: "bold" }}
              onClick={() => filterClose()}
              src={cutEye}
              alt="eye"
            />
          )}
        </div>

        {filter && <div className={styles.hrr}></div>}

        {filter && (
          <div className={styles.searchContainer}>
            {/* <div className={styles.optionsCtn}><Select options={options} /></div> */}
            {/* <div className={styles.actionCtn}><Select options={actionArr} /></div> */}
            <div className={styles.optionsCtn}>
              <p className={styles.lableName}>Year</p>
              <Select
                options={options}
                value={year}
                onChange={handleYearChange}
              />
            </div>
            <div className={styles.actionCtn}>
              <p className={styles.lableName}>Action</p>
              <Select
                options={actionArr}
                value={selectedOption}
                onChange={handleChange}
              />
            </div>

            <div className={styles.actionCtn}>
              <p className={styles.lableName}>Company</p>
              <Select
                options={cpArr}
                value={company}
                onChange={handlleCpChange}
              />
            </div>
          </div>
        )}
        {filter && (
          <div className={styles.searchBoxCtn}>
            <button onClick={() => handleApply()}>Apply Filter</button>
          </div>
        )}
      </div>

      <div className={styles.tblCtn}>
        <table>
          <tr>
            {columnArr &&
              columnArr.map((item, index) =>
                index === 0 ? (
                  <td key={item} style={{ borderLeft: "none" }}>
                    {item}
                  </td>
                ) : (
                  <th key={index}>{item}</th>
                )
              )}
          </tr>

          {dataArr.map((item, index) => (
            <tr>
              <>
                <td style={{ borderLeft: "none" }} key={item}>
                  {index + 1}
                </td>
                <td>
                  <div className={styles.imgCtn}>
                    {dataArr[index].imageUrl && (
                      <img src={dataArr[index].imageUrl} alt="singleImg" />
                    )}{" "}
                  </div>
                </td>
                <td>{new Date(item.updated).toDateString()}</td>
                <td>{item.name}</td>
                <td>{item.companyName}</td>
                <td style={{ wordBreak: "break-all" }}>{item.email}</td>
                <td>{item.batchYear}</td>

                <td>
                  {!item.approve && !item.reject && (
                    <div className={styles.btnCtn}>
                      <button
                        onClick={() => handleApprove(index)}
                        className={styles.approve}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(index)}
                        className={styles.reject}
                      >
                        Reject
                      </button>
                    </div>
                  )}

                  {item.approve && (
                    <div className={styles.approved}>
                      <button className={styles.approvedSuccess}>
                        Approved
                      </button>
                    </div>
                  )}

                  {item.reject && (
                    <div className={styles.rejected}>
                      <button className={styles.rejectfail}>Rejected</button>
                    </div>
                  )}
                </td>

                <br></br>
              </>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ApprovalPage;
