import { ProductProjectProps } from "../../interfaces/products/product-project.interface";

export default function UpdateQuantityButtons({
  product,
}: {
  product: ProductProjectProps;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button>+</button>
      <p>{product.quantity}</p>
      <button>-</button>
    </div>
  );
}
