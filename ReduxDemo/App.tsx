import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Header from './components/Header'
import Product from './components/Product'


const App = () => {


  const products = [
    {
      name: 'Samsung Mobile',
      color: "white",
      price: 30000,
      image:'https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM='
    },
    {
      name: 'Apple I Phone',
      color: "white",
      price: 130000,
      image:'https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM='
    },
    {
      name: 'Nokia Mobile',
      color: "white",
      price: 20000,
      image:'https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM='
    }
  ]
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header />
        {products.map((item) =><Product item={item}/>)}
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  nametext: {
    fontSize: 15,
    color: "black"
  },
  addtext: {
    fontSize: 20,
    color: "blue"
  }
})
export default App;