import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  Linking,
  ScrollView,
} from 'react-native';
export default function Contact() {
  return (
    <ScrollView>
      <Image
        style={styles.banner}
        source={require('../assets/png/banner-contactar.png')}
      />
      <Image
        style={styles.divisor}
        source={require('../assets/png/divisor.png')}
      />
      <View style={styles.center}>
        <TouchableOpacity
          style={styles.buttonAncho}
          onPress={() => Linking.openURL('tel:+34822178619')}>
          <View style={styles.buttonInterior}>
            <Image
              style={styles.imagenInterior}
              source={require('../assets/png/dispositivo.png')}
            />
            <Text style={styles.TextInterior}>Llámanos</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity
          style={styles.buttonAncho}
          onPress={() => Linking.openURL('tel:+34922975075')}>
          <View style={styles.buttonInterior}>
            <Image
              style={styles.imagenInterior}
              source={require('../assets/png/whatsapp.png')}
            />
            <Text style={styles.TextInterior}>WhastApp</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.botonesRSociales}>
        <TouchableOpacity
          style={styles.botonFacebook}
          onPress={() =>
            Linking.openURL('https://www.facebook.com/fabrikbarbertenerife')
          }>
          <View style={styles.buttonInterior2}>
            <Image
              style={styles.imagenInterior2}
              source={require('../assets/png/facebook.png')}
            />
            <Text style={styles.TextInterior2}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonInstagram}
          onPress={() =>
            Linking.openURL(
              'https://www.instagram.com/fabrikbarbertenerife/?hl=es',
            )
          }>
          <View style={styles.buttonInterior2}>
            <Image
              style={styles.imagenInterior2}
              source={require('../assets/png/instagram.png')}
            />
            <Text style={styles.TextInterior2}>Instagram</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  center: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonAncho: {
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
    alignContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  buttonInterior: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imagenInterior: {
    width: 60,
    height: 60,
    marginHorizontal: 30,
    marginTop: 15,
  },
  TextInterior: {
    width: 100,
    height: 40,
    marginHorizontal: 15,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  botonesRSociales: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botonFacebook: {
    backgroundColor: 'red',
    width: 180,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderColor: '#fff',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  botonInstagram: {
    backgroundColor: 'black',
    width: 180,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderColor: '#fff',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  imagenInterior2: {
    width: 60,
    height: 60,
    marginHorizontal: 60,
    marginTop: 15,
  },
  TextInterior2: {
    width: 100,
    height: 30,
    marginHorizontal: 45,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
