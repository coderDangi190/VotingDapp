import {Link} from "react-router-dom";

const Navigation = () =>{
    return(
        <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register-voter">RegisterVoter</Link></li>
        <li><Link to="/register-candidate">RegisterCandidate</Link></li>
        <li><Link to="/election">Election Commision</Link></li>
        <li><Link to="/voterList">Voter List</Link></li>
        <li><Link to="/candidateList">Candidate List</Link></li>
    </ul>
        </>
    )
}
export default Navigation