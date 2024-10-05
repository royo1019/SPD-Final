import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false, // Hide the header for all screens
                tabBarStyle: {
                    display: 'none', // Hide the tab bar completely
                },
            }}
        >
            {/* Define your screens here */}
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="ProductList" options={{ title: 'Products' }} />
            {/* Add other screens as needed */}
        </Tabs>
    );
}
