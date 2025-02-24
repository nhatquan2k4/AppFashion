import React from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Profile = ({ isVisible, toggleProfile, profileAnim }) => {
  return (
    <>
      {/* Nền mờ khi Profile mở */}
      {isVisible && <TouchableOpacity style={styles.overlay} onPress={toggleProfile} />}

      {/* Bảng Profile */}
      <Animated.View style={[styles.profilePanel, { left: profileAnim }]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LogOut</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  profilePanel: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 0 },
    elevation: 10,
    zIndex: 100, // Luôn nổi trên cùng
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 99,
  },
  button: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "black",
  },
});

export default Profile;