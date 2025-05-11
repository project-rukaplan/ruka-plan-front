import RatingsSection from "@/components/CustomRatingGroup/RatingsSectionView";
import { Divider } from "react-native-paper";
import { Text, StyleSheet } from "react-native";

import { formatPrice } from "../../../utils/formatters/formatPrice";
import { ProductProps } from "../../../interfaces/products/product.interface";

export default function ProductDataView(product: ProductProps) {
  return (
    <div style={styles.container}>
      <Text style={styles.title}>{product.product_name}</Text>
      <Text style={{ fontSize: 20 }}>Nombre proveedor</Text>
      <Divider />
      {/* Change this product to the one fetched in the API */}
      <RatingsSection product={product} />
      <Divider />
      <Text style={{ fontSize: 30 }}>
        Precio unitario: {formatPrice(product.product_price)}
      </Text>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    margin: 50,
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5b3e31",
    textAlign: "left",
    marginTop: 50,
  },
});
