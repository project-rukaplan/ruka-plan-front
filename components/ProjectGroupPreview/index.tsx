import { ActivityIndicator, StyleSheet, View } from "react-native";

import { UseStore } from "../../context";
import ProjectPreview from "../ProjectPreview";
import { ProjectProps } from "../ProjectPreview/interfaces";

export default function ProjectGroupPreview({
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
}) {
  const { store, reloadUserProjects } = UseStore();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: orientation === "vertical" ? "column" : "row",
    },
  });

  if (store.loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <div style={styles.container}>
      {store.user_projects.map((project: ProjectProps) => (
        <ProjectPreview
          key={project.project_id}
          {...project}
        />
      ))}
    </div>
  );
}
