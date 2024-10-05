// ProductList.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ProductList = ({ route }) => {
    const { product } = route.params; // Get product details from navigation params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.name}</Text>
            <Image source={{ uri: product.imageUri }} style={styles.image} />
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            {/* Add more details or a list of related products here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4c81d8',
    },
});

export default ProductList;
