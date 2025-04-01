/* eslint-disable import/no-unresolved */
import { Avatar } from "react-native-paper";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ProjectGroupPreview from "@/components/ProjectGroupPreview";

export default function ProfileScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <div style={styles.user_info}>
          <Avatar.Icon size={240} icon={"account"} />
          <div>
            <p>Nombre de usuario: </p>
            <p>Correo del usuario: </p>
          </div>
        </div>
      </SafeAreaView>

      <SafeAreaView>
        <h3>Proyectos actuales:</h3>
        <ProjectGroupPreview orientation="horizontal"/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  user_info: {
    padding: 30,
    margin: 40,
    display: "flex",
    backgroundColor: "#b4c18d",
    borderRadius: 20,
  },
});
