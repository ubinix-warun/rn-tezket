import React, { createContext, useState, FC } from "react";


// import { TezosToolkit, MichelCodecPacker } from "@taquito/taquito";
// import { char2Bytes, bytes2Char } from "@taquito/utils";
// import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType, DAppClient, PermissionResponseOutput } from "@airgap/beacon-sdk";
const { TezosToolkit, MichelsonMap } = require('@taquito/taquito');
import { char2Bytes, bytes2Char } from "@taquito/utils";


import { TicketType, TicketList, TicketInfo } from '../screens/Tickets';

const rpcUrl = 'https://ithacanet.ecadinfra.com';
const networkId = NetworkType.ITHACANET;
const networkName = "Ithanet Testnet"
// // TEMPLE WALLET WORK WITH ITHANET

const Tezos = new TezosToolkit(rpcUrl);
const nftContract = 'KT1Q88GESbqLK6mTJu7NL42DiFkGAmiBfhMb';

// const ipfsUrl = 'https://cloudflare-ipfs.com'
const ipfsUrl = 'https://gateway.pinata.cloud'

// ------------------------------------------------------
// const rpcUrl = 'https://hangzhounet.api.tez.ie';
// const networkId = NetworkType.HANGZHOUNET;
// const networkName = "Hangzhounet Testnet"
// ------------------------------------------------------
// // AIRGAP WALLET WORK WITH HANGZHOUNET (ONLY)
// // CANOT TO DEPLOY MLIGO TO HANGZHOUNET ...
// ------------------------------------------------------

// const walletOptions = {
//   name: "Tezket",
//   disclaimerText: `This is an ${networkName} <b>disclaimer</b>.`,
//   preferredNetwork: networkId
// };

const walletOptions = {
    name: "Tezket",
    disclaimerText: `This is an ${networkName} <b>disclaimer</b>.`,
    preferredNetwork: networkId
};

export type TicketNft = {
    tokenId: number;  
    displayNft: string;
    ipfsHash: string;
    tokenMetadata: any;
    reservation: TicketInfo;
}

export type WalletContextState = {
    client: DAppClient;
    isWalletLinked: Boolean;
    isAdmin: Boolean;
    // respReqPermit: PermissionResponseOutput;
    userAddress: string;
    userTicketNfts: TicketNft[],
    getTicketNfts: (address: string) => void,
    linkWallet: () => void;
    // getReserveList: () => Promise<[]>;
};

const contextDefaultValues: WalletContextState = {
    client: new DAppClient(walletOptions),
    isWalletLinked: false,
    isAdmin: false,
    // respReqPermit: null,
    userAddress: '',
    userTicketNfts: [],
    getTicketNfts: (address: string) => null,
    linkWallet: () => null,
    // getReserveList: () => null
};

export const WalletContext = createContext<WalletContextState>(
    contextDefaultValues
);

const WalletProvider: FC = ({ children }) => {
    const [client, setClient] = useState<DAppClient>(contextDefaultValues.client);
    const [isWalletLinked, setIsWalletLinked] = useState<Boolean>(contextDefaultValues.isWalletLinked);
    const [isAdmin, setIsAdmin] = useState<Boolean>(contextDefaultValues.isAdmin);
    // ..
    const [userAddress, setUserAddress] = useState<string>(contextDefaultValues.userAddress);
    const [userTicketNfts, setUserTicketNfts] = 
        useState<TicketNft[]>(contextDefaultValues.userTicketNfts);

    const getTicketNfts = async (address: string) => {
        // finds Ticket's NFTs

        const contract = await Tezos.contract.at(nftContract);
        const nftStorage = await contract.storage();

        const getTokenIds = await nftStorage.reverse_ledger.get(address);
        if (getTokenIds) {
            const userTicketNfts:TicketNft[] = await Promise.all([
                ...getTokenIds.map(async id => {

                  const tokenId = id.toNumber();
                  const metadata = await nftStorage.token_metadata.get(tokenId);
                  const tokenInfoBytes = metadata.token_info.get("");
                  const tokenInfo = bytes2Char(tokenInfoBytes);
                  const ipfsHash = tokenInfo.slice(0, 7) === "ipfs://" ? tokenInfo.slice(7) : null;

                  let metadataNft = await fetch(`${ipfsUrl}/ipfs/${ipfsHash}`)
                    .then((response) => response.json());

                  // TICKETTYPE
                  const displayUri = metadataNft.displayUri;
                  const tokenSymbol = metadataNft.symbol;

                  const ticketType = tokenSymbol.slice(0, 4) === "TZT-" ? tokenSymbol.slice(4) : null;
                  const ticketListIdx = TicketType.indexOf(ticketType);
                  const ipfsDisplayHash = displayUri.slice(0, 7) === "ipfs://" ? displayUri.slice(7) : null;

                  const ticketInfo: TicketInfo = TicketList[ticketListIdx];

                  let ticketNft: TicketNft = {
                    tokenId: tokenId,
                    displayNft: `${ipfsUrl}/ipfs/${ipfsDisplayHash}`,
                    ipfsHash: ipfsHash,
                    tokenMetadata: metadataNft,
                    reservation: ticketInfo
                  };

                  return ticketNft;
                })
              ]);

            setUserTicketNfts(userTicketNfts.filter((element) => { 
                return element.reservation !== undefined; // SKIP unknown TicketType
            }));
        }
        // console.log(getTokenIds);

    };

    const linkWallet = async () => {

        if (!client) {
            setClient(new DAppClient(walletOptions));
        }
    
        try {
            const respReqPermit = await client.requestPermissions({
                network: {
                type: networkId,
                rpcUrl
                }
            });
            const addr = respReqPermit.address;
            setUserAddress(addr);
            setIsWalletLinked(true);
            setIsAdmin(true);
            await getTicketNfts(addr);
    
        } catch (err) {
            console.log(err);
        }
    
    };

    // const getReserveList = async ():Promise<[]> => {

    //     if (!client) {
    //         setClient(new DAppClient(walletOptions));
    //     }
    
    //     try {
    //         // const respReqPermit = await client.requestPermissions({
    //         //     network: {
    //         //     type: networkId,
    //         //     rpcUrl
    //         //     }
    //         // });
    //         // setUserAddress(respReqPermit.address);
        
    //         // setIsWalletLinked(true);
    
    //     } catch (err) {
    //         console.log(err);
    //     }

    //     const reservseList = [
    //         {
    //           name: "The Garden City",
    //           urlimg: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    //           tag: "1 DAY PASS",
    //           keyword: "The Silicon Valley of India.",
    //           description: "Bengaluru (also called Bangalore) is the center of India's high-tech\nindustry. The city is also known for its parks and nightlife.",
    //           timepref: "Vaild in 10/06/2022"
    //         },
    //       ];

    //     return reservseList;
    
    // };

    return (
        <WalletContext.Provider
        value={{
            client,
            isWalletLinked,
            isAdmin,
            // ..
            userAddress,
            userTicketNfts,
            getTicketNfts,
            linkWallet,
            // getReserveList
        }}
        >
        {children}
        </WalletContext.Provider>
    );
};

export default WalletProvider;