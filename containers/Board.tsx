import {useState} from 'react'

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currPlayer, setCurrPlayer] = useState<X | O>(
        Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
    )
    return (
        <div>|
            <div>{currPlayer}</div>
            Laying board
        </div>
    )
}
