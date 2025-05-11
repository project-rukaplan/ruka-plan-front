import { Divider } from "@rneui/themed";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import { ProductProps } from "../../interfaces/products/product.interface";
import ProductSuggestions from "../ProductSuggestions";
import AddProductToProjectButton from "./AddProductToProjectButton";
import ProductDataView from "./ProductDataView";

export default function ProductDetailView({
  product_id,
}: {
  product_id: number;
}) {
  const mockProduct: ProductProps = {
    product_id: 1,
    product_name: "Producto de prueba",
    product_price: 100,
    section_id: 1,
    product_provider_name: "Proveedor de prueba",
    product_description: "Descripcion de prueba",
    product_detailed_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    product_cost_rating: 4,
    product_quality_rating: 5,
    product_shipment_rating: 3,
    provider_cost_rating: 2,
    provider_quality_rating: 4,
    provider_shipment_rating: 1,
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={{ width: "70%" }}>
        {/* Change this product to the one fetched in the API */}
        <ProductDataView {...mockProduct} />
        <AddProductToProjectButton {...mockProduct} />
        <Divider />
        <div style={styles.descriptionContainer}>
          <Text style={{ fontSize: 18 }}>
            {mockProduct.product_detailed_description}
          </Text>
        </div>
      </View>
      <ProductSuggestions {...mockProduct} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    backgroundColor: "#e6d2b8",
  },
  descriptionContainer: {
    backgroundColor: "#b4c18d",
    borderRadius: 15,
    margin: 30,
    marginTop: "3%",
    marginLeft: "3%",
    padding: 15,
    textAlign: "left",
  },
});
