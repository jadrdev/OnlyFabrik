import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-paper';
import { getAllDayFree } from '../api/bookly';
import moment from 'moment';
import { map } from 'lodash';

let SlotList = [];

export default function BookingDateFilter(props) {
  const { navigation, route } = props;
  const parametros = route.params;
  let date = moment(parametros.start_date).format('YYYY-MM-DD');
  let idstaff = parametros.staff_id;
  let idservice = parametros.service_id;

  const GuardarFecha = (fecha) => {
    var arr = parametros.payment_details.details.items;
    arr.forEach((element) => {
      element.appointment_date = fecha;
    });
    navigation.navigate('bookingform', parametros);
  };

  useEffect(() => {
    getAllDayFree(idstaff, idservice, date).then((response) => {
      SlotList = [];
      setSlost(response);
    });
  });

  const setSlost = (diaslibres) => {
    let idDias = 0;
    diaslibres.forEach((element) => {
      let newObj = {
        id: idDias++,
        fecha: element,
      };
      SlotList.push(newObj);
    });
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
      </View>
      <ScrollView Vertical showsHorizontalScrollIndicator={false}>
        {map(SlotList, (value) => (
          <TouchableOpacity
            style={styles.fechas}
            key={value.id}
            onPress={() => GuardarFecha(value.fecha)}>
            <Text style={styles.days}>{value.fecha}</Text>
          </TouchableOpacity>
        ))}
        <View>
          <Button
            icon="arrow-left"
            mode="contained"
            style={styles.Button}
            onPress={() => navigation.goBack()}>
            Atras
          </Button>
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
    marginTop: 20,
    width: '90%',
    backgroundColor: 'black',
  },
  category_id: {
    color: 'black',
  },
  fechas: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 5,
  },
});
