import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductDetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Ảnh sản phẩm */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Image source={{uri: "https://res-console.cloudinary.com/dfqdh40iu/media_explorer_thumbnails/910475c266b6bda96924172fe6ddc6d3/detailed"}} style={styles.productImage} />
          <TouchableOpacity style={styles.wishlistButton}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Chi tiết sản phẩm */}
        <View style={styles.detailsContainer}>
          <Text style={styles.brand}>Nike</Text>
          <Text style={styles.productName}>Nike 1</Text>
          <View style={styles.row}>
            <View style={styles.rating}>
              {[...Array(4)].map((_, index) => (
                <Ionicons key={index} name="star" size={16} color="gold" />
              ))}
              <Ionicons name="star-outline" size={16} color="gold" />
              <Text style={styles.ratingText}>(4.5)</Text>
            </View>
            <Text style={styles.price}>4500000</Text>
          </View>

        {/* Chọn số lượng */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
          
          {/* Mô tả sản phẩm */}
          <Text style={styles.sectionTitle}>DESCRIPTION</Text>
          <Text style={styles.description}>Sự kiện ngon</Text>
        </View>
      </ScrollView>

      {/* Chọn size và nút thêm vào giỏ hàng */}
      <View style={styles.footer}>
        <View style={styles.sizeContainer}>
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <TouchableOpacity
              key={size}
              style={[styles.sizeButton, selectedSize === size && styles.selectedSize]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={[styles.sizeText, selectedSize === size && styles.selectedSizeText]}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Ionicons name="cart-outline" size={24} color="white" />
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f8f8f8",
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "white",
  },
  productImage: {
    width: 200,
    height: 220,
    resizeMode: "contain",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 40,
  },
  wishlistButton: {
    position: "absolute",
    right: 20,
    top: 40,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "white",
  },
  brand: {
    fontSize: 14,
    color: "gray",
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: "gray",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginVertical: 10,
  },
  footer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  sizeButton: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedSize: {
    backgroundColor: "#8077fe",
  },
  sizeText: {
    fontSize: 16,
  },
  selectedSizeText: {
    color: "white",
    fontWeight: "bold",
  },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: "#8077fe",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
    quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default ProductDetailScreen;
