import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { Button, Divider, Overlay } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";

import { ProductProps } from "../../../interfaces/products/product.interface";
import { formatPrice } from "../../../utils/formatters/formatPrice";
import { UseStore } from "../../../context";
import { CustomDivComponentProps } from "../../../types/components/custom-div-component.type";
import { ButtonStyles } from "../../../styles/button.styles";
import { addProductToProject } from "../../../services/projects.service";
import { StoreActions } from "../../../context/types";

export default function AddProductToProjectButton(
  props: CustomDivComponentProps<ProductProps>,
) {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [selectedProjectId, setSelectedProjectId] = useState<number>();
  const { store, dispatch, reloadUserProjects } = UseStore();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const executeAddProduct = async () => {
    if (selectedProjectId) {
      dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
      addProductToProject(props.product_id, selectedProjectId!, quantity);
      reloadUserProjects();
      dispatch({ type: StoreActions.UPDATE_LOADING, payload: false });
      toggleOverlay();
    }
  };

  return (
    <div {...props} style={{ margin: 20, ...props.style }}>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={{ ...styles.container, width: 600 }}>
          <div style={styles.titleContainer}>
            <Text style={styles.title}>Agregar a proyecto</Text>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div style={styles.container}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                Selecciona un proyecto:
              </Text>
              <Picker
                onValueChange={(itemValue: number) => {
                  setSelectedProjectId(itemValue);
                }}
              >
                {store.user_projects.map((project) => (
                  <Picker.Item
                    key={project.project_id}
                    label={project.project_name}
                    value={project.project_id}
                  />
                ))}
              </Picker>
            </div>
            <Divider orientation="vertical" />
            <div style={styles.container}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                Ingresa la cantidad:
              </Text>
              <input
                id={"quantityInput"}
                type={"number"}
                value={quantity}
                onChange={(event) => setQuantity(parseInt(event.target.value))}
              />
            </div>
          </div>
          <Divider />
          <div style={styles.container}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              Costo total en el proyecto:{" "}
              {formatPrice(props.product_price * quantity)}
            </Text>
          </div>
          <Button
            title={"Agregar"}
            buttonStyle={ButtonStyles.primaryButton}
            onPress={executeAddProduct}
          />
        </View>
      </Overlay>
      <Button
        title={"Agregar a proyecto"}
        color="#b3c18c"
        accessibilityLabel="Agregar a proyecto"
        onPress={toggleOverlay}
        buttonStyle={ButtonStyles.primaryButton}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  titleContainer: {
    borderRadius: 30,
    backgroundColor: "#b99470",
    padding: 10,
    textAlign: "center",
    color: "black",
  },
});
