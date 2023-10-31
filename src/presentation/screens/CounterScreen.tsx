import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { isAndroid } from '../../utils/platformOS';
import { PrimaryButton } from '../components';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <PrimaryButton
        label="Incrementar"
        onPress={() => setCount(currentCount => currentCount + 1)}
        onLongPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
