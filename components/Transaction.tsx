import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Logo from "../assets/images/logo.png";

const Transaction = () => {
  return (
    <View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>USA AMAZON (25-49)</Text>
          <Text style={styles.text}>22-03-2024</Text>
        </View>
        <Text style={styles.text2}>- #25,200.00</Text>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>USA AMAZON (25-49)</Text>
          <Text style={styles.text}>22-03-2024</Text>
        </View>
        <Text style={styles.text2}>- #25,200.00</Text>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>USA AMAZON (25-49)</Text>
          <Text style={styles.text}>22-03-2024</Text>
        </View>
        <Text style={styles.text2}>- #25,200.00</Text>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>USA AMAZON (25-49)</Text>
          <Text style={styles.text}>22-03-2024</Text>
        </View>
        <Text style={styles.text2}>- #25,200.00</Text>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>USA AMAZON (25-49)</Text>
          <Text style={styles.text}>22-03-2024</Text>
        </View>
        <Text style={styles.text2}>- #25,200.00</Text>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>USA AMAZON (25-49)</Text>
          <Text style={styles.text}>22-03-2024</Text>
        </View>
        <Text style={styles.text2}>- #25,200.00</Text>
      </View>
      <View style={styles.containerItem}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>USA AMAZON (25-49)</Text>
          <Text style={styles.text}>22-03-2024</Text>
        </View>
        <Text style={styles.text2}>- #25,200.00</Text>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  //   container: {
  //     width: "100%",
  //     borderRadius: 12,
  //   },
  containerItem: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 15,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "space-around",
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  textContainer: {
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    alignContent: "center",
  },
});
