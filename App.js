// In App.js in a new project

import * as React from 'react';

import { NativeBaseProvider } from "native-base"

import { BaseTheme } from './src/theme';
import config from './nativebase.config';
import { Root } from './src/components/RootComponent';

import { DAppClient } from '@airgap/beacon-sdk';

function App() {
  
    // Initiate DAppClient
    const client = new DAppClient({
      name: 'Tezket', // Name of the DApp,
      disclaimerText: 'This is an optional <b>disclaimer</b>.'
      // preferredNetwork: beacon.NetworkType.DELPHINET
      // matrixNodes: ['test.papers.tech', 'test2.papers.tech', 'matrix.papers.tech']
      // matrixNodes: ['beacon-node-0.papers.tech:8448']
      // matrixNodes: ['matrix.papers.tech']
      // matrixNodes: ['beacon.tztip.me']
    })

  return (
    <NativeBaseProvider 
      theme={BaseTheme}
      config={config}
    >
      <Root/>
    </NativeBaseProvider>
  );
}

export default App;