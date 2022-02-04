import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
export default function Barbers() {
  return (
    <>
      <ScrollView>
        <Image
          style={styles.banner}
          source={require('../assets/png/banner-barbers.png')}
        />
        <Image
          style={styles.divisor}
          source={require('../assets/png/divisor.png')}
        />
        <View style={styles.Vtext}>
          <Text style={styles.Ftext}>
            Nuestra barbería es un refugio de la masculinidad en Santa Cruz de
            Tenerife. Un espacio que mantiene la esencia de las antiguas
            barberías y en el que nuestros barberos harán de su experiencia todo
            un momento de relajación. En Fabrik podrá esperar su turno
            disfrutando de una buena cerveza mientras suena de fondo algo de
            rock, jazz o música de los 80’s. Tenemos todos los ingredientes para
            que nuestra receta acabe con un buen corte,arreglo de barba o
            afeitado.
          </Text>
        </View>
      </ScrollView>
    </>
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
  Vtext: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  Ftext: {
    fontSize: 15,
  },
  VTeam: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 5,
  },
  FTeam: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
