import { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import { ProductProps } from "../../interfaces/products/product.interface";
import ProductSuggestions from "../ProductSuggestions";
import AddProductToProjectButton from "./AddProductToProjectButton";
import ProductDataView from "./ProductDataView";
import { getProductById } from "../../services/products.service";
import { UseStore } from "../../context";
import { StoreActions } from "../../context/types";
import CustomLoading from "../CustomLoading";

export default function ProductDetailView({
  product_id,
}: {
  product_id: number;
}) {
  const { store, dispatch } = UseStore();
  const [product, setProduct] = useState<ProductProps>();

  const getProductData = async () => {
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
    const response: ProductProps = await getProductById(product_id);
    setProduct(response);
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: false });
  };

  useEffect(() => {
    getProductData();
  }, [product_id]);

  if (store.loading || product === undefined) return <CustomLoading />;

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={{ width: "70%" }}>
        <ProductDataView {...product!} style={{ margin: 30 }} />
        <AddProductToProjectButton {...product!} />
        <Divider />
        <div style={styles.descriptionContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Detalles del producto:
          </Text>
          <br />
          <br />
          <Text style={{ fontSize: 18 }}>
            {product!.product__detailed_description}
          </Text>
        </div>
      </View>
      <ProductSuggestions {...product!} />
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
