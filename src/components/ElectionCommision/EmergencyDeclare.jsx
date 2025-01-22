import { useWeb3Context } from "../../context/useWeb3Context";
export const EmergencyDeclare = ()=>{
    const {contractInstance} = useWeb3Context();

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
