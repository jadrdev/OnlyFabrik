import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import { Linking } from 'react-native';

import Home from '../screens/Home';
import Barbers from '../screens/Barbers';
import Horario from '../screens/Horario';
import Service from '../screens/Services';
import Booking from '../screens/booking/Booking';
import BookingDate from '../screens/booking/BookingDate';
import BookingDateFilter from '../screens/booking/BookingDateFilter';
import BookingForm from '../screens/booking/BookingForm';
import BookingPage from '../screens/booking/BookingPage';
import BookingComplete from '../screens/booking/BookingComplete';
import Barber from '../screens/Barber';
import Shop from '../screens/Shop';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const { navigation } = props;

  const ButtonLeft = () => {
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
  };

  const ButtonRight = (screen) => {
    switch (screen) {
      case 'cart':
      case 'checkout':
      case 'shop':
        return <IconButton icon="cart" />;
      default:
        return (
          <IconButton
            icon="phone"
            onPress={() => Linking.openURL('tel:+34922975075')}
          />
        );
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: '#OnlyFabrik',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('home'),
        }}
      />
      <Stack.Screen
        name="barbers"
        component={Barbers}
        options={{
          title: 'Barberos',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('barbers'),
        }}
      />
      <Stack.Screen
        name="horario"
        component={Horario}
        options={{
          title: 'Horario',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('horario'),
        }}
      />
      <Stack.Screen
        name="service"
        component={Service}
        options={{
          title: 'Servicios',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('services'),
        }}
      />
      <Stack.Screen
        name="booking"
        component={Booking}
        options={{
          title: 'Pedir Cita',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('booking'),
        }}
      />
      <Stack.Screen
        name="bookingdate"
        component={BookingDate}
        options={{
          title: 'Pedir Cita',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('booking'),
        }}
      />
      <Stack.Screen
        name="bookingdatefilter"
        component={BookingDateFilter}
        options={{
          title: 'Pedir Cita',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('booking'),
        }}
      />
      <Stack.Screen
        name="bookingform"
        component={BookingForm}
        options={{
          title: 'Pedir Cita',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('booking'),
        }}
      />
      <Stack.Screen
        name="bookingpage"
        component={BookingPage}
        options={{
          title: 'Pedir Cita',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('booking'),
        }}
      />
      <Stack.Screen
        name="bookingcomplete"
        component={BookingComplete}
        options={{
          title: 'Pedir Cita',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('booking'),
        }}
      />
      <Stack.Screen
        name="shop"
        component={Shop}
        options={{
          title: 'Tienda',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('shop'),
        }}
      />
      <Stack.Screen
        name="barber"
        component={Barber}
        options={{
          title: 'Barbería',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('barber'),
        }}
      />
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{
          title: 'Contactar',
          headerLeft: () => ButtonLeft(),
          headerRight: () => ButtonRight('contact'),
        }}
      />
    </Stack.Navigator>
  );
}
