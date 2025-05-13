import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Input, Overlay } from "@rneui/themed";

import { UseStore } from "../../../context";
import { ButtonStyles } from "../../../styles/button.styles";
import { CustomDivComponentProps } from "../../../types/components/custom-div-component.type";
import { StoreActions } from "../../../context/types";
import { createProject } from "../../../services/projects.service";
import CustomLoading from "@/components/CustomLoading";

export default function CreateProjectButton(
  props: CustomDivComponentProps<{}>,
) {
  const [visible, setVisible] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const { store, dispatch, reloadUserProjects } = UseStore();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const requestProjectCreation = async () => {
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
    await createProject(store.user.user_id, projectName, projectDescription);
    reloadUserProjects();
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: false });
    toggleOverlay();
  };

  if (store.loading) return <CustomLoading />;

  return (
    <div {...props} style={{ width: "30%", ...props.style }}>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.container}>
          <div style={styles.titleContainer}>
            <Text style={styles.title}>Crear nuevo proyecto</Text>
          </div>
          <Input
            label="Nombre"
            placeholder="Ingresa el nombre de tu nuevo proyecto"
            value={projectName}
            onChangeText={setProjectName}
            labelStyle={styles.inputLabel}
            containerStyle={styles.inputContainer}
          />
          <Input
            label="Descripcion"
            placeholder="Ingresa la descripcion de tu nuevo proyecto"
            value={projectDescription}
            onChangeText={setProjectDescription}
            labelStyle={styles.inputLabel}
            containerStyle={styles.inputContainer}
          />
          <Button
            title={"Crear"}
            buttonStyle={ButtonStyles.primaryButton}
            onPress={requestProjectCreation}
          />
        </View>
      </Overlay>
      <Button
        title={"Crear nuevo proyecto"}
        color="#b3c18c"
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
    gap: 30,
    padding: 40,
    width: "100%",
    maxWidth: 1200,
    minWidth: 500,
    backgroundColor: "#faf6f1",
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    color: "white",
    padding: 10,
    fontWeight: "600",
  },
  titleContainer: {
    borderRadius: 35,
    backgroundColor: "#b99470",
    padding: 25,
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputLabel: {
    color: "#5b3e31",
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 5,
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
    minHeight: 100,
  },
});
