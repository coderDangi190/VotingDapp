import { useWeb3Context } from "../../context/useWeb3Context";
export const EmergencyDeclare = ()=>{
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;

    const emergencyStop = async()=>{
        const Result = await contractInstance.emergencyStopVoting();
    }
    return(
        <>
        <h1>Emergency Condition</h1>
        <button onClick={emergencyStop}>Stop Voting</button> <br /><br />
        </>
    )
}
