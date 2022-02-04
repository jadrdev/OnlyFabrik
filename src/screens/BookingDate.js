import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export default function BookingDate(props) {
  const { navigation, route } = props;
  const parametros = route.params;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  parametros.created = moment(date).format('YYYY-MM-DD HH:mm:00');
  parametros.start_date = moment(date).format('YYYY-MM-DD HH:mm:00');
  parametros.end_date = moment(date).format('YYYY-MM-DD HH:mm:00');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    parametros.start_date = moment(currentDate).format('YYYY-MM-DD HH:mm:00');
    parametros.end_date = moment(currentDate).format('YYYY-MM-DD HH:mm:00');
  };

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
        <Text style={styles.FTeam}>¿Cuándo quieres venir en Fabrik?</Text>
        <View>
          <Text style={styles.FTeam}>Pide tu cita ¡Ahora!</Text>
        </View>
        <View>
          <Text style={styles.FTeam}>Disponible el o después de</Text>
        </View>
      </View>
      <View>
        {Platform.OS === 'ios' ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
            locale="es-ES"
            textColor="black"
          />
        ) : (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            locale="es-ES"
            textColor="black"
          />
        )}
      </View>
      <View>
        <Button
          icon="arrow-right"
          mode="contained"
          style={styles.Button}
          onPress={() => navigation.navigate('bookingdatefilter', parametros)}>
          Siguiente
        </Button>
      </View>
      <View>
        <Button
          icon="arrow-left"
          mode="contained"
          style={styles.Button}
          onPress={() => navigation.goBack()}>
          Atras
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
  Button: {
    marginHorizontal: 20,
    width: '90%',
    backgroundColor: 'black',
    marginTop: 20,
  },
});
