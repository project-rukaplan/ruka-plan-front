import { StyleSheet } from "react-native";
import { ProjectProps } from "./interfaces";
import { ProductProjectProps } from "../../interfaces/products/product-project.interface";
import ProductProjectView from "./ProductProjectView.tsx";

export default function ProjectPreview({
  project_name,
  products,
  project_id,
  reloadProject,
}: ProjectProps & { reloadProject: () => void }) {
  return (
    <div style={styles.container}>
      <p style={styles.projectHeaderContainer}>{project_name}</p>
      {products.map((product: ProductProjectProps) => (
        <ProductProjectView
          key={product.product_id}
          project_id={project_id}
          product={product}
          reloadProject={reloadProject}
        />
      ))}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  projectHeaderContainer: {
    backgroundColor: "#b4c18d",
    marginLeft: 300,
    marginRight: 300,
    borderRadius: 15,
    height: 50,
    textAlign: "left",
    padding: 15,
  },
});
