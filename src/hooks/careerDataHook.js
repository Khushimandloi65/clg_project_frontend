import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCareerData } from "../utils/getDataBackend";
import { HOME_PAGE } from "../routes/constant";

const useCareerData = function () {
    const navigate = useNavigate();
    return useCallback(
        async (data) => {

            try {

                let ans = await setCareerData(data);
                if (ans) {
                    window.alert('Thanks for adding Job Info . Career Data saved Successfully ')
                    navigate(HOME_PAGE)
                    return
                }
            }
            catch (error) {
            }
        }
    )
}
export default useCareerData;