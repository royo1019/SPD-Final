import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for essential items..."
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Essential Items List (You can populate this dynamically) */}
            <ScrollView style={styles.itemsContainer}>
                <Text style={styles.sectionTitle}>Available Items:</Text>
                {/* Example Items */}
                <View style={styles.item}>
                    <Text style={styles.itemText}>Iron Box</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Kettle</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Study Lamp</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Extension Cord</Text>
                </View>
                {/* Add more items as needed */}
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => router.push('/profile')}>
                    <Ionicons name="person-circle-outline" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/request-history')}>
                    <Ionicons name="list-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    searchButton: {
        marginLeft: 8,
        backgroundColor: '#6200ea',
        padding: 10,
        borderRadius: 8,
    },
    itemsContainer: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderTopWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
});
