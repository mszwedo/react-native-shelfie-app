import { Stack } from 'expo-router'
import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'] ?? Colors.light

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerStyle: {
            backgroundColor: theme.navBackground, // blue: #5977b4'
        },
        headerTintColor: theme.title,
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
      </Stack>
    </>
  )
}

export default RootLayout
const styles = StyleSheet.create({})
