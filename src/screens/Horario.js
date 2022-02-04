import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
export default function Horario() {
  const { width } = Dimensions.get('window');
  return (
    <ScrollView>
      <Image
        style={styles.banner}
        source={require('../assets/png/banner-horario.png')}
      />
      <Image
        style={styles.divisor}
        source={require('../assets/png/divisor.png')}
      />
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text>Lunes</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Text>9:00 - 20:00</Text>
        </View>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text>Martes</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Text>9:00 - 20:00</Text>
        </View>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text>Miércoles</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Text>9:00 - 20:00</Text>
        </View>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text>Jueves</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Text>9:00 - 20:00</Text>
        </View>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text>Viernes</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Text>9:00 - 20:00</Text>
        </View>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text>Sábado</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Text>9:00 - 20:00</Text>
        </View>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text>Domingo</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Text>Cerrado</Text>
        </View>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    width: '30%', // is 50% of container width
    height: 70,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  item2: {
    width: '25%', // is 50% of container width
    height: 80,
    paddingHorizontal: 5,
    paddingTop: 20,
  },
  item3: {
    width: '25%', // is 50% of container width
    height: 80,
    paddingHorizontal: 5,
    paddingTop: 20,
  },
  separador: {
    width: 50,
    height: 10,
  },
});
