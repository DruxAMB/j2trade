import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
}) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.form}>
        
      <Text style={{ marginVertical: 3 }}>{title}</Text>
      <View>
        <TextInput style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
    form: {
        marginVertical: 12
    },
    input: {
        height: 40,
        borderColor: "#9BB3A0",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    }
});
