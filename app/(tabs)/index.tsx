import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Home Screen</Text>

      {/* Navegar para About */}
      <Button title="Ir para About" onPress={() => router.push('/(tabs)/about')} />

      {/* Abrir Modal global */}
      <Button title="Abrir Modal" onPress={() => router.push('/modal')} />
    </View>
  );
}
