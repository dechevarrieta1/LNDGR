import type { Hand } from "../../../interface/hand";
import CreatedHands from "./CreatedHands";

interface CreatedHandsContainerProps {
    loadingDataHands: boolean;
    dataHands:Hand[],
    isError:boolean
}
function CreatedHandsContainer({loadingDataHands, dataHands,isError}: CreatedHandsContainerProps) {
    
    if (loadingDataHands) return <div>Loading hands...</div>;
    if (isError) return <div>Error loading hands.</div>;
    return <CreatedHands hands={dataHands ?? []} />;
}

export default CreatedHandsContainer