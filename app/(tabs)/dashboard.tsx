import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import CryptoSection from "@/components/CryptoSection";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const Dashboard = () => {
  return (
      <ScrollView >
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
          <Text style={styles.tpara2}>What would you like to trade today?</Text>
          <CryptoSection />
        </View>
      </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#18ba30",
    padding: 12,
    position: "relative",
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
    textAlign: "center",
    marginVertical: 30,
  },
});
