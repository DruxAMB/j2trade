import { StyleSheet, Text, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import Transaction from "@/components/Transaction";
import CustomButton from "@/components/navigation/CustomButton";
import React, { useState } from "react";

const History = () => {

  const [bought, setBought] = useState(false)

  return (
    <ScrollView>
      <View style={styles.containerItem}>
        <View style={styles.header}>
          <Text style={styles.tpara}>DruxAMB 😊</Text>
          <View style={styles.headerIcon}>
            <TabBarIcon name="notifications" style={{ color: "white" }} />
            <Link href="/settings">
              <TabBarIcon name="person-circle" style={{ color: "white" }} />
            </Link>
          </View>
        </View>
        <Text style={styles.tpara2}>Transaction History</Text>
        <View style={styles.btnContainer}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <CustomButton title="Sold" handlePress={() => setBought(false)} />
            <CustomButton title="Bought" handlePress={() => setBought(true)} />
          </View>
        </View>
        <Transaction bought={bought} />
      </View>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#23940c",
    paddingHorizontal: 12,
    paddingVertical: 35,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 65,
  },

  tpara: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  tpara2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginVertical: 30,
  },
  btnContainer: {
    backgroundColor: "#9BB3A0",
    padding: 10,
    borderRadius: 23
  }
});
