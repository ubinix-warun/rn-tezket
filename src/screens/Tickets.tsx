import React from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

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
  AspectRatio,
  Stack,
  Image,
  Center,
  useColorMode,
} from 'native-base';
import { ScrollView } from 'react-native';


const ticketList = [
  {
    name: "The Garden City",
    urlimg: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    tag: "1 DAY PASS",
    keyword: "The Silicon Valley of India.",
    description: "Bengaluru (also called Bangalore) is the center of India's high-tech\nindustry. The city is also known for its parks and nightlife.",
    timepref: "Vaild in 10/06/2022"
  },
  // {
  //   name: "The Garden City",
  //   urlimg: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
  //   tag: "PHOTOS",
  //   keyword: "The Silicon Valley of India.",
  //   description: "Bengaluru (also called Bangalore) is the center of India's high-tech\nindustry. The city is also known for its parks and nightlife.",
  //   timepref: "6 mins ago"
  // },
];

export function Tickets({ navigation }: { navigation: BottomTabNavigationProp<any> }) {

  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Box  pt={8}>
        <ScrollView contentContainerStyle={{ width: '100%', flexGrow: 1 }}>
        <Heading p={3} mx={2}>
          Tickets
        </Heading>

        <Divider opacity={colorMode == 'dark' ? '0.4' : '1'} />

        {ticketList.map((ticket) => (
        
        <Box alignItems="center" mx={3} my={3}> 
          <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
          }} _web={{
            shadow: 2,
            borderWidth: 0
          }} _light={{
            backgroundColor: "gray.50"
          }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={{
                uri: ticket.urlimg
              }} alt="image" />
              </AspectRatio>
              <Center bg="violet.500" _dark={{
                  bg: "violet.400"
                }} _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs"
                }} position="absolute" bottom="0" px="3" py="1.5">
                {ticket.tag}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {ticket.name}
                </Heading>
                <Text fontSize="xs" _light={{
                  color: "violet.500"
                }} _dark={{
                  color: "violet.400"
                }} fontWeight="500" ml="-0.5" mt="-1">
                  {ticket.keyword}
                </Text>
              </Stack>
              <Text fontWeight="400">
                {ticket.description}
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                    {ticket.timepref}
                  </Text>
                </HStack>
              <Button ml="auto"
                onPress={() => console.log("BUY")}
                >Buy</Button>
              </HStack>
            </Stack>
          </Box>
        </Box>

        ))}

      </ScrollView>
    </Box>
  );
}