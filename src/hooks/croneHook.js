import { useCallback } from "react";
import { sendContestMail} from "../utils/getDataBackend";

const useCrone = function () {
  
    return useCallback(
        async (data) => {
            try {
              let ans = await sendContestMail(data);
              if (ans) {
                console.log("send count mail", ans);
                alert("succfully sent");
                return;
              }
            }
            catch (error) {
                console.log("error",error)
            }
        }
    )
}

export default useCrone;