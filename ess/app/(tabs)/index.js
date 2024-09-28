import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native';
import React from 'react';
import { useRouter, Stack } from "expo-router"; // Add Stack import
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const Home = () => {
    const router = useRouter();

    return (
        <>
            {/* This hides the header */}
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.menu} onPress={() => router.push('/requests')}>
                    <Ionicons name="list-outline" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.profile} onPress={() => router.push('/profile')}>
                    <Ionicons name="person-circle-outline" size={32} color="black" />
                </TouchableOpacity>

            </View>
            <View style={styles.container}>
                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Feather name="search" size={24} color="black" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                    />
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

            </View>
        </>
    );
};

export default Home;

// Styles remain the same
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 0,
        borderRadius: 20,
        paddingHorizontal: 45,
        fontWeight: "500",
        height: 60,
        backgroundColor: '#f5f5f5',
    },
    searchIcon: {
        position: 'absolute',
        left: 15,
        top: 17,
        zIndex: 1,
        fontWeight: "300",
    },
    itemsContainer: {
        flex: 1,
    },
    menu:
    {
        paddingLeft: 30,
    },
    profile:
    {
        paddingRight: 30,
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
        paddingTop: 75,
    },
    headingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        marginTop: 20,
        fontSize: 24,
    },
});
