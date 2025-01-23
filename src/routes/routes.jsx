import { createBrowserRouter } from "react-router-dom";
import { Wallet } from "../components/Wallet/Wallet";
import GetCandidateList from "../pages/Candidate/GetCandidateList";
import GetVoterList from "../pages/Voter/GetVoterList";
import ElectionCommision from "../pages/ElectionCommision/ElectionCommision";
import RegisterCandidate from "../pages/Candidate/RegisterCandidate";
import RegisterVoter from "../pages/Voter/RegisterVoter";
import Navigation from "../components/Navigation/Navigation";
export const routes = createBrowserRouter([
    {path:'/', element:(
        <div>
            <Wallet/>
        </div>
    )},
    {path:'register-voter', element:(
        <div>
            <Navigation/>
            <RegisterVoter/>
        </div>
    )},
    {path:'register-candidate', element:(
        <div>
            <Navigation/>
            <RegisterCandidate/>
        </div>
    )},
    {path:'election', element:(
        <div>
            <Navigation/>
            <ElectionCommision/>
        </div>
    )},
    {path:'voterList', element:(
        <div>
            <Navigation/>
            <GetVoterList/>
        </div>
    )},
    {path:'candidateList', element:(
        <div>
            <Navigation/>
            <GetCandidateList/>
        </div>
    )},
])