import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Detail = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://reactnative.dev/' }} />
    </SafeAreaView>
  );
};

export default Detail;
