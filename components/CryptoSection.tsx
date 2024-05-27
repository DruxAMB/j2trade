import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Logo from "../assets/images/logo.png";

const CryptoSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.tPara}>Buy Crpto</Text>
          <Text style={styles.tPara2}>Btc,Eth,USDT,UDC,TRX,LTC & More</Text>
        </View>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.tPara}>Buy Crpto</Text>
          <Text style={styles.tPara2}>Btc,Eth,USDT,UDC,TRX,LTC & More</Text>
        </View>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.tPara}>Buy Crpto</Text>
          <Text style={styles.tPara2}>Btc,Eth,USDT,UDC,TRX,LTC & More</Text>
        </View>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.tPara}>Buy Crpto</Text>
          <Text style={styles.tPara2}>Btc,Eth,USDT,UDC,TRX,LTC & More</Text>
        </View>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.tPara}>Buy Crpto</Text>
          <Text style={styles.tPara2}>Btc,Eth,USDT,UDC,TRX,LTC & More</Text>
        </View>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.tPara}>Buy Crpto</Text>
          <Text style={styles.tPara2}>Btc,Eth,USDT,UDC,TRX,LTC & More</Text>
        </View>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.tPara}>Buy Crpto</Text>
          <Text style={styles.tPara2}>Btc,Eth,USDT,UDC,TRX,LTC & More</Text>
        </View>
      </View>
    </View>
  );
};

export default CryptoSection;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 110,
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderRadius: 12
  },
  containerItem: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 15
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  textContainer: {
    justifyContent: "center"
  },
  tPara: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tPara2: {
    fontSize: 16,
  }
});
