import React, { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "./navigation/CustomButton";

import Logo from "../assets/images/logo.png";
import { ScrollView } from "react-native-gesture-handler";

export default function UploadButton() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    // <View style={styles.container}>
    //   {image && <Image source={{ uri: image }} style={styles.image} />}

    //   <Button title="Pick an image from gallery" onPress={pickImage} />
    // </View>
    <ScrollView>
      <View style={styles.container}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Image source={Logo} style={styles.image} />
        )}
        <View style={styles.btnContainer}>
          <CustomButton
            title="Change Profile"
            handlePress={pickImage}
            // isLoading={isSubmitting}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 300,
    marginVertical: 10,
    borderRadius: 300,
  },
  btnContainer: {
    // backgroundColor: "#18ba30",
    width: "100%",
    height: 38,
  },
});
