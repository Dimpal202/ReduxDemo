import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux'


const Header = () => {
  const cartData=useSelector((state)=>state.reducer)
  const [cartItem, setCartItem]=useState(0)
  useEffect(()=>{
    setCartItem(cartData.length)
  },[cartData])
  // console.warn(cartData)
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,textAlign:"right",padding:5}}>{cartItem}</Text>
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
export default Header;