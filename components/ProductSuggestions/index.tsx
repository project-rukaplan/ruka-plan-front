import { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { Divider } from "react-native-paper";

import ProductPreview from "../ProductPreview";
import { ProductProps } from "../../interfaces/products/product.interface";
import { getProductsInSection } from "../../services/products.service";

export default function ProductSuggestions(product: ProductProps) {
  // --------------------
  // Note: This code is duplicated in the ProductsInSectionView, could be optimized
  const [localLoading, setLocalLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  const getProducts = async () => {
    setLocalLoading(true);

    const productsFound = await getProductsInSection(product.section_id);
    setProducts(productsFound);

    setLocalLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [product.section_id]);

  if (localLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  // -------------------

  return (
    <View style={styles.container}>
      <div style={styles.titleContainer}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Otras opciones:
        </Text>
      </div>
      <Divider />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductPreview {...item} />}
        keyExtractor={(item) => item.product_id.toString()}
        horizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "26%",
    backgroundColor: "#b4c18d",
  },
  titleContainer: {
    borderRadius: 30,
    backgroundColor: "#b99470",
    margin: 30,
    padding: 20,
    textAlign: "center",
    color: "white",
  },
});
