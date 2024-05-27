import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from './navigation/CustomButton';

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
    <View style={styles.container}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.btnContainer} >
              <CustomButton
                title="Choose File"
                handlePress={pickImage}
                // isLoading={isSubmitting}
                />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: 420,
    marginVertical: 20,
    borderRadius: 250,
  },
  btnContainer: {
    backgroundColor: "#18ba30",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 38,
    borderRadius: 5,
    marginTop: 5,
}
});
