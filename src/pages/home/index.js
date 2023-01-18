import { Text } from '@react-native-material/core';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation, route }) => {
  const style = StyleSheet.create({
    boxContainer: {
      justifyContent: 'center',
      flexWrap: 'wrap',
      flexDirection: 'row'
    },
    boxStyle: {
      height: 150,
      backgroundColor: '#ead089',
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 12,
      borderRadius: 10
    },
    bg1: {
      backgroundColor: '#FFBABA'
    },
    bg2: {
      backgroundColor: '#A6BB8D'
    },
    bg3: {
      backgroundColor: '#FFFBAC'
    },
    bg4: {
      backgroundColor: '#89C4E1'
    }
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.boxContainer}>
          <View style={[style.boxStyle, style.bg1]}>
            <TouchableOpacity
              style={[style.margin, style.loginBtn]}
              onPress={() => navigation.navigate('Detail')}
            >
              <Text variant="h6" color="#000">
                匯利率查詢
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[style.boxStyle, style.bg1]}>
            <TouchableOpacity
              style={[style.margin, style.loginBtn]}
              onPress={() => navigation.navigate('Detail')}
            >
              <Text variant="h6" color="#000">
                外幣兌換
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[style.boxStyle, style.bg2]}>
            <TouchableOpacity
              style={[style.margin, style.loginBtn]}
              onPress={() => navigation.navigate('Detail')}
            >
              <Text variant="h6" color="#000">
                即時新聞
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[style.boxStyle, style.bg2]}>
            <TouchableOpacity
              style={[style.margin, style.loginBtn]}
              onPress={() => navigation.navigate('Detail')}
            >
              <Text variant="h6" color="#000">
                市場訊息
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[style.boxStyle, style.bg3]}>
            <TouchableOpacity
              style={[style.margin, style.loginBtn]}
              onPress={() => navigation.navigate('Detail')}
            >
              <Text variant="h6" color="#000">
                申辦信貸
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[style.boxStyle, style.bg3]}>
            <TouchableOpacity
              style={[style.margin, style.loginBtn]}
              onPress={() => navigation.navigate('Detail')}
            >
              <Text variant="h6" color="#000">
                申辦信用卡
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[style.boxStyle, style.bg4]}>
            <TouchableOpacity
              style={[style.margin, style.loginBtn]}
              onPress={() => navigation.navigate('Detail')}
            >
              <Text variant="h6" color="#000">
                常見問題
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[style.boxStyle, style.bg4]}>
            <TouchableOpacity
              style={[style.margin, style.loginBtn]}
              onPress={() => navigation.navigate('Detail')}
            >
              <Text variant="h6" color="#000">
                客服服務
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
