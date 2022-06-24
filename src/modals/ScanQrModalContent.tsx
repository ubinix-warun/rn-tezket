import React, {useEffect, useState} from 'react';

import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  Switch,
  Text,
  Button,
  useColorMode,
  ColorMode,
} from 'native-base';
import {StyleSheet, View} from 'react-native';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

// import { QrReader } from 'react-qr-reader';
import QrReader from 'modern-react-qr-reader'

type Props = {
  onPress: () => any;
  userAddress: string;
  colorMode: ColorMode;
};

const ScanQrModalContent: React.FC<Props> = (props) => {

  const [data, setData] = useState('No result');

  useEffect(() => {

  }, [])


  // const fetchSqPayment = async () => {
  const handleScan = data => {
    if (data) {
      console.log(data);
      setData(data);
        
    }
  }
  
  const handleError = err => {
    console.error(err)
  }
  
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
    Scan Tickets
    </Heading>
    {/* <Text style={styles.contentTitle}>Hi {props.userAddress} 👋!</Text> */}
    <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
    <Ionicons
      name="wallet"
      size={24}
      color={props.colorMode == 'dark' ? 'white' : 'black'}
    />
    <Text fontSize="sm">{data}</Text>
    </HStack>
    {/* <HStack style={styles.qrContent}  space={6} py={4} px={3} mx={2}> */}
    <QrReader
        delay={300}
        facingMode={"environment"}
        onError={handleError}
        onScan={handleScan}
        showViewFinder={true}
        style={{ width: '90%' }}
      />
    {/* </HStack> */}
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
    backgroundColor: 'white',
  }
});

export default ScanQrModalContent;

