import { TextInput } from '@react-native-material/core';
import AppContext from '@src/context/context';
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  const storedEvents = useContext(AppContext);
  const login = () => {
    storedEvents.setIsLogin(true);
  };
  const logout = () => {
    storedEvents.setIsLogin(false);
  };
  if (!storedEvents.isLogin) {
    return (
      <View style={styles.loginBox}>
        <View style={styles.inputBox}>
          <TextInput
            variant="standard"
            inputContainerStyle={styles.margin}
            InputLabelProps={{shrink: true}}
            placeholder="Account"
            onChangeText={newAccount => storedEvents.setAccount(newAccount)}
            defaultValue={storedEvents.account}
            leading={
              <View>
                <Image
                  source={require('@src/assets/images/user.png')}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </View>
            }
          />

          <TextInput
            variant="standard"
            inputContainerStyle={styles.margin}
            InputLabelProps={{shrink: true}}
            placeholder="Password"
            onChangeText={newPassword => storedEvents.setPassword(newPassword)}
            defaultValue={storedEvents.password}
            leading={
              <View>
                <Image
                  source={require('@src/assets/images/lock.png')}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </View>
            }
          />
        </View>
        <TouchableOpacity
          style={[styles.margin, styles.loginBtn]}
          onPress={() => login()}>
          <Text style={styles.loginBtnTxt}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.profileBox}>
      <Text style={{fontSize: 40}}>Hello,{storedEvents.account}</Text>
      <TouchableOpacity
        style={[styles.margin, styles.loginBtn]}
        onPress={() => logout()}>
        <Text style={styles.loginBtnTxt}>logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  loginBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  margin: {
    margin: 16,
  },
  loginTitle: {
    color: 'black',
    fontSize: 20,
  },
  loginBtn: {
    width: 200,
    height: 50,
    backgroundColor: '#00f0aa',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginBtnTxt: {fontSize: 20, fontWeight: '500', color: 'black'},
  profileBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;
