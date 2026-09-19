import { View, useColorScheme } from 'react-native';
import { ComponentProps } from 'react';
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, ...props }: ComponentProps<typeof View>) => {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'] ?? Colors.light

  return (
    <View 
      style={[{ backgroundColor: theme.background }, style]}
      {...props}  
    />
  )
}

export default ThemedView;