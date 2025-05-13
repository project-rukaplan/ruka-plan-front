import { Dimensions, StyleSheet, Text } from "react-native";

import CustomRating from "./CustomRating";
import { CustomDivComponentProps } from "../../types/components/custom-div-component.type";

export default function CustomRatingGroup({
  cost,
  quality,
  shipment,
  label,
  ...props
}: CustomDivComponentProps<{
  cost: number;
  quality: number;
  shipment: number;
  label?: string;
}>) {
  return (
    <div {...props} style={{ ...styles.container, ...props.style }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <CustomRating value={quality} label="Calidad" />
      <CustomRating value={cost} label="Costo" />
      <CustomRating value={shipment} label="Entrega" />
    </div>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2%",
    padding: "2%",
    minWidth: 250,
    maxWidth: "100%",
    flex: 1,
  },
  label: {
    fontSize: Math.min(20, Dimensions.get("window").width * 0.04),
    fontWeight: "bold",
    marginBottom: "3%",
    textAlign: "center",
  },
});
