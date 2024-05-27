import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import logo from "../assets/images/logo.png";
import CustomButton from "@/components/navigation/CustomButton";

const index = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <View>
            <Text style={styles.thead}>Welcome to J2 Trade</Text>
            <Text style={styles.tpara}>
              Welcome to the Best Trading & Exchange Mobile Platform, Trade Your
              Crypto and Gift Cards with Us
            </Text>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                onPress={() => router.push("/register")}
                activeOpacity={0.7}
                style={styles.btnContainer}
              >
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/login")}
                activeOpacity={0.7}
                style={styles.btnContainer2}
              >
                <Text style={styles.btnText2}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal: 4,
  },
  logo: { width: 300, height: 300, margin: 50 },
  thead: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#18ba30",
  },
  tpara: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  btnContainer: {
    backgroundColor: "#18ba30",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 10,
    marginTop: 5,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  btnContainer2: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 10,
    marginTop: 5,
  },
  btnText2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#18ba30",
  }
});
