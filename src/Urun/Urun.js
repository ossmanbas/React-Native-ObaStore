import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './urun.style';

const Urun = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={{color: 'red', fontSize: 15}}>
        {product.inStock === true ? '' : 'Stokta Yok'}
      </Text>
    </View>
  );
};

export default Urun;
