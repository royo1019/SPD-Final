import {Stack} from "expo-router";
import Home from ".";

export default function RootLayout(){

    return (
        <Stack>
            <Stack.Screen
            name="index" options={{headerShown: false,title: "Home"}}/>

            
        </Stack>
    )

}