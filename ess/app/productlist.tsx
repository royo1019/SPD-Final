// ProductsList.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductsList = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Products List</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default ProductsList;
