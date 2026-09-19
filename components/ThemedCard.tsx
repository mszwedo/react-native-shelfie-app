import { View, StyleSheet, useColorScheme } from 'react-native';
import { ComponentProps } from 'react';
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, ...props }: ComponentProps<typeof View>) => {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'] ?? Colors.light

  return (
    <View 
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}  
    />
  )
}

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20  
  }
})