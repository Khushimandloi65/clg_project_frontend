import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setPrivateData } from "../reducers/getAllPrivateReducer";
import { getAllDataPrivate } from "../utils/getDataBackend";

const useGetPrivateData = function () {
    const dispatch = useDispatch();

    return useCallback(
        async () => {
            try {

                let ans = await getAllDataPrivate();
                ans = ans?.data?.ans
                dispatch(setPrivateData(ans));
            }
            catch (error) {
                console.log('error', error
                );
            }
        }
    )
}
export default useGetPrivateData;