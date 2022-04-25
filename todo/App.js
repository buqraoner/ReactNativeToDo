import React from "react";
import { SafeAreaView } from "react-native";

//Components
import Header from "./src/components/Header/Header";
import TodoList from "./src/components/Todolist";






const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <TodoList />
    </SafeAreaView>
  );
}

export default App;
