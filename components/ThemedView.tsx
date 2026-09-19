import { View, useColorScheme } from 'react-native';
import { ComponentProps } from 'react';
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThemedViewProps extends ComponentProps<typeof View> {
  safe?: boolean;
}

const ThemedView = ({ style, safe = false, ...props }: ThemedViewProps) => {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'] ?? Colors.light

  if (!safe) return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  )

  // Using insets because <SafeAreaView> doesn't work well with expo-router's <Stack> component
  const insets = useSafeAreaInsets()

  return (
    <View 
      style={[{ 
        backgroundColor: theme.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }, style]} 
      {...props}
    />
  )
}

export default ThemedView;