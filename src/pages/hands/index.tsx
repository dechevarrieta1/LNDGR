import CreatedHands from "./components/CreatedHands";
import CreatedHandsContainer from "./components/CreatedHandsContainer";
import CreateHand from "./components/CreateHand";
import useHands from "./hooks/useHands";

function HandPage() {
      const { loadingDataHands, dataHandsError, dataHands } = useHands();

  return (
    <div>
        <div>
            <button>Traer todas las manos</button>
        </div>
        <div>
            <CreatedHandsContainer
                dataHands={Array.isArray(dataHands) ? dataHands : []}
                loadingDataHands={loadingDataHands}
                isError={dataHandsError}
            />
        </div>
    </div>
  )
}

export default  HandPage;