import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Text>Well, this is kinda cool.</Text>
      <View
        style={{
          height: 1,
          backgroundColor: "black",
          alignSelf: "stretch",
          marginHorizontal: 5,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "flex-start",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
