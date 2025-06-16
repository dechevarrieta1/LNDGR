
import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { handsServices } from "../../../services/hands";
import type { CreateHand } from "../interfaces/allHands";

const useHands = () => {
  console.log(" 1 SE EJECUTA")
  const {
    isLoading: loadingDataHands, data: dataHands,isError: dataHandsError, refetch: refetchHands
  } = useQuery({
    queryKey:['retrieve-all-hands-by-user-id'],
    queryFn: async ()  => await handsServices.getAllHands(),
    // enabled: !!userId
  }
)

console.log("SE EJECUTA 2" ) 

  const createHandMutation = useMutation({
    mutationFn: ({handBody}:{handBody: CreateHand}) => handsServices.createHand(handBody),
    onSuccess: () =>{

    },
    onError: () => {

    }
  })

  const handleCreateHand = (data: CreateHand) => {
    const handBody: CreateHand = {
      cards: data.cards,
      name: data.name,
      type: data.type
    };

    createHandMutation.mutate({handBody});
  };
  return{
    // query data
    loadingDataHands,
    dataHands,
    dataHandsError,
    refetchHands,

    // create mutation
    handleCreateHand
  }
};

export default useHands;
