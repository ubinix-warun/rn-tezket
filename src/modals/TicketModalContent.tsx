import React, {useEffect} from 'react';

import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  Switch,
  Text,
  Image,
  Button,
  useColorMode,
  AspectRatio,
  ColorMode,
} from 'native-base';
import {StyleSheet, View} from 'react-native';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

import { TicketNft, WalletContext } from '../providers/WalletContext';

type Props = {
  onPress: () => any;
  ticketNft: TicketNft;
  // userAddress: string;
};

const TicketModalContent: React.FC<Props> =  (props) => {

  const { colorMode } = useColorMode();

  useEffect(() => {
    console.log(props);
  }, [])

    return (
  <Box style={styles.content} pt={5} _dark={{
    borderColor: "coolGray.600",
    backgroundColor: "gray.800"
  }} _web={{
    shadow: 2,
    borderWidth: 0
  }} _light={{
    backgroundColor: "gray.50"
  }}>
    <Heading p={3} mx={2}>
    Ticket ID: {String(props.ticketNft.tokenId).padStart(20, '0')}
    </Heading>
    {/* <Text style={styles.contentTitle}>Hi {props.userAddress} 👋!</Text> */}
    {/* <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
    <Ionicons
      name="wallet"
      size={24}
      color={colorMode == 'dark' ? 'white' : 'black'}
    /> */}
    {/* <Text fontSize="sm">{props.userAddress}</Text> */}
    {/* </HStack> */}
    <HStack style={styles.qrContent} >
      {/* <AspectRatio w="100%" ratio={16 / 9}> */}
        <Image source={props.ticketNft.displayNft} style={{width: 330, height: 440, resizeMode: 'contain'}} ></Image>
      {/* </AspectRatio> */}
    </HStack>
    <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
    <Button testID={'close-button'} onPress={props.onPress}>Close</Button>
    </HStack>
  </Box>
  )
};
const styles = StyleSheet.create({
  content: {
    // backgroundColor: 'black',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  qrContent: {
    alignItems: 'center',
    // backgroundColor: 'white',
  }
});

export default TicketModalContent;
