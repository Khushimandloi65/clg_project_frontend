import { useSelector } from "react-redux";
import { ALL_CAREER_DATA, ALL_FEEDBACK_DATA, ALL_PRIVATE_DATA, AUTHENTICATION, USER_DATA } from "../constant/singleUserSlice";

// for manage the states of hooks for or setting the data which we get from the api 

const useSingleData = () => useSelector(state => state.singleDetails[USER_DATA.SINGLE_USER])
const useAllPrivateData = () => useSelector(state => state.privateDetails[ALL_PRIVATE_DATA.TABLE_DATA])
const useJobData = () => useSelector(state => state.careerDataStore[ALL_CAREER_DATA.CAREER_INFO])
// ye upr me jo use hua uske kisi import ki jarurat nhi hoti 
const useAllFeedbackData=()=>useSelector(state=>state.feedbackDataStore[ALL_FEEDBACK_DATA.FEEDBACK_DATA])
const useAuthToken=()=>useSelector(state=>state.authenticationStore[AUTHENTICATION.AUTH_TOKEN])
const useIsLogin=()=>useSelector(state=>state.authenticationStore[AUTHENTICATION.IS_LOGIN])

const featureSelectors = {

    // for using redux data we use useProduct with featureSelector 
    useSingleData,
    useAllPrivateData,
    useJobData,
    useAllFeedbackData,
    useAuthToken,
    useIsLogin
};

export default featureSelectors;