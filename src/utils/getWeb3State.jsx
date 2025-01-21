import {ethers} from "ethers"
import abi from "../constant/abi.json"
export const getWeb3State = async()=>{
    try{
        //metamask installation check
        if(!window.ethereum){
            throw new Error("Metamask is not installed");
        }
        //selectedAccount
        const accounts =await window.ethereum.request({
            method:'eth_requestAccounts'
        })
        const selectedAccount = accounts[0];

        //ChainId
        const chainIdHex = await window.ethereum.request({
            method:'eth_chainId'
        })
        const chainId = parseInt(chainIdHex, 16);

        // contract Instance
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner();
        const contractAddress ="0xCCC15B5CCAF92d34f3A99c2270920D3Fcf42c290";
    
        const contractInstance = new ethers.Contract(contractAddress,abi,signer)
        return {contractInstance,selectedAccount,chainId}
    }
    catch(error)
    {
        console.log(error)
        throw new Error
    }
}