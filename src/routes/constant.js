import BlogPost from "../components/blog/BlogPost";
import AddCareer from "../components/career/AddCarrer";
import CareerHome from "../components/career/CareerHome";
import CertificateGenerate from "../components/certificate/CertificateGenerate";
import ContestRegistration from "../components/contest/ContestRegistration";
import CroneContestMail from "../components/contest/CroneContestMail";
import Culture from "../components/culter/Culture";
import DepartmentDetails from "../components/department/DepartmentDetails";
import AddUser from "../components/homePage/AddUser";
import ForgetPassword from "../components/homePage/ForgetPassword";
import Home from "../components/homePage/Home";
import Login from "../components/homePage/Login";
import Profile from "../components/homePage/Profile";
import Signup from "../components/homePage/Signup";
import ApprovalPage from "../components/privatePage/ApprovalPage";
import PrivatePage from "../components/privatePage/PrivatePage";
import DetailsJit from "../components/viewProfilePage/DetailsJit";
import Vihangam from "../components/vihangam/Vihangam";

export const HOME_PAGE = "/home";
export const SIGN_UP_PAGE = "/signup";
export const LOGIN_PAGE = "/login";
export const ADD_USER = "/adduser";
export const PROFILE_PAGE = "/profile";
export const DEPARTMENT_DETAILS = "/department/:branch";
export const PRIVATE_PAGE = "/privatePage";
export const APPROVAL_PAGE = "/guruallData";
export const JIT_DETAILS = "/details";
export const ADD_CAREER_PAGE = "/addCareer";
export const CONTEST_REGISTRATION = "/contestRegistration";
export const CRONE_CONTEST_MAIL = "/gurgaonContest";
export const CREATE_BLOG = "/createBlog";
export const ACADEMIC = "/academic";
export const FORGET_PASSWORD_PAGE = "/forgotPassword";
export const VIHANGAM_PAGE = "/vihangam";
export const CERTIFICATE_GENERATE = "/test";
export const CAREER = "/career";

export const routers = [
  {
    route: "/",
    component: <Home />,
  },
  {
    route: HOME_PAGE,
    component: <Home />,
  },
  {
    route: SIGN_UP_PAGE,
    component: <Signup />,
  },
  {
    route: LOGIN_PAGE,
    component: <Login />,
  },
  {
    route: ADD_USER,
    component: <AddUser />,
  },
  {
    route: PROFILE_PAGE,
    component: <Profile />,
  },
  {
    route: DEPARTMENT_DETAILS,
    component: <DepartmentDetails />,
  },
  {
    route: PRIVATE_PAGE,
    component: <PrivatePage />,
  },
  {
    route: APPROVAL_PAGE,
    component: <ApprovalPage />,
  },
  {
    route: JIT_DETAILS,
    component: <DetailsJit />,
  },
  {
    route: ADD_CAREER_PAGE,
    component: <AddCareer />,
  },
  {
    route: CONTEST_REGISTRATION,
    component: <ContestRegistration />,
  },
  {
    route: CRONE_CONTEST_MAIL,
    component: <CroneContestMail />,
  },
  {
    route: CREATE_BLOG,
    component: <BlogPost />,
  },
  {
    route: ACADEMIC,
    component: <Culture />,
  },
  {
    route: FORGET_PASSWORD_PAGE,
    component: <ForgetPassword />,
  },
  {
    route: VIHANGAM_PAGE,
    component: <Vihangam />,
  },
  {
    route: CERTIFICATE_GENERATE,
    component: <CertificateGenerate />,
  },
  {
    route: CAREER,
    component: <CareerHome />,
  },
];

export const allDepData = {
  it: [
    {
      id: 1,
      profile: "Department Profile",
      desc: "IT includes several layers of physical equipment (hardware), virtualization and management or automation tools, operating systems and applications (software) used to perform essential functions. User devices, peripherals and software, such as laptops, smartphones or even recording equipment, can be included in the IT domain. IT can also refer to the architectures, methodologies and regulations governing the use and storage of data.Business applications include databases like SQL Server, transactional systems such as real-time order entry, email servers like Exchange, Web servers like Apache, customer relationship management and enterprise resource planning systems. These applications execute programmed instructions to manipulate, consolidate, disperse or otherwise affect data for a business purpose. Computer servers run business applications. Servers interact with client users and other servers across one or more business networks. Storage is any kind of technology that holds information as data. Information can take any form including file data, multimedia, telephony data and Web data, data from sensors or future formats. Storage includes volatile random access memory (RAM) as well as non-volatile tape, hard disk and solid-state flash drives. IT architectures have evolved to include virtualization and cloud computing, where physical resources are abstracted and pooled in different configurations to meet application requirements. Clouds may be distributed across locations and shared with other IT users, or contained within a corporate data center, or some combination of both deployments.",
    },
    {
      id: 2,
      profile: "Faculty",
      desc: "guru",
    },
    {
      id: 3,
      profile: "Laboratories",
      desc: "labortssss",
    },
  ],
  cs: [
    {
      id: 1,
      profile: "Department Profile",
      desc: "IT includes several layers of physical equipment (hardware), virtualization and management or automation tools, operating systems and applications (software) used to perform essential functions. User devices, peripherals and software, such as laptops, smartphones or even recording equipment, can be included in the IT domain. IT can also refer to the architectures, methodologies and regulations governing the use and storage of data.Business applications include databases like SQL Server, transactional systems such as real-time order entry, email servers like Exchange, Web servers like Apache, customer relationship management and enterprise resource planning systems. These applications execute programmed instructions to manipulate, consolidate, disperse or otherwise affect data for a business purpose. Computer servers run business applications. Servers interact with client users and other servers across one or more business networks. Storage is any kind of technology that holds information as data. Information can take any form including file data, multimedia, telephony data and Web data, data from sensors or future formats. Storage includes volatile random access memory (RAM) as well as non-volatile tape, hard disk and solid-state flash drives. IT architectures have evolved to include virtualization and cloud computing, where physical resources are abstracted and pooled in different configurations to meet application requirements. Clouds may be distributed across locations and shared with other IT users, or contained within a corporate data center, or some combination of both deployments.",
    },
    {
      id: 2,
      profile: "Faculty",
      desc: "guru",
    },
    {
      id: 3,
      profile: "Laboratories",
      desc: "labortssss",
    },
  ],
  ce: [
    {
      id: 1,
      profile: "Department Profile",
      desc: "IT includes several layers of physical equipment (hardware), virtualization and management or automation tools, operating systems and applications (software) used to perform essential functions. User devices, peripherals and software, such as laptops, smartphones or even recording equipment, can be included in the IT domain. IT can also refer to the architectures, methodologies and regulations governing the use and storage of data.Business applications include databases like SQL Server, transactional systems such as real-time order entry, email servers like Exchange, Web servers like Apache, customer relationship management and enterprise resource planning systems. These applications execute programmed instructions to manipulate, consolidate, disperse or otherwise affect data for a business purpose. Computer servers run business applications. Servers interact with client users and other servers across one or more business networks. Storage is any kind of technology that holds information as data. Information can take any form including file data, multimedia, telephony data and Web data, data from sensors or future formats. Storage includes volatile random access memory (RAM) as well as non-volatile tape, hard disk and solid-state flash drives. IT architectures have evolved to include virtualization and cloud computing, where physical resources are abstracted and pooled in different configurations to meet application requirements. Clouds may be distributed across locations and shared with other IT users, or contained within a corporate data center, or some combination of both deployments.",
    },
    {
      id: 2,
      profile: "Faculty",
      desc: "guru",
    },
    {
      id: 3,
      profile: "Laboratories",
      desc: "labortssss",
    },
  ],
  ec: [
    {
      id: 1,
      profile: "Department Profile",
      desc: "IT includes several layers of physical equipment (hardware), virtualization and management or automation tools, operating systems and applications (software) used to perform essential functions. User devices, peripherals and software, such as laptops, smartphones or even recording equipment, can be included in the IT domain. IT can also refer to the architectures, methodologies and regulations governing the use and storage of data.Business applications include databases like SQL Server, transactional systems such as real-time order entry, email servers like Exchange, Web servers like Apache, customer relationship management and enterprise resource planning systems. These applications execute programmed instructions to manipulate, consolidate, disperse or otherwise affect data for a business purpose. Computer servers run business applications. Servers interact with client users and other servers across one or more business networks. Storage is any kind of technology that holds information as data. Information can take any form including file data, multimedia, telephony data and Web data, data from sensors or future formats. Storage includes volatile random access memory (RAM) as well as non-volatile tape, hard disk and solid-state flash drives. IT architectures have evolved to include virtualization and cloud computing, where physical resources are abstracted and pooled in different configurations to meet application requirements. Clouds may be distributed across locations and shared with other IT users, or contained within a corporate data center, or some combination of both deployments.",
    },
    {
      id: 2,
      profile: "Faculty",
      desc: "guru",
    },
    {
      id: 3,
      profile: "Laboratories",
      desc: "labortssss",
    },
  ],
  ee: [
    {
      id: 1,
      profile: "Department Profile",
      desc: "IT includes several layers of physical equipment (hardware), virtualization and management or automation tools, operating systems and applications (software) used to perform essential functions. User devices, peripherals and software, such as laptops, smartphones or even recording equipment, can be included in the IT domain. IT can also refer to the architectures, methodologies and regulations governing the use and storage of data.Business applications include databases like SQL Server, transactional systems such as real-time order entry, email servers like Exchange, Web servers like Apache, customer relationship management and enterprise resource planning systems. These applications execute programmed instructions to manipulate, consolidate, disperse or otherwise affect data for a business purpose. Computer servers run business applications. Servers interact with client users and other servers across one or more business networks. Storage is any kind of technology that holds information as data. Information can take any form including file data, multimedia, telephony data and Web data, data from sensors or future formats. Storage includes volatile random access memory (RAM) as well as non-volatile tape, hard disk and solid-state flash drives. IT architectures have evolved to include virtualization and cloud computing, where physical resources are abstracted and pooled in different configurations to meet application requirements. Clouds may be distributed across locations and shared with other IT users, or contained within a corporate data center, or some combination of both deployments.",
    },
    {
      id: 2,
      profile: "Faculty",
      desc: "guru",
    },
    {
      id: 3,
      profile: "Laboratories",
      desc: "labortssss",
    },
  ],
  me: [
    {
      id: 1,
      profile: "Department Profile",
      desc: "IT includes several layers of physical equipment (hardware), virtualization and management or automation tools, operating systems and applications (software) used to perform essential functions. User devices, peripherals and software, such as laptops, smartphones or even recording equipment, can be included in the IT domain. IT can also refer to the architectures, methodologies and regulations governing the use and storage of data.Business applications include databases like SQL Server, transactional systems such as real-time order entry, email servers like Exchange, Web servers like Apache, customer relationship management and enterprise resource planning systems. These applications execute programmed instructions to manipulate, consolidate, disperse or otherwise affect data for a business purpose. Computer servers run business applications. Servers interact with client users and other servers across one or more business networks. Storage is any kind of technology that holds information as data. Information can take any form including file data, multimedia, telephony data and Web data, data from sensors or future formats. Storage includes volatile random access memory (RAM) as well as non-volatile tape, hard disk and solid-state flash drives. IT architectures have evolved to include virtualization and cloud computing, where physical resources are abstracted and pooled in different configurations to meet application requirements. Clouds may be distributed across locations and shared with other IT users, or contained within a corporate data center, or some combination of both deployments.",
    },
    {
      id: 2,
      profile: "Faculty",
      desc: "guru",
    },
    {
      id: 3,
      profile: "Laboratories",
      desc: "labortssss",
    },
  ],
};
