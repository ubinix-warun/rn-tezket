# RN-Tezket

Tezket -- "Tezos Ticket" React Native app -- Buy NFT ticket and use QR to control admittance at the gate., [MIT LICENSE](https://github.com/ubinix-warun/rn-tezket/blob/master/LICENSE)

# Screenshot (Prototype V1)

![v1](https://user-images.githubusercontent.com/3756229/175616596-3a27e8f8-dd78-4431-a2d5-8fcc14f30617.png)

## [Tezket -- NFT Ticketing System (Prototype V1)](https://www.figma.com/file/3a9etH2QxvpsQBcrfZHgX6/Tezket----NFT-Ticketing-System-(Prototype-V1)?node-id=0%3A1)

# Build & Run

* Edit Square AppID, LocationID and Api payment on src/modals/BuyTicketModalContext.tsx.
```
const paymentUrl = 'https://xxx.xxx.xxx.xxx'
const appId = 'sandbox-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const locationId = 'XXXXXXXXXXXXXX';

```
* Edit API Minter on src/modals/MintModalContext.tsx.
```
const apiminter = 'https://xxx.xxx.xxx.xxx';

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


