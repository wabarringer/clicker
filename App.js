import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };

  const handleUpgrade1 = () => {
    if (clicks >= 10) {
      setClicks(clicks - 10);
      setInterval(() => {
        // Define what (clicks) => clicks + 1 is doing
        setClicks((clicks) => clicks + 1);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <Text className="text-black text-xl">{clicks}</Text>
      <Pressable onPress={handleClicks} className="bg-black w-40 h-10">
        <Text className="text-white text-center">Click me</Text>
      </Pressable>
      <Pressable onPress={handleUpgrade1} className="bg-black w-40 h-10 m-5">
        <Text className="text-white text-center">1 click per second</Text>
        <Text className="text-white text-center">Upgrade Price: 10</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
