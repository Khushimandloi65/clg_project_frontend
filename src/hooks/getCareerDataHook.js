import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setCareerData } from "../reducers/careerDataReducer.";
import { getCareerData } from "../utils/getDataBackend";

const useGetCareer = function () {
    const dispatch = useDispatch();

    return useCallback(
        async () => {

            try {

                let ans = await getCareerData();
                if (ans) {
                    dispatch(setCareerData(ans?.data?.ans))
                }

            }
            catch (error) {
            }
        }
    )
}
export default useGetCareer;