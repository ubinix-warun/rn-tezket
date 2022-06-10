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
  useColorMode,
} from 'native-base';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

export function Profile({ navigation }: { navigation: BottomTabNavigationProp<any> }) {

  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Box  pt={8}>
        <ScrollView contentContainerStyle={{ width: '100%' }}>
        <Heading p={3} mx={2}>
          Profile
        </Heading>

        <Divider opacity={colorMode == 'dark' ? '0.4' : '1'} />
        <Text fontSize="sm" px={2} mx={2} my={5}>Account</Text>
        <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
          <Ionicons
            name="wallet"
            size={24}
            color={colorMode == 'dark' ? 'white' : 'black'}
          />
          <Text>Tezos</Text>
          <Button ml="auto"
            onPress={() => console.log("LINK")}
          >Link</Button>
        </HStack>
        <Text fontSize="sm" px={2} mx={2} my={5}>App Preferences</Text>
        {/* <Divider opacity={colorMode == 'dark' ? '0.4' : '1'} /> */}
        <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
          <Ionicons
            name="moon-sharp"
            size={24}
            color={colorMode == 'dark' ? 'white' : 'black'}
          />
          <Text>Dark Mode</Text>
          <Switch
            ml="auto"
            onToggle={toggleColorMode}
            isChecked={colorMode === 'dark'}
          />
        </HStack>
        {/* <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
          <Ionicons
            name="language"
            size={24}
            color={colorMode == 'dark' ? 'white' : 'black'}
          />
          <Text>Language</Text>
          >
          <Switch
            ml="auto"
            onToggle={toggleColorMode}
            isChecked={colorMode === 'dark'}
          />
        </HStack> */}
        <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
          <Ionicons
            name="musical-note"
            size={24}
            color={colorMode == 'dark' ? 'white' : 'black'}
          />
          <Text>Version</Text>
          <Text ml="auto">0.1   </Text>
        </HStack>
        {/* <Divider opacity={colorMode == 'dark' ? '0.4' : '1'} /> */}


      </ScrollView>
    </Box>
  );
}