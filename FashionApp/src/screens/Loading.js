import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import LoadingOverlay from "../components/LoadingOverlay";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Giả lập quá trình loading trong 3 giây
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Hiển thị Loading</Text>
      </TouchableOpacity>

      {/* Sử dụng Component LoadingOverlay */}
      <LoadingOverlay visible={loading} text="Vui lòng chờ..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Loading;
