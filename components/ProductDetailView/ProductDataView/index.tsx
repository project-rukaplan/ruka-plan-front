import RatingsSection from "@/components/CustomRatingGroup/RatingsSectionView";
import { Divider } from "react-native-paper";
import { Text, StyleSheet, Dimensions } from "react-native";

import { formatPrice } from "../../../utils/formatters/formatPrice";
import { ProductProps } from "../../../interfaces/products/product.interface";
import { CustomDivComponentProps } from "../../../types/components/custom-div-component.type";

export default function ProductDataView(
  props: CustomDivComponentProps<ProductProps>,
) {
  return (
    <div {...props} style={{ ...styles.container, ...props.style }}>
      <Text style={styles.title}>{props.product_name}</Text>
      <Text style={{ fontSize: 20 }}>{props.provider_name}</Text>
      <Divider />
      <RatingsSection {...props} />
      <Divider />
      <Text style={{ fontSize: 20 }}>
        Precio unitario: {formatPrice(props.product_price)}
      </Text>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    gap: 15,
    maxWidth: "100%",
    flex: 1,
  },
  title: {
    fontSize: Math.min(30, Dimensions.get("window").width * 0.06),
    fontWeight: "bold",
    color: "#5b3e31",
    textAlign: "left",
    marginTop: "4%",
  },
  subtitle: {
    fontSize: Math.min(20, Dimensions.get("window").width * 0.04),
    textAlign: "left",
  },
  price: {
    fontSize: Math.min(20, Dimensions.get("window").width * 0.04),
    textAlign: "left",
  },
});
