import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { CustomDivComponentProps } from "../../types/components/custom-div-component.type";

export default function CustomLoading(props: CustomDivComponentProps<{}>) {
  return (
    <div {...props} style={{ ...props.style, ...styles.container }}>
      <ActivityIndicator size="large" />
    </div>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
