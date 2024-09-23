import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Formik } from "formik";
import { useRouter, Stack } from "expo-router";
import * as Yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                <Text style={styles.title}>Login</Text>
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
                                router.push("/(tabs)");
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
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
  button: {
    height: 50,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
