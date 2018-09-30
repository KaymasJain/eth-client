var provider;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
        } catch (error) {
            // User denied account access...
        }
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        web3.version.getNetwork((err, netId) => {
            console.log(netId);
        });
    }
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});
