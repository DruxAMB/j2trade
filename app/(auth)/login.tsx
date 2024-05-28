import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import Logo from "../../assets/images/logo.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/navigation/CustomButton";
import { Link, router } from "expo-router";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={{ backgroundColor: "white",height: "100%" }}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <View>
            <Text style={styles.thead}>Welcome to J2 Trade 👏</Text>
            <Text style={styles.tpara}>Login to your account to continue</Text>
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e: any) => setForm({ ...form, email: e })}
              placeholder={undefined}
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e: any) => setForm({ ...form, password: e })}
              placeholder={undefined}
            />

            <View style={styles.btnContainer}>
              <CustomButton
                title="Login"
                handlePress={() => router.push("/dashboard")}
                // isLoading={isSubmitting}
              />
              <CustomButton
                title="Register"
                handlePress={() => router.push("/register")}
                // isLoading={isSubmitting}
              />
            </View>

            <View style={styles.forgot}>
              <Link href="/register">Forgot your password?</Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
  },
  logo: { width: 250, height: 250, margin: "auto" },
  thead: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#18ba30",
  },
  tpara: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 5
  },
  forgot: {
    marginHorizontal: "auto",
    marginVertical: 5,
    textDecorationLine: "underline"
  },
});
