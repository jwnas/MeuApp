import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Modal Screen</ThemedText>

      {/* Link para voltar à Home dentro das abas */}
      <Link href="/(tabs)/index" dismissTo style={styles.link}>
        <ThemedText type="link">Ir para Home</ThemedText>
      </Link>

      {/* Link para About dentro das abas */}
      <Link href="/(tabs)/about" dismissTo style={styles.link}>
        <ThemedText type="link">Ir para About</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
