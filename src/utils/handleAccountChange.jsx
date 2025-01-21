export const handleAccountChange = async(setweb3State) =>{
    const accounts =await window.ethereum.request({
        method:'eth_requestAccounts'
    })
    const selectedAccount = accounts[0];
    setweb3State((prevState)=>({...prevState, selectedAccount}))

}
