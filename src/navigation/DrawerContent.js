import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';

export default function DrawerContent(props) {
  const { navigation } = props;
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent} />
      <View style={styles.userInfoSection}>
        <Avatar.Image
          style={styles.avatar}
          source={{
            uri:
              'https://fabrikbarber.com/wp-content/uploads/2019/06/Fabrik-Barber-monocolor2.png',
          }}
          size={150}
        />
        <Title style={styles.title}>Fabrik Barber</Title>
        <Caption style={styles.caption}>#OnlyFabrik</Caption>
      </View>
      <Drawer.Section>
        <Drawer.Item
          label="Inicio"
          onPress={() => navigation.navigate('home')}
          icon="home"
        />
        <Drawer.Item
          label="Barberos"
          onPress={() => navigation.navigate('barbers')}
          icon="account"
        />
        <Drawer.Item
          label="Horarios"
          onPress={() => navigation.navigate('horario')}
          icon="clock"
        />
        <Drawer.Item
          label="Servicios"
          onPress={() => navigation.navigate('service')}
          icon="content-cut"
        />
        <Drawer.Item
          label="Pedir Cita"
          onPress={() => navigation.navigate('booking')}
          icon="calendar"
        />
        <Drawer.Item
          label="Barberia"
          onPress={() => navigation.navigate('barber')}
          icon="home"
        />
        <Drawer.Item
          label="Tienda"
          onPress={() => navigation.navigate('shop')}
          icon="home"
        />
        <Drawer.Item
          label="Contactar"
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
