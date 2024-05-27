import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
}) => {

  return (
    <View style={styles.form}>
        
      <Text style={{ marginVertical: 3 }}>{title}</Text>
      <View>
        <TextInput style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
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
