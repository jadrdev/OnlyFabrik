import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Linking,
  Text,
} from 'react-native';
import AppStringContants from '../utils/AppStringContants';
export default function Home(props) {
  const { navigation } = props;
  return (
    <>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../assets/png/Banner-OnlyFabrik.jpg')}
        />
        <View style={styles.center}>
          <TouchableOpacity
            style={styles.buttonAncho}
            onPress={() => navigation.navigate('booking')}>
            <View style={styles.buttonInterior}>
              <Image
                style={styles.imagenInterior}
                source={require('../assets/png/cita.png')}
              />
              <Text style={styles.TextInterior}>
                {AppStringContants.BOOKING}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.botonesdeServicios}>
          <TouchableOpacity
            style={styles.botonServicios}
            onPress={() => navigation.navigate('service')}>
            <View style={styles.buttonInterior2}>
              <Image
                style={
                  (styles.imagenInterior3,
                  {
                    width: '100%',
                    height: 150,
                  })
                }
                resizeMode="contain"
                source={require('../assets/png/botton-servicios.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botonHorario}
            onPress={() => navigation.navigate('horario')}>
            <View style={styles.buttonInterior2}>
              <Image
                style={
                  (styles.imagenInterior3,
                  {
                    width: '100%',
                    height: 150,
                  })
                }
                resizeMode="contain"
                source={require('../assets/png/botton-horario.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <TouchableOpacity
            style={styles.buttonAncho}
            onPress={() => navigation.navigate('shop')}>
            <View style={styles.buttonInterior}>
              <Image
                style={styles.imagenInterior}
                source={require('../assets/png/shop.png')}
              />
              <Text style={styles.TextInterior}>{AppStringContants.SHOP}</Text>
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
              <Text style={styles.TextInterior2}>
                {AppStringContants.FACEBOOK}
              </Text>
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
              <Text style={styles.TextInterior2}>
                {AppStringContants.INSTAGRAM}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <TouchableOpacity
            style={styles.buttonAncho}
            onPress={() => navigation.navigate('contact')}>
            <View style={styles.buttonInterior}>
              <Image
                style={styles.imagenInterior}
                source={require('../assets/png/signo-de-peluquero.png')}
              />
              <Text style={styles.TextInterior}>
                {AppStringContants.CONTACT}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.divisor}
          source={require('../assets/png/divisor.png')}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    width: '100%',
  },
  botonesdeServicios: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  botonesRSociales: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botonServicios: {
    backgroundColor: 'white',
    width: 180,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    borderColor: '#B58B4C',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
  },
  botonHorario: {
    backgroundColor: 'white',
    width: 180,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    borderColor: '#B58B4C',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
  },
  botonFacebook: {
    backgroundColor: 'red',
    width: 180,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
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
    marginHorizontal: 5,
    borderColor: '#fff',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  divisor: {
    height: 30,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonAncho: {
    backgroundColor: 'white',
    width: 370,
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
    marginHorizontal: 30,
    marginTop: 15,
  },
  TextInterior: {
    width: 100,
    height: 30,
    marginHorizontal: 15,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonInterior2: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imagenInterior2: {
    width: 60,
    height: 60,
    marginHorizontal: 60,
    marginTop: 15,
  },
  TextInterior2: {
    width: 100,
    height: 40,
    marginHorizontal: 45,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  imagenInterior3: {
    width: 60,
    height: 60,
    marginHorizontal: 60,
    marginTop: 15,
  },
  TextInterior3: {
    width: 100,
    height: 30,
    marginHorizontal: 45,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
