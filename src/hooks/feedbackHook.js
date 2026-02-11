import { useCallback } from "react";
import { setFeedbackData } from "../utils/getDataBackend";

const useFeedback = function () {
  return useCallback(async (data) => {
    try {

    console.log("feedback8",data)
      let res = await setFeedbackData(data);
      if (res) {
        alert("Thanks \n Feedback Submitted Successfully !!");
        return;
      }
    } catch (error) {
      console.log("error", error);
    }
  });
};

export default useFeedback;
