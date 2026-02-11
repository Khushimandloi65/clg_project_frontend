import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { saveSingleUserData } from "../utils/getDataBackend";
import { HOME_PAGE } from "../routes/constant";

const useSingleSave = function () {
    const navigate = useNavigate();

    return useCallback(
        async (formData, msg) => {

            try {
                
                let ans = saveSingleUserData(formData);
                if (ans) {
                    alert('Successfully Data Submitted \n Thank !!')
                    navigate(HOME_PAGE)
                }
            }
            catch (error) {
            }
        }
    )
}
export default useSingleSave;