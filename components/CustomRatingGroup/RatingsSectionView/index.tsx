import { StyleSheet, Dimensions } from "react-native";

import { ProductProps } from "../../../interfaces/products/product.interface";
import CustomRatingGroup from "..";
import { CustomDivComponentProps } from "../../../types/components/custom-div-component.type";

export default function RatingsSection(
  props: CustomDivComponentProps<ProductProps>,
) {
  return (
    <div
      {...props}
      style={{
        ...styles.container,
        ...props.style,
      }}
    >
      <CustomRatingGroup
        cost={props.product_cost_rating!}
        quality={props.product_quality_rating!}
        shipment={props.product_shipment_rating!}
        label="Reseñas del producto"
      />
      <CustomRatingGroup
        cost={props.provider_cost_rating!}
        quality={props.provider_quality_rating!}
        shipment={props.provider_shipment_rating!}
        label="Reseñas del proveedor"
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "3%",
    padding: "2%",
    minHeight: 100,
  },
  ratingGroup: {
    flex: 1,
    minWidth: 250,
    maxWidth: "45%",
  },
  divider: {
    display: Dimensions.get("window").width >= 768 ? "flex" : "none",
  },
});
