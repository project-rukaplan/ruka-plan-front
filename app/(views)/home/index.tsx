/* eslint-disable import/no-unresolved */
import { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SectionButton from "@/components/SectionButton";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState<string>();

  // Esto viene del backend
  const sections: { section_id: number; section_name: string }[] = [
    { section_id: 1, section_name: "Estructura" },
    { section_id: 2, section_name: "Acabados" },
    { section_id: 3, section_name: "Carpinteria" },
    { section_id: 4, section_name: "Adhesivos" },
    { section_id: 5, section_name: "Conectividad" },
    { section_id: 6, section_name: "Maquinaria" },
    { section_id: 6, section_name: "Obra negra" },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          value={searchText}
          style={styles.input}
          onChangeText={setSearchText}
          placeholder="Busca aqui tus productos"
        />
      </SafeAreaView>

      <SafeAreaView style={{ display: "flex", flexDirection: "row" }}>
        {sections.map(
          (section: { section_id: number; section_name: string }) => (
            <TouchableOpacity style={{ margin: 10, flex: 1 }}>
              {/* Agregar iconos y estilos */}
              <SectionButton
                key={section.section_id}
                title={section.section_name}
              />
            </TouchableOpacity>
          ),
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
