import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text, View} from '../styles/';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Tabs = ({onpress, title, icon}) => (
  <TouchableOpacity onPress={onpress} style={styles.tab}>
    <Text>{title}</Text>
    <View>
      <Icon icon={icon} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 90,
    height: 90,
    borderRadius: 5,
    elevation: 10,
  },
});

export default Tabs;
