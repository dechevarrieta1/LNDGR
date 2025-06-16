import type { Hand } from "../../../interface/hand";

export interface RetrieveAllHands{
    hands:Hand[]
}
export interface CreateHand{
    name: string;
  type: 'question' | 'answer';
  cards: {
    text: string;
  }[];
}