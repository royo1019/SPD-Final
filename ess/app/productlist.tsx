import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ProductsList = ({ route }) => {
    const router = useRouter();
    console.log('Full route params:', route?.params?.product);
    const product = route?.params?.product;
    console.log('Received product:', product); // Log to verify

    useEffect(() => {
        console.log('Received product:', product); // Log when component mounts
    }, [product]);

    return (
        <View style={styles.container}>
            {product ? (
                <>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.detail}>Description: {product.description}</Text>
                    <Text style={styles.detail}>Price: ${product.price}</Text>
                    <Text style={styles.detail}>Category: {product.category}</Text>
                </>
            ) : (
                <Text>No product details available.</Text>
            )}
            <Button title="Go Back" onPress={() => router.back()} />
        </View>
    );
};


// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#e3f2f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detail: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default ProductsList;
