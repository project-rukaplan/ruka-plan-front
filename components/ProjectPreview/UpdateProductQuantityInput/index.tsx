import { useState } from "react";
import { Button } from "@rneui/themed";
import { Text, StyleSheet } from "react-native";

import { CustomDivComponentProps } from "../../../types/components/custom-div-component.type";
import { ProductProjectProps } from "../../../interfaces/products/product-project.interface";
import { UseStore } from "../../../context";
import { StoreActions } from "../../../context/types";
import { updateProjectProductQuantity } from "../../../services/projects.service";
import { formatPrice } from "../../../utils/formatters/formatPrice";
import { ButtonStyles } from "../../../styles/button.styles";
import CustomLoading from "@/components/CustomLoading";

export default function UpdateProductQuantityInput(
  props: CustomDivComponentProps<ProductProjectProps> & {
    project_id: number;
  },
) {
  const [newQuantity, setNewQuantity] = useState<number>(props.quantity);
  const [showUpdateButton, setShowUpdateButton] = useState<boolean>(false);
  const { store, dispatch, reloadUserProjects } = UseStore();

  const updateProductQuantity = async () => {
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
    updateProjectProductQuantity(
      store.user.user_id,
      props.project_id,
      props.product_id,
      newQuantity,
    ).then(reloadUserProjects);
    setShowUpdateButton(false);
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: false });
  };

  if (store.loading) return <CustomLoading />;

  return (
    <div style={styles.container}>
      <div style={styles.buttonsContainer}>
        <Text style={{ fontSize: 20 }}>Cantidad a comprar:</Text>
        <input
          id={"quantityInput"}
          type={"number"}
          value={newQuantity}
          onChange={(event) => {
            setNewQuantity(parseInt(event.target.value));
            setShowUpdateButton(true);
          }}
        />
        {showUpdateButton ? (
          <Button
            title={"Guardar cambios"}
            onPress={updateProductQuantity}
            buttonStyle={ButtonStyles.primaryButton}
          />
        ) : null}
      </div>
      <Text style={{ fontSize: 20 }}>
        Costo total en el proyecto:{" "}
        {formatPrice(props.product_price * newQuantity)}
      </Text>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    gap: 20,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
