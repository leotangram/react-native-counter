import { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        label="+1"
        onPress={() => setCount(currentCount => currentCount + 1)}
        onLongPress={() => setCount(0)}
        style={globalStyles.fab}
      />
    </View>
  );
};
