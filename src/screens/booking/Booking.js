import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import {
  getAllCategoryServices,
  getAllServices,
  getAllStaff,
} from '../../api/bookly';
import { debug, BarberoDebug } from '../../utils/constants';

let servicioList = [];
let barberoList = [];
let categoriasList = [];
let servicioResList = [];
let barberoResList = [];

let BookingParams = {
  location_id: null,
  staff_id: null,
  staff_any: null,
  service_id: null,
  custom_service_name: null,
  custom_service_price: null,
  start_date: null,
  end_date: null,
  extras_duration: null,
  internal_note: 'Cita escogida desde la App',
  google_event_id: null,
  google_event_etag: null,
  outlook_event_id: null,
  outlook_event_change_key: null,
  outlook_event_series_id: null,
  online_meeting_provider: null,
  online_meeting_id: null,
  online_meeting_data: null,
  customer_appointment: {
    customer_id: null,
    number_of_persons: null,
    units: null,
    status: null,
    notes: null,
    extras: null,
    status_changed_at: null,
    token: null,
    time_zone: null,
    time_zone_offset: null,
    rating: null,
    rating_comment: null,
    locale: null,
    compound_service_id: null,
    compound_token: null,
    created_from: null,
    created: null,
    extras_multiply_nop: null,
    extras_consider_duration: null,
    collaborative_service_id: null,
    collaborative_token: null,
    custom_fields: null,
  },
  payment_details: {
    coupon_id: null,
    type: null,
    total: null,
    tax: null,
    paid: null,
    paid_type: null,
    gateway_price_correction: null,
    status: null,
    details: {
      items: [],
      coupon: null,
      subtotal: {
        price: null,
        deposit: null,
      },
      customer: null,
      tax_in_price: null,
      adjustments: [],
      tax_paid: null,
    },
    created: null,
  },
};

/*
BookingParams.payment_details.details.items
Este objeto se añade en este lugar
*/
let detail_item = {
  ca_id: null,
  appointment_date: null,
  service_name: null,
  service_price: null,
  service_tax: null,
  wait_listed: null,
  deposit_format: null,
  number_of_persons: null,
  units: null,
  duration: null,
  staff_name: null,
  extras: [],
};

/*
BookingParams.payment_details.details.adjustments
Este objeto se añade en este lugar
*/

let adjustment = {
  reason: null,
  amount: null,
  tax: null,
};

export default function Booking(props) {
  const { navigation } = props;
  const [showDropDown, setShowDropDown] = useState(false); // Dropdown Categorías
  const [showDropDown2, setShowDropDown2] = useState(false); // Dropdown Servicios
  const [showDropDown3, setShowDropDown3] = useState(false); // Dropdown Barberos
  const [categoria, setCategoria] = useState();
  const [servicio, setServicio] = useState();
  const [barbero, setBarbero] = useState();

  useEffect(() => {
    getAllCategoryServices().then((response) => {
      if (response.length > 0) {
        fillCategorias(response);
      }
    });
  }, []);

  useEffect(() => {
    getAllServices().then((response) => {
      fillResponseServicios(response);
    });
  }, []);

  useEffect(() => {
    getAllStaff().then((response) => {
      fillResponseBarberos(response);
    });
  }, []);

  const fillResponseServicios = (response) => {
    servicioResList = response;
  };

  const fillResponseBarberos = (response) => {
    barberoResList = response;
  };

  const fillCategorias = (categorias) => {
    categorias.forEach((element) => {
      element.category_id.name === null ? null : null;
      let newObj = {
        label: element.category_id.name,
        value: element.category_id.id,
      };
      // Evitamos el duplicados dentro de un array
      if (!categoriasList.some((o) => o.label === newObj.label)) {
        categoriasList.push(newObj);
      }
    });
  };

  //Capturamos el valor del DropDown
  const handleClick = (categoryValue) => {
    setCategoria(categoryValue);
    RefillServicios(categoryValue);
    //Añadimos
    detail_item.ca_id = categoryValue;
  };

  const handleClickServicios = (ServicioValue) => {
    setServicio(ServicioValue);
    BookingParams.service_id = ServicioValue;
    RefillBarberos(ServicioValue);

    //Obtenemos el nombre de Servicio
    servicioResList.forEach((element) => {
      if (element.id === ServicioValue) {
        detail_item.service_name = element.title; //Nombre del Servicio
        detail_item.duration = element.duration;
        detail_item.service_price = element.price;
        detail_item.units = '1';
        detail_item.number_of_persons = element.capacity_max;
        adjustment.amount = element.price;
        adjustment.amount = '0';
        BookingParams.payment_details.details.subtotal.price = element.price;
        BookingParams.payment_details.details.subtotal.deposit = '0';
        // Insertamos dentro de Json la listas separadas
        BookingParams.payment_details.details.items.push(detail_item);
        BookingParams.payment_details.details.adjustments.push(adjustment);
      }
    });
  };

  const handleClickBarberos = (BarberoValue) => {
    setBarbero(BarberoValue);
    BookingParams.staff_id = debug ? BarberoDebug : BarberoValue;

    // Obtenemos el nombre del Barbero
    var arr = Object.keys(barberoResList).map((key) => barberoResList[key]);
    arr.forEach((element) => {
      if (element.id === BarberoValue) {
        detail_item.staff_name = element.full_name;
        BookingParams.staff_any = '0';
      }
    });
  };

  const RefillServicios = (categoryValue) => {
    servicioList = [];
    servicioResList.forEach((element) => {
      if (
        element.category_id !== null &&
        element.category_id.id === categoryValue
      ) {
        let newObj = { label: element.title, value: element.id };
        servicioList.push(newObj);
      }
    });
  };

  const RefillBarberos = (ServicioValue) => {
    barberoList = [];
    //Convertimos Array con indices del WP a Array normales 1.2.3
    var arr = Object.keys(barberoResList).map((key) => barberoResList[key]);
    arr.forEach((element) => {
      let services = element.services;
      if (Array.isArray(services)) {
        services.forEach((element2) => {
          if (element2.id === ServicioValue) {
            let newObj = { label: element.full_name, value: element.id };
            barberoList.push(newObj);
          }
        });
      }
    });
  };

  return (
    <>
      <Image
        style={styles.banner}
        source={require('.../assets/png/banner-booking.png')}
      />
      <Image
        style={styles.divisor}
        source={require('.../assets/png/divisor.png')}
      />
      <View style={styles.VTeam}>
        <Text style={styles.FTeam}>¿Cuándo quieres venir en Fabrik?</Text>
        <View>
          <Text style={styles.FTeam}>Pide tu cita ¡Ahora!</Text>
        </View>
      </View>
      <View style={styles.DropDown}>
        <DropDown
          label={'Categorias'}
          value={categoria}
          setValue={handleClick}
          list={categoriasList}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          activeColor="red"
          inputProps={{
            right: <TextInput.Icon name={'menu-down'} />,
          }}
        />
      </View>
      <View style={styles.DropDown}>
        <DropDown
          label={'Servicios'}
          value={servicio}
          setValue={handleClickServicios}
          list={servicioList}
          visible={showDropDown2}
          activeColor="red"
          showDropDown={() => setShowDropDown2(true)}
          onDismiss={() => setShowDropDown2(false)}
          inputProps={{
            right: <TextInput.Icon name={'menu-down'} />,
          }}
        />
      </View>
      <View style={styles.DropDown}>
        <DropDown
          label={'Barberos'}
          value={barbero}
          setValue={handleClickBarberos}
          list={barberoList}
          visible={showDropDown3}
          activeColor="red"
          showDropDown={() => setShowDropDown3(true)}
          onDismiss={() => setShowDropDown3(false)}
          inputProps={{
            right: <TextInput.Icon name={'menu-down'} />,
          }}
        />
      </View>
      <View>
        <Button
          icon="arrow-right"
          mode="contained"
          style={styles.Button}
          onPress={() =>
            navigation.navigate(
              'bookingdate',
              BookingParams,
              detail_item,
              adjustment,
            )
          }>
          Siguiente
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
