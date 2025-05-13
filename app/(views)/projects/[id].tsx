import { Divider } from "@rneui/themed";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

import { UseStore } from "../../../context";
import { formatPrice } from "../../../utils/formatters/formatPrice";
import { ProjectProps } from "../../../interfaces/projects/projects.interface";
import ProductDataView from "../../../components/ProductDetailView/ProductDataView";
import UpdateProductQuantityInput from "@/components/ProjectPreview/UpdateProductQuantityInput";
import CustomLoading from "@/components/CustomLoading";

export default function ProjectDetail() {
  const { id } = useLocalSearchParams();
  const { store } = UseStore();

  const getProjectFromStore = (): ProjectProps => {
    const projectData = store.user_projects.find(
      (project) => project.project_id === Number(id),
    );
    if (projectData) return projectData;
    return {} as ProjectProps;
  };

  const [project, setProject] = useState<ProjectProps>(getProjectFromStore());
  const [totalProjectCost, setTotalProjectCost] = useState<number>(0);

  useEffect(() => {
    setProject(getProjectFromStore());
  }, [id, store.user_projects]);

  useEffect(() => {
    if (!project.products) return;
    setTotalProjectCost(
      // FIX THIS: this should come from the project data
      project.products.reduce(
        (sum, product) =>
          sum +
          parseFloat(product.product_price as unknown as string) *
            product.quantity,
        0,
      ),
    );
  }, [project]);

  if (!project || !project?.products) return <CustomLoading />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{project.project_name}</Text>
      <Text style={styles.totalCost}>
        Costo total del proyecto: {formatPrice(totalProjectCost)}
      </Text>
      <Divider />
      <Text style={{ ...styles.title, marginTop: 20 }}>
        Productos en el proyecto
      </Text>
      <View style={styles.productsContainer}>
        {project?.products?.length !== 0 ? (
          project.products.map((product) => (
            <View key={product.product_id} style={styles.productCard}>
              <ProductDataView {...product} />
              <Divider style={{ margin: 10 }} />
              <UpdateProductQuantityInput
                {...product}
                project_id={parseInt(id as string)}
              />
            </View>
          ))
        ) : (
          <Text style={styles.emptyProjectText}>
            No hay productos agregados en este proyecto
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6d2b8",
    padding: 15,
  },
  title: {
    fontSize: Dimensions.get("window").width < 768 ? 20 : 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  productsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    gap: 15,
    padding: 10,
  },
  productCard: {
    backgroundColor: "#D0D3C9",
    borderRadius: 10,
    padding: 10,
    width:
      Dimensions.get("window").width < 768
        ? "100%"
        : Dimensions.get("window").width < 1024
          ? "47%"
          : "31%",
    minWidth: 300,
  },
  totalCost: {
    fontSize: Dimensions.get("window").width < 768 ? 16 : 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: "#2b342d",
  },
  emptyProjectText: {
    fontSize: Dimensions.get("window").width < 768 ? 16 : 20,
    fontWeight: "500",
    textAlign: "center",
    color: "#666666",
    width: "100%",
    marginTop: 10,
  },
});
