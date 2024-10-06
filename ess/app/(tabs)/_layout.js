import { Tabs } from "expo-router";
import { StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';

export default function RootLayout() {
    // Shared value for animation
    const translateY = useSharedValue(0);

    useEffect(() => {
        // Start the animation when the component mounts
        translateY.value = withTiming(0, { duration: 300 }); // Adjust the duration as needed
    }, []);

    // Animated style for the tab bar
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <Tabs
                screenOptions={{
                    headerShown: false, // Hide the header for all screens
                    tabBarStyle: styles.tabBar, // Apply unique styles to the tab bar
                }}
            >
                {/* Define your screens here */}
                <Tabs.Screen name="index" options={{ title: 'Home' }} />
                <Tabs.Screen name="othersrequests" options={{ title: 'Others requests' }} />
                <Tabs.Screen name="myrequests" options={{ title: 'My Requests' }} />
                <Tabs.Screen name="lentrequests" options={{ title: 'Lent Requests' }} />
            </Tabs>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
});
