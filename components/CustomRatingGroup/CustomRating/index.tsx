import React from "react";
import { AirbnbRating } from "@rneui/themed";
import { StyleSheet, Text } from "react-native";
import { CustomDivComponentProps } from "../../../types/components/custom-div-component.type";

export default function CustomRating({
  value,
  label,
  ...props
}: CustomDivComponentProps<{
  value: number;
  label: string;
}>) {
  return (
    <div {...props} style={{ ...styles.container, ...props.style }}>
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
