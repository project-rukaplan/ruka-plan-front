import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { Button, Divider, Overlay } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";

import { ProductProps } from "../../../interfaces/products/product.interface";
import { formatPrice } from "../../../utils/formatters/formatPrice";
import { UseStore } from "../../../context";

export default function AddProductToProjectButton(product: ProductProps) {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState<number>(0);
  const { store, reloadUserProjects } = UseStore();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const addProductToProject = async () => {
    // TODO: Fetch the update of the project with the new product
    toggleOverlay();
    reloadUserProjects();
  };

  return (
    <div style={{ margin: 20, marginTop: -10 }}>
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
              <Picker>
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
              {formatPrice(product.product_price * quantity)}
            </Text>
          </div>
          <Button
            title={"Agregar"}
            buttonStyle={styles.button}
            onPress={addProductToProject}
          />
        </View>
      </Overlay>
      <Button
        title={"Agregar a proyecto"}
        color="#b3c18c"
        accessibilityLabel="Agregar a proyecto"
        onPress={toggleOverlay}
        buttonStyle={styles.button}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  titleContainer: {
    borderRadius: 30,
    backgroundColor: "#b99470",
    padding: 10,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "#b3c18c",
    borderRadius: 30,
    padding: 10,
    textAlign: "center",
    color: "white",
  },
});
