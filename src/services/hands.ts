import api from "../infra/http/http"
import type { CreateHand, RetrieveAllHands } from "../pages/hands/interfaces/allHands"

const getAllHands = async () :Promise<RetrieveAllHands> => {
    const result = await api.get("/retrieve-all-hands")
    return result.data
}
const createHand = async(handBody : CreateHand) :Promise<void> => {
    await api.post("/create-hand",handBody)
}
export const handsServices = {
getAllHands,
createHand
}