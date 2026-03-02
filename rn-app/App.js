import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to your React Native app!');

  const messages = [
    'Welcome to your React Native app!',
    'You tapped the button!',
    'React Native + Expo = 🚀',
    'iOS and Android ready!',
    'CI/CD pipeline configured!',
  ];

  const handleTap = () => {
    setCount(count + 1);
    setMessage(messages[count % messages.length]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>🚀 rn-app</Text>
          <Text style={styles.subtitle}>Powered by Expo</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.message}>{message}</Text>
        </View>

        <View style={styles.counter}>
          <Text style={styles.counterText}>Taps: {count}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleTap}>
          <Text style={styles.buttonText}>Tap Me!</Text>
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Platform Info</Text>
          <Text style={styles.infoText}>
            iOS Bundle: com.evan.rnapp
          </Text>
          <Text style={styles.infoText}>
            Android: Ready for testing
          </Text>
          <Text style={styles.infoText}>
            CI/CD: GitHub Actions configured
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4FE',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  counter: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  button: {
    backgroundColor: '#1a73e8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});
