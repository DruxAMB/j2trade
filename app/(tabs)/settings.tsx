import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

// import Logo from "../../assets/images/logo.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/navigation/CustomButton";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Link } from "expo-router";
import UploadButton from "@/components/UploadProfile";

const Settings = () => {
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    zip: "",
    state: "",
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const submit = () => router.push("/dashboard");

  return (
    // <SafeAreaView style={{  }}>
      <ScrollView contentContainerStyle={{ flex: 1, height: "100%" }}>
        <View style={styles.container}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.tpara}>Authentication</Text>
            <Link href="/dashboard" >
              <View style={{ flexDirection: "row", gap: 3 }}>
                <TabBarIcon size={20} name="arrow-back" style={{ color: "#9BB3A0" }} />
                <Text style={{ color: "#9BB3A0", margin: "auto" }}>Back</Text>
              </View>
            </Link>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" , marginVertical: 12}}
          >
            <Text style={{fontSize: 20, fontWeight: 500}}>Profile setting</Text>
            <View style={{ flexDirection: "row", gap: 3 }}>
              <TabBarIcon size={20} name="shield-outline" />
              <Text>Change password</Text>
            </View>
          </View>

          <View style={styles.containerItem}>
            <Text>Profile picture </Text>
            {/* <Image source={Logo} style={styles.logo} /> */}
            <UploadButton />
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
              title="Email"
              value={form.email}
              handleChangeText={(e: any) => setForm({ ...form, email: e })}
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
              title="Country"
              value={form.country}
              handleChangeText={(e: any) => setForm({ ...form, country: e })}
              placeholder={undefined}
            />
            <FormField
              title="Zip"
              value={form.zip}
              handleChangeText={(e: any) => setForm({ ...form, zip: e })}
              placeholder={undefined}
            />
            <FormField
              title="State"
              value={form.state}
              handleChangeText={(e: any) => setForm({ ...form, state: e })}
              placeholder={undefined}
            />
            <View style={styles.btnContainer}>
              <CustomButton
                title="Update"
                handlePress={() => console.log("Hello")}
                // isLoading={isSubmitting}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    padding: 12,
  },
  containerItem: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#9BB3A0",
    padding: 12,
  },
  // logo: {
  //   width: 250,
  //   height: 250,
  //   marginHorizontal: "auto",
  // },
  tpara: {
    fontSize: 15,
    fontWeight: 500,
  },
  btnContainer: {
    backgroundColor: "#18ba30",
    width: "100%",
    alignItems: "center",
    height: 45,
    borderRadius: 10,
    marginVertical: 10,
  }
});
