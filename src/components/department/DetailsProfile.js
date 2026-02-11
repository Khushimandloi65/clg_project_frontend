import React, { useEffect, useState } from "react";
import styles from "./detailProfile.module.css";
import csdep from "../../assests/department/itdep.jpg";
import ecdep from "../../assests/department/ecdep.jpg";
import cedep from "../../assests/department/cedep.jpg";
import exdep from "../../assests/department/exdep.jpg";
import medep from "../../assests/department/medep.jpg";

const DetailsProfile = ({ branch = "" }) => {
  const [depData, setdepData] = useState([]);

  let allDepData = {
    it: [
      {
        img: csdep,
        profile: "Department Profile",
        desc: "IT includes several layers of physical equipment (hardware), virtualization and management or automation tools, operating systems and applications (software) used to perform essential functions. User devices, peripherals and software, such as laptops, smartphones or even recording equipment, can be included in the IT domain. IT can also refer to the architectures, methodologies and regulations governing the use and storage of data.Business applications include databases like SQL Server, transactional systems such as real-time order entry, email servers like Exchange, Web servers like Apache, customer relationship management and enterprise resource planning systems. These applications execute programmed instructions to manipulate, consolidate, disperse or otherwise affect data for a business purpose. Computer servers run business applications. Servers interact with client users and other servers across one or more business networks. Storage is any kind of technology that holds information as data. Information can take any form including file data, multimedia, telephony data and Web data, data from sensors or future formats. Storage includes volatile random access memory (RAM) as well as non-volatile tape, hard disk and solid-state flash drives. IT architectures have evolved to include virtualization and cloud computing, where physical resources are abstracted and pooled in different configurations to meet application requirements. Clouds may be distributed across locations and shared with other IT users, or contained within a corporate data center, or some combination of both deployments.",
      },
    ],
    ec: [
      {
        img: ecdep,
        profile: "Department Profile",
        desc: "The Department of Electronics & Communication Engineering was established in 1997. This is an age of communication and the department is geared with all the facilities, equipment and expertise to keep pace with it. Department can boast of highly developed infrastructure and professionally trained faculty. Knowledge of communication engineering is incomplete without adequate knowledge of antenna & wave propagation. The department has highly advanced antenna lab comprising of all types of antennae. It offers Under Graduate course (B.E.) in the field of Electronics and Communication Engineering, and a Post Graduate course (M.E.) in Digital Communication. The department is equipped with the state-of-art equipment’s and has well-developed laboratories in the related fields. The department has secured the most updated equipment in the microwave lab like solid state klystron power supply, gun oscillator, isolator, Frequency meter, Attenuator, Matched terminator, VSWR meter etc.",
      },
    ],
    cs: [
      {
        img: csdep,
        profile: "Department Profile",
        desc: "CS includes several layers of physical equipment (hardware), virtualization and management or automation tools, operating systems and applications (software) used to perform essential functions. User devices, peripherals and software, such as laptops, smartphones or even recording equipment, can be included in the IT domain. IT can also refer to the architectures, methodologies and regulations governing the use and storage of data.Business applications include databases like SQL Server, transactional systems such as real-time order entry, email servers like Exchange, Web servers like Apache, customer relationship management and enterprise resource planning systems. These applications execute programmed instructions to manipulate, consolidate, disperse or otherwise affect data for a business purpose. Computer servers run business applications. Servers interact with client users and other servers across one or more business networks. Storage is any kind of technology that holds information as data. Information can take any form including file data, multimedia, telephony data and Web data, data from sensors or future formats. Storage includes volatile random access memory (RAM) as well as non-volatile tape, hard disk and solid-state flash drives. IT architectures have evolved to include virtualization and cloud computing, where physical resources are abstracted and pooled in different configurations to meet application requirements. Clouds may be distributed across locations and shared with other IT users, or contained within a corporate data center, or some combination of both deployments.",
      },
    ],
    ee: [
      {
        img: exdep,
        profile: "Department Profile",
        desc: "The term electrical engineering is used to cover power engineering, including the generation, transmission, control and use of all forms of electrical power. The term electronic engineering is used to include the expanding fields of electronic communications (including computer networks), computers (both hardware and software) and electronic components. These components include microcomputer chips and, increasingly, the optical devices now being used for many applications. In addition, the field of control engineering spans the electrical/electronic boundary and, with its use of computer systems, is very broadly based. Much of the advanced equipment found in the home or workplace such as entertainment systems, domestic appliances, personal computers, data processing equipment, robots and machine tools are made possible by electrical and electronic engineering. This very broad and vibrant discipline has interfaces with physics (in the component field), computer science (in software engineering) and mechanical engineering (in manufacture and control)",
      },
    ],
    me: [
      {
        img: medep,
        profile: "Department Profile",
        desc: "It is an engineering discipline that works on the principles of physics and material science. It encompasses the generation and application of heat and mechanical power as well as the design, production and use of machines and tools. JIT has well-equipped labs and workshops that lead to a solid understanding of core concepts like mechanics, kinematics, thermodynamics, fluid mechanics, heat transfer etc. Mechanical Engineering branch is an evergreen branch and there will never be any lack of scarcity of job opportunities in this field. This is an outstanding and versatile branch. Mechanical engineering deals with real life situation problem and provides an optimum feasible solution. The Department of Mechanical Engineering was established in 2001. It offers Under Graduate course (B.E.) in the field of Mechanical Engineering, and a Post Graduate course (M.E.) in Industrial Engineering Management.",
      },
    ],
    ce: [
      {
        img: cedep,
        profile: "Department Profile",
        desc: "Civil engineering is a professional Engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, canals, dams and buildings. Civil engineering is the oldest engineering discipline after military engineering and it was defined to distinguish non-military engineering from military engineering. It is traditionally broken into several sub-disciplines including environmental engineering, geotechnical engineering, structural engineering, transportation engineering, earth science, atmospheric sciences, municipal or urban engineering, water resources engineering, materials engineering, coastal engineering, surveying and construction engineering. Civil engineering takes place on all levels: in the public sector from municipal through to national governments, and in the private sector from individual homeowners through to international companies. Civil engineering is the application of physical and scientific principles, and its history is intricately linked to advances in the understanding of physics and mathematics throughout history. Because civil engineering is a wide ranging profession, including several separate specialized sub-disciplines, its history is linked to knowledge of structures, materials science, geography, geology, soils, hydrology, environment, mechanics and other fields.",
      },
    ],
  };

  useEffect(() => {
    setdepData(allDepData[branch]);
  }, []);

  return (
    <div className={styles.profileDtl}>
      {depData.map((item, index) => (
        <div className={styles.profileFinal} key={index}>
          <p className={styles.prf}>{item.profile}</p>
          <img src={item.img} alt="img" />
          <p className={styles.description}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsProfile;
