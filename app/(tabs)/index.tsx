import React from 'react';
import { StatusBar, StyleSheet, Text, View, VirtualizedList } from 'react-native';

const DATA: any[] = [];

const getItem = (_data: any, index: number) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data: any) => 100;

const Item = ({ title }: { title: string }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Index() {
  return (
    <View style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}   // ✅ corrigido para usar id
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#0000ff',
    height: 100,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
  },
  title: {
    fontSize: 22,
    color: '#fff',
  },
});
