import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, useTheme } from 'react-native-paper';
import StringConstants from '../utils/AppStringContants';

export default function DrawerContent(props) {
  const { navigation } = props;
  const { colors } = useTheme();
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent} />
      <View style={styles.userInfoSection}>
        <Avatar.Image
          style={styles.avatar}
          source={{
            uri: StringConstants.APP_URI_LOGO,
          }}
          size={150}
        />
        <Title style={colors.primary}>{StringConstants.APP_NAME}</Title>
        <Caption style={styles.caption}>
          {StringConstants.APP_DESCRIPTION}
        </Caption>
      </View>
      <Drawer.Section>
        <Drawer.Item
          label={StringConstants.HOME}
          onPress={() => navigation.navigate('home')}
          icon="home"
        />
        <Drawer.Item
          label={StringConstants.BARBERS}
          onPress={() => navigation.navigate('barbers')}
          icon="account"
        />
        <Drawer.Item
          label={StringConstants.SCHEDULE}
          onPress={() => navigation.navigate('horario')}
          icon="clock"
        />
        <Drawer.Item
          label={StringConstants.SERVICES}
          onPress={() => navigation.navigate('service')}
          icon="content-cut"
        />
        <Drawer.Item
          label={StringConstants.BOOKING}
          onPress={() => navigation.navigate('booking')}
          icon="calendar"
        />
        <Drawer.Item
          label={StringConstants.BARBER}
          onPress={() => navigation.navigate('barber')}
          icon="home"
        />
        <Drawer.Item
          label={StringConstants.SHOP}
          onPress={() => navigation.navigate('shop')}
          icon="home"
        />
        <Drawer.Item
          label={StringConstants.CONTACT}
          onPress={() => navigation.navigate('contact')}
          icon="mail"
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  avatar: {
    backgroundColor: 'white',
  },
  userInfoSection: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
});
