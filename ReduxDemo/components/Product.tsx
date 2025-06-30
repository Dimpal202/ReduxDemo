import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/action';

const Product = (props) => {
  const item = props.item
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.reducer)
  const [isAdded, setisAdded] = useState(false)

  const handleAddtoCart = () => {
    console.warn("called:", item.name)
    dispatch(addToCart(item))
  }

  const handleRemoveCart = () => {
    dispatch(removeFromCart(item.name))
  }
  useEffect(() => {
    // if(cartItem && cartItem.length){
    //   cartItem.forEach((element) => {
    //     console.warn(element)
    //     if(element.name===item.name){
    //       setisAdded(true)
    //     }
    //   });
    // }
    let result = cartItems.filter((element) => {
      return element.name === item.name
    })
    if (result.length) {
      setisAdded(true)
    } else {
      setisAdded(false)
    }
  }, [cartItems])
  return (
    <View style={styles.container}>
      <Text style={styles.nametext}>{item.name}</Text>
      <Text style={styles.nametext}>{item.color}</Text>
      <Text style={styles.nametext}>{item.price}</Text>
      <Image style={{ height: 200, width: 200 }} source={{ uri: item.image }} />
      {isAdded ?
        <TouchableOpacity style={{ backgroundColor: "pink", alignItems: "center", marginBottom: 30, }} onPress={handleRemoveCart}>
          <Text style={styles.addtext}>Remove To Cart</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={{ backgroundColor: "pink", alignItems: "center", marginBottom: 30, }} onPress={handleAddtoCart}>
          <Text style={styles.addtext}>Add To Cart</Text>
        </TouchableOpacity>
      }

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
export default Product;