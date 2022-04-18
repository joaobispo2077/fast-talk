import { NativeBaseProvider } from 'native-base';
import React from 'react';

import { Routes } from './src/routes/';

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
