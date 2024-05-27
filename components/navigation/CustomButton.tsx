import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7} style={styles.btnContainer}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: "#18ba30",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 38,
        borderRadius: 5,
        marginTop: 5,
    },
    btnText: {
        textAlign: "center",
        fontWeight: 500,
        fontSize: 15,
        color: "white"
    }
})