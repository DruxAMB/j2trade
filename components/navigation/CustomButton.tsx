import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const CustomButton = ({ title, handlePress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.btnContainer, isPressed && styles.btnContainerPressed]}
    >
      <Text style={[styles.btnText, isPressed && styles.btnTextPressed ]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#18ba30",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 42,
    borderRadius: 5,
    marginTop: 5,
  },
  btnContainerPressed: {
    backgroundColor: "white", // Change to the color you want when the button is pressed
  },
  btnText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
    color: "white",
  },
  btnTextPressed: {
    color: "#18ba30"
  }
});
