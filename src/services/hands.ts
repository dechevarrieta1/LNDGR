import api from "../infra/http/http"
import type { RetrieveAllHands } from "../pages/hands/interfaces/allHands"

const getAllHands = async () :Promise<RetrieveAllHands> => {
    const result = await api.get("/retrieve-all-hands")
    return result.data
}
export const handsServices = {
getAllHands
}