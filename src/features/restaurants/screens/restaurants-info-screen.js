/* eslint-disable prettier/prettier */
import React from "react";
import { Searchbar } from "react-native-paper";
import { View, StyleSheet, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "react-native";
import RestaurantInfoCard from "../components/restaurants-info-card.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
