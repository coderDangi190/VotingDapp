import { useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

export const AnnounceWinner =()=>{
    const {contractInstance} = useWeb3Context();
    const [winner, setWinner ] = useState();
    const announceWinner = async()=>{
        const winner =  await contractInstance.announceVotingResult();
        console.log(winner);
        setWinner(winner);
    }
    return(
        <>
        <h1>Announcement Winner</h1>
        <button onClick={announceWinner}>Click Winner</button> <br /><br />
        </>
    )
}