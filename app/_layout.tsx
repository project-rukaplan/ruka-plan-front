import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(views)" options={{ headerShown: false }} />
    </Stack>
  );
}
