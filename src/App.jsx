import Web3Provider from './context/Web3Provider'
import  Demo  from './Demo'
import RegisterCandidate from './pages/Candidate/RegisterCandidate'
import RegisterVoter from './pages/Voter/RegisterVoter'
import VotingTimePeriod from './components/ElectionCommision/VotingTimePeriod'
import { EmergencyDeclare } from './components/ElectionCommision/EmergencyDeclare'
import { AnnounceWinner } from './components/ElectionCommision/AnnounceWinner'
import CastVote from './components/Voter/CastVote'
import { routes } from './routes/routes'
import { RouterProvider } from 'react-router'
import './App.css'
function App() {
  
  return(
    <>
    <Web3Provider>
      <RouterProvider router={routes}/>
      {/* <CastVote/> */}
      {/* <AnnounceWinner/> */}
      {/* <EmergencyDeclare/> */}
      {/* <VotingTimePeriod/> */}
      {/* <RegisterVoter/> */}
      {/* <RegisterCandidate/> */}
      {/* <Demo/> */}
    </Web3Provider>
    </>
  )
}

export default App
