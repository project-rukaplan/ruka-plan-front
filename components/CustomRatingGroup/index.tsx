import { StyleSheet, Text } from "react-native";

import CustomRating from "./CustomRating";

export default function CustomRatingGroup({
  cost,
  quality,
  shipment,
  label,
}: {
  cost: number;
  quality: number;
  shipment: number;
  label?: string;
}) {
  return (
    <div style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <CustomRating value={quality} label="Calidad" />
      <CustomRating value={cost} label="Costo" />
      <CustomRating value={shipment} label="Tiempo de entrega" />
    </div>
  );
}
const styles = StyleSheet.create({
  container: { display: "flex", flexDirection: "column", gap: 10 },
  label: { fontSize: 20, fontWeight: "bold" },
});
