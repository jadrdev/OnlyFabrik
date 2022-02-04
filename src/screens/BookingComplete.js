import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { InsertCita } from '../api/bookly';

export default function BookingComplete(props) {
  const { navigation, route } = props;
  const parametros = route.params;

  useEffect(() => {
    InsertCita(parametros).then((response) => {
      console.log(response);
    });
  }, [parametros]);

  return (
    <>
      <Image
        style={styles.banner}
        source={require('../assets/png/banner-booking.png')}
      />
      <Image
        style={styles.divisor}
        source={require('../assets/png/divisor.png')}
      />
      <View style={styles.VTeam}>
        <Text style={styles.FTeam}>Gracias por reservar la cita</Text>
        <View>
          <Text style={styles.FTeam}>Te esperamos en Fabrik Barber 2.0</Text>
        </View>
      </View>
      <Image
        style={styles.divisor}
        source={require('../assets/png/divisor.png')}
      />
      <View>
        <Button
          icon="arrow-right"
          mode="contained"
          style={styles.Button}
          onPress={() => navigation.navigate('home')}>
          Volver al inicio
        </Button>
      </View>
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
  VTeam: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 5,
  },
  FTeam: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  DropDown: {
    width: '90%',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  Button: {
    marginHorizontal: 20,
    width: '90%',
    backgroundColor: 'black',
  },
  category_id: {
    color: 'black',
  },
});
