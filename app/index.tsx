import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemeLogo';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={[styles.title, {color: '#5977b4'}]} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      {/* <View style={styles.card}>
        <Text>Hello, this is a card.</Text>
      </View> */}

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home;

// Could also use Native Wind to get Tailwind classes in your template
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
  // card: {
  //   backgroundColor: '#eee',
  //   padding: 20,
  //   borderRadius: 5,
  //   boxShadow: '4px 4px rgba(0,0,0,0.1)'
  // }
})