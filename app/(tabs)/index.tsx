import { Link } from "expo-router";
import React, { useState, useEffect, useRef } from "react";


import {Tabs} from 'expo-router';
// Update the import path to use a relative path and forward slashes
// Update the import path to use a relative path and forward slashes
import {images} from '@/constants/images';
import { icons } from '@/constants/icons';
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from "react-native";

const FloatingLabelInput = ({ label, value, setValue, secureTextEntry = false }) => {
  const isFocused = value !== '';
  const labelAnim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(labelAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const labelStyle = {
    position: "absolute",
    left: 10,
    top: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [12, -10],
    }),
    fontSize: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: "#888",
    backgroundColor: "#fff",
    paddingHorizontal: 2,
    borderRadius: 12,
  };

  return (
    <View style={styles.inputContainer}>
      
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          if (!isFocused) Animated.timing(labelAnim, { toValue: 1, duration: 200, useNativeDriver: false }).start();
        }}
        onBlur={() => {
          if (value === '') Animated.timing(labelAnim, { toValue: 0, duration: 200, useNativeDriver: false }).start();
        }}
      />
    </View>
  );
};

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={images.Luffy}
        style={{ width: 150, height: 150, marginBottom: 20 }}
      />
      <Text style={styles.heading}>Tech-Streak🔥</Text>
      <FloatingLabelInput label="Email" value={email} setValue={setEmail} />
      <FloatingLabelInput label="Password" value={password} setValue={setPassword} secureTextEntry />

      {/* <TouchableOpacity style={styles.button}> */}
        {/* <Text style={{ color: '#fff', textAlign: 'center' }}>Sign Up</Text> */}
      {/* </TouchableOpacity> */}


      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>

      <Link href="/forgot-password" style={{ marginTop: 20, color: '#007bff', textDecorationLine: 'underline' }}>Forgot Password?</Link>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#000",
  },
  inputContainer: {
    width: 250,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginBottom: 15,
    paddingTop: 12,
    paddingHorizontal: 10,
    position: "relative",
    backgroundColor: "#fff",
  },
  textInput: {
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    width: 250,
    borderRadius: 6,
  },
  heading: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    position: "absolute",
    left: 10,
    top: 12,
    fontSize: 16,
    // color: "#888",
    // backgroundColor: "#fff",
    paddingHorizontal: 2,
  },
  labelStyle: {
    position: "absolute",
    left: 10,
    top: 12,
    fontSize: 16,
    // color: "#888",
    // backgroundColor: "#fff",
    // paddingHorizontal: 2,
  },
});
