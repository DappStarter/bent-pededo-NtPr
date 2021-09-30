require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot alien rate night mistake coral light army general'; 
let testAccounts = [
"0xfc265fa2e0757f37e9f97cff232f521fc693217d6a2f191bba4b7e1af7a0c307",
"0x8f2e62c123b545ee7158b15a5ce56f3e2aa21160a91c4f58b92ed25b5234b596",
"0xb85e53c3d947225d3d52d7e74c3ea36f6710191db681901dbb89a4f29ed14b22",
"0xe47b80de18a0f66dbb4406104035c7923a32ef4c8b63fbc90739ea2199c00daf",
"0xb7117a57260632e10876b69a2000d6da951934dfe68a67b9d1c3c84e3d370d25",
"0x4223d7edadfd03a36be5d3f08423a07f51ca6ee1e1428cb9045c49130e0330fb",
"0x3d5389fcd9f1158b0f5c790e19d6559d0c611831698211d1687e87a5fe07c243",
"0x1a40631d3324e98270889152d511afdd78f563039dfc65959fa3dd548e2ca450",
"0xc589fa57936d8c89dd212f2276afd4d44dbe59fea9f8c845843f252577be1840",
"0x2ad87e4b29c4e736181401e77d4d093f4aac4bfdc1db42e2d9876ed7c6de7109"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

