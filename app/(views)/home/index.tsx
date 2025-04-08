/* eslint-disable import/no-unresolved */ 
import { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SectionButton from "@/components/SectionButton";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState<string>();

  // Esto viene del backend
  const sections: { section_id: number; section_name: string; image: string }[] = [
    { section_id: 1, section_name: "Estructura", image: require("../../../assets/images/estructura.png") },
    { section_id: 2, section_name: "Acabados", image: require("../../../assets/images/acabados.png") },
    { section_id: 3, section_name: "Carpintería", image: require("../../../assets/images/carpinteria.png") },
    { section_id: 4, section_name: "Adhesivos", image: require("../../../assets/images/adhesivos.png") },
    { section_id: 5, section_name: "Conectividad", image: require("../../../assets/images/conectividad.png") },
    { section_id: 6, section_name: "Maquinaria", image: require("../../../assets/images/maquinaria.png") },
    { section_id: 7, section_name: "Obra negra", image: require("../../../assets/images/obra_negra.png") },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          value={searchText}
          style={styles.input}
          onChangeText={setSearchText}
          placeholder="Busca aquí los productos que necesitas"
          placeholderTextColor="#5b7139"
        />
        <View style={styles.sectionContainer}>
          {sections.map((section) => (
            <TouchableOpacity key={section.section_id} style={styles.sectionButton}>
              <Image source={section.image} style={styles.sectionImage} />
              <Text style={styles.sectionText}>{section.section_name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7d2b8",
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    width: "90%",
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#5b7139",
    paddingHorizontal: 15,
    backgroundColor: "#c7d3a4",
    color: "#5b7139",
    fontSize: 22
  },
  sectionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 40,
  },
  sectionButton: {
    alignItems: "center",
    margin: 10,
  },
  sectionImage: {
    width: 130,
    height: 130,
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 22,
    color: "#5b3e31",
  },
});