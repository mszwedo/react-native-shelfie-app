import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#ddd', // blue: #5977b4'
            },
            headerTintColor: '#333',
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
            <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
        </Stack>
    )
}

export default RootLayout
const styles = StyleSheet.create({})
