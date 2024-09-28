import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Video, ResizeMode } from "expo-av";
import { useRouter } from 'expo-router';

const Home = () => {
  const video = React.useRef(null);

  const router = useRouter()

  return (
    <View style={styles.container}>
      { /* Video player */}
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://cdn.pixabay.com/video/2024/09/06/230060_large.mp4",

        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
      />
      <View style={styles.overlay}>
        <Text style={styles.mainText}>Essenshare</Text>
        <Text style={styles.tagline}>Share What Matters,When It Matters!</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => router.push("/(tabs)")}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  mainText: {
    color: "white",
    fontSize: 68,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  tagline: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 280,
    left: 0,
    right: 0,
    color: "white",

  },
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3,
    width: 200,
    height: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textAlignVertical: "center",
    color: "black"
  },
})