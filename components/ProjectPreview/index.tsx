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
    <div style={wrapperStyle}>
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
    </div>
  );
}

const wrapperStyle = {
  border: "5px solid #B99470", 
  borderRadius: "20px",
  padding: "10px",
  margin: "15px",
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 2,

  },
  projectHeaderContainer: {
    backgroundColor: "#b4c18d",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    height: 50,
    textAlign: "center",
    padding: 40,
    lineHeight: "50px", 
    fontSize: "27px",
    fontWeight: "bold", 
    color: "#FFFFFF",
},
};
