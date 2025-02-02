import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context"

const DisplayResult =()=>{
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;
    const {winner, setWinner} = useState("No Winner Declare.");
    useEffect(()=>{
        const fetchWinner = async()=>{
            try{

                const winningCandidate = await contractInstance.winner();
                if(winningCandidate != '0x0000000000000000000000000000000000000000'){
                    setWinner(winningCandidate);
                }
            }
            catch(error){
                console.log(error);
            }
        }
        contractInstance && fetchWinner();
    },[contractInstance]);

    return(
        <>
            <h1>Winner: {winner}</h1>
        </>
    )
}
export default DisplayResult