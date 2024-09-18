import { useState, useEffect } from "react"



export const useVotes = (votes) => {
    const [currentVotes, setVotes] = useState(0)

    useEffect(()=>{
        setVotes(votes);
    }, [votes])

    return { currentVotes, setVotes };
}