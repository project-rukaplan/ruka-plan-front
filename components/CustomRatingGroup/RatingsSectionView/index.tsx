import { Divider } from "@rneui/themed";
import { ProductProps } from "../../../interfaces/products/product.interface";
import CustomRatingGroup from "..";

export default function RatingsSection({ product }: { product: ProductProps }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <CustomRatingGroup
        cost={product.product_cost_rating!}
        quality={product.product_quality_rating!}
        shipment={product.product_shipment_rating!}
        label="Reseñas del producto"
      />
      <Divider orientation="vertical" />
      <CustomRatingGroup
        cost={product.provider_cost_rating!}
        quality={product.provider_quality_rating!}
        shipment={product.provider_shipment_rating!}
        label="Reseñas del proveedor"
      />
    </div>
  );
}
