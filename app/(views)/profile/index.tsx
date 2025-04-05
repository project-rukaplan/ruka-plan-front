import { Avatar } from "react-native-paper";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ProjectGroupPreview from "@/components/ProjectGroupPreview";

export default function ProfileScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.full_background}>
        <SafeAreaView style={styles.screen_background}>
          <div style={styles.user_info}>
            <Avatar.Icon size={240} icon={"account"} />
            <div style={{ marginLeft: 40 }}>
              <p>Nombre de usuario: </p>
              <p>Correo del usuario: </p>
            </div>
          </div>
        </SafeAreaView>

        <SafeAreaView style={styles.projects_section_background}>
          <View style={styles.projects_container}>
            <h3 style={{ fontSize: 37, marginBottom: 60 }}>Proyectos actuales:</h3> {}
            <ProjectGroupPreview orientation="horizontal" />
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  full_background: {
    flex: 1,
    backgroundColor: "#F7DCB9",
  },
  screen_background: {
    backgroundColor: "#F7DCB9",
  },
  projects_section_background: {
    backgroundColor: "#F7DCB9",
  },
  projects_container: {
    marginHorizontal: 80,
    marginVertical: 80,
  },
  user_info: {
    padding: 30,
    margin: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#b4c18d",
    borderRadius: 20,
    fontSize: 27,
  },
});
