import React from "react";
import { StyleSheet, View } from "react";
import LoginForm from "./UI/componentes/loginForm";


export default function App() {
  return (
    <View style={StyleSheet.container}>
        <LoginForm />
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/