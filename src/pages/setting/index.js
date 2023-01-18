import { Avatar, ListItem, Switch } from '@react-native-material/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';
const Setting = ({ navigation, route }) => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([{}]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLoading(false);
      setListData(response.data);
    });
  }, []);

  return (
    <>
      {loading ? (
        <>
          <View style={styles.container}>
            <ActivityIndicator
              style={styles.activityIndicator}
              animating={loading}
              size="large"
              color="#FFFFFF"
            />
            <Text style={styles.indicatorText}>Loading...</Text>
          </View>
        </>
      ) : (
        <SafeAreaView>
          <Text style={styles.title}>List Item</Text>
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar
                imageContainerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                image={
                  <Image
                    source={require('@src/assets/images/setting.png')}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 28
                    }}
                  />
                }
                color="#ffffff"
              />
            }
            trailing={
              <Image
                source={require('@src/assets/images/next.png')}
                style={{
                  width: 40,
                  height: 40
                }}
              />
            }
            title="重設密碼"
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar
                imageContainerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                image={
                  <Image
                    source={require('@src/assets/images/mail.png')}
                    style={{
                      width: 40,
                      height: 40
                    }}
                  />
                }
                color="#ffffff"
              />
            }
            trailing={
              <Image
                source={require('@src/assets/images/next.png')}
                style={{
                  width: 40,
                  height: 40
                }}
              />
            }
            title="重設信箱"
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar
                imageContainerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                image={
                  <Image
                    source={require('@src/assets/images/bell.png')}
                    style={{
                      width: 40,
                      height: 40
                    }}
                  />
                }
                color="#ffffff"
              />
            }
            trailing={<Switch value={open} onValueChange={setOpen} />}
            title="關閉通知"
          />
          <Text style={styles.title}>List View</Text>

          <FlatList
            data={listData}
            renderItem={({ item }) => (
              <>
                <Text style={styles.item}>{item.title}</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth
                  }}
                />
              </>
            )}
          />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    height: 32,
    backgroundColor: '#CCCCCC'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorText:{
    color:'#FFFFFF'
  }
});

export default Setting;
