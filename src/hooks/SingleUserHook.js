import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSingleUser } from "../reducers/singleUserReducer";
import { getSingleUserData } from "../utils/getDataBackend";

const useSingleUserDetails = function () {

    const dispatch = useDispatch();
    const navigate=useNavigate();

    return useCallback(
        async (formData,msg) => {

            try {

                let ans=await getSingleUserData();

                ans = ans?.data?.ans
                dispatch(setSingleUser(ans))
            }
            catch (error) {
            }
        }
    )
}
export default useSingleUserDetails;