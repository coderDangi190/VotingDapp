import { useEffect } from "react"
import { useWeb3Context } from "../../context/useWeb3Context"
import { useNavigate } from "react-router-dom"
export const Wallet = ()=>{

    const {handleWallet, web3State} = useWeb3Context();
    const {selectedAccount} = web3State
    const navigateTo = useNavigate();

    useEffect(()=>{
        if(selectedAccount){
            navigateTo('/register-candidate');
        }
    },[selectedAccount])
    return(
        <>
        <h1>Wallet</h1>
            <button onClick={handleWallet}>Connect Wallet</button>
        </>
    )

}
