import React from "react";
import { AirbnbRating } from "@rneui/themed";
import { StyleSheet, Text } from "react-native";

export default function CustomRating({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <AirbnbRating
        defaultRating={value}
        isDisabled={true}
        size={20}
        showRating={false}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
  },
  label: {
    fontSize: 16,
  },
});
