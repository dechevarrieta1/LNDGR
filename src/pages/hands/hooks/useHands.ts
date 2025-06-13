
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { handsServices } from "../../../services/hands";


const useHands = () => {
 
  const HandsMutation = useMutation({
    mutationFn: () =>
      handsServices.getAllHands(),
    onSuccess: async (data) => {
      const handsData = data;
     
        console.log("Hands data retrieved successfully:", handsData);
    },
    onError: () => {
      console.error("Error retrieving hands data");},
  });

  
  const handleRetrieveHands = () => {
    HandsMutation.mutate();
  };

  return {
    handleRetrieveHands
  };
};

export default useHands;
