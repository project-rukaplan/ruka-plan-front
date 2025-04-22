/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UseStore } from "../../../context";
import { StoreActions } from "../../../context/types";
import { getAllSections } from "../../../services/sections.service";
import { SectionProps } from "../../../interfaces/sections/section.interface";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState<string>();
  const { store, dispatch } = UseStore();

  const SectionsImagesMap: { [key: number]: string } = {
    1: require("../../../assets/images/estructura.png"),
    2: require("../../../assets/images/acabados.png"),
    3: require("../../../assets/images/carpinteria.png"),
    4: require("../../../assets/images/adhesivos.png"),
    5: require("../../../assets/images/conectividad.png"),
    6: require("../../../assets/images/maquinaria.png"),
    7: require("../../../assets/images/obra_negra.png"),
  };

  const [sections, setSections] = useState<({ image: any } & SectionProps)[]>(
    [],
  );

  const getSections = async () => {
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
    const response = await getAllSections();
    let finalSections = response.map((section: SectionProps) => {
      let image = SectionsImagesMap[section.section_id as number];

      if (image === undefined) {
        image = SectionsImagesMap[1];
      }

      return { ...section, image };
    });
    setSections(finalSections as any); // Fix this
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: false });
  };

  useEffect(() => {
    getSections();
  }, []);

  if (store.loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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
          {sections.map((section: { image: any } & SectionProps) => {
            return (
              <TouchableOpacity
                key={section.section_id}
                style={styles.sectionButton}
              >
                <Image source={section.image} style={styles.sectionImage} />
                <Text style={styles.sectionText}>{section.section_name}</Text>
              </TouchableOpacity>
            );
          })}
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
    fontSize: 22,
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
