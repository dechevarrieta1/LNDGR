import type React from "react"

export interface Card{
    id: string
    text: string
    isSelected?: boolean // Optional property to indicate if the card is selected
}