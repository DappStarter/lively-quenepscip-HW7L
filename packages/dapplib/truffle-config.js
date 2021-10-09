require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name reward stereo punch grace logic sugar stable'; 
let testAccounts = [
"0x3af90b93d7bf616fd6f2b9ec8974f3a25f000391a110544f23e224aa3213c13b",
"0x784aec50580acd8f1456e9fc6bef822be9fd99fb09c4aa0401b2016ea15313ab",
"0x5a5530d0bbc5fe57217745dcea3b60009594fc1964277e4f7ed9622c2098ea31",
"0x2b150e70933a3db44cf1d24cf4433767986767b57d1aff1bdc33857261537bcb",
"0x8d912dd242f7007021ba258838bb012ec86fba8df498a5993b6c36f078dc6124",
"0x48a423cfda5e35e218794e82a7b251189681f30136b6909af906173b837f9f55",
"0x1568539cb8be8120cd7508247e53333f16a3530ddcd350763dd71be1c99b192f",
"0xafbc76efa703c21b2353b196497d9646954a200105a969fdfe78f9069ece9e9c",
"0xcb5e33e07aff7e91e513eb17d9751fb29db47c5ee40f4c6d5a2be5b4478f3dc5",
"0x07f2b21e655c91a8b331ea10d1ccf8367fd77a9490dffe8fd5a3767a53aed192"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


