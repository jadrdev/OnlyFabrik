import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
export default function Services() {
  const { width } = Dimensions.get('window');
  return (
    <ScrollView>
      <Image
        style={styles.banner}
        source={require('../assets/png/banner-servicios.png')}
      />
      <Image
        style={styles.divisor}
        source={require('../assets/png/divisor.png')}
      />
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text style={styles.textService}>Corte de Caballero</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../assets/png/tijera.png')}
            style={styles.iconos}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Corte moderno/clásico realizado a máquina o a tijera + lavado +
          peinado.
        </Text>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text style={styles.textService}>Rapado</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../assets/png/maquinilla-de-afeitar.png')}
            style={styles.iconos}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Corte realizado a máquina utilizando un solo número.
        </Text>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text style={styles.textService}>Corte Niño</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../assets/png/hair-cutting.png')}
            style={styles.iconos}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Corte moderno/clásico realizado a máquina o a tijera + lavado +
          peinado.
        </Text>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text style={styles.textService}>Barba Pequeña</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../assets/png/barba.png')}
            style={styles.iconos}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Arreglo de barba con máquina y perfilado a navaja
        </Text>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text style={styles.textService}>Barba Medina</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../assets/png/barba-mediana.png')}
            style={styles.iconos}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Estructurar barba de más de 2 centímetros realizando corte a mano
          alzada y perfilado a navaja.
        </Text>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text style={styles.textService}>Barba Premium</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../assets/png/barba-premium.png')}
            style={styles.iconos}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Estructurar barba realizando corte a mano alzada más lavado de barba
          con champú específico con perfilado a navaja y ritual paño
          caliente/frío
        </Text>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text style={styles.textService}>Afeitado clásico</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../assets/png/afeitado.png')}
            style={styles.iconos}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Afeitado completo realizado con navaja y productos específicos más
          ritual paño caliente /frío.
        </Text>
      </View>
      <View style={[styles.container, { width: width }]}>
        <View style={styles.item}>
          <Text style={styles.textService}>Mascarilla Negra</Text>
        </View>
        <View style={styles.item2}>
          <Image
            source={require('../assets/png/separador.png')}
            style={styles.separador}
          />
        </View>
        <View style={styles.item3}>
          <Image
            source={require('../assets/png/crema-de-manos.png')}
            style={styles.iconos}
          />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>
          Limpieza de poros con mascarilla Black Mask
        </Text>
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
    width: '42%', // is 50% of container width
    height: 75,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  item2: {
    width: '35%', // is 50% of container width
    height: 75,
    paddingHorizontal: 5,
    paddingTop: 20,
  },
  item3: {
    width: '25%', // is 50% of container width
    height: 75,
    paddingHorizontal: 5,
  },
  separador: {
    width: 100,
    height: 10,
  },
  iconos: {
    height: 50,
    width: 50,
  },
  center: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
  },
  textService: {
    fontWeight: 'bold',
  },
});
