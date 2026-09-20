import { TextInput, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'
import { ComponentProps } from 'react';

const ThemedTextInput = ({ style, ...props }: ComponentProps<typeof TextInput>) => {

  const colorScheme = useColorScheme();
    const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'] ?? Colors.light

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style
      ]}
      {...props}
    >

    </TextInput>
  )
}

export default ThemedTextInput;
