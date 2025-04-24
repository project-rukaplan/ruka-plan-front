import { Stack } from "expo-router";
import Storage from "../context";

export default function RootLayout() {
  return (
    <Storage>
      <Stack>
        <Stack.Screen name="(views)" options={{ headerShown: false }} />
      </Stack>
    </Storage>
  );
}
