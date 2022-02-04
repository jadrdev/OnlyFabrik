import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
export default function Barber(props) {
  const { navigation } = props;
  return (
    <ScrollView>
      <Image
        style={styles.banner}
        source={require('../assets/png/banner-barberia.png')}
      />
      <Image
        style={styles.divisor}
        source={require('../assets/png/divisor.png')}
      />
      <View style={styles.mapacapsula}>
        <MapView
          style={styles.mapa}
          initialRegion={{
            latitude: 28.452085,
            longitude: -16.281446,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}>
          <Marker
            coordinate={{ latitude: 28.452085, longitude: -16.281446 }}
            title="Fabrik 2.0"
          />
        </MapView>
      </View>
      <View style={styles.center}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('http://google.com')}>
          <TouchableOpacity
            style={styles.buttonAncho}
            onPress={() => navigation.navigate('contact')}>
            <View style={styles.buttonInterior}>
              <Image
                style={styles.imagenInterior}
                source={require('../assets/png/marcador-de-posicion.png')}
              />
              <Text style={styles.TextInterior}>¿Cómo llegar?</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text>Calle de Pedro de Valdivia, 2 </Text>
        <Text>38010 Santa Cruz de Tenerife</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mapacapsula: {
    width: '90%',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  mapa: {
    height: 300,
    borderColor: '#B58B4C',
    borderWidth: 1,
  },
  banner: {
    height: 150,
    width: '100%',
  },
  divisor: {
    height: 30,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    borderColor: '#B58B4C',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
  },
  center: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 1,
    marginTop: 2,
  },
  buttonInterior: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imagenInterior: {
    width: 60,
    height: 60,
    marginHorizontal: 45,
    marginTop: 15,
  },
  TextInterior: {
    width: 150,
    height: 30,
    marginHorizontal: 15,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
