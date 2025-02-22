import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import Toolbar from "../Components/Toolbar";
import Brand from "../Components/Brand";
import Watch from "../Components/Watch";
import Profile from "../Screen/Profile";

const HomeScreen = () => {
  const [isProfileVisible, setProfileVisible] = useState(false);
  const profileAnim = useRef(new Animated.Value(-250)).current; // Ẩn ban đầu

  const toggleProfile = () => {
    const toValue = isProfileVisible ? -250 : 0;
    Animated.timing(profileAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false, // Không dùng useNativeDriver vì 'left' không được hỗ trợ
    }).start();
    setProfileVisible(!isProfileVisible);
  };

  return (
    <View style={styles.container}>
      {/* Thanh toolbar */}
      <Toolbar toggleProfile={toggleProfile} />

      {/* Bảng Profile (luôn ở trên cùng) */}
      <Profile isVisible={isProfileVisible} toggleProfile={toggleProfile} profileAnim={profileAnim} />

      {/* Nội dung trang chủ */}
      <Brand />
      <Text style={styles.text}>Danh sách sản phẩm</Text>
      <Watch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#f8f8f8",
    position: "relative", // Để các phần tử con có thể xếp chồng lên nhau
  },
  text: {
    fontSize: 20,
    color: "black",
    marginTop: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
