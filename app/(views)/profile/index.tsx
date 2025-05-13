import { Avatar } from "react-native-paper";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ProjectGroupPreview from "@/components/ProjectGroupPreview";
import { UseStore } from "../../../context";
import CreateProjectButton from "@/components/ProjectGroupPreview/CreateProjectButton";

export default function ProfileScreen() {
  const { store } = UseStore();
  return (
    <SafeAreaProvider>
      <View style={styles.full_background}>
        <SafeAreaView style={styles.screen_background}>
          <div style={styles.user_info}>
            <Avatar.Icon size={240} icon={"account"} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 40,
                marginLeft: 40,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Nombre de usuario: {store.user.user_name}{" "}
                {store.user.user_lastname}
              </Text>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Correo del usuario: {store.user.user_email}{" "}
              </Text>
            </div>
          </div>
        </SafeAreaView>

        <SafeAreaView style={styles.projects_section_background}>
          <View style={styles.projects_container}>
            <div>
              <CreateProjectButton style={{ marginBottom: 30 }} />
            </div>
            <Text
              style={{ fontSize: 47, marginBottom: 60, color: "#B99470", fontWeight: "bold"  }}
            >
              Proyectos actuales:
            </Text>
            <ProjectGroupPreview orientation="horizontal" />
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  full_background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
    height: "100%",
    width: "100%",
    backgroundColor: "#F7DCB9",
  },
  screen_background: {
    backgroundColor: "#F7DCB9",
  },
  projects_section_background: {
    backgroundColor: "#F7DCB9",
  },
  projects_container: {
    marginHorizontal: 40,
    marginBottom: 80,
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
