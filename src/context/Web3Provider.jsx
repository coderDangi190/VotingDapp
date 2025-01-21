import { useEffect, useState } from "react";
import { Web3Context } from "./web3Context";
import {getWeb3State} from "../utils/getWeb3State";
import {handleChainChange} from "../utils/handleChainChange";
import {handleAccountChange} from "../utils/handleAccountChange";

const Web3Provider = ({children})=>{
    const [web3State,setweb3State]=useState({
        contractInstance:null,
        selectedAccount:null,
        chainId:null
    })
    const handleWallet = async()=>{
        try{
            const {contractInstance,selectedAccount,chainId} = await getWeb3State();
            setweb3State({contractInstance,selectedAccount,chainId})
        } 
        catch(error){
            console.log(error);
        }  
    }
    useEffect(()=>{
        window.ethereum.on('accountsChanged', ()=>handleAccountChange(setweb3State))
        window.ethereum.on('chainChanged', ()=>handleChainChange(setweb3State))
        
        return()=>{
            window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setweb3State))
            window.ethereum.removeListener('chainChanged',()=>handleChainChange(setweb3State))
        }
    },[])
    return(
        <>
            <Web3Context.Provider value={web3State}>
                {children}
            </Web3Context.Provider>
            <button onClick={handleWallet}>Connect Wallet</button>
        </>
    )
}
export default Web3Provider
