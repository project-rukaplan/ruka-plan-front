import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { ProjectProps } from "../../interfaces/projects/projects.interface";
import { ProductProjectProps } from "../../interfaces/products/product-project.interface";
import { formatPrice } from "../../utils/formatters/formatPrice";

export default function ProjectPreview({
  project_name,
  products,
  project_id,
}: ProjectProps) {
  const [projectTotalCost, setProjectTotalCost] = useState<number>(0);
  const router = useRouter();

  const calculateTotalCost = () => {
    const totalCost = products.reduce(
      (acc: number, product: ProductProjectProps) =>
        acc + product.product_price * product.quantity,
      0,
    );
    setProjectTotalCost(totalCost);
  };

  useEffect(() => {
    calculateTotalCost();
  }, [products]);

  const navigateToProjectDetail = () => {
    router.navigate(`/(views)/projects/${project_id}`);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToProjectDetail}
    >
      <Text style={styles.headerContainer}>{project_name}</Text>
      <Text
        style={{ ...styles.headerContainer, backgroundColor: "transparent" }}
      >
        Costo Total: {formatPrice(projectTotalCost)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#d0d3c9",
    borderRadius: 15,
    margin: 10,
  },
  headerContainer: {
    backgroundColor: "#b4c18d",
    fontWeight: "bold",
    margin: 30,
    borderRadius: 15,
    textAlign: "center",
    padding: 15,
    fontSize: 20,
  },
});
