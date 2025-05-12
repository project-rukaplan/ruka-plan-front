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
  mainContainer: { display: "flex", flexDirection: "row",   backgroundColor: "#F7DCB9", padding: 40,  minHeight: "100%", width: "100%",},
  buttonContainer: { display: "flex", flexDirection: "column",  backgroundColor: "#F7DCB9",  },


});

