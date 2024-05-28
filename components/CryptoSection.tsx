import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "expo-router";

const CryptoSection = () => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Link href="/history" key={index} >
          <View style={styles.containerItem}>
            <Image source={Logo} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.tPara}>Buy Crypto</Text>
              <Text style={styles.tPara2}>Btc,Eth,USDT,UDC,TRX,LTC & More</Text>
            </View>
          </View>
        </Link>
      ))}
    </View>
  );
};

export default CryptoSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "95%",
    padding: 10,
    alignSelf: "center",
    gap: 20
  },
  containerItem: {
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  textContainer: {
    justifyContent: "center",
  },
  tPara: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tPara2: {
    fontSize: 16,
  },
});
