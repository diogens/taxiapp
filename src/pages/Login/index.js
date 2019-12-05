import React, {Component} from 'react';

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

/* import firebase from 'react-native-firebase';

firebase
  .auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
  }); */

export default class Login extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>UBER</Text>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />

          <Button
            color="green"
            style={styles.btn}
            title="Entrar"
            onPress={() => {
              /* alert('Bem vindo'); */
              navigate('Dashboard');
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    flex: 1,
  },
  input: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    width: 300,
  },
  title: {
    fontSize: 30,
  },
  btn: {
    marginVertical: 20,
    marginTop: 20,
    width: 30,
  },
});
