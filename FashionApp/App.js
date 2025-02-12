import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductList from './ProductList.js'; // Đường dẫn tới file ProductList.js

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { marginBottom: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
});


export default App;
