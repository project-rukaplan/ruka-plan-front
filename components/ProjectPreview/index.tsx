import { StyleSheet } from "react-native";
import { ProjectProps } from "./interfaces";
import { formatPrice } from "../../utils/formatters/formatPrice";
import { ProductProjectProps } from "../../interfaces/products/product-project.interface";
import UpdateQuantityButtons from "./UpdateQuantityButtons.tsx";

export default function ProjectPreview({
  project_name,
  products,
}: ProjectProps) {
  return (
    <div style={styles.container}>
      <p style={styles.projectHeaderContainer}>{project_name}</p>
      {products.map((product: ProductProjectProps) => (
        <div key={product.product_id}>
          <p>{product.product_name}</p>
          <p>{formatPrice(product.product_price)}</p>
          <UpdateQuantityButtons product={product} />
        </div>
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
  },
});
