import { Tabs } from "expo-router";

export default function DashboardLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Overview" }} />
      <Tabs.Screen name="index3" options={{ title: "Overview" }} />
      <Tabs.Screen name="index2" options={{ title: "Overview" }} />

      
    </Tabs>
  );
}
