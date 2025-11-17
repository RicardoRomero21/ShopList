import { useState } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

export default function ItemInput(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  function onPressButtonHandler() {
    console.log(enteredItemText);
    props.onPress(enteredItemText);
    setEnteredItemText(''); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escriba el artículo a comprar"
          onChangeText={(text) => setEnteredItemText(text)}
          value={enteredItemText}
        />
      </View>
      <Button title="Agregar" onPress={onPressButtonHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 24,
  },
  textInputContainer: {
    flex: 1,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "lightgray",
    marginRight: 8,
  },
  textInput: {
    fontSize: 16,
    padding: 8,
  },
});