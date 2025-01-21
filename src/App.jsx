import Web3Provider from './context/Web3Provider'
import  Demo  from './Demo'
import './App.css'
function App() {
  
  return(
    <>
    <Web3Provider>
      <Demo/>
    </Web3Provider>
    </>
  )
}

export default App
