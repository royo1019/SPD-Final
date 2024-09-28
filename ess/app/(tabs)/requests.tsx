import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Requests = () => {
    const [requestType, setRequestType] = useState(null);
    const [duration, setDuration] = useState('');
    const router = useRouter();
    const handleBuy = () => {
        router.push('/productlist');
    };

    const handleBorrow = () => {
        if (duration === '') {
            Alert.alert('Please specify the duration for borrowing.');
        } else {

            Alert.alert(`You have borrowed the product for ${duration} days.`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product Request</Text>
            <Button
                title="Buy"
                onPress={() => setRequestType('buy')}
            />
            <Button
                title="Borrow"
                onPress={() => setRequestType('borrow')}
            />
            {requestType === 'borrow' && (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter duration (in days)"
                        keyboardType="numeric"
                        value={duration}
                        onChangeText={setDuration}
                    />
                </View>
            )}
            <Button
                title="Submit"
                onPress={requestType === 'buy' ? handleBuy : handleBorrow}
            />
        </View>
    );
};

export default Requests;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    inputContainer: {
        marginVertical: 20,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
});
