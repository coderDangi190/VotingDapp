import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context"

const VotingStatus =()=>{
    const {votingStatus, setVotingStatus} = useState("");
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;
    useEffect(()=>{
        const fetchvotingStatus = async()=>{
            try{
                const votingStatus = await contractInstance.getVotingStatus();
                setVotingStatus(votingStatus);
            }
            catch(error){
                console.log(error);
            }
        }
        contractInstance && fetchvotingStatus();
    },[contractInstance]);

    return(
        <>
            <h1>Status: {votingStatus}</h1>
        </>
    )
}
export default VotingStatus