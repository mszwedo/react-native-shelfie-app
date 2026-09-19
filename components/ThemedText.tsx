import { Text, useColorScheme } from 'react-native';
import { ComponentProps } from 'react';
import { Colors } from '../constants/Colors'

interface ThemedTextProps extends ComponentProps<typeof Text> {
  title?: boolean;
}

const ThemedText = ({ style, title = false, ...props }: ThemedTextProps) => {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'] ?? Colors.light
  const textColor = title ? theme.title : theme.text

  return (
    <Text 
      style={[{ color: textColor }, style]}
      {...props}  
    />
  )
}

export default ThemedText;