import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import Logo from "../../assets/images/logo.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/navigation/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const submit = () => router.push("/dashboard");

  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "white" }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <View>
            <Text style={styles.tpara}>Hello there 👏 </Text>
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e: any) => setForm({ ...form, username: e })}
              placeholder={undefined}
            />
            <FormField
              title="Firstname"
              value={form.firstName}
              handleChangeText={(e: any) => setForm({ ...form, firstName: e })}
              placeholder={undefined}
            />
            <FormField
              title="Lastname"
              value={form.lastName}
              handleChangeText={(e: any) => setForm({ ...form, lastName: e })}
              placeholder={undefined}
            />
            <FormField
              title="Phone Number"
              value={form.phoneNumber}
              handleChangeText={(e: any) =>
                setForm({ ...form, phoneNumber: e })
              }
              placeholder={undefined}
            />
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
            <FormField
              title="Confirm Password"
              value={form.confirmPassword}
              handleChangeText={(e: any) =>
                setForm({ ...form, confirmPassword: e })
              }
              placeholder={undefined}
            />
            <View style={styles.btnContainer}>
              <CustomButton
                title="Register"
                handlePress={() => router.push("/dashboard")}
                // isLoading={isSubmitting}
              />
            </View>
          </View>
          <View style={styles.registered}>
            <Link href="/login">Already have an account?</Link>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 50
  },
  logo: {
    width: 250,
    height: 250,
    marginHorizontal: "auto",
  },
  tpara: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  btnContainer: {
    width: "100%",
    height: 42,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  registered: {
    marginHorizontal: "auto",
    marginVertical: 5,
    textDecorationLine: "underline",
  },
});
