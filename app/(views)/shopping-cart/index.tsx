// eslint-disable-next-line import/no-unresolved
import ProjectGroupPreview from "@/components/ProjectGroupPreview";
import { StyleSheet } from "react-native";

export default function ShoppingCartScreen() {
  return (
    <div style={styles.mainContainer}>
      <ProjectGroupPreview />;
      <div style={styles.buttonContainer}>
        {/* Definir que hacen los botones */}
        <button>Cotizacion</button>
        <button>Ir a pagar</button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: { display: "flex", flexDirection: "row" },
  buttonContainer: { display: "flex", flexDirection: "column" },
});
