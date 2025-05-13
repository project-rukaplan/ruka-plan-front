import { StyleSheet } from "react-native";

import { UseStore } from "../../context";
import ProjectPreview from "../ProjectPreview";
import { ProjectProps } from "../../interfaces/projects/projects.interface";
import CustomLoading from "../CustomLoading";

export default function ProjectGroupPreview({
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
}) {
  const { store } = UseStore();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: orientation === "vertical" ? "column" : "row",
      gap: 10,
    },
  });

  if (store.loading) return <CustomLoading />;

  return (
    <div style={styles.container}>
      {store.user_projects.map((project: ProjectProps) => (
        <ProjectPreview key={project.project_id} {...project} />
      ))}
    </div>
  );
}
