import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
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
  const { store, dispatch, reloadUserProjects } = UseStore();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const requestProjectCreation = async () => {
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
    await createProject(store.user.user_id, projectName);
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
    gap: 25,
    margin: 25,
    padding: 15,
    width: "90%",
    maxWidth: 1000,
    minWidth: 350,
  },
  title: {
    fontSize: 24,
    color: "white",
    padding: 5,
  },
  titleContainer: {
    borderRadius: 35,
    backgroundColor: "#b99470",
    padding: 20,
    textAlign: "center",
    color: "white",
    marginBottom: 15,
  },
  inputLabel: {
    color: "#5b3e31",
    fontSize: 20,
  },
  inputContainer: {
    paddingHorizontal: 3,
    marginVertical: 15,
    minHeight: 90,
  },
});
