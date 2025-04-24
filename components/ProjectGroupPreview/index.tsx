/* eslint-disable react-hooks/exhaustive-deps */
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { UseStore } from "../../context";
import ProjectPreview from "../ProjectPreview";
import { StoreActions } from "../../context/types";
import { ProjectProps } from "../ProjectPreview/interfaces";
import { getProjectsByUser } from "../../services/projects.service";

export default function ProjectGroupPreview({
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
}) {
  const { store, dispatch } = UseStore();
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const getUserProjects = async () => {
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
    const response = await getProjectsByUser(store.user.user_id);
    setProjects(response);
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: false });
  };

  useEffect(() => {
    getUserProjects();
  }, [store.user.user_id]);

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
      {projects.map((project: ProjectProps) => (
        <ProjectPreview key={project.project_id} {...project} />
      ))}
    </div>
  );
}
