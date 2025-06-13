import type { Card } from "./card";

export interface Hand {
    id: string;
    name: string;
    cards: Card[];
}