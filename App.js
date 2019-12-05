import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Source from './src/';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <Source style={{flex: 1, backgroundColor: '#888'}} />
      </SafeAreaView>
    </>
  );
};

export default App;
