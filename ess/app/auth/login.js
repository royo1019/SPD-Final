import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Formik } from "formik";
import { useRouter, Stack } from "expo-router";
import * as Yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from '@expo/vector-icons/AntDesign';

const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email().label("Email"),
    password: Yup.string()
        .required("Password is required")
        .min(4)
        .label("Password"),
});

const Login = () => {
    const router = useRouter();

    return (
        <>
            {/* This hides the header showing 'auth/login' */}
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.back_arrow} onPress={() => router.push("/")}>
                    <AntDesign style={styles.back_arrow} name="left" size={24} color="black" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Login to Essenshare</Text>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        fetch("http://192.168.98.174:5000/api/auth/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email: values.email,
                                password: values.password,
                            }),
                        })
                            .then((res) => res.json())
                            .then(async (data) => {
                                if (data.token) {
                                    console.log("Login successful:", data);
                                    // Store token in AsyncStorage
                                    await AsyncStorage.setItem('token', data.token);
                                    // Navigate to your protected page
                                    router.push("/(tabs)/index");
                                } else {
                                    Alert.alert("Login failed", data.message);
                                }
                            })
                            .catch((err) => {
                                console.error("Error:", err);
                                Alert.alert("Error", "An error occurred while logging in.");
                            })
                            .finally(() => setSubmitting(false));
                    }}
                    validationSchema={validationSchema}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <View style={styles.form}>

                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            {errors.email && touched.email ? (
                                <Text style={styles.errorText}>{errors.email}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                secureTextEntry
                            />

                            {errors.password && touched.password ? (
                                <Text style={styles.errorText}>{errors.password}</Text>
                            ) : null}
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push('/auth/register')}>
                                <Text style={styles.container}>Don't have an account? Sign Up!</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",
        textAlign: 'center',
        fontWeight: '600',
        paddingVertical: 40,
        color: '#7d7d7d',
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 24,
    },
    form: {
        width: "100%",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 16,
        marginBottom: 16,
        width: 300,
        backgroundColor: "#fff",
        alignSelf: "center", // Center horizontally within the container
    },
    errorText: {
        color: "red",
        marginBottom: 16,
    },
    back_arrow:
    {
        position: 'absolute',
        top: 30, // Adjust this value as needed
        left: 10, // Distance from the left
        zIndex: 1, // Ensure the icon is on top of other components
    },
    backText: {
        position: 'absolute',
        top: 32, // Adjust this value as needed
        left: 35, // Distance from the left
        zIndex: 1,
        color: "black",
        fontWeight: "700",
        fontSize: 16,
    },
    button: {
        height: 50,
        backgroundColor: "#6200ea",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 16,
        width: 200,
        alignSelf: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    signup: {
        color: "#7d7d7d",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
        alignItems: "center",
        position: "absolute",
        top: 230,
        width: "100%",
    }
});
