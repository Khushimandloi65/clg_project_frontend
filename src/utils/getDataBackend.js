import axios from "axios"
// import { BACKEND_URL,LOCAL_URL} from "./config"
const BACKEND_URL=`https://personal-project-backend-puxc.vercel.app/`
// const LOCAL_URL=`http://localhost:4041/`

export const getSingleUserData = async () => {
    return await axios.get(`${BACKEND_URL}allCardsData`)
}
export const saveSingleUserData = async (formData) => {
    // addUserInfo
    return await axios.post(`${BACKEND_URL}upload`, formData)

    // return await axios.post('http://localhost:4040/upload', formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // })
}

export const getAllDataPrivate = async () => {
    return await axios.get(`${BACKEND_URL}getPrivatePageData`)
}

export const setCareerData = async (formData) => {
    return await axios.post(`${BACKEND_URL}addCareer`, formData)
}

export const getCareerData = async () => {
    return await axios.get(`${BACKEND_URL}getCareerData`)
}

export const setContestData = async (data) => {
    return await axios.post(`${BACKEND_URL}addContestInfo`, data)
}

export const sendContestMail=async(contestUrl)=>{

   let data={
        contestUrl:contestUrl
    }
    return await axios.post(`${BACKEND_URL}sendContestMail`,data)
}

export const setFeedbackData=async(data)=>{
    return await axios.post(`${BACKEND_URL}setFeedback`,data)
}
export const getFeedbackData=async()=>{
    return await axios.get(`${BACKEND_URL}getFeedbackData`)
}
// new branch code 