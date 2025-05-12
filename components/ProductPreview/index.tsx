import { StyleSheet } from "react-native";

import { ProductProps } from "../../interfaces/products/product.interface";
import { formatPrice } from "../../utils/formatters/formatPrice";

export default function ProductPreview({
  product_name,
  product_description,
  product_price,
}: ProductProps) {
  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h3>{product_name}</h3>
      </div>
      <h4>{product_description}</h4>
      <h4>Precio: {formatPrice(product_price)}</h4>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#B5C18E",
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
  titleContainer: {
    backgroundColor: "#B99470",
    borderRadius: 15,
    height: 50,
    textAlign: "left",
    padding: 15,
    color: "#FFFFFF",
  },
});
