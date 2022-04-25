import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";

//Components
import Header from "./src/components/Header/Header";
import TodoList from "./src/components/Todolist";






const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslateblue",
  },
});

export default App;
