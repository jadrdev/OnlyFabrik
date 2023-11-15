import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';

export default function BookingPage(props) {
  const { navigation, route } = props;
  const parametros = route.params;

  const ConfirmarPago = (local) => {
    parametros.payment_details.type = local;
    parametros.payment_details.paid_type = 'in_full';
    parametros.payment_details.status = 'completed';
    parametros.payment_details.details.tax_in_price = 'excluded';
    navigation.navigate('bookingcomplete', parametros);
  };

  const [value, setValue] = React.useState('local');
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
          <Text style={styles.FTeam}>Realizar Pago</Text>
        </View>
      </View>
      <View style={styles.FTeam}>
        <RadioButton.Group value={value}>
          <RadioButton.Item
            label="Pagar en la peluquería"
            value="local"
            color="black"
            onPress={() => ConfirmarPago(value)}
          />
        </RadioButton.Group>
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
