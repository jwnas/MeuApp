import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>About Screen</Text>
      <Button title="Ir para Home" onPress={() => router.push('/(tabs)/index')} />
    </View>
  );
}
