import { StyleSheet } from "react-native";
import { ProjectProps } from "../ProjectPreview/interfaces";
import ProjectPreview from "../ProjectPreview";

export default function ProjectGroupPreview() {
  // Esto viene de una llamada al backend
  const currentProjects: ProjectProps[] = [
    {
      project_id: 1,
      project_name: "Remodelacion Cocina",
      products: [
        {
          product_id: 1,
          product_name: "Micro cemento gris",
          product_price: 100000,
          product_provider_name: "Homecenter",
          product_quantity: 50,
        },
      ],
    },
    {
      project_id: 2,
      project_name: "Casa de campo",
      products: [
        {
          product_id: 1,
          product_name: "Micro cemento gris",
          product_price: 100,
          product_provider_name: "Homecenter",
          product_quantity: 50,
        },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      {currentProjects.map((project: ProjectProps) => (
        <ProjectPreview key={project.project_id} {...project} />
      ))}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
