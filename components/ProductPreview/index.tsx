import { useRouter } from "expo-router";
import { Divider } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { ProductProps } from "../../interfaces/products/product.interface";
import { formatPrice } from "../../utils/formatters/formatPrice";
import CustomRatingGroup from "../CustomRatingGroup";

export default function ProductPreview({
  product_id,
  product_name,
  product_description,
  product_price,
  product_cost_rating,
  product_quality_rating,
  product_shipment_rating,
}: ProductProps) {
  const router = useRouter();

  const navigateToProductDetail = () => {
    router.navigate(`/(views)/products/${product_id}`);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToProductDetail}
    >
      <div style={styles.titleContainer}>
        <Text style={{ ...styles.mainTitleStyle, fontSize: 20 }}>
          {product_name}
        </Text>
      </div>
      <Text style={{ fontSize: 15 }}>{product_description}</Text>

      <Divider />
      <CustomRatingGroup
        cost={product_cost_rating!}
        quality={product_quality_rating!}
        shipment={product_shipment_rating!}
      />
      <Divider />
      <Text style={styles.mainTitleStyle}>
        Precio unitario: {formatPrice(product_price)}
      </Text>
    </TouchableOpacity>
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
    gap: 15,
  },
  titleContainer: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#b4c18d",
    borderRadius: 15,
    textAlign: "center",
    padding: 10,
  },
  mainTitleStyle: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#B99470",
    borderRadius: 15,
    height: 50,
    textAlign: "left",
    padding: 15,
    color: "#FFFFFF",
  },
});
