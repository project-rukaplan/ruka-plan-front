import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, View } from "react-native";

import { UseStore } from "../../context";
import { ProjectProps } from "./interfaces";
import { StoreActions } from "../../context/types";
import { formatPrice } from "../../utils/formatters/formatPrice";
import { updateProjectProductQuantity } from "../../services/projects.service";
import { ProductProjectProps } from "../../interfaces/products/product-project.interface";

export default function ProductProjectView({
  product,
  project_id,
  reloadProject,
}: {
  product: ProductProjectProps;
  project_id: ProjectProps["project_id"];
  reloadProject: () => void;
}) {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const { store, dispatch } = UseStore();

  const updateProductQuantity = async () => {
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
    updateProjectProductQuantity(
      store.user.user_id,
      project_id,
      product.product_id,
      quantity,
    ).then(reloadProject);
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: false });
  };

  if (store.loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <div style={styles.container}>
      <p>{product.product_name}</p>
      <p>Precio unitario: {formatPrice(product.product_price)}</p>
      <div style={styles.buttonsContainer}>
        <label htmlFor="quantityInput">Cantidad: </label>
        <input
          id={"quantityInput"}
          type={"number"}
          value={quantity}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
        />
        {quantity !== product.quantity ? (
          <Button title={"Guardar cambios"} onPress={updateProductQuantity} />
        ) : null}
      </div>
      <p>Total: {formatPrice(product.product_price * quantity)} c/u</p>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 10,
    backgroundColor: "#F7DCB9",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
