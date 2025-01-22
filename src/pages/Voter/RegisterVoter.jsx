import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
const RegisterVoter = ()=>{
    const {contractInstance} = useWeb3Context();
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const partyRef = useRef(null);
    const GenderRef = useRef(null);
    const handleCandidateRegistration =async(e)=>{
        try{
            e.preventDefault();
            const name = nameRef.current.value;
            const age = ageRef.current.value;
            const party = partyRef.current.value;
            const gender = GenderRef.current.value;

            await contractInstance.RegisterCandidate(name, age, party, gender);
            console.log("Registration Successful");
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
            <h1>Voter Registration Form</h1>
            <form onSubmit={handleCandidateRegistration}>
                <label>Name: <input type="text" ref={nameRef}/></label><br /><br />
                <label>Age: <input type="text" ref={ageRef}/></label><br /><br />
                <label>Gender:
                    <input type="radio" name="G" ref={GenderRef}/>Male
                    <input type="radio" name="G" ref={GenderRef}/>Female
                </label><br /><br />
                <button type="submit">Register</button><br /><br />
            </form>
        </>
    )
}
export default RegisterVoter