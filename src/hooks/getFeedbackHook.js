import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getFeedbackData } from "../utils/getDataBackend";
import { setAllFeedbackData } from "../reducers/feedbackDataReducer";

const useFeedbackData = function () {
  const dispatch = useDispatch();

  return useCallback(async (data) => {

    try {
      let ans = await getFeedbackData();
      ans = ans?.data?.ans;
      dispatch(setAllFeedbackData(ans));
    } 
    catch (error) {
       
    }
  });
};

export default useFeedbackData;
