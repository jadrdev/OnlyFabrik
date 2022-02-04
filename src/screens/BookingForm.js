import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { InsertarClientes } from '../api/bookly';
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { debug, CustomerId } from '../utils/constants';
import moment from 'moment';

let customer = {
  wp_user_id: null,
  facebook_id: null,
  group_id: null,
  full_name: '',
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  birthday: null,
  country: null,
  state: null,
  postcode: null,
  city: null,
  street: null,
  street_number: null,
  additional_address: null,
  notes: 'Creado desde la App',
  info_fields: null,
  created: null,
};

export default function BookingForm(props) {
  const { navigation, route } = props;
  const parametros = route.params;
  const { control, handleSubmit, errors } = useForm();
  const [date, setDate] = useState(new Date());

  const onSubmit = (data) => {
    customer.first_name = data.firstName;
    customer.last_name = data.lastName;
    customer.full_name = data.firstName;
    customer.email = data.email;
    customer.phone = data.phone;
    customer.created = moment(date).format('YYYY-MM-DD HH:mm:00');
    // Creamos valor para guardar la resouesta de InsertarCliente
    InsertarClientes(customer).then((response) => {
      parametros.customer_appointment.customer_id = debug
        ? CustomerId
        : response;
    });
    parametros.payment_details.details.customer = customer.full_name;
    parametros.customer_appointment.number_of_persons = 1;
    parametros.customer_appointment.status = 'approved';
    parametros.customer_appointment.units = '1';
    parametros.created_from = 'bookly';
    navigation.navigate('bookingpage', parametros);
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
      <ScrollView>
        <View style={styles.VTeam}>
          <Text style={styles.FTeam}>¿Cuándo quieres venir en Fabrik?</Text>
          <View>
            <Text style={styles.FTeam}>Pide tu cita ¡Ahora!</Text>
          </View>
          <View>
            <Text style={styles.FTeam}>Rellena los campos siguientes</Text>
          </View>
        </View>

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Nombre"
            />
          )}
          name="firstName"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.firstName && <Text style={styles.error}>Campo Requerido.</Text>}

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Apellidos"
            />
          )}
          name="lastName"
          defaultValue=""
          rules={{ required: true }}
        />
        {errors.lastname && <Text style={styles.error}>Campo Requerido.</Text>}

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              autoCapitalize="none"
              placeholder="Email"
              keyboardType="email-address"
            />
          )}
          name="email"
          defaultValue=""
          rules={{ required: true }}
        />
        {errors.email && <Text style={styles.error}>Campo Requerido.</Text>}

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Teléfono"
              keyboardType="numeric"
            />
          )}
          name="phone"
          defaultValue=""
          rules={{ required: true }}
        />
        {errors.email && <Text style={styles.error}>Campo Requerido.</Text>}

        <Button
          title="Submit"
          icon="arrow-right"
          mode="contained"
          style={styles.Button}
          onPress={handleSubmit(onSubmit)}>
          Siguiente
        </Button>

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
    width: '90%',
    backgroundColor: 'black',
    marginTop: 20,
    color: '#fff',
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    alignContent: 'center',
    marginHorizontal: 30,
    marginTop: 5,
  },
  error: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 5,
    color: 'red',
  },
});
