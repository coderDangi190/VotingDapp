import { createBrowserRouter } from "react-router-dom";
import { Wallet } from "../components/Wallet/Wallet";
import GetCandidateList from "../pages/Candidate/GetCandidateList";
import GetVoterList from "../pages/Voter/GetVoterList";
import ElectionCommision from "../pages/ElectionCommision/ElectionCommision";
import RegisterCandidate from "../pages/Candidate/RegisterCandidate";
import RegisterVoter from "../pages/Voter/RegisterVoter";

export const routes = createBrowserRouter([
    {path:'/', element:(
        <div>
            <Wallet/>
        </div>
    )},
    {path:'register-voter', element:(
        <div>
            <RegisterVoter/>
        </div>
    )},
    {path:'register-candidate', element:(
        <div>
            <RegisterCandidate/>
        </div>
    )},
    {path:'election', element:(
        <div>
            <ElectionCommision/>
        </div>
    )},
    {path:'voterList', element:(
        <div>
            <GetVoterList/>
        </div>
    )},
    {path:'candidateList', element:(
        <div>
            <GetCandidateList/>
        </div>
    )},
])