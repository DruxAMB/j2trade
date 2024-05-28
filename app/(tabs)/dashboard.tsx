import { ScrollViewBase, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import CryptoSection from "@/components/CryptoSection";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.tpara}>DruxAMB 😊</Text>
            <View style={styles.headerIcon}>
              <TabBarIcon name="notifications" style={{ color: "white" }} />
              <Link href="/settings">
                <TabBarIcon name="person-circle" style={{ color: "white" }} />
              </Link>
            </View>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.tpara2}>
              What would you like to trade today?
            </Text>
          </View>
        </View>
        <CryptoSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  containerItem: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "#18ba30",
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
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    marginTop: 30,
  },
});
