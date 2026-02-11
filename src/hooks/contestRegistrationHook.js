import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {setContestData } from "../utils/getDataBackend";

const useContestRegistrationData = function () {
    const navigate = useNavigate();

    return useCallback(
        async (data) => {

            try {

                let ans = await setContestData(data);
                if (ans) {
                    alert("Thankyou\n Contest Registration Successfully");
                    // navigate('/home')
                    return
                }

            }
            catch (error) {
            }
        }
    )
}
export default useContestRegistrationData;