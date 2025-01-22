import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
const VotingTimePeriod = ()=>{
    const {contractInstance} = useWeb3Context();
    const sRef = useRef(null);
    const eRef = useRef(null);
    const svRef= useRef(null);
    const handleTimeSet =async(e)=>{
        try{
            e.preventDefault();
            const startTime = sRef.current.value;
            const endTime = eRef.current.value;
            const stopVoting = svRef.current.value;

            await contractInstance.RegisterCandidate(startTime,endTime,stopVoting);
            console.log("Time Connection is Set");
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
            <h1>Voting Time Period</h1>
            <form onSubmit={handleTimeSet}>
                <label>startTime: <input type="text" ref={sRef}/></label><br /><br />
                <label>endTime: <input type="text" ref={eRef}/></label><br /><br />
                <label>StopVoting:
                    <input type="radio" name="sv" ref={svRef}/>True
                    <input type="radio" name="sv" ref={svRef}/>False
                </label><br /><br />

                <button type="submit">Register</button><br /><br />
            </form>
        </>
    )
}
 export default VotingTimePeriod