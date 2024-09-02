import { View, StyleSheet } from "react-native";
import React, { useState } from "react";

import { onBording } from "../constants/index";

const Pagination = ({
  selectedScreenIndex,
}: {
  selectedScreenIndex: number;
}) => {
  return (
    <View style={styles.paginationContainer}>
      {onBording.map((item) => (
        <View
          style={[
            styles.paginationItem,
            {
              backgroundColor:
                item.id === selectedScreenIndex ? "#94E3A9" : "#dddce0",
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    marginHorizontal: 18,
    paddingTop: 20,
  },
  paginationItem: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#94E3A9",
    marginHorizontal: 5,
  },
});
