import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [upgrade1, setUpgrade1] = useState(0);
  const [upgrade2, setUpgrade2] = useState(0);
  const [upgrade3, setUpgrade3] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setClicks((clicks) => clicks + upgrade1);
    }, 1000);
    return () => clearInterval(intervalId1);
  }, [upgrade1]);

  useEffect(() => {
    const intervalId2 = setInterval(() => {
      setClicks((clicks) => clicks + upgrade2 * 10);
    }, 1000);
    return () => clearInterval(intervalId2);
  }, [upgrade2]);

  useEffect(() => {
    const intervalId3 = setInterval(() => {
      setClicks((clicks) => clicks + upgrade3 * 100);
    }, 1000);
    return () => clearInterval(intervalId3);
  }, [upgrade3]);

  const handleUpgrade1 = () => {
    if (clicks >= 10) {
      setClicks(clicks - 10);
      setUpgrade1(upgrade1 + 1);
    }
  };

  const handleUpgrade2 = () => {
    if (clicks >= 100) {
      setClicks(clicks - 100);
      setUpgrade2(upgrade2 + 1);
    }
  };

  const handleUpgrade3 = () => {
    if (clicks >= 1000) {
      setClicks(clicks - 1000);
      setUpgrade3(upgrade3 + 1);
    }
  };

  const reset = () => {
    setClicks(0);
    setUpgrade1(0);
    setUpgrade2(0);
    setUpgrade3(0);
  };

  return (
    <View style={styles.container}>
      <Text className="text-black text-xl">{clicks}</Text>
      <Pressable onPress={handleClicks} className="bg-black w-40 h-10">
        <Text className="text-white text-center">Click me</Text>
      </Pressable>
      <Pressable onPress={handleUpgrade1} className="bg-black w-40 h-10 m-3">
        <Text className="text-white text-center">1 click per second</Text>
        <Text className="text-white text-center">Upgrade Price: 10</Text>
      </Pressable>
      <Pressable onPress={handleUpgrade2} className="bg-black w-40 h-10 m-3">
        <Text className="text-white text-center">10 click per second</Text>
        <Text className="text-white text-center">Upgrade Price: 100</Text>
      </Pressable>
      <Pressable onPress={handleUpgrade3} className="bg-black w-40 h-10 m-3">
        <Text className="text-white text-center">100 click per second</Text>
        <Text className="text-white text-center">Upgrade Price: 1000</Text>
      </Pressable>
      <Pressable onPress={reset} className="bg-black w-40 h-10 m-3">
        <Text className="text-white text-center">Reset</Text>
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
