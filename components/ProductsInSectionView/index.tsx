import { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import ProductPreview from "@/components/ProductPreview";
import { getProductsInSection } from "../../services/products.service";
import { ProductProps } from "../../interfaces/products/product.interface";

export default function ProductsInSectionView({
  section_id,
}: {
  section_id: number;
}) {
  const [localLoading, setLocalLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  const getProducts = async () => {
    setLocalLoading(true);

    const productsFound = await getProductsInSection(section_id);
    setProducts(productsFound);

    setLocalLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [section_id]);

  if (localLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {products.length === 0 ? (
        <h1>Esta seccion no tiene productos</h1>
      ) : (
        products.map((product: ProductProps) => <ProductPreview {...product} />)
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
});
