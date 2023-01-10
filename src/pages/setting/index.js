import { Avatar, ListItem, Switch } from '@react-native-material/core';
import React, { useState } from 'react';
import { Image } from 'react-native';

const Setting = ({navigation, route}) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar
            imageContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            image={
              <Image
                source={require('@src/assets/images/setting.png')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 28,
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
              height: 40,
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
              alignItems: 'center',
            }}
            image={
              <Image
                source={require('@src/assets/images/mail.png')}
                style={{
                  width: 40,
                  height: 40,
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
              height: 40,
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
              alignItems: 'center',
            }}
            image={
              <Image
                source={require('@src/assets/images/bell.png')}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            }
            color="#ffffff"
          />
        }
        trailing={<Switch value={open} onValueChange={setOpen} />}
        title="關閉通知"
      />
    </>
  );
};

export default Setting;
