import React from 'react'
import type { Hand } from '../../../interface/hand'

 interface CreatedHandsProps {
    hands:Hand[]
 }

function CreatedHands({ hands }: CreatedHandsProps) {
    return (
        <>
        <div>
            <h2>Created Hands</h2>
            {hands.length > 0 ? (
                <ul>
                    {hands.map((hand) => (
                        <li key={hand.id}>
                            <h3>{hand.name}</h3>
                            <ul>
                                {hand.cards.map((card) => (
                                    <li key={card.id}>
                                        {card.icon} {card.value} ({card.type})
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hands created yet.</p>
            )}
        </div>
        </>
    );
}

export default CreatedHands