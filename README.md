# RN-Tezket v1

Tezket -- "Tezos Ticket" React Native app -- Buy NFT ticket and use QR to control admittance at the gate., [MIT LICENSE](https://github.com/ubinix-warun/rn-tezket/blob/master/LICENSE)

#### Version 2 -- Revision by [TezKet](https://github.com/tezket/)
* [Pitch Gist!](https://gist.github.com/ubinix-warun/fe48b4e72457b59cb01a732b6abde4c0) -- Intro & Roadmap.


# Screenshot (Prototype V1.2)

<!-- ![v1](https://user-images.githubusercontent.com/3756229/175616596-3a27e8f8-dd78-4431-a2d5-8fcc14f30617.png) -->
![V1.2](https://user-images.githubusercontent.com/3756229/176098059-1e0ff6ee-d698-4069-940d-bc0f0df90bf6.png)


## [Tezket -- NFT Ticketing System (Prototype V1.2)](https://www.figma.com/file/3a9etH2QxvpsQBcrfZHgX6)

### 1. [Demo -- Connect the Wallet and Mint NFT Ticket](https://youtu.be/Wn3L77-08oA) 
### 2. [Demo -- Use QR to control admittance at the gate](https://youtu.be/JHkj7S3R5XE) (New)

# Build & Run

* Edit Square AppID, LocationID and Api payment on src/modals/BuyTicketModalContext.tsx.
```
const paymentUrl = 'https://xxx.xxx.xxx.xxx'
const appId = 'sandbox-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const locationId = 'XXXXXXXXXXXXXX';

```
* Edit API Minter on src/modals/MintModalContext.tsx. [nft-tezket](https://github.com/ubinix-warun/nft-tezket)
```
const ApiMinter = 'https://xxx.xxx.xxx.xxx';

```
* Edit NFTS_Contract Addr on src/providers/WalletContext.tsx
```
const Tezos = new TezosToolkit(rpcUrl);
const nftContract = '<PKH>';

```
* Run rn-tezket via Expo
```
nvm use v16.14.0
npm run install

expo web
```

# Credit

* Use [NativeBase.io](https://nativebase.io/) for React Native Component.
* Pay Google play via [Square Web-SDK](https://developer.squareup.com/docs/web-payments/google-pay).
* Many thanks -- [Taquito](https://github.com/ecadlabs/taquito) & [Beacon SDK](https://www.walletbeacon.io) for [Tezos blockchain](https://tezos.com/).


