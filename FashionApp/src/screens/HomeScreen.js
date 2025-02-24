import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, FlatList, ActivityIndicator, Image } from "react-native";
import axios from "axios";
import Toolbar from "../components/Toolbar";
import Brand from "../components/Brand";
import Watch from "../components/Watch";
import Profile from "./Profile";


const HomeScreen = () => {

  const [isProfileVisible, setProfileVisible] = useState(false);
  const profileAnim = useRef(new Animated.Value(-250)).current;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/products/get")
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Lỗi khi tải sản phẩm:", error);
        setLoading(false);
      });
  }, []);

  const toggleProfile = () => {
    const toValue = isProfileVisible ? -250 : 0;
    Animated.timing(profileAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setProfileVisible(!isProfileVisible);
  };

  return (
    <View style={styles.container}>
      <Toolbar toggleProfile={toggleProfile} />
      <Profile isVisible={isProfileVisible} toggleProfile={toggleProfile} profileAnim={profileAnim} />
      <Brand />
      <Text style={styles.text}>Danh sách sản phẩm</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              {/* Hiển thị ảnh sản phẩm */}
              <Image source={{ uri: item.colors[0].image_url }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>Giá: {item.price} VNĐ</Text>
                <Text style={styles.productBrand}>Thương hiệu: {item.brand}</Text>
              </View>
            </View>
          )}
        />

      )}

      <Watch />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#f8f8f8",
    position: "relative",
  },
  text: {
    fontSize: 20,
    color: "black",
    marginTop: 20,
    textAlign: "center",
  },
  productItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#e74c3c",
  },
  productBrand: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
