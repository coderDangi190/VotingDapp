import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context"

const GetVoterList =()=>{
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State
    const {voterList, setVoterList} = useState([]);
    useEffect( () =>{
        const fetchVoterList = async()=>{
            try{
                const voterList = await contractInstance.getVoterList();
                setVoterList(voterList);
                console.log(voterList);
            }
            catch(error){
                console.log(error);
            }
        }
        contractInstance && fetchVoterList();
    },[contractInstance]);

    return(
        <>
            <ul>
                {voterList.map((voterList, index)=>{
                    <li key={index}>
                        Name: {voterList.name},
                        Age: {voterList.age.toString()},
                        Party: {voterList.party},
                        Gender: {voterList.gender},
                    </li>
                })}
            </ul>
        </>
    )
}
export default GetVoterList