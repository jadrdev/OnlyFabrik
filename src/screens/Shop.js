import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
export default function Shop() {
  return (
    <>
      <Image
        style={styles.banner}
        source={require('../assets/png/banner-shop.png')}
      />
      <Image
        style={styles.divisor}
        source={require('../assets/png/divisor.png')}
      />
      <View style={styles.VTeam}>
        <Text style={styles.FTeam}>Bienvevido a Fabrik Shop</Text>
        <View>
          <Text style={styles.FTeam}>
            En breve podrás comprar los productos de nuestra barbería
          </Text>
        </View>
        <View>
          <Text style={styles.FTeam}>Próximamente</Text>
        </View>
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
  button: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    borderColor: '#B58B4C',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
  },
  center: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 1,
  },

  VTeam: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 5,
  },
  FTeam: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Button: {
    marginHorizontal: 20,
    width: '90%',
    backgroundColor: 'black',
    marginTop: 20,
  },
});
