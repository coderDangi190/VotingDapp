import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

const CastVote = ()=>{
    const vRef = useRef(null);
    const cRef = useRef(null);

    const voteCandidate = async(e)=>{
        try{
            e.preventDefault();
            const voterId = vRef.current.value;
            const candidateId = cRef.current.value;

            console.log(voterId , candidateId);
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
        <h1>Cast Vote</h1>
        <form onSubmit={voteCandidate}>
            <label>VoterId:- <input type="text" ref={vRef} /></label> <br /><br />
            <label>CandidateId:- <input type="text" ref={cRef}/></label><br /><br />

            <button type="submit">CastVote</button><br /><br />
        </form>
        </>
    )
}
export default CastVote