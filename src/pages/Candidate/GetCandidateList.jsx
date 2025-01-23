import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context"

const GetCandidateList =()=>{
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State
    
    const {candidateList, setCandidateList} = useState([]);
    useEffect(()=>{
        const fetchCandidateList = async()=>{
            try{
                const candidateList = await contractInstance.getCandidateList();
                setCandidateList(candidateList);
                console.log(candidateList);
            }
            catch(error){
                console.log(error);
            }
        }
        contractInstance && fetchCandidateList();
    },[contractInstance]);

    return(
        <>
            <ul>
                {candidateList.map((candidateList,index)=>{
                    <li key= {index}>
                        Name: {candidateList.name},
                        Age: {candidateList.age.toString()},
                        Party: {candidateList.party},
                        Party: {candidateList.votes.toString()},
                        Gender: {candidateList.gender},
                    </li>
                })}
            </ul>
        </>
    )
}
export default GetCandidateList